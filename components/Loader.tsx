import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

// SVG coordinate waypoints — feet land on top of each stair tread
const WAYPOINTS = [
  { x: -20, y: 116 },  // enter from off-screen left
  { x:  28, y:  92 },  // step 1
  { x:  68, y:  68 },  // step 2
  { x: 108, y:  44 },  // step 3
  { x: 148, y:  20 },  // step 4 (top)
  { x: 252, y:  20 },  // exit off-screen right
];

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const loaderRef   = useRef<HTMLDivElement>(null);
  const figureRef   = useRef<SVGGElement>(null);
  const legLRef     = useRef<SVGLineElement>(null);
  const legRRef     = useRef<SVGLineElement>(null);
  const armLRef     = useRef<SVGLineElement>(null);
  const armRRef     = useRef<SVGLineElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const taglineRef  = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const fig  = figureRef.current;
    const legL = legLRef.current;
    const legR = legRRef.current;
    const armL = armLRef.current;
    const armR = armRRef.current;
    if (!fig || !legL || !legR || !armL || !armR) return;

    // Place figure at entry position, hidden
    gsap.set(fig, { x: WAYPOINTS[0].x, y: WAYPOINTS[0].y, opacity: 0 });
    gsap.to(fig, { opacity: 1, duration: 0.3, delay: 0.15 });

    // Walking cycle — animate SVG line endpoints (avoids SVG transform-origin quirks)
    const stride = gsap.timeline({ repeat: -1 });
    stride
      // Pose A: left foot stepping up-forward
      .to(legL, { attr: { x2: -13, y2: -3 }, duration: 0.24, ease: 'power1.inOut' }, 0)
      .to(legR, { attr: { x2:  8,  y2:  2 }, duration: 0.24, ease: 'power1.inOut' }, 0)
      .to(armL, { attr: { x2: -14, y2: -22 }, duration: 0.24, ease: 'power1.inOut' }, 0)
      .to(armR, { attr: { x2:  7,  y2: -31 }, duration: 0.24, ease: 'power1.inOut' }, 0)
      // Pose B: right foot stepping up-forward
      .to(legL, { attr: { x2: -8,  y2:  2 }, duration: 0.24, ease: 'power1.inOut' }, 0.24)
      .to(legR, { attr: { x2: 13,  y2: -3 }, duration: 0.24, ease: 'power1.inOut' }, 0.24)
      .to(armL, { attr: { x2: -7,  y2: -31 }, duration: 0.24, ease: 'power1.inOut' }, 0.24)
      .to(armR, { attr: { x2: 14,  y2: -22 }, duration: 0.24, ease: 'power1.inOut' }, 0.24);

    // Climb along waypoints, then fade out and loop
    const climb = gsap.timeline({ repeat: -1, repeatDelay: 0.05 });
    WAYPOINTS.slice(1).forEach((pt, i) => {
      climb.to(fig, {
        x: pt.x,
        y: pt.y,
        duration: i === WAYPOINTS.length - 2 ? 0.38 : 0.44,
        ease: 'power1.inOut',
      });
    });
    climb
      .to(fig, { opacity: 0, duration: 0.12 })
      .set(fig, { x: WAYPOINTS[0].x, y: WAYPOINTS[0].y })
      .to(fig, { opacity: 1, duration: 0.12 });

    // Tagline fade in
    gsap.set(taglineRef.current, { opacity: 0 });
    gsap.to(taglineRef.current, { opacity: 1, duration: 0.7, delay: 0.5 });

    // Progress bar sweep
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left center' });
    gsap.to(progressRef.current, { scaleX: 1, duration: 1.8, ease: 'power2.inOut', delay: 0.3 });

    // Exit: minimum display time + page load
    const minWait   = new Promise<void>(res => setTimeout(res, 2400));
    const pageReady = new Promise<void>(res => {
      if (document.readyState === 'complete') res();
      else window.addEventListener('load', () => res(), { once: true });
    });

    Promise.all([minWait, pageReady]).then(() => {
      gsap.to(loaderRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'expo.inOut',
        onComplete: () => {
          document.body.style.overflow = '';
          onCompleteRef.current();
        },
      });
    });

    return () => {
      stride.kill();
      climb.kill();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] bg-[#fcfcfc] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Staircase + stick figure */}
      <div className="w-[260px] md:w-[320px]">
        <svg
          viewBox="0 0 240 140"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          {/* Staircase — 4 steps */}
          <path
            d="M 0 116 L 8 116 L 8 92 L 48 92 L 48 68 L 88 68 L 88 44 L 128 44 L 128 20 L 168 20 L 232 20"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left wall of staircase */}
          <line x1="0" y1="116" x2="0" y2="140" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />

          {/* Stick figure — group translated to foot position */}
          <g ref={figureRef}>
            {/* Head */}
            <circle cx="0" cy="-38" r="8" fill="none" stroke="#005bb7" strokeWidth="2.2" />
            {/* Body */}
            <line x1="0" y1="-30" x2="0" y2="-14" stroke="#005bb7" strokeWidth="2.2" strokeLinecap="round" />
            {/* Left arm  — endpoint animated by GSAP */}
            <line ref={armLRef} x1="0" y1="-26" x2="-11" y2="-18" stroke="#005bb7" strokeWidth="2.2" strokeLinecap="round" />
            {/* Right arm */}
            <line ref={armRRef} x1="0" y1="-26" x2="11" y2="-18" stroke="#005bb7" strokeWidth="2.2" strokeLinecap="round" />
            {/* Left leg */}
            <line ref={legLRef} x1="0" y1="-14" x2="-9" y2="0" stroke="#005bb7" strokeWidth="2.2" strokeLinecap="round" />
            {/* Right leg */}
            <line ref={legRRef} x1="0" y1="-14" x2="9" y2="0" stroke="#005bb7" strokeWidth="2.2" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Tagline */}
      <div ref={taglineRef} className="mt-4 mono text-[9px] md:text-[11px] font-black uppercase tracking-[0.55em] text-slate-400">
        Synergy Circle 2026
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-100">
        <div ref={progressRef} className="h-full bg-[#005bb7]" />
      </div>
    </div>
  );
};

export default Loader;
