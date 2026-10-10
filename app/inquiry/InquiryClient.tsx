'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --navy: #0F1D3D;
    --teal: #008C8C;
    --teal-dark: #006666;
    --teal-light: #e6f7f7;
    --gold: #C8A96B;
    --gold-light: #faf5ea;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --line: rgba(10,31,68,.10);
    --shadow: 0 20px 48px -12px rgba(10,31,68,.12), 0 2px 8px rgba(10,31,68,.04);
    --shadow-hover: 0 28px 60px -15px rgba(0,140,140,.20);
    --maxw: 1200px;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  .inquiry-page-container {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f4f8fc;
    font-size: 16px;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .inquiry-page-container h1,
  .inquiry-page-container h2,
  .inquiry-page-container h3,
  .inquiry-page-container h4 {
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
  .inq-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b8e1f5 42%, #9ad0ec 100%);
    padding: 60px 0 80px;
    overflow: hidden;
  }
  .inq-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 88% 20%, rgba(0,140,140,0.18), transparent 45%),
      radial-gradient(circle at 10% 80%, rgba(200,169,107,0.16), transparent 45%);
    pointer-events: none;
  }

  /* Decorative bottom wave to cleanly separate hero from body cards */
  .hero-bottom-curve {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 24px;
    background: #f4f8fc;
    border-radius: 30px 30px 0 0;
  }

  .inq-hero-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    align-items: center;
    padding-bottom: 12px;
  }

  .hero-pill-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(0,140,140,0.3);
    color: var(--teal-dark);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 999px;
    margin-bottom: 18px;
    box-shadow: 0 4px 15px rgba(10,31,68,0.06);
  }

  .inq-hero h1 {
    font-size: clamp(2.2rem, 3.8vw, 3.2rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .inq-hero h1 em {
    font-style: normal;
    color: var(--teal);
  }

  .inq-hero-lead {
    font-size: 1.05rem;
    color: rgba(15,29,61,0.85);
    max-width: 620px;
    margin-bottom: 24px;
    line-height: 1.65;
  }

  .hero-trust-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .trust-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(255,255,255,0.75);
    border: 1px solid rgba(10,31,68,0.12);
    padding: 7px 14px;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--navy);
    backdrop-filter: blur(4px);
  }
  .trust-chip svg {
    color: var(--teal);
    flex-shrink: 0;
  }

  /* Right floating card */
  .hero-triage-card {
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 24px 50px -15px rgba(10,31,68,0.18);
    backdrop-filter: blur(12px);
  }
  .triage-icon-wrap {
    width: 60px;
    height: 60px;
    border-radius: 18px;
    background: linear-gradient(135deg, var(--teal), var(--navy));
    display: grid;
    place-items: center;
    color: #fff;
    margin-bottom: 18px;
    box-shadow: 0 10px 24px -6px rgba(0,140,140,0.4);
  }
  .triage-card-title {
    font-size: 1.25rem;
    color: var(--navy);
    margin-bottom: 8px;
    font-weight: 700;
  }
  .triage-card-sub {
    font-size: 0.88rem;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
  }
  .triage-stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    border-top: 1px solid var(--line);
    padding-top: 18px;
  }
  .triage-stat {
    background: #f0f7fb;
    padding: 12px;
    border-radius: 12px;
    text-align: center;
  }
  .triage-stat .num {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--teal);
    display: block;
  }
  .triage-stat .lbl {
    font-size: 0.72rem;
    color: #666;
    font-weight: 600;
  }

  /* ── MAIN CONTENT LAYOUT ── */
  .inquiry-body {
    padding: 50px 0 100px;
    position: relative;
    z-index: 5;
  }

  .inquiry-split-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.35fr;
    gap: 36px;
    align-items: flex-start;
  }

  /* Left Panel: How Consultation Works & Contact info */
  .info-panel-card {
    background: #ffffff;
    border: 1.5px solid #ddecfa;
    border-radius: 24px;
    padding: 42px 36px;
    box-shadow: var(--shadow);
    position: relative;
  }
  .card-top-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--teal);
    background: var(--teal-light);
    padding: 4px 12px;
    border-radius: 999px;
    margin-bottom: 16px;
  }
  .info-panel-card h2 {
    font-size: 1.55rem;
    color: var(--navy);
    margin-bottom: 14px;
  }
  .info-panel-card p {
    color: #4a5568;
    font-size: 0.94rem;
    margin-bottom: 16px;
    line-height: 1.7;
  }

  /* 4-Step Consultation Pathway */
  .pathway-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 26px 0;
  }
  .pathway-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .p-step-num {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--teal-light);
    color: var(--teal);
    font-weight: 700;
    font-size: 0.85rem;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border: 1px solid rgba(0,140,140,0.25);
  }
  .p-step-text h4 {
    font-size: 0.95rem;
    color: var(--navy);
    margin-bottom: 2px;
  }
  .p-step-text p {
    font-size: 0.84rem;
    color: #64748b;
    margin: 0;
    line-height: 1.5;
  }

  /* Direct Hotlines Box */
  .hotline-box {
    background: linear-gradient(135deg, #f0f9fa 0%, #e6f5f7 100%);
    border-radius: 18px;
    border: 1px solid rgba(0,140,140,0.22);
    padding: 24px;
    margin-top: 26px;
  }
  .hotline-box h4 {
    color: var(--navy);
    font-size: 1rem;
    margin-bottom: 12px;
  }
  .hotline-link-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    color: #334155;
    margin-bottom: 10px;
  }
  .hotline-link-row:last-child {
    margin-bottom: 0;
  }
  .hotline-link-row svg {
    color: var(--teal);
    flex-shrink: 0;
  }
  .hotline-link-row a {
    color: var(--teal-dark);
    font-weight: 700;
    text-decoration: none;
  }
  .hotline-link-row a:hover {
    text-decoration: underline;
  }

  /* Clinic Chips */
  .clinics-section {
    margin-top: 28px;
    padding-top: 22px;
    border-top: 1px solid var(--line);
  }
  .clinics-section h4 {
    font-size: 0.95rem;
    color: var(--navy);
    margin-bottom: 12px;
  }
  .clinic-chips-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .c-chip {
    font-size: 0.76rem;
    font-weight: 600;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    color: #334155;
    padding: 5px 12px;
    border-radius: 999px;
  }

  /* ── RIGHT PANEL: FORM CARD ── */
  .form-panel-card {
    background: #ffffff;
    border: 1.5px solid #ddecfa;
    border-radius: 24px;
    padding: 44px 40px;
    box-shadow: var(--shadow);
    position: relative;
  }
  .form-panel-card h2 {
    font-size: 1.65rem;
    color: var(--navy);
    margin-bottom: 6px;
  }
  .form-lead-note {
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 28px;
  }

  .form-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }
  .form-field.full-span {
    grid-column: span 2;
  }
  .form-field label {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #475569;
    margin-bottom: 6px;
  }
  .form-field input,
  .form-field select,
  .form-field textarea {
    padding: 13px 16px;
    border-radius: 12px;
    border: 1px solid #cbd5e1;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--navy);
    outline: none;
    transition: all 0.2s var(--ease);
    background: #ffffff;
  }
  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus {
    border-color: var(--teal);
    box-shadow: 0 0 0 3px rgba(0,140,140,0.18);
  }

  /* Quick condition chips */
  .condition-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }
  .cond-btn {
    font-size: 0.78rem;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid #cbd5e1;
    background: #f8fafc;
    color: #475569;
    cursor: pointer;
    transition: all 0.2s;
  }
  .cond-btn:hover {
    border-color: var(--teal);
    color: var(--teal-dark);
  }
  .cond-btn.active {
    background: var(--teal);
    border-color: var(--teal);
    color: #ffffff;
    font-weight: 600;
  }

  .btn-submit-luxury {
    width: 100%;
    background: linear-gradient(135deg, var(--teal), #009999);
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.05rem;
    padding: 16px;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 24px -6px rgba(0,140,140,0.45);
    transition: transform 0.2s var(--ease), box-shadow 0.2s;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .btn-submit-luxury:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px -6px rgba(0,140,140,0.6);
  }

  .form-trust-footer {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 18px;
    font-size: 0.78rem;
    color: #64748b;
  }
  .form-trust-footer span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .form-trust-footer svg {
    color: var(--teal);
  }

  /* Success banner */
  .success-card {
    background: #f0fdf4;
    border: 1px solid #86efac;
    border-radius: 18px;
    padding: 36px 30px;
    text-align: center;
    color: #166534;
  }
  .success-card h3 {
    color: #166534;
    font-size: 1.55rem;
    margin-bottom: 12px;
  }
  .success-card p {
    color: #15803d;
    max-width: 540px;
    margin: 0 auto 20px;
    line-height: 1.65;
  }

  @media (max-width: 980px) {
    .inq-hero-grid { grid-template-columns: 1fr; }
    .inquiry-split-grid { grid-template-columns: 1fr; }
    .form-panel-card { padding: 32px 24px; }
    .info-panel-card { padding: 32px 24px; }
  }
  @media (max-width: 680px) {
    .form-grid-2 { grid-template-columns: 1fr; }
    .form-field.full-span { grid-column: span 1; }
  }
`;

const conditionOptions = [
  'Autism Spectrum Disorder (ASD)',
  'ADHD & Hyperactivity',
  'Cerebral Palsy',
  'Developmental Delay (GDD)',
  'Down Syndrome',
  'Genetic & Rare Syndromes (CACNA1A)',
  'Dyslexia & Learning Challenges',
  'Child Behavioral Disorders',
  'Infertility (Male/Female)',
  'Atopic Dermatitis & Eczema',
  'Chronic Asthma & Allergies',
  'Other Pediatric Condition',
];

export default function InquiryClient() {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: 'Male',
    parentName: '',
    phone: '',
    email: '',
    city: '',
    country: 'India',
    condition: 'Autism Spectrum Disorder (ASD)',
    consultationMode: 'In-Clinic Visit',
    clinicCity: 'Ahmedabad (Headquarters)',
    durationOfProblem: '',
    currentTreatments: '',
    symptomsDescription: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="inquiry-page-container">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* LUXURY HERO */}
      <section className="inq-hero">
        <div className="wrap">
          <div className="inq-hero-grid">
            <div>
              <h1>
                Patient Consultation &amp; <em>Case Triage</em>
              </h1>
              <p className="inq-hero-lead">
                Submit your child&apos;s symptoms, developmental timeline, and prior medical diagnoses for an individualized
                case assessment by Dr. Ketan Patel and our specialized pediatric clinical panel.
              </p>
              <div className="hero-trust-chips">
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  24-Hour Response Guarantee
                </div>
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  100% Confidential Medical Triage
                </div>
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  India &amp; International Telehealth
                </div>
              </div>
            </div>

            <div>
              <div className="hero-triage-card">
                <div className="triage-icon-wrap">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="triage-card-title">Case Assessment Protocol</h3>
                <p className="triage-card-sub">
                  Every submission is reviewed under Hahnemannian totality principles to formulate a targeted constitutional simillimum.
                </p>
                <div className="triage-stat-row">
                  <div className="triage-stat">
                    <span className="num">25+ Yrs</span>
                    <span className="lbl">Clinical Experience</span>
                  </div>
                  <div className="triage-stat">
                    <span className="num">83+</span>
                    <span className="lbl">Countries Served</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-curve" />
      </section>

      {/* BODY WITH SPLIT PANELS */}
      <section className="inquiry-body">
        <div className="wrap">
          <div className="inquiry-split-grid">

            {/* LEFT PANEL */}
            <div className="info-panel-card">
              <span className="card-top-tag">Clinical Roadmap</span>
              <h2>How Consultation Works</h2>
              <p>
                Every child with neuro-developmental or chronic pediatric conditions has a distinct biological and dynamic constitution.
                Dr. Ketan Patel carefully evaluates prenatal history, sensory triggers, speech milestones, and allopathic records before prescribing.
              </p>

              <div className="pathway-list">
                <div className="pathway-item">
                  <div className="p-step-num">1</div>
                  <div className="p-step-text">
                    <h4>Submit Clinical Dossier</h4>
                    <p>Provide developmental age, presenting symptoms, behavioral traits, and prior medical tests.</p>
                  </div>
                </div>

                <div className="pathway-item">
                  <div className="p-step-num">2</div>
                  <div className="p-step-text">
                    <h4>Pre-Consultation Review</h4>
                    <p>Dr. Patel &amp; our senior doctors study the case history and schedule an in-person or video slot.</p>
                  </div>
                </div>

                <div className="pathway-item">
                  <div className="p-step-num">3</div>
                  <div className="p-step-text">
                    <h4>Detailed Consultation</h4>
                    <p>In-depth discussion with parents, video observation of the child, and constitutional repertorization.</p>
                  </div>
                </div>

                <div className="pathway-item">
                  <div className="p-step-num">4</div>
                  <div className="p-step-text">
                    <h4>Custom Remedy Dispatch</h4>
                    <p>High-dilution Avogadro medicines dispatched to your doorstep with clear dosage instructions.</p>
                  </div>
                </div>
              </div>

              {/* Direct Hotlines */}
              <div className="hotline-box">
                <h4>Direct Contact Helplines</h4>
                <div className="hotline-link-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Main Landline: <a href="tel:+917926763575">+91-79-26763575</a></span>
                </div>
                <div className="hotline-link-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Doctor Hotline: <a href="https://wa.me/919898005354" target="_blank" rel="noopener noreferrer">+91 98980 05354</a></span>
                </div>
                <div className="hotline-link-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Case Intake Email: <a href="mailto:info@specialityhomeopathy.com">info@specialityhomeopathy.com</a></span>
                </div>
              </div>

              {/* Clinic Hubs */}
              <div className="clinics-section">
                <h4>In-Person Consultation Hubs</h4>
                <div className="clinic-chips-cloud">
                  <span className="c-chip">Ahmedabad HQ</span>
                  <span className="c-chip">Mumbai (Vile Parle)</span>
                  <span className="c-chip">New Delhi (Rajouri Garden)</span>
                  <span className="c-chip">Bangalore</span>
                  <span className="c-chip">Kolkata</span>
                  <span className="c-chip">Hyderabad (Saidabad)</span>
                  <span className="c-chip">Secunderabad</span>
                  <span className="c-chip">Chennai</span>
                  <span className="c-chip">USA / UK Zoom Video</span>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: FORM */}
            <div className="form-panel-card">
              <span className="card-top-tag">Patient Intake</span>
              <h2>Case Assessment &amp; Consultation Request</h2>
              <p className="form-lead-note">
                Please complete the patient details below. All submitted medical information is protected by strict clinical confidentiality.
              </p>

              {submitted ? (
                <div className="success-card">
                  <h3>Inquiry Received Successfully</h3>
                  <p>
                    Thank you. Your consultation inquiry has been submitted directly to Dr. Ketan Patel&apos;s clinical team.
                    Our Senior Patient Coordinator will contact you within 24 hours via Phone or WhatsApp to confirm your appointment slot.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{
                      background: 'var(--teal)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '12px 28px',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Patient&apos;s Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Child / Patient name"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Age &amp; Gender *</label>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <input
                          type="text"
                          required
                          style={{ width: '45%' }}
                          placeholder="Age (e.g. 4)"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        />
                        <select
                          style={{ width: '55%' }}
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label>Parent / Guardian Name</label>
                      <input
                        type="text"
                        placeholder="Parent / Guardian name"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Contact Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98980 05354"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="your-email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>City &amp; Country *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mumbai, India or San Jose, USA"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>

                    {/* Condition Selector */}
                    <div className="form-field full-span">
                      <label>Primary Condition Diagnosed / Suspected *</label>
                      <select
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        style={{ fontWeight: 600 }}
                      >
                        {conditionOptions.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>

                      <div className="condition-pills">
                        {conditionOptions.slice(0, 6).map((c) => (
                          <button
                            type="button"
                            key={c}
                            className={`cond-btn ${formData.condition === c ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, condition: c })}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-field">
                      <label>Preferred Consultation Mode *</label>
                      <select
                        value={formData.consultationMode}
                        onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                      >
                        <option value="In-Clinic Visit">In-Person Clinic Visit</option>
                        <option value="Online Video (Zoom/FaceTime)">Online Video Consultation (Zoom / WhatsApp)</option>
                        <option value="Telephone Consultation">Phone Consultation</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label>Preferred Clinic Location</label>
                      <select
                        value={formData.clinicCity}
                        onChange={(e) => setFormData({ ...formData, clinicCity: e.target.value })}
                      >
                        <option value="Ahmedabad (Headquarters)">Ahmedabad (Vastrapur HQ)</option>
                        <option value="Mumbai (Labh Clinic Vile Parle)">Mumbai (Labh Clinic, Vile Parle West)</option>
                        <option value="New Delhi (Rajouri Garden)">New Delhi (Rajouri Garden)</option>
                        <option value="Bangalore">Bangalore Clinic</option>
                        <option value="Kolkata">Kolkata Regional Camp</option>
                        <option value="Hyderabad (VOICE Saidabad)">Hyderabad (VOICE Saidabad)</option>
                        <option value="Secunderabad">Secunderabad</option>
                        <option value="Chennai">Chennai Clinic</option>
                        <option value="USA / International Remote Tele-Health">USA &amp; International Telehealth</option>
                        <option value="UK & Europe Tele-Health">UK &amp; Europe Telehealth</option>
                      </select>
                    </div>

                    <div className="form-field full-span">
                      <label>Presenting Symptoms &amp; Developmental History</label>
                      <textarea
                        rows={4}
                        placeholder="Describe key challenges (e.g. speech delay, poor eye contact, sensory meltdowns, sleep disturbances, hyperactivity, digestive issues, or genetic test findings)..."
                        value={formData.symptomsDescription}
                        onChange={(e) => setFormData({ ...formData, symptomsDescription: e.target.value })}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-submit-luxury">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Submit Case for Doctor Review
                  </button>

                  <div className="form-trust-footer">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      100% Medical Confidentiality
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Direct Review by Dr. Ketan Patel
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      </svg>
                      Zero Commercial Spam
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
