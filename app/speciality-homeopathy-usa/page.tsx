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

  /* International Logistics Banner */
  .intl-banner {
    background: #eff6ff;
    border-left: 4px solid #3b82f6;
    border-radius: 0 14px 14px 0;
    padding: 22px 28px;
    margin: 28px 0;
    color: #1e40af;
  }

  /* Case study box */
  .case-study-box {
    background: linear-gradient(135deg, #0F1D3D 0%, #15325b 100%);
    color: #ffffff;
    border-radius: 20px;
    padding: 38px 40px;
    margin: 40px 0;
    box-shadow: 0 20px 48px -10px rgba(15,29,61,0.3);
  }
  .case-study-box h3 {
    color: #7dd3fc;
    font-size: 1.4rem;
    margin-bottom: 12px;
  }
  .case-study-box p {
    color: #e2e8f0;
    font-size: 0.96rem;
    line-height: 1.7;
    margin-bottom: 0;
  }

  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    margin-top: 32px;
  }
  .feature-item {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
  }
  .feature-item h4 {
    color: var(--navy);
    font-size: 1.1rem;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .feature-item p {
    font-size: 0.9rem;
    color: #4b6382;
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
  .btn-primary {
    background: linear-gradient(135deg, var(--teal), #00a8a8);
    color: #ffffff;
    font-weight: 600;
    padding: 12px 28px;
    border-radius: 50px;
    text-decoration: none;
    transition: transform 0.2s var(--ease), box-shadow 0.2s;
    box-shadow: 0 8px 20px -6px rgba(0,140,140,0.5);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -6px rgba(0,140,140,0.7);
  }
  .btn-secondary {
    background: rgba(255,255,255,0.12);
    color: #ffffff;
    border: 1px solid rgba(255,255,255,0.25);
    font-weight: 600;
    padding: 12px 28px;
    border-radius: 50px;
    text-decoration: none;
    transition: background 0.2s;
  }
  .btn-secondary:hover {
    background: rgba(255,255,255,0.22);
  }

  @media (max-width: 900px) {
    .clinic-info-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function UsaClinicPage() {
  return (
    <main className="city-page-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* LUXURY HERO */}
      <section className="city-hero">
        <div className="wrap">
          <div className="city-hero-content">
            <h1>
              Speciality Homeopathy <span>USA &amp; North America</span>
            </h1>
            <p className="hero-sub">
              Encrypted video tele-health consultations with Dr. Ketan Patel, paired with international express
              medicine courier dispatch directly to your doorstep across the United States and Canada.
            </p>
          </div>
        </div>
      </section>

      {/* CLINIC APPOINTMENT & CONTACT DETAILS */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="clinic-info-card">
            <div className="clinic-info-grid">
              <div>
                <h2>Remote Video Tele-Triage &amp; Courier Protocol</h2>
                <p style={{ color: '#4a5568', marginTop: '12px', fontSize: '1.02rem', lineHeight: '1.7' }}>
                  For over two decades, Speciality Homeopathy has delivered specialized constitutional care to North American
                  families. Consultations are conducted via high-definition Zoom, FaceTime, or WhatsApp video triage, followed by
                  carefully packaged constitutional remedies dispatched via FedEx or DHL International Priority with full tracking.
                </p>

                <div className="intl-banner">
                  <h4 style={{ fontWeight: 700, marginBottom: '4px' }}>USA &amp; Canada Time Zone Coordination:</h4>
                  <p style={{ margin: 0, fontSize: '0.92rem' }}>
                    Appointments are tailored to US Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) time zones.
                    Prescriptions are accompanied by clear dispensing guidelines and customs clearance declarations.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '16px' }}>
                  <a href="https://wa.me/919898005354" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    WhatsApp Triage: +91 98980 05354
                  </a>
                  <Link href="/how-to-pay-fees" className="btn-secondary" style={{ background: '#f0f8f9', color: '#008c8c', border: '1px solid #008c8c' }}>
                    HSBC Wire Info
                  </Link>
                </div>
              </div>

              <div>
                <div className="address-detail-box">
                  <h4>USA Tele-Health Portal</h4>
                  <div className="address-row">
                    <strong>Lead Consultant:</strong> Dr. Ketan Patel (MD Hom)
                  </div>
                  <div className="address-row">
                    <strong>Primary States Served:</strong> California, New York, Texas, New Jersey, Illinois, Washington, Florida, Ontario, BC
                  </div>
                  <div className="address-row">
                    <strong>Video Channels:</strong> Zoom, Apple FaceTime, WhatsApp Video
                  </div>
                  <div className="address-row">
                    <strong>Courier Carriers:</strong> FedEx Express, DHL International, EMS Speed Post
                  </div>
                  <div className="address-row">
                    <strong>Direct Email:</strong> info@specialityhomeopathy.com
                  </div>
                  <div className="address-row">
                    <strong>SWIFT Wire:</strong> HSBC India (SWIFT: HSBCINBB)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HISTORIC CASE STUDY CALLOUT */}
          <div className="case-study-box">
            <h3>Clinical Landmark: Kevin from California</h3>
            <p>
              Diagnosed with Autism Spectrum Disorder and severe hyperactivity in California, Kevin&apos;s parents sought
              constitutional homeopathic guidance from Dr. Ketan Patel after multiple conventional interventions plateaued.
              Through individualised Avogadro potencies and remote milestone tracking, Kevin exhibited remarkable progress in
              speech emergence, reduced sensory overload, and sustained attention span—documented across multiple years of developmental therapy.
            </p>
          </div>

          {/* CLINICAL SPECIALTIES SERVED */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '1.6rem', textAlign: 'center', marginBottom: '8px' }}>
              Advanced Remote Tele-Health Programs
            </h3>
            <p style={{ textAlign: 'center', color: '#4b6382', maxWidth: '680px', margin: '0 auto 28px' }}>
              Comprehensive constitutional care customized to North American clinical requirements
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <h4>
                  <span style={{ color: 'var(--teal)' }}>●</span> Autism &amp; Genetic Conditions
                </h4>
                <p>Supportive care for ASD, PDD-NOS, CACNA1A gene mutation, fragile X, and rare microdeletion syndromes.</p>
              </div>

              <div className="feature-item">
                <h4>
                  <span style={{ color: 'var(--teal)' }}>●</span> Pre-Consultation Case Analysis
                </h4>
                <p>Detailed advance evaluation of IEP reports, developmental neuropsych evaluations, and exome sequencing data.</p>
              </div>

              <div className="feature-item">
                <h4>
                  <span style={{ color: 'var(--teal)' }}>●</span> International Doorstep Delivery
                </h4>
                <p>Remedies dispatched in medical-grade shock-proof packaging with full customs declaration documentation.</p>
              </div>

              <div className="feature-item">
                <h4>
                  <span style={{ color: 'var(--teal)' }}>●</span> Ongoing Progress Reviews
                </h4>
                <p>Scheduled 4 to 6-week milestone evaluations via Zoom and responsive WhatsApp messaging for day-to-day queries.</p>
              </div>
            </div>
          </div>

          {/* CTA BAR */}
          <div className="city-cta">
            <h3>Begin Your Child&apos;s USA Tele-Health Intake</h3>
            <p>
              Submit your child&apos;s IEP, developmental reports, and clinical history for review by Dr. Ketan Patel and our international medical team.
            </p>
            <div className="btn-row">
              <Link href="/inquiry" className="btn-primary">
                Online Case Submission
              </Link>
              <Link href="/how-to-pay-fees" className="btn-secondary">
                View Banking &amp; Wire Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
