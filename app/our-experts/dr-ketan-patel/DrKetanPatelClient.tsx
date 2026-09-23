import React from 'react';

const doctorStyles = `
:root{
  --blue:#0A1F44;
  --teal:#008C8C;
  --gold:#C8A96B;
  --ivory:#FAF8F4;
  --graphite:#2E2E2E;
  --blue-06:rgba(10,31,68,.06);
  --teal-10:rgba(0,140,140,.10);
  --line:rgba(10,31,68,.10);
  --shadow:0 24px 60px -30px rgba(10,31,68,.34);
  --shadow-sm:0 12px 30px -20px rgba(10,31,68,.3);
  --maxw:1180px;
  --ease:cubic-bezier(.2,.7,.2,1);
}

.doc-page-container {
  font-family:'Open Sans',system-ui,sans-serif;
  color:var(--graphite);
  background:var(--ivory);
  font-size:16px;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

.doc-page-container h1,
.doc-page-container h2,
.doc-page-container h3,
.doc-page-container h4{
  font-family:'Poppins',sans-serif;
  color:var(--blue);
  font-weight:600;
  line-height:1.2;
  letter-spacing:-.01em;
}

.doc-page-container a{
  color:inherit;
  text-decoration:none;
}

.doc-page-container img{
  max-width:100%;
  display:block;
}

.doc-page-container .wrap{
  max-width:var(--maxw);
  margin:0 auto;
  padding:0 26px;
}

.doc-page-container .eyebrow{
  font-family:'Open Sans',sans-serif;
  font-weight:700;
  font-size:.68rem;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--teal);
}

/* ---- HERO BANNER — light sky blue matching Section 2 ---- */
.doc-page-container .doc-hero {
  min-height:72vh;
  background:#A9D6EE;
  display:flex;
  align-items:flex-end;
  padding:56px 0 0;
  position:relative;
  overflow:hidden;
}

.doc-page-container .doc-hero::before {
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(ellipse 80% 60% at 60% 100%,rgba(0,180,200,.18),transparent 70%),
             radial-gradient(ellipse 50% 80% at 90% 20%,rgba(255,255,255,.06),transparent);
  pointer-events:none;
}

.doc-page-container .hero-ring {
  position:absolute;
  border-radius:50%;
  border:1px solid rgba(255,255,255,.25);
  pointer-events:none;
}
.doc-page-container .ring1{width:500px;height:500px;right:-80px;top:-80px}
.doc-page-container .ring2{width:320px;height:320px;right:60px;top:40px}
.doc-page-container .ring3{width:160px;height:160px;right:160px;top:140px}

.doc-page-container .doc-hero .wrap{
  display:grid;
  grid-template-columns:1fr 380px;
  gap:0;
  align-items:flex-end;
  position:relative;
  z-index:2;
  width:100%;
}

.doc-page-container .hero-text-block{
  padding:0 0 64px;
}

.doc-page-container .doc-hero h1{
  font-family:'Poppins',sans-serif;
  font-weight:700;
  font-size:clamp(2.2rem,4.5vw,3.6rem);
  color:var(--blue);
  line-height:1.08;
  margin-bottom:8px;
}

.doc-page-container .doc-hero .quals{
  font-size:.88rem;
  font-weight:500;
  color:rgba(10,31,68,.75);
  letter-spacing:.06em;
  margin-bottom:28px;
}

.doc-page-container .hero-stats{
  display:flex;
  gap:36px;
  flex-wrap:wrap;
  border-top:1px solid rgba(10,31,68,.15);
  padding-top:28px;
}

.doc-page-container .hero-stat .num{
  font-family:'Poppins',sans-serif;
  font-weight:700;
  font-size:1.9rem;
  color:var(--blue);
  line-height:1;
}

.doc-page-container .hero-stat .lbl{
  font-size:.7rem;
  font-weight:600;
  color:rgba(10,31,68,.65);
  margin-top:5px;
  line-height:1.4;
  max-width:12ch;
}

.doc-page-container .hero-photo-wrap{
  align-self:flex-end;
  display:flex;
  justify-content:flex-end;
}

.doc-page-container .hero-photo-wrap img{
  width:340px;
  height:auto;
  object-fit:cover;
  filter:drop-shadow(-24px 0 40px rgba(0,0,0,.25));
  display:block;
}

/* About strip */
.doc-page-container .about-strip{
  padding:72px 0;
  background:#fff;
  border-bottom:1px solid var(--line);
}

.doc-page-container .about-strip .wrap{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
  align-items:start;
}

.doc-page-container .about-lead{
  font-size:1.05rem;
  color:#3a3a3a;
  line-height:1.78;
  margin-top:18px;
}

.doc-page-container .about-lead p+p{
  margin-top:16px;
}

.doc-page-container .side-highlights{
  display:flex;
  flex-direction:column;
  gap:18px;
  margin-top:10px;
}

.doc-page-container .highlight-pill{
  display:flex;
  align-items:flex-start;
  gap:14px;
  background:#fff;
  border-radius:16px;
  padding:18px 20px;
  border:1px solid rgba(10,31,68,.08);
  box-shadow:0 4px 18px -8px rgba(10,31,68,.08);
  transition:transform .3s var(--ease),box-shadow .3s;
}

.doc-page-container .highlight-pill:hover{
  transform:translateY(-2px);
  box-shadow:0 12px 30px -12px rgba(10,31,68,.13);
}

.doc-page-container .pill-icon{
  width:40px;
  height:40px;
  border-radius:12px;
  background:linear-gradient(135deg,#e6f7f8,#b8ecee);
  display:grid;
  place-items:center;
  flex:0 0 auto;
}

.doc-page-container .pill-icon svg{
  width:20px;
  height:20px;
  color:var(--teal);
}

.doc-page-container .pill-title{
  font-family:'Poppins',sans-serif;
  font-size:.92rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:3px;
}

.doc-page-container .pill-desc{
  font-size:.8rem;
  color:#666;
  line-height:1.5;
}

/* Expertise section */
.doc-page-container .expertise-sec{
  padding:72px 0;
  background:var(--ivory);
  border-bottom:1px solid var(--line);
}

.doc-page-container .section-hd{
  text-align:center;
  margin-bottom:52px;
}

.doc-page-container .section-hd h2{
  font-size:clamp(1.6rem,3vw,2.2rem);
}

.doc-page-container .section-hd p{
  font-size:.96rem;
  color:#666;
  margin-top:10px;
}

.doc-page-container .expertise-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:22px;
}

.doc-page-container .exp-card{
  border-radius:18px;
  padding:26px;
  border:1.5px solid rgba(10,31,68,.07);
  background:linear-gradient(145deg,#fff,#f6fbfb);
  box-shadow:0 4px 18px -8px rgba(10,31,68,.06);
  transition:border-color .3s,box-shadow .3s,transform .3s;
}

.doc-page-container .exp-card:hover{
  border-color:rgba(0,140,140,.3);
  box-shadow:0 12px 36px -12px rgba(0,140,140,.18);
  transform:translateY(-3px);
}

.doc-page-container .exp-card .icon-wrap{
  width:46px;
  height:46px;
  border-radius:14px;
  background:linear-gradient(135deg,#daf4f4,#a8e6e6);
  display:grid;
  place-items:center;
  margin-bottom:16px;
}

.doc-page-container .exp-card .icon-wrap svg{
  width:22px;
  height:22px;
  color:var(--teal);
}

.doc-page-container .exp-card h3{
  font-size:.95rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:8px;
  line-height:1.3;
}

.doc-page-container .exp-card p{
  font-size:.8rem;
  color:#666;
  line-height:1.6;
}

/* Timeline */
.doc-page-container .timeline-sec{
  padding:72px 0;
  background:#fff;
  border-bottom:1px solid var(--line);
}

.doc-page-container .timeline-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
}

.doc-page-container .tl-col h3{
  font-size:1.08rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:28px;
  padding-bottom:14px;
  border-bottom:2px solid var(--teal);
  display:inline-block;
}

.doc-page-container .tl-items{
  display:flex;
  flex-direction:column;
  gap:0;
}

.doc-page-container .tl-item{
  display:flex;
  gap:18px;
  position:relative;
  padding-bottom:24px;
}

.doc-page-container .tl-item:last-child{
  padding-bottom:0;
}

.doc-page-container .tl-item::before{
  content:"";
  position:absolute;
  left:9px;
  top:20px;
  bottom:0;
  width:1px;
  background:rgba(0,140,140,.2);
}

.doc-page-container .tl-item:last-child::before{
  display:none;
}

.doc-page-container .tl-dot{
  width:19px;
  height:19px;
  border-radius:50%;
  border:2px solid var(--teal);
  background:#fff;
  flex:0 0 auto;
  margin-top:2px;
  position:relative;
  z-index:1;
}

.doc-page-container .tl-year{
  font-size:.72rem;
  font-weight:700;
  color:var(--teal);
  letter-spacing:.08em;
  margin-bottom:3px;
}

.doc-page-container .tl-desc{
  font-size:.84rem;
  color:#555;
  line-height:1.55;
}

/* Membership chips */
.doc-page-container .chips{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:18px;
}

.doc-page-container .chip{
  background:#f0fafa;
  border:1px solid rgba(0,140,140,.22);
  border-radius:999px;
  padding:7px 16px;
  font-size:.78rem;
  font-weight:500;
  color:var(--teal);
  transition:all .25s;
}

.doc-page-container .chip:hover{
  background:var(--teal);
  color:#fff;
}

/* Publications */
.doc-page-container .pub-sec{
  padding:72px 0;
  background:linear-gradient(180deg,#f2fbfb,#fff);
  border-bottom:1px solid var(--line);
}

.doc-page-container .pub-list{
  display:flex;
  flex-direction:column;
  gap:16px;
  max-width:820px;
  margin:36px auto 0;
}

.doc-page-container .pub-item{
  background:#fff;
  border-radius:14px;
  padding:22px 26px;
  border-left:3px solid var(--teal);
  box-shadow:0 4px 18px -8px rgba(10,31,68,.07);
  transition:transform .25s,box-shadow .25s;
}

.doc-page-container .pub-item:hover{
  transform:translateX(4px);
  box-shadow:0 8px 24px -8px rgba(10,31,68,.12);
}

.doc-page-container .pub-item .pub-title{
  font-family:'Poppins',sans-serif;
  font-size:.95rem;
  font-weight:600;
  color:var(--blue);
  margin-bottom:5px;
}

.doc-page-container .pub-item .pub-meta{
  font-size:.78rem;
  color:#777;
}

/* Contact strip */
.doc-page-container .contact-strip{
  padding:72px 0;
  background:linear-gradient(135deg,#003d4a,#005a6e);
  text-align:center;
  color:#fff;
  border-bottom:2px solid #ffffff;
}

.doc-page-container .contact-strip h2{
  color:#fff;
  font-size:2rem;
  margin-bottom:10px;
}

.doc-page-container .contact-strip p{
  color:rgba(255,255,255,.78);
  font-size:.96rem;
  margin-bottom:32px;
}

.doc-page-container .btn-primary{
  background:linear-gradient(135deg,#009ba8,#007b8a) !important;
  color:#fff !important;
  box-shadow:0 8px 22px -10px rgba(0,155,168,.55) !important;
  display:inline-flex;
  align-items:center;
  gap:.5rem;
  font-family:'Open Sans',sans-serif;
  font-weight:600;
  font-size:.85rem;
  padding:.82rem 1.6rem;
  border-radius:999px;
  cursor:pointer;
  border:1px solid transparent;
  transition:transform .35s var(--ease),box-shadow .35s;
}

.doc-page-container .btn-primary:hover{
  transform:translateY(-2px);
  box-shadow:0 14px 30px -12px rgba(0,155,168,.7) !important;
}

.doc-page-container .contact-details{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:28px;
  margin-top:36px;
}

.doc-page-container .c-detail{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:.85rem;
  color:rgba(255,255,255,.85);
}

.doc-page-container .c-detail svg{
  width:18px;
  height:18px;
  color:#4dd9e0;
  flex:0 0 auto;
}

/* Reveal anims */
.doc-page-container .reveal{
  opacity:0;
  transform:translateY(24px);
  transition:opacity .7s var(--ease),transform .7s var(--ease);
}

.doc-page-container .reveal.in{
  opacity:1;
  transform:none;
}

.doc-page-container .d1{transition-delay:.1s}
.doc-page-container .d2{transition-delay:.2s}
.doc-page-container .d3{transition-delay:.3s}

/* Responsive */
@media(max-width:960px){
  .doc-page-container .doc-hero .wrap{
    grid-template-columns:1fr;
    padding-bottom:48px;
  }
  .doc-page-container .hero-photo-wrap{
    justify-content:center;
    margin-top:24px;
  }
  .doc-page-container .hero-photo-wrap img{
    width:260px;
  }
  .doc-page-container .about-strip .wrap{
    grid-template-columns:1fr;
  }
  .doc-page-container .expertise-grid{
    grid-template-columns:repeat(2,1fr);
  }
  .doc-page-container .timeline-grid{
    grid-template-columns:1fr;
  }
}

@media(max-width:680px){
  .doc-page-container .doc-hero{
    padding:40px 0 0;
  }
  .doc-page-container .doc-hero h1{
    font-size:2rem !important;
  }
  .doc-page-container .doc-hero .quals{
    font-size:.8rem;
  }
  .doc-page-container .hero-stats{
    gap:16px 24px !important;
  }
  .doc-page-container .hero-stat .num{
    font-size:1.5rem !important;
  }
  .doc-page-container .expertise-grid{
    grid-template-columns:1fr !important;
  }
  .doc-page-container .contact-details{
    flex-direction:column;
    align-items:center;
    gap:16px;
  }
}
`;

