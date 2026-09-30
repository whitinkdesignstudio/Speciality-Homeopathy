'use client';

import React from 'react';
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
    --maxw: 1180px;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  .city-page-wrap {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f0f8f9;
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .city-page-wrap h1,
  .city-page-wrap h2,
  .city-page-wrap h3,
  .city-page-wrap h4,
  .city-page-wrap h5 {
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
  .city-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b3def4 40%, #95cde8 100%);
    padding: 64px 0 74px;
    overflow: hidden;
  }
  .city-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 85% 15%, rgba(0,140,140,0.18), transparent 45%),
      radial-gradient(circle at 10% 80%, rgba(200,169,107,0.15), transparent 40%);
    pointer-events: none;
  }
  .city-hero-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
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
  .city-hero h1 {
    font-size: clamp(2.2rem, 4.2vw, 3.4rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .city-hero h1 span {
    color: var(--teal);
  }
  .hero-sub {
    font-size: 1.12rem;
    color: #24426b;
    max-width: 760px;
    margin-bottom: 30px;
  }

  /* ── SECTION SHELL ── */
  .sec {
    padding: 64px 0;
  }
  .sec-white {
    background: #ffffff;
  }
  .sec-tint {
    background: #f0f8f9;
  }

  /* ── CLINIC CARD ── */
  .clinic-info-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 40px;
    box-shadow: var(--shadow);
    border: 1px solid #ddecfa;
    margin-bottom: 40px;
  }
  .clinic-info-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 36px;
    align-items: center;
  }
  .address-detail-box {
    background: #f8fbfe;
    border-radius: 14px;
    padding: 24px;
    border: 1px solid #d4e8f5;
  }
  .address-detail-box h4 {
    color: var(--navy);
    font-size: 1.15rem;
    margin-bottom: 12px;
  }
  .address-row {
    margin-bottom: 10px;
    font-size: 0.94rem;
    color: #334155;
  }
  .address-row strong {
    color: var(--navy);
  }

  /* SMS Booking Banner */
  .sms-banner {
    background: #fef3c7;
    border-left: 4px solid #f59e0b;
    border-radius: 0 14px 14px 0;
    padding: 22px 28px;
    margin: 28px 0;
    color: #92400e;
  }
  .sms-code {
    font-family: monospace;
    font-size: 1.1rem;
    font-weight: 700;
    background: #ffffff;
    padding: 4px 10px;
    border-radius: 6px;
    display: inline-block;
    margin-top: 6px;
    border: 1px solid #fcd34d;
  }

  /* Doctors Grid */
  .doctors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 32px;
  }
  .doctor-profile-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 28px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
    transition: transform 0.25s var(--ease);
  }
  .doctor-profile-card:hover {
    transform: translateY(-4px);
    border-color: var(--teal);
  }
  .doc-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal), var(--navy));
    color: #ffffff;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 14px;
  }
  .doctor-profile-card h4 {
    font-size: 1.25rem;
    color: var(--navy);
    margin-bottom: 4px;
  }
  .doc-role {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--teal);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
    display: block;
  }
  .doc-desc {
    font-size: 0.9rem;
    color: #4b6382;
    line-height: 1.6;
  }

  /* CTA */
  .city-cta {
    background: linear-gradient(135deg, #0F1D3D 0%, #15325b 100%);
    color: #ffffff;
    border-radius: 20px;
    padding: 48px 36px;
    text-align: center;
    margin-top: 48px;
  }
  .city-cta h3 {
    color: #ffffff;
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
  .city-cta p {
    color: #cbd5e1;
    max-width: 600px;
    margin: 0 auto 24px;
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
    padding: 12px 26px;
    border-radius: 999px;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease;
  }
  .btn-gold:hover {
    background: #007070;
    transform: translateY(-2px);
  }
  .btn-outline-light {
    border: 1.5px solid rgba(255,255,255,0.4);
    color: #ffffff;
    font-weight: 600;
    padding: 12px 26px;
    border-radius: 999px;
    text-decoration: none;
    transition: transform 0.2s ease;
  }
  .btn-outline-light:hover {
    background: rgba(255,255,255,0.15);
  }

  @media (max-width: 840px) {
    .clinic-info-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function MumbaiClinicPage() {
  return (
    <div className="city-page-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO BANNER ── */}
      <section className="city-hero">
        <div className="wrap">
          <div className="city-hero-content">
            <h1>Mumbai Autism &amp; <span>Pediatric Neurology Clinic</span></h1>
            <p className="hero-sub">
              Labh Homeopathic Clinic, Vile Parle (West) — Delivering time-bound homeopathic care, biomedical detox, and pediatric neurology protocols across Mumbai for over 18 years.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="clinic-info-card">
            <div className="clinic-info-grid">
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '16px', color: '#0F1D3D' }}>
                  18+ Years of Trusted Clinical Care in Mumbai
                </h2>
                <p style={{ color: '#4b6382', marginBottom: '14px' }}>
                  Dr. Ketan Patel has regularly visited Mumbai since 2006, establishing an authoritative treatment center for families seeking non-invasive, evidence-based homeopathic care for <strong>Autism Spectrum Disorder (ASD), Cerebral Palsy, Spastic Diplegia, Down Syndrome, Dyslexia, and GDD</strong>.
                </p>
                <p style={{ color: '#4b6382' }}>
                  In clinical association with <strong>Labh Homeopathic Clinic</strong>, we provide personalized case taking, biomedical detox for micro-toxins and heavy metals, GFCF diet transition strategies, and continuous developmental monitoring.
                </p>
              </div>

              <div className="address-detail-box">
                <h4>Labh Homeopathic Clinic Details</h4>
                <div className="address-row">
                  <strong>Location:</strong> 48-C, Baptista Road, Opp. New Municipal Market, Near Vile Parle Station, Vile Parle (West), Mumbai – 400056
                </div>
                <div className="address-row">
                  <strong>Direct Mumbai Mobile:</strong> +91-98193 99663
                </div>
                <div className="address-row">
                  <strong>Central Booking Helpline:</strong> +91 98980 05354
                </div>
                <div className="address-row">
                  <strong>Email:</strong> drketan@specialityhomeopathy.com
                </div>
              </div>
            </div>

            {/* SMS Booking Box */}
            <div className="sms-banner">
              <strong>Prior Appointment by SMS for Mumbai OPD:</strong>
              <p style={{ margin: '6px 0 0', fontSize: '0.92rem' }}>
                Dr. Ketan Patel visits Mumbai by prior appointment only. To reserve your consultation slot, send an SMS:
              </p>
              <div className="sms-code">
                SMS &ldquo;APT MUMBAI [Your Name &amp; Full Address]&rdquo; on 09898005354
              </div>
            </div>
          </div>

          {/* ── CLINICAL TEAM ── */}
          <h3 style={{ fontSize: '1.6rem', color: '#0F1D3D', marginTop: '48px', marginBottom: '8px' }}>
            Consulting Specialists at Mumbai Clinic
          </h3>
          <p style={{ color: '#4b6382', marginBottom: '24px' }}>
            Our multi-disciplinary panel combining decades of clinical and neuro-developmental homeopathy experience:
          </p>

          <div className="doctors-grid">
            <div className="doctor-profile-card">
              <div className="doc-avatar">KP</div>
              <h4>Dr. Ketan Patel</h4>
              <span className="doc-role">MD (Homeopathy), BCJP</span>
              <p className="doc-desc">
                Pioneering clinician with 29+ years experience in pediatric neurology, trained 100+ doctors globally, creator of Hompath research system used in 83 countries.
              </p>
            </div>

            <div className="doctor-profile-card">
              <div className="doc-avatar">BB</div>
              <h4>Dr. Bhakti Batavia</h4>
              <span className="doc-role">Consulting Physician</span>
              <p className="doc-desc">
                Resident consultant at Labh Homeopathic Clinic, overseeing comprehensive case workups, ongoing developmental follow-ups, and family counseling.
              </p>
            </div>

            <div className="doctor-profile-card">
              <div className="doc-avatar">CB</div>
              <h4>Dr. Chetan Batavia</h4>
              <span className="doc-role">Consulting Physician</span>
              <p className="doc-desc">
                Senior consultant at Labh Homeopathic Clinic managing chronic cases, adult consultations, and medicine fulfillment across Mumbai.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="city-cta">
            <h3>Schedule a Consultation in Mumbai</h3>
            <p>
              Book an appointment for Dr. Ketan Patel&apos;s upcoming Mumbai OPD visit or consult online today.
            </p>
            <div className="btn-row">
              <Link href="/inquiry" className="btn-gold">
                Book Consultation Now
              </Link>
              <Link href="/how-to-pay-fees" className="btn-outline-light">
                Fee &amp; Banking Details
              </Link>
              <a
                href="https://wa.me/919898005354"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                WhatsApp Helpline
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
