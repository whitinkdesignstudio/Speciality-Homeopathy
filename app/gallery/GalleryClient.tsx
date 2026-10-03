'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';

interface GalleryItem {
  id: number;
  category: 'Seminars & Events' | 'Clinical Leadership' | 'Awards & Honors' | 'Patient Care';
  title: string;
  desc: string;
  image: string;
  location: string;
  year: string;
  bentoSpan: 'big' | 'wide' | 'tall' | 'small';
  highlights: string[];
}

// ONLY the 6 photos from C:\Users\BAPS\Downloads\p
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Seminars & Events',
    title: 'SNF (Special Need Families) Recognition & Milestone Celebration',
    desc: 'Dr. Ketan Patel receiving heartfelt handmade "Thank You" cards and celebratory gifts from neurodivergent children and supportive families at the Special Need Families Support Center.',
    image: '/images/gallery/WldW7r23S7WSKQ7fQqz4.jpg',
    location: 'SNF Support Center',
    year: 'Clinical Milestone Event',
    bentoSpan: 'big', // 2 col x 2 row on Bento
    highlights: ['Special Needs Support', 'Children Gratitude', 'Family Community'],
  },
  {
    id: 2,
    category: 'Clinical Leadership',
    title: 'Dr. Ketan Patel (B.H.M.S.) — Senior Neurological Homeopath',
    desc: 'Founder & Chief Homeopath with over 34+ years of dedicated clinical expertise specializing in pediatric neurology, autism spectrum disorder, cerebral palsy, and rare developmental conditions.',
    image: '/images/gallery/41dbsWTIuNTZACE24fLQ.png',
    location: 'Ahmedabad & Global Clinics',
    year: 'Founder Profile',
    bentoSpan: 'small', // 1 col x 1 row
    highlights: ['34+ Yrs Experience', 'Pediatric Neurology', 'Founder & Director'],
  },
  {
    id: 3,
    category: 'Awards & Honors',
    title: 'Clinical Excellence & Scientific Research Felicitation',
    desc: 'Dr. Ketan Patel being felicitated with a prestigious Certificate of Excellence for pioneering research in neurological homeopathy and documented longitudinal case studies.',
    image: '/images/gallery/EsQXeKiO6UeV33E2EuOW.jpg',
    location: 'National Medical Assembly',
    year: 'Honor & Recognition',
    bentoSpan: 'small', // 1 col x 1 row
    highlights: ['Certificate of Honor', 'Research Pioneer', 'National Recognition'],
  },
  {
    id: 4,
    category: 'Seminars & Events',
    title: 'SNF Interactive Parent-Child Empowerment Workshop',
    desc: 'Engaging interactive awareness workshop guiding parents on gentle constitutional homeopathic management, cognitive stimulation routines, and speech-communication milestones.',
    image: '/images/gallery/J2Sf3fI8xb1C58VaRsit.jpg',
    location: 'SNF Families Assembly',
    year: 'Awareness Seminar',
    bentoSpan: 'wide', // 2 col x 1 row
    highlights: ['Parent Empowerment', 'Interactive Workshop', 'Holistic Guidance'],
  },
  {
    id: 5,
    category: 'Patient Care',
    title: 'Comprehensive Neuro-Rehabilitation & Wheelchair Care Session',
    desc: 'Special rehabilitation consultation session with Dr. Ketan Patel, dedicated parents, and children with cerebral palsy and mobility hurdles showing positive motor recovery.',
    image: '/images/gallery/ZMX7eeNh0482zohHV2dX.jpg',
    location: 'Rehabilitation Care Wing',
    year: 'Pediatric Care',
    bentoSpan: 'tall', // 1 col x 2 row
    highlights: ['Cerebral Palsy Care', 'Motor Recovery', 'Compassionate Support'],
  },
  {
    id: 6,
    category: 'Clinical Leadership',
    title: 'Executive Clinical Guidance & Global Case Consultations',
    desc: 'Leading case discussions, clinical second opinions, and tele-homeopathy strategies for families across the UK, USA, UAE, and Europe seeking expert neurological homeopathic care.',
    image: '/images/gallery/nUFO8fLCf9TQxHaifd4y.jpg',
    location: 'Speciality Homeopathy Headquarters',
    year: 'International Consultations',
    bentoSpan: 'small', // 1 col x 1 row
    highlights: ['Global Telehealth', 'Complex Case Review', 'International Reach'],
  },
];

