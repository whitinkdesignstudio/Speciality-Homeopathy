import React from 'react';

const doctorStyles = `
:root{
  --blue:#0A1F44;
  --teal:#008C8C;
  --teal-dark:#003d4a;
  --teal-lt:#e6f7f8;
  --teal-md:#008C8C;
  --gold:#C8A96B;
  --ivory:#FAF8F4;
  --graphite:#2E2E2E;
  --shadow:0 24px 60px -30px rgba(10,31,68,.34);
  --shadow-sm:0 12px 30px -20px rgba(10,31,68,.3);
  --maxw:1180px;
  --ease:cubic-bezier(.2,.7,.2,1);
  --line:rgba(10,31,68,.10);
}

.kamal-page-container {
  font-family:'Open Sans',system-ui,sans-serif;
  color:var(--graphite);
  background:var(--ivory);
  font-size:16px;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

.kamal-page-container h1,
.kamal-page-container h2,
.kamal-page-container h3,
.kamal-page-container h4 {
  font-family:'Poppins',sans-serif;
  color:var(--blue);
  font-weight:600;
  line-height:1.2;
  letter-spacing:-.01em;
}

.kamal-page-container a {
  color:inherit;
  text-decoration:none;
}

.kamal-page-container img {
  max-width:100%;
  display:block;
}

.kamal-page-container .wrap {
  max-width:var(--maxw);
  margin:0 auto;
  padding:0 26px;
}

.kamal-page-container .eyebrow {
  font-family:'Open Sans',sans-serif;
  font-weight:700;
  font-size:.68rem;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--teal-md);
}

/* ---- HERO — light blue (matches Section 2) ---- */
.kamal-page-container .doc-hero {
  min-height:auto;
  background:#AFDCF7;
  display:flex;
  align-items:flex-end;
  padding:24px 0 0;
  position:relative;
  overflow:hidden;
}

.kamal-page-container .doc-hero::before {
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(ellipse 80% 60% at 60% 100%,rgba(255,255,255,.18),transparent 70%),
             radial-gradient(ellipse 50% 80% at 90% 20%,rgba(255,255,255,.12),transparent);
  pointer-events:none;
}

/* Decorative petals/circles */
.kamal-page-container .hero-petal {
  position:absolute;
  border-radius:50%;
  border:1px solid rgba(10,31,68,.08);
  pointer-events:none;
}

.kamal-page-container .p1 { width:500px; height:500px; right:-80px; top:-80px; }
.kamal-page-container .p2 { width:320px; height:320px; right:60px; top:40px; }
.kamal-page-container .p3 { width:160px; height:160px; right:160px; top:140px; }

.kamal-page-container .doc-hero .wrap {
  display:grid;
  grid-template-columns:1fr 380px;
  gap:0;
  align-items:flex-end;
  position:relative;
  z-index:2;
  width:100%;
}

.kamal-page-container .hero-text-block {
  padding:16px 0 36px;
}

.kamal-page-container .doc-hero h1 {
  font-family:'Poppins',sans-serif;
  font-weight:700;
  font-size:clamp(2.2rem,4.5vw,3.6rem);
  color:var(--blue);
  line-height:1.08;
  margin-bottom:8px;
}

.kamal-page-container .doc-hero .quals {
  font-size:.82rem;
  font-weight:500;
  color:rgba(10,31,68,.65);
  letter-spacing:.06em;
  margin-bottom:28px;
}

.kamal-page-container .hero-stats {
  display:flex;
  gap:36px;
  flex-wrap:wrap;
  border-top:1px solid rgba(10,31,68,.15);
  padding-top:28px;
}

.kamal-page-container .hero-stat .num {
  font-family:'Poppins',sans-serif;
  font-weight:700;
  font-size:1.9rem;
  color:var(--blue);
  line-height:1;
}

.kamal-page-container .hero-stat .lbl {
  font-size:.68rem;
  font-weight:500;
  color:rgba(10,31,68,.55);
  margin-top:5px;
  line-height:1.4;
  max-width:14ch;
}

.kamal-page-container .hero-photo-wrap {
  align-self:flex-end;
  display:flex;
  justify-content:flex-end;
}

.kamal-page-container .hero-photo-wrap img {
  width:340px;
  height:auto;
  object-fit:cover;
  filter:drop-shadow(-24px 0 40px rgba(10,31,68,.25));
  display:block;
}

/* ---- ABOUT STRIP ---- */
.kamal-page-container .about-strip {
  padding:72px 0;
  border-bottom:1px solid var(--line);
  background:var(--ivory);
}

.kamal-page-container .about-strip .wrap {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
  align-items:start;
}

.kamal-page-container .about-lead {
  font-size:1.08rem;
  color:#3a3a3a;
  line-height:1.78;
  margin-top:18px;
}

.kamal-page-container .about-lead p + p {
  margin-top:16px;
}

/* Side Highlights */
.kamal-page-container .side-highlights {
  display:flex;
  flex-direction:column;
  gap:18px;
  margin-top:24px;
}

.kamal-page-container .highlight-pill {
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

.kamal-page-container .highlight-pill:hover {
  transform:translateY(-2px);
  box-shadow:0 12px 30px -12px rgba(10,31,68,.13);
}

.kamal-page-container .pill-icon {
  width:40px;
  height:40px;
  border-radius:12px;
  background:linear-gradient(135deg,#e6f7f8,#b8ecee);
  display:grid;
  place-items:center;
  flex:0 0 auto;
}

.kamal-page-container .pill-icon svg {
  width:20px;
  height:20px;
  color:var(--teal-md);
}

.kamal-page-container .pill-title {
  font-family:'Poppins',sans-serif;
  font-size:.88rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:3px;
}

.kamal-page-container .pill-desc {
  font-size:.78rem;
  color:#666;
  line-height:1.5;
}

/* ---- EXPERTISE / CONDITIONS TREATED ---- */
.kamal-page-container .expertise-sec {
  padding:72px 0;
  background:#fff;
  border-bottom:1px solid var(--line);
}

.kamal-page-container .section-hd {
  text-align:center;
  margin-bottom:52px;
}

.kamal-page-container .section-hd h2 {
  font-size:clamp(1.6rem,3vw,2.2rem);
  color:var(--blue);
}

.kamal-page-container .section-hd p {
  font-size:.96rem;
  color:#666;
  margin-top:10px;
}

.kamal-page-container .condition-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.kamal-page-container .cond-card {
  border-radius:20px;
  padding:28px 22px;
  background:linear-gradient(145deg,#e6f7f8,#b8ecee);
  border:1.5px solid rgba(0,140,140,.1);
  text-align:center;
  transition:border-color .3s,box-shadow .3s,transform .3s;
}

.kamal-page-container .cond-card:hover {
  border-color:rgba(0,140,140,.25);
  box-shadow:0 12px 36px -12px rgba(0,140,140,.14);
  transform:translateY(-3px);
}

.kamal-page-container .cond-icon {
  width:52px;
  height:52px;
  border-radius:16px;
  background:linear-gradient(135deg,#e6f7f8,#b8ecee);
  display:grid;
  place-items:center;
  margin:0 auto 16px;
}

.kamal-page-container .cond-icon svg {
  width:24px;
  height:24px;
  color:var(--teal-md);
}

.kamal-page-container .cond-card h3 {
  font-size:.9rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:6px;
}

.kamal-page-container .cond-card p {
  font-size:.74rem;
  color:#888;
  line-height:1.5;
}

/* ---- TIMELINE (EDUCATION & EXPERIENCE) ---- */
.kamal-page-container .timeline-sec {
  padding:72px 0;
  border-bottom:1px solid var(--line);
  background:var(--ivory);
}

.kamal-page-container .timeline-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
}

.kamal-page-container .tl-col h3 {
  font-size:1.05rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:28px;
  padding-bottom:14px;
  border-bottom:2px solid var(--teal-md);
  display:inline-block;
}

.kamal-page-container .tl-items {
  display:flex;
  flex-direction:column;
  gap:0;
}

.kamal-page-container .tl-item {
  display:flex;
  gap:18px;
  position:relative;
  padding-bottom:24px;
}

.kamal-page-container .tl-item:last-child {
  padding-bottom:0;
}

.kamal-page-container .tl-item::before {
  content:"";
  position:absolute;
  left:9px;
  top:20px;
  bottom:0;
  width:1px;
  background:rgba(0,140,140,.2);
}

.kamal-page-container .tl-item:last-child::before {
  display:none;
}

.kamal-page-container .tl-dot {
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

.kamal-page-container .tl-year {
  font-size:.68rem;
  font-weight:700;
  color:var(--teal-md);
  letter-spacing:.1em;
  margin-bottom:3px;
}

.kamal-page-container .tl-desc {
  font-size:.8rem;
  color:#555;
  line-height:1.55;
}

/* Chips */
.kamal-page-container .chips {
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:18px;
}

.kamal-page-container .chip {
  background:var(--teal-lt);
  border:1px solid rgba(0,140,140,.22);
  border-radius:999px;
  padding:7px 16px;
  font-size:.74rem;
  font-weight:500;
  color:var(--teal-md);
}

/* ---- CONTACT STRIP ---- */
.kamal-page-container .contact-strip {
  padding:64px 0;
  background:linear-gradient(135deg,#003d4a,#005a6e);
  text-align:center;
  color:#fff;
  border-bottom:2px solid #ffffff;
}

.kamal-page-container .contact-strip h2 {
  color:#fff;
  font-size:1.8rem;
  margin-bottom:10px;
}

.kamal-page-container .contact-strip p {
  color:rgba(255,255,255,.72);
  font-size:.92rem;
  margin-bottom:32px;
}

.kamal-page-container .contact-details {
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:28px;
  margin-top:28px;
}

.kamal-page-container .c-detail {
  display:flex;
  align-items:center;
  gap:10px;
  font-size:.82rem;
  color:rgba(255,255,255,.8);
}

.kamal-page-container .c-detail svg {
  width:16px;
  height:16px;
  color:rgba(255,255,255,.5);
}

/* Buttons */
.kamal-page-container .btn {
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

.kamal-page-container .btn-primary {
  background:linear-gradient(135deg,#0096c7,#0a4a6e);
  color:#fff;
  box-shadow:0 8px 22px -10px rgba(0,100,180,.55);
}

.kamal-page-container .btn-primary:hover {
  transform:translateY(-2px);
  box-shadow:0 14px 30px -12px rgba(0,100,180,.7);
}

/* Reveal Animations */
.kamal-page-container .reveal {
  opacity:0;
  transform:translateY(24px);
  transition:opacity .7s var(--ease),transform .7s var(--ease);
}

.kamal-page-container .reveal.in {
  opacity:1;
  transform:none;
}

.kamal-page-container .d1 { transition-delay:.1s; }
.kamal-page-container .d2 { transition-delay:.2s; }
.kamal-page-container .d3 { transition-delay:.3s; }

/* Responsive Media Queries */
@media(max-width:960px){
  .kamal-page-container .doc-hero .wrap{
    grid-template-columns:1fr;
    padding-bottom:48px;
  }
  .kamal-page-container .hero-photo-wrap{
    justify-content:center;
    margin-top:24px;
  }
  .kamal-page-container .hero-photo-wrap img{
    width:260px;
  }
  .kamal-page-container .about-strip .wrap{
    grid-template-columns:1fr;
  }
  .kamal-page-container .condition-grid{
    grid-template-columns:repeat(2,1fr);
  }
  .kamal-page-container .timeline-grid{
    grid-template-columns:1fr;
  }
}

@media(max-width:680px){
  .kamal-page-container .wrap{
    padding:0 16px !important;
  }
  .kamal-page-container .doc-hero{
    padding:20px 0 0 !important;
  }
  .kamal-page-container .doc-hero h1{
    font-size:1.9rem !important;
  }
  .kamal-page-container .hero-stats{
    gap:14px 20px !important;
  }
  .kamal-page-container .hero-stat .num{
    font-size:1.4rem !important;
  }
  .kamal-page-container .hero-photo-wrap img{
    width:220px !important;
  }
  .kamal-page-container .condition-grid{
    grid-template-columns:1fr !important;
  }
  .kamal-page-container .contact-details{
    flex-direction:column;
    align-items:center;
    gap:14px;
  }
}
`;

