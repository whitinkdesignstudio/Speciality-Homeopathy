import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Genetic Test & Whole Exome Sequencing for Autism Child',
  description:
    'Understand genetic test for autism, whole exome sequencing, and syndromic ASD traits. Supportive homeopathy guidance from specialists in Gujarat.',
  keywords:
    'whole exome sequencing for autism child, genetic test for autism, homeopathy autism, autism specialist in Gujarat, syndromic autism',
};

const pageStyles = `
  :root {
    --navy: #14324f;
    --navy-mid: #1e4a73;
    --sky: #eaf4fb;
    --sky-deep: #cfe8f7;
    --teal: #2f9e8f;
    --ink: #33475b;
    --white: #ffffff;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
    color: var(--ink);
    background: #ffffff;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .sh-wrap {
    background: var(--sky);
    padding: 72px 6vw;
    overflow: hidden;
    position: relative;
  }
  .sh-wrap.alt { background: var(--white); }

  .sh-grid {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 56px;
    flex-wrap: wrap;
  }
  .sh-grid.reverse { flex-direction: row-reverse; }

  .sh-visual, .sh-content {
    flex: 1 1 420px;
    min-width: 300px;
  }

  .sh-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .sh-blob {
    position: relative;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sh-blob::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(145deg, var(--sky-deep), var(--navy-mid) 140%);
    border-radius: 42% 58% 63% 37% / 45% 40% 60% 55%;
    opacity: 0.9;
    box-shadow: 0 16px 40px -18px rgba(20,50,79,0.35);
  }

  .sh-blob svg {
    position: relative;
    width: 52%;
    height: 52%;
    z-index: 2;
  }

  .sh-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--white);
    border: 1px solid var(--sky-deep);
    color: var(--navy-mid);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 8px 18px;
    border-radius: 999px;
    margin-bottom: 22px;
  }
  .sh-wrap.alt .sh-eyebrow {
    background: var(--sky);
  }
  .sh-eyebrow::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--teal);
    display: inline-block;
  }

  .sh-content h2 {
    font-family: 'Poppins', sans-serif;
    color: var(--navy);
    font-size: clamp(28px, 3.4vw, 40px);
    line-height: 1.15;
    font-weight: 700;
    margin: 0 0 18px;
  }

  .sh-content p.sh-desc {
    color: var(--ink);
    font-size: 16.5px;
    line-height: 1.7;
    margin: 0 0 26px;
    max-width: 560px;
  }

  .sh-points {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin: 0 0 28px;
    padding: 0;
    list-style: none;
  }

  .sh-points li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14.5px;
    color: var(--navy);
    font-weight: 500;
    background: rgba(255,255,255,0.7);
    border: 1px solid var(--sky-deep);
    border-radius: 12px;
    padding: 12px 14px;
    line-height: 1.45;
  }
  .sh-wrap.alt .sh-points li {
    background: var(--sky);
  }

  .sh-points li svg {
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 1px;
    color: var(--teal);
  }

  .sh-note {
    font-size: 13.5px;
    color: #6b7f92;
    font-style: italic;
    margin: 0;
  }

  @media (max-width: 768px) {
    .sh-wrap { padding: 48px 5vw; }
    .sh-points { grid-template-columns: 1fr; gap: 10px; }
    .sh-grid, .sh-grid.reverse { flex-direction: column; gap: 36px; }
    .sh-visual { width: 100%; }
    .sh-blob { max-width: 260px; }
  }
`;

