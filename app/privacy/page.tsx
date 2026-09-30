import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy & Patient Data Protection Policy | Speciality Homeopathy',
  description:
    'Comprehensive patient privacy policy and data governance protocols at Speciality Homeopathy. Learn how child developmental records, medical case histories, and consultation details are encrypted and protected.',
  keywords:
    'homeopathy patient privacy, medical data protection policy, confidential autism case records, pediatric clinical privacy, Speciality Homeopathy data security',
};

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
    --shadow: 0 20px 50px -15px rgba(10,31,68,.12);
    --shadow-hover: 0 28px 60px -15px rgba(0,140,140,.20);
    --maxw: 1180px;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  .privacy-page-container {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f7fbfe;
    font-size: 16px;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .privacy-page-container h1,
  .privacy-page-container h2,
  .privacy-page-container h3,
  .privacy-page-container h4 {
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
  .priv-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b8e1f5 42%, #9ad0ec 100%);
    padding: 56px 0 70px;
    overflow: hidden;
  }
  .priv-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 88% 20%, rgba(0,140,140,0.18), transparent 45%),
      radial-gradient(circle at 10% 80%, rgba(200,169,107,0.16), transparent 45%);
    pointer-events: none;
  }

  .priv-hero-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    align-items: center;
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
  .hero-pill-badge svg {
    color: var(--teal);
  }

  .priv-hero h1 {
    font-size: clamp(2.2rem, 3.8vw, 3.2rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .priv-hero h1 em {
    font-style: normal;
    color: var(--teal);
    position: relative;
  }

  .priv-hero-lead {
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

  /* Right floating card visual */
  .hero-shield-card {
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 24px 50px -15px rgba(10,31,68,0.18);
    backdrop-filter: blur(12px);
    position: relative;
  }
  .shield-icon-wrap {
    width: 64px;
    height: 64px;
    border-radius: 18px;
    background: linear-gradient(135deg, var(--teal), var(--navy));
    display: grid;
    place-items: center;
    color: #fff;
    margin-bottom: 20px;
    box-shadow: 0 10px 24px -6px rgba(0,140,140,0.4);
  }
  .shield-card-title {
    font-size: 1.25rem;
    color: var(--navy);
    margin-bottom: 8px;
    font-weight: 700;
  }
  .shield-card-sub {
    font-size: 0.88rem;
    color: #555;
    margin-bottom: 20px;
  }
  .shield-stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    border-top: 1px solid var(--line);
    padding-top: 18px;
  }
  .shield-stat {
    background: #f0f7fb;
    padding: 12px;
    border-radius: 12px;
    text-align: center;
  }
  .shield-stat .num {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--teal);
    display: block;
  }
  .shield-stat .lbl {
    font-size: 0.72rem;
    color: #666;
    font-weight: 600;
  }

  /* ── QUICK NAV JUMPLINKS ── */
  .quick-nav-bar {
    background: #fff;
    border-bottom: 1px solid var(--line);
    padding: 16px 0;
    position: sticky;
    top: 76px;
    z-index: 20;
    box-shadow: 0 8px 24px rgba(10,31,68,0.04);
  }
  .quick-nav-list {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 4px;
    scrollbar-width: none;
  }
  .quick-nav-list::-webkit-scrollbar { display: none; }
  .qnav-btn {
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--navy);
    background: #f1f6fa;
    border: 1px solid rgba(10,31,68,0.08);
    padding: 6px 14px;
    border-radius: 999px;
    text-decoration: none;
    transition: all 0.25s var(--ease);
  }
  .qnav-btn:hover {
    background: var(--teal);
    color: #fff;
    border-color: var(--teal);
  }

  /* ── MAIN CONTENT SECTIONS ── */
  .policy-body {
    padding: 70px 0 90px;
  }

  .policy-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 36px;
    max-width: 980px;
    margin: 0 auto;
  }

  .policy-card {
    background: #fff;
    border: 1px solid rgba(10,31,68,0.08);
    border-radius: 24px;
    padding: 40px 42px;
    box-shadow: var(--shadow);
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
    position: relative;
  }
  .policy-card:hover {
    box-shadow: var(--shadow-hover);
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
    margin-bottom: 14px;
  }

  .policy-card h2 {
    font-size: clamp(1.4rem, 2.2vw, 1.8rem);
    color: var(--navy);
    margin-bottom: 18px;
    font-weight: 600;
  }

  .policy-card p {
    color: #4a5568;
    margin-bottom: 16px;
    font-size: 0.98rem;
  }
  .policy-card p:last-child {
    margin-bottom: 0;
  }

  .policy-highlight-box {
    background: linear-gradient(135deg, #f0f9fa 0%, #e6f5f7 100%);
    border-left: 4px solid var(--teal);
    padding: 20px 24px;
    border-radius: 0 16px 16px 0;
    margin: 22px 0;
  }
  .policy-highlight-box p {
    color: var(--navy);
    font-weight: 600;
    font-size: 0.92rem;
    margin: 0;
  }

  .policy-items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin-top: 22px;
  }
  .policy-item {
    background: #f8fafc;
    border: 1px solid #edf2f7;
    border-radius: 14px;
    padding: 18px 20px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .p-ico {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: var(--teal-light);
    color: var(--teal);
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }
  .policy-item h4 {
    font-size: 0.95rem;
    color: var(--navy);
    margin-bottom: 4px;
  }
  .policy-item p {
    font-size: 0.84rem;
    color: #64748b;
    margin: 0;
    line-height: 1.5;
  }

  /* Table styling */
  .table-responsive {
    overflow-x: auto;
    margin: 24px 0;
    border-radius: 14px;
    border: 1px solid var(--line);
  }
  .privacy-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 0.88rem;
  }
  .privacy-table th {
    background: var(--navy);
    color: #fff;
    padding: 14px 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.84rem;
    letter-spacing: 0.04em;
  }
  .privacy-table td {
    padding: 14px 18px;
    border-bottom: 1px solid var(--line);
    color: #444;
  }
  .privacy-table tr:nth-child(even) td {
    background: #fbfdff;
  }

  /* Grievance box */
  .grievance-box {
    background: linear-gradient(135deg, var(--navy) 0%, #152c59 100%);
    color: #fff;
    border-radius: 24px;
    padding: 44px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 24px 60px -15px rgba(15,29,61,0.35);
  }
  .grievance-box::before {
    content: "";
    position: absolute;
    top: -60px;
    right: -60px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,140,140,0.35), transparent 70%);
  }
  .grievance-box h2 {
    color: #fff;
    font-size: 1.8rem;
    margin-bottom: 14px;
  }
  .grievance-box p {
    color: rgba(255,255,255,0.85);
    max-width: 650px;
    margin-bottom: 28px;
  }
  .grievance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
  .grievance-item {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 16px;
    padding: 20px;
    backdrop-filter: blur(8px);
  }
  .grievance-item .lbl {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--gold);
    font-weight: 700;
    margin-bottom: 6px;
  }
  .grievance-item .val {
    font-size: 0.95rem;
    color: #fff;
    font-weight: 600;
  }
  .grievance-item a {
    color: #a7f3d0;
    text-decoration: none;
    transition: color 0.2s;
  }
  .grievance-item a:hover {
    color: #fff;
    text-decoration: underline;
  }

  @media (max-width: 980px) {
    .priv-hero-grid { grid-template-columns: 1fr; }
    .hero-shield-card { max-width: 480px; margin: 0 auto; }
    .policy-card { padding: 30px 24px; }
  }
