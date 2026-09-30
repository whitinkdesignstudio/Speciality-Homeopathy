'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --navy: #0F1D3D;
    --teal: #008C8C;
    --teal-dark: #006b6b;
    --teal-light: #e0f2f1;
    --gold: #C8A96B;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --line: rgba(10,31,68,.10);
    --shadow: 0 20px 48px -12px rgba(10,31,68,.14);
    --shadow-hover: 0 28px 56px -14px rgba(0,140,140,.22);
    --maxw: 1200px;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  
  .what-homeo-wrap {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f0f8f9;
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .what-homeo-wrap h1, 
  .what-homeo-wrap h2, 
  .what-homeo-wrap h3, 
  .what-homeo-wrap h4, 
  .what-homeo-wrap h5 {
    font-family: 'Poppins', sans-serif;
    color: var(--navy);
    font-weight: 600;
    line-height: 1.25;
  }

  .wrap {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── LUXURY HERO ── */
  .homeo-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b3def4 40%, #95cde8 100%);
    padding: 64px 0 74px;
    overflow: hidden;
  }
  .homeo-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 85% 15%, rgba(0,140,140,0.18), transparent 45%),
      radial-gradient(circle at 10% 80%, rgba(200,169,107,0.15), transparent 40%);
    pointer-events: none;
  }
  .homeo-hero-content {
    position: relative;
    z-index: 2;
    max-width: 920px;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(0,140,140,0.3);
    color: var(--teal-dark);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 999px;
    margin-bottom: 18px;
    backdrop-filter: blur(8px);
  }
  .homeo-hero h1 {
    font-size: clamp(2.2rem, 4.2vw, 3.4rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .homeo-hero h1 span {
    color: var(--teal);
  }
  .hero-sub {
    font-size: 1.12rem;
    color: #24426b;
    max-width: 780px;
    margin-bottom: 30px;
    line-height: 1.65;
  }
  .hero-chips-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
  .hero-chip-item {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.9);
    border: 1px solid rgba(0,140,140,0.25);
    border-radius: 12px;
    padding: 10px 18px;
    box-shadow: 0 4px 14px rgba(10,31,68,0.06);
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--navy);
  }
  .chip-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--teal), #0a4a6e);
    color: #fff;
    display: grid;
    place-items: center;
    font-size: 0.8rem;
  }

  /* ── SECTION SHELL ── */
  .sec {
    padding: 72px 0;
  }
  .sec-white {
    background: #ffffff;
  }
  .sec-tint {
    background: #f0f8f9;
  }
  .sec-head {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 48px;
  }
  .sec-eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--teal);
    display: block;
    margin-bottom: 8px;
  }
  .sec-title {
    font-size: clamp(1.8rem, 3.2vw, 2.4rem);
    color: var(--navy);
    font-weight: 700;
    margin-bottom: 12px;
  }
  .sec-desc {
    font-size: 1.02rem;
    color: #4b6382;
  }

  /* ── CARDS & GRIDS ── */
  .grid-5 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 22px;
  }
  .principle-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 28px 24px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .principle-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--teal);
  }
  .card-step-num {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: var(--teal-light);
    color: var(--teal);
    display: grid;
    place-items: center;
    font-weight: 800;
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
  .principle-card h3 {
    font-size: 1.18rem;
    color: var(--navy);
    margin-bottom: 10px;
  }
  .principle-card p {
    font-size: 0.92rem;
    color: #4b6382;
    line-height: 1.6;
  }

  /* ── FOUNDATION FEATURE CARD ── */
  .founder-feature {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    gap: 40px;
    align-items: center;
    background: #ffffff;
    border-radius: 20px;
    padding: 44px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
    margin-bottom: 48px;
  }
  .founder-quote-box {
    background: linear-gradient(135deg, #0F1D3D 0%, #15325b 100%);
    color: #ffffff;
    border-radius: 16px;
    padding: 36px;
    position: relative;
  }
  .founder-quote-box::after {
    content: "“";
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 6rem;
    color: rgba(255,255,255,0.08);
    font-family: serif;
    line-height: 1;
  }
  .founder-quote-box h3 {
    color: #5fe3d0;
    font-size: 1.35rem;
    margin-bottom: 12px;
  }
  .founder-quote-box p {
    color: #cbd5e1;
    font-size: 0.96rem;
    line-height: 1.7;
    margin-bottom: 16px;
  }
  .founder-meta {
    border-top: 1px solid rgba(255,255,255,0.15);
    padding-top: 14px;
    font-size: 0.85rem;
    color: #94a3b8;
  }

  /* ── PHARMACOLOGY SPLIT ── */
  .pharma-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin: 36px 0;
  }
  .pharma-box {
    background: #f8fbfe;
    border-radius: 14px;
    padding: 24px;
    border-left: 4px solid var(--teal);
    border-top: 1px solid #e2edf6;
    border-right: 1px solid #e2edf6;
    border-bottom: 1px solid #e2edf6;
  }
  .pharma-box h4 {
    font-size: 1.05rem;
    color: var(--navy);
    margin-bottom: 8px;
  }
  .pharma-box p {
    font-size: 0.9rem;
    color: #4b6382;
    margin: 0;
  }

  /* ── 8 CLINICAL SPECIALTIES SHOWCASE ── */
  .specialties-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }
  .spec-item {
    background: #ffffff;
    border-radius: 18px;
    padding: 30px;
    border: 1px solid #e0edf6;
    box-shadow: 0 10px 24px -10px rgba(10,31,68,0.08);
    transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
  }
  .spec-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: var(--teal);
  }
  .spec-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #eef9f9;
    color: var(--teal);
    font-weight: 700;
    font-size: 0.8rem;
    padding: 6px 14px;
    border-radius: 8px;
    margin-bottom: 14px;
  }
  .spec-item h4 {
    font-size: 1.25rem;
    color: var(--navy);
    margin-bottom: 12px;
  }
  .spec-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .spec-list li {
    padding-left: 20px;
    position: relative;
    font-size: 0.9rem;
    color: #4b6382;
    margin-bottom: 10px;
    line-height: 1.55;
  }
  .spec-list li::before {
    content: "•";
    position: absolute;
    left: 4px;
    color: var(--teal);
    font-size: 1.2rem;
    line-height: 1;
    top: -2px;
  }
  .spec-list li strong {
    color: var(--navy);
  }

  /* ── COMPARISON TABLE ── */
  .table-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 36px;
    box-shadow: var(--shadow);
    border: 1px solid #ddecfa;
    overflow-x: auto;
  }
  .luxury-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }
  .luxury-table th {
    background: #0F1D3D;
    color: #ffffff;
    padding: 16px 20px;
    font-size: 0.95rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  .luxury-table th:first-child { border-top-left-radius: 10px; }
  .luxury-table th:last-child { border-top-right-radius: 10px; }
  .luxury-table td {
    padding: 18px 20px;
    border-bottom: 1px solid #eef2f6;
    font-size: 0.92rem;
    color: #3b506d;
    vertical-align: top;
  }
  .luxury-table tr:hover td {
    background: #f7fafc;
  }

  /* ── CTA BANNER LUXURY ── */
  .cta-section {
    background: linear-gradient(135deg, #0F1D3D 0%, #15325b 100%);
    color: #ffffff;
    border-radius: 22px;
    padding: 56px 44px;
    text-align: center;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
    margin-top: 48px;
  }
  .cta-section h2 {
    color: #ffffff;
    font-size: clamp(1.8rem, 3.2vw, 2.5rem);
    margin-bottom: 14px;
  }
  .cta-section p {
    color: #cbd5e1;
    max-width: 680px;
    margin: 0 auto 28px;
    font-size: 1.05rem;
  }
  .btn-row {
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }
  .btn-gold {
    background: #008C8C;
    color: #ffffff;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 999px;
    text-decoration: none;
    transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
    box-shadow: 0 8px 20px -6px rgba(0,140,140,0.5);
  }
  .btn-gold:hover {
    background: #007070;
    transform: translateY(-2px);
    box-shadow: 0 12px 26px -6px rgba(0,140,140,0.7);
  }
  .btn-outline-light {
    border: 1.5px solid rgba(255,255,255,0.4);
    color: #ffffff;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 999px;
    text-decoration: none;
    backdrop-filter: blur(8px);
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .btn-outline-light:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    .founder-feature {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 640px) {
    .cta-section {
      padding: 36px 20px;
    }
    .hero-chips-bar {
      flex-direction: column;
    }
  }
`;

export default function WhatIsHomeopathyPage() {
  const [activeTab, setActiveTab] = useState<'principles' | 'pharma' | 'specialties'>('principles');

  return (
    <div className="what-homeo-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO BANNER ── */}
      <section className="homeo-hero">
        <div className="wrap">
          <div className="homeo-hero-content">
            <h1>What is <span>Homeopathy?</span> Science, Principles &amp; Specialties</h1>
            <p className="hero-sub">
              Discovered over two centuries ago and recognized globally by the World Health Organization, homeopathy is an advanced, non-toxic, and natural medical system that works with cellular vitality to treat disease at its deepest constitutional roots.
            </p>

            <div className="hero-chips-bar">
              <div className="hero-chip-item">
                <span className="chip-icon">01</span>
                <span>Zero Harmful Side-Effects</span>
              </div>
              <div className="hero-chip-item">
                <span className="chip-icon">02</span>
                <span>Loved by Children (Sweet Pills &amp; Drops)</span>
              </div>
              <div className="hero-chip-item">
                <span className="chip-icon">03</span>
                <span>Documented in 83+ Countries</span>
              </div>
              <div className="hero-chip-item">
                <span className="chip-icon">04</span>
                <span>Prophylactic Immunity Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: ORIGINS & FOUNDER ── */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow">Medical History &amp; Foundations</span>
            <h2 className="sec-title">Origin &amp; Hahnemannian Discovery</h2>
            <p className="sec-desc">
              How a courageous German physician rejected barbaric 18th-century practices to gift mankind with the eternal principle of gentle healing.
            </p>
          </div>

          <div className="founder-feature">
            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '14px', color: '#0F1D3D' }}>
                Dr. Samuel Hahnemann (1755–1843)
              </h3>
              <p style={{ color: '#4b6382', marginBottom: '14px' }}>
                Master Hahnemann was an esteemed German physician, chemist, and linguist. At the peak of intellectual frustration with bloodletting, toxic mercury dosing, and speculative polypharmacy of his era, he resigned from active allopathic practice to discover a true, rational science of therapeutics.
              </p>
              <p style={{ color: '#4b6382', marginBottom: '14px' }}>
                Translating Dr. William Cullen&apos;s <em>Treatise on Materia Medica</em>, Hahnemann experimented upon himself with <strong>China (Cinchona bark)</strong>, which contains natural quinine. He demonstrated that consuming cinchona produced malaria-like intermittent chills, fever, and perspiration in a healthy organism — which directly explained why it possessed the curative power to extinguish malaria in the sick!
              </p>
              <p style={{ color: '#4b6382' }}>
                Over the next 50 years, Hahnemann and his disciples proved thousands of remedies upon healthy human provers, documenting their exact symptoms into the monumental <em>Materia Medica</em>.
              </p>
            </div>

            <div className="founder-quote-box">
              <h3>Similia Similibus Curentur</h3>
              <p>
                &ldquo;A drug cures those exact symptoms in a diseased person which it can produce in healthy human beings. It is like applying a matching key to an intricate lock from an exhaustive bunch of keys.&rdquo;
              </p>
              <div className="founder-meta">
                — <strong>Dr. Samuel Hahnemann</strong>, <em>Organon of Medicine</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE 5 CORE PRINCIPLES ── */}
      <section className="sec sec-tint">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow">Scientific Framework</span>
            <h2 className="sec-title">The Five Inviolable Laws of Homeopathy</h2>
            <p className="sec-desc">
              Unlike chemical therapies that continuously change with each patent cycle, homeopathy is governed by immutable biological laws:
            </p>
          </div>

          <div className="grid-5">
            <div className="principle-card">
              <div className="card-step-num">01</div>
              <h3>Law of Similimum</h3>
              <p>
                Like cures like. The total symptom totality of the sick person is systematically mapped to the matching symptom picture of proven medicines in the <em>Materia Medica</em>.
              </p>
            </div>

            <div className="principle-card">
              <div className="card-step-num">02</div>
              <h3>Law of Minimum Dose</h3>
              <p>
                Only the minimal required bio-energetic stimulus is administered. This avoids medicinal aggravations, organ overload, and pharmaceutical dependence.
              </p>
            </div>

            <div className="principle-card">
              <div className="card-step-num">03</div>
              <h3>Science of Potentisation</h3>
              <p>
                Through systematic serial dilution and rhythmic succussion, crude material toxicity is reduced to absolute zero while latent curative dynamic power is multiplied millions of times.
              </p>
            </div>

            <div className="principle-card">
              <div className="card-step-num">04</div>
              <h3>Theory of Miasms</h3>
              <p>
                Hahnemann recognized that chronic disease relapses occur due to deep-seated constitutional diatheses (Psora, Sycosis, Syphilis, and Tubercular) that must be eradicated constitutional-wide.
              </p>
            </div>

            <div className="principle-card">
              <div className="card-step-num">05</div>
              <h3>Hering&apos;s Law of Cure</h3>
              <p>
                True curative direction moves from above downward, from inside outward, from more vital organs (brain, heart) to less vital structures (skin, limbs), and in reverse order of onset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PHARMACOLOGY & DISPENSING ── */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow">Pharmacological Science</span>
            <h2 className="sec-title">How Homeopathic Medicines Are Made &amp; Dispensed</h2>
            <p className="sec-desc">
              Prepared strictly under standardized GMP pharmacopoeia from botanical, mineral, and physiological sources:
            </p>
          </div>

          <div className="pharma-strip">
            <div className="pharma-box">
              <h4>Serial Dilution &amp; Avogadro&apos;s Mystery</h4>
              <p>
                Dilutions beyond 12C surpass Avogadro’s constant (6.022 × 10²³). While modern chemistry can detect no crude molecules, physics demonstrates nano-structures, water clusters, and biological signaling that stimulate receptor networks without organ burden.
              </p>
            </div>

            <div className="pharma-box">
              <h4>Pure Inert Vehicles</h4>
              <p>
                Medicines are impregnated into pharmaceutical-grade lactose powders, sucrose sweet globules, or triple-distilled alcohol drops. They have no expiration under proper storage away from strong magnetic fields and direct sunlight.
              </p>
            </div>

            <div className="pharma-box">
              <h4>Sublingual Tongue Absorption</h4>
              <p>
                Medicines are absorbed directly through the sublingual oral mucous membrane. Never swallow roughly with heavy meals. Take on an empty mouth, avoiding coffee, camphor, or garlic for 30 minutes before and after.
              </p>
            </div>

            <div className="pharma-box">
              <h4>Global WHO Acceptance</h4>
              <p>
                Recognized by the World Health Organization as the second most widely used system of medicine globally, practiced officially in Germany, France, the UK, Austria, Switzerland, Netherlands, and India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: 8 CLINICAL SPECIALTIES SHOWCASE ── */}
      <section className="sec sec-tint">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow">Proven Clinical Practice</span>
            <h2 className="sec-title">Homeopathy Across 8 Clinical Specialties</h2>
            <p className="sec-desc">
              Based on Dr. Ketan Patel&apos;s decades of hospital panel practice, charitable trust clinics, and international research:
            </p>
          </div>

          <div className="specialties-grid">
            {/* 1. Pediatrics & Child Neurology */}
            <div className="spec-item">
              <span className="spec-badge">Pediatrics &amp; Neurology</span>
              <h4>Autism, Cerebral Palsy &amp; GDD</h4>
              <ul className="spec-list">
                <li><strong>Autism Spectrum Disorder (ASD):</strong> Progressive cognitive, eye contact, and language improvement observed within initial 120-day cycles.</li>
                <li><strong>Cerebral Palsy &amp; Spasticity:</strong> Repairs glial connections, improves neck holding, sitting, standing, and deglutition.</li>
                <li><strong>Down Syndrome (Trisomy 21):</strong> Speech clarity improvements up to 70%, reduced recurrent chest infections.</li>
                <li><strong>Dyslexia &amp; Slow Learners:</strong> Clears visual-phonological deficits, improves scholastic grades in 8 to 10 months.</li>
                <li><strong>Rare Genetic Syndromes:</strong> Prader-Willi, Angelman, Rett, and CDD.</li>
              </ul>
            </div>

            {/* 2. Obstetrics & Fertility */}
            <div className="spec-item">
              <span className="spec-badge">Obstetrics &amp; Gynaecology</span>
              <h4>Fertility &amp; Pregnancy Care</h4>
              <ul className="spec-list">
                <li><strong>Recurrent Abortions:</strong> Over 95% full-term pregnancy success rate in unexplained, habitual, toxoplasma, and CMV losses.</li>
                <li><strong>IUGR (Poor Fetal Growth):</strong> Promotes normal birth weights in babies with uterine growth restriction.</li>
                <li><strong>Pre-eclampsia:</strong> Normalizes blood pressure, edema, and placental insufficiency within 2 to 3 days.</li>
                <li><strong>Threatened Abortion:</strong> Over 95% saving rate within 24 hours of timely medication.</li>
                <li><strong>PCOD / PCOS &amp; Tubal Health:</strong> Restores ovulatory cycles and clears secondary infertility.</li>
              </ul>
            </div>

            {/* 3. Neonatology */}
            <div className="spec-item">
              <span className="spec-badge">Neonatology</span>
              <h4>Newborn &amp; Infant Care</h4>
              <ul className="spec-list">
                <li><strong>Low Birth Weight / Pre-term:</strong> Accelerates weight gain by 35 to 40 grams per day until desired benchmarks.</li>
                <li><strong>Neonatal Jaundice:</strong> Clears elevated hyperbilirubinemia within 7 days without rebound.</li>
                <li><strong>Cephal Hematoma &amp; Birth Trauma:</strong> Accelerates natural resorption of cranial swelling safely.</li>
              </ul>
            </div>

            {/* 4. Male Infertility */}
            <div className="spec-item">
              <span className="spec-badge">Andrology &amp; Urology</span>
              <h4>Oligospermia &amp; Motility</h4>
              <ul className="spec-list">
                <li><strong>Oligospermia:</strong> Raises sperm count 5 to 6 times within first 3 months of treatment.</li>
                <li><strong>Motility Correction:</strong> Improves motility grades from I/II to Grade III/IV, boosting natural conception rates.</li>
                <li><strong>Permanent Gains:</strong> Spermatogenesis normalization lasts for 8 to 10 years post completion of 7–9 month course.</li>
              </ul>
            </div>

            {/* 5. Orthopedics & Spine */}
            <div className="spec-item">
              <span className="spec-badge">Orthopedics &amp; Spine</span>
              <h4>PVD Disc &amp; Sciatica</h4>
              <ul className="spec-list">
                <li><strong>Prolapsed Vertebral Disc (PVD):</strong> Non-surgical repair begins in 7 days, complete ligament stabilization in 2–3 months.</li>
                <li><strong>85%+ Success Rate:</strong> Prevents spinal fusion and decompression surgery without NSAID side effects.</li>
                <li><strong>Osteoporosis:</strong> Enhances bone mineral uptake and accelerates callus formation in stress fractures.</li>
              </ul>
            </div>

            {/* 6. General Medicine */}
            <div className="spec-item">
              <span className="spec-badge">Internal Medicine</span>
              <h4>Infections &amp; Organ Disorders</h4>
              <ul className="spec-list">
                <li><strong>Infective Hepatitis:</strong> 100% success; normalizes SGPT readings even above 2000 U/L within 7 to 10 days.</li>
                <li><strong>Typhoid:</strong> Eliminates fever within 24 hours with complete non-relapsing clearance in 5 days.</li>
                <li><strong>Anemia:</strong> Rapid 2 gm% hemoglobin increase in 15 days without iron syrup constipation.</li>
                <li><strong>MDR Tuberculosis:</strong> Immunomodulator against resistant Mycobacterium bacilli.</li>
              </ul>
            </div>

            {/* 7. ENT & Respiratory */}
            <div className="spec-item">
              <span className="spec-badge">Respiratory &amp; ENT</span>
              <h4>Asthma &amp; Allergic Rhinitis</h4>
              <ul className="spec-list">
                <li><strong>Allergic Bronchitis &amp; Asthma:</strong> Eliminates bronchospasms, sub-mucosal inflammation, and wheezing.</li>
                <li><strong>Allergic Rhinitis:</strong> Controls sneezing paroxysms, pollen allergy, and cold drafts.</li>
                <li><strong>Vocal Cord Nodules:</strong> Resolves singer&apos;s hoarseness and vocal cords nodules without surgery.</li>
              </ul>
            </div>

            {/* 8. Dermatology & Surgery Support */}
            <div className="spec-item">
              <span className="spec-badge">Dermatology</span>
              <h4>Atopic Dermatitis &amp; Healing</h4>
              <ul className="spec-list">
                <li><strong>Atopic Dermatitis (Eczema):</strong> Normalizes skin in 20–30 days, breaking the itch-scratch cycle without steroids.</li>
                <li><strong>Insect &amp; Wasp Stings:</strong> Completely neutralizes venom, edema, and acute pain within 2 to 3 hours.</li>
                <li><strong>Post-Surgical Healing:</strong> Accelerates delayed wound healing and prevents keloid scars.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLASSICAL VS POLYPHARMACY ── */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow">Methodology Comparison</span>
            <h2 className="sec-title">Classical Homeopathy vs. Targeted Polypharmacy</h2>
            <p className="sec-desc">
              How Speciality Homeopathy incorporates scientific precision and structured protocols for multi-faceted neuro-developmental cases:
            </p>
          </div>

          <div className="table-card">
            <table className="luxury-table">
              <thead>
                <tr>
                  <th>Clinical Dimension</th>
                  <th>Classical Single Remedy</th>
                  <th>Speciality Homeopathy Protocols</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Theoretical Basis</strong></td>
                  <td>Single remedy administered at spaced intervals with observational waiting.</td>
                  <td>Sequential and organotropic formulations addressing brain cells, micro-toxins, and gut health simultaneously.</td>
                </tr>
                <tr>
                  <td><strong>Autism &amp; Complex Neurology</strong></td>
                  <td>Single remedies often face miasmatic blocks due to heavy metals, mold, and vaccinations.</td>
                  <td>Combines neuro-immunity enhancers, heavy metal chelating remedies, and GFCF metabolic support.</td>
                </tr>
                <tr>
                  <td><strong>High-Volume Clinical Demands</strong></td>
                  <td>Lengthy questioning per session makes mass epidemics and crowded OPDs challenging.</td>
                  <td>Systematic, standardized formulations tested on 10,000+ patients across 83 countries via HOMPATH software.</td>
                </tr>
                <tr>
                  <td><strong>Measurable Milestone Tracking</strong></td>
                  <td>Subjective timelines with varying intervals.</td>
                  <td>Structured 120-day evaluation phases with pediatric neurology scoring and speech assessments.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA Banner */}
          <div className="cta-section">
            <h2>Experience the Gentle Power of Speciality Homeopathy</h2>
            <p>
              Consult Dr. Ketan Patel and our team of senior homeopathic physicians at our Ahmedabad headquarters, regional consultation centers, or worldwide tele-medicine clinic.
            </p>
            <div className="btn-row">
              <Link href="/inquiry" className="btn-gold">
                Book a Consultation
              </Link>
              <Link href="/treatments" className="btn-outline-light">
                Explore All Treatments
              </Link>
              <Link href="/how-to-pay-fees" className="btn-outline-light">
                Fee &amp; Banking Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
