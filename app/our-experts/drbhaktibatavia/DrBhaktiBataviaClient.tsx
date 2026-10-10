import React from 'react';

const doctorStyles = `
:root{
  --blue:#0A1F44;
  --teal:#008C8C;
  --teal-dark:#003d4a;
  --teal-md:#008C8C;
  --teal-lt:#e6f7f8;
  --gold:#C8A96B;
  --ivory:#FAF8F4;
  --graphite:#2E2E2E;
  --shadow:0 24px 60px -30px rgba(10,31,68,.34);
  --shadow-sm:0 12px 30px -20px rgba(10,31,68,.3);
  --maxw:1180px;
  --ease:cubic-bezier(.2,.7,.2,1);
  --line:rgba(10,31,68,.10);
}

.bhakti-page-container {
  font-family:'Open Sans',system-ui,sans-serif;
  color:var(--graphite);
  background:var(--ivory);
  font-size:16px;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

.bhakti-page-container h1,
.bhakti-page-container h2,
.bhakti-page-container h3,
.bhakti-page-container h4 {
  font-family:'Poppins',sans-serif;
  color:var(--blue);
  font-weight:600;
  line-height:1.2;
  letter-spacing:-.01em;
}

.bhakti-page-container a {
  color:inherit;
  text-decoration:none;
}

.bhakti-page-container img {
  max-width:100%;
  display:block;
}

.bhakti-page-container .wrap {
  max-width:var(--maxw);
  margin:0 auto;
  padding:0 26px;
}

.bhakti-page-container .eyebrow {
  font-family:'Open Sans',sans-serif;
  font-weight:700;
  font-size:.68rem;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--teal-md);
}

/* ---- HERO — light blue ---- */
.bhakti-page-container .doc-hero {
  min-height:auto;
  background:#AFDCF7;
  display:flex;
  align-items:flex-end;
  padding:24px 0 0;
  position:relative;
  overflow:hidden;
}

.bhakti-page-container .doc-hero::before {
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(ellipse 80% 60% at 60% 100%,rgba(255,255,255,.18),transparent 70%),
             radial-gradient(ellipse 50% 80% at 90% 20%,rgba(255,255,255,.10),transparent);
  pointer-events:none;
}

/* Decorative circles */
.bhakti-page-container .hero-circle {
  position:absolute;
  border-radius:50%;
  border:1px solid rgba(10,31,68,.08);
  pointer-events:none;
}

.bhakti-page-container .c1 { width:600px; height:600px; right:-120px; top:-120px; }
.bhakti-page-container .c2 { width:380px; height:380px; right:60px; top:40px; }
.bhakti-page-container .c3 { width:200px; height:200px; right:170px; top:150px; }

.bhakti-page-container .doc-hero .wrap {
  display:grid;
  grid-template-columns:1fr 380px;
  gap:0;
  align-items:flex-end;
  position:relative;
  z-index:2;
  width:100%;
}

.bhakti-page-container .hero-text-block {
  padding:16px 0 36px;
}

.bhakti-page-container .doc-hero h1 {
  font-family:'Poppins',sans-serif;
  font-weight:700;
  font-size:clamp(2.2rem,4.5vw,3.6rem);
  color:var(--blue);
  line-height:1.08;
  margin-bottom:8px;
}

.bhakti-page-container .doc-hero .quals {
  font-size:.82rem;
  font-weight:500;
  color:rgba(10,31,68,.65);
  letter-spacing:.06em;
  margin-bottom:28px;
}

.bhakti-page-container .hero-stats {
  display:flex;
  gap:36px;
  flex-wrap:wrap;
  border-top:1px solid rgba(10,31,68,.15);
  padding-top:28px;
}

.bhakti-page-container .hero-stat .num {
  font-family:'Poppins',sans-serif;
  font-weight:700;
  font-size:1.9rem;
  color:var(--blue);
  line-height:1;
}

.bhakti-page-container .hero-stat .lbl {
  font-size:.68rem;
  font-weight:500;
  color:rgba(10,31,68,.55);
  margin-top:5px;
  line-height:1.4;
  max-width:14ch;
}

.bhakti-page-container .hero-photo-wrap {
  align-self:flex-end;
  display:flex;
  justify-content:flex-end;
}

/* ---- ABOUT STRIP ---- */
.bhakti-page-container .about-strip {
  padding:72px 0;
  border-bottom:1px solid var(--line);
  background:var(--ivory);
}

.bhakti-page-container .about-strip .wrap {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
  align-items:start;
}

.bhakti-page-container .about-lead {
  font-size:1.08rem;
  color:#3a3a3a;
  line-height:1.78;
  margin-top:18px;
}

.bhakti-page-container .about-lead p + p {
  margin-top:16px;
}

/* Side Highlights */
.bhakti-page-container .side-highlights {
  display:flex;
  flex-direction:column;
  gap:18px;
  margin-top:24px;
}

.bhakti-page-container .highlight-pill {
  display:flex;
  align-items:flex-start;
  gap:14px;
  background:#fff;
  border-radius:16px;
  padding:18px 20px;
  border:1px solid rgba(10,31,68,.07);
  box-shadow:0 4px 18px -8px rgba(10,31,68,.08);
  transition:transform .3s var(--ease),box-shadow .3s;
}

.bhakti-page-container .highlight-pill:hover {
  transform:translateY(-2px);
  box-shadow:0 12px 30px -12px rgba(10,31,68,.13);
}

.bhakti-page-container .pill-icon {
  width:40px;
  height:40px;
  border-radius:12px;
  background:linear-gradient(135deg,#d4ede1,#a8dab9);
  display:grid;
  place-items:center;
  flex:0 0 auto;
}

.bhakti-page-container .pill-icon svg {
  width:20px;
  height:20px;
  color:var(--teal-md);
}

.bhakti-page-container .pill-title {
  font-family:'Poppins',sans-serif;
  font-size:.88rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:3px;
}

.bhakti-page-container .pill-desc {
  font-size:.78rem;
  color:#666;
  line-height:1.5;
}

/* ---- STRENGTHS SECTION ---- */
.bhakti-page-container .strengths-sec {
  padding:72px 0;
  background:#fff;
  border-bottom:1px solid var(--line);
}

.bhakti-page-container .section-hd {
  text-align:center;
  margin-bottom:52px;
}

.bhakti-page-container .section-hd h2 {
  font-size:clamp(1.6rem,3vw,2.2rem);
  color:var(--blue);
}

.bhakti-page-container .section-hd p {
  font-size:.96rem;
  color:#666;
  margin-top:10px;
}

.bhakti-page-container .strength-grid {
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:22px;
  max-width:840px;
  margin:0 auto;
}

.bhakti-page-container .str-card {
  display:flex;
  gap:18px;
  align-items:flex-start;
  background:linear-gradient(145deg,#e6f7f8,#b8ecee);
  border-radius:20px;
  padding:28px;
  border:1.5px solid rgba(0,140,140,.1);
  transition:border-color .3s,box-shadow .3s,transform .3s;
}

.bhakti-page-container .str-card:hover {
  border-color:rgba(0,140,140,.25);
  box-shadow:0 12px 36px -12px rgba(0,140,140,.14);
  transform:translateY(-3px);
}

.bhakti-page-container .str-num {
  font-family:'Poppins',sans-serif;
  font-weight:700;
  font-size:2rem;
  color:rgba(0,140,140,.18);
  line-height:1;
  flex:0 0 auto;
  margin-top:-4px;
}

.bhakti-page-container .str-title {
  font-family:'Poppins',sans-serif;
  font-size:.88rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:6px;
}

.bhakti-page-container .str-desc {
  font-size:.78rem;
  color:#666;
  line-height:1.6;
}

/* ---- SPECIALISATIONS (CONDITIONS TREATED) ---- */
.bhakti-page-container .spec-sec {
  padding:72px 0;
  border-bottom:1px solid var(--line);
  background:var(--ivory);
}

.bhakti-page-container .spec-groups {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
}

.bhakti-page-container .spec-group {
  background:#fff;
  border-radius:18px;
  padding:26px;
  border:1.5px solid var(--line);
  transition:border-color .3s,box-shadow .3s;
}

.bhakti-page-container .spec-group:hover {
  border-color:rgba(46,139,87,.2);
  box-shadow:0 8px 28px -10px rgba(46,139,87,.12);
}

.bhakti-page-container .spec-group-hd {
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:18px;
  padding-bottom:14px;
  border-bottom:1px solid var(--line);
}

.bhakti-page-container .sg-icon {
  width:36px;
  height:36px;
  border-radius:10px;
  background:linear-gradient(135deg,#d4ede1,#a8dab9);
  display:grid;
  place-items:center;
  flex:0 0 auto;
}

.bhakti-page-container .sg-icon svg {
  width:18px;
  height:18px;
  color:var(--teal-md);
}

.bhakti-page-container .spec-group-hd h3 {
  font-size:.86rem;
  font-weight:600;
  color:var(--blue);
}

.bhakti-page-container .spec-list {
  list-style:none;
  display:flex;
  flex-direction:column;
  gap:7px;
}

.bhakti-page-container .spec-list li {
  font-size:.76rem;
  color:#555;
  display:flex;
  align-items:flex-start;
  gap:8px;
  line-height:1.45;
}

.bhakti-page-container .spec-list li::before {
  content:"";
  width:5px;
  height:5px;
  border-radius:50%;
  background:var(--teal-md);
  flex:0 0 auto;
  margin-top:5px;
}

/* ---- TIMELINE (EDUCATION & PROFESSIONAL JOURNEY) ---- */
.bhakti-page-container .timeline-sec {
  padding:72px 0;
  border-bottom:1px solid var(--line);
  background:#fff;
}

.bhakti-page-container .timeline-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
}

.bhakti-page-container .tl-col h3 {
  font-size:1.05rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:28px;
  padding-bottom:14px;
  border-bottom:2px solid var(--teal-md);
  display:inline-block;
}

.bhakti-page-container .tl-items {
  display:flex;
  flex-direction:column;
  gap:0;
}

.bhakti-page-container .tl-item {
  display:flex;
  gap:18px;
  position:relative;
  padding-bottom:24px;
}

.bhakti-page-container .tl-item:last-child {
  padding-bottom:0;
}

.bhakti-page-container .tl-item::before {
  content:"";
  position:absolute;
  left:9px;
  top:20px;
  bottom:0;
  width:1px;
  background:rgba(46,139,87,.2);
}

.bhakti-page-container .tl-item:last-child::before {
  display:none;
}

.bhakti-page-container .tl-dot {
  width:19px;
  height:19px;
  border-radius:50%;
  border:2px solid var(--teal-md);
  background:#fff;
  flex:0 0 auto;
  margin-top:2px;
  position:relative;
  z-index:1;
}

.bhakti-page-container .tl-year {
  font-size:.68rem;
  font-weight:700;
  color:var(--teal-md);
  letter-spacing:.1em;
  margin-bottom:3px;
}

.bhakti-page-container .tl-desc {
  font-size:.8rem;
  color:#555;
  line-height:1.55;
}

/* Chips */
.bhakti-page-container .chips {
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:18px;
}

.bhakti-page-container .chip {
  background:var(--teal-lt);
  border:1px solid rgba(0,140,140,.22);
  border-radius:999px;
  padding:7px 16px;
  font-size:.74rem;
  font-weight:500;
  color:var(--teal-md);
}

/* ---- CONTACT STRIP ---- */
.bhakti-page-container .contact-strip {
  padding:64px 0;
  background:linear-gradient(135deg,#003d4a,#005a6e);
  text-align:center;
  color:#fff;
  border-bottom:2px solid #ffffff;
}

.bhakti-page-container .contact-strip h2 {
  color:#fff;
  font-size:1.8rem;
  margin-bottom:10px;
}

.bhakti-page-container .contact-strip p {
  color:rgba(255,255,255,.72);
  font-size:.92rem;
  margin-bottom:32px;
}

.bhakti-page-container .contact-details {
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:28px;
  margin-top:28px;
}

.bhakti-page-container .c-detail {
  display:flex;
  align-items:center;
  gap:10px;
  font-size:.82rem;
  color:rgba(255,255,255,.8);
}

.bhakti-page-container .c-detail svg {
  width:16px;
  height:16px;
  color:rgba(255,255,255,.5);
}

/* Buttons */
.bhakti-page-container .btn {
  display:inline-flex;
  align-items:center;
  gap:.5rem;
  font-family:'Open Sans',sans-serif;
  font-weight:600;
  font-size:.82rem;
  padding:.78rem 1.4rem;
  border-radius:999px;
  cursor:pointer;
  border:1px solid transparent;
  transition:transform .35s var(--ease),box-shadow .35s,background .3s,color .3s;
}

.bhakti-page-container .btn-primary {
  background:linear-gradient(135deg,#0096c7,#0a4a6e);
  color:#fff;
  box-shadow:0 8px 22px -10px rgba(0,100,180,.55);
}

.bhakti-page-container .btn-primary:hover {
  transform:translateY(-2px);
  box-shadow:0 14px 30px -12px rgba(0,100,180,.7);
}

/* Reveal Animations */
.bhakti-page-container .reveal {
  opacity:0;
  transform:translateY(24px);
  transition:opacity .7s var(--ease),transform .7s var(--ease);
}

.bhakti-page-container .reveal.in {
  opacity:1;
  transform:none;
}

.bhakti-page-container .d1 { transition-delay:.1s; }
.bhakti-page-container .d2 { transition-delay:.2s; }
.bhakti-page-container .d3 { transition-delay:.3s; }

/* Responsive Media Queries */
@media(max-width:960px){
  .bhakti-page-container .doc-hero .wrap{
    grid-template-columns:1fr;
    padding-bottom:48px;
  }
  .bhakti-page-container .hero-photo-wrap{
    justify-content:center;
    margin-top:24px;
  }
  .bhakti-page-container .about-strip .wrap{
    grid-template-columns:1fr;
  }
  .bhakti-page-container .strength-grid{
    grid-template-columns:1fr;
  }
  .bhakti-page-container .spec-groups{
    grid-template-columns:repeat(2,1fr);
  }
  .bhakti-page-container .timeline-grid{
    grid-template-columns:1fr;
  }
}

@media(max-width:680px){
  .bhakti-page-container .wrap{
    padding:0 16px !important;
  }
  .bhakti-page-container .doc-hero{
    padding:20px 0 0 !important;
  }
  .bhakti-page-container .doc-hero h1{
    font-size:1.9rem !important;
  }
  .bhakti-page-container .hero-stats{
    gap:14px 20px !important;
  }
  .bhakti-page-container .hero-stat .num{
    font-size:1.4rem !important;
  }
  .bhakti-page-container .strength-grid,
  .bhakti-page-container .spec-groups{
    grid-template-columns:1fr !important;
  }
  .bhakti-page-container .contact-details{
    flex-direction:column;
    align-items:center;
    gap:14px;
  }
}
`;

