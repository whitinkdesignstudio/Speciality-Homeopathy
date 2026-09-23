'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Dynamic year update
    const yrEl = document.getElementById('yr');
    if (yrEl) {
      yrEl.textContent = new Date().getFullYear().toString();
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    // 2. Scroll Reveal with IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.reveal:not(.in), .pillar:not(.in), .journey-line:not(.in)').forEach((el) => io.observe(el));

    // 3. Count-up animation for elements with data-count
    const countIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const target = parseFloat(el.getAttribute('data-count') || '0');
            const suffix = el.getAttribute('data-suffix') || '';
            const dur = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.round(target * eased) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            countIo.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-count]').forEach((el) => countIo.observe(el));

    return () => {
      io.disconnect();
      countIo.disconnect();
    };
  }, [pathname]);

  return null;
}
