'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function TopProgressBar() {
  const pathname = usePathname();
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isTransitioningRef = useRef(false);

  // Helper to safely clear all active timers
  const clearAllTimers = () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
  };

  // Gracefully complete the bar and fade out cleanly
  const finishProgress = () => {
    clearAllTimers();
    setProgress(100);

    const fadeTimer = setTimeout(() => {
      setOpacity(0);

      const hideTimer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
        setOpacity(1);
        isTransitioningRef.current = false;
      }, 250);

      timersRef.current.push(hideTimer);
    }, 180);

    timersRef.current.push(fadeTimer);
  };

  // Start progress with staged smooth increments and a strict failsafe
  const startProgress = () => {
    clearAllTimers();
    isTransitioningRef.current = true;
    setOpacity(1);
    setVisible(true);
    setProgress(25);

    const t1 = setTimeout(() => setProgress(55), 100);
    const t2 = setTimeout(() => setProgress(75), 300);
    const t3 = setTimeout(() => setProgress(88), 700);

    // Guaranteed failsafe: if route doesn't change within 2.5s, auto-dismiss so it never gets stuck
    const failsafe = setTimeout(() => {
      finishProgress();
    }, 2500);

    timersRef.current.push(t1, t2, t3, failsafe);
  };

  // Normalize path to strip trailing slashes, queries, and hash fragments
  const normalize = (path: string) => {
    return (path || '').split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  };

  // Complete and hide whenever the pathname updates
  useEffect(() => {
    if (isTransitioningRef.current || visible) {
      finishProgress();
    }
  }, [pathname]);

  // Clean up all timers when component unmounts
  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, []);

  // Listen to document clicks and link hovers for instant transition response
  useEffect(() => {
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Ignore external protocols, new tabs, and modifier keys
      if (
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        href.startsWith('javascript:') ||
        target.target === '_blank' ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Resolve full URL to accurately check origin and path equality
      try {
        const targetUrl = new URL(href, window.location.origin);

        // Ignore external domains
        if (targetUrl.origin !== window.location.origin) {
          return;
        }

        // Ignore navigation to the exact same page
        if (normalize(targetUrl.pathname) === normalize(pathname)) {
          return;
        }

        startProgress();
      } catch {
        // Fallback safety: do not trigger on unparseable URIs
      }
    }

    // Prefetch on hover/touch for instant navigation
    function handleAnchorHover(e: MouseEvent | TouchEvent) {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) return;

      try {
        router.prefetch(href);
      } catch {
        // Prefetch error ignored
      }
    }

    document.addEventListener('click', handleAnchorClick, { capture: true });
    document.addEventListener('mouseover', handleAnchorHover as EventListener, { passive: true, capture: true });
    document.addEventListener('touchstart', handleAnchorHover as EventListener, { passive: true, capture: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      document.removeEventListener('mouseover', handleAnchorHover as EventListener, { capture: true });
      document.removeEventListener('touchstart', handleAnchorHover as EventListener, { capture: true });
    };
  }, [pathname, router]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 999999,
        pointerEvents: 'none',
        background: 'transparent',
        opacity,
        transition: 'opacity 250ms ease-out',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #008C8C 0%, #0096c7 50%, #C8A96B 100%)',
          boxShadow: '0 0 10px rgba(0, 140, 140, 0.7), 0 0 5px rgba(200, 169, 107, 0.5)',
          transition: progress === 100 ? 'width 150ms ease-out' : 'width 300ms cubic-bezier(0.1, 0.5, 0.1, 1)',
          borderRadius: '0 2px 2px 0',
        }}
      />
    </div>
  );
}
