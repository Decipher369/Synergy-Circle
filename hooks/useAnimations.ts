import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

function isTouchDevice() {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useAnimations(enabled: boolean) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return;

    let lenis: Lenis | null = null;
    let lenisTicker: ((time: number) => void) | null = null;

    // Lenis smooth scroll — desktop / trackpad only
    if (!isTouchDevice()) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenis.on('scroll', ScrollTrigger.update);

      lenisTicker = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(lenisTicker);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Hero SC watermark parallax (desktop only) ─────────────────────────
      mm.add('(hover: hover)', () => {
        gsap.to('.hero-watermark-sc', {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        });

        // Hero "Synergy Circle" sub-watermark drifts at a different rate
        gsap.to('.hero-watermark-text', {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 3,
          },
        });
      });

      // ── Timeline connector line draw ────────────────────────────────────────
      // Desktop: horizontal, draws left → right
      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          '.timeline-connector',
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#timeline',
              start: 'top 60%',
              end: 'center 30%',
              scrub: 1,
            },
          }
        );
      });

      // Mobile: vertical, draws top → bottom
      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          '.timeline-connector',
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#timeline',
              start: 'top 75%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      });

      // ── Timeline card stagger reveal ───────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.08,
          }
        );
      });
    });

    setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      ctx.revert();
      if (lenisTicker) gsap.ticker.remove(lenisTicker);
      lenis?.destroy();
    };
  }, [enabled]);
}
