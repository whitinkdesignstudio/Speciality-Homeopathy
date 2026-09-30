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
    --maxw: 1200px;
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  .locations-hub-wrap {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f0f8f9;
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .locations-hub-wrap h1,
  .locations-hub-wrap h2,
  .locations-hub-wrap h3,
  .locations-hub-wrap h4,
  .locations-hub-wrap h5 {
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
  .loc-hero {
    position: relative;
    background: linear-gradient(135deg, #cdeaf8 0%, #b3def4 40%, #95cde8 100%);
    padding: 64px 0 74px;
    overflow: hidden;
  }
  .loc-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 85% 15%, rgba(0,140,140,0.18), transparent 45%),
      radial-gradient(circle at 10% 80%, rgba(200,169,107,0.15), transparent 40%);
    pointer-events: none;
  }
  .loc-hero-content {
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
  .loc-hero h1 {
    font-size: clamp(2.2rem, 4.2vw, 3.4rem);
    color: var(--navy);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .loc-hero h1 span {
    color: var(--teal);
  }
  .hero-sub {
    font-size: 1.12rem;
    color: #24426b;
    max-width: 760px;
    margin-bottom: 30px;
  }

  /* Filter Tabs */
  .filter-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .filter-btn {
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(0,140,140,0.25);
    color: var(--navy);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .filter-btn:hover, .filter-btn.active {
    background: var(--teal);
    color: #ffffff;
    border-color: var(--teal);
    box-shadow: 0 6px 20px -6px rgba(0,140,140,0.4);
  }

  /* ── SECTION SHELL ── */
  .sec {
    padding: 64px 0;
  }
  .sec-white {
    background: #ffffff;
  }

  /* ── CLINIC CARDS GRID ── */
  .branches-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 28px;
  }
  .branch-card {
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid #ddecfa;
    box-shadow: var(--shadow);
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
    position: relative;
  }
  .branch-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--teal);
  }
  .branch-tag {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 50px;
    background: var(--teal-light);
    color: var(--teal-dark);
    margin-bottom: 12px;
  }
  .branch-tag.intl {
    background: #fef3c7;
    color: #92400e;
  }
  .branch-city-title {
    font-size: 1.45rem;
    color: var(--navy);
    font-weight: 700;
    margin-bottom: 4px;
  }
  .branch-state-label {
    font-size: 0.85rem;
    color: #64748b;
    margin-bottom: 14px;
    display: block;
  }
  .branch-center-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--teal);
    margin-bottom: 12px;
  }
  .branch-desc {
    font-size: 0.92rem;
    color: #4b6382;
    margin-bottom: 20px;
    line-height: 1.6;
  }
  .branch-details-box {
    background: #f8fbfe;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #e2edf6;
    margin-bottom: 20px;
    font-size: 0.88rem;
    color: #334155;
  }
  .branch-details-box div {
    margin-bottom: 8px;
  }
  .branch-details-box div:last-child {
    margin-bottom: 0;
  }
  .branch-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding-top: 18px;
    border-top: 1px solid #f1f5f9;
  }
  .btn-branch-primary {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--teal);
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.2s ease;
  }
  .btn-branch-primary:hover {
    background: #007070;
  }
  .btn-branch-ghost {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #f1f5f9;
    color: var(--navy);
    font-size: 0.85rem;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid #cbd5e1;
    transition: all 0.2s ease;
  }
  .btn-branch-ghost:hover {
    background: #e2e8f0;
    border-color: #94a3b8;
  }

  /* ── LUXURY CTA BANNER ── */
  .loc-cta {
    background: linear-gradient(135deg, #0F1D3D 0%, #15325b 100%);
    color: #ffffff;
    border-radius: 22px;
    padding: 56px 44px;
    text-align: center;
    box-shadow: var(--shadow);
    margin-top: 56px;
  }
  .loc-cta h2 {
    color: #ffffff;
    font-size: clamp(1.8rem, 3.2vw, 2.5rem);
    margin-bottom: 14px;
  }
  .loc-cta p {
    color: #cbd5e1;
    max-width: 680px;
    margin: 0 auto 28px;
    font-size: 1.05rem;
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
    padding: 14px 28px;
    border-radius: 999px;
    text-decoration: none;
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .btn-gold:hover {
    background: #007070;
    transform: translateY(-2px);
  }
  .btn-outline-light {
    border: 1.5px solid rgba(255,255,255,0.4);
    color: #ffffff;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 999px;
    text-decoration: none;
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .btn-outline-light:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .branches-grid {
      grid-template-columns: 1fr;
    }
    .loc-cta {
      padding: 36px 20px;
    }
  }
`;

const clinics = [
  {
    id: 'ahmedabad',
    type: 'national',
    city: 'Ahmedabad (Headquarters)',
    state: 'Gujarat, India',
    tag: 'Main Research Centre',
    clinicName: 'Speciality Homeopathy Clinic & Research Centre',
    desc: 'Our primary clinical research institute led directly by Dr. Ketan Patel and Dr. Kamal Patel with comprehensive patient intake, diagnostic evaluation, and direct consultation.',
    address: 'A-205/206 Himalaya Arcade, Opp. Lake, Nehru Park, Vastrapur, Ahmedabad – 380015',
    phone: '+91-79-26763575',
    mobile: '+91 98980 05354',
    link: '/contact',
  },
  {
    id: 'mumbai',
    type: 'national',
    city: 'Mumbai',
    state: 'Maharashtra, India',
    tag: '18+ Years Regular OPD',
    clinicName: 'Labh Homeopathic Clinic (Vile Parle West)',
    desc: 'Consult Dr. Ketan Patel, Dr. Bhakti Batavia, and Dr. Chetan Batavia for pediatric neurology, autism, and chronic disease consultations.',
    address: '48-C, Baptista Road, Opp. New Municipal Market, Nr. Vile Parle Station, Vile Parle (West), Mumbai – 400056',
    phone: '+91-98193 99663',
    mobile: '+91 98980 05354',
    link: '/speciality-homeopathy-mumbai',
  },
  {
    id: 'delhi',
    type: 'national',
    city: 'New Delhi',
    state: 'National Capital Region, India',
    tag: '20+ Years Center',
    clinicName: 'Therapy For Ability (TFA) Rajouri Garden',
    desc: 'Integrating Dr. Ketan Patel’s pediatric homeopathic protocols with R. S. Bagga’s advanced Sensory Integration apparatus and Occupational Therapy.',
    address: 'Block JJ 13/26, Basement, Rajouri Garden, Nr. HDFC Bank & Pizza Hut, West Delhi, New Delhi – 110027',
    phone: '+91-11-45626933',
    mobile: '+91-8866542000 / +91-9899676616',
    link: '/speciality-homeopathy-new-delhi',
  },
  {
    id: 'hyderabad',
    type: 'national',
    city: 'Hyderabad',
    state: 'Telangana & Andhra Pradesh',
    tag: '15+ Years Center',
    clinicName: 'VOICE INCLUSIVE EDUCATION SOCIETY (Saidabad)',
    desc: 'Celebrated center where 116 children were adopted for free care on World Autism Awareness Day. Led by Dr. Ketan Patel & coordinator Ms. Ambika.',
    address: '# 17-2-626/2 Madanapet, Above Tipsy Topsy Bakery, Saidabad, Hyderabad – 500059',
    phone: 'Ms. Ambika: +91 94918 84730',
    mobile: '+91 98980 05354',
    link: '/speciality-homeopathy-hyderabad',
  },
  {
    id: 'secunderabad',
    type: 'national',
    city: 'Secunderabad',
    state: 'Telangana, India',
    tag: 'Twin Cities Branch',
    clinicName: 'Secunderabad Consultation Center',
    desc: 'Convenient MG Road consultation center serving families across Secunderabad, Hyderabad, and surrounding districts with prior appointments.',
    address: 'M.G. Road, Secunderabad – 500003, Telangana',
    phone: '+91-79-26763575',
    mobile: '+91 98980 05354',
    link: '/speciality-homeopathy-secunderabad',
  },
  {
    id: 'kolkata',
    type: 'national',
    city: 'Kolkata',
    state: 'West Bengal & Eastern India',
    tag: '15+ Years Regional OPD',
    clinicName: 'Eastern India Consultation Center',
    desc: 'Regular periodic OPD camps serving families across West Bengal, Assam, Meghalaya, Nagaland, and North Eastern states.',
    address: 'Periodic In-Person OPD Camps (Kolkata)',
    phone: '+91-79-26763575',
    mobile: '+91 98980 05354',
    link: '/speciality-homeopathy-kolkata',
  },
  {
    id: 'bangalore',
    type: 'national',
    city: 'Bangalore',
    state: 'Karnataka & South India',
    tag: 'Prior Appointment',
    clinicName: 'Karnataka Consultation Center',
    desc: 'Specialist consultation visits for tech corridor and Mysore families seeking proven biomedical detox and autism homeopathic care.',
    address: 'Periodic OPD Camps (Bangalore)',
    phone: '+91-79-26763575',
    mobile: '+91 98980 05354',
    link: '/speciality-homeopathy-bangalore',
  },
  {
    id: 'chennai',
    type: 'national',
    city: 'Chennai',
    state: 'Tamil Nadu, India',
    tag: 'Prior Appointment',
    clinicName: 'Tamil Nadu Consultation Center',
    desc: 'Conducting periodic specialist consultations for child neurology, speech delays, cerebral palsy, and fertility enhancement.',
    address: 'Periodic OPD Camps (Chennai)',
    phone: '+91-79-26763575',
    mobile: '+91 98980 05354',
    link: '/speciality-homeopathy-chennai',
  },
  {
    id: 'usa',
    type: 'international',
    city: 'USA & South America',
    state: 'Global Online Tele-Health',
    tag: '18+ Years International',
    clinicName: 'Americas Tele-Medicine Clinic',
    desc: 'High-definition video consults via Zoom, Skype, and FaceTime with direct international medicine courier delivery via DHL/FedEx across the Americas.',
    address: 'Online Video Consultations (California, New York, Texas, Florida, etc.)',
    phone: '+91 98980 05354',
    mobile: 'WhatsApp: +91 83201 31612',
    link: '/speciality-homeopathy-usa',
  },
  {
    id: 'uk',
    type: 'international',
    city: 'London UK & Europe',
    state: 'European Tele-Medicine',
    tag: '20+ Years European Reach',
    clinicName: 'London & European Online Clinic',
    desc: 'Catering to patients across England, Scotland, Germany, and Europe with specialized homeopathic protocols for Autism, GDD, and CACNA1A.',
    address: 'Online Video Consultations (London, UK & European Union)',
    phone: '+91 98980 05354',
    mobile: 'WhatsApp: +91 83201 31612',
    link: '/speciality-homeopathy-uk',
  },
];

export default function LocationsHubPage() {
  const [filter, setFilter] = useState<'all' | 'national' | 'international'>('all');

  const filteredClinics = clinics.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <div className="locations-hub-wrap">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO BANNER ── */}
      <section className="loc-hero">
        <div className="wrap">
          <div className="loc-hero-content">
            <h1>Our Clinics &amp; <span>Consultation Centers</span></h1>
            <p className="hero-sub">
              Speciality Homeopathy provides world-class pediatric neurology and constitutional care across major Indian metropolitan centers and through global tele-medicine in over 50 countries.
            </p>

            <div className="filter-tabs">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Centers ({clinics.length})
              </button>
              <button
                className={`filter-btn ${filter === 'national' ? 'active' : ''}`}
                onClick={() => setFilter('national')}
              >
                India Regional Clinics (8)
              </button>
              <button
                className={`filter-btn ${filter === 'international' ? 'active' : ''}`}
                onClick={() => setFilter('international')}
              >
                International Online Tele-Health (2)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANCHES GRID ── */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="branches-grid">
            {filteredClinics.map((item) => (
              <div key={item.id} className="branch-card">
                <div>
                  <span className={`branch-tag ${item.type === 'international' ? 'intl' : ''}`}>
                    {item.tag}
                  </span>
                  <h2 className="branch-city-title">{item.city}</h2>
                  <span className="branch-state-label">{item.state}</span>
                  <div className="branch-center-name">{item.clinicName}</div>
                  <p className="branch-desc">{item.desc}</p>

                  <div className="branch-details-box">
                    <div><strong>Address:</strong> {item.address}</div>
                    <div><strong>Phone:</strong> {item.phone}</div>
                    <div><strong>Helpline:</strong> {item.mobile}</div>
                  </div>
                </div>

                <div className="branch-actions">
                  <Link href={item.link} className="btn-branch-primary">
                    View Center Page &rarr;
                  </Link>
                  <Link href="/inquiry" className="btn-branch-ghost">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA BANNER ── */}
          <div className="loc-cta">
            <h2>Need Consultation in Your City or Online?</h2>
            <p>
              Whether you wish to visit our clinics in person or connect from overseas via high-definition video consultation, our team is here to support your family.
            </p>
            <div className="btn-row">
              <Link href="/inquiry" className="btn-gold">
                Submit Consultation Inquiry
              </Link>
              <Link href="/how-to-pay-fees" className="btn-outline-light">
                How to Pay Fees
              </Link>
              <a
                href="https://wa.me/919898005354"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