const categories = [
  'All Photos',
  'Seminars & Events',
  'Clinical Leadership',
  'Awards & Honors',
  'Patient Care',
] as const;

export default function GalleryClient() {
  const [selectedCat, setSelectedCat] = useState<string>('All Photos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [layoutMode, setLayoutMode] = useState<'bento' | 'grid' | 'masonry'>('bento');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Filter items
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCat = selectedCat === 'All Photos' || item.category === selectedCat;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.highlights.some((h) => h.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [selectedCat, searchQuery]);

  // Modal index navigation
  const currentIndex = useMemo(() => {
    if (!activeModalItem) return -1;
    return filteredItems.findIndex((item) => item.id === activeModalItem.id);
  }, [activeModalItem, filteredItems]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setActiveModalItem(filteredItems[currentIndex - 1]);
      setIsZoomed(false);
    } else if (filteredItems.length > 0) {
      setActiveModalItem(filteredItems[filteredItems.length - 1]);
      setIsZoomed(false);
    }
  }, [currentIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredItems.length - 1) {
      setActiveModalItem(filteredItems[currentIndex + 1]);
      setIsZoomed(false);
    } else if (filteredItems.length > 0) {
      setActiveModalItem(filteredItems[0]);
      setIsZoomed(false);
    }
  }, [currentIndex, filteredItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') setActiveModalItem(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, handlePrev, handleNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalItem]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <main className="gallery-page-root">
      <style jsx global>{`
        :root {
          --gal-navy: #071838;
          --gal-navy-deep: #030d1f;
          --gal-navy-card: #0c234b;
          --gal-teal: #0096a6;
          --gal-teal-light: #00b4d8;
          --gal-teal-glow: rgba(0, 180, 216, 0.35);
          --gal-accent: #0284c7;
          --gal-bg: #f8fafc;
          --gal-text-main: #0f172a;
          --gal-text-muted: #475569;
          --gal-radius: 18px;
          --gal-transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-page-root {
          background: linear-gradient(180deg, #f0f7fb 0%, #ffffff 25%, #f8fafc 100%);
          min-height: 100vh;
          color: var(--gal-text-main);
          font-family: var(--font-open-sans, 'Open Sans', system-ui, sans-serif);
          overflow-x: hidden;
          position: relative;
        }

        /* Ambient background glow */
        .ambient-glow-1 {
          position: absolute;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 380px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.12) 0%, rgba(14, 165, 233, 0.04) 50%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        /* ── HERO SECTION ── */
        .gal-hero {
          position: relative;
          z-index: 1;
          padding: 56px 24px 36px;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gal-hero h1 {
          font-family: var(--font-poppins, 'Poppins', sans-serif);
          font-size: clamp(2.1rem, 4.2vw, 3.2rem);
          font-weight: 800;
          line-height: 1.18;
          color: #071838;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .gal-hero h1 span.gradient-text {
          background: linear-gradient(135deg, #0084a6 0%, #00b4d8 50%, #0369a1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gal-hero p.hero-subtitle {
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          color: #475569;
          max-width: 760px;
          margin: 0 auto 32px;
          line-height: 1.65;
        }

        /* ── STATS ROW ── */
        .hero-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 1040px;
          margin: 0 auto 36px;
        }

        .stat-card {
          background: #ffffff;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.22);
          box-shadow: 0 6px 20px -6px rgba(7, 24, 56, 0.05);
          transition: var(--gal-transition);
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 26px -6px rgba(0, 150, 166, 0.15);
          border-color: rgba(0, 150, 166, 0.3);
        }

        .stat-num {
          font-family: var(--font-poppins, 'Poppins', sans-serif);
          font-size: 1.75rem;
          font-weight: 800;
          color: #071838;
          line-height: 1.1;
          margin-bottom: 3px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 600;
        }

        /* ── CONTROLS & FILTER BAR ── */
        .controls-wrapper {
          position: sticky;
          top: 72px;
          z-index: 20;
          padding: 12px 24px;
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.9);
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 10px 30px -10px rgba(7, 24, 56, 0.06);
          margin-bottom: 32px;
        }

        .controls-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .controls-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Category pills */
        .category-pills-list {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
        }
        .category-pills-list::-webkit-scrollbar {
          display: none;
        }

        .cat-pill {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 7px 16px;
          border-radius: 999px;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--gal-transition);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .cat-pill:hover {
          background: #e0f2fe;
          border-color: #38bdf8;
          color: #0284c7;
          transform: translateY(-1px);
        }

        .cat-pill.active {
          background: linear-gradient(135deg, #071838 0%, #0c2b64 100%);
          border-color: #071838;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(7, 24, 56, 0.25);
        }

        .cat-pill .count-badge {
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.08);
          color: inherit;
        }

        .cat-pill.active .count-badge {
          background: rgba(255, 255, 255, 0.22);
          color: #7dd3fc;
        }

        /* Search + Layout switcher */
        .actions-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .search-box {
          position: relative;
          width: 210px;
        }

        .search-input {
          width: 100%;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 7px 14px 7px 32px;
          border-radius: 999px;
          font-size: 0.82rem;
          color: #0f172a;
          outline: none;
          transition: var(--gal-transition);
        }

        .search-input:focus {
          border-color: #0096a6;
          box-shadow: 0 0 0 3px rgba(0, 150, 166, 0.15);
          width: 240px;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
        }

        .layout-switch-group {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          padding: 3px;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
        }

        .layout-btn {
          border: none;
          background: transparent;
          padding: 6px 11px;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: var(--gal-transition);
        }

        .layout-btn.active {
          background: #ffffff;
          color: #071838;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        /* ── GALLERY MAIN CONTAINER ── */
        .gallery-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px 72px;
          position: relative;
          z-index: 1;
        }

        /* ── BENTO DYNAMIC GRID (1 Big + 1 Small / Asymmetrical Flow) ── */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 240px;
          grid-auto-flow: dense;
          gap: 20px;
        }

        .bento-card-big {
          grid-column: span 2;
          grid-row: span 2;
        }

        .bento-card-wide {
          grid-column: span 2;
          grid-row: span 1;
        }

        .bento-card-tall {
          grid-column: span 1;
          grid-row: span 2;
        }

        .bento-card-small {
          grid-column: span 1;
          grid-row: span 1;
        }

        /* Regular 3-Column Grid */
        .regular-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .regular-grid .gal-card-item {
          height: 300px;
        }

        /* Masonry Feed */
        .masonry-grid {
          columns: 3 320px;
          column-gap: 20px;
        }

        .masonry-grid .gal-card-item {
          break-inside: avoid;
          margin-bottom: 20px;
          height: 280px;
        }

        /* ── GALLERY CARD: CLEAN PHOTO BY DEFAULT, TEXT APPEARS ONLY ON HOVER ── */
        .gal-card-item {
          position: relative;
          border-radius: var(--gal-radius);
          overflow: hidden;
          background: #071838;
          box-shadow: 0 8px 24px -8px rgba(7, 24, 56, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.85);
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
          animation: cardEntrance 0.45s ease backwards;
        }

        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .gal-card-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 42px -10px rgba(7, 24, 56, 0.25),
                      0 0 16px rgba(0, 150, 166, 0.2);
          border-color: rgba(0, 150, 166, 0.5);
        }

        .card-media-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .gal-card-item:hover .card-img {
          transform: scale(1.06);
          filter: brightness(1.02);
        }

        /* ── HOVER OVERLAY: HIDDEN AT REST, REVEALED ON CURSOR HOVER ── */
        .card-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(7, 24, 56, 0.3) 0%,
            rgba(7, 24, 56, 0.65) 45%,
            rgba(3, 13, 31, 0.96) 100%
          );
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 18px;
          color: #ffffff;
          z-index: 2;
          pointer-events: none;
        }

        .gal-card-item:hover .card-hover-overlay,
        .gal-card-item:focus-within .card-hover-overlay {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .card-hover-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          transform: translateY(10px);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gal-card-item:hover .card-hover-content {
          transform: translateY(0);
        }

        .hover-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .hover-cat-pill {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #7dd3fc;
          background: rgba(14, 165, 233, 0.18);
          border: 1px solid rgba(56, 189, 248, 0.3);
          padding: 3px 9px;
          border-radius: 999px;
          backdrop-filter: blur(8px);
        }

        .hover-zoom-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .gal-card-item:hover .hover-zoom-btn:hover {
          background: #0096a6;
          border-color: #38bdf8;
          transform: scale(1.1);
        }

        /* Small, clean typography inside the hover overlay */
        .hover-bottom-info {
          display: flex;
          flex-direction: column;
        }

        .hover-location-text {
          font-size: 0.68rem;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 3px;
        }

        .hover-card-title {
          font-family: var(--font-poppins, 'Poppins', sans-serif);
          font-size: 0.92rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 4px;
        }

        .bento-card-big .hover-card-title {
          font-size: 1.05rem;
        }

        .hover-card-desc {
          font-size: 0.74rem;
          color: #cbd5e1;
          line-height: 1.45;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .bento-card-big .hover-card-desc,
        .bento-card-tall .hover-card-desc {
          -webkit-line-clamp: 3;
        }

        /* ── EMPTY STATE ── */
        .empty-state {
          text-align: center;
          padding: 70px 24px;
          background: #ffffff;
          border-radius: 20px;
          border: 1px dashed #cbd5e1;
          max-width: 580px;
          margin: 40px auto;
        }

        .empty-state h3 {
          font-size: 1.3rem;
          color: #071838;
          margin-bottom: 6px;
        }

        .empty-state p {
          color: #64748b;
          margin-bottom: 18px;
          font-size: 0.9rem;
        }

        .reset-filter-btn {
          background: #0096a6;
          color: #ffffff;
          border: none;
          padding: 9px 22px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
        }

        /* ── LIGHTBOX MODAL ── */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(3, 13, 31, 0.92);
          backdrop-filter: blur(16px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: backdropFade 0.25s ease-out;
        }

        @keyframes backdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-modal-content {
          background: #071838;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          overflow: hidden;
          width: 100%;
          max-width: 1080px;
          max-height: 92vh;
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 150, 166, 0.2);
          position: relative;
          animation: modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalScaleUp {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 30;
          transition: var(--gal-transition);
        }

        .modal-close-btn:hover {
          background: #ef4444;
          transform: scale(1.1) rotate(90deg);
          border-color: #ef4444;
        }

        .lightbox-left-stage {
          position: relative;
          background: #030d1f;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 440px;
        }

        .lightbox-main-img {
          width: 100%;
          height: 100%;
          max-height: 68vh;
          object-fit: contain;
          transition: transform 0.4s ease;
          user-select: none;
        }

        .lightbox-main-img.zoomed {
          transform: scale(1.6);
          cursor: zoom-out;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(7, 24, 56, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--gal-transition);
          z-index: 10;
        }

        .nav-arrow:hover {
          background: #0096a6;
          border-color: #38bdf8;
          transform: translateY(-50%) scale(1.12);
        }

        .nav-arrow.prev { left: 14px; }
        .nav-arrow.next { right: 14px; }

        .zoom-toggle-pill {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(7, 24, 56, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 0.74rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 999px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--gal-transition);
          z-index: 10;
        }

        .zoom-toggle-pill:hover {
          background: #0096a6;
        }

        .index-counter-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(7, 24, 56, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #7dd3fc;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 4px 11px;
          border-radius: 999px;
          z-index: 10;
        }

        .lightbox-right-panel {
          padding: 34px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #071838;
          overflow-y: auto;
          max-height: 85vh;
        }

        .panel-top-meta {
          margin-bottom: 14px;
        }

        .panel-cat-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 10px;
        }

        .panel-title {
          font-family: var(--font-poppins, 'Poppins', sans-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 10px;
        }

        .panel-location-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #94a3b8;
          margin-bottom: 16px;
        }

        .panel-desc {
          font-size: 0.88rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 22px;
        }

        .panel-highlights-section {
          margin-bottom: 24px;
        }

        .panel-highlights-title {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #94a3b8;
          margin-bottom: 8px;
        }

        .panel-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .panel-chip {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 7px;
        }

        .panel-actions-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-whatsapp-inquire {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: #25d366;
          color: #ffffff;
          padding: 11px 18px;
          border-radius: 11px;
          font-weight: 700;
          font-size: 0.86rem;
          text-decoration: none;
          transition: var(--gal-transition);
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
        }

        .btn-whatsapp-inquire:hover {
          background: #20ba5a;
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(37, 211, 102, 0.5);
        }

        .btn-consult-modal {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #0096a6 0%, #0284c7 100%);
          color: #ffffff;
          padding: 11px 18px;
          border-radius: 11px;
          font-weight: 700;
          font-size: 0.86rem;
          text-decoration: none;
          transition: var(--gal-transition);
        }

        .btn-consult-modal:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
        }

        .modal-aux-buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 2px;
        }

        .aux-link-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 0.76rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s ease;
        }

        .aux-link-btn:hover {
          color: #38bdf8;
        }

        .lightbox-thumbnail-strip {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 12px 16px;
          background: #030d1f;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          grid-column: span 2;
        }

        .thumb-item {
          width: 56px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 7px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.45;
          border: 2px solid transparent;
          transition: var(--gal-transition);
        }

        .thumb-item:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        .thumb-item.active {
          opacity: 1;
          border-color: #00b4d8;
          box-shadow: 0 0 10px rgba(0, 180, 216, 0.6);
        }

        .thumb-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── BOTTOM CTA BANNER ── */
        .gal-cta-section {
          background: radial-gradient(100% 100% at 50% 0%, #0c234b 0%, #071838 100%);
          color: #ffffff;
          padding: 72px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gal-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, rgba(0, 180, 216, 0.16) 0%, transparent 60%);
          pointer-events: none;
        }

        .gal-cta-wrap {
          max-width: 740px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .gal-cta-wrap h2 {
          font-family: var(--font-poppins, 'Poppins', sans-serif);
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .gal-cta-wrap p {
          font-size: 1rem;
          color: #cbd5e1;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .cta-btn-group {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cta-primary-btn {
          background: linear-gradient(135deg, #0096a6 0%, #00b4d8 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 13px 32px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 8px 26px rgba(0, 150, 166, 0.4);
          transition: var(--gal-transition);
        }

        .cta-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(0, 150, 166, 0.6);
        }

        .cta-secondary-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 13px 28px;
          border-radius: 999px;
          text-decoration: none;
          transition: var(--gal-transition);
        }

        .cta-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #38bdf8;
          transform: translateY(-2px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1080px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 240px;
          }
          .bento-card-big {
            grid-column: span 2;
            grid-row: span 2;
          }
          .bento-card-wide {
            grid-column: span 2;
            grid-row: span 1;
          }
          .bento-card-tall {
            grid-column: span 1;
            grid-row: span 2;
          }
          .regular-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .masonry-grid {
            columns: 2 280px;
          }
          .hero-stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .lightbox-modal-content {
            grid-template-columns: 1fr;
            max-height: 90vh;
            overflow-y: auto;
          }
          .lightbox-thumbnail-strip {
            grid-column: span 1;
          }
        }

        @media (max-width: 680px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 260px;
            gap: 16px;
          }
          .bento-card-big,
          .bento-card-wide,
          .bento-card-tall,
          .bento-card-small {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            height: 260px;
          }
          .regular-grid {
            grid-template-columns: 1fr;
          }
          .masonry-grid {
            columns: 1 100%;
          }
          .hero-stats-row {
            grid-template-columns: 1fr;
          }
          .controls-top-row {
            flex-direction: column;
            align-items: stretch;
          }
          .actions-right {
            justify-content: space-between;
          }
          .search-box {
            flex: 1;
          }
          .search-input:focus {
            width: 100%;
          }
          .gal-hero {
            padding: 42px 16px 24px;
          }
          .gallery-wrap {
            padding: 0 16px 50px;
          }
        }
      `}</style>

      {/* AMBIENT GLOW */}
      <div className="ambient-glow-1" aria-hidden="true" />

      {/* HERO SECTION */}
      <section className="gal-hero">
        <h1>
          Moments of <span className="gradient-text">Healing &amp; Excellence</span>
        </h1>

        <p className="hero-subtitle">
          Explore Dr. Ketan Patel&apos;s child neurological seminars, SNF family support programs,
          international consultations, clinical awards, and inspiring developmental milestones.
        </p>

        {/* STATS ROW */}
        <div className="hero-stats-row">
          <div className="stat-card">
            <div className="stat-num">34+</div>
            <div className="stat-label">Years Clinical Excellence</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">10,000+</div>
            <div className="stat-label">Global Families Supported</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">500+</div>
            <div className="stat-label">Documented Neuro Cases</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">3 Clinics</div>
            <div className="stat-label">Ahmedabad, Mumbai &amp; Delhi</div>
          </div>
        </div>
      </section>

      {/* CONTROLS & FILTER BAR */}
      <section className="controls-wrapper" aria-label="Gallery controls">
        <div className="controls-inner">
          <div className="controls-top-row">
            {/* Category Pills */}
            <div className="category-pills-list">
              {categories.map((cat) => {
                const count =
                  cat === 'All Photos'
                    ? galleryItems.length
                    : galleryItems.filter((i) => i.category === cat).length;
                return (
                  <button
                    key={cat}
                    className={`cat-pill ${selectedCat === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCat(cat)}
                  >
                    <span>{cat}</span>
                    <span className="count-badge">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions: Search & Layout View */}
            <div className="actions-right">
              <div className="search-box">
                <svg
                  className="search-icon"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* Layout Switcher */}
              <div className="layout-switch-group" role="group" aria-label="Layout view mode">
                <button
                  className={`layout-btn ${layoutMode === 'bento' ? 'active' : ''}`}
                  onClick={() => setLayoutMode('bento')}
                  title="Dynamic Bento Grid (1 Big + 1 Small Asymmetrical)"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="8" height="18" rx="2" />
                    <rect x="13" y="3" width="8" height="8" rx="2" />
                    <rect x="13" y="13" width="8" height="8" rx="2" />
                  </svg>
                  <span>Bento</span>
                </button>
                <button
                  className={`layout-btn ${layoutMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setLayoutMode('grid')}
                  title="3-Column Grid"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="5.5" height="18" rx="1.5" />
                    <rect x="9.25" y="3" width="5.5" height="18" rx="1.5" />
                    <rect x="15.5" y="3" width="5.5" height="18" rx="1.5" />
                  </svg>
                  <span>Grid</span>
                </button>
                <button
                  className={`layout-btn ${layoutMode === 'masonry' ? 'active' : ''}`}
                  onClick={() => setLayoutMode('masonry')}
                  title="Masonry Feed"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="8" height="6" rx="1.5" />
                    <rect x="3" y="11" width="8" height="10" rx="1.5" />
                    <rect x="13" y="3" width="8" height="11" rx="1.5" />
                    <rect x="13" y="16" width="8" height="5" rx="1.5" />
                  </svg>
                  <span>Feed</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY ITEMS CONTAINER */}
      <div className="gallery-wrap">
        {filteredItems.length === 0 ? (
          <div className="empty-state">
            <h3>No Photos Found</h3>
            <p>No photos matched &ldquo;{searchQuery || selectedCat}&rdquo;. Try another search term or filter.</p>
            <button
              className="reset-filter-btn"
              onClick={() => {
                setSelectedCat('All Photos');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={
              layoutMode === 'bento'
                ? 'bento-grid'
                : layoutMode === 'grid'
                ? 'regular-grid'
                : 'masonry-grid'
            }
          >
            {filteredItems.map((item, idx) => {
              const bentoClass =
                layoutMode === 'bento'
                  ? item.bentoSpan === 'big'
                    ? 'bento-card-big'
                    : item.bentoSpan === 'wide'
                    ? 'bento-card-wide'
                    : item.bentoSpan === 'tall'
                    ? 'bento-card-tall'
                    : 'bento-card-small'
                  : '';

              return (
                <article
                  key={item.id}
                  className={`gal-card-item ${bentoClass}`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  onClick={() => {
                    setActiveModalItem(item);
                    setIsZoomed(false);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveModalItem(item);
                    }
                  }}
                >
                  <div className="card-media-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* HOVER OVERLAY: Text appears smoothly when cursor moves over the card */}
                    <div className="card-hover-overlay">
                      <div className="card-hover-content">
                        <div className="hover-top-row">
                          <span className="hover-cat-pill">{item.category}</span>
                          <div className="hover-zoom-btn" title="View photo">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                              <line x1="11" y1="8" x2="11" y2="14" />
                              <line x1="8" y1="11" x2="14" y2="11" />
                            </svg>
                          </div>
                        </div>

                        <div className="hover-bottom-info">
                          <div className="hover-location-text">
                            <span>{item.location}</span>
                          </div>
                          <h3 className="hover-card-title">{item.title}</h3>
                          <p className="hover-card-desc">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      {activeModalItem && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo preview"
        >
          <div
            className="lightbox-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="modal-close-btn"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close photo preview"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Left: Image View & Controls */}
            <div className="lightbox-left-stage">
              <span className="index-counter-badge">
                Photo {currentIndex + 1} of {filteredItems.length}
              </span>

              <button
                className="zoom-toggle-pill"
                onClick={() => setIsZoomed((prev) => !prev)}
                title="Toggle Zoom"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>{isZoomed ? 'Zoom Out (1x)' : 'Zoom In (1.6x)'}</span>
              </button>

              {/* Prev / Next Arrows */}
              <button
                className="nav-arrow prev"
                onClick={handlePrev}
                aria-label="Previous photo"
                title="Previous (Left Arrow)"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className={`lightbox-main-img ${isZoomed ? 'zoomed' : ''}`}
                onClick={() => setIsZoomed((prev) => !prev)}
              />

              <button
                className="nav-arrow next"
                onClick={handleNext}
                aria-label="Next photo"
                title="Next (Right Arrow)"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Right: Detailed Metadata & Action CTAs */}
            <div className="lightbox-right-panel">
              <div>
                <div className="panel-top-meta">
                  <span className="panel-cat-badge">{activeModalItem.category}</span>
                  <h2 className="panel-title">{activeModalItem.title}</h2>
                  <div className="panel-location-tag">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{activeModalItem.location}</span>
                    <span style={{ opacity: 0.4 }}>•</span>
                    <span>{activeModalItem.year}</span>
                  </div>
                </div>

                <p className="panel-desc">{activeModalItem.desc}</p>

                <div className="panel-highlights-section">
                  <div className="panel-highlights-title">Key Highlights</div>
                  <div className="panel-chips-wrap">
                    {activeModalItem.highlights.map((h, i) => (
                      <span key={i} className="panel-chip">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="panel-actions-row">
                <a
                  href={`https://wa.me/918320131612?text=${encodeURIComponent(
                    `Hello Dr. Ketan Patel & Speciality Homeopathy Team, I saw this photo on your gallery: "${activeModalItem.title}" and would like to inquire about consultation and treatment options.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-inquire"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.37 7.35 9.1 7.41 8.88 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.92 8.91 12.1 9.03 12.26C9.15 12.42 10.74 14.88 13.19 15.94C15.22 16.82 15.63 16.64 16.08 16.6C16.53 16.56 17.53 16.01 17.73 15.43C17.93 14.85 17.87 14.26C17.81 14.16 17.65 14.1 17.41 13.98C17.17 13.86 15.99 13.28 15.77 13.2C15.55 13.12 15.39 13.08 15.23 13.32C15.07 13.56 14.61 14.1 14.47 14.26C14.33 14.42 14.19 14.44 13.95 14.32C13.71 14.2 12.94 13.95 12.02 13.13C11.3 12.49 10.82 11.7 10.68 11.46C10.54 11.22 10.66 11.09 10.78 10.97C10.89 10.86 11.03 10.68 11.15 10.54C11.27 10.4 11.31 10.3 11.39 10.14C11.47 9.98 11.43 9.84 11.37 9.72C11.31 9.6 10.83 8.42 10.63 7.94C10.43 7.46 10.23 7.52 10.07 7.52C9.93 7.52 9.77 7.35 9.53 7.35Z" />
                  </svg>
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link href="/contact" className="btn-consult-modal">
                  <span>Book In-Clinic Consultation</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <div className="modal-aux-buttons">
                  <button className="aux-link-btn" onClick={handleCopyLink}>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{copiedLink ? 'Link Copied!' : 'Share Gallery Link'}</span>
                  </button>

                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                    Use ← / → keys to navigate
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom thumbnail strip for fast jumping */}
            <div className="lightbox-thumbnail-strip" aria-label="Photo thumbnails">
              {filteredItems.map((thumb) => (
                <div
                  key={thumb.id}
                  className={`thumb-item ${activeModalItem.id === thumb.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveModalItem(thumb);
                    setIsZoomed(false);
                  }}
                  title={thumb.title}
                >
                  <img src={thumb.image} alt={thumb.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM CTA SECTION */}
      <section className="gal-cta-section">
        <div className="gal-cta-wrap">
          <h2>Experience Compassionate Neurological Care</h2>
          <p>
            Connect directly with Dr. Ketan Patel and our multidisciplinary clinical team. Available for in-clinic
            consultations at Ahmedabad, Mumbai, and Delhi, as well as worldwide tele-homeopathy.
          </p>
          <div className="cta-btn-group">
            <Link href="/contact" className="cta-primary-btn">
              Book a Consultation
            </Link>
            <a
              href="https://wa.me/918320131612"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary-btn"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
