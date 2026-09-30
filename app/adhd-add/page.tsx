import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'ADHD Treatment with Homeopathy for Children & Better Focus',
  description: "Learn about ADHD and ADD in children, including signs, symptoms, assessment and personalised supportive care with Dr. Ketan Patel, Ahmedabad.",
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

  /* sections */
  .sec{padding:88px 0}
  .sec-head{max-width:700px;margin:0 auto 46px;text-align:center}
  .sec-head h2{font-size:clamp(1.6rem,2.8vw,2.25rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}
  .reveal{opacity:1;transform:none}
  .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}

  /* SECTION 1 — types (pillar-style white cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;counter-reset:p}
  .type-card{position:relative;background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .type-card .num{counter-increment:p;position:absolute;top:20px;right:24px;font-weight:700;font-size:.75rem;letter-spacing:.14em;color:rgba(10,50,100,.28)}
  .type-card .num::before{content:"0" counter(p)}
  .type-top{padding:38px 30px 18px;text-align:center}
  .pico{width:68px;height:68px;border-radius:50%;display:grid;place-items:center;margin:0 auto 20px;background:var(--teal-10);color:var(--teal);transition:transform .4s var(--ease)}
  .pico svg{width:27px;height:27px}
  .type-card:hover .pico{transform:scale(1.08) rotate(-4deg)}
  .type-top h3{font-size:1.1rem;text-align:center}
  .type-body{flex:1;padding:0 30px 34px;text-align:center}
  .type-body p{font-size:.88rem;color:#555;line-height:1.7}

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

  @media(max-width:980px){
    .type-grid{grid-template-columns:1fr}
    .neuro-grid{grid-template-columns:repeat(2,1fr)}
  }
  @media(max-width:680px){
    .neuro-grid{grid-template-columns:1fr}
    .beh-grid{grid-template-columns:1fr}
    .beh-grid .beh-card:last-child{max-width:100%}
    .sec{padding:60px 0}
    .page-hero{padding:0}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
  }
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}

  /* ===== SHARED EXTRA COMPONENTS (condition pages) ===== */
  .narrative{background:#fff}
  .narrative.tint{background:linear-gradient(160deg,#f4f9fc 0%,#eef6fb 100%)}
  .info-block{max-width:760px;margin:0 auto;text-align:center}
  .info-block p{color:#555;font-size:.98rem;line-height:1.8;margin-bottom:16px}
  .info-block p:last-child{margin-bottom:0}
  .info-block.left{text-align:left;margin:0}

  /* pill grid — for long simple enumerations */
  .pill-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
  .pill-grid.left{justify-content:flex-start}
  .pill{display:inline-flex;align-items:center;gap:7px;font-family:'Open Sans',sans-serif;font-size:.82rem;font-weight:600;color:var(--blue);background:var(--blue-06);border:1px solid var(--line);padding:.55rem 1rem;border-radius:999px}
  .pill svg{width:13px;height:13px;color:var(--teal);flex:0 0 auto}
  .neuro .pill{color:#fff;background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.22)}
  .neuro .pill svg{color:var(--gold)}

  /* check grid — characteristics / feature lists */
  .check-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 28px}
  .check-item{display:flex;align-items:flex-start;gap:10px;font-size:.9rem;color:#444;line-height:1.55}
  .check-item svg{width:17px;height:17px;flex:0 0 auto;color:var(--teal);margin-top:2px}

  /* symptom cards — dark section, heading + bullet list */
  .symptom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .symptom-card{background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:0;overflow:hidden;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4)}
  .symptom-card h4{color:#fff;font-size:1rem;margin-bottom:12px}
  .symptom-card ul{list-style:none}
  .symptom-card li{position:relative;padding-left:18px;margin-bottom:9px;font-size:.83rem;color:rgba(220,240,252,.88);line-height:1.55}
  .symptom-card li::before{content:"";position:absolute;left:0;top:.5em;width:5px;height:5px;border-radius:50%;background:var(--gold)}

  /* note strip */
  .note-strip{display:flex;align-items:flex-start;gap:10px;font-size:.8rem;color:rgba(10,31,68,.7);background:var(--blue-06);border:1px solid var(--line);border-radius:13px;padding:14px 18px;margin-top:36px}
  .note-strip svg{width:16px;height:16px;flex:0 0 auto;color:var(--teal);margin-top:1px}

  @media(max-width:980px){
    .symptom-grid{grid-template-columns:1fr}
  }
  @media(max-width:680px){
    .check-grid{grid-template-columns:1fr}
  }

  /* ===== IMAGE PLACEHOLDER & MEDIA ===== */
  .img-ph{position:relative;width:100%;height:100%;min-height:120px;background:repeating-linear-gradient(45deg,rgba(10,31,68,.05),rgba(10,31,68,.05) 10px,rgba(10,31,68,.09) 10px,rgba(10,31,68,.09) 20px);border:1.5px dashed rgba(10,31,68,.25);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:rgba(10,31,68,.45);font-family:'Open Sans',sans-serif;font-size:.72rem;font-weight:600;letter-spacing:.02em;text-align:center;padding:10px}

  /* ===== ADHD & ADD — photo split cards ===== */
  .ao-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
  .ao-card{display:grid;grid-template-columns:230px 1fr;background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .ao-card:hover{transform:translateY(-6px);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .ao-media{position:relative;min-height:100%}
  .ao-media .img-ph{border:none;border-radius:0}
  .ao-content{padding:32px 26px}
  .ao-eyebrow{display:block;font-family:'Poppins',sans-serif;font-weight:600;font-size:1.02rem;margin-bottom:2px}
  .ao-teal .ao-eyebrow{color:var(--teal)}
  .ao-purple .ao-eyebrow{color:#7c5cd6}
  .ao-content h3{font-size:1.05rem;margin-bottom:12px;line-height:1.28}
  .ao-sub{font-size:.85rem;color:#666;margin-bottom:4px}
  .ao-list{list-style:none;margin-top:6px}
  .ao-list li{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--line);font-size:.85rem;color:#3a3a3a}
  .ao-list li:last-child{border-bottom:none}
  .ao-ico{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;flex:0 0 auto}
  .ao-ico svg{width:14px;height:14px}
  .ao-teal .ao-ico{background:var(--teal-10);color:var(--teal)}
  .ao-purple .ao-ico{background:rgba(124,92,214,.12);color:#7c5cd6}
  .ao-note{margin-top:10px;font-size:.78rem;color:#888}
  @media(max-width:980px){.ao-grid{grid-template-columns:1fr}}
  @media(max-width:680px){.ao-card{grid-template-columns:1fr}.ao-media{height:200px}}

  /* ===== SIGNS & SYMPTOMS — photo-top cards ===== */
  .sy-media{position:relative;height:230px;border-radius:20px 20px 0 0;overflow:hidden;margin-bottom:-20px}
  .sy-media .img-ph{border-radius:20px 20px 0 0}
  .sy-pill{position:relative;z-index:2;display:inline-block;background:#0d2a4d;color:#7dd3fc;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.86rem;padding:.5rem 1.1rem;border-radius:999px;box-shadow:0 8px 20px -8px rgba(0,0,0,.5);margin-bottom:16px}
  .sy-body{padding:0 24px 26px;margin-top:20px}

  /* ===== OUR APPROACH — text/photo split ===== */
  .oa-split{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center;margin-bottom:38px}
  .oa-text .eyebrow{display:block;margin-bottom:10px}
  .oa-text h2{font-size:clamp(1.6rem,2.8vw,2.25rem);margin-bottom:14px}
  .oa-media .img-ph{border-radius:26px;aspect-ratio:16/11}
  #approach .pill-grid{margin-top:22px;max-width:640px}
  #approach .pill{background:#fff;border:none;box-shadow:0 8px 20px -12px rgba(10,31,68,.2)}
  @media(max-width:980px){.oa-split{grid-template-columns:1fr}.oa-media{order:-1}}

  /* ===== SUPPORTING PROGRESS — text+cards / photo split ===== */
  .sp-wrap{display:grid;grid-template-columns:1.25fr .95fr;gap:44px;align-items:center}
  .sp-text .eyebrow{display:block;margin-bottom:10px}
  .sp-text h2{color:var(--ivory)}
  .sp-highlight{color:inherit;text-decoration:none}
  .sp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:26px}
  .sp-card{display:flex;align-items:center;gap:11px;background:rgba(186,224,243,.1);border:1px solid rgba(255,255,255,.18);border-radius:13px;padding:14px 16px;font-size:.83rem;color:#fff;font-weight:600}
  .spi{width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.1);display:grid;place-items:center;flex:0 0 auto;color:#BAE0F3}
  .spi svg{width:16px;height:16px}
  .sp-media .img-ph{border-radius:24px;aspect-ratio:3/4}
  @media(max-width:980px){.sp-wrap{grid-template-columns:1fr}.sp-media{order:-1;max-width:340px;margin:0 auto}}
  @media(max-width:680px){.sp-grid{grid-template-columns:1fr}}`;

export default function ADHDADDPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO BANNER */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <HeroBannerImage src="/images/adhd-add/hero-banner.png" alt="ADHD &amp; ADD in Children Hero Banner" />
        </div>
      </section>

      {/* WHAT IS ADHD */}
      <section className="sec narrative" id="what-is-adhd">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Managing spontaneous responses, day to day</h2>
            <p className="lead">
              ADHD can make it difficult for children to manage spontaneous responses involving movement, speech, attention and day-to-day activities. Children with attention-related difficulties may sometimes be misunderstood as lazy, careless or undisciplined — but persistent challenges may require proper assessment and support.
            </p>
          </div>
          <div className="check-grid reveal" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Paying attention during studies
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Staying focused while playing
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Following instructions
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Completing tasks
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Organizing schoolwork
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Managing time and routines
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Remaining seated for longer periods
            </div>
          </div>
        </div>
      </section>

      {/* ADHD & ADD */}
      <section className="sec narrative tint" id="adhd-add">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Two commonly used terms, two presentations</h2>
            <p className="lead">ADHD and ADD are commonly used terms for attention-related difficulties.</p>
          </div>
          <div className="ao-grid">
            <div className="ao-card ao-teal reveal d1">
              <div className="ao-media">
                <img className="img-ph"
                  src="/images/adhd-add/card-1.png"
                  alt="ADHD child photo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div className="ao-content">
                <span className="ao-eyebrow">ADHD —</span>
                <h3>Attention-Deficit/Hyperactivity Disorder</h3>
                <p className="ao-sub">Children with ADHD may experience:</p>
                <ul className="ao-list">
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 8v4M12 16h.01" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    Inattention
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 4 4 15h7l-1 5 9-11h-7l1-5Z" />
                      </svg>
                    </span>
                    Hyperactivity
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4v6h6M20 20v-6h-6M20 4l-7 7M4 20l7-7" />
                      </svg>
                    </span>
                    Impulsivity
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 3a6 6 0 0 0 0 12 6 6 0 0 0 0-12Z" />
                        <path d="M12 17v4M9 21h6" />
                      </svg>
                    </span>
                    Restlessness
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 20h16M7 20V9m5 11V4m5 16v-8" />
                      </svg>
                    </span>
                    Difficulty remaining seated
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </span>
                    Difficulty controlling immediate responses
                  </li>
                </ul>
              </div>
            </div>
            <div className="ao-card ao-purple reveal d2">
              <div className="ao-media">
                <img className="img-ph"
                  src="/images/adhd-add/card-2.png"
                  alt="ADD child photo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div className="ao-content">
                <span className="ao-eyebrow">ADD —</span>
                <h3>Attention-Deficit Disorder</h3>
                <p className="ao-sub">Children with primarily inattentive symptoms may experience:</p>
                <ul className="ao-list">
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="7" />
                        <path d="M12 8v4l3 2" />
                      </svg>
                    </span>
                    Difficulty maintaining focus
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.5 2A5.5 5.5 0 0 1 15 7.5V19a2 2 0 1 1-4 0V9M9.5 2A5.5 5.5 0 0 0 4 7.5V19" />
                      </svg>
                    </span>
                    Forgetfulness
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z" />
                        <path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
                      </svg>
                    </span>
                    Disorganization
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                        <path d="M4 4l16 16" />
                      </svg>
                    </span>
                    Easily becoming distracted
                  </li>
                  <li>
                    <span className="ao-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M9 12h6M9 16h4" />
                      </svg>
                    </span>
                    Difficulty completing tasks
                  </li>
                </ul>
                <p className="ao-note">They may not show significant hyperactivity or impulsive behaviour.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS & SYMPTOMS */}
      <section className="sec neuro" id="signs-symptoms">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What to look out for</h2>
            <p className="lead">Every child is unique. These are some common signs that may indicate attention-related difficulties.</p>
          </div>
          <div className="symptom-grid">
            <div className="symptom-card reveal d1">
              <div className="sy-media">
                <img className="img-ph"
                  src="/images/adhd-add/card-3.png"
                  alt="Inattention and Focus Difficulties"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div className="sy-body">
                <span className="sy-pill">Inattention &amp; Focus Difficulties</span>
                <ul>
                  <li>Trouble focusing on studies or activities</li>
                  <li>Difficulty paying attention for extended periods</li>
                  <li>Appearing not to listen when spoken to directly</li>
                  <li>Frequently becoming distracted</li>
                  <li>Forgetfulness during daily activities</li>
                  <li>Losing school supplies, books or belongings</li>
                  <li>Difficulty following instructions</li>
                  <li>Starting tasks but not completing them</li>
                  <li>Quickly losing focus or becoming sidetracked</li>
                  <li>Difficulty organizing tasks and activities</li>
                  <li>Difficulty managing time</li>
                  <li>Avoiding tasks that require sustained mental effort</li>
                  <li>Difficulty completing schoolwork or homework</li>
                </ul>
              </div>
            </div>

            <div className="symptom-card reveal d2">
              <div className="sy-media">
                <img className="img-ph"
                  src="/images/adhd-add/card-4.png"
                  alt="Hyperactivity and Restlessness"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div className="sy-body">
                <span className="sy-pill">Hyperactivity &amp; Restlessness</span>
                <ul>
                  <li>Fidgeting or squirming while seated</li>
                  <li>Frequently getting up and moving around</li>
                  <li>Running, climbing or moving excessively</li>
                  <li>Being constantly active or &quot;on the go&quot;</li>
                  <li>Difficulty remaining seated in the classroom</li>
                  <li>Excessive restlessness</li>
                </ul>
              </div>
            </div>

            <div className="symptom-card reveal d3">
              <div className="sy-media">
                <img className="img-ph"
                  src="/images/adhd-add/card-5.png"
                  alt="Impulsivity"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div className="sy-body">
                <span className="sy-pill">Impulsivity</span>
                <ul>
                  <li>Interrupting or intruding on others</li>
                  <li>Interrupting conversations, games or activities</li>
                  <li>Difficulty waiting for a turn</li>
                  <li>Acting or speaking before thinking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO SEEK ASSESSMENT */}
      <section className="sec narrative" id="assessment">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Distinguishing ADHD from typical childhood behaviour</h2>
            <p className="lead">Occasional distraction, restlessness or difficulty focusing does not necessarily indicate ADHD. An assessment may be helpful when symptoms:</p>
          </div>
          <div className="check-grid reveal" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Continue over time
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Occur in more than one setting
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Are seen at home and school
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Affect learning or daily activities
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Create difficulties in relationships or behaviour
            </div>
            <div className="check-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Interfere with age-appropriate tasks
            </div>
          </div>
          <p className="note-strip reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 8v4M12 16h.01" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            A detailed evaluation can help understand whether a child's challenges are related to attention, learning, behaviour, emotional concerns or another developmental condition.
          </p>
        </div>
      </section>

      {/* LEARNING DIFFICULTIES */}
      <section className="sec narrative tint" id="learning">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>When ADHD and learning challenges overlap</h2>
          </div>
          <div className="info-block reveal">
            <p>Some children with ADHD may also experience learning difficulties. Challenges such as Dyslexia, Dyscalculia or Dysgraphia may affect reading, writing, mathematics and task completion.</p>
            <p>When learning-related concerns are identified and appropriately supported, children may show improvement in focus, confidence and academic participation.</p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="sec types" id="approach">
        <div className="wrap">
          <div className="oa-split">
            <div className="oa-text reveal">
              <h2>Understanding every part of your child's day</h2>
              <p className="lead">
                Every child has different strengths, challenges and developmental needs. An individualized care plan may include developmental guidance, behavioural support, lifestyle recommendations, educational strategies and regular progress monitoring.
              </p>
              <div className="pill-grid left">
                <span className="pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Attention and concentration
                </span>
                <span className="pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Activity level
                </span>
                <span className="pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Behavioural patterns
                </span>
                <span className="pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Learning abilities
                </span>
                <span className="pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  School-related challenges
                </span>
                <span className="pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Daily routines
                </span>
                <span className="pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Emotional and social needs
                </span>
              </div>
            </div>
            <div className="oa-media reveal d1">
              <img className="img-ph"
                src="/images/adhd-add/card-6.png"
                alt="Understanding every part of your child's day"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTING PROGRESS */}
      <section className="sec neuro" id="progress">
        <div className="wrap">
          <div className="sp-wrap">
            <div className="sp-text reveal">
              <h2>
                Building better everyday habits, <span className="sp-highlight">together</span>
              </h2>
              <p className="lead">
                Support from parents, teachers and healthcare professionals can play an important role in helping children manage attention-related challenges.
              </p>
              <div className="sp-grid">
                <div className="sp-card">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="12" cy="12" r=".6" />
                    </svg>
                  </span>
                  Focus &amp; Concentration
                </div>
                <div className="sp-card">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  Task-Completion Skills
                </div>
                <div className="sp-card">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3" />
                      <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
                      <circle cx="17" cy="9" r="2.4" />
                      <path d="M22 20c0-2.3-1.9-4-4.5-4.4" />
                    </svg>
                  </span>
                  Organizational Abilities
                </div>
                <div className="sp-card">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3.5 2" />
                    </svg>
                  </span>
                  Time-Management Skills
                </div>
                <div className="sp-card">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                    </svg>
                  </span>
                  Emotional Regulation
                </div>
                <div className="sp-card">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V6.5A2.5 2.5 0 0 1 6.5 4H20v15" />
                    </svg>
                  </span>
                  Classroom Participation
                </div>
                <div className="sp-card">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3L22 9l-5 4.9L18.2 21 12 17.6 5.8 21 7 13.9 2 9l7.1-.7z" />
                    </svg>
                  </span>
                  Learning Confidence
                </div>
                <div className="sp-card">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="17" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </span>
                  Daily Routines
                </div>
              </div>
            </div>
            <div className="sp-media reveal d1">
              <img className="img-ph"
                src="/images/adhd-add/card-7.png"
                alt="Building better everyday habits together"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2 className="reveal d1">Let's understand your child's attention &amp; focus.</h2>
          <p className="reveal d1">
            If your child experiences persistent difficulties with attention, focus, hyperactivity, impulsivity or school performance, a detailed assessment can help identify their individual needs and explore an individualized support plan.
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
