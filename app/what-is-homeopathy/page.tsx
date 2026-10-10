'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FlaskConical,
  Pill,
  Globe2,
  GitCompare,
  Stethoscope,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  Activity,
  Brain
} from 'lucide-react';

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --navy: #0F1D3D;
    --teal: #008C8C;
    --teal-dark: #006b6b;
    --teal-light: #e0f2f1;
    --teal-bg: #f0f8f9;
    --gold: #C8A96B;
    --gold-light: #fef8ee;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --line: rgba(10,31,68,.10);
    --shadow: 0 16px 40px -10px rgba(10,31,68,.10);
    --shadow-hover: 0 24px 50px -12px rgba(0,140,140,.20);
    --maxw: 1240px;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  
  .what-homeo-wrap {
    font-family: 'Open Sans', system-ui, -apple-system, sans-serif;
    color: var(--graphite);
    background: #f7fafc;
    font-size: 16px;
    line-height: 1.75;
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
    line-height: 1.28;
  }

  .wrap {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── HERO BANNER ── */
  .homeo-hero {
    position: relative;
    background: linear-gradient(135deg, #d3eefc 0%, #bde4f7 42%, #9ad3ee 100%);
    padding: 72px 0 76px;
    overflow: hidden;
    border-bottom: 1px solid rgba(0,140,140,0.18);
  }
  .homeo-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 88% 18%, rgba(0,140,140,0.16), transparent 48%),
      radial-gradient(circle at 8% 85%, rgba(200,169,107,0.14), transparent 42%);
    pointer-events: none;
  }
  .homeo-hero-content {
    position: relative;
    z-index: 2;
    max-width: 960px;
  }
  .homeo-hero h1 {
    font-size: clamp(2.3rem, 4.4vw, 3.5rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 18px;
  }
  .homeo-hero h1 span {
    color: var(--teal);
  }
  .hero-sub {
    font-size: 1.15rem;
    color: #1e3a63;
    max-width: 860px;
    margin-bottom: 0;
    line-height: 1.75;
  }

  /* ── QUICK NAV BAR ── */
  .toc-nav {
    background: #ffffff;
    border-bottom: 1px solid #e1ecf4;
    position: sticky;
    top: 0;
    z-index: 40;
    box-shadow: 0 4px 20px rgba(10,31,68,0.04);
  }
  .toc-nav-scroll {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding: 12px 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .toc-nav-scroll::-webkit-scrollbar { display: none; }
  .toc-nav-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #4b6382;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  .toc-nav-link:hover, .toc-nav-link.active {
    color: var(--teal);
    background: var(--teal-light);
  }

  /* ── SECTIONS ── */
  .sec {
    padding: 76px 0;
    scroll-margin-top: 60px;
  }
  .sec-white { background: #ffffff; }
  .sec-tint { background: #f0f7f9; }
  .sec-soft { background: #f9fbfc; }

  .sec-head {
    text-align: center;
    max-width: 840px;
    margin: 0 auto 48px;
  }
  .sec-title {
    font-size: clamp(1.9rem, 3.2vw, 2.5rem);
    color: var(--navy);
    font-weight: 700;
    margin-bottom: 14px;
    letter-spacing: -0.01em;
  }
  .sec-desc {
    font-size: 1.05rem;
    color: #4b6382;
    line-height: 1.68;
  }

  /* ── SECTION 1: HISTORY ── */
  .history-layout {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 44px;
    align-items: start;
    margin-bottom: 48px;
  }
  .history-body p {
    font-size: 1.02rem;
    color: #3b506d;
    margin-bottom: 18px;
    line-height: 1.8;
  }
  .quote-latin-box {
    background: linear-gradient(135deg, #0F1D3D 0%, #173866 100%);
    color: #ffffff;
    border-radius: 20px;
    padding: 38px;
    position: relative;
    box-shadow: var(--shadow);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .quote-latin-box::after {
    content: "“";
    position: absolute;
    top: 10px;
    right: 24px;
    font-size: 6.5rem;
    color: rgba(255,255,255,0.07);
    font-family: Georgia, serif;
    line-height: 1;
    pointer-events: none;
  }
  .quote-latin-box h3 {
    color: #5fe3d0;
    font-size: 1.5rem;
    margin-bottom: 14px;
    font-style: italic;
  }
  .quote-latin-box p {
    color: #d2deec;
    font-size: 1.02rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .quote-author {
    border-top: 1px solid rgba(255,255,255,0.15);
    padding-top: 16px;
    font-size: 0.88rem;
    color: #9bb2ce;
  }
  .quote-author strong {
    color: #ffffff;
  }

  /* Timeline strip */
  .timeline-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
    margin-top: 36px;
  }
  .timeline-step {
    background: #ffffff;
    border-radius: 14px;
    padding: 24px;
    border: 1px solid #ddecfa;
    box-shadow: 0 4px 14px rgba(10,31,68,0.04);
    position: relative;
    border-top: 4px solid var(--teal);
  }
  .timeline-year {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--teal);
    font-family: 'Poppins', sans-serif;
    margin-bottom: 6px;
  }
  .timeline-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 8px;
  }
  .timeline-text {
    font-size: 0.88rem;
    color: #5a718d;
    line-height: 1.6;
  }

  /* ── SECTION 2: CORE PRINCIPLES ── */
  .principles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 26px;
  }
  .principle-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 32px 28px;
    border: 1px solid #e1edf6;
    box-shadow: var(--shadow);
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s var(--ease);
    display: flex;
    flex-direction: column;
  }
  .principle-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--teal);
  }
  .principle-icon-row {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }
  .principle-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: var(--teal-light);
    color: var(--teal);
    display: grid;
    place-items: center;
  }
  .principle-card h3 {
    font-size: 1.3rem;
    color: var(--navy);
    margin-bottom: 12px;
  }
  .principle-card p {
    font-size: 0.95rem;
    color: #4b6382;
    line-height: 1.7;
    margin-bottom: 16px;
  }
  .hering-points {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }
  .hering-points li {
    position: relative;
    padding-left: 24px;
    font-size: 0.9rem;
    color: #3b506d;
    margin-bottom: 8px;
    line-height: 1.5;
  }
  .hering-points li::before {
    content: "➔";
    position: absolute;
    left: 2px;
    color: var(--teal);
    font-weight: 700;
  }

  /* ── SECTION 3: PHARMACOLOGY & PARADOX ── */
  .pharma-sources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 40px;
  }
  .source-card {
    background: #ffffff;
    border-radius: 14px;
    padding: 22px;
    border: 1px solid #ddecfa;
    box-shadow: 0 4px 14px rgba(10,31,68,0.04);
  }
  .source-card h4 {
    font-size: 1.02rem;
    color: var(--navy);
    margin-bottom: 6px;
  }
  .source-card p {
    font-size: 0.86rem;
    color: #5a718d;
    margin: 0 0 8px 0;
    line-height: 1.5;
  }
  .source-examples-text {
    font-size: 0.82rem;
    color: var(--teal-dark);
    margin: 0;
    line-height: 1.4;
  }

  /* Process Flowchart */
  .flowchart-container {
    background: #ffffff;
    border-radius: 20px;
    padding: 40px 32px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
    margin-bottom: 48px;
  }
  .flowchart-title {
    font-size: 1.25rem;
    color: var(--navy);
    font-weight: 700;
    text-align: center;
    margin-bottom: 28px;
  }
  .flowchart-steps {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }
  .flow-step-box {
    flex: 1 1 200px;
    background: #f8fbfe;
    border: 1.5px solid #d6e8f7;
    border-radius: 14px;
    padding: 22px 18px;
    text-align: center;
    position: relative;
  }
  .flow-step-box h4 {
    font-size: 1.05rem;
    color: var(--navy);
    margin-bottom: 8px;
  }
  .flow-step-box p {
    font-size: 0.84rem;
    color: #5a718d;
    line-height: 1.45;
  }
  .flow-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--teal);
    font-size: 1.4rem;
    font-weight: 800;
  }

  /* Deep Paradox 2-col */
  .paradox-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .paradox-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 34px 30px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
  }
  .paradox-card.science {
    border-left: 5px solid #2563eb;
  }
  .paradox-card.nano {
    border-left: 5px solid var(--teal);
  }
  .paradox-card h3 {
    font-size: 1.28rem;
    color: var(--navy);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .paradox-card p {
    font-size: 0.95rem;
    color: #4b6382;
    line-height: 1.7;
    margin-bottom: 14px;
  }

  /* ── SECTION 4: CLINICAL DISPENSING ── */
  .dispensing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    gap: 26px;
  }
  .dispense-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 32px 26px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
  }
  .dispense-icon {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: var(--teal-light);
    color: var(--teal);
    display: grid;
    place-items: center;
    margin-bottom: 18px;
  }
  .dispense-card h3 {
    font-size: 1.2rem;
    color: var(--navy);
    margin-bottom: 10px;
  }
  .dispense-card p {
    font-size: 0.94rem;
    color: #4b6382;
    line-height: 1.68;
    margin-bottom: 12px;
  }
  .dispense-tip {
    background: #f0f8f9;
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 0.86rem;
    color: #0b5c68;
    margin-top: auto;
    border-left: 3px solid var(--teal);
  }

  /* ── SECTION 5: HISTORICAL CYCLE & INDIA AYUSH ── */
  .history-cycle-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 36px;
    align-items: center;
    margin-bottom: 40px;
  }
  .cycle-body p {
    font-size: 1.02rem;
    color: #3b506d;
    line-height: 1.8;
    margin-bottom: 18px;
  }
  .ayush-card {
    background: linear-gradient(135deg, #0F1D3D 0%, #18335c 100%);
    color: #ffffff;
    border-radius: 22px;
    padding: 38px 32px;
    box-shadow: var(--shadow);
    border: 1px solid rgba(255,255,255,0.12);
  }
  .ayush-card h3 {
    font-size: 1.4rem;
    color: #ffffff;
    margin-bottom: 14px;
  }
  .ayush-card p {
    font-size: 0.96rem;
    color: #cad8e8;
    line-height: 1.7;
    margin-bottom: 18px;
  }
  .ayush-bullets {
    list-style: none;
    padding: 0;
  }
  .ayush-bullets li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.9rem;
    color: #ddecfa;
    margin-bottom: 10px;
  }

  /* ── SECTION 6: COMPARISON TABLE & DILEMMA ── */
  .table-wrapper {
    background: #ffffff;
    border-radius: 20px;
    padding: 36px;
    box-shadow: var(--shadow);
    border: 1px solid #ddecfa;
    overflow-x: auto;
    margin-bottom: 44px;
  }
  .paradigm-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    min-width: 680px;
  }
  .paradigm-table th {
    background: #0F1D3D;
    color: #ffffff;
    padding: 18px 22px;
    font-size: 0.96rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-align: left;
  }
  .paradigm-table th:first-child { border-top-left-radius: 12px; }
  .paradigm-table th:last-child { border-top-right-radius: 12px; }
  .paradigm-table td {
    padding: 20px 22px;
    border-bottom: 1px solid #eaf0f7;
    font-size: 0.94rem;
    color: #3b506d;
    vertical-align: top;
    line-height: 1.65;
  }
  .paradigm-table tr:last-child td { border-bottom: none; }
  .paradigm-table tr:hover td { background: #f8fbfe; }
  .col-feature { font-weight: 700; color: var(--navy); width: 22%; }
  .col-unicism { width: 39%; background: #fafcfe; }
  .col-complex { width: 39%; }

  .dilemma-box {
    background: #fdfaf3;
    border: 1.5px solid #fae6c3;
    border-radius: 18px;
    padding: 32px 30px;
  }
  .dilemma-box h3 {
    font-size: 1.25rem;
    color: #92510b;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .dilemma-box p {
    font-size: 0.98rem;
    color: #6d4107;
    line-height: 1.75;
    margin: 0;
  }

  /* ── SECTION 7: CLINICAL SPECIALTIES SHOWCASE ── */
  .specialties-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 26px;
  }
  .spec-item {
    background: #ffffff;
    border-radius: 18px;
    padding: 30px;
    border: 1px solid #e0edf6;
    box-shadow: 0 10px 24px -10px rgba(10,31,68,0.06);
    transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
  }
  .spec-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: var(--teal);
  }
  .spec-item h4 {
    font-size: 1.22rem;
    color: var(--navy);
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--teal-light);
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

  /* ── SECTION 8: CTA ── */
  .cta-section {
    background: linear-gradient(135deg, #0F1D3D 0%, #15325b 100%);
    color: #ffffff;
    border-radius: 24px;
    padding: 60px 48px;
    text-align: center;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
    margin-top: 40px;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .cta-section h2 {
    color: #ffffff;
    font-size: clamp(2rem, 3.4vw, 2.7rem);
    margin-bottom: 16px;
  }
  .cta-section p {
    color: #cbd5e1;
    max-width: 720px;
    margin: 0 auto 32px;
    font-size: 1.08rem;
    line-height: 1.7;
  }
  .btn-row {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .btn-gold {
    background: #008C8C;
    color: #ffffff;
    font-weight: 600;
    padding: 15px 32px;
    border-radius: 999px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
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
    padding: 15px 30px;
    border-radius: 999px;
    text-decoration: none;
    backdrop-filter: blur(8px);
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .btn-outline-light:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 960px) {
    .history-layout { grid-template-columns: 1fr; }
    .paradox-grid { grid-template-columns: 1fr; }
    .history-cycle-grid { grid-template-columns: 1fr; }
    .flowchart-steps { flex-direction: column; }
    .flow-arrow { transform: rotate(90deg); margin: 6px 0; }
  }

  @media (max-width: 640px) {
    .cta-section { padding: 40px 24px; }
    .table-wrapper { padding: 20px 14px; }
  }
`;

export default function WhatIsHomeopathyPage() {
  const [activeSection, setActiveSection] = useState('history');

  return (
    <div className="what-homeo-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO BANNER ── */}
      <section className="homeo-hero">
        <div className="wrap">
          <div className="homeo-hero-content">
            <h1>
              What is <span>Homeopathy?</span> An In-Depth Study of Homeopathic Science
            </h1>
            <p className="hero-sub">
              An enhanced, authoritative, and comprehensive overview of homeopathic medicine — from Dr. Samuel Hahnemann’s 1796 discovery and the 1810 <em>Organon of Medicine</em> to modern nano-pharmacology, core therapeutic laws, and contemporary global clinical paradigms.
            </p>
          </div>
        </div>
      </section>

      {/* ── STICKY QUICK-NAV BAR ── */}
      <nav className="toc-nav" aria-label="Table of Contents">
        <div className="wrap">
          <div className="toc-nav-scroll">
            <a href="#history" className="toc-nav-link" onClick={() => setActiveSection('history')}>
              <BookOpen size={14} /> 1. Historical Foundation (1796)
            </a>
            <a href="#principles" className="toc-nav-link" onClick={() => setActiveSection('principles')}>
              <Award size={14} /> 2. Core Foundational Principles
            </a>
            <a href="#pharmacology" className="toc-nav-link" onClick={() => setActiveSection('pharmacology')}>
              <FlaskConical size={14} /> 3. Pharmacology &amp; Scientific Paradox
            </a>
            <a href="#dispensing" className="toc-nav-link" onClick={() => setActiveSection('dispensing')}>
              <Pill size={14} /> 4. Clinical Dispensing
            </a>
            <a href="#resurrection" className="toc-nav-link" onClick={() => setActiveSection('resurrection')}>
              <Globe2 size={14} /> 5. Global Resurrection &amp; AYUSH
            </a>
            <a href="#paradigms" className="toc-nav-link" onClick={() => setActiveSection('paradigms')}>
              <GitCompare size={14} /> 6. Classical vs. Polypharmacy
            </a>
            <a href="#specialties" className="toc-nav-link" onClick={() => setActiveSection('specialties')}>
              <Stethoscope size={14} /> 7. Clinical Specialties in Action
            </a>
          </div>
        </div>
      </nav>

      {/* ── 1. INTRODUCTION AND HISTORICAL FOUNDATION ── */}
      <section id="history" className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="sec-title">1. Introduction and Historical Foundation</h2>
            <p className="sec-desc">
              How a courageous German physician and chemist rejected barbaric 18th-century practices to systematically codify the rational laws of gentle healing.
            </p>
          </div>

          <div className="history-layout">
            <div className="history-body">
              <p>
                <strong>Homeopathy is a distinct system of complementary and alternative medicine</strong> founded by the German physician, chemist, and linguist <strong>Dr. Christian Friedrich Samuel Hahnemann (1755–1843)</strong>. Dissatisfied with the aggressive medical practices of his era—such as bloodletting, purging, and the administration of massive, toxic doses of mercury—Hahnemann sought a gentler, more rational therapeutic framework.
              </p>
              <p>
                The system originated in <strong>1796</strong> when Hahnemann, while translating William Cullen’s <em>A Treatise on the Materia Medica</em>, questioned why Cinchona bark (containing quinine) effectively treated intermittent fever (malaria). He ingested the bark himself while in perfect health and observed that it produced transient, malaria-like symptoms. This self-experimentation led to the formulation of the golden therapeutic law:
              </p>
              <div style={{
                background: '#eef9f9',
                borderLeft: '4px solid var(--teal)',
                padding: '16px 20px',
                borderRadius: '8px',
                margin: '20px 0',
                fontWeight: 600,
                color: 'var(--teal-dark)'
              }}>
                &ldquo;Similia Similibus Curentur&rdquo; — Let likes be cured by likes.
              </div>
              <p>
                This law posits that any pharmacological agent capable of inducing a specific cluster of dynamic symptoms in a healthy human volunteer can cure an identical symptom profile in a diseased patient. Hahnemann dedicated the remainder of his life to systematically establishing, testing, and codifying this analogical model into his seminal medical text, the <strong><em>Organon of Medicine</em> (first published in 1810)</strong>.
              </p>
            </div>

            <div className="quote-latin-box">
              <h3>&ldquo;Similia Similibus Curentur&rdquo;</h3>
              <p>
                &ldquo;A medicine cures those exact symptoms in a diseased patient which it can produce when proved in healthy human beings. It acts precisely like matching a specific key to a unique lock.&rdquo;
              </p>
              <div className="quote-author">
                — <strong>Dr. Christian Friedrich Samuel Hahnemann</strong><br />
                <em>Organon of Medicine (1810)</em>
              </div>
            </div>
          </div>

          {/* Historical Timeline Milestones */}
          <div className="timeline-bar">
            <div className="timeline-step">
              <div className="timeline-year">1755</div>
              <div className="timeline-title">Birth in Meissen, Germany</div>
              <div className="timeline-text">
                Dr. Samuel Hahnemann masters Latin, Greek, Arabic, and chemistry, becoming a practicing physician.
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-year">1796</div>
              <div className="timeline-title">The Cinchona Experiment</div>
              <div className="timeline-text">
                Translating William Cullen’s work, Hahnemann consumes Cinchona bark, unveiling the Law of Similars.
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-year">1810</div>
              <div className="timeline-title">Organon of Medicine</div>
              <div className="timeline-text">
                Hahnemann publishes the seminal textbook codifying pure homeopathic methodology and aphorisms.
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-year">1828</div>
              <div className="timeline-title">Theory of Chronic Diseases</div>
              <div className="timeline-text">
                Publication of <em>The Chronic Diseases</em>, introducing the groundbreaking Theory of Miasms.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CORE FOUNDATIONAL PRINCIPLES ── */}
      <section id="principles" className="sec sec-tint">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="sec-title">2. Core Foundational Principles</h2>
            <p className="sec-desc">
              The practice of clinical homeopathy is governed by strict, interdependent laws formulated to guide remedy selection and monitor patient recovery:
            </p>
          </div>

          <div className="principles-grid">
            {/* Law 1 */}
            <div className="principle-card">
              <div className="principle-icon-row">
                <div className="principle-icon">
                  <CheckCircle2 size={24} />
                </div>
              </div>
              <h3>Law of Similimum</h3>
              <p>
                To effect a cure, a practitioner must match the totality of a patient&apos;s physical, emotional, and mental symptoms to the recorded drug profiles in the <em>Materia Medica</em> (a comprehensive clinical data bank compiled from healthy human drug trials).
              </p>
              <div style={{
                background: '#f8fbfe',
                padding: '12px 14px',
                borderRadius: '8px',
                fontSize: '0.86rem',
                color: '#1e40af',
                borderLeft: '3px solid #2563eb'
              }}>
                <strong>Key &amp; Lock Analogy:</strong> It acts precisely like matching a specific key to a unique, intricate lock.
              </div>
            </div>

            {/* Law 2 */}
            <div className="principle-card">
              <div className="principle-icon-row">
                <div className="principle-icon">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <h3>Law of Minimum Dose</h3>
              <p>
                Medicines are administered in the smallest possible dose required to stimulate the body&apos;s vital force. This practice minimises physiological strain and completely avoids toxic drug side-effects.
              </p>
              <div style={{
                background: '#f0fdf4',
                padding: '12px 14px',
                borderRadius: '8px',
                fontSize: '0.86rem',
                color: '#166534',
                borderLeft: '3px solid #16a34a'
              }}>
                Avoids biochemical toxicity, secondary organ overload, and dependency.
              </div>
            </div>

            {/* Law 3 */}
            <div className="principle-card">
              <div className="principle-icon-row">
                <div className="principle-icon">
                  <Activity size={24} />
                </div>
              </div>
              <h3>Theory of Miasms</h3>
              <p>
                Introduced by Hahnemann to address deep-seated chronic diseases, a miasm is defined as a primary, underlying constitutional block or dynamic predisposition that impedes the curative action of a well-selected remedy.
              </p>
              <div style={{
                background: '#fefce8',
                padding: '12px 14px',
                borderRadius: '8px',
                fontSize: '0.86rem',
                color: '#854d0e',
                borderLeft: '3px solid #eab308'
              }}>
                Traditionally categorized into three primary diatheses: <strong>Psora, Sycosis, and Syphilis</strong>.
              </div>
            </div>

            {/* Law 4 */}
            <div className="principle-card">
              <div className="principle-icon-row">
                <div className="principle-icon">
                  <ChevronRight size={24} />
                </div>
              </div>
              <h3>Hering’s Law of Cure</h3>
              <p>
                Formulated by Constantine Hering, this principle dictates the directional pathway of true healing. Symptoms must disappear in a structured physiological vector:
              </p>
              <ul className="hering-points">
                <li><strong>From inside out:</strong> from deep vital organs (brain, heart) to external, less vital structures like the skin.</li>
                <li><strong>From above downward:</strong> from the head toward the extremities.</li>
                <li><strong>In reverse chronological order:</strong> in reverse order of their original appearance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PHARMACOLOGY, POTENTISATION, & THE SCIENTIFIC PARADOX ── */}
      <section id="pharmacology" className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="sec-title">3. Pharmacology, Potentisation, and The Scientific Paradox</h2>
            <p className="sec-desc">
              Homeopathic pharmacology utilizes an incredibly diverse raw material catalog sourced from nature, combined through serial dilution and kinetic succussion.
            </p>
          </div>

          {/* Raw Material Catalog */}
          <div className="pharma-sources-grid">
            <div className="source-card">
              <h4>1. Herbs &amp; Botanicals</h4>
              <p>Fresh plant juices, roots, barks, flowers, and whole botanicals.</p>
              <p className="source-examples-text"><strong>Examples:</strong> Arnica, Belladonna, Cinchona</p>
            </div>

            <div className="source-card">
              <h4>2. Minerals &amp; Metals</h4>
              <p>Pure elemental minerals, natural ores, and metallic precipitates.</p>
              <p className="source-examples-text"><strong>Examples:</strong> Sulfur, Gold (Aurum), Calcarea</p>
            </div>

            <div className="source-card">
              <h4>3. Insoluble Elements</h4>
              <p>Inert insoluble substances rendered dynamic through trituration.</p>
              <p className="source-examples-text"><strong>Examples:</strong> Silicea (Quartz sand), Lycopodium</p>
            </div>

            <div className="source-card">
              <h4>4. Animal Products</h4>
              <p>Naturally secreted physiological substances and venoms.</p>
              <p className="source-examples-text"><strong>Examples:</strong> Apis (Honeybee venom), Lachesis</p>
            </div>

            <div className="source-card">
              <h4>5. Imponderable Energies</h4>
              <p>Physical energies and radiological forces captured dynamically.</p>
              <p className="source-examples-text"><strong>Examples:</strong> X-rays, Magnetism, Sunlight</p>
            </div>
          </div>

          {/* Manufacturing Flowchart */}
          <div className="flowchart-container">
            <div className="flowchart-title">The Standardized Manufacturing Process combining Serial Dilution and Mechanical Energy</div>
            <div className="flowchart-steps">
              <div className="flow-step-box">
                <h4>1. Crude Solute / Mother Tincture</h4>
                <p>Pure active botanical, mineral, or biological extract macerated in standardized solvent.</p>
              </div>

              <div className="flow-arrow">➔</div>

              <div className="flow-step-box">
                <h4>2. Serial Dilution (e.g., 1:100)</h4>
                <p>1 part medicinal substance mixed systematically into 99 parts of vehicle (alcohol/water).</p>
              </div>

              <div className="flow-arrow">➔</div>

              <div className="flow-step-box">
                <h4>3. Succussion (Vigorous Shaking)</h4>
                <p>Standardized kinetic energy transferred through mechanical impact cycles.</p>
              </div>

              <div className="flow-arrow">➔</div>

              <div className="flow-step-box">
                <h4>4. Final Potency (e.g., 1C up to 30C+)</h4>
                <p>Biochemically non-toxic, dynamically heightened therapeutic preparation ready for dispensing.</p>
              </div>
            </div>
          </div>

          {/* Centesimal Scale & Avogadro vs Nano Research */}
          <div className="paradox-grid">
            <div className="paradox-card science">
              <h3>
                <Activity size={22} color="#2563eb" /> The Centesimal Scale &amp; Avogadro Paradox
              </h3>
              <p>
                <strong>The Centesimal Scale (C):</strong> In a 30C preparation (e.g., <em>Arnica 30</em>), 1 part of the original crude extract is serially diluted in 99 parts of alcohol or water, across 30 sequential cycles. Between each dilution stage, the mixture undergoes succussion (a standardized process of kinetic shaking).
              </p>
              <p>
                <strong>The Avogadro Paradox:</strong> According to Avogadro’s Number (6.022 × 10²³), physical molecules of a starting chemical substance disappear past the 12C dilution mark. Modern chemistry and molecular biology therefore view high potencies as completely devoid of active chemical components, attributing clinical effects strictly to the placebo response.
              </p>
            </div>

            <div className="paradox-card nano">
              <h3>
                <FlaskConical size={22} color="var(--teal)" /> The Nanoparticle / Memory Theory
              </h3>
              <p>
                <strong>The Structural Imprint Mechanism:</strong> Homeopathic theory suggests that succussion acts as a mechanical imprint mechanism, altering the structural clusters or electromagnetic properties of the water/alcohol vehicle.
              </p>
              <p>
                <strong>Emerging Nano-Pharmacology:</strong> Contemporary research in nano-pharmacology explores whether serial succussion creates stable nanostructures or topotaxial imprints of the original source material that persist even in highly advanced potencies (1,000C to 50,000C), providing a physical hypothesis for biological signaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CLINICAL DISPENSING AND ADMINISTRATION ── */}
      <section id="dispensing" className="sec sec-tint">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="sec-title">4. Clinical Dispensing and Administration</h2>
            <p className="sec-desc">
              Homeopathic potencies are typically integrated into inert, unmedicated carriers for precise patient consumption:
            </p>
          </div>

          <div className="dispensing-grid">
            <div className="dispense-card">
              <div className="dispense-icon">
                <Pill size={22} />
              </div>
              <h3>Vehicles</h3>
              <p>
                Liquid alcohol potencies are dropped onto small sucrose (cane sugar) or lactose (milk sugar) globule pills, tablets, or sterile medicinal powders.
              </p>
              <p>
                These neutral media safely absorb and carry the dynamic remedy without altering its therapeutic purity or shelf life.
              </p>
              <div className="dispense-tip">
                Sweet globules are universally tolerated by infants, toddlers, and sensitive individuals.
              </div>
            </div>

            <div className="dispense-card">
              <div className="dispense-icon">
                <Brain size={22} />
              </div>
              <h3>Administration Rules</h3>
              <p>
                Remedies are highly sensitive to strong external stimuli. They should be placed directly onto a clean tongue and allowed to dissolve naturally rather than being chewed or swallowed with water.
              </p>
              <p>
                The rich vascular sublingual mucous membrane provides immediate absorption directly into physiological signaling pathways.
              </p>
              <div className="dispense-tip">
                Avoid touching pills with bare hands — use the bottle cap to dispense directly into the mouth.
              </div>
            </div>

            <div className="dispense-card">
              <div className="dispense-icon">
                <ShieldCheck size={22} />
              </div>
              <h3>Dietary Restrictions</h3>
              <p>
                Patients are instructed to maintain a clean palate on an empty stomach—strictly avoiding food, water, cigarettes, toothpaste, or strong aromatic substances for <strong>30 minutes before and after</strong> taking a dose.
              </p>
              <p>
                Strong volatile substances—such as raw garlic, strong coffee, camphor, eucalyptus, and mint—can desensitize oral receptors and antidoting the delicate stimulus.
              </p>
              <div className="dispense-tip">
                Maintain a clean oral cavity for maximum therapeutic reception.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FROM ANTIBIOTICS TO GLOBAL RESURRECTION & INDIA AYUSH ── */}
      <section id="resurrection" className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="sec-title">5. The Historical Cycle: From Antibiotics to Global Resurrection</h2>
            <p className="sec-desc">
              How changing medical paradigms and the limits of modern polypharmacy prompted a worldwide return to holistic healthcare.
            </p>
          </div>

          <div className="history-cycle-grid">
            <div className="cycle-body">
              <p>
                <strong>Homeopathy enjoyed massive worldwide popularity across Europe and North America throughout the 19th century.</strong> However, the mid-20th-century introduction of mass-produced conventional pharmaceuticals—specifically sulfa drugs and penicillin—radically changed the medical landscape. Fast-acting antibiotic interventions pushed homeopathy into the background.
              </p>
              <p>
                <strong>The Modern Dilemma of Conventional Medicine:</strong> Over the last 50 years, conventional medicine advanced exponentially through imaging, genetics, and laser surgeries. Yet, this era also brought massive modern challenges: antibiotic-resistant superbugs, side-effects from chronic polypharmacy, prohibitive healthcare costs, and a massive surge in stress-induced, metabolic, and chronic autoimmune disorders. These limits have driven a major global resurgence in holistic, cost-effective alternative frameworks.
              </p>
              <p>
                <strong>World Health Organization (WHO) Recognition:</strong> The WHO recognizes homeopathy as a widely utilized alternative medical system. It is legally recognized and practiced across numerous countries, including the United Kingdom, France, the Netherlands, Austria, and Switzerland.
              </p>
            </div>

            <div className="ayush-card">
              <h3>The Special Position of India (Ministry of AYUSH)</h3>
              <p>
                India possesses the world&apos;s most robust institutional infrastructure for homeopathy. Managed by the national <strong>Ministry of AYUSH</strong>, homeopathy sits on equal legal and academic footing with conventional medicine.
              </p>
              <ul className="ayush-bullets">
                <li>
                  <CheckCircle2 size={18} color="#C8A96B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Equal Legal Status:</strong> Recognized under the National Commission for Homeopathy (NCH) Act.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} color="#C8A96B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Rigorous Academia:</strong> Standardized 5.5-year degree tracks (BHMS) and 3-year postgraduate degrees (MD).</span>
                </li>
                <li>
                  <CheckCircle2 size={18} color="#C8A96B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Dedicated Research:</strong> Central Council for Research in Homeopathy (CCRH) conducts clinical trials.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} color="#C8A96B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Massive Healthcare Footprint:</strong> Treats tens of millions of outpatients across thousands of hospitals and dispensaries annually.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CONTEMPORARY PARADIGMS: CLASSICAL VS POLYPHARMACY ── */}
      <section id="paradigms" className="sec sec-tint">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="sec-title">6. Contemporary Paradigms: Classical Homeopathy vs. Polypharmacy</h2>
            <p className="sec-desc">
              As the system has evolved to handle modern, fast-paced outpatient environments, a clear divergence in prescribing styles has emerged:
            </p>
          </div>

          <div className="table-wrapper">
            <table className="paradigm-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Classical Homeopathy (Unicism)</th>
                  <th>Polypharmacy (Complex Homeopathy)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-feature">Prescribing Protocol</td>
                  <td className="col-unicism">Strict adherence to the single remedy rule. One targeted remedy is given at a time, followed by a careful waiting period.</td>
                  <td className="col-complex">Administration of multiple remedies combined into a single formula or given concurrently.</td>
                </tr>
                <tr>
                  <td className="col-feature">Diagnostic Target</td>
                  <td className="col-unicism">Focuses on the patient&apos;s individual constitutional totality (mental, emotional, physical traits).</td>
                  <td className="col-complex">Targets a specific pathological condition or localized disease name directly (e.g., cough formula).</td>
                </tr>
                <tr>
                  <td className="col-feature">Materia Medica Dependency</td>
                  <td className="col-unicism">Requires exhaustive case-taking and use of Repertories (cross-reference dictionaries) to find the exact match.</td>
                  <td className="col-complex">Relies on clinical formulas pre-designed for general organ support or symptom relief.</td>
                </tr>
                <tr>
                  <td className="col-feature">Clinical Adaptability</td>
                  <td className="col-unicism">Excellent for treating deep chronic conditions; highly time-intensive for the doctor.</td>
                  <td className="col-complex">Highly useful in high-volume, fast-paced outpatient clinics for rapid symptom relief.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* The Modern Clinical Dilemma */}
          <div className="dilemma-box">
            <h3>
              <Activity size={20} color="#92510b" /> The Modern Clinical Dilemma
            </h3>
            <p>
              This ideological split highlights a practical challenge for modern practitioners. In high-density regions like India, clinics routinely face a massive patient volume suffering from rampant chronic conditions (e.g., over 10 million active Tuberculosis cases, 20 million+ Diabetes patients, and vast numbers of individuals with severe allergies or metabolic disorders). While pure classical homeopathy remains the ideal standard for treating an individual&apos;s underlying constitution, the reality of managing large crowds in public healthcare has made standardized, disease-specific complex formulas a highly practical tool for fast clinical relief.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. PROVEN CLINICAL SPECIALTIES SHOWCASE ── */}
      <section id="specialties" className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="sec-title">7. Clinical Practice: Specialties in Action</h2>
            <p className="sec-desc">
              How Dr. Ketan Patel integrates constitutional precision and targeted organ support across three decades of hospital and research practice:
            </p>
          </div>

          <div className="specialties-grid">
            {/* 1. Pediatrics & Neurology */}
            <div className="spec-item">
              <h4>Pediatrics &amp; Child Neurology</h4>
              <ul className="spec-list">
                <li><strong>Autism Spectrum Disorder (ASD):</strong> Progressive cognitive, eye contact, and language improvement observed within initial 120-day evaluation cycles.</li>
                <li><strong>Cerebral Palsy &amp; Spasticity:</strong> Supports neural plasticity, neck holding, sitting balance, and deglutition.</li>
                <li><strong>Down Syndrome (Trisomy 21):</strong> Speech clarity improvements up to 70%, reduced recurrent respiratory infections.</li>
                <li><strong>Dyslexia &amp; ADHD:</strong> Clears visual-phonological deficits, boosts attention span and academic performance.</li>
              </ul>
            </div>

            {/* 2. Obstetrics & Fertility */}
            <div className="spec-item">
              <h4>Obstetrics &amp; Gynaecology</h4>
              <ul className="spec-list">
                <li><strong>Recurrent Abortions:</strong> Over 95% full-term pregnancy success rate in unexplained habitual miscarriages.</li>
                <li><strong>IUGR (Poor Fetal Growth):</strong> Promotes healthy birth weight and placental blood flow in uterine growth restriction.</li>
                <li><strong>Pre-eclampsia:</strong> Normalizes blood pressure and edema gently without fetal distress.</li>
                <li><strong>PCOD / PCOS:</strong> Restores natural ovulatory cycles and clears hormonal blocks in secondary infertility.</li>
              </ul>
            </div>

            {/* 3. Neonatology */}
            <div className="spec-item">
              <h4>Neonatology &amp; Infant Care</h4>
              <ul className="spec-list">
                <li><strong>Low Birth Weight / Pre-term:</strong> Accelerates weight gain naturally until desired developmental benchmarks.</li>
                <li><strong>Neonatal Jaundice:</strong> Clears elevated hyperbilirubinemia gently without phototherapy rebound.</li>
                <li><strong>Cephal Hematoma:</strong> Accelerates natural resorption of cranial swelling safely.</li>
              </ul>
            </div>

            {/* 4. Andrology & Male Infertility */}
            <div className="spec-item">
              <h4>Andrology &amp; Male Infertility</h4>
              <ul className="spec-list">
                <li><strong>Oligospermia:</strong> Raises sperm count 5 to 6 times within first 3 months of treatment.</li>
                <li><strong>Motility Correction:</strong> Improves motility grades from I/II to Grade III/IV, boosting natural conception rates.</li>
                <li><strong>Permanent Gains:</strong> Spermatogenesis normalization lasts for 8 to 10 years post completion of 7–9 month course.</li>
              </ul>
            </div>

            {/* 5. Orthopedics & Spine */}
            <div className="spec-item">
              <h4>Orthopedics &amp; Spine Care</h4>
              <ul className="spec-list">
                <li><strong>Prolapsed Vertebral Disc (PVD):</strong> Non-surgical repair begins in 7 days, complete ligament stabilization in 2–3 months.</li>
                <li><strong>85%+ Success Rate:</strong> Prevents spinal fusion and decompression surgery without NSAID side effects.</li>
                <li><strong>Osteoporosis:</strong> Enhances bone mineral uptake and accelerates callus formation in stress fractures.</li>
              </ul>
            </div>

            {/* 6. Internal Medicine */}
            <div className="spec-item">
              <h4>Internal Medicine &amp; Infections</h4>
              <ul className="spec-list">
                <li><strong>Infective Hepatitis:</strong> 100% success; normalizes SGPT readings even above 2000 U/L within 7 to 10 days.</li>
                <li><strong>Typhoid:</strong> Eliminates fever within 24 hours with complete non-relapsing clearance in 5 days.</li>
                <li><strong>Anemia:</strong> Rapid 2 gm% hemoglobin increase in 15 days without iron syrup constipation.</li>
                <li><strong>MDR Tuberculosis:</strong> Immunomodulator against resistant Mycobacterium bacilli.</li>
              </ul>
            </div>

            {/* 7. Respiratory & ENT */}
            <div className="spec-item">
              <h4>Respiratory &amp; ENT Conditions</h4>
              <ul className="spec-list">
                <li><strong>Allergic Bronchitis &amp; Asthma:</strong> Eliminates bronchospasms, sub-mucosal inflammation, and wheezing.</li>
                <li><strong>Allergic Rhinitis:</strong> Controls sneezing paroxysms, pollen allergy, and cold drafts.</li>
                <li><strong>Vocal Cord Nodules:</strong> Resolves singer&apos;s hoarseness and vocal cords nodules without surgery.</li>
              </ul>
            </div>

            {/* 8. Dermatology */}
            <div className="spec-item">
              <h4>Dermatology &amp; Wound Healing</h4>
              <ul className="spec-list">
                <li><strong>Atopic Dermatitis (Eczema):</strong> Normalizes skin in 20–30 days, breaking the itch-scratch cycle without steroids.</li>
                <li><strong>Insect &amp; Wasp Stings:</strong> Completely neutralizes venom, edema, and acute pain within 2 to 3 hours.</li>
                <li><strong>Post-Surgical Healing:</strong> Accelerates delayed wound healing and prevents keloid scars.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA SECTION ── */}
      <section className="sec sec-tint">
        <div className="wrap">
          <div className="cta-section">
            <h2>Experience the Gentle Power of Speciality Homeopathy</h2>
            <p>
              Consult Dr. Ketan Patel and our team of senior homeopathic physicians at our Ahmedabad headquarters, national consultation camps, or worldwide telemedicine service.
            </p>
            <div className="btn-row">
              <Link href="/inquiry" className="btn-gold">
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/treatments" className="btn-outline-light">
                Explore All Treatments
              </Link>
              <Link href="/how-to-pay-fees" className="btn-outline-light">
                Fee &amp; Payment Options
              </Link>
              <Link href="/contact" className="btn-outline-light">
                Clinic Locations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
