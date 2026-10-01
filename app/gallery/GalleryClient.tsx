'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --navy-dark: #071D3E;
    --teal: #008C8C;
    --gold: #C8A96B;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --shadow-card: 0 6px 24px -8px rgba(10,31,68,0.12);
    --shadow-hover: 0 16px 38px -10px rgba(10,31,68,0.22);
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f4f8fb;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  a { color: inherit; text-decoration: none; }

  /* ── HERO ── */
  .gallery-hero {
    position: relative;
    background: radial-gradient(120% 120% at 84% 0%, #cceaf7 0%, #BBE0F4 48%, #9fd3ed 100%);
    color: var(--blue);
    padding: 64px 24px 68px;
    text-align: center;
  }
  .gallery-hero .wrap {
    max-width: 860px;
    margin: 0 auto;
  }
  .breadcrumb {
    font-size: 0.8rem;
    color: rgba(10,31,68,0.65);
    margin-bottom: 14px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  .breadcrumb a { color: var(--teal); font-weight: 600; }
  .gallery-hero .eyebrow {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 10px;
  }
  .gallery-hero h1 {
    font-size: clamp(2rem, 3.8vw, 3rem);
    color: #0A1F44;
    line-height: 1.2;
    margin-bottom: 14px;
    font-weight: 700;
  }
  .gallery-hero p {
    font-size: 1.05rem;
    color: #2b566c;
    max-width: 620px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* ── FILTER TABS ── */
  .filter-section {
    padding: 36px 24px 16px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .filter-pill {
    background: #ffffff;
    border: 1px solid rgba(10,31,68,0.12);
    color: #4a5a67;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.25s, color 0.25s, transform 0.2s, box-shadow 0.25s, border-color 0.25s;
    box-shadow: 0 2px 10px rgba(10,31,68,0.04);
  }
  .filter-pill:hover {
    background: #eef8fb;
    color: var(--teal);
    border-color: var(--teal);
    transform: translateY(-2px);
  }
  .filter-pill.active {
    background: linear-gradient(135deg, #008C8C, #0a4a6e);
    color: #ffffff;
    border-color: transparent;
    box-shadow: 0 6px 18px -4px rgba(0,140,140,0.45);
  }

  /* ── GALLERY GRID ── */
  .gallery-section {
    padding: 24px 24px 72px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 26px;
  }

  /* Gallery Item Card */
  .gallery-card {
    background: #ffffff;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow-card);
    border: 1px solid rgba(10,31,68,0.06);
    display: flex;
    flex-direction: column;
    transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.3s;
    cursor: pointer;
  }
  .gallery-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(0,140,140,0.35);
  }

  .gallery-media {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 11;
    overflow: hidden;
    background: linear-gradient(135deg, #0A1F44, #1a4a6e);
  }
  .gallery-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s var(--ease);
  }
  .gallery-card:hover .gallery-media img {
    transform: scale(1.08);
  }

  .gallery-tag-chip {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(10,31,68,0.8);
    backdrop-filter: blur(8px);
    color: #ffffff;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.2);
    z-index: 2;
  }

  .zoom-indicator {
    position: absolute;
    inset: 0;
    background: rgba(10,31,68,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: #ffffff;
  }
  .zoom-indicator svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
  }
  .gallery-card:hover .zoom-indicator {
    opacity: 1;
  }

  .gallery-info {
    padding: 20px 22px 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .gallery-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 6px;
    line-height: 1.35;
  }
  .gallery-desc {
    font-size: 0.84rem;
    color: #556677;
    line-height: 1.55;
    margin: 0;
  }

  /* ── STATS HIGHLIGHT STRIP ── */
  .stats-strip {
    background: #0A1F44;
    color: #ffffff;
    padding: 48px 24px;
    margin-bottom: 48px;
  }
  .stats-grid {
    max-width: 1140px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    text-align: center;
  }
  .stat-item h3 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    color: #7dd3fc;
    margin-bottom: 4px;
  }
  .stat-item p {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.8);
    line-height: 1.4;
  }

  /* ── LIGHTBOX MODAL ── */
  .lightbox-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10,20,38,0.88);
    backdrop-filter: blur(12px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .lightbox-modal {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    max-width: 820px;
    width: 100%;
    box-shadow: 0 24px 60px rgba(0,0,0,0.5);
    position: relative;
    animation: modalPop 0.3s var(--ease);
  }
  @keyframes modalPop {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
  .lightbox-img-wrap {
    width: 100%;
    aspect-ratio: 16 / 10;
    background: #000;
    position: relative;
  }
  .lightbox-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .lightbox-body {
    padding: 24px 28px;
  }
  .lightbox-body h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 8px;
  }
  .lightbox-body p {
    font-size: 0.92rem;
    color: #4a5568;
    line-height: 1.6;
  }
  .lightbox-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(10,31,68,0.75);
    color: #ffffff;
    border: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    z-index: 10;
  }
  .lightbox-close:hover {
    background: #008C8C;
    transform: scale(1.1);
  }

  /* ── BOTTOM CTA ── */
  .gallery-cta {
    background: linear-gradient(135deg, #071D3E 0%, #0A2F5E 100%);
    color: #ffffff;
    padding: 64px 24px;
    text-align: center;
  }
  .gallery-cta h2 {
    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
    color: #ffffff;
    margin-bottom: 10px;
  }
  .gallery-cta p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.8);
    max-width: 520px;
    margin: 0 auto 28px;
  }
  .cta-btns {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .btn-consult {
    display: inline-flex;
    align-items: center;
    background: #0096c7;
    color: #ffffff;
    padding: 13px 28px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 700;
    box-shadow: 0 8px 24px -6px rgba(0,150,199,0.5);
    transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
  }
  .btn-consult:hover {
    transform: translateY(-2px);
    background: #0084b0;
    box-shadow: 0 12px 28px -6px rgba(0,150,199,0.7);
  }
  .btn-whatsapp-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #ffffff;
    border: 1.5px solid rgba(255,255,255,0.5);
    padding: 12px 26px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 700;
    transition: background 0.25s, border-color 0.25s, transform 0.25s;
  }
  .btn-whatsapp-outline:hover {
    background: rgba(255,255,255,0.12);
    border-color: #25d366;
    transform: translateY(-2px);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  }

  @media (max-width: 640px) {
    .gallery-grid { grid-template-columns: 1fr; gap: 18px; }
    .stats-grid { grid-template-columns: 1fr; gap: 20px; }
    .filter-section { gap: 8px; padding: 24px 16px 12px; }
    .filter-pill { font-size: 0.78rem; padding: 8px 16px; }
    .gallery-hero { padding: 44px 16px 52px; }
    .gallery-section { padding: 18px 16px 56px; }
  }
