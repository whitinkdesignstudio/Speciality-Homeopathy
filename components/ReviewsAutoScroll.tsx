'use client';

import { useEffect } from 'react';

const hostSelector = '.elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d';
const listSelector = `${hostSelector} .eapps-google-reviews-list`;

export default function ReviewsAutoScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const hostElement = document.querySelector<HTMLElement>(hostSelector);
    if (!hostElement) return;

    let paused = false;
    let visible = false;
    let frameId: number | null = null;
    let list: HTMLElement | null = null;
    let listObserver: IntersectionObserver | null = null;
    let widgetObserver: MutationObserver | null = null;

    function tick() {
      if (!list || !visible) {
        frameId = null;
        return;
      }

      if (!paused) {
        list.scrollLeft -= 0.6;
        if (list.scrollLeft <= 0) list.scrollLeft = list.scrollWidth - list.clientWidth;
      }

      frameId = requestAnimationFrame(tick);
    }

    function attachCarousel() {
      const candidate = hostElement!.querySelector<HTMLElement>(listSelector.replace(hostSelector, ''));
      if (!candidate || candidate.scrollWidth <= candidate.clientWidth) return false;
      if (candidate.dataset.autoLoopAttached) return true;

      list = candidate;
      list.dataset.autoLoopAttached = 'true';
      list.scrollLeft = list.scrollWidth - list.clientWidth;

      const pause = () => { paused = true; };
      const resume = () => { paused = false; };
      list.addEventListener('mouseenter', pause);
      list.addEventListener('mouseleave', resume);
      list.addEventListener('touchstart', pause, { passive: true });
      list.addEventListener('touchend', resume);
      list.addEventListener('focusin', pause);
      list.addEventListener('focusout', resume);

      listObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && frameId === null) frameId = requestAnimationFrame(tick);
      }, { threshold: 0.05 });
      listObserver.observe(list);

      return true;
    }

    if (!attachCarousel()) {
      widgetObserver = new MutationObserver(() => {
        if (attachCarousel()) widgetObserver?.disconnect();
      });
      widgetObserver.observe(hostElement, { childList: true, subtree: true });
    }

    return () => {
      widgetObserver?.disconnect();
      listObserver?.disconnect();
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
}