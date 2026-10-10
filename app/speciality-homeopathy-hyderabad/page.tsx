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

  /* Philanthropy Callout */
  .philanthropy-box {
    background: linear-gradient(135deg, #005f5f 0%, #008c8c 100%);
    color: #ffffff;
    border-radius: 18px;
    padding: 32px 36px;
    margin: 36px 0;
    box-shadow: 0 18px 40px -10px rgba(0,140,140,0.35);
  }
  .philanthropy-box h3 {
    color: #ffffff;
    font-size: 1.45rem;
    margin-bottom: 10px;
  }
  .philanthropy-box p {
    color: #e0f2f1;
    font-size: 0.96rem;
    line-height: 1.65;
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

export default function HyderabadClinicPage() {
  return (
    <main className="city-page-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* LUXURY HERO */}
      <section className="city-hero">
        <div className="wrap">
          <div className="city-hero-content">
            <h1>
              Speciality Homeopathy <span>Hyderabad Centre</span>
            </h1>
            <p className="hero-sub">
              Advanced constitutional homeopathic care for Autism Spectrum, ADHD, and Pediatric Neurology in Telangana,
              in collaboration with Ms. Ambika at VOICE Saidabad.
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
                <h2>Clinical Operations &amp; VOICE Collaboration</h2>
                <p style={{ color: '#4a5568', marginTop: '12px', fontSize: '1.02rem', lineHeight: '1.7' }}>
                  Our Hyderabad clinical services operate in active collaboration with VOICE (Voice of Integrated Child Education),
                  a leading institution in Saidabad headed by Ms. Ambika. Together, we combine specialized sensory-behavioral training
                  with Hahnemannian constitutional homeopathy to achieve profound developmental breakthroughs.
                </p>

                <div className="sms-banner">
                  <h4 style={{ fontWeight: 700, marginBottom: '4px' }}>Priority SMS Appointment Booking:</h4>
                  <p style={{ margin: 0, fontSize: '0.92rem' }}>
                    Send an SMS to register for the next Hyderabad clinic session:
                  </p>
                  <div className="sms-code">SMS &quot;APT HYDERABAD&quot; to 09898005354</div>
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '16px' }}>
                  <a href="tel:+919491884730" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Call Ms. Ambika: +91 94918 84730
                  </a>
                  <a href="tel:+919898005354" className="btn-secondary" style={{ background: '#f0f8f9', color: '#008c8c', border: '1px solid #008c8c' }}>
                    HQ Desk: +91 98980 05354
                  </a>
                </div>
              </div>

              <div>
                <div className="address-detail-box">
                  <h4>Hyderabad Center Details</h4>
                  <div className="address-row">
                    <strong>Partner Center:</strong> VOICE (Voice of Integrated Child Education)
                  </div>
                  <div className="address-row">
                    <strong>Director / Coordinator:</strong> Ms. Ambika
                  </div>
                  <div className="address-row">
                    <strong>Location:</strong> Saidabad, Hyderabad, Telangana
                  </div>
                  <div className="address-row">
                    <strong>Direct Mobile:</strong> +91 94918 84730
                  </div>
                  <div className="address-row">
                    <strong>Central Appointment Desk:</strong> +91 98980 05354 / +91-79-26763575
                  </div>
                  <div className="address-row">
                    <strong>Languages Supported:</strong> Telugu, Hindi, English, Gujarati
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WAAD ADOPTION PHILANTHROPY BOX */}
          <div className="philanthropy-box">
            <h3>World Autism Awareness Day (WAAD) Initiative: 116 Children Adopted</h3>
            <p>
              In landmark collaboration with VOICE Saidabad, Dr. Ketan Patel and Speciality Homeopathy adopted 116 children
              diagnosed with Autism Spectrum Disorder and intellectual disabilities for completely free, comprehensive constitutional
              homeopathic treatment, establishing long-term clinical data on the benefits of integrated care.
            </p>
          </div>

          {/* CLINICAL SPECIALTIES SERVED */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '1.6rem', textAlign: 'center', marginBottom: '8px' }}>
              Specialized Care Programs in Hyderabad
            </h3>
            <p style={{ textAlign: 'center', color: '#4b6382', maxWidth: '680px', margin: '0 auto 28px' }}>
              Individualized homeopathic protocols designed to work harmoniously with your child&apos;s special education therapies
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <h4>
                  <span style={{ color: 'var(--teal)' }}>●</span> Non-Verbal Autism
                </h4>
                <p>Support for expressive speech initiation, eye-to-eye contact, receptive comprehension, and reduction in echolalia.</p>
              </div>

              <div className="feature-item">
                <h4>
                  <span style={{ color: 'var(--teal)' }}>●</span> Sensory Integration Support
                </h4>
                <p>Gentle calming remedies for tactile hypersensitivity, vestibular instability, auditory distress, and toe-walking.</p>
              </div>

              <div className="feature-item">
                <h4>
                  <span style={{ color: 'var(--teal)' }}>●</span> Sleep &amp; Gut Regulation
                </h4>
                <p>Constitutional correction for chronic night awakenings, digestive bloating, food selectivity, and chronic constipation.</p>
              </div>

              <div className="feature-item">
                <h4>
                  <span style={{ color: 'var(--teal)' }}>●</span> Telangana District Courier
                </h4>
                <p>Reliable monthly medicine courier dispatch across Hyderabad, Secunderabad, Warangal, Nizamabad, and Karimnagar.</p>
              </div>
            </div>
          </div>

          {/* CTA BAR */}
          <div className="city-cta">
            <h3>Book Your Hyderabad Appointment</h3>
            <p>
              Speak with Ms. Ambika at VOICE Saidabad or contact our central appointment desk to register for the upcoming clinic dates.
            </p>
            <div className="btn-row">
              <a href="tel:+919491884730" className="btn-primary">
                Call Ms. Ambika: +91 94918 84730
              </a>
              <Link href="/inquiry" className="btn-secondary">
                Submit Online Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