export default function DrBhaktiBataviaClient() {
  return (
    <div className="bhakti-page-container">
      <style dangerouslySetInnerHTML={{ __html: doctorStyles }} />

      {/* SECTION 1: HERO */}
      <section className="doc-hero">
        <span className="hero-circle c1" />
        <span className="hero-circle c2" />
        <span className="hero-circle c3" />
        <div className="wrap">
          <div className="hero-text-block">
            <h1>Dr. Bhakti Batavia</h1>
            <p className="quals">BHMS · 27+ Years of Clinical Practice</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">27+</div>
                <div className="lbl">Years in Practice</div>
              </div>
              <div className="hero-stat">
                <div className="num">5+</div>
                <div className="lbl">Years Leap to Similimum</div>
              </div>
              <div className="hero-stat">
                <div className="num">Mumbai</div>
                <div className="lbl">Based — Vile Parle West</div>
              </div>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div
              style={{
                width: '280px',
                height: '350px',
                background: 'linear-gradient(180deg,rgba(10,31,68,.06),rgba(10,31,68,.02))',
                borderRadius: '20px 20px 0 0',
                border: '1px solid rgba(10,31,68,.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src="https://static.wixstatic.com/media/66422a_994a71f1415540d291f87e2b8f8003d7~mv2.png"
                alt="Dr. Bhakti Batavia"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }}
              />
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(10,31,68,0.3)"
                strokeWidth="1.2"
                strokeLinecap="round"
                style={{ position: 'absolute', zIndex: 0 }}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="about-strip">
        <div className="wrap">
          <div>
            <h2 className="reveal d1" style={{ marginTop: '10px', fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>
              Where classical homeopathy <br />
              meets modern neuroscience
            </h2>
            <div className="about-lead reveal d2">
              <p>
                Dr. Bhakti Batavia is an experienced homoeopathic physician with over 27 years of clinical practice,
                known for her calm, patient-centric approach. She is deeply attentive to every detail of a case,
                offering compassionate, reassuring consultations with ample time given to each patient.
              </p>
              <p>
                For the past 5 years, she has been professionally aligned with the Leap to Similimum method —
                integrating neuroscience-based insights into classical homeopathic case analysis. This innovative
                approach allows for deeper exploration of chronic and difficult cases, identifying constitutional
                similimum with greater precision.
              </p>
              <p>
                Through her independent practice at Labh Homeopathy Clinic, Vile Parle West, Mumbai, she has built a
                strong reputation for managing complex, chronic, and multi-system cases where conventional medicine
                falls short of offering lasting relief.
              </p>
            </div>
          </div>
          <div className="side-highlights reveal d2">
            <div className="highlight-pill">
              <div className="pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.04-3.04A2.5 2.5 0 0 1 5 13.5a2.5 2.5 0 0 1-1.5-4.5 2.5 2.5 0 0 1 6-6.5z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.04-3.04A2.5 2.5 0 0 0 19 13.5a2.5 2.5 0 0 0 1.5-4.5 2.5 2.5 0 0 0-6-6.5z" />
                </svg>
              </div>
              <div>
                <div className="pill-title">Leap to Similimum Method</div>
                <div className="pill-desc">
                  Neuroscience-driven case exploration, integrating mind-body patterns for deeper constitutional
                  prescribing.
                </div>
              </div>
            </div>
            <div className="highlight-pill">
              <div className="pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="pill-title">Strong Rapport with Children</div>
                <div className="pill-desc">
                  Calm, empathetic consultations create trust — especially in paediatric cases where cooperation is key.
                </div>
              </div>
            </div>
            <div className="highlight-pill">
              <div className="pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <div className="pill-title">Mentored by Masters</div>
                <div className="pill-desc">
                  Clinical training under Dr. Rajan Sankaran and Dr. Praful Barvalia — exposure to advanced system-based
                  case analysis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STRENGTHS */}
      <section className="strengths-sec">
        <div className="wrap">
          <div className="section-hd reveal">
            <h2>What Sets Dr. Bhakti Apart</h2>
          </div>
          <div className="strength-grid">
            <div className="str-card reveal">
              <div className="str-num">01</div>
              <div>
                <div className="str-title">Deeply Empathetic Listener</div>
                <div className="str-desc">
                  Every consultation receives full attention and ample time. Patients feel heard, not rushed — essential
                  for uncovering the true constitutional picture.
                </div>
              </div>
            </div>
            <div className="str-card reveal d1">
              <div className="str-num">02</div>
              <div>
                <div className="str-title">Meticulous Case Analysis</div>
                <div className="str-desc">
                  Emphasis on finer emotional and sensory details that others overlook — leading to more precise
                  similimum selection and lasting relief.
                </div>
              </div>
            </div>
            <div className="str-card reveal d2">
              <div className="str-num">03</div>
              <div>
                <div className="str-title">Holistic Mind-Body Integration</div>
                <div className="str-desc">
                  Combines classical homeopathic wisdom with applied neuroscience-driven case exploration for difficult
                  and chronic multi-system cases.
                </div>
              </div>
            </div>
            <div className="str-card reveal d3">
              <div className="str-num">04</div>
              <div>
                <div className="str-title">Complex Case Expertise</div>
                <div className="str-desc">
                  Specialises in cases where patients have not found relief elsewhere — chronic, overlapping conditions
                  that require patient, long-term constitutional management.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE SPECIALISATIONS */}
      <section className="spec-sec">
        <div className="wrap">
          <div className="section-hd reveal">
            <h2>Conditions Treated</h2>
            <p>Chronic &amp; multi-system conditions managed with precision and compassion</p>
          </div>
          <div className="spec-groups">
            <div className="spec-group reveal">
              <div className="spec-group-hd">
                <div className="sg-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M2 20s1-4 10-4 10 4 10 4" />
                  </svg>
                </div>
                <h3>Paediatrics</h3>
              </div>
              <ul className="spec-list">
                <li>Infantile Eczema</li>
                <li>Childhood Asthma</li>
                <li>Recurrent Upper Respiratory Infections</li>
              </ul>
            </div>
            <div className="spec-group reveal d1">
              <div className="spec-group-hd">
                <div className="sg-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  </svg>
                </div>
                <h3>Respiratory</h3>
              </div>
              <ul className="spec-list">
                <li>Asthma</li>
                <li>Allergic Rhinitis / Hay Fever</li>
                <li>Upper Respiratory Tract Infections</li>
              </ul>
            </div>
            <div className="spec-group reveal d2">
              <div className="spec-group-hd">
                <div className="sg-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                </div>
                <h3>Gastrointestinal</h3>
              </div>
              <ul className="spec-list">
                <li>IBS &amp; GERD</li>
                <li>Acid Reflux</li>
                <li>Irregular Bowel Movements</li>
              </ul>
            </div>
            <div className="spec-group reveal">
              <div className="spec-group-hd">
                <div className="sg-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Gynaecology</h3>
              </div>
              <ul className="spec-list">
                <li>Fibroids &amp; PCOD</li>
                <li>Pubertal Issues</li>
                <li>Menstrual Irregularities</li>
              </ul>
            </div>
            <div className="spec-group reveal d1">
              <div className="spec-group-hd">
                <div className="sg-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3>Hormonal Disorders</h3>
              </div>
              <ul className="spec-list">
                <li>Thyroid Disorders</li>
                <li>Diabetes Mellitus</li>
              </ul>
            </div>
            <div className="spec-group reveal d2">
              <div className="spec-group-hd">
                <div className="sg-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <h3>Skin Conditions</h3>
              </div>
              <ul className="spec-list">
                <li>Urticaria &amp; Eczema</li>
                <li>Psoriasis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EDUCATION & PROFESSIONAL JOURNEY */}
      <section className="timeline-sec">
        <div className="wrap">
          <div className="section-hd reveal">
            <h2>Education &amp; Professional Journey</h2>
          </div>
          <div className="timeline-grid">
            <div className="tl-col reveal">
              <h3>Education</h3>
              <div className="tl-items">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">BHMS — Completed 1996</div>
                    <div className="tl-desc">
                      Bachelor of Homoeopathic Medicine &amp; Surgery from Chandaben M. Patel Homoeopathy Medical College,
                      Irla, Mumbai.
                    </div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">Advanced Training</div>
                    <div className="tl-desc">
                      6-month clinical training at Dr. Praful Barvalia&apos;s Clinic, Ghatkopar. Exposure to advanced
                      case-taking under Dr. Rajan Sankaran at the Homoeopathy Hospital.
                    </div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">Last 5 Years</div>
                    <div className="tl-desc">
                      Following The Leap to Similimum method with close collaboration under Dr. Divya Chhabra. Applied
                      neuroscience-driven case exploration in chronic and difficult cases.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-col reveal d1">
              <h3>Clinical Experience</h3>
              <div className="tl-items">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">1997 – Present</div>
                    <div className="tl-desc">
                      Labh Homeopathy Clinic, Vile Parle (W), Mumbai — Independent practice focused on chronic, complex,
                      and multi-system clinical cases. Integrating classical Homoeopathy with deep case-based enquiry and
                      advanced similimum analysis.
                    </div>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '36px' }}>Mentors &amp; Collaborators</h3>
              <div className="chips">
                <span className="chip">Dr. Rajan Sankaran</span>
                <span className="chip">Dr. Praful Barvalia</span>
                <span className="chip">Dr. Divya Chhabra</span>
                <span className="chip">Leap to Similimum Method</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT STRIP */}
      <section className="contact-strip">
        <div className="wrap">
          <h2>Book a Consultation</h2>
          <p>Labh Homeopathy Clinic · Vile Parle West, Mumbai</p>
          <a
            className="btn btn-primary"
            href="https://wa.me/918320131612"
            style={{ margin: '0 auto', display: 'inline-flex' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
          <div className="contact-details">
            <div className="c-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Labh Smruti, Vile Parle West, Mumbai – 400056
            </div>
            <div className="c-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@specialityhomeopathy.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
