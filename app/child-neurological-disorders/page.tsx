import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Child Neurological Disorders Homeopathy Treatment & Care',
  description: "Dr. Ketan Patel,Ahmedabad,offers supportive care for children with developmental,genetic and neurological conditions,working alongside their medical team.",
};

const pageStyles = `:root{
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
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'Open Sans',system-ui,sans-serif;color:var(--graphite);background:var(--ivory);font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
  h1,h2,h3,h4{font-family:'Poppins',sans-serif;color:var(--blue);font-weight:600;line-height:1.16;letter-spacing:-.01em}
  a{color:inherit;text-decoration:none}
  img{max-width:100%;display:block}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 26px}
  .eyebrow{font-family:'Open Sans',sans-serif;font-weight:600;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal)}
  .lead{font-size:1.02rem;color:#555;max-width:60ch}

  /* buttons */
  .btn{display:inline-flex;align-items:center;gap:.5rem;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.78rem;padding:.68rem 1.2rem;border-radius:999px;cursor:pointer;border:1px solid transparent;transition:transform .35s var(--ease),box-shadow .35s,background .3s,color .3s;white-space:nowrap}
  .btn-primary{background:linear-gradient(135deg,#0096c7,#0a4a6e);color:#fff;box-shadow:0 8px 22px -10px rgba(0,100,180,.55)}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(0,100,180,.7)}
  .btn-ghost{background:rgba(255,255,255,.35);color:var(--blue);border-color:rgba(10,31,68,.3);backdrop-filter:blur(6px)}
  .btn-ghost:hover{background:rgba(255,255,255,.55);transform:translateY(-2px)}

  /* page hero — 100% full-width banner */
  .page-hero{position:relative;width:100%;margin:0;padding:0;overflow:hidden;background:#eef6fc}
  .hero-banner-full{width:100%;margin:0;padding:0}
  .hero-banner-full img{width:100%;height:auto;display:block}

  .honesty{display:inline-flex;align-items:center;gap:.55rem;font-size:.78rem;color:rgba(10,31,68,.88);background:rgba(255,255,255,.45);border:1px solid rgba(10,31,68,.2);padding:.45rem .8rem;border-radius:999px;margin-bottom:26px}
  .honesty svg{width:15px;height:15px;flex:0 0 auto;color:var(--teal)}
  .page-hero-cta{display:flex;gap:12px;flex-wrap:wrap}
  .breadcrumb{font-size:.76rem;color:rgba(10,31,68,.6);margin-bottom:14px;display:flex;gap:6px;align-items:center}
  .breadcrumb a{color:rgba(10,31,68,.6);transition:color .25s}
  .breadcrumb a:hover{color:var(--teal)}

  /* sections */
  .sec{padding:88px 0}
  .sec-head{max-width:700px;margin:0 auto 46px;text-align:center}
  .sec-head h2{font-size:clamp(1.6rem,2.8vw,2.25rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}

  /* SECTION 1 — types (pillar-style white cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;counter-reset:p}
  .type-card{position:relative;background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}

  /* SECTION 2 — neuro conditions (dark frosted cards) */
  .neuro{background:var(--blue);color:var(--ivory)}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .eyebrow{color:var(--gold)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .neuro-card{position:relative;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:28px 22px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .neuro-card:hover{transform:translateY(-7px) scale(1.012);border-color:rgba(255,255,255,.55);box-shadow:0 22px 52px -12px rgba(10,50,120,.4)}
  .neuro-card .nico{width:46px;height:46px;border-radius:13px;background:rgba(255,255,255,.12);display:grid;place-items:center;margin-bottom:16px;color:#BAE0F3}
  .neuro-card .nico svg{width:22px;height:22px}
  .neuro-card h4{color:#fff;font-size:1rem;margin-bottom:8px}
  .neuro-card p{font-size:.82rem;color:rgba(220,240,252,.85);line-height:1.6}

  /* SECTION 3 — behaviour (icon list cards) */
  .behaviour{background:#fff}
  .beh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  .beh-card{display:flex;align-items:flex-start;gap:18px;padding:22px 20px;border:1px solid var(--line);border-radius:16px;background:var(--ivory);box-shadow:0 10px 24px -16px rgba(10,31,68,.18);transition:transform .3s var(--ease),box-shadow .3s var(--ease)}
  .beh-card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(10,31,68,.25)}
  .beh-icon{width:48px;height:48px;border-radius:14px;background:var(--teal-10);display:grid;place-items:center;flex:0 0 auto;color:var(--teal);transition:transform .35s var(--ease)}
  .beh-card:hover .beh-icon{transform:scale(1.08) rotate(-3deg)}
  .beh-icon svg{width:22px;height:22px}
  .beh-card h4{font-size:1rem;margin-bottom:6px}
  .beh-card p{font-size:.85rem;color:#666;line-height:1.65;margin:0}
  .beh-grid .beh-card:last-child{grid-column:1 / -1;max-width:calc(50% - 8px)}

  /* CTA */
  .cta{position:relative;background:linear-gradient(145deg,#ceedf8 0%,#BAE0F3 45%,#a8d6ee 100%);color:var(--blue);text-align:center;padding:100px 0;overflow:hidden}
  .cta::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(255,255,255,.32),transparent 75%);pointer-events:none}
  .cta::after{content:"";position:absolute;top:0;left:15%;right:15%;height:1.5px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9) 40%,rgba(255,255,255,.9) 60%,transparent);pointer-events:none}
  .cta .wrap{position:relative;z-index:1;max-width:700px}
  .cta h2{color:var(--blue);font-size:clamp(1.7rem,3.2vw,2.4rem);margin-bottom:16px}
  .cta p{color:rgba(10,31,68,.78);max-width:52ch;margin:0 auto 30px;font-size:1rem}
  .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
  .cta .btn-ghost{background:rgba(255,255,255,.55);color:var(--blue);border-color:rgba(10,31,68,.25);backdrop-filter:blur(8px)}
  .cta .btn-ghost:hover{background:rgba(255,255,255,.75);transform:translateY(-2px)}
  .cta .eyebrow{color:var(--teal)}

  /* sticky */
  .sticky-actions{position:fixed;right:16px;bottom:16px;z-index:80;display:flex;flex-direction:column;gap:11px}
  .fab{display:flex;align-items:center;gap:9px;padding:12px 16px 12px 13px;border-radius:999px;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.8rem;box-shadow:var(--shadow);cursor:pointer;transition:transform .3s var(--ease)}
  .fab:hover{transform:translateY(-3px) scale(1.02)}
  .fab svg{width:19px;height:19px;flex:0 0 auto}
  .fab-wa{background:#25D366;color:#06351a}
  .fab-up{background:var(--gold);color:var(--blue)}

  /* ===== SHARED EXTRA COMPONENTS ===== */
  .narrative{background:#fff}
  .narrative.tint{background:linear-gradient(160deg,#f4f9fc 0%,#eef6fb 100%)}
  .info-block{max-width:760px;margin:0 auto;text-align:center}
  .info-block p{color:#555;font-size:.98rem;line-height:1.8;margin-bottom:16px}
  .info-block p:last-child{margin-bottom:0}

  /* pill grid */
  .pill-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
  .pill{display:inline-flex;align-items:center;gap:7px;font-family:'Open Sans',sans-serif;font-size:.82rem;font-weight:600;color:var(--blue);background:var(--blue-06);border:1px solid var(--line);padding:.55rem 1rem;border-radius:999px}
  .pill svg{width:13px;height:13px;color:var(--teal);flex:0 0 auto}

  /* check grid */
  .check-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 28px}
  .check-item{display:flex;align-items:flex-start;gap:10px;font-size:.9rem;color:#444;line-height:1.55}
  .check-item svg{width:17px;height:17px;flex:0 0 auto;color:var(--teal);margin-top:2px}

  /* split list */
  .split-list{display:grid;grid-template-columns:1fr 1fr;gap:36px}
  .split-list h4{font-size:1rem;margin-bottom:14px;display:flex;align-items:center;gap:9px}
  .split-list h4 .si{width:34px;height:34px;border-radius:10px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;flex:0 0 auto}
  .split-list h4 .si svg{width:16px;height:16px}
  .split-list ul{list-style:none}
  .split-list li{position:relative;padding-left:20px;margin-bottom:10px;font-size:.88rem;color:#555;line-height:1.6}
  .split-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:var(--gold)}

  /* ===== FEATURE CARDS ===== */
  .feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
  .feature-card{border-radius:26px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 16px 40px -18px rgba(20,50,90,.24);transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .feature-card:hover{transform:translateY(-8px);box-shadow:0 24px 54px -18px rgba(20,50,90,.32)}
  .feature-panel{position:relative;flex:1;display:flex;flex-direction:column;padding:30px 26px 28px;color:#fff}
  .feature-panel .fnum{position:absolute;top:20px;right:22px;font-weight:700;font-size:.78rem;letter-spacing:.1em;color:rgba(255,255,255,.55)}
  .feature-panel h3{color:#fff;font-size:1.12rem;margin-bottom:10px;padding-right:36px}
  .feature-panel p{color:rgba(255,255,255,.86);font-size:.85rem;line-height:1.65;margin-bottom:22px}
  .feature-tags{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
  .feature-tag{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.26);border-radius:12px;padding:9px 11px;font-family:'Open Sans',sans-serif;font-size:.72rem;font-weight:600;color:#fff;line-height:1.25}
  .feature-tag svg{width:14px;height:14px;flex:0 0 auto;color:#fff}
  .feature-panel.grad-a{background:linear-gradient(165deg,#0d9488,#0a1f44 85%)}
  .feature-panel.grad-b{background:linear-gradient(165deg,#0a4a6e,#0a1f44 85%)}
  .feature-panel.grad-c{background:linear-gradient(165deg,#0d9488,#0a1f44 85%)}

  /* ===== SPLIT PANEL ===== */
  .split-panel{background:linear-gradient(150deg,#071a35 0%,#0a1f44 55%,#0a2c56 100%);border-radius:30px;padding:58px;display:grid;grid-template-columns:1.15fr .85fr;gap:44px;align-items:center;color:#fff}
  .split-panel .eyebrow{color:var(--gold)}
  .split-panel h2{color:#fff}
  .split-panel .lead{color:rgba(250,248,244,.76);max-width:52ch}
  .split-panel .check-grid{margin-top:26px;grid-template-columns:1fr 1fr}
  .split-panel .check-item{color:rgba(255,255,255,.88)}
  .split-panel .check-item svg{color:var(--gold)}

  /* ===== DOMAIN GRID ===== */
  .domain-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;max-width:920px;margin:0 auto}
  .domain-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px 18px;text-align:center;box-shadow:0 10px 26px -18px rgba(10,31,68,.2);transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
  .domain-card:hover{transform:translateY(-6px);box-shadow:0 18px 34px -18px rgba(10,31,68,.28)}
  .domain-card .dico{width:52px;height:52px;border-radius:50%;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;margin:0 auto 14px}
  .domain-card .dico svg{width:23px;height:23px}
  .domain-card p{font-size:.85rem;font-weight:600;color:var(--blue);font-family:'Open Sans',sans-serif;line-height:1.4;margin:0}

  /* ===== SPLIT CARDS ===== */
  .split-cards{display:grid;grid-template-columns:1fr 1fr;gap:26px;max-width:940px;margin:0 auto}
  .sc-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:34px 30px;box-shadow:0 14px 34px -20px rgba(10,31,68,.22)}
  .sc-card .sci{width:50px;height:50px;border-radius:14px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;margin-bottom:18px}
  .sc-card .sci svg{width:23px;height:23px}
  .sc-card h4{font-size:1.05rem;margin-bottom:10px}
  .sc-card p{font-size:.9rem;color:#555;line-height:1.75;margin:0}

  /* ===== STEP GRID ===== */
  .step-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;max-width:960px;margin:0 auto}
  .step-card{position:relative;background:var(--ivory);border:1px solid var(--line);border-radius:18px;padding:26px 22px 24px;box-shadow:0 10px 26px -18px rgba(10,31,68,.2);transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
  .step-card:hover{transform:translateY(-6px);box-shadow:0 18px 34px -18px rgba(10,31,68,.28)}
  .step-card .snum{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:linear-gradient(150deg,var(--teal),var(--blue));color:#fff;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.85rem;margin-bottom:14px}
  .step-card p{font-size:.9rem;font-weight:600;color:var(--blue);font-family:'Open Sans',sans-serif;line-height:1.5;margin:0}

  @media(max-width:980px){
    .type-grid,.feature-grid{grid-template-columns:1fr}
    .neuro-grid{grid-template-columns:repeat(2,1fr)}
    .split-panel{grid-template-columns:1fr;padding:34px}
    .page-hero .wrap{grid-template-columns:1fr}
    .hero-visual{order:-1}
  }
  @media(max-width:680px){
    .neuro-grid,.split-list,.split-cards,.step-grid{grid-template-columns:1fr}
    .domain-grid{grid-template-columns:repeat(2,1fr)}
    .sec{padding:60px 0}
    .page-hero{padding:40px 0 54px}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
  }
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <HeroBannerImage src="/images/child-neurological-disorders/hero-banner.png" alt="Child Neurological Disorders — Comprehensive care for developmental, genetic & neurological conditions in children" />
        </div>
      </section>

      {/* CONDITIONS WE ADDRESS */}
      <section className="sec types" id="conditions-we-address">
        <div className="wrap">
          <div className="sec-head">
            <h2>A wide range of developmental &amp; neurological concerns</h2>
            <p className="lead">Every child&apos;s developmental needs are unique. Our approach begins with a detailed assessment before shaping an individualised care plan.</p>
          </div>
          <div className="feature-grid">

            <div className="feature-card">
              <img className="ph" src="https://static.wixstatic.com/media/66422a_bab58c37dd6b4386a19f14896f09ba8e~mv2.jpeg" alt="Developmental Delays" style={{ width: '100%', height: '220px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="feature-panel grad-a">
                <span className="fnum">01</span>
                <h3>Developmental Delays</h3>
                <p>Delays that show up across movement, speech or overall growth, identified through detailed developmental assessment.</p>
                <div className="feature-tags">
                  <span className="feature-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></svg>
                    Global Developmental Delay
                  </span>
                  <span className="feature-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z" /></svg>
                    Speech &amp; Language Delays
                  </span>
                  <span className="feature-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 5v6l4 2M5 20h14" /><circle cx="12" cy="12" r="9" /></svg>
                    Delayed Motor Milestones
                  </span>
                  <span className="feature-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" /></svg>
                    Learning Difficulties
                  </span>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <img className="ph" src="https://static.wixstatic.com/media/66422a_6802d725f4174441be65d8300c4da8bf~mv2.png" alt="Neurological & Movement Conditions" style={{ width: '100%', height: '220px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="feature-panel grad-b">
                <span className="fnum">02</span>
                <h3>Neurological &amp; Movement Conditions</h3>
                <p>Conditions affecting brain function, muscle control and movement, presenting differently in every child.</p>
                <div className="feature-tags">
                  <span className="feature-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="5" r="2" /><path d="M12 7v5l-4 8M12 12l4 8M7 13h10" /></svg>
                    Cerebral Palsy
                  </span>
                  <span className="feature-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9.5 2a5 5 0 0 1 5 5c0 2-1 3-1 5a5 5 0 0 1-10 0c0-2 1-3 1-5a5 5 0 0 1 5-5Z" transform="translate(1 1) scale(.9)" /></svg>
                    PVL
                  </span>
                  <span className="feature-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" /><circle cx="12" cy="7" r="2" /></svg>
                    Hypoxic-Ischemic Injury
                  </span>
                  <span className="feature-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h4l2-8 4 16 2-8h6" /></svg>
                    Seizure Disorders
                  </span>
                  <span className="feature-tag" style={{ gridColumn: '1/-1' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><circle cx="6" cy="7" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="6" cy="17" r="2" /><circle cx="18" cy="17" r="2" /></svg>
                    Autism Spectrum Disorder
                  </span>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <img className="ph" src="https://static.wixstatic.com/media/66422a_9709dc2845534d919cf97de08b51bd61~mv2.png" alt="Genetic & Structural Conditions" style={{ width: '100%', height: '220px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="feature-panel grad-c">
                <span className="fnum">03</span>
                <h3>Genetic, Metabolic &amp; Structural Conditions</h3>
                <p>Underlying genetic, metabolic or structural factors that may be identified through detailed medical evaluation.</p>
                <div className="feature-tags">
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 3c0 3 6 3 6 6s-6 3-6 6 6 3 6 6M15 3c0 3-6 3-6 6s6 3 6 6-6 3-6 6" /></svg>Genetic &amp; Chromosomal</span>
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2" /></svg>Metabolic Neuropathies</span>
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="7" y="7" width="10" height="10" rx="3" /><rect x="3" y="3" width="18" height="18" rx="6" /></svg>Mitochondrial Disorders</span>
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="7" /><path d="M12 9v6M12 5v.01" /></svg>Microcephaly</span>
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="10" r="6" /><path d="M12 16v5M9 21h6" /></svg>Hydrocephalus</span>
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M9 9v.01M15 9v.01M8 15c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5" /></svg>Macrocephaly</span>
                  <span className="feature-tag" style={{ gridColumn: '1/-1' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5a5 5 0 0 0 10 0c0-2 1-3 1-5a5 5 0 0 0-5-5Z" /><path d="M9 21h6M10 18h4" /></svg>Neurodegenerative</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UNDERSTANDING PEDIATRIC NEUROLOGICAL DISORDERS */}
      <section className="sec narrative" id="understanding">
        <div className="wrap">
          <div className="sec-head">
            <h2>How neurological conditions can present</h2>
          </div>
          <div className="info-block">
            <p>The brain and nervous system play an important role in a child&apos;s movement, communication, learning, behaviour and overall development. Neurological conditions may affect one or more areas of development and can present differently in every child.</p>
            <p>Some children may experience delays in sitting, standing, walking, speaking or understanding, while others may have difficulties with coordination, muscle control, learning, behaviour or social interaction.</p>
            <p>Early assessment and appropriate support can help identify a child&apos;s individual needs and guide a suitable developmental care plan.</p>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="sec neuro" id="causes">
        <div className="wrap">
          <div className="sec-head">
            <h2>Factors that may be associated with these conditions</h2>
            <p className="lead">Pediatric neurological conditions may be associated with several factors identified through detailed medical evaluation.</p>
          </div>
          <div className="feature-grid">

            <div className="feature-card">
              <img className="ph" src="https://static.wixstatic.com/media/66422a_ee4e9c67ba174163a776bdf34eed7453~mv2.png" alt="Injury & Oxygen-Related" style={{ width: '100%', height: '220px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="feature-panel grad-a">
                <span className="fnum">01</span>
                <h3>Injury &amp; Oxygen-Related</h3>
                <p>Factors relating to reduced oxygen supply or physical injury to the developing brain.</p>
                <div className="feature-tags">
                  <span className="feature-tag" style={{ gridColumn: '1/-1' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" /><circle cx="12" cy="7" r="2" /></svg>Hypoxic brain injury — reduced oxygen supply</span>
                  <span className="feature-tag" style={{ gridColumn: '1/-1' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" /></svg>Traumatic or mechanical brain injury</span>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <img className="ph" src="https://static.wixstatic.com/media/66422a_06fb64d02e994b9f9ca045b5647861cc~mv2.png" alt="Infections & Immune Factors" style={{ width: '100%', height: '220px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="feature-panel grad-b">
                <span className="fnum">02</span>
                <h3>Infections &amp; Immune Factors</h3>
                <p>Acquired conditions and external exposures that may affect neurological development.</p>
                <div className="feature-tags">
                  <span className="feature-tag" style={{ gridColumn: '1/-1' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M9 12h6M12 9v6" /></svg>Acquired or inherited infections</span>
                  <span className="feature-tag" style={{ gridColumn: '1/-1' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /><circle cx="12" cy="12" r="3" /></svg>Autoimmune conditions</span>
                  <span className="feature-tag" style={{ gridColumn: '1/-1' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" /><path d="M12 8v5M12 16v.01" /></svg>Exposure to toxins</span>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <img className="ph" src="https://static.wixstatic.com/media/66422a_e27b2c66ff7f4352b79ace3c836cc706~mv2.png" alt="Genetic & Metabolic Factors" style={{ width: '100%', height: '220px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="feature-panel grad-c">
                <span className="fnum">03</span>
                <h3>Genetic &amp; Metabolic Factors</h3>
                <p>Underlying developmental, genetic or metabolic factors identified through medical evaluation.</p>
                <div className="feature-tags">
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 3c0 3 6 3 6 6s-6 3-6 6 6 3 6 6M15 3c0 3-6 3-6 6s6 3 6 6-6 3-6 6" /></svg>Genetic conditions</span>
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5a5 5 0 0 0 10 0c0-2 1-3 1-5a5 5 0 0 0-5-5Z" /><path d="M9 21h6M10 18h4" /></svg>Neurodegenerative</span>
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="7" y="7" width="10" height="10" rx="3" /><rect x="3" y="3" width="18" height="18" rx="6" /></svg>Mitochondrial dysfunction</span>
                  <span className="feature-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>Metabolic disorders</span>
                  <span className="feature-tag" style={{ gridColumn: '1/-1' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="9" r="7" /><path d="M9 20h6M12 16v4" /></svg>Developmental abnormalities during pregnancy</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GLOBAL DEVELOPMENTAL DELAY */}
      <section className="sec narrative tint" id="gdd">
        <div className="wrap">
          <div className="sec-head">
            <h2>When delays appear across more than one area</h2>
            <p className="lead">Global Developmental Delay occurs when a child experiences delays in two or more areas of development. Every child develops differently — a detailed assessment helps understand strengths, challenges and individual support requirements.</p>
          </div>
          <div className="domain-grid">
            <div className="domain-card"><span className="dico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" /><circle cx="12" cy="7" r="2" /></svg></span><p>Gross &amp; fine motor skills</p></div>
            <div className="domain-card"><span className="dico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z" /></svg></span><p>Speech &amp; language development</p></div>
            <div className="domain-card"><span className="dico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="8" r="3" /><path d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1M16 4a3 3 0 0 1 0 6M22 21v-1a5 5 0 0 0-3.5-4.8" /></svg></span><p>Communication abilities</p></div>
            <div className="domain-card"><span className="dico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" /></svg></span><p>Learning &amp; cognitive skills</p></div>
            <div className="domain-card"><span className="dico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><circle cx="6" cy="7" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="6" cy="17" r="2" /><circle cx="18" cy="17" r="2" /></svg></span><p>Social interaction</p></div>
            <div className="domain-card"><span className="dico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" /></svg></span><p>Behaviour &amp; emotional development</p></div>
            <div className="domain-card" style={{ gridColumn: 'span 2' }}><span className="dico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18M8 15h2M14 15h2" /></svg></span><p>Daily living skills</p></div>
          </div>
        </div>
      </section>

      {/* MOTOR & SPEECH DELAYS */}
      <section className="sec narrative" id="motor-speech">
        <div className="wrap">
          <div className="sec-head">
            <h2>How delays can affect movement and communication</h2>
            <p className="lead">Motor and speech delays may affect a child&apos;s ability to move, coordinate, communicate and express needs. Individualized developmental support can help address the child&apos;s specific needs.</p>
          </div>
          <div className="split-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div>
              <h4>
                <span className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" /><circle cx="12" cy="7" r="2" /></svg>
                </span>
                Motor Delays
              </h4>
              <ul>
                <li>Head and neck control</li>
                <li>Sitting</li>
                <li>Crawling</li>
                <li>Standing</li>
                <li>Walking</li>
                <li>Balance and coordination</li>
              </ul>
            </div>
            <div>
              <h4>
                <span className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z" /></svg>
                </span>
                Speech &amp; Language Delays
              </h4>
              <ul>
                <li>Developing words and sentences</li>
                <li>Understanding language</li>
                <li>Expressing needs and emotions</li>
                <li>Verbal communication</li>
                <li>Social communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="sec types" id="approach">
        <div className="wrap">
          <div className="sec-head">
            <h2>Understanding your child, end to end</h2>
            <p className="lead">Our approach focuses on a detailed understanding of the child&apos;s medical history, developmental progress, neurological concerns and day-to-day challenges. Regular evaluation helps monitor progress and identify changing support needs.</p>
          </div>
          <div className="pill-grid">
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Cognitive development</span>
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Motor abilities</span>
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Speech and language development</span>
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Communication skills</span>
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Learning and understanding</span>
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Behavioural development</span>
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Social interaction</span>
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Daily functioning</span>
            <span className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Overall quality of life</span>
          </div>
        </div>
      </section>

      {/* ASSOCIATED CONCERNS */}
      <section className="sec" id="associated-concerns">
        <div className="wrap">
          <div className="split-panel">
            <div>
              <h2>Looking at the whole child, not one symptom</h2>
              <p className="lead">Children with neurological conditions may also experience associated concerns. A comprehensive care approach considers overall development rather than a single symptom.</p>
              <div className="check-grid">
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Muscle stiffness or spasticity</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Reduced muscle tone or flaccidity</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Swallowing difficulties</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Feeding concerns</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Hyperactivity</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Repetitive behaviour</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" stroke-linecap="round"><path d="M20 6 9 17l-5-5" /></svg>Learning difficulties</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Behavioural challenges</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Anxiety or emotional concerns</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Sleep-related difficulties</div>
              </div>
            </div>
            <img className="ph" src="https://static.wixstatic.com/media/66422a_568e2ef84ecd407592d778d54080eb84~mv2.png" alt="Child - associated developmental concerns" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '22px' }} loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* GENETIC & CHROMOSOMAL */}
      <section className="sec narrative tint" id="genetic">
        <div className="wrap">
          <div className="sec-head">
            <h2>Understanding the underlying condition</h2>
          </div>
          <div className="split-cards">
            <div className="sc-card">
              <span className="sci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 3c0 3 6 3 6 6s-6 3-6 6 6 3 6 6M15 3c0 3-6 3-6 6s6 3 6 6-6 3-6 6" /></svg></span>
              <h4>Detailed Genetic Evaluation</h4>
              <p>Some developmental and neurological conditions may be associated with genetic or chromosomal differences. A detailed evaluation may help understand the underlying condition and guide appropriate care and support.</p>
            </div>
            <div className="sc-card">
              <span className="sci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg></span>
              <h4>Assessment &amp; Counselling</h4>
              <p>Genetic assessment and counselling may be considered when required — helping families understand developmental concerns, associated conditions and available support options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY EARLY ASSESSMENT */}
      <section className="sec narrative" id="why-early">
        <div className="wrap">
          <div className="sec-head">
            <h2>The right support, at the right time</h2>
            <p className="lead">Early identification of developmental concerns can help families understand their child&apos;s needs and access appropriate support. A timely assessment may help:</p>
          </div>
          <div className="step-grid">
            <div className="step-card"><span className="snum">1</span><p>Monitor developmental milestones</p></div>
            <div className="step-card"><span className="snum">2</span><p>Identify areas requiring support</p></div>
            <div className="step-card"><span className="snum">3</span><p>Understand strengths and challenges</p></div>
            <div className="step-card"><span className="snum">4</span><p>Create an individualized plan</p></div>
            <div className="step-card"><span className="snum">5</span><p>Track progress over time</p></div>
            <div className="step-card"><span className="snum">6</span><p>Guide parents and caregivers</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2>Every child&apos;s developmental journey is unique.</h2>
          <p>A detailed evaluation can help identify individual needs and guide an appropriate care and support plan. Schedule a consultation to discuss your child&apos;s developmental and neurological concerns.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contactus">Book a Consultation</Link>
            <a className="btn btn-ghost" href="tel:+919898005354">Call +91 98980 05354</a>
            <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">WhatsApp our team</a>
          </div>
        </div>
      </section>

    </>
  );
}
