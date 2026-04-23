import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const sRef = useRef<HTMLSpanElement>(null);
  const cRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline();

    gsap.set([sRef.current, cRef.current], { opacity: 0, y: 32 });
    gsap.set(taglineRef.current, { opacity: 0 });
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left center' });

    tl.to(sRef.current,    { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, 0.1)
      .to(cRef.current,    { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, 0.22)
      .to(taglineRef.current, { opacity: 1, duration: 0.5,  ease: 'power2.out' },    0.45)
      .to(progressRef.current, { scaleX: 1, duration: 1.7,  ease: 'power2.inOut' }, 0.35);

    const minWait = new Promise<void>(res => setTimeout(res, 2400));
    const windowLoad = new Promise<void>(res => {
      if (document.readyState === 'complete') res();
      else window.addEventListener('load', () => res(), { once: true });
    });

    Promise.all([minWait, windowLoad]).then(() => {
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
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] bg-[#fcfcfc] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Faint background watermark */}
      <div className="absolute text-[40vw] font-black text-slate-900/[0.025] tracking-tighter leading-none select-none pointer-events-none">
        SC
      </div>

      {/* Monogram */}
      <div className="relative flex items-end gap-2 mb-5 select-none">
        <span
          ref={sRef}
          className="text-[88px] md:text-[120px] font-black tracking-tighter leading-none text-slate-900"
        >
          S
        </span>
        <span
          ref={cRef}
          className="text-[88px] md:text-[120px] font-black tracking-tighter leading-none text-[#005bb7]"
        >
          C
        </span>
      </div>

      {/* Tagline */}
      <div
        ref={taglineRef}
        className="mono text-[9px] md:text-[11px] font-black uppercase tracking-[0.55em] text-slate-400"
      >
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