export default function DrKetanPatelClient() {
  return (
    <div className="doc-page-container">
      <style dangerouslySetInnerHTML={{ __html: doctorStyles }} />

      {/* SECTION 2 - DOCTOR HERO */}
      <section className="doc-hero">
        <span className="hero-ring ring1" />
        <span className="hero-ring ring2" />
        <span className="hero-ring ring3" />
        <div className="wrap">
          <div className="hero-text-block">
            <h1>Dr. Ketan Patel</h1>
            <p className="quals">BHMS, BCJP, MD · 34+ Years of Clinical Experience</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">12,000+</div>
                <div className="lbl">Children Treated</div>
              </div>
              <div className="hero-stat">
                <div className="num">35+</div>
                <div className="lbl">Countries</div>
              </div>
              <div className="hero-stat">
                <div className="num">700+</div>
                <div className="lbl">Exome Reports Studied</div>
              </div>
              <div className="hero-stat">
                <div className="num">100+</div>
                <div className="lbl">Doctors Trained</div>
              </div>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img src="https://static.wixstatic.com/media/66422a_bfb5e19de98c43c98637f48aacbc46c6~mv2.png"
              alt="Dr. Ketan Patel" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* SECTION 3 - ABOUT DR. KETAN PATEL */}
      <section className="about-strip">
        <div className="wrap">
          <div>
            <h2 className="reveal d1" style={{ marginTop: '10px', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              A compassionate pioneer in <br />pediatric homeopathic care
            </h2>
            <div className="about-lead reveal d2">
              <p>
                Dr. Ketan Patel is a respected homeopathic physician with more than 34 years of experience, known for his work in Autism Spectrum Disorder (ASD) and a wide range of pediatric neurological and genetic conditions. Over the years, he has treated more than 12,000 children from across 35 countries, giving families noticeable results where conventional treatments had fallen short.
              </p>
              <p>
                Dr. Patel&apos;s approach is unique because of its simplicity and compassion. He prescribes only two or three supplements that are truly needed and introduces therapy only when the child&apos;s brain is ready to benefit. His focus is on first addressing the underlying disorder, guiding parents in their role, and helping children build a natural foundation for intelligence, emotional balance, and social growth.
              </p>
              <p>
                One of his unique strengths lies in his ability to identify underlying genetic, metabolic, and mitochondrial conditions that often mimic or overlap with autism. He has personally studied over 700+ whole exome sequencing reports — the highest by a single practitioner — and is a pioneer in genetic variant-based homeopathic treatment.
              </p>
            </div>
          </div>
          <div className="side-highlights reveal d2">
            <div className="highlight-pill">
              <div className="pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4M9 3h6m-6 0v4M15 3h4a2 2 0 0 1 2 2v4M15 3v4M3 9v6a2 2 0 0 0 2 2h4M3 15v4m0 0h4m0 0h6m0-4h4a2 2 0 0 0 2-2v-4m0 10h-4" />
                </svg>
              </div>
              <div>
                <div className="pill-title">700+ Exome Reports</div>
                <div className="pill-desc">Highest by a single practitioner — enabling hidden pathology detection and personalised treatment.</div>
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
                <div className="pill-title">25 Years of City Visits</div>
                <div className="pill-desc">Regularly visits Mumbai, Delhi, Chennai, Kolkata, Hyderabad &amp; more — making care accessible nationwide.</div>
              </div>
            </div>
            <div className="highlight-pill">
              <div className="pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="pill-title">6 International Publications</div>
                <div className="pill-desc">Published in Springer Nature&apos;s BMC Genetics &amp; BMC Neurology with more in pipeline.</div>
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
                <div className="pill-title">100+ Doctors Trained</div>
                <div className="pill-desc">Worldwide training in specialised treatment and management of autism and related disorders.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - MEDICAL EXPERTISE */}
      <section className="expertise-sec">
        <div className="wrap">
          <div className="section-hd reveal">
            <h2>Conditions Treated</h2>
            <p>Comprehensive care across pediatric neurology, genetics, and beyond</p>
          </div>
          <div className="expertise-grid">
            <div className="exp-card reveal">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.04-3.04A2.5 2.5 0 0 1 5 13.5a2.5 2.5 0 0 1-1.5-4.5 2.5 2.5 0 0 1 6-6.5z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.04-3.04A2.5 2.5 0 0 0 19 13.5a2.5 2.5 0 0 0 1.5-4.5 2.5 2.5 0 0 0-6-6.5z" />
                </svg>
              </div>
              <h3>Autism Spectrum Disorder (ASD)</h3>
              <p>Including Asperger&apos;s Syndrome, Childhood Disintegrative Disorder, Rett Syndrome — with genetic variant analysis (VUS, Likely Pathogenic &amp; Pathogenic).</p>
            </div>
            <div className="exp-card reveal d1">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3>ADD / ADHD</h3>
              <p>Attention Deficit Disorder and Hyperactivity, addressed through root neurological pathways with targeted, minimal supplementation.</p>
            </div>
            <div className="exp-card reveal d2">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                </svg>
              </div>
              <h3>Rare Genetic Disorders</h3>
              <p>Prader-Willi Syndrome, Angelman Syndrome, Cornelia de Lange Syndrome, Tuberous Sclerosis, and other uncommon genetic conditions.</p>
            </div>
            <div className="exp-card reveal">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Mitochondrial &amp; Metabolic</h3>
              <p>Mitochondrial dysfunctions, metabolic disorders overlapping with autism — identified and treated through specialised protocol.</p>
            </div>
            <div className="exp-card reveal d1">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Neurological Conditions</h3>
              <p>Cerebral Palsy, Spastic Diplegia, Spina Bifida, Chiari Malformation, Epilepsy, Intellectual Disabilities, Neurodegenerative Disorders.</p>
            </div>
            <div className="exp-card reveal d2">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </div>
              <h3>Learning &amp; Behavioural</h3>
              <p>Dyslexia, Dyscalculia, Dysgraphia, Separation Anxiety, Mood Disorders, OCD, Tics Disorder, Bipolar Disorder, Depression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - BACKGROUND / TIMELINE */}
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
                  <div className="tl-body">
                    <div className="tl-year">BHMS</div>
                    <div className="tl-desc">Graduate in Homoeopathy from Anand Homoeopathic Medical College &amp; Research Institute, affiliated to Sardar Patel University, V V Nagar, Anand, Gujarat.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-year">MD (Post Graduation)</div>
                    <div className="tl-desc">Post Graduation from International Open University Of Alternative Medicine. Dissertations in Neuropsychiatry Disorder, Respiratory tract disorder &amp; Alternative Treatment.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-year">Post Graduation — Communication</div>
                    <div className="tl-desc">Post Graduation in Communication from Gujarat University, Ahmedabad, India.</div>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '36px' }}>Memberships</h3>
              <div className="chips">
                <span className="chip">Asian Homeopathic Medical League (AHML)</span>
                <span className="chip">HMAI Gujarat State Branch</span>
                <span className="chip">President — Gujarat Homoeopathic Foundation</span>
                <span className="chip">Board for Student Welfare, Gujarat University</span>
              </div>
            </div>
            <div className="tl-col reveal d1">
              <h3>Professional Experience</h3>
              <div className="tl-items">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-year">1992 – Present</div>
                    <div className="tl-desc">Private Practice, Ahmedabad. Panel Doctor, ONGC Ltd. Examiner, Council For Homoeopathic System Of Medicine, Gujarat State.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-year">1992 – 1999</div>
                    <div className="tl-desc">Visiting Homeopathic Physician, B V Doshi Charitable Trust, Ahmedabad.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-year">1996 – 1998</div>
                    <div className="tl-desc">Visiting Homeopathic Physician, IFFCO Kalol.</div>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '36px' }}>Conferences</h3>
              <div className="chips">
                <span className="chip">MAPS 2023</span>
                <span className="chip">Autism One 2018</span>
                <span className="chip">AHML 2006 — Dubai</span>
                <span className="chip">LIGA Conference, Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - RESEARCH & PUBLICATIONS */}
      <section className="pub-sec">
        <div className="wrap">
          <div className="section-hd reveal">
            <h2>International Publications</h2>
            <p>Published in globally renowned journals in the fields of genetics and neurology</p>
          </div>
          <div className="pub-list">
            <div className="pub-item reveal">
              <div className="pub-title">Genetic Variant-Based Treatment in Pediatric Autism</div>
              <div className="pub-meta">Springer Nature · BioMed Central BMC — Genetics</div>
            </div>
            <div className="pub-item reveal d1">
              <div className="pub-title">Neurological Disorders in Children — Homeopathic Perspectives</div>
              <div className="pub-meta">Springer Nature · BioMed Central BMC — Neurology</div>
            </div>
            <div className="pub-item reveal d2">
              <div className="pub-title">Metabolic &amp; Mitochondrial Factors in Autism Spectrum Disorder</div>
              <div className="pub-meta">International Journal of Integrative Medicine</div>
            </div>
            <div className="pub-item reveal">
              <div className="pub-title">Whole Exome Sequencing in Autism — A Practitioner&apos;s Analysis</div>
              <div className="pub-meta">Global Pediatric Neurology Review</div>
            </div>
            <div className="pub-item reveal d1">
              <div className="pub-title">Rare Genetic Syndromes in Children: Case Series</div>
              <div className="pub-meta">BMC Genetics</div>
            </div>
            <div className="pub-item reveal d2">
              <div className="pub-title">Homeopathic Management of Prader-Willi Syndrome</div>
              <div className="pub-meta">Journal of Alternative &amp; Complementary Medicine</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - CONTACT / BOOK CONSULTATION */}
      <section className="contact-strip">
        <div className="wrap">
          <h2>Book a Consultation</h2>
          <p>Clinic in Ahmedabad · City visits across India · Teleconsultation available</p>
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
              drketan@specialityhomeopathy.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
