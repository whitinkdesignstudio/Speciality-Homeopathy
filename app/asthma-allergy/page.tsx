import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: "Asthma & Allergy Treatment | Speciality Homeopathy — Dr. Ketan Patel",
  description: "Learn about asthma and allergies, including symptoms, causes, triggers and diagnosis, with supportive care from Dr. Ketan Patel, Ahmedabad.",
};

const pageStyles = `:root{
    --blue:#0A1F44;--teal:#008C8C;--gold:#C8A96B;--ivory:#FAF8F4;--graphite:#2E2E2E;
    --blue-06:rgba(10,31,68,.06);--teal-10:rgba(0,140,140,.10);--line:rgba(10,31,68,.10);
    --shadow:0 24px 60px -30px rgba(10,31,68,.34);--shadow-sm:0 12px 30px -20px rgba(10,31,68,.3);
    --maxw:1180px;--ease:cubic-bezier(.2,.7,.2,1);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'Open Sans',system-ui,sans-serif;color:var(--graphite);background:var(--ivory);font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
  h1,h2,h3,h4,h5{font-family:'Poppins',sans-serif;color:var(--blue);font-weight:600;line-height:1.16;letter-spacing:-.01em}
  a{color:inherit;text-decoration:none}
  img{max-width:100%;display:block}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 26px}
  .eyebrow{font-family:'Open Sans',sans-serif;font-weight:600;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal)}
  .lead{font-size:1.02rem;color:#555;max-width:60ch}

  .btn{display:inline-flex;align-items:center;gap:.5rem;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.78rem;padding:.68rem 1.2rem;border-radius:999px;cursor:pointer;border:1px solid transparent;transition:transform .35s var(--ease),box-shadow .35s,background .3s,color .3s;white-space:nowrap}
  .btn-primary{background:linear-gradient(135deg,#0096c7,#0a4a6e);color:#fff;box-shadow:0 8px 22px -10px rgba(0,100,180,.55)}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(0,100,180,.7)}
  .btn-ghost{background:rgba(255,255,255,.35);color:var(--blue);border-color:rgba(10,31,68,.3);backdrop-filter:blur(6px)}
  .btn-ghost:hover{background:rgba(255,255,255,.55);transform:translateY(-2px)}

  /* page hero — 100% full-width banner */
  .page-hero{position:relative;width:100%;margin:0;padding:0;overflow:hidden;background:#eef6fc}
  .hero-banner-full{width:100%;margin:0;padding:0}
  .hero-banner-full img{width:100%;height:auto;display:block}

  .sec{padding:82px 0}
  .sec-head{max-width:700px;margin:0 auto 40px;text-align:center}
  .sec-head.left{text-align:left;margin:0 0 34px;max-width:760px}
  .sec-head h2{font-size:clamp(1.5rem,2.6vw,2.1rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}
  .sec-head.left .lead{margin:0}
  .reveal{opacity:1;transform:none}
  .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}

  .tint{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}

  /* glance / dark facts strip */
  .glance{background:var(--blue);color:var(--ivory)}
  .glance .sec-head h2{color:var(--ivory)}
  .glance .eyebrow{color:var(--gold)}
  .glance .lead{color:rgba(250,248,244,.8)}
  .glance-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .glance-card{position:relative;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:18px;padding:24px 22px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .glance-card:hover{transform:translateY(-6px) scale(1.012);border-color:rgba(255,255,255,.55)}
  .glance-card .nico{width:42px;height:42px;border-radius:12px;background:rgba(255,255,255,.12);display:grid;place-items:center;margin-bottom:14px;color:#BAE0F3}
  .glance-card .nico svg{width:20px;height:20px}
  .glance-card h4{color:#fff;font-size:.95rem;margin-bottom:6px}
  .glance-card p{font-size:.8rem;color:rgba(220,240,252,.85);line-height:1.55}

  /* prose */
  .prose{font-size:.95rem;color:#444;line-height:1.8;max-width:78ch;margin-bottom:16px}
  .prose:last-child{margin-bottom:0}

  /* checklist grids */
  .check-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px 30px}
  .check-grid.cols-1{grid-template-columns:1fr}
  .check-item{display:flex;gap:10px;align-items:flex-start;font-size:.88rem;color:#444;padding:6px 0}
  .check-item svg{width:16px;height:16px;color:var(--teal);flex:0 0 auto;margin-top:3px}
  .tint .check-item svg,.tint .list-card .check-item svg{color:#0a6d6d}

  /* card containing a list */
  .list-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px 28px;box-shadow:var(--shadow-sm)}
  .list-card h4{font-size:1.02rem;margin-bottom:14px}

  /* mini card grid (triggers) */
  .mini-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
  .mini-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px 20px;box-shadow:var(--shadow-sm);transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
  .mini-card:hover{transform:translateY(-5px);box-shadow:0 18px 34px -18px rgba(20,50,90,.25)}
  .mini-card .mico{width:38px;height:38px;border-radius:11px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;margin-bottom:12px}
  .mini-card .mico svg{width:18px;height:18px}
  .mini-card h5{font-size:.9rem;margin-bottom:6px}
  .mini-card p{font-size:.8rem;color:#666;line-height:1.6}

  /* 2-col type card reused for asthma types */
  .type-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
  .type-card{position:relative;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);padding:30px 30px;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-7px) scale(1.012);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .pico{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;margin-bottom:16px;background:var(--teal-10);color:var(--teal)}
  .pico svg{width:22px;height:22px}
  .type-card h3{font-size:1.05rem;margin-bottom:10px}
  .type-card p{font-size:.88rem;color:#555;line-height:1.7}

  /* callouts */
  .callout{background:var(--teal-10);border-left:4px solid var(--teal);border-radius:12px;padding:22px 26px;font-size:.9rem;color:#333;line-height:1.75}
  .callout.warn{background:rgba(200,169,107,.14);border-left-color:var(--gold)}
  .callout h4{color:var(--blue);margin-bottom:8px;font-size:1rem}

  .block-gap{margin-bottom:38px}
  .block-gap:last-child{margin-bottom:0}

  /* steps (attack sequence) */
  .step-list{list-style:none;counter-reset:s}
  .step-list li{counter-increment:s;display:flex;gap:14px;padding:10px 0;font-size:.9rem;color:#444;align-items:flex-start}
  .step-list li::before{content:counter(s);flex:0 0 auto;width:26px;height:26px;border-radius:50%;background:var(--teal);color:#fff;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.75rem;display:grid;place-items:center;margin-top:1px}

  .cta{position:relative;background:linear-gradient(145deg,#ceedf8 0%,#BAE0F3 45%,#a8d6ee 100%);color:var(--blue);text-align:center;padding:96px 0;overflow:hidden}
  .cta::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(255,255,255,.32),transparent 75%);pointer-events:none}
  .cta::after{content:"";position:absolute;top:0;left:15%;right:15%;height:1.5px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9) 40%,rgba(255,255,255,.9) 60%,transparent);pointer-events:none}
  .cta .wrap{position:relative;z-index:1;max-width:700px}
  .cta h2{color:var(--blue);font-size:clamp(1.7rem,3.2vw,2.4rem);margin-bottom:16px}
  .cta p{color:rgba(10,31,68,.78);max-width:52ch;margin:0 auto 30px;font-size:1rem}
  .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
  .cta .btn-ghost{background:rgba(255,255,255,.55);color:var(--blue);border-color:rgba(10,31,68,.25);backdrop-filter:blur(8px)}
  .cta .btn-ghost:hover{background:rgba(255,255,255,.75);transform:translateY(-2px)}

  .sticky-actions{position:fixed;right:16px;bottom:16px;z-index:80;display:flex;flex-direction:column;gap:11px}
  .fab{display:flex;align-items:center;gap:9px;padding:12px 16px 12px 13px;border-radius:999px;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.8rem;box-shadow:var(--shadow);cursor:pointer;transition:transform .3s var(--ease)}
  .fab:hover{transform:translateY(-3px) scale(1.02)}
  .fab svg{width:19px;height:19px;flex:0 0 auto}
  .fab-wa{background:#25D366;color:#06351a}
  .fab-up{background:var(--gold);color:var(--blue)}

  @media(max-width:980px){
    .glance-grid{grid-template-columns:repeat(2,1fr)}
    .mini-grid{grid-template-columns:repeat(2,1fr)}
    .type-grid{grid-template-columns:1fr}
    .check-grid{grid-template-columns:1fr}
  }
  @media(max-width:680px){
    .glance-grid{grid-template-columns:1fr}
    .mini-grid{grid-template-columns:1fr}
    .sec{padding:56px 0}
    .page-hero{padding:0}
    .list-card{padding:22px 20px}
    .type-card{padding:26px 22px}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
  }
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}

  /* ---------- IMAGE PLACEHOLDER ---------- */
  .media-ph{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;background:repeating-linear-gradient(135deg,rgba(10,31,68,.045) 0 14px,rgba(10,31,68,.02) 14px 28px);border:1.5px dashed rgba(10,31,68,.28);border-radius:22px;color:rgba(10,31,68,.55);padding:22px;width:100%;height:100%;min-height:220px}
  .media-ph svg{width:34px;height:34px;color:rgba(10,31,68,.35)}
  .media-ph span{font-family:'Open Sans',sans-serif;font-weight:600;font-size:.72rem;letter-spacing:.02em;max-width:22ch;line-height:1.5}
  .media-ph small{display:block;font-weight:400;font-size:.68rem;color:rgba(10,31,68,.4);margin-top:2px}
  .glance .media-ph{background:repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 14px,rgba(255,255,255,.02) 14px 28px);border-color:rgba(255,255,255,.35);color:rgba(250,248,244,.7)}
  .glance .media-ph svg{color:rgba(250,248,244,.55)}
  .glance .media-ph small{color:rgba(250,248,244,.5)}

  /* a real photo replaces the dashed/padded placeholder look and fills its frame fully */
  img.media-ph{padding:0;border:none;background:none;object-fit:cover}

  /* ---------- GLANCE DECOR ---------- */
  .glance-frame{position:relative}
  .glance-card{margin-top:22px}
  .glance-card:first-child,.glance-card:last-child{margin-top:56px}
  .baby-decor{position:absolute;top:-56px;left:50%;transform:translateX(-50%);width:84px;height:84px;border-radius:50%;overflow:hidden;z-index:3;box-shadow:0 10px 26px -8px rgba(0,0,0,.35)}
  .baby-decor .media-ph{border-radius:50%;min-height:0;padding:6px;background:repeating-linear-gradient(135deg,rgba(255,255,255,.1) 0 10px,rgba(255,255,255,.03) 10px 20px)}
  .baby-decor img.media-ph{padding:0}
  .baby-decor .media-ph span{display:none}
  .baby-decor .media-ph svg{width:24px;height:24px}
  @media(max-width:980px){.baby-decor{display:none}.glance-card:first-child,.glance-card:last-child{margin-top:22px}}
  .glance-card::before{content:"";position:absolute;top:-20px;left:50%;transform:translateX(-50%);width:0;height:16px;border-left:1.5px dashed rgba(255,255,255,.45)}
  .glance-card::after{content:"";position:absolute;top:-28px;left:50%;transform:translateX(-50%);width:9px;height:9px;border-radius:50%;border:1.5px solid rgba(255,255,255,.55);background:rgba(255,255,255,.12)}
  .glance-card:first-child::before,.glance-card:first-child::after,.glance-card:last-child::before,.glance-card:last-child::after{display:none}

  /* ---------- UNDERSTANDING SPLIT + SYMPTOM PANEL ---------- */
  .understand-split{display:flex;gap:0;align-items:stretch;margin-bottom:34px}
  .understand-text{flex:1;min-width:0;padding-right:44px}
  .understand-media{flex:0 0 46%;margin:0 -26px 0 0}
  .understand-media .media-ph{border-radius:26px 0 0 26px;min-height:0;height:100%;width:100%}
  .text-row{display:flex;gap:14px;margin-bottom:18px}
  .text-row .ico{flex:0 0 auto;width:38px;height:38px;border-radius:11px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center}
  .text-row .ico svg{width:18px;height:18px}
  .text-row p{margin:0}
  @media(max-width:900px){.understand-split{flex-direction:column;gap:28px}.understand-text{padding-right:0}.understand-media{position:static;flex:0 0 auto;width:100%;max-width:none;margin:0;aspect-ratio:4/3}.understand-media .media-ph{border-radius:22px}}

  .symptom-panel{background:#fff;border:1px solid var(--line);border-radius:22px;padding:28px 30px;box-shadow:var(--shadow-sm)}
  .symptom-head{display:flex;align-items:center;gap:12px;margin-bottom:24px}
  .symptom-head .badge{display:flex;align-items:center;gap:8px;background:var(--blue);color:#fff;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.74rem;letter-spacing:.03em;padding:9px 16px;border-radius:999px}
  .symptom-head .badge svg{width:15px;height:15px}
  .symptom-head .rule{flex:1;height:1px;background:linear-gradient(90deg,var(--line),transparent)}
  .symptom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px 24px}
  .symptom-item{display:flex;gap:13px}
  .symptom-item .sico{flex:0 0 auto;width:42px;height:42px;border-radius:50%;background:var(--teal-10);color:var(--teal);display:grid;place-items:center}
  .symptom-item .sico svg{width:19px;height:19px}
  .symptom-item h5{font-size:.86rem;margin-bottom:5px;line-height:1.3}
  .symptom-item p{font-size:.79rem;color:#666;line-height:1.55;margin:0}
  @media(max-width:900px){.symptom-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:560px){.symptom-grid{grid-template-columns:1fr}}

  /* ---------- DIAGNOSIS SPLIT ---------- */
  .diag-split{display:flex;gap:0;align-items:stretch;margin-bottom:36px}
  .diag-text{flex:1;min-width:0;padding-right:44px;display:flex;flex-direction:column;justify-content:center}
  .diag-media{flex:0 0 44%;margin:0 -26px 0 0;aspect-ratio:auto}
  .diag-media .media-ph{border-radius:26px 0 0 26px;min-height:0;height:100%;width:100%}
  @media(max-width:900px){.diag-split{flex-direction:column;gap:28px}.diag-text{padding-right:0}.diag-media{flex:0 0 auto;width:100%;max-width:none;margin:0;aspect-ratio:16/10}.diag-media .media-ph{border-radius:22px}}

  /* ---------- PREVENTION SPLIT + BANNER ---------- */
  .prevent-split{display:flex;gap:40px;align-items:flex-start;margin-bottom:26px}
  .prevent-media{flex:0 0 30%;position:relative;display:flex;flex-direction:column;align-items:center;min-height:420px;justify-content:flex-end;padding-top:40px}
  .prevent-media .media-ph{aspect-ratio:3/4.6;border-radius:24px;min-height:0;width:78%;position:relative;z-index:2}
  .prevent-media .accent-ring{position:absolute;top:6%;left:-10%;width:78%;height:78%;border-radius:50%;background:radial-gradient(circle,rgba(0,140,140,.16),transparent 70%);z-index:0}
  .prevent-podium{width:88%;height:34px;border-radius:50%;background:linear-gradient(180deg,#fff,#eef1f4);box-shadow:0 14px 30px -10px rgba(10,31,68,.18);position:relative;z-index:1;margin-top:-14px}
  .prevent-cards{flex:1;min-width:0;display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
  @media(max-width:980px){.prevent-split{flex-direction:column}.prevent-media{width:100%;max-width:320px;margin:0 auto}}
  @media(max-width:640px){.prevent-cards{grid-template-columns:1fr}}
`;

