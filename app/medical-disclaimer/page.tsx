import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Medical & Clinical Disclaimer | Speciality Homeopathy',
  description:
    'Essential medical, legal, and clinical disclaimer regarding supportive and complementary homeopathic care at Speciality Homeopathy. Guidance on continuing conventional treatments, diagnostic protocols, and emergency medical procedures.',
  keywords:
    'homeopathy medical disclaimer, complementary homeopathic care disclaimer, pediatric neurology disclaimer, autism supportive care terms, Dr Ketan Patel clinic disclaimer',
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

  .disclaimer-page-container {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f7fbfe;
    font-size: 16px;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .disclaimer-page-container h1,
  .disclaimer-page-container h2,
  .disclaimer-page-container h3,
  .disclaimer-page-container h4 {
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
  .disc-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b8e1f5 42%, #9ad0ec 100%);
    padding: 56px 0 70px;
    overflow: hidden;
  }
  .disc-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 88% 20%, rgba(0,140,140,0.18), transparent 45%),
      radial-gradient(circle at 10% 80%, rgba(200,169,107,0.16), transparent 45%);
    pointer-events: none;
  }

  .disc-hero-grid {
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

  .disc-hero h1 {
    font-size: clamp(2.2rem, 3.8vw, 3.2rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .disc-hero h1 em {
    font-style: normal;
    color: var(--teal);
  }

  .disc-hero-lead {
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
  .hero-caduceus-card {
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 24px 50px -15px rgba(10,31,68,0.18);
    backdrop-filter: blur(12px);
  }
  .caduceus-icon-wrap {
    width: 64px;
    height: 64px;
    border-radius: 18px;
    background: linear-gradient(135deg, #d97706, var(--navy));
    display: grid;
    place-items: center;
    color: #fff;
    margin-bottom: 20px;
    box-shadow: 0 10px 24px -6px rgba(217,119,6,0.4);
  }
  .caduceus-card-title {
    font-size: 1.25rem;
    color: var(--navy);
    margin-bottom: 8px;
    font-weight: 700;
  }
  .caduceus-card-sub {
    font-size: 0.88rem;
    color: #555;
    margin-bottom: 20px;
  }
  .caduceus-stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    border-top: 1px solid var(--line);
    padding-top: 18px;
  }
  .caduceus-stat {
    background: #fffbeb;
    border: 1px solid #fef3c7;
    padding: 12px;
    border-radius: 12px;
    text-align: center;
  }
  .caduceus-stat .num {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    color: #b45309;
    display: block;
  }
  .caduceus-stat .lbl {
    font-size: 0.72rem;
    color: #78350f;
    font-weight: 600;
  }

  /* ── MAIN CONTENT SECTIONS ── */
  .disc-body {
    padding: 70px 0 90px;
  }
  .disc-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 36px;
    max-width: 980px;
    margin: 0 auto;
  }

  .disc-card {
    background: #fff;
    border: 1px solid rgba(10,31,68,0.08);
    border-radius: 24px;
    padding: 40px 42px;
    box-shadow: var(--shadow);
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
  }
  .disc-card:hover {
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
  .card-top-tag.alert-tag {
    color: #b45309;
    background: #fef3c7;
  }

  .disc-card h2 {
    font-size: clamp(1.4rem, 2.2vw, 1.8rem);
    color: var(--navy);
    margin-bottom: 18px;
    font-weight: 600;
  }

  .disc-card p {
    color: #4a5568;
    margin-bottom: 16px;
    font-size: 0.98rem;
  }
  .disc-card p:last-child {
    margin-bottom: 0;
  }

  .disc-alert-box {
    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    border-left: 4px solid #d97706;
    padding: 20px 24px;
    border-radius: 0 16px 16px 0;
    margin: 22px 0;
  }
  .disc-alert-box h4 {
    color: #92400e;
    font-size: 1rem;
    margin-bottom: 6px;
    font-weight: 700;
  }
  .disc-alert-box p {
    color: #78350f;
    font-size: 0.92rem;
    line-height: 1.6;
    margin: 0;
  }

  .disc-items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin-top: 22px;
  }
  .disc-item {
    background: #f8fafc;
    border: 1px solid #edf2f7;
    border-radius: 14px;
    padding: 20px;
  }
  .disc-item h4 {
    font-size: 0.95rem;
    color: var(--navy);
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .disc-item h4 svg {
    color: var(--teal);
    flex-shrink: 0;
  }
  .disc-item p {
    font-size: 0.85rem;
    color: #64748b;
    margin: 0;
    line-height: 1.6;
  }

  /* Emergency Callout Box */
  .emergency-box {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #fff;
    border-radius: 24px;
    padding: 44px;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 24px 60px -15px rgba(15,23,42,0.4);
  }
  .emergency-box h2 {
    color: #f87171;
    font-size: 1.8rem;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .emergency-box p {
    color: rgba(255,255,255,0.85);
    max-width: 680px;
    margin-bottom: 24px;
    font-size: 0.98rem;
  }
  .emergency-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }
  .em-contact-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 14px;
    padding: 16px 20px;
  }
  .em-contact-card .region {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #cbd5e1;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .em-contact-card .number {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 700;
  }

  @media (max-width: 980px) {
    .disc-hero-grid { grid-template-columns: 1fr; }
    .hero-caduceus-card { max-width: 480px; margin: 0 auto; }
    .disc-card { padding: 30px 24px; }
  }
`;

export default function MedicalDisclaimerPage() {
  return (
    <main className="disclaimer-page-container">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* LUXURY HERO */}
      <section className="disc-hero">
        <div className="wrap">
          <div className="disc-hero-grid">
            <div>
              <h1>
                Medical &amp; <em>Clinical Disclaimer</em>
              </h1>
              <p className="disc-hero-lead">
                Speciality Homeopathy provides individualised, supportive, and complementary constitutional care.
                Please read these essential clinical guidelines regarding our scope of practice, allopathic medications, and medical emergency protocols.
              </p>
              <div className="hero-trust-chips">
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Supportive &amp; Complementary Care
                </div>
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Collaborative Medical Ethics
                </div>
                <div className="trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Non-Substitute for Allopathic Care
                </div>
              </div>
            </div>

            <div>
              <div className="hero-caduceus-card">
                <div className="caduceus-icon-wrap">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className="caduceus-card-title">Patient Safety Directives</h3>
                <p className="caduceus-card-sub">
                  Authored and ratified by Dr. Ketan Patel to uphold highest standards of medical transparency and patient welfare.
                </p>
                <div className="caduceus-stat-row">
                  <div className="caduceus-stat">
                    <span className="num">CRITICAL</span>
                    <span className="lbl">Never Discontinue Anticonvulsants</span>
                  </div>
                  <div className="caduceus-stat">
                    <span className="num">COLLABORATIVE</span>
                    <span className="lbl">Neurologist Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BODY SECTIONS */}
      <div className="disc-body">
        <div className="wrap">
          <div className="disc-grid">

            {/* CARD 1 */}
            <article className="disc-card">
              <span className="card-top-tag">Directive 1</span>
              <h2>Educational and Supportive Nature of Content</h2>
              <p>
                The information provided on this website—including condition overviews (Autism Spectrum, ADHD, PDD-NOS, Cerebral Palsy,
                CACNA1A gene mutation, Encephalopathy), case histories, clinical observations, and articles—is prepared strictly for
                educational and informational purposes for parents and caregivers.
              </p>
              <p>
                It is not intended as medical advice, diagnostic proof, or a guarantee of treatment outcome for any specific individual.
                Healthcare decisions should always be made in direct consultation with a qualified medical specialist or licensed pediatrician.
              </p>
            </article>

            {/* CARD 2 - CRITICAL WARNING */}
            <article className="disc-card">
              <span className="card-top-tag alert-tag">Directive 2 — Critical Warning</span>
              <h2>Strict Rules Regarding Conventional / Allopathic Medications</h2>
              <p>
                Speciality Homeopathy firmly emphasizes that homeopathic remedies operate at a subtle, energetic, and regulatory level
                and are intended to complement—not immediately replace—critical allopathic pharmaceuticals.
              </p>

              <div className="disc-alert-box">
                <h4>Mandatory Warning: Antiepileptics &amp; Lifesaving Medications</h4>
                <p>
                  <strong>NEVER abruptly stop, alter the dosage, or delay</strong> any prescription pharmaceuticals—particularly antiepileptic
                  drugs (such as Sodium Valproate, Levetiracetam, Clobazam, Clonazepam), psychiatric mood stabilizers, hormone therapies, or cardiac
                  medications—without the explicit instruction and direct clinical supervision of your child&apos;s prescribing neurologist or pediatrician.
                </p>
              </div>

              <p>
                Abrupt cessation of anticonvulsants can precipitate severe breakthrough seizures or life-threatening status epilepticus.
                Any eventual tapering of allopathic medication must only occur through collaborative clinical consensus between your medical doctor
                and our clinic as clinical stability permits over extended treatment phases.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="disc-card">
              <span className="card-top-tag">Directive 3</span>
              <h2>No Universal Guarantee of Clinical Cure</h2>
              <p>
                In Classical Hahnemannian Homeopathy, each human being possesses a unique genetic, constitutional, and dynamic vitality.
                Therefore, outcomes and speeds of progress vary markedly between individuals:
              </p>

              <div className="disc-items-grid">
                <div className="disc-item">
                  <h4>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Individualised Response
                  </h4>
                  <p>A remedy that produces profound speech emergence in one child may act differently in another based on their underlying totality of symptoms.</p>
                </div>

                <div className="disc-item">
                  <h4>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Chronic Conditions
                  </h4>
                  <p>Severe neurodevelopmental and genetic microdeletions represent complex multi-system challenges requiring persistent multi-year milestone support.</p>
                </div>

                <div className="disc-item">
                  <h4>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Holistic Synergy
                  </h4>
                  <p>Optimal developmental outcomes are best achieved when homeopathy is paired with sensory integration (SI), speech therapy, and structured behavior interventions.</p>
                </div>
              </div>
            </article>

            {/* CARD 4 */}
            <article className="disc-card">
              <span className="card-top-tag">Directive 4</span>
              <h2>Diagnostic Scope &amp; Medical Investigations</h2>
              <p>
                Speciality Homeopathy conducts comprehensive homeopathic case evaluations, symptom repertorization, and developmental milestone
                tracking. However:
              </p>
              <ul style={{ paddingLeft: '22px', color: '#4a5568', lineHeight: '1.8' }}>
                <li>Our clinic does not replace formal pediatric neurological diagnostics, neuro-imaging (MRI / CT), genetic exome sequencing, or metabolic screening.</li>
                <li>Parents are actively encouraged to share all existing clinical reports, blood panels, and specialist assessments during their case intake to assist in thorough clinical evaluation.</li>
                <li>If our clinical panel observes acute red flags (such as new focal neurological deficits, acute intracranial pressure signs, or progressive metabolic regression), we immediately refer families to tertiary pediatric emergency centres.</li>
              </ul>
            </article>

            {/* EMERGENCY PROTOCOL BOX */}
            <article className="emergency-box">
              <h2>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Emergency Medical Response Protocols
              </h2>
              <p>
                Homeopathy is an outpatient, non-emergency complementary system. In the event of an acute medical emergency
                (such as prolonged seizures &gt; 5 minutes, acute respiratory difficulty, severe traumatic injury, anaphylaxis, or unconsciousness),
                <strong>do not wait for homeopathic consultations</strong>. Immediately contact your local emergency response service:
              </p>

              <div className="emergency-grid">
                <div className="em-contact-card">
                  <div className="region">India National Ambulance</div>
                  <div className="number">Dial 108 / 112</div>
                </div>
                <div className="em-contact-card">
                  <div className="region">United States &amp; Canada</div>
                  <div className="number">Dial 911</div>
                </div>
                <div className="em-contact-card">
                  <div className="region">United Kingdom</div>
                  <div className="number">Dial 999 / 111</div>
                </div>
                <div className="em-contact-card">
                  <div className="region">European Union</div>
                  <div className="number">Dial 112</div>
                </div>
              </div>
            </article>

            {/* CARD 5 */}
            <article className="disc-card">
              <span className="card-top-tag">Directive 5</span>
              <h2>International &amp; Tele-Health Consultations</h2>
              <p>
                Speciality Homeopathy conducts remote video tele-health triage (via Zoom, FaceTime, and WhatsApp) for overseas families
                in the USA, UK, Europe, UAE, Singapore, and Australia.
              </p>
              <p>
                Patients engaging through digital tele-health acknowledge that remote consultations are complementary wellness reviews
                operating under Indian Ayush clinical regulations and do not constitute in-person emergency medical care within foreign hospital jurisdictions.
              </p>
            </article>

          </div>
        </div>
      </div>
    </main>
  );
}
