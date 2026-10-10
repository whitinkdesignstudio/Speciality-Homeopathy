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

  .tfa-page-wrap {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f0f8f9;
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .tfa-page-wrap h1,
  .tfa-page-wrap h2,
  .tfa-page-wrap h3,
  .tfa-page-wrap h4,
  .tfa-page-wrap h5 {
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
  .tfa-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b3def4 40%, #95cde8 100%);
    padding: 64px 0 74px;
    overflow: hidden;
  }
  .tfa-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 85% 15%, rgba(0,140,140,0.18), transparent 45%),
      radial-gradient(circle at 10% 80%, rgba(200,169,107,0.15), transparent 40%);
    pointer-events: none;
  }
  .tfa-hero-content {
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
  .tfa-hero h1 {
    font-size: clamp(2.2rem, 4.2vw, 3.4rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .tfa-hero h1 span {
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

  /* ── PROFILE CARD ── */
  .profile-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 40px;
    box-shadow: var(--shadow);
    border: 1px solid #ddecfa;
    margin-bottom: 40px;
  }
  .profile-header {
    display: flex;
    align-items: center;
    gap: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 24px;
  }
  .avatar-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal), var(--navy));
    color: #ffffff;
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  .profile-titles h2 {
    font-size: 1.7rem;
    color: var(--navy);
    margin-bottom: 4px;
  }
  .profile-cred-tag {
    color: var(--teal);
    font-weight: 700;
    font-size: 0.95rem;
    display: block;
    margin-bottom: 4px;
  }
  .profile-pos {
    color: #64748b;
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* Services Grid */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 22px;
    margin: 32px 0;
  }
  .service-card {
    background: #f8fbfe;
    border-radius: 16px;
    padding: 26px;
    border: 1px solid #e0edf6;
    border-left: 4px solid var(--teal);
    transition: transform 0.25s var(--ease);
  }
  .service-card:hover {
    transform: translateY(-4px);
    border-color: var(--teal);
  }
  .service-card h4 {
    font-size: 1.15rem;
    color: var(--navy);
    margin-bottom: 8px;
  }
  .service-card p {
    font-size: 0.9rem;
    color: #4b6382;
    margin: 0;
    line-height: 1.6;
  }

  /* Includes Grid */
  .includes-box {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 18px;
    padding: 34px;
    margin: 36px 0;
  }
  .includes-box h3 {
    color: #166534;
    font-size: 1.35rem;
    margin-bottom: 20px;
  }
  .includes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 14px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .includes-grid li {
    padding-left: 26px;
    position: relative;
    color: #14532d;
    font-size: 0.94rem;
    font-weight: 500;
  }
  .includes-grid li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #16a34a;
    font-weight: 800;
    font-size: 1.1rem;
  }

  /* Location Box */
  .tfa-location {
    background: linear-gradient(135deg, #0F1D3D 0%, #15325b 100%);
    color: #ffffff;
    border-radius: 20px;
    padding: 44px;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 36px;
    align-items: center;
    box-shadow: var(--shadow);
  }
  .tfa-location h3 {
    color: #38bdf8;
    font-size: 1.55rem;
    margin-bottom: 12px;
  }
  .tfa-location p {
    color: #cbd5e1;
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
  .tfa-contact-card {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 14px;
    padding: 24px;
    text-align: center;
  }
  .tfa-contact-card p {
    color: #e2e8f0;
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
  .btn-gold {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #008C8C;
    color: #ffffff;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 999px;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease;
  }
  .btn-gold:hover {
    background: #007070;
    transform: translateY(-2px);
  }

  @media (max-width: 840px) {
    .tfa-location {
      grid-template-columns: 1fr;
    }
  }
`;

export default function TherapyForAbilityPage() {
  return (
    <div className="tfa-page-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO BANNER ── */}
      <section className="tfa-hero">
        <div className="wrap">
          <div className="tfa-hero-content">
            <h1>Therapy For Ability <span>(TFA)</span> – West Delhi</h1>
            <p className="hero-sub">
              Directed by R. S. Bagga (MOT Neurology, Certified SI Therapist) — providing specialized child sensory integration, occupational therapy, and pediatric rehabilitation in clinical synergy with Dr. Ketan Patel.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="sec sec-white">
        <div className="wrap">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar-circle">RSB</div>
              <div className="profile-titles">
                <h2>R. S. Bagga</h2>
                <span className="profile-cred-tag">M. O. T. Neurology, Certified S. I. Therapist</span>
                <span className="profile-pos">Owner &amp; Clinical Operator of Therapy For Ability</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#0F1D3D', marginBottom: '14px' }}>
              Clinical Background &amp; Vision
            </h3>
            <p style={{ color: '#4b6382', marginBottom: '16px' }}>
              R. S. Bagga possesses over <strong>9 years of dedicated clinical experience</strong> supporting children with complex developmental and neuro-motor challenges. His practice spans leading community-based centers, schools, and tertiary hospitals in New Delhi, focusing on <strong>ADHD, Autism Spectrum Disorders, Learning Disabilities, Handwriting Deficits, Down Syndrome, and Cerebral Palsy</strong>.
            </p>
            <p style={{ color: '#4b6382' }}>
              At TFA, therapists operate from a rigorous <strong>Sensory Integration (SI) frame of reference</strong>, utilizing state-of-the-art sensory gym equipment and standardized cognitive assessment tools to build independent functional life skills.
            </p>
          </div>

          {/* Core Therapies */}
          <h3 style={{ fontSize: '1.6rem', color: '#0F1D3D', marginTop: '48px', marginBottom: '8px' }}>
            Sensory Integration &amp; Therapeutic Interventions
          </h3>
          <p style={{ color: '#4b6382', marginBottom: '24px' }}>
            Comprehensive developmental programs structured around your child&apos;s daily sensory and motor profile:
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h4>Occupational &amp; Fine Motor</h4>
              <p>Strengthening coordinated hand movements, bilateral integration, pencil grasp, and independent handwriting mechanics.</p>
            </div>

            <div className="service-card">
              <h4>Sensory Integration Gym</h4>
              <p>Calming vestibular and proprioceptive sensory overloads, regulating tactile defensiveness, and enhancing spatial balance.</p>
            </div>

            <div className="service-card">
              <h4>Self-Regulation &amp; Social Play</h4>
              <p>Encouraging listening, sequential command following, turn-taking, peer cooperation, and classroom readiness.</p>
            </div>

            <div className="service-card">
              <h4>Speech &amp; Communication</h4>
              <p>Enhancing oral-motor control, verbal articulation, pragmatic communication, and alternative communication tools.</p>
            </div>

            <div className="service-card">
              <h4>Cognitive Problem-Solving</h4>
              <p>Developing abstract reasoning, memory sequencing, and perceptual skills essential for independent academic performance.</p>
            </div>

            <div className="service-card">
              <h4>Daily Living Autonomy</h4>
              <p>Dressing, buttoning, independent feeding, self-grooming, and toileting autonomy for long-term independence.</p>
            </div>
          </div>

          {/* Comprehensive Includes */}
          <div className="includes-box">
            <h3>Comprehensive TFA Service Inclusions</h3>
            <ul className="includes-grid">
              <li>Comprehensive Neuro-Developmental &amp; Sensory Evaluation</li>
              <li>Customized Daily Activity Therapy Programs</li>
              <li>At-Home Carry-Over Techniques for Family Empowerment</li>
              <li>School &amp; Classroom Environmental Adaptations</li>
              <li>Adaptive Equipment Selection &amp; Usage Training</li>
              <li>Continual Caregiver Counseling &amp; Emotional Support</li>
              <li>Biomedical &amp; Nutritional Vitamin Protocols</li>
              <li>Mold Neurotoxicity &amp; Bio-Toxicity Elimination</li>
              <li>Vaccination &amp; Antibiotic Homeopathic Detox Protocols</li>
            </ul>
          </div>

          {/* Location Box */}
          <div className="tfa-location">
            <div>
              <h3>Therapy For Ability – West Delhi Center</h3>
              <p>
                <strong>Address:</strong> Block JJ 13/26, Basement, Rajouri Garden,<br />
                Near HDFC Bank &amp; Pizza Hut Delivery, West Delhi, New Delhi – 110027
              </p>
              <p>
                <strong>Clinic Telephones:</strong> +91-11-45626933 | +91-882 635 8232<br />
                <strong>Local Coordinator:</strong> +91-8866542000 | +91-9899676616 (Mr. Vinod)<br />
                <strong>Direct Consultation Line:</strong> +91 98980 05354<br />
                <strong>Email:</strong> info@tfarehab.com | drketan@specialityhomeopathy.com
              </p>
            </div>

            <div className="tfa-contact-card">
              <p>Consult Dr. Ketan Patel during his New Delhi visits at TFA:</p>
              <Link href="/speciality-homeopathy-new-delhi" className="btn-gold">
                View Delhi Clinic &amp; Booking
              </Link>
              <div style={{ marginTop: '14px' }}>
                <a
                  href="https://wa.me/919898005354"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#38bdf8', fontSize: '0.88rem', textDecoration: 'underline' }}
                >
                  WhatsApp Consultation Desk &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
