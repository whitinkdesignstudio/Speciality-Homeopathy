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
    --maxw: 1180px;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  .pay-fees-wrap {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f0f8f9;
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .pay-fees-wrap h1,
  .pay-fees-wrap h2,
  .pay-fees-wrap h3,
  .pay-fees-wrap h4,
  .pay-fees-wrap h5 {
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
  .pay-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b3def4 40%, #95cde8 100%);
    padding: 64px 0 74px;
    overflow: hidden;
  }
  .pay-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 85% 15%, rgba(0,140,140,0.18), transparent 45%),
      radial-gradient(circle at 10% 80%, rgba(200,169,107,0.15), transparent 40%);
    pointer-events: none;
  }
  .pay-hero-content {
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
  .pay-hero h1 {
    font-size: clamp(2.2rem, 4.2vw, 3.4rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .pay-hero h1 span {
    color: var(--teal);
  }
  .hero-sub {
    font-size: 1.12rem;
    color: #24426b;
    max-width: 760px;
    margin-bottom: 30px;
  }

  /* Methods Strip */
  .methods-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(0,140,140,0.25);
    border-radius: 14px;
    padding: 16px 24px;
    box-shadow: 0 6px 20px -8px rgba(10,31,68,0.08);
  }
  .method-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #f1f8fc;
    color: var(--navy);
    font-size: 0.85rem;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 8px;
    border: 1px solid #d4e8f5;
  }

  /* ── SECTION ── */
  .sec {
    padding: 72px 0;
  }
  .sec-tint {
    background: #f0f8f9;
  }
  .sec-white {
    background: #ffffff;
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

  /* ── TWO LUXURY BANK CARDS ── */
  .banks-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 32px;
    margin-bottom: 48px;
  }
  .luxury-bank-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 38px 34px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
  }
  .luxury-bank-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }
  .luxury-bank-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
  }
  .bank-domestic::before {
    background: linear-gradient(90deg, #008C8C, #38bdf8);
  }
  .bank-international::before {
    background: linear-gradient(90deg, #0A1F44, #C8A96B);
  }
  .bank-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 50px;
    margin-bottom: 14px;
  }
  .bank-domestic .bank-badge {
    background: var(--teal-light);
    color: var(--teal-dark);
  }
  .bank-international .bank-badge {
    background: #fef3c7;
    color: #92400e;
  }
  .bank-heading {
    font-size: 1.65rem;
    color: var(--navy);
    font-weight: 700;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bank-heading-logo {
    font-size: 1.1rem;
    color: #64748b;
    font-weight: 500;
  }

  .field-row {
    margin-bottom: 16px;
    padding-bottom: 14px;
    border-bottom: 1px solid #f1f5f9;
  }
  .field-row:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .field-label {
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #64748b;
    margin-bottom: 4px;
    display: block;
  }
  .field-val-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .field-val {
    font-size: 1.08rem;
    font-weight: 600;
    color: var(--navy);
  }
  .field-val.code {
    font-family: monospace;
    font-size: 1.25rem;
    color: var(--teal);
    letter-spacing: 0.05em;
  }
  .copy-btn {
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    color: #334155;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .copy-btn:hover {
    background: var(--teal);
    color: #ffffff;
    border-color: var(--teal);
  }

  /* ── 4-STEP TIMELINE ── */
  .timeline-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin: 36px 0;
  }
  .timeline-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 26px;
    border: 1px solid #ddecfa;
    box-shadow: 0 8px 24px -10px rgba(10,31,68,0.06);
    position: relative;
  }
  .step-bubble {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal), #0a4a6e);
    color: #ffffff;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 14px;
  }
  .timeline-card h4 {
    font-size: 1.1rem;
    color: var(--navy);
    margin-bottom: 8px;
  }
  .timeline-card p {
    font-size: 0.9rem;
    color: #4b6382;
    margin: 0;
    line-height: 1.6;
  }

  /* ── POSTAL DISPATCH CARD ── */
  .postal-box {
    background: linear-gradient(135deg, #0F1D3D 0%, #15325b 100%);
    color: #ffffff;
    border-radius: 20px;
    padding: 44px;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 36px;
    align-items: center;
    box-shadow: var(--shadow);
    margin: 48px 0;
  }
  .postal-box h3 {
    color: #38bdf8;
    font-size: 1.55rem;
    margin-bottom: 12px;
  }
  .postal-box p {
    color: #cbd5e1;
    font-size: 0.98rem;
    margin-bottom: 8px;
  }
  .postal-actions {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 14px;
    padding: 24px;
    text-align: center;
  }
  .postal-actions p {
    color: #e2e8f0;
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
  .btn-wa-gold {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #25D366;
    color: #06351a;
    font-weight: 700;
    padding: 12px 24px;
    border-radius: 999px;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease;
  }
  .btn-wa-gold:hover {
    background: #1eb956;
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    .postal-box {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 640px) {
    .methods-bar {
      flex-direction: column;
    }
  }
`;

export default function HowToPayFeesPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="pay-fees-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO BANNER ── */}
      <section className="pay-hero">
        <div className="wrap">
          <div className="pay-hero-content">
            <h1>How to <span>Pay Fees</span> &amp; Medication Charges</h1>
            <p className="hero-sub">
              Secure domestic banking via HDFC Bank and verified international telegraphic transfers via HSBC Bank SWIFT. We accept Credit Cards, Debit Cards, Net Banking, and Western Union.
            </p>

            <div className="methods-bar">
              <span className="method-chip">🏦 HDFC Bank Ltd (India)</span>
              <span className="method-chip">🌐 HSBC Bank SWIFT (Global)</span>
              <span className="method-chip">💳 Credit / Debit Cards</span>
              <span className="method-chip">⚡ Instant UPI / Net Banking</span>
              <span className="method-chip">📜 Demand Draft / Cheque</span>
              <span className="method-chip">🌍 Western Union Transfer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: VERIFIED BANK ACCOUNTS ── */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow">Bank Account Particulars</span>
            <h2 className="sec-title">Official Remittance Accounts</h2>
            <p className="sec-desc">
              Please use the official accounts below for consultation fees and international medicine parcel dispatches:
            </p>
          </div>

          <div className="banks-container">
            {/* Bank Card 1: Domestic Patients (HDFC) */}
            <div className="luxury-bank-card bank-domestic">
              <span className="bank-badge">For Patients in India (INR)</span>
              <div className="bank-heading">
                <span>HDFC Bank Ltd</span>
                <span className="bank-heading-logo">National Transfer</span>
              </div>

              <div className="field-row">
                <span className="field-label">Account Holder Name</span>
                <div className="field-val-wrap">
                  <span className="field-val">KETANKUMAR PATEL</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('KETANKUMAR PATEL', 'hdfc-name')}
                  >
                    {copiedKey === 'hdfc-name' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="field-row">
                <span className="field-label">Savings Account Number</span>
                <div className="field-val-wrap">
                  <span className="field-val code">00061300052760</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('00061300052760', 'hdfc-acc')}
                  >
                    {copiedKey === 'hdfc-acc' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="field-row">
                <span className="field-label">IFSC / RTGS / NEFT Code</span>
                <div className="field-val-wrap">
                  <span className="field-val code">HDFC0000006</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('HDFC0000006', 'hdfc-ifsc')}
                  >
                    {copiedKey === 'hdfc-ifsc' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="field-row">
                <span className="field-label">Bank Branch Address</span>
                <span className="field-val" style={{ fontSize: '0.94rem' }}>
                  HDFC Bank House, Near Mithakali Six Roads, Ahmedabad – 380009, Gujarat, INDIA
                </span>
              </div>

              <div className="field-row">
                <span className="field-label">Branch Telephones</span>
                <span className="field-val" style={{ fontSize: '0.94rem' }}>
                  Phone: +91-79-26563737 | Fax: +91-79-26563464
                </span>
              </div>
            </div>

            {/* Bank Card 2: International Patients (HSBC) */}
            <div className="luxury-bank-card bank-international">
              <span className="bank-badge">International Patients (Global / SWIFT)</span>
              <div className="bank-heading">
                <span>HSBC Bank</span>
                <span className="bank-heading-logo">Global SWIFT Wire</span>
              </div>

              <div className="field-row">
                <span className="field-label">Account Holder Name</span>
                <div className="field-val-wrap">
                  <span className="field-val">DR KETAN B PATEL</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('DR KETAN B PATEL', 'hsbc-name')}
                  >
                    {copiedKey === 'hsbc-name' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="field-row">
                <span className="field-label">Account Number</span>
                <div className="field-val-wrap">
                  <span className="field-val code">101 183952 006</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('101 183952 006', 'hsbc-acc')}
                  >
                    {copiedKey === 'hsbc-acc' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="field-row">
                <span className="field-label">SWIFT Code</span>
                <div className="field-val-wrap">
                  <span className="field-val code">HSBCINBB</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('HSBCINBB', 'hsbc-swift')}
                  >
                    {copiedKey === 'hsbc-swift' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="field-row">
                <span className="field-label">NEFT / Branch Code</span>
                <div className="field-val-wrap">
                  <span className="field-val code">HSBC0380002</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('HSBC0380002', 'hsbc-neft')}
                  >
                    {copiedKey === 'hsbc-neft' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="field-row">
                <span className="field-label">Branch Address</span>
                <span className="field-val" style={{ fontSize: '0.94rem' }}>
                  HSBC Bank, Mardia Plaza, C.G. Road, Ahmedabad – 380006, Gujarat, INDIA
                </span>
              </div>
            </div>
          </div>

          {/* ── 4-STEP PROCESS ── */}
          <div className="sec-head" style={{ marginTop: '30px', marginBottom: '20px' }}>
            <span className="sec-eyebrow">Clearance &amp; Dispatch Flow</span>
            <h3 className="sec-title" style={{ fontSize: '1.75rem' }}>4 Simple Steps to Confirm Medication</h3>
          </div>

          <div className="timeline-grid">
            <div className="timeline-card">
              <div className="step-bubble">01</div>
              <h4>Transfer Fees</h4>
              <p>Transfer the consultation fee or course amount using Net Banking, UPI, SWIFT wire, or Western Union.</p>
            </div>

            <div className="timeline-card">
              <div className="step-bubble">02</div>
              <h4>Send Proof</h4>
              <p>Take a screenshot or note the UTR / SWIFT transaction number along with the patient’s full name.</p>
            </div>

            <div className="timeline-card">
              <div className="step-bubble">03</div>
              <h4>WhatsApp Confirmation</h4>
              <p>Send details to our clinic accounts desk at <strong>+91 98980 05354</strong> or <strong>+91 83201 31612</strong>.</p>
            </div>

            <div className="timeline-card">
              <div className="step-bubble">04</div>
              <h4>Express Dispatch</h4>
              <p>Your custom homeopathic medicines are prepared and dispatched via DHL, FedEx, or SpeedPost with tracking.</p>
            </div>
          </div>

          {/* ── POSTAL ADDRESS & CHEQUES ── */}
          <div className="postal-box">
            <div>
              <h3>Paying by Cheque or Demand Draft?</h3>
              <p>
                Bank drafts, Pay Orders, and Cheques must be drawn in favor of:
              </p>
              <p style={{ color: '#5fe3d0', fontSize: '1.15rem', fontWeight: 700, margin: '8px 0 14px' }}>
                &ldquo;DR KETAN B PATEL&rdquo; — Payable at Ahmedabad, INDIA
              </p>
              <p>
                <strong>Postal Address for Couriers &amp; Medical Reports:</strong><br />
                Dr. Ketan Patel<br />
                Speciality Homeopathic Clinic, A-206 Himalaya Arcade,<br />
                Opp. Vastrapur Lake, Nehru Park, Vastrapur, Ahmedabad – 380015, Gujarat, INDIA
              </p>
            </div>

            <div className="postal-actions">
              <p>Need instant invoice assistance or have payment questions?</p>
              <a
                href="https://wa.me/919898005354?text=Hello%20Doctor,%20I%20have%20a%20question%20regarding%20fee%20payment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-gold"
              >
                <span>WhatsApp Accounts Desk</span>
              </a>
              <div style={{ marginTop: '12px' }}>
                <Link href="/contact" style={{ color: '#38bdf8', fontSize: '0.85rem', textDecoration: 'underline' }}>
                  Or view clinic contact numbers &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