`;

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page-container">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* LUXURY HERO */}
      <section className="priv-hero">
        <div className="wrap">
          <div className="priv-hero-grid">
            <div>
              <h1>
                Patient Privacy &amp; <em>Data Protection</em> Policy
              </h1>
              <p className="priv-hero-lead">
                At Speciality Homeopathy, protecting your family&apos;s personal health information, developmental reports,
                and clinical consultation records is an inviolable medical and ethical duty.
              </p>
              <div className="hero-trust-chips">
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  256-Bit SSL Encrypted
                </div>
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Zero Data Monetization
                </div>
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  Updated: March 2026
                </div>
              </div>
            </div>

            <div>
              <div className="hero-shield-card">
                <div className="shield-icon-wrap">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <h3 className="shield-card-title">Patient Data Custodianship</h3>
                <p className="shield-card-sub">
                  Overseen directly by Dr. Ketan Patel &amp; Clinic Quality Directorate across Ahmedabad Vastrapur HQ and all regional centres.
                </p>
                <div className="shield-stat-row">
                  <div className="shield-stat">
                    <span className="num">100%</span>
                    <span className="lbl">Confidential Case Files</span>
                  </div>
                  <div className="shield-stat">
                    <span className="num">0</span>
                    <span className="lbl">Third-Party Data Sharing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK JUMP BAR */}
      <div className="quick-nav-bar">
        <div className="wrap">
          <div className="quick-nav-list">
            <a href="#collection" className="qnav-btn">1. Information We Collect</a>
            <a href="#clinical-use" className="qnav-btn">2. How Data is Used</a>
            <a href="#pediatric-consent" className="qnav-btn">3. Pediatric Consent</a>
            <a href="#security" className="qnav-btn">4. Security Measures</a>
            <a href="#cookies" className="qnav-btn">5. Cookies &amp; Tracking</a>
            <a href="#rights" className="qnav-btn">6. Your Rights</a>
            <a href="#grievance" className="qnav-btn">7. Data Officer Contact</a>
          </div>
        </div>
      </div>

      {/* MAIN BODY SECTIONS */}
      <div className="policy-body">
        <div className="wrap">
          <div className="policy-grid">

            {/* CARD 1 */}
            <article id="collection" className="policy-card">
              <span className="card-top-tag">Section 1</span>
              <h2>Information We Collect From Families</h2>
              <p>
                To provide safe, comprehensive, and individualized constitutional homeopathic care, Speciality Homeopathy
                collects relevant personal and clinical information directly from patients or their lawful parents and guardians.
              </p>

              <div className="policy-items-grid">
                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h4>Identity &amp; Contact Details</h4>
                    <p>Parent/guardian full name, child&apos;s name, age, gender, postal address for courier dispatch, phone number, and email.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <h4>Clinical History &amp; Diagnostics</h4>
                    <p>Developmental assessments (CARS/ISAA), EEG records, MRI scans, genetic exome reports, speech evaluations, and doctor notes.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <h4>Homeopathic Symptom Profiling</h4>
                    <p>Physical generals, thermal preferences, sleep patterns, emotional disposition, sensory sensitivities, and food cravings.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h4>Transactional Payment Records</h4>
                    <p>NEFT/IMPS transaction IDs, bank transfer receipts, and invoice records. We never store credit/debit card PINs or passwords.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* CARD 2 */}
            <article id="clinical-use" className="policy-card">
              <span className="card-top-tag">Section 2</span>
              <h2>How Your Clinical Data Is Utilized</h2>
              <p>
                Patient data is utilized solely for clinical repertorization, medicine dispensing, patient safety, and coordination
                with your child&apos;s multi-disciplinary care circle:
              </p>

              <div className="table-responsive">
                <table className="privacy-table">
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Purpose of Processing</th>
                      <th>Access Authorized</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Case Notes &amp; Symptom Totality</strong></td>
                      <td>Determining the individualized constitutional simillimum &amp; potencies</td>
                      <td>Dr. Ketan Patel &amp; Clinic Consulting Physicians</td>
                    </tr>
                    <tr>
                      <td><strong>Courier Shipping Address</strong></td>
                      <td>Dispatching prescribed homeopathic remedies via DTDC, Speed Post, or DHL</td>
                      <td>Designated Clinic Pharmacy &amp; Dispatch Coordinator</td>
                    </tr>
                    <tr>
                      <td><strong>WhatsApp / Email Follow-Ups</strong></td>
                      <td>Tracking milestone improvements, aggression changes, sleep regulation</td>
                      <td>Senior Patient Coordinator &amp; Case Supervisor</td>
                    </tr>
                    <tr>
                      <td><strong>Payment Reference Slips</strong></td>
                      <td>Verifying bank deposits (HDFC/HSBC) for tax receipts and accounts clearance</td>
                      <td>Clinic Accounts Officer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="policy-highlight-box">
                <p>
                  Strict Zero Commercial Disclosure Principle: We do not sell, license, rent, trade, or monetize patient contact information
                  or clinical data to pharmaceutical corporations, marketing syndicates, or any external third parties whatsoever.
                </p>
              </div>
            </article>

            {/* CARD 3 */}
            <article id="pediatric-consent" className="policy-card">
              <span className="card-top-tag">Section 3</span>
              <h2>Pediatric Minor Protection &amp; Parental Consent</h2>
              <p>
                Because a large proportion of our patients are infants, children, and young adolescents presenting with
                autism spectrum disorder, developmental delay, cerebral palsy, and pediatric neurology conditions:
              </p>
              <ul style={{ paddingLeft: '22px', color: '#4a5568', lineHeight: '1.8' }}>
                <li>No consultation, medical evaluation, or remedy dispatch is ever undertaken without the express, written or verified consent of a legal parent or appointed court guardian.</li>
                <li>Any video recordings, behavior clips, or diagnostic documents submitted by parents for tele-triage are stored on isolated, encrypted storage.</li>
                <li>Parents possess the unconditional right to review, update, or request the secure destruction of digital video observations once clinical assessment is completed.</li>
              </ul>
            </article>

            {/* CARD 4 */}
            <article id="security" className="policy-card">
              <span className="card-top-tag">Section 4</span>
              <h2>Physical &amp; Cyber Security Safeguards</h2>
              <p>
                Speciality Homeopathy enforces administrative, technical, and physical security measures to shield patient data from unauthorized access:
              </p>

              <div className="policy-items-grid">
                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h4>Encrypted Data in Transit</h4>
                    <p>All website transmissions, appointment bookings, and portal queries are secured with TLS 1.3 / 256-bit encryption.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Role-Based Access Control</h4>
                    <p>Only licensed consulting physicians hold administrative clearance to inspect comprehensive patient diagnostic dossiers.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <h4>Physical Archive Security</h4>
                    <p>Original case papers at our Vastrapur Ahmedabad HQ are held in locked medical record rooms with electronic badge access.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                    </svg>
                  </div>
                  <div>
                    <h4>Redundant Backups</h4>
                    <p>Continuous encrypted off-site backups ensure your child&apos;s treatment continuity across multi-year developmental milestones.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* CARD 5 */}
            <article id="cookies" className="policy-card">
              <span className="card-top-tag">Section 5</span>
              <h2>Cookie Policy &amp; Web Analytics</h2>
              <p>
                Our website utilizes standard, privacy-preserving HTTP cookies to ensure optimal navigation and site functionality:
              </p>
              <ul style={{ paddingLeft: '22px', color: '#4a5568', lineHeight: '1.8' }}>
                <li><strong>Strictly Necessary Cookies:</strong> Required to navigate between clinic tabs, preserve form input during multi-step registration, and maintain session security.</li>
                <li><strong>Performance &amp; Analytics Cookies:</strong> Aggregate, anonymized metrics (such as Google Analytics with IP anonymization enabled) to understand which medical resources and condition guides are most valuable to parents.</li>
                <li><strong>No Invasive Advertising Cookies:</strong> We do not deploy third-party retargeting cookies or pixel trackers that follow you around the internet after you leave our medical domain.</li>
              </ul>
            </article>

            {/* CARD 6 */}
            <article id="rights" className="policy-card">
              <span className="card-top-tag">Section 6</span>
              <h2>Your Rights Under Applicable Data Privacy Regulations</h2>
              <p>
                In compliance with the Digital Personal Data Protection Act (DPDP), Indian Medical Ethics guidelines, and international GDPR principles for tele-health patients:
              </p>
              <div className="policy-items-grid">
                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4>Right to Access &amp; Summary</h4>
                    <p>You may request a copy of your child&apos;s homeopathic case summary, prescribed remedies, and recorded milestones at any time.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Right to Correction</h4>
                    <p>You may update or rectify outdated telephone numbers, residential shipping addresses, or revised medical diagnoses.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </div>
                  <div>
                    <h4>Right to Erasure / Portability</h4>
                    <p>Subject to mandatory medical record retention laws, you may instruct us to permanently delete your digital communications.</p>
                  </div>
                </div>

                <div className="policy-item">
                  <div className="p-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h4>Withdrawal of Telehealth Consent</h4>
                    <p>You may transition from remote telehealth consultations to in-person consultations at any of our physical clinic centres.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* GRIEVANCE OFFICER BOX */}
            <article id="grievance" className="grievance-box">
              <span style={{ color: 'var(--gold)', textTransform: 'uppercase', fontSize: '0.74rem', letterSpacing: '0.14em', fontWeight: 700 }}>
                Regulatory Compliance
              </span>
              <h2>Data Protection Officer &amp; Grievance Redressal</h2>
              <p>
                If you have questions, privacy requests, or wish to exercise data rights regarding your child&apos;s confidential
                clinical records, please contact our designated Data Protection Officer:
              </p>

              <div className="grievance-grid">
                <div className="grievance-item">
                  <div className="lbl">Designated Authority</div>
                  <div className="val">Dr. Ketan Patel (Medical Director)</div>
                </div>
                <div className="grievance-item">
                  <div className="lbl">Headquarters Office</div>
                  <div className="val">A-205/206 Himalaya Arcade, Vastrapur, Ahmedabad 380054</div>
                </div>
                <div className="grievance-item">
                  <div className="lbl">Email Inquiries</div>
                  <div className="val">
                    <a href="mailto:info@specialityhomeopathy.com">info@specialityhomeopathy.com</a>
                  </div>
                </div>
                <div className="grievance-item">
                  <div className="lbl">Clinic Hotline</div>
                  <div className="val">
                    <a href="tel:+919898005354">+91 98980 05354</a> / <a href="tel:+917926763575">+91-79-26763575</a>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </main>
  );
}
