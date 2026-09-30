'use client';

import { useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function TopProgressBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname changes, finish and hide progress bar
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Listen to clicks and hovers across the document for instant response
  useEffect(() => {
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Ignore external links, mailto, tel, hashes, and downloads
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        target.target === '_blank' ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Check if target is same page
      if (href === pathname || href === window.location.pathname) {
        return;
      }

      // Start progress immediately
      setLoading(true);
      setProgress(25);
      setTimeout(() => setProgress(65), 100);
      setTimeout(() => setProgress(85), 300);
    }

    // Hover & touch prefetch for instant 0ms transitions
    function handleAnchorHover(e: MouseEvent | TouchEvent) {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) return;
      
      try {
        router.prefetch(href);
      } catch {
        // Ignore prefetch error
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

  if (!loading && progress === 0) return null;

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
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #008C8C 0%, #0096c7 50%, #C8A96B 100%)',
          boxShadow: '0 0 10px rgba(0, 140, 140, 0.7), 0 0 5px rgba(200, 169, 107, 0.5)',
          transition: progress === 100 ? 'width 150ms ease-out, opacity 150ms ease-in' : 'width 300ms cubic-bezier(0.1, 0.5, 0.1, 1)',
          opacity: progress === 100 ? 0 : 1,
          borderRadius: '0 2px 2px 0',
        }}
      />
    </div>
  );
}
