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

  /* Facilities Grid */
  .facilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
    margin-top: 24px;
  }
  .facility-chip-card {
    background: #f8fbfe;
    border-radius: 12px;
    padding: 18px 20px 18px 46px;
    position: relative;
    border-left: 4px solid var(--teal);
    border-top: 1px solid #e2edf6;
    border-right: 1px solid #e2edf6;
    border-bottom: 1px solid #e2edf6;
    font-size: 0.92rem;
    color: #334155;
  }
  .facility-chip-card::before {
    content: "✓";
    position: absolute;
    left: 18px;
    color: var(--teal);
    font-weight: 800;
    font-size: 1.1rem;
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

export default function NewDelhiClinicPage() {
  return (
    <div className="city-page-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO BANNER ── */}
      <section className="city-hero">
        <div className="wrap">
          <div className="city-hero-content">
            <h1>New Delhi Autism &amp; <span>Pediatric Neurology Clinic</span></h1>
            <p className="hero-sub">
              Therapy For Ability (TFA), Rajouri Garden — Integrating Dr. Ketan Patel’s 20+ years of homeopathic pediatric neurology with advanced Sensory Integration &amp; Occupational Therapy.
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
                  Unified Child Development Center in West Delhi
                </h2>
                <p style={{ color: '#4b6382', marginBottom: '14px' }}>
                  Children with Special Needs in New Delhi and Northern India have access to full-spectrum care at one unified facility. Dr. Ketan Patel visits New Delhi on regular bi-monthly and quarterly consultation cycles to provide constitutional evaluation for <strong>Autism Spectrum Disorder, Cerebral Palsy, Dyslexia, Down Syndrome, and GDD</strong>.
                </p>
                <p style={{ color: '#4b6382' }}>
                  In partnership with <strong>Therapy For Ability (TFA)</strong>, our therapists work from a sensory integration frame of reference, utilizing specialized apparatus to enhance fine-motor coordination, speech communication, and perceptual skills.
                </p>
              </div>

              <div className="address-detail-box">
                <h4>Therapy For Ability (TFA) Details</h4>
                <div className="address-row">
                  <strong>Location:</strong> Block JJ 13/26, Basement, Rajouri Garden, Near HDFC Bank &amp; Pizza Hut Delivery, West Delhi, New Delhi – 110027
                </div>
                <div className="address-row">
                  <strong>Delhi Clinic Phone:</strong> +91-11-45626933
                </div>
                <div className="address-row">
                  <strong>Local Coordinators:</strong> +91-8866542000 | +91-9899676616 (Mr. Vinod)
                </div>
                <div className="address-row">
                  <strong>Direct Doctor Helpline:</strong> +91 98980 05354
                </div>
                <div className="address-row">
                  <strong>Email:</strong> drketan@specialityhomeopathy.com
                </div>
              </div>
            </div>

            {/* SMS Booking Box */}
            <div className="sms-banner">
              <strong>Prior Appointment by SMS for New Delhi OPD:</strong>
              <p style={{ margin: '6px 0 0', fontSize: '0.92rem' }}>
                Consultations are by prior appointment only. To reserve your child&apos;s evaluation slot, send an SMS:
              </p>
              <div className="sms-code">
                SMS &ldquo;APT NEW DELHI [Your Name &amp; Full Address]&rdquo; on 9898005354
              </div>
            </div>
          </div>

          {/* ── FACILITIES ── */}
          <h3 style={{ fontSize: '1.6rem', color: '#0F1D3D', marginTop: '48px', marginBottom: '8px' }}>
            Clinical Facilities &amp; Protocols Available in New Delhi
          </h3>
          <p style={{ color: '#4b6382', marginBottom: '24px' }}>
            Combining cutting-edge neuro-developmental therapy with personalized constitutional homeopathic medicine:
          </p>

          <div className="facilities-grid">
            <div className="facility-chip-card">
              Direct Evaluation &amp; Case Analysis with Dr. Ketan Patel
            </div>
            <div className="facility-chip-card">
              Sensory Integration (SI) Apparatus &amp; Therapy Room
            </div>
            <div className="facility-chip-card">
              Occupational Therapy for Motor Skills &amp; Hand Function
            </div>
            <div className="facility-chip-card">
              Speech &amp; Language Development Coaching
            </div>
            <div className="facility-chip-card">
              Structured At-Home Parent Training &amp; Guidance
            </div>
            <div className="facility-chip-card">
              Biomedical, Dietary (GFCF) &amp; Vitamin Protocols
            </div>
            <div className="facility-chip-card">
              Mold Neurotoxicity &amp; Bio-Toxicity Elimination
            </div>
            <div className="facility-chip-card">
              Vaccination &amp; Antibiotic Homeopathic Detox Protocols
            </div>
          </div>

          {/* CTA */}
          <div className="city-cta">
            <h3>Consult Dr. Patel in New Delhi</h3>
            <p>
              Schedule an in-person assessment at Rajouri Garden or explore Therapy For Ability programs.
            </p>
            <div className="btn-row">
              <Link href="/inquiry" className="btn-gold">
                Book Consultation Now
              </Link>
              <Link href="/therapy-for-ability" className="btn-outline-light">
                Explore Therapy For Ability (TFA)
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
