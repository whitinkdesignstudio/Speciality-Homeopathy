'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --teal: #008C8C;
    --gold: #C8A96B;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --blue-06: rgba(10,31,68,.06);
    --teal-10: rgba(0,140,140,.10);
    --line: rgba(10,31,68,.10);
    --shadow: 0 24px 60px -30px rgba(10,31,68,.34);
    --shadow-sm: 0 12px 30px -20px rgba(10,31,68,.3);
    --maxw: 1180px;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f0f8f9;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Poppins', sans-serif;
    color: var(--blue);
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.01em;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 26px; }

  /* ── HERO: light blue background with dark text ── */
  .hero {
    position: relative;
    background: linear-gradient(135deg, #ADD8E6 0%, #A8D8EA 100%);
    padding: 70px 80px 64px;
    min-height: 320px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 85% 15%, rgba(91,191,191,0.18), transparent 45%),
      radial-gradient(circle at 8% 85%, rgba(91,191,191,0.12), transparent 40%);
    pointer-events: none;
  }
  .hero-top { position: relative; z-index: 1; }
  .hero h1 {
    font-size: clamp(2rem, 3.8vw, 2.9rem);
    font-weight: 700;
    color: #0F1D3D;
    margin-bottom: 14px;
    letter-spacing: -0.5px;
  }
  .hero h1 span { color: #008C8C; }
  .hero-sub {
    color: #355f6f;
    font-size: 1.05rem;
    max-width: 580px;
    line-height: 1.6;
    margin-bottom: 34px;
  }
  .hero-chips {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .hero-chip {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255,255,255,0.75);
    border: 1px solid rgba(0,140,140,0.25);
    backdrop-filter: blur(10px);
    border-radius: 14px;
    padding: 12px 18px;
    color: #0F1D3D;
    text-decoration: none;
    transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }
  .hero-chip:hover {
    transform: translateY(-3px);
    background: rgba(255,255,255,0.95);
    border-color: #008C8C;
    box-shadow: 0 10px 24px -10px rgba(0,140,140,0.3);
  }
  .hero-chip-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: linear-gradient(135deg, #008C8C, #0a4a6e);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
  }
  .hero-chip-text { line-height: 1.35; }
  .hero-chip-text small {
    display: block;
    font-size: 10.5px;
    color: #588090;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2px;
    font-weight: 600;
  }
  .hero-chip-text strong {
    font-size: 14px;
    font-weight: 600;
    color: #0F1D3D;
  }

  /* ── SECTION 1: LOCATION CARDS ── */
  .locations {
    background: #f0f8f9;
    padding: 70px 80px;
  }
  .locations-head {
    text-align: center;
    max-width: 580px;
    margin: 0 auto 44px;
  }
  .locations-head h2 {
    font-size: clamp(1.7rem, 2.8vw, 2.2rem);
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 10px;
  }
  .locations-head p {
    font-size: 15px;
    color: #556877;
    line-height: 1.6;
  }
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    max-width: var(--maxw);
    margin: 0 auto;
  }
  .card {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(10,31,68,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 42px rgba(10,31,68,0.14);
  }
  .card-head {
    padding: 26px 28px 22px;
    position: relative;
    color: #fff;
    overflow: hidden;
  }
  .card-head::after {
    content: "";
    position: absolute;
    top: -30%;
    right: -20%;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: rgba(255,255,255,0.13);
  }
  .card.city-ahmedabad .card-head {
    background: linear-gradient(135deg, #1a4a5a, #008C8C);
  }
  .card.city-mumbai .card-head {
    background: linear-gradient(135deg, #0d3b66, #2f6fa3);
  }
  .card.city-delhi .card-head {
    background: linear-gradient(135deg, #103141, #1a6f8a);
  }
  .card-head .pin {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
    color: #fff;
  }
  .card-head h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 4px;
    position: relative;
    z-index: 1;
    color: #fff;
  }
  .card-head .clinic-name {
    font-size: 13.5px;
    font-weight: 600;
    opacity: 0.94;
    position: relative;
    z-index: 1;
  }
  .card-head .doctor-name {
    font-size: 12px;
    opacity: 0.82;
    margin-top: 3px;
    position: relative;
    z-index: 1;
    line-height: 1.4;
  }
  .card-body {
    padding: 24px 28px 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
  }
  .card-detail {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    color: #4a5a67;
    font-size: 13.5px;
    line-height: 1.55;
  }
  .card-detail svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: #008C8C;
  }
  .city-mumbai .card-detail svg { color: #2f6fa3; }
  .city-delhi .card-detail svg { color: #1a6f8a; }

  /* ── SECTION 2: GET IN TOUCH & FORM ── */
  .get-in-touch {
    padding: 60px 80px 80px;
    background: #f0f8f9;
  }
  .git-head {
    max-width: 580px;
    margin: 0 auto 36px;
    text-align: center;
  }
  .get-in-touch h2 {
    font-size: clamp(1.8rem, 2.8vw, 2.3rem);
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 10px;
  }
  .git-head p {
    font-size: 15px;
    color: #556877;
    line-height: 1.6;
  }
  .git-card {
    max-width: 1040px;
    margin: 0 auto;
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 14px 44px rgba(10,31,68,0.10);
    border: 1px solid rgba(0,140,140,0.12);
  }
  .git-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: linear-gradient(135deg, #0A1F44, #0a4a6e);
  }
  .git-strip-item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 22px 24px;
    border-right: 1px solid rgba(255,255,255,0.12);
  }
  .git-strip-item:last-child { border-right: none; }
  .git-strip-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    flex-shrink: 0;
    background: rgba(0,140,140,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #BAE0F3;
  }
  .git-strip-text { line-height: 1.4; }
  .git-strip-text small {
    display: block;
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: rgba(255,255,255,0.6);
    margin-bottom: 3px;
    font-weight: 600;
  }
  .git-strip-text strong {
    font-size: 14px;
    color: #fff;
    font-weight: 600;
  }
  .git-strip-text a { color: #fff; text-decoration: none; }

  .git-note {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #eef7fa;
    padding: 14px 30px;
    font-size: 13.5px;
    color: #2b5364;
    border-bottom: 1px solid #d8ecf2;
  }
  .git-note svg { flex-shrink: 0; color: #008C8C; }
  .git-note strong { color: #0A1F44; }

  .git-form-area { padding: 40px 42px; }
  .git-form-split {
    display: grid;
    grid-template-columns: 1fr 310px;
    gap: 36px;
    align-items: start;
  }

  /* Form controls */
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-bottom: 18px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 18px;
  }
  .form-group label {
    font-size: 13.5px;
    font-weight: 600;
    color: #0A1F44;
  }
  .form-group label span { color: #e74c3c; }
  .form-group input,
  .form-group textarea,
  .form-group select {
    padding: 13px 16px;
    border: 1.5px solid #d7e4e8;
    border-radius: 10px;
    font-size: 14.5px;
    color: #1a1a2e;
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s;
    font-family: inherit;
    background: #fff;
  }
  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    border-color: #008C8C;
    box-shadow: 0 0 0 3px rgba(0,140,140,0.12);
  }
  .form-group textarea { resize: vertical; min-height: 110px; }

  .git-form-bottom {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-top: 8px;
  }
  .btn-submit {
    flex: 1;
    background: linear-gradient(135deg, #008C8C, #0a4a6e);
    color: #fff;
    border: none;
    padding: 15px 24px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.3px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px -8px rgba(0,140,140,0.5);
  }
  .btn-whatsapp-alt {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fff;
    color: #0A1F44;
    border: 1.5px solid #d7e4e8;
    padding: 14px 20px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
  }
  .btn-whatsapp-alt:hover {
    border-color: #25d366;
    background: #f5fcf7;
    transform: translateY(-2px);
  }
  .btn-whatsapp-alt svg { color: #25d366; }

  /* Chat card (right side) */
  .chat-card {
    background: #eef7fa;
    border-radius: 18px;
    padding: 28px 24px;
    text-align: center;
    border: 1px solid rgba(0,140,140,0.15);
  }
  .chat-card-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: linear-gradient(135deg, #008C8C, #0a4a6e);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    color: #fff;
    box-shadow: 0 8px 20px -6px rgba(0,140,140,0.35);
  }
  .chat-card h4 {
    font-size: 17px;
    font-weight: 700;
    color: #0A1F44;
    line-height: 1.35;
    margin-bottom: 12px;
  }
  .chat-card p {
    font-size: 13px;
    color: #556877;
    line-height: 1.55;
    margin-bottom: 20px;
  }
  .btn-contact-us {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    background: linear-gradient(135deg, #008C8C, #0a4a6e);
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 22px;
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .btn-contact-us:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -6px rgba(0,140,140,0.4);
  }
  .chat-card-detail {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 12.5px;
    color: #415360;
    margin-bottom: 12px;
    text-align: left;
    line-height: 1.5;
  }
  .chat-card-detail svg {
    flex-shrink: 0;
    color: #008C8C;
    margin-top: 2px;
  }
  .chat-card-detail:last-child { margin-bottom: 0; }

  .success-banner {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
    padding: 18px 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.5;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .hero { padding: 60px 32px 48px; }
    .locations { padding: 56px 32px; }
    .get-in-touch { padding: 50px 32px 64px; }
    .cards-grid { grid-template-columns: 1fr; gap: 20px; }
    .git-form-split { grid-template-columns: 1fr; gap: 32px; }
  }

  @media (max-width: 768px) {
    .hero { padding: 48px 20px 40px; }
    .hero h1 { font-size: 1.85rem; }
    .hero-chips { flex-direction: column; gap: 10px; }
    .locations { padding: 44px 16px; }
    .get-in-touch { padding: 40px 16px 56px; }
    .git-strip { grid-template-columns: 1fr; }
    .git-strip-item {
      border-right: none;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      padding: 16px 20px;
    }
    .git-form-area { padding: 26px 20px; }
    .form-row { grid-template-columns: 1fr; gap: 0; }
    .git-form-bottom { flex-direction: column; }
    .btn-submit, .btn-whatsapp-alt { width: 100%; justify-content: center; }
  }
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    clinic: 'Ahmedabad',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="hero-top wrap">
          <h1>
            Let's Start a <span>Conversation</span>
          </h1>
          <p className="hero-sub">
            Reach out to our Ahmedabad, Mumbai or New Delhi clinics — our team responds personally to every inquiry.
          </p>
          <div className="hero-chips">
            <a href="tel:+919898005354" className="hero-chip">
              <span className="hero-chip-icon">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="hero-chip-text">
                <small>Call Us</small>
                <strong>+91 98980 05354</strong>
              </span>
            </a>

            <a href="mailto:info@specialityhomeopathy.com" className="hero-chip">
              <span className="hero-chip-icon">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="hero-chip-text">
                <small>Email Us</small>
                <strong>info@specialityhomeopathy.com</strong>
              </span>
            </a>

            <div className="hero-chip">
              <span className="hero-chip-icon">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="hero-chip-text">
                <small>Main Clinic</small>
                <strong>Vastrapur, Ahmedabad</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LOCATION CARDS */}
      <section className="locations">
        <div className="locations-head">
          <h2>Visit Us Across India</h2>
          <p>Three clinics, one consistent standard of care — find the location nearest to you.</p>
        </div>

        <div className="cards-grid">
          {/* Ahmedabad */}
          <div className="card city-ahmedabad">
            <div className="card-head">
              <div className="pin">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>Ahmedabad</h3>
              <p className="clinic-name">Speciality Homeopathy</p>
              <p className="doctor-name">Dr. Ketan Patel</p>
            </div>
            <div className="card-body">
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>A205, A-206 Himalaya Arcade, Opp. Lake, Nehru Park, Vastrapur, Ahmedabad – 380015, Gujarat, India</span>
              </div>
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                <span>+91-79-2676 3575</span>
              </div>
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                <span>+91-9898005354</span>
              </div>
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
                <span>drketan@specialityhomeopathy.com</span>
              </div>
            </div>
          </div>

          {/* Mumbai */}
          <div className="card city-mumbai">
            <div className="card-head">
              <div className="pin">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>Mumbai</h3>
              <p className="clinic-name">Labh Homeopathic Clinic</p>
              <p className="doctor-name">Dr. Ketan Patel, Dr. Bhakti Batavia &amp; Dr. Chetan Batavia</p>
            </div>
            <div className="card-body">
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>48-C, Baptista Road, Opp. New Municipal Market, Nr. Vile Parle Station, Vile Parle (West), Mumbai – 400056</span>
              </div>
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                <span>+91-9819399663</span>
              </div>
            </div>
          </div>

          {/* New Delhi */}
          <div className="card city-delhi">
            <div className="card-head">
              <div className="pin">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>New Delhi</h3>
              <p className="clinic-name">THERAPY FOR ABILITY</p>
            </div>
            <div className="card-body">
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>Block JJ 13/26, Basement Rajouri Garden, Nr. HDFC Bank &amp; Pizza Hut Delivery, West Delhi, New Delhi – 110027</span>
              </div>
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                <span>+91-11-45626933</span>
              </div>
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                <span>+91-9899676616</span>
              </div>
              <div className="card-detail">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
                <span>drketan@specialityhomeopathy.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GET IN TOUCH WITH INTERACTIVE FORM & CHAT CARD */}
      <section className="get-in-touch">
        <div className="git-head">
          <h2>We'd Love to Hear From You</h2>
          <p>Share your child's reports or simply ask a question — our team replies personally to every message.</p>
        </div>

        <div className="git-card">
          <div className="git-strip">
            <div className="git-strip-item">
              <span className="git-strip-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="git-strip-text">
                <small>Main Clinic</small>
                <strong>Vastrapur, Ahmedabad</strong>
              </span>
            </div>

            <div className="git-strip-item">
              <span className="git-strip-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="git-strip-text">
                <small>Call Us</small>
                <a href="tel:+919898005354">
                  <strong>+91 98980 05354</strong>
                </a>
              </span>
            </div>

            <div className="git-strip-item">
              <span className="git-strip-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="git-strip-text">
                <small>Email Us</small>
                <a href="mailto:info@specialityhomeopathy.com">
                  <strong>info@specialityhomeopathy.com</strong>
                </a>
              </span>
            </div>
          </div>

          <div className="git-note">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>
              <strong>Prior appointment required</strong> for patients of New Delhi, Mumbai, Hyderabad, Secunderabad, Kolkata, Chennai, Bangalore, Mysore &amp; Ludhiana.
            </span>
          </div>

          <div className="git-form-area">
            <div className="git-form-split">
              {/* Left Column: Interactive Form */}
              <form onSubmit={handleSubmit}>
                {submitted && (
                  <div className="success-banner">
                    Thank you! Your message has been received. Our clinic team will reach out to you shortly.
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      First Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Last Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Patel"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Phone / WhatsApp Number <span>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98980 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Preferred Clinic / City</label>
                  <select
                    value={formData.clinic}
                    onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                  >
                    <option value="Ahmedabad">Ahmedabad (Main Clinic)</option>
                    <option value="Mumbai">Mumbai (Vile Parle West)</option>
                    <option value="New Delhi">New Delhi (Rajouri Garden)</option>
                    <option value="Online Consultation">Online Video Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Your Message / Health Concern <span>*</span>
                  </label>
                  <textarea
                    required
                    placeholder="Please mention your child's age, diagnosis, current concerns, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="git-form-bottom">
                  <button type="submit" className="btn-submit">
                    Send Inquiry &amp; Request Callback
                  </button>
                  <a
                    href="https://wa.me/918320131612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-alt"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.771.884 2.802.884 3.185 0 5.766-2.587 5.767-5.766.001-3.187-2.575-5.77-5.773-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-1.121-.077-.282-.092-.647-.215-1.118-.418-1.99-.861-3.286-2.887-3.385-3.023-.1-.133-.807-1.075-.807-2.052 0-.978.513-1.46.696-1.66.182-.2.4-.25.534-.25.133 0 .267.002.383.008.125.006.29-.047.453.346.168.405.57 1.391.621 1.493.05.102.083.222.016.356-.067.133-.1.217-.2.334-.1.117-.21.261-.3.35-.1.1-.205.209-.088.409.117.2 0.521.862 1.119 1.395.77.685 1.42.898 1.62.998.2.1.317.084.434-.05.117-.134.5-0.584.634-.784.133-.2.267-.167.45-.1.183.067 1.167.55 1.367.65.2.1.334.15.383.234.05.084.05.484-.094.889z" />
                    </svg>
                    <span>Quick WhatsApp</span>
                  </a>
                </div>
              </form>

              {/* Right Column: Chat Card */}
              <div className="chat-card">
                <div className="chat-card-icon">
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor" />
                  </svg>
                </div>
                <h4>
                  Have questions?
                  <br />
                  Chat with us!
                </h4>
                <p>Need help finding the answer you're looking for? Our support team is just a chat away!</p>

                <a
                  href="https://wa.me/918320131612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-us"
                >
                  Chat with Us on WhatsApp
                </a>

                <div className="chat-card-detail">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>A-205, A-206 Himalaya Arcade, Opp. Lake, Nehru Park, Vastrapur, Ahmedabad – 380015, Gujarat, India</span>
                </div>

                <div className="chat-card-detail">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>+91-9898005354</span>
                </div>

                <div className="chat-card-detail">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>info@specialityhomeopathy.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