`;

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  desc: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Patient Care",
    title: "Paediatric Clinical Consultation",
    desc: "Dr. Ketan Patel conducting detailed observational consultation and constitutional history assessment.",
    image: "/images/treatments/autism-care.jpg",
  },
  {
    id: 2,
    category: "Clinics & Facilities",
    title: "Speciality Homeopathy Ahmedabad Clinic",
    desc: "Our state-of-the-art flagship centre located at Himalaya Arcade, Vastrapur, Ahmedabad.",
    image: "/images/treatments/female-infertility.jpg",
  },
  {
    id: 3,
    category: "Neuro Seminars",
    title: "Autism Awareness & Clinical Inclusion Seminar",
    desc: "Dr. Ketan Patel addressing educators, parents, and healthcare professionals on developmental support.",
    image: "/images/treatments/child-neurological-disorders.jpg",
  },
  {
    id: 4,
    category: "Milestones & Smiles",
    title: "Developmental Progress & Milestone Celebrations",
    desc: "Celebrating speech improvements, sensory regulation gains, and joyful moments with family.",
    image: "/images/autism-care/family-peeking.png",
  },
  {
    id: 5,
    category: "Research & Media",
    title: "Clinical Research & Case Documentation Session",
    desc: "Systematic case registry maintenance and longitudinal follow-up review for rare genetic syndromes.",
    image: "/images/developmental-delays/image-3.webp",
  },
  {
    id: 6,
    category: "Patient Care",
    title: "Sensory & Motor Milestone Guidance",
    desc: "Guiding parents on integrating sensory-friendly home routines with constitutional homeopathic remedies.",
    image: "/images/autism-care/beh-3-sensory-girl.png",
  },
  {
    id: 7,
    category: "Neuro Seminars",
    title: "Child Neurology & Genetic Disorder Conference",
    desc: "Presenting observational findings on chromosomal microdeletions and Fragile X comorbidity.",
    image: "/images/treatments/child-behavioral-disorder.jpg",
  },
  {
    id: 8,
    category: "Milestones & Smiles",
    title: "Focus & Learning Confidence in Children",
    desc: "Empowering children with ADHD and Dyslexia to achieve academic milestones with gentle care.",
    image: "/images/treatments/dyslexia.jpg",
  },
  {
    id: 9,
    category: "Clinics & Facilities",
    title: "Specialized Consultation & Dispensary Suite",
    desc: "Hygienic, high-grade individualised dispensing of original potentized homeopathic medicines.",
    image: "/images/treatments/increase-height.jpg",
  },
];

const filterCategories = [
  "All Photos",
  "Patient Care",
  "Clinics & Facilities",
  "Neuro Seminars",
  "Milestones & Smiles",
  "Research & Media",
];

export default function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState("All Photos");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCat === "All Photos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCat);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* HERO */}
      <section className="gallery-hero">
        <div className="wrap">
          <h1>Moments of Healing &amp; Clinical Excellence</h1>
          <p>
            Explore our Ahmedabad, Mumbai and New Delhi clinics, parent seminars, milestone celebrations, clinical consultations, and patient awareness events.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <nav className="filter-section" aria-label="Gallery categories">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${selectedCat === cat ? "active" : ""}`}
            onClick={() => setSelectedCat(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* GALLERY GRID */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="gallery-card"
              onClick={() => setActiveModalItem(item)}
            >
              <div className="gallery-media">
                <span className="gallery-tag-chip">{item.category}</span>
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                <div className="zoom-indicator">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
              <div className="gallery-info">
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STATS HIGHLIGHT STRIP */}
      <section className="stats-strip">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>34+ Years</h3>
            <p>Clinical Experience in Child Neurology</p>
          </div>
          <div className="stat-item">
            <h3>3 Clinics</h3>
            <p>Ahmedabad, Mumbai &amp; New Delhi</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Documented Neurodevelopmental Cases</p>
          </div>
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Families Supported Worldwide</p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeModalItem && (
        <div className="lightbox-backdrop" onClick={() => setActiveModalItem(null)}>
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="lightbox-img-wrap">
              <img src={activeModalItem.image} alt={activeModalItem.title} loading="lazy" decoding="async" />
            </div>
            <div className="lightbox-body">
              <span className="gallery-tag-chip" style={{ position: 'static', display: 'inline-block', marginBottom: '10px' }}>
                {activeModalItem.category}
              </span>
              <h3>{activeModalItem.title}</h3>
              <p>{activeModalItem.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM CTA */}
      <section className="gallery-cta">
        <h2>Experience Speciality Homeopathy Care</h2>
        <p>Book a personal consultation for your child with Dr. Ketan Patel and our dedicated clinical team.</p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-consult">
            Book a Consultation
          </Link>
          <a
            href="https://wa.me/918320131612"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-outline"
          >
            WhatsApp our Team
          </a>
        </div>
      </section>
    </>
  );
}