export default function AsthmaAllergyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO BANNER */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <img src="/images/asthma-allergy/hero-banner.png" alt="Asthma &amp; Allergy Treatment Hero Banner" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="sec glance">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What asthma involves</h2>
          </div>
          <div className="glance-grid">
            <div className="glance-card reveal d1">
              <div className="baby-decor">
                <img className="media-ph" src="/images/asthma-allergy/baby-decor.png" alt="Child breathing easily" style={{ objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div className="nico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18c-2 0-4-1.6-4-4a4 4 0 0 1 3.2-3.9A5 5 0 0 1 15 8.5 4.5 4.5 0 0 1 19 13c0 2.5-2 5-4.5 5H6Z" />
                </svg>
              </div>
              <h4>Chronic Airway Condition</h4>
              <p>A long-term inflammatory disease of the lungs affecting the airways.</p>
            </div>
            <div className="glance-card reveal d2">
              <div className="nico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 2 22h20L12 2Z" />
                  <path d="M12 10v5M12 18h.01" />
                </svg>
              </div>
              <h4>Trigger-Sensitive</h4>
              <p>Airways react to allergens, infections, weather, exercise and stress.</p>
            </div>
            <div className="glance-card reveal d3">
              <div className="nico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
                </svg>
              </div>
              <h4>Affects All Ages</h4>
              <p>Can range from mild to severe, in both children and adults.</p>
            </div>
            <div className="glance-card reveal d1">
              <div className="baby-decor">
                <img className="media-ph" src="/images/asthma-allergy/baby-decor.png" alt="Person managing asthma well" style={{ objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div className="nico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h4>Manageable</h4>
              <p>With proper diagnosis and lifestyle care, most people stay active and well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ASTHMA + SYMPTOMS */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <h2>What is asthma, and how does it feel?</h2>
          </div>
          <div className="understand-split">
            <div className="understand-text">
              <div className="text-row">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h6M14 8h6M14 16h4" />
                  </svg>
                </div>
                <p className="prose">
                  Normally, air travels through the nose or mouth into the trachea, then through the bronchi and bronchioles before reaching the alveoli, where oxygen exchange takes place. In people with asthma, these air passages become overly sensitive to allergens and environmental irritants, leading to breathing difficulties.
                </p>
              </div>
              <div className="text-row">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18c-2 0-4-1.6-4-4a4 4 0 0 1 3.2-3.9A5 5 0 0 1 15 8.5 4.5 4.5 0 0 1 19 13c0 2.5-2 5-4.5 5H6Z" />
                  </svg>
                </div>
                <p className="prose">
                  An asthma attack occurs when the muscles around the airways tighten, the airway lining becomes inflamed, and excess mucus is produced. This combination restricts airflow and causes wheezing, coughing, chest tightness and shortness of breath. Symptoms may come and go, and can worsen with allergens, infections, exercise, weather changes or emotional stress.
                </p>
              </div>
            </div>
            <div className="understand-media reveal d1">
              <img className="media-ph" src="/images/asthma-allergy/understand.png" alt="Person experiencing chest tightness" style={{ objectFit: 'cover' }} loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="symptom-panel reveal d1">
            <div className="symptom-head">
              <span className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4" />
                </svg>
                Common Symptoms
              </span>
              <span className="rule"></span>
            </div>
            <div className="symptom-grid">
              <div className="symptom-item">
                <div className="sico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18c-2 0-4-1.6-4-4a4 4 0 0 1 3.2-3.9A5 5 0 0 1 15 8.5 4.5 4.5 0 0 1 19 13c0 2.5-2 5-4.5 5H6Z" />
                  </svg>
                </div>
                <div>
                  <h5>Shortness of breath</h5>
                  <p>Feeling breathless or finding it hard to catch your breath.</p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="sico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12c2-4 4-4 6 0s4 4 6 0 4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h5>Persistent coughing, especially at night</h5>
                  <p>Cough that worsens at night or early in the morning.</p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="sico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
                  </svg>
                </div>
                <div>
                  <h5>Chest tightness or pressure</h5>
                  <p>A feeling of tightness or heaviness in the chest.</p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="sico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 4 4 15h6l-1 5 9-11h-6l1-5Z" />
                  </svg>
                </div>
                <div>
                  <h5>Difficulty breathing during exercise</h5>
                  <p>Breathlessness or wheezing while being active.</p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="sico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12c2-4 4-4 6 0s4 4 6 0 4-4 4-4M4 18c2-4 4-4 6 0s4 4 6 0 4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h5>Wheezing (whistling sound while breathing)</h5>
                  <p>A whistling or squeaky sound when you breathe.</p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="sico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4.5 8-11.8V5l-8-3-8 3v5.2C4 17.5 12 22 12 22Z" />
                  </svg>
                </div>
                <div>
                  <h5>Recurrent chest infections</h5>
                  <p>Frequent colds, bronchitis or chest infections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES, TYPES, TRIGGERS */}
      <section className="sec tint">
        <div className="wrap">
          <div className="sec-head left reveal">
            <h2>What contributes to asthma?</h2>
            <p className="lead">Asthma can be triggered by a variety of factors. Understanding them is the first step to better control.</p>
          </div>
          <div className="list-card reveal d1 block-gap">
            <h4>Common Causes</h4>
            <div className="check-grid">
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Family history of asthma or allergies
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Upper respiratory tract infections
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Dust mites, pollen, mold spores
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Animal dander &amp; cigarette smoke
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Air pollution &amp; chemical fumes
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Strong perfumes and fragrances
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Stress, anxiety &amp; cold weather
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Exercise, certain medications &amp; food allergies
              </div>
            </div>
          </div>

          <div className="type-grid block-gap">
            <div className="type-card reveal d1">
              <div className="pico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <h3>Allergic (Extrinsic) Asthma</h3>
              <p>Triggered by allergens such as dust, pollen, mold, pet dander and smoke. Commonly occurs in people with a history of allergies.</p>
            </div>
            <div className="type-card reveal d2">
              <div className="pico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a9 9 0 1 0 9 9" />
                  <path d="M12 3v9l6 4" />
                </svg>
              </div>
              <h3>Non-Allergic (Intrinsic) Asthma</h3>
              <p>Develops without a specific allergen — may be triggered by infections, stress, exercise, cold air or environmental irritants.</p>
            </div>
          </div>

          <h4 style={{ marginBottom: '16px', fontSize: '1.02rem', color: 'var(--blue)' }}>Common Triggers</h4>
          <div className="mini-grid">
            <div className="mini-card reveal d1">
              <div className="mico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 3a6.5 6.5 0 1 0 5 10.7L19 18l1-1-4.3-4.5A6.5 6.5 0 0 0 9.5 3Z" />
                </svg>
              </div>
              <h5>Environmental Allergens</h5>
              <p>House dust, pollens, mold, animal hair, cockroach allergens.</p>
            </div>
            <div className="mini-card reveal d2">
              <div className="mico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C9 6 7 9 7 12a5 5 0 0 0 10 0c0-3-2-6-5-10Z" />
                </svg>
              </div>
              <h5>Food Allergies</h5>
              <p>Milk, eggs, fish, shellfish, chocolate, strawberries, cold beverages.</p>
            </div>
            <div className="mini-card reveal d3">
              <div className="mico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4M12 16h.01" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h5>Respiratory Infections</h5>
              <p>Viral infections, colds and flu commonly trigger asthma attacks.</p>
            </div>
            <div className="mini-card reveal d1">
              <div className="mico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
                </svg>
              </div>
              <h5>Exercise</h5>
              <p>Heavy exercise without proper warm-up may cause exercise-induced asthma.</p>
            </div>
            <div className="mini-card reveal d2">
              <div className="mico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5s-1 3-1 5a5 5 0 0 0 10 0c0-2-1-3-1-5s1-3 1-5a5 5 0 0 0-5-5Z" />
                </svg>
              </div>
              <h5>Emotional Stress</h5>
              <p>Stress, anxiety, excitement and emotional disturbances can aggravate symptoms.</p>
            </div>
            <div className="mini-card reveal d3">
              <div className="mico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M6 21V10l6-5 6 5v11M10 21v-6h4v6" />
                </svg>
              </div>
              <h5>Occupational Exposure</h5>
              <p>Chemicals, flour dust, wood dust, smoke, paints or industrial fumes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DURING AN ATTACK, RISK FACTORS, DIAGNOSIS */}
      <section className="sec">
        <div className="wrap">
          <div className="diag-split">
            <div className="diag-text sec-head left reveal" style={{ margin: 0 }}>
              <h2>What happens during an attack, and how it's diagnosed</h2>
              <p className="lead">Understanding the signs, risks and right tests helps in timely care and better control.</p>
            </div>
            <div className="diag-media reveal d1">
              <img className="media-ph" src="/images/asthma-allergy/diagnosis.png" alt="Person using a rescue inhaler" style={{ objectFit: 'cover' }} loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="type-grid" style={{ gridTemplateColumns: '1.1fr .9fr' }}>
            <div className="list-card reveal d1">
              <h4>During an Asthma Attack</h4>
              <ul className="step-list">
                <li>Airway muscles tighten</li>
                <li>Airway lining becomes swollen</li>
                <li>Thick mucus blocks the airways</li>
                <li>Breathing becomes difficult, wheezing increases</li>
                <li>Chest feels tight, coughing becomes persistent</li>
              </ul>
              <p className="prose" style={{ marginTop: '14px', fontSize: '.83rem', color: '#8a6d3b' }}>
                <b style={{ color: 'var(--gold)' }}>Note:</b> Severe attacks require immediate medical attention.
              </p>
            </div>
            <div className="list-card reveal d2">
              <h4>Risk Factors</h4>
              <div className="check-grid cols-1">
                <div className="check-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Family history of asthma
                </div>
                <div className="check-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Allergic conditions
                </div>
                <div className="check-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Frequent exposure to dust or pollution
                </div>
                <div className="check-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Smoking or second-hand smoke
                </div>
                <div className="check-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Dusty or chemical work environments
                </div>
              </div>
            </div>
          </div>
          <div className="list-card reveal d3" style={{ marginTop: '24px' }}>
            <h4>Diagnosis</h4>
            <div className="check-grid">
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Medical history &amp; physical examination
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Lung function tests
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Peak flow meter readings
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Spirometry
              </div>
              <div className="check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Allergy testing (when required)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEOPATHIC APPROACH */}
      <section className="sec tint">
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div className="sec-head left reveal">
            <h2>Homeopathic support for respiratory health</h2>
          </div>
          <div className="callout reveal d1 block-gap">
            <h4>An individualised approach</h4>
            Homeopathy follows an individualised approach, considering the patient's symptoms, medical history and overall constitution. The goal is to support general respiratory health and overall wellbeing. Treatment plans vary from person to person and should be guided by a qualified homeopathic practitioner.
          </div>
          <div className="callout warn reveal d2">
            <h4>Important</h4>
            Homeopathy should not replace prescribed emergency asthma medication. If you have severe asthma or experience an asthma attack, follow your doctor's emergency treatment plan immediately.
          </div>
        </div>
      </section>

      {/* PREVENTION, LIFESTYLE, OUTLOOK */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <h2>Living well with asthma</h2>
            <p className="lead">Simple steps and the right care can help you breathe better and live fully.</p>
          </div>
          <div className="prevent-split">
            <div className="prevent-media reveal d1">
              <div className="accent-ring"></div>
              <img className="media-ph" src="/images/asthma-allergy/prevention.png" alt="Rescue inhaler, product shot" style={{ objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="prevent-podium"></div>
            </div>
            <div className="prevent-cards">
              <div className="list-card reveal d1">
                <h4>Prevention Tips</h4>
                <div className="check-grid cols-1">
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Avoid known allergens &amp; keep your home dust-free
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Use allergen-proof mattress and pillow covers
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Maintain proper indoor ventilation
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Avoid smoking &amp; reduce pollution exposure
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Wear a mask in dusty environments
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Exercise regularly, after medical advice
                  </div>
                </div>
              </div>
              <div className="list-card reveal d2">
                <h4>Lifestyle Management</h4>
                <div className="check-grid cols-1">
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Eat a balanced diet &amp; get adequate sleep
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Practice breathing exercises
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Manage stress through yoga or meditation
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Avoid exposure to respiratory infections
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Take prescribed medications regularly
                  </div>
                  <div className="check-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Keep rescue inhalers available, if advised
                  </div>
                </div>
              </div>
              <div className="list-card reveal d1">
                <h4>Possible Complications</h4>
                <p className="prose" style={{ marginBottom: 0 }}>
                  If asthma is not properly managed, complications may include frequent attacks, respiratory infections, reduced lung function, sleep disturbances, limited physical activity, and hospitalisation during severe episodes. Timely treatment helps reduce these risks.
                </p>
              </div>
              <div className="list-card reveal d2">
                <h4>Prognosis</h4>
                <p className="prose" style={{ marginBottom: 0 }}>
                  Most people with asthma can live normal, active lives with appropriate treatment and regular follow-up. Although usually a long-term condition, many individuals achieve excellent symptom control by avoiding triggers and following their healthcare provider's advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2 className="reveal d1">Breathe a little easier, with the right support.</h2>
          <p className="reveal d1">
            Book a consultation or share your reports securely. We'll listen carefully, be honest about how we can help, and work in step with your existing treatment plan.
          </p>
          <div className="cta-row reveal d2">
            <Link className="btn btn-primary" href="/contactus">
              Book a Consultation
            </Link>
            <a className="btn btn-ghost" href="tel:+919898005354">
              Call +91 98980 05354
            </a>
            <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">
              WhatsApp our team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