export default function DrKamalPatelClient() {
  return (
    <div className="kamal-page-container">
      <style dangerouslySetInnerHTML={{ __html: doctorStyles }} />

      {/* SECTION 1: HERO */}
      <section className="doc-hero">
        <span className="hero-petal p1" />
        <span className="hero-petal p2" />
        <span className="hero-petal p3" />
        <div className="wrap">
          <div className="hero-text-block">
            <h1>Dr. Kamal Patel</h1>
            <p className="quals">BHMS · 30+ Years of Clinical Experience</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">30+</div>
                <div className="lbl">Years in Practice</div>
              </div>
              <div className="hero-stat">
                <div className="num">10+</div>
                <div className="lbl">Years Charitable Trust Service</div>
              </div>
              <div className="hero-stat">
                <div className="num">3000+</div>
                <div className="lbl">Skin Cases Treated</div>
              </div>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img src="https://static.wixstatic.com/media/66422a_7f710f2df8d44845a086efb7e1311ba9~mv2.png"
              alt="Dr. Kamal Patel" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="about-strip">
        <div className="wrap">
          <div>
            <h2 className="reveal d1" style={{ marginTop: '10px', fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>
              Skin &amp; hair care with the <br />
              gentleness of homeopathy
            </h2>
            <div className="about-lead reveal d2">
              <p>
                Dr. Kamal Patel brings more than 30 years of dedicated homeopathic practice, with a special focus on
                cosmetic and dermatological disorders including skin, hair, and obesity conditions. Her patient-centric
                approach ensures every case is treated holistically, addressing the root cause rather than just
                symptoms.
              </p>
              <p>
                She has served for over 10 years across multiple charitable trusts in Ahmedabad — including B V Doshi
                Charitable Trust, Kashiram Charitable Trust in Ambawadi, and Shri Vaishnodevi Charitable Trust —
                reflecting her deep commitment to community health.
              </p>
              <p>
                Since 1992, Dr. Kamal has maintained her private practice in Ahmedabad as a Skin &amp; Hair Expert,
                combining classical homeopathic principles with meticulous case analysis to deliver lasting results.
              </p>
            </div>
          </div>
          <div className="side-highlights reveal d2">
            <div className="highlight-pill">
              <div className="pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div>
                <div className="pill-title">Holistic Skin Care</div>
                <div className="pill-desc">
                  Treats skin conditions from within — addressing hormonal imbalance, immunity, and nutrition alongside
                  topical symptoms.
                </div>
              </div>
            </div>
            <div className="highlight-pill">
              <div className="pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <div className="pill-title">10+ Years Charitable Service</div>
                <div className="pill-desc">
                  Served multiple charitable trusts across Ahmedabad, making quality care accessible to underserved
                  communities.
                </div>
              </div>
            </div>
            <div className="highlight-pill">
              <div className="pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <div>
                <div className="pill-title">Patient-Centred Approach</div>
                <div className="pill-desc">
                  Individual constitutions studied carefully. No generic protocols — every treatment plan is
                  personalised.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERTISE (CONDITIONS TREATED) */}
      <section className="expertise-sec">
        <div className="wrap">
          <div className="section-hd reveal">
            <h2>Conditions Treated</h2>
            <p>Cosmetic, dermatological &amp; metabolic expertise through homeopathy</p>
          </div>
          <div className="condition-grid">
            <div className="cond-card reveal">
              <div className="cond-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h3>Hair Fall</h3>
              <p>Constitutional treatment for diffuse thinning, seasonal loss, and stress-related alopecia.</p>
            </div>
            <div className="cond-card reveal d1">
              <div className="cond-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3>Baldness (Male &amp; Female)</h3>
              <p>Androgenic alopecia and pattern baldness addressed through hormonal and metabolic root causes.</p>
            </div>
            <div className="cond-card reveal d2">
              <div className="cond-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Eczema (Dry &amp; Wet)</h3>
              <p>Both dry and weeping eczema types, including hydrotic eczema — treated with deep constitutional remedies.</p>
            </div>
            <div className="cond-card reveal">
              <div className="cond-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
                </svg>
              </div>
              <h3>Psoriasis</h3>
              <p>Chronic autoimmune skin condition treated gently with long-term constitutional homeopathic management.</p>
            </div>
            <div className="cond-card reveal d1">
              <div className="cond-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3>Pimples / Acne</h3>
              <p>Hormonal and dietary root causes treated to eliminate recurring breakouts without harsh medication.</p>
            </div>
            <div className="cond-card reveal d2">
              <div className="cond-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 4a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 6zm4 10H8v-1a4 4 0 0 1 8 0z" />
                </svg>
              </div>
              <h3>Hormonal Pigmentation &amp; More</h3>
              <p>Melasma, Lichen Planus, Warts, and Obesity — comprehensive homeopathic management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TIMELINE (EDUCATION & EXPERIENCE) */}
      <section className="timeline-sec">
        <div className="wrap">
          <div className="section-hd reveal">
            <h2>Education &amp; Experience</h2>
          </div>
          <div className="timeline-grid">
            <div className="tl-col reveal">
              <h3>Education</h3>
              <div className="tl-items">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">BHMS</div>
                    <div className="tl-desc">
                      Graduate in Homoeopathy from Anand Homoeopathic Medical College &amp; Research Institute, affiliated to
                      Sardar Patel University, V V Nagar, Anand, Gujarat.
                    </div>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '36px' }}>Specialisation</h3>
              <div className="chips">
                <span className="chip">Skin &amp; Hair Expert</span>
                <span className="chip">Cosmetic Disorders</span>
                <span className="chip">Obesity Management</span>
                <span className="chip">Dermatological Homeopathy</span>
              </div>
            </div>
            <div className="tl-col reveal d1">
              <h3>Professional Experience</h3>
              <div className="tl-items">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">1992 – Present</div>
                    <div className="tl-desc">
                      Private Practice, Ahmedabad — Skin &amp; Hair Expert. Treating patients for 30+ years with classical
                      homeopathic protocols.
                    </div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">2000 – 2003</div>
                    <div className="tl-desc">
                      Visiting Physician at Shri Vaishnodevi Charitable Trust — Satellite &amp; Naranpura, Ahmedabad.
                    </div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">1994 – 2000</div>
                    <div className="tl-desc">
                      Visiting Homeopathic Physician at Kashiram Charitable Trust, Ambawadi, Ahmedabad.
                    </div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-year">1994 – 2000</div>
                    <div className="tl-desc">
                      Visiting Homeopathic Physician at B V Doshi Charitable Trust, Ahmedabad.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT STRIP */}
      <section className="contact-strip">
        <div className="wrap">
          <h2>Book a Consultation</h2>
          <p>Speciality Homeopathic Clinic · Vastrapur, Ahmedabad</p>
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
              A-205, A-206 Himalaya Arcade, Nehru Park, Vastrapur, Ahmedabad – 380015
            </div>
            <div className="c-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16a2 2 0 0 1 .5.92z" />
              </svg>
              +91-9898 00 5354
            </div>
            <div className="c-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              drkamal@specialityhomeopathy.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