export default function AutismHistoryPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* SECTION 1: Profound Autism */}
      <section className="sh-wrap">
        <div className="sh-grid">
          <div className="sh-visual">
            <div className="sh-blob">
              <svg viewBox="0 0 64 64" fill="none" stroke="#14324f" strokeWidth="2.6" strokeLinejoin="round">
                <path d="M24 12h10v4a4 4 0 1 0 0 8v4H24v-4a4 4 0 1 1 0-8v-4z" fill="#2f9e8f" opacity="0.85" />
                <path d="M12 24h4a4 4 0 1 1 8 0v10H12V24z" fill="#eaf4fb" />
                <path d="M38 24h12v12h-4a4 4 0 1 0 0 8h4v8H38v-8a4 4 0 1 1 0-8v-12z" fill="#cfe8f7" />
                <path d="M12 34h12v18H16a4 4 0 1 1 0-8v-4a4 4 0 0 1 -4-4v-2z" fill="#14324f" opacity="0.9" />
              </svg>
            </div>
          </div>
          <div className="sh-content">
            <span className="sh-eyebrow">Profound Autism Support</span>
            <h2>Profound Autism &amp; Supportive Homeopathy</h2>
            <p className="sh-desc">
              Profound autism describes children needing substantial daily living support. In homeopathy autism care, individualized constitutional remedies are selected to encourage steadier regulation, sensory calmness, and long-term autism child developmental progress.
            </p>
            <ul className="sh-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Minimal or no functional speech</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Needs 24/7 support for daily living</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Often alongside intellectual disability</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Responds best to early, individualised care</span>
              </li>
            </ul>
            <p className="sh-note">Supportive wellbeing — not a cure, and always alongside your child's medical team.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Syndromic Autism */}
      <section className="sh-wrap alt">
        <div className="sh-grid reverse">
          <div className="sh-visual">
            <div className="sh-blob">
              <svg viewBox="0 0 64 64" fill="none" stroke="#14324f" strokeWidth="2.4" strokeLinecap="round">
                <path d="M18 8c0 10 28 10 28 20s-28 10-28 20" stroke="#2f9e8f" />
                <path d="M46 8c0 10-28 10-28 20s28 10 28 20" stroke="#14324f" />
                <line x1="20.5" y1="14" x2="43.5" y2="14" stroke="#14324f" />
                <line x1="18" y1="24" x2="46" y2="24" stroke="#14324f" />
                <line x1="18" y1="34" x2="46" y2="34" stroke="#14324f" />
                <line x1="20.5" y1="44" x2="43.5" y2="44" stroke="#14324f" />
              </svg>
            </div>
          </div>
          <div className="sh-content">
            <span className="sh-eyebrow">Syndromic Autism</span>
            <h2>Syndromic Autism</h2>
            <p className="sh-desc">
              Syndromic autism is diagnosed when autism traits appear alongside a known genetic syndrome — such as Fragile X syndrome, Rett syndrome, or Tuberous Sclerosis Complex. Identifying the syndrome behind the autism helps shape a more targeted care plan.
            </p>
            <ul className="sh-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Linked to an identified genetic syndrome</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>May include distinct physical features</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Can involve seizures or developmental delay</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Genetic testing helps guide the plan</span>
              </li>
            </ul>
            <p className="sh-note">Supportive wellbeing — not a cure, and always alongside your child's medical team.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Genetic, Metabolic & Mitochondrial Autism */}
      <section className="sh-wrap">
        <div className="sh-grid">
          <div className="sh-visual">
            <div className="sh-blob">
              <svg viewBox="0 0 64 64" fill="none" stroke="#14324f" strokeWidth="2.4">
                <ellipse cx="32" cy="32" rx="22" ry="14" fill="#eaf4fb" />
                <path d="M14 32c4-8 10-10 8-2s-6 6-2 10 12-2 16-8 10-6 12 2-4 12-12 12-18-6-22-14z" fill="#2f9e8f" opacity="0.55" stroke="none" />
                <path d="M32 22v20M24 27v10M40 27v10" stroke="#14324f" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="sh-content">
            <span className="sh-eyebrow">Diagnostic Workup &amp; Genetics</span>
            <h2>Genetic, Metabolic &amp; Mitochondrial Autism</h2>
            <p className="sh-desc">
              In some children, autism traits are linked to an underlying genetic mutation, an inborn error of metabolism, or mitochondrial dysfunction. Conducting a genetic test for autism or whole exome sequencing for an autism child helps identify known variants, guiding our autism specialist in Gujarat to tailor supportive, constitutional care.
            </p>
            <ul className="sh-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>May involve an inborn error of metabolism</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Mitochondrial dysfunction affects cell energy</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Can present with developmental regression</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Benefits from metabolic &amp; genetic work-up</span>
              </li>
            </ul>
            <p className="sh-note">Supportive wellbeing — not a cure, and always alongside your child's medical team.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Cerebral Palsy */}
      <section className="sh-wrap alt">
        <div className="sh-grid reverse">
          <div className="sh-visual">
            <div className="sh-blob">
              <svg viewBox="0 0 64 64" fill="none" stroke="#14324f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="34" cy="12" r="5" fill="#2f9e8f" stroke="none" />
                <path d="M34 18l-4 12-8 6M34 18l6 10-2 14M30 30l10 2M22 36l-4 10M40 42l6 8" />
              </svg>
            </div>
          </div>
          <div className="sh-content">
            <span className="sh-eyebrow">Cerebral Palsy</span>
            <h2>Cerebral Palsy</h2>
            <p className="sh-desc">
              Cerebral palsy is a group of lifelong movement and posture disorders caused by abnormal development of, or injury to, the developing brain — usually before or around birth. It affects muscle tone, coordination, and motor control, ranging from mild to severe.
            </p>
            <ul className="sh-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Affects movement, posture &amp; muscle tone</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Caused by early brain development injury</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Severity varies widely child to child</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Consistent therapy supports function over time</span>
              </li>
            </ul>
            <p className="sh-note">Supportive wellbeing — not a cure, and always alongside your child's medical team.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Periventricular Leukomalacia (PVL) */}
      <section className="sh-wrap">
        <div className="sh-grid">
          <div className="sh-visual">
            <div className="sh-blob">
              <svg viewBox="0 0 64 64" fill="none" stroke="#14324f" strokeWidth="2.4" strokeLinecap="round">
                <circle cx="32" cy="26" r="14" fill="#eaf4fb" />
                <path d="M22 26c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />
                <path d="M12 46c6-4 12-4 20 0s14 4 20 0" stroke="#2f9e8f" />
              </svg>
            </div>
          </div>
          <div className="sh-content">
            <span className="sh-eyebrow">Periventricular Leukomalacia (PVL)</span>
            <h2>Periventricular Leukomalacia (PVL)</h2>
            <p className="sh-desc">
              PVL is a form of brain injury involving softening and damage to the white matter surrounding the brain's ventricles. It is most common in premature infants and can affect motor development, coordination, and, in some cases, vision and learning.
            </p>
            <ul className="sh-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Most common in premature infants</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Damages white matter near the ventricles</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Can affect motor &amp; coordination skills</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Early intervention supports development</span>
              </li>
            </ul>
            <p className="sh-note">Supportive wellbeing — not a cure, and always alongside your child's medical team.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Hypoxic Ischemic Encephalopathy (HIE) */}
      <section className="sh-wrap alt">
        <div className="sh-grid reverse">
          <div className="sh-visual">
            <div className="sh-blob">
              <svg viewBox="0 0 64 64" fill="none" stroke="#14324f" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 34h10l5-14 8 26 6-20 4 8h15" />
                <circle cx="32" cy="34" r="24" stroke="#2f9e8f" opacity="0.4" />
              </svg>
            </div>
          </div>
          <div className="sh-content">
            <span className="sh-eyebrow">HIE — Hypoxic Ischemic Encephalopathy</span>
            <h2>HIE — Hypoxic Ischemic Encephalopathy</h2>
            <p className="sh-desc">
              HIE is a brain injury that occurs when a baby's brain does not receive enough oxygen and blood flow, most often around the time of birth. Depending on severity, it can affect muscle tone, feeding, movement, and long-term development.
            </p>
            <ul className="sh-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Caused by reduced oxygen or blood flow at birth</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Severity ranges from mild to severe</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Can affect tone, feeding &amp; movement</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Close monitoring helps guide the care plan</span>
              </li>
            </ul>
            <p className="sh-note">Supportive wellbeing — not a cure, and always alongside your child's medical team.</p>
          </div>
        </div>
      </section>
    </>
  );
}
