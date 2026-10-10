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

  .med-reg-container {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f4f8fc;
    font-size: 16px;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .med-reg-container h1,
  .med-reg-container h2,
  .med-reg-container h3,
  .med-reg-container h4 {
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
  .med-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b8e1f5 42%, #9ad0ec 100%);
    padding: 60px 0 80px;
    overflow: hidden;
  }
  .med-hero::before {
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

  .med-hero-grid {
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

  .med-hero h1 {
    font-size: clamp(2.2rem, 3.8vw, 3.2rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .med-hero h1 em {
    font-style: normal;
    color: var(--teal);
  }

  .med-hero-lead {
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
  .hero-research-card {
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 24px 50px -15px rgba(10,31,68,0.18);
    backdrop-filter: blur(12px);
  }
  .research-icon-wrap {
    width: 60px;
    height: 60px;
    border-radius: 18px;
    background: linear-gradient(135deg, var(--navy), var(--teal));
    display: grid;
    place-items: center;
    color: #fff;
    margin-bottom: 18px;
    box-shadow: 0 10px 24px -6px rgba(15,29,61,0.4);
  }
  .research-card-title {
    font-size: 1.25rem;
    color: var(--navy);
    margin-bottom: 8px;
    font-weight: 700;
  }
  .research-card-sub {
    font-size: 0.88rem;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
  }
  .research-stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    border-top: 1px solid var(--line);
    padding-top: 18px;
  }
  .research-stat {
    background: #f0f7fb;
    padding: 12px;
    border-radius: 12px;
    text-align: center;
  }
  .research-stat .num {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--teal);
    display: block;
  }
  .research-stat .lbl {
    font-size: 0.72rem;
    color: #666;
    font-weight: 600;
  }

  /* ── MAIN CONTENT LAYOUT ── */
  .med-reg-body {
    padding: 50px 0 100px;
    position: relative;
    z-index: 5;
  }

  .med-split-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.35fr;
    gap: 36px;
    align-items: flex-start;
  }

  /* Left Panel */
  .academic-info-card {
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
  .academic-info-card h2 {
    font-size: 1.55rem;
    color: var(--navy);
    margin-bottom: 14px;
  }
  .academic-info-card p {
    color: #4a5568;
    font-size: 0.94rem;
    margin-bottom: 16px;
    line-height: 1.7;
  }

  /* Invited Categories List */
  .category-invitation-list {
    list-style: none;
    padding: 0;
    margin: 22px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .cat-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.88rem;
    color: #334155;
    background: #f8fafc;
    border: 1px solid #edf2f7;
    border-radius: 12px;
    padding: 10px 14px;
    font-weight: 600;
  }
  .cat-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--teal);
    flex-shrink: 0;
  }

  /* Doctor Welcome Quote Box */
  .quote-box {
    background: linear-gradient(135deg, #f0f9fa 0%, #e6f5f7 100%);
    border-left: 4px solid var(--teal);
    border-radius: 0 16px 16px 0;
    padding: 22px;
    margin-top: 26px;
  }
  .quote-box p {
    font-style: italic;
    color: var(--navy);
    font-size: 0.92rem;
    line-height: 1.65;
    margin-bottom: 10px;
  }
  .quote-author {
    font-style: normal;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--teal-dark);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  /* Right Panel: Form */
  .reg-form-card {
    background: #ffffff;
    border: 1.5px solid #ddecfa;
    border-radius: 24px;
    padding: 44px 40px;
    box-shadow: var(--shadow);
    position: relative;
  }
  .reg-form-card h2 {
    font-size: 1.65rem;
    color: var(--navy);
    margin-bottom: 6px;
  }
  .reg-lead-note {
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

  /* Category pills */
  .category-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }
  .cat-pill-btn {
    font-size: 0.78rem;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid #cbd5e1;
    background: #f8fafc;
    color: #475569;
    cursor: pointer;
    transition: all 0.2s;
  }
  .cat-pill-btn:hover {
    border-color: var(--teal);
    color: var(--teal-dark);
  }
  .cat-pill-btn.active {
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
    .med-hero-grid { grid-template-columns: 1fr; }
    .med-split-grid { grid-template-columns: 1fr; }
    .reg-form-card { padding: 32px 24px; }
    .academic-info-card { padding: 32px 24px; }
  }
  @media (max-width: 680px) {
    .form-grid-2 { grid-template-columns: 1fr; }
    .form-field.full-span { grid-column: span 1; }
  }
`;

const registrationCategories = [
  'Individual Medical Doctor / Pediatrician',
  'Homeopathic Physician / Specialist',
  'Child Neurology & Development Clinic',
  'Infertility & Reproductive Health Center',
  'Special Education School / Autism Center',
  'Occupational / Sensory Integration Therapist',
  'Academic Institution / University Faculty',
  'Clinical Research Organization (CRO)',
];

export default function MedicalRegistrationsClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    organization: '',
    category: 'Individual Medical Doctor / Pediatrician',
    email: '',
    phone: '',
    cityCountry: '',
    specialtyArea: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="med-reg-container">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* LUXURY HERO */}
      <section className="med-hero">
        <div className="wrap">
          <div className="med-hero-grid">
            <div>
              <h1>
                Medical Registrations &amp; <em>Clinical Collaboration</em>
              </h1>
              <p className="med-hero-lead">
                Speciality Homeopathy research and development center warmly invites medical practitioners, child neurologists,
                special schools, and academic research institutions to register for clinical collaboration and knowledge exchange.
              </p>
              <div className="hero-trust-chips">
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  100+ Doctors Trained Worldwide
                </div>
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Hompath Software in 83 Countries
                </div>
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Open Institutional Synergy
                </div>
              </div>
            </div>

            <div>
              <div className="hero-research-card">
                <div className="research-icon-wrap">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="research-card-title">Inter-Disciplinary Science</h3>
                <p className="research-card-sub">
                  Fostering collaborative evidence generation between classical homeopathy, neuro-occupational therapy, and pediatric medicine.
                </p>
                <div className="research-stat-row">
                  <div className="research-stat">
                    <span className="num">DAN</span>
                    <span className="lbl">Physicians Trained</span>
                  </div>
                  <div className="research-stat">
                    <span className="num">No Barrier</span>
                    <span className="lbl">Open Inquiries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-curve" />
      </section>

      {/* BODY WITH SPLIT PANELS */}
      <section className="med-reg-body">
        <div className="wrap">
          <div className="med-split-grid">

            {/* LEFT PANEL */}
            <div className="academic-info-card">
              <span className="card-top-tag">Institutional Alliance</span>
              <h2>Open Institutional Affiliation</h2>
              <p>
                Our clinical research center welcomes practitioners and institutes without restrictive prior conditions.
                Whether you operate an autism rehabilitation center, an infertility clinic, or a university research department,
                we provide clinical case support, research data, and individualized constitutional formulations.
              </p>

              <h4 style={{ fontSize: '1rem', color: 'var(--navy)', marginTop: '22px' }}>
                Invited Medical &amp; Academic Categories:
              </h4>

              <div className="category-invitation-list">
                <div className="cat-item">
                  <span className="cat-dot" />
                  Individual Medical Doctors &amp; Pediatric Specialists
                </div>
                <div className="cat-item">
                  <span className="cat-dot" />
                  Child Neurology &amp; Pediatric Rehabilitation Clinics
                </div>
                <div className="cat-item">
                  <span className="cat-dot" />
                  Infertility Centers &amp; Reproductive Health Specialists
                </div>
                <div className="cat-item">
                  <span className="cat-dot" />
                  Special Education Schools &amp; Sensory Integration Centers
                </div>
                <div className="cat-item">
                  <span className="cat-dot" />
                  Academic Medical Institutions &amp; Faculty
                </div>
                <div className="cat-item">
                  <span className="cat-dot" />
                  Clinical Research Fellows &amp; Bio-Statisticians
                </div>
              </div>

              {/* Quote box from Dr. Ketan Patel */}
              <div className="quote-box">
                <p>
                  &quot;Speciality Homeopathy research and development center welcomes all of you.
                  You can provide your introduction, and we will invite you to become a registered medical practitioner,
                  clinic, or medical institute for research and clinical association.&quot;
                </p>
                <div className="quote-author">
                  — Dr. Ketan Patel (Medical Director)
                </div>
              </div>

              {/* Coordination info */}
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '8px' }}>
                  Institutional Desk Contacts:
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '6px' }}>
                  <strong>Telephone:</strong> <a href="tel:+919898005354" style={{ color: 'var(--teal)', fontWeight: 600 }}>+91 98980 05354</a> / <a href="tel:+917926763575" style={{ color: 'var(--teal)', fontWeight: 600 }}>+91-79-26763575</a>
                </p>
                <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '0' }}>
                  <strong>Email:</strong> <a href="mailto:info@specialityhomeopathy.com" style={{ color: 'var(--teal)', fontWeight: 600 }}>info@specialityhomeopathy.com</a>
                </p>
              </div>
            </div>

            {/* RIGHT PANEL: REGISTRATION FORM */}
            <div className="reg-form-card">
              <span className="card-top-tag">Practitioner Registry</span>
              <h2>Medical Practitioner &amp; Center Registration</h2>
              <p className="reg-lead-note">
                Please provide your professional credentials and institutional focus. Our Directorate will review your profile and initiate collaborative correspondence.
              </p>

              {submitted ? (
                <div className="success-card">
                  <h3>Registration Submitted Successfully</h3>
                  <p>
                    Thank you, Dr. / Colleague. Your registration details have been received by our Academic &amp; Clinical Directorate.
                    A formal invitation and collaboration prospectus will be sent to your registered email address within 2 business days.
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
                    Submit Another Profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Prof. / Director Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Designation / Medical Degree *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. MD (Pediatrics), BHMS, OT Specialist"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Clinic / Hospital / Institution Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Organization or Clinic name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>City &amp; Country *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. London, UK or Delhi, India"
                        value={formData.cityCountry}
                        onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Official Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="doctor@institution.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Direct Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98980 05354"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Category Selector */}
                    <div className="form-field full-span">
                      <label>Affiliation Category *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        style={{ fontWeight: 600 }}
                      >
                        {registrationCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>

                      <div className="category-pills">
                        {registrationCategories.slice(0, 4).map((cat) => (
                          <button
                            type="button"
                            key={cat}
                            className={`cat-pill-btn ${formData.category === cat ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, category: cat })}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-field full-span">
                      <label>Clinical Specialty or Research Focus Area</label>
                      <input
                        type="text"
                        placeholder="e.g. Pediatric Autism, Sensory Integration, Male Infertility, Rare Channelopathies"
                        value={formData.specialtyArea}
                        onChange={(e) => setFormData({ ...formData, specialtyArea: e.target.value })}
                      />
                    </div>

                    <div className="form-field full-span">
                      <label>Message / Proposed Collaborative Scope</label>
                      <textarea
                        rows={4}
                        placeholder="Briefly describe your clinic's patient profile, referral interests, or proposed joint clinical research..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-submit-luxury">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                    Submit Medical Registration
                  </button>

                  <div className="form-trust-footer">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      Verified Academic Alliance
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Direct Institutional Response
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      </svg>
                      No Commercial Advertising
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
