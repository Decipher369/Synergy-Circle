import { useEffect } from 'react';
import gsap from 'gsap';

function isTouchDevice() {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

export function useCursor() {
  useEffect(() => {
    if (isTouchDevice()) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    document.documentElement.classList.add('custom-cursor');
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    let visible = false;

    const onMove = (e: MouseEvent) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.4 });
        visible = true;
      }
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, overwrite: 'auto', ease: 'power2.out' });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.55, overwrite: 'auto', ease: 'power2.out' });
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        gsap.to(ring, { scale: 1.9, opacity: 0.7, duration: 0.25, ease: 'power2.out' });
        gsap.to(dot, { scale: 0.4, duration: 0.2, ease: 'power2.out' });
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(dot, { scale: 1, duration: 0.2, ease: 'power2.out' });
      }
    };

    const onLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.35 });
      visible = false;
    };

    const onEnter = () => {
      if (visible) gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMove);
    document.body.addEventListener('mouseover', onOver);
    document.body.addEventListener('mouseout', onOut);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseover', onOver);
      document.body.removeEventListener('mouseout', onOut);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, []);
}
