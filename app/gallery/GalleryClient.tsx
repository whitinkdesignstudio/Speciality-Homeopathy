'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import './gallery.css';

interface GalleryItem {
  id: number;
  category: 'Seminars & Events' | 'Clinical Leadership' | 'Awards & Honors' | 'Patient Care';
  title: string;
  desc: string;
  image: string;
  location: string;
  year: string;
  bentoSpan: 'big' | 'wide' | 'tall' | 'small';
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  cardBg?: string;
  highlights: string[];
}

// ONLY the 6 photos from C:\Users\BAPS\Downloads\p, with tailored framing
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Seminars & Events',
    title: 'SNF (Special Need Families) Recognition & Milestone Celebration',
    desc: 'Dr. Ketan Patel receiving heartfelt handmade "Thank You" cards and celebratory gifts from neurodivergent children and supportive families at the Special Need Families Support Center.',
    image: '/images/gallery/WldW7r23S7WSKQ7fQqz4.jpg',
    location: 'SNF Support Center',
    year: 'Clinical Milestone Event',
    bentoSpan: 'wide',
    imageFit: 'cover',
    imagePosition: 'center center',
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
    bentoSpan: 'small',
    imageFit: 'contain',
    imagePosition: 'center bottom',
    cardBg: 'radial-gradient(circle at 50% 30%, #e0f2fe 0%, #f1f5f9 100%)',
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
    bentoSpan: 'small',
    imageFit: 'cover',
    imagePosition: 'center center',
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
    bentoSpan: 'small',
    imageFit: 'cover',
    imagePosition: 'center center',
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
    bentoSpan: 'tall',
    imageFit: 'cover',
    imagePosition: 'center top',
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
    bentoSpan: 'wide',
    imageFit: 'cover',
    imagePosition: 'center 20%',
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
                  <div
                    className="card-media-wrap"
                    style={{
                      background: item.cardBg || '#f8fafc',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img"
                      style={{
                        objectFit: item.imageFit || 'cover',
                        objectPosition: item.imagePosition || 'center center',
                      }}
                      loading="lazy"
                      decoding="async"
                    />

                    {/* HOVER OVERLAY: Text appears smoothly on cursor hover */}
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

      {/* LIGHTBOX MODAL: PURE WHITE / LIGHT THEME */}
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

            {/* Left: Image View & Stage (Clean Light Backdrop) */}
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

            {/* Right: Detailed Info Panel (Crisp White Theme) */}
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
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.37 7.35 9.1 7.41 8.88 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.92 8.91 12.1 9.03 12.26C9.15 12.42 10.74 14.88 13.19 15.94C15.22 16.82 15.63 16.64 16.08 16.6C16.53 16.56 17.53 16.01 17.73 15.43C17.93 14.85 17.93 14.36 17.87 14.26C17.81 14.16 17.65 14.1 17.41 13.98C17.17 13.86 15.99 13.28 15.77 13.2C15.55 13.12 15.39 13.08 15.23 13.32C15.07 13.56 14.61 14.1 14.47 14.26C14.33 14.42 14.19 14.44 13.95 14.32C13.71 14.2 12.94 13.95 12.02 13.13C11.3 12.49 10.82 11.7 10.68 11.46C10.54 11.22 10.66 11.09 10.78 10.97C10.89 10.86 11.03 10.68 11.15 10.54C11.27 10.4 11.31 10.3 11.39 10.14C11.47 9.98 11.43 9.84 11.37 9.72C11.31 9.6 10.83 8.42 10.63 7.94C10.43 7.46 10.23 7.52 10.07 7.52C9.93 7.52 9.77 7.35 9.53 7.35Z" />
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

            {/* Bottom thumbnail strip (White Theme) */}
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
