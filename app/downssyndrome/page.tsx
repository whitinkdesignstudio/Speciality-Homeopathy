import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Down Syndrome Trisomy 21 Homeopathy Treatment & Child Care',
  description: "Understanding Down's syndrome — causes, characteristics, types, diagnosis and individualised developmental support alongside your child's medical team. Dr. Ketan Patel, Ahmedabad.",
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
  .secondary-banner-sec{position:relative;width:100%;margin:0;padding:0;overflow:hidden;background:#fff}
  .secondary-banner-sec img{width:100%;height:auto;display:block}

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

  /* split list — two labelled bullet columns */
  .split-list{display:grid;grid-template-columns:1fr 1fr;gap:36px}
  .split-list h4{font-size:1rem;margin-bottom:14px;display:flex;align-items:center;gap:9px}
  .split-list h4 .si{width:34px;height:34px;border-radius:10px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;flex:0 0 auto}
  .split-list h4 .si svg{width:16px;height:16px}
  .split-list ul{list-style:none}
  .split-list li{position:relative;padding-left:20px;margin-bottom:10px;font-size:.88rem;color:#555;line-height:1.6}
  .split-list li::before{content:"";position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:var(--gold)}

  /* 2-column type grid modifier */
  .type-grid.cols-2{grid-template-columns:repeat(2,1fr);max-width:840px;margin:0 auto}
  .type-card ul.mini-list{list-style:none;text-align:left;margin-top:6px}
  .type-card ul.mini-list li{position:relative;padding-left:18px;margin-bottom:8px;font-size:.85rem;color:#555;line-height:1.55}
  .type-card ul.mini-list li::before{content:"";position:absolute;left:0;top:.5em;width:5px;height:5px;border-radius:50%;background:var(--teal)}

  /* symptom cards — dark section, heading + bullet list */
  .symptom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .symptom-card{background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:26px 24px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4)}
  .symptom-card .sico{width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.12);display:grid;place-items:center;margin-bottom:14px;color:#BAE0F3}
  .symptom-card .sico svg{width:20px;height:20px}
  .symptom-card h4{color:#fff;font-size:1rem;margin-bottom:12px}
  .symptom-card ul{list-style:none}
  .symptom-card li{position:relative;padding-left:18px;margin-bottom:9px;font-size:.83rem;color:rgba(220,240,252,.88);line-height:1.55}
  .symptom-card li::before{content:"";position:absolute;left:0;top:.5em;width:5px;height:5px;border-radius:50%;background:var(--gold)}

  /* note strip */
  .note-strip{display:flex;align-items:flex-start;gap:10px;font-size:.8rem;color:rgba(10,31,68,.7);background:var(--blue-06);border:1px solid var(--line);border-radius:13px;padding:14px 18px;margin-top:36px}
  .note-strip svg{width:16px;height:16px;flex:0 0 auto;color:var(--teal);margin-top:1px}
  .neuro .note-strip{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.16);color:rgba(250,248,244,.72)}
  .neuro .note-strip svg{color:var(--gold)}

  /* ===== IMAGE PLACEHOLDER (generic) ===== */
  .img-ph{width:100%;height:100%;min-height:100%;background:repeating-linear-gradient(135deg,#e4eef4 0 14px,#d8e6ee 14px 28px);border:1.5px dashed #aec4d3;display:flex;align-items:center;justify-content:center;text-align:center;color:#5f7a8c;font-family:'Open Sans',sans-serif;font-size:.68rem;font-weight:600;line-height:1.4;padding:10px;position:relative}
  .img-ph::before{content:"IMAGE";display:block;position:absolute;top:8px;left:50%;transform:translateX(-50%);font-size:.58rem;letter-spacing:.14em;color:#8ba5b6}
  .img-ph::after{content:attr(data-label);display:block;margin-top:14px}
  .img-ph.dark{background:repeating-linear-gradient(135deg,#0f2438 0 14px,#0a1c2c 14px 28px);border-color:rgba(255,255,255,.25);color:rgba(255,255,255,.55)}
  .img-ph.dark::before{color:rgba(255,255,255,.4)}
  .img-ph.small{font-size:.62rem}
  .img-ph.small::before{display:none}
  .img-ph.small::after{margin-top:0}

  /* ===== TYPES OF DOWN'S SYNDROME — photo/stat cards ===== */
  .ds-types{background:linear-gradient(160deg,#eef7fb 0%,#f7fbfd 45%,#eaf3f8 100%)}
  .ds-type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
  .ds-type-card{border-radius:26px;overflow:hidden;background:#fff;box-shadow:0 20px 46px -20px rgba(10,31,68,.32);transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .ds-type-card:hover{transform:translateY(-6px);box-shadow:0 26px 56px -18px rgba(10,31,68,.38)}
  .ds-type-photo{position:relative;height:220px}
  .ds-type-photo .img-ph{border-radius:0}
  .ds-type-photo img{width:100%;height:100%;object-fit:cover;display:block}
  .ds-type-wave{position:absolute;left:0;right:0;bottom:-2px;width:100%;height:56px;display:block}
  .ds-type-icon{position:absolute;left:24px;bottom:-28px;width:58px;height:58px;border-radius:50%;background:#0b2f4a;border:3px solid #fff;display:grid;place-items:center;color:#7fdfe6;box-shadow:0 10px 24px -10px rgba(10,31,68,.4);z-index:3}
  .ds-type-icon svg{width:23px;height:23px}
  .ds-type-panel{position:relative;padding:44px 26px 28px;color:#fff}
  .ds-type-panel.p-navy{background:linear-gradient(165deg,#0d2b46 0%,#0a1c2c 100%)}
  .ds-type-panel.p-teal{background:linear-gradient(165deg,#0d4d4d 0%,#0a3a3f 100%)}
  .ds-type-tag{display:block;font-family:'Open Sans',sans-serif;font-size:.66rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#6fd8de;margin-bottom:8px}
  .ds-type-panel h3{color:#fff;font-size:1.12rem;margin-bottom:10px}
  .ds-type-panel p{font-size:.85rem;color:rgba(255,255,255,.76);line-height:1.65;margin-bottom:22px}
  .ds-type-divider{border-top:1.5px dashed rgba(255,255,255,.25);margin-bottom:18px}
  .ds-type-stat-row{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .ds-type-stat-left{display:flex;align-items:center;gap:10px}
  .ds-type-stat-icon{width:38px;height:38px;border-radius:11px;border:1.5px solid rgba(255,255,255,.3);display:grid;place-items:center;color:#fff;flex:0 0 auto}
  .ds-type-stat-icon svg{width:17px;height:17px}
  .ds-type-stat-label{display:block;font-size:.58rem;letter-spacing:.07em;text-transform:uppercase;font-weight:700;color:#7fdfe6}
  .ds-type-stat-sub{display:block;font-size:.82rem;font-weight:600;color:#fff;margin-top:3px}
  .ds-type-ring{position:relative;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;flex:0 0 auto}
  .ds-type-ring::before{content:"";position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--gold) calc(var(--pct)*1%),rgba(255,255,255,.16) 0)}
  .ds-type-ring::after{content:"";position:absolute;inset:6px;border-radius:50%}
  .ds-type-ring.on-navy::after{background:#0d2b46}
  .ds-type-ring.on-teal::after{background:#0d4d4d}
  .ds-type-ring span{position:relative;z-index:1;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.76rem;color:#fff}

  /* ===== DIAGNOSIS — navy frosted cards ===== */
  .ds-diag-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:26px;max-width:840px;margin:0 auto}
  .ds-diag-card{background:linear-gradient(165deg,rgba(186,224,243,.16),rgba(186,224,243,.08));border:1.5px solid rgba(255,255,255,.26);border-radius:22px;padding:36px 32px;text-align:center;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 10px 34px -14px rgba(3,14,32,.5),0 1.5px 0 rgba(255,255,255,.3) inset;transition:transform .4s var(--ease),box-shadow .4s var(--ease),border-color .4s}
  .ds-diag-card:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.5);box-shadow:0 22px 48px -14px rgba(3,14,32,.6)}
  .ds-diag-icon{width:60px;height:60px;border-radius:16px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);display:grid;place-items:center;margin:0 auto 20px;color:var(--gold)}
  .ds-diag-icon svg{width:26px;height:26px}
  .ds-diag-card h3{color:#fff;font-size:1.08rem;margin-bottom:12px}
  .ds-diag-card p{font-size:.86rem;color:rgba(220,240,252,.82);line-height:1.7}

  /* ===== DEVELOPMENTAL SUPPORT & CARE — peeking-illustration cards ===== */
  .ds-support{background:#fff}
  .ds-supp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px 20px;margin-top:80px}
  .ds-supp-card{position:relative;border-radius:22px;padding:70px 20px 22px;box-shadow:0 12px 30px -18px rgba(10,31,68,.16);border:1px solid rgba(10,31,68,.06);transition:transform .35s var(--ease),box-shadow .35s var(--ease);text-align:center}
  .ds-supp-card:hover{transform:translateY(-5px);box-shadow:0 18px 36px -16px rgba(10,31,68,.22)}
  .ds-supp-peek{position:absolute;top:-58px;left:50%;transform:translateX(-50%);width:128px;height:128px}
  .ds-supp-peek .img-ph{border-radius:16px}
  .ds-supp-peek .img-ph.wide{width:150px;left:50%;transform:translateX(-50%);position:relative}
  .ds-supp-peek img{width:100%;height:100%;object-fit:cover;border-radius:16px;box-shadow:0 10px 24px -10px rgba(10,31,68,.25);display:block}
  .ds-supp-peek img.wide{width:150px;height:128px;position:relative;left:50%;transform:translateX(-50%)}
  .ds-supp-icon{width:36px;height:36px;border-radius:11px;display:grid;place-items:center;margin:0 auto 14px;color:#fff}
  .ds-supp-icon svg{width:16px;height:16px}
  .ds-supp-card h4{font-size:.92rem;margin-bottom:6px}
  .ds-supp-card p{font-size:.78rem;color:#667;line-height:1.6;margin-bottom:14px}
  .ds-supp-line{display:block;width:30px;height:3px;border-radius:3px;margin:0 auto}
  .ds-supp-card.bg-mint{background:#f0f8f4}
  .ds-supp-card.bg-pink{background:#fdf1f6}
  .ds-supp-card.bg-blue{background:#eff6fb}
  .ds-supp-card.bg-amber{background:#fdf6ea}
  .ds-supp-card.bg-purple{background:#f6f2fb}
  .ds-supp-icon.c-mint,.ds-supp-line.c-mint{background:#2f9e6e}
  .ds-supp-icon.c-pink,.ds-supp-line.c-pink{background:#d94f8c}
  .ds-supp-icon.c-blue,.ds-supp-line.c-blue{background:#2f7bd9}
  .ds-supp-icon.c-amber,.ds-supp-line.c-amber{background:#d98a2f}
  .ds-supp-icon.c-purple,.ds-supp-line.c-purple{background:#8a5fc9}

  /* ===== FINAL CTA — dark photo banner ===== */
  .cta-banner{position:relative;background:var(--blue);color:#fff;overflow:hidden;padding:96px 0 0}
  .cta-banner-media{position:absolute;top:0;right:0;bottom:0;width:46%}
  .cta-banner-media .img-ph{border-radius:0;border:none}
  .cta-banner-fade{position:absolute;inset:0;background:linear-gradient(90deg,var(--blue) 38%,rgba(10,31,68,.72) 58%,rgba(10,31,68,.15) 100%)}
  .cta-banner-top{position:relative;z-index:2;padding-bottom:52px}
  .cta-banner-text{max-width:600px}
  .cta-banner-text h2{color:#fff;font-size:clamp(1.9rem,3.4vw,2.6rem);margin-bottom:18px}
  .cta-banner-text h2 em{color:#5fd0d9;font-style:normal}
  .cta-banner-text p{color:rgba(255,255,255,.78);font-size:.96rem;line-height:1.7;max-width:52ch;margin-bottom:30px}
  .cta-banner-actions{display:flex;gap:12px;flex-wrap:wrap}
  .btn-cta-ghost{background:rgba(255,255,255,.06);color:#fff;border:1.5px solid rgba(255,255,255,.35)}
  .btn-cta-ghost:hover{background:rgba(255,255,255,.14);transform:translateY(-2px)}
  .cta-banner-features{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:28px;border-top:1px solid rgba(255,255,255,.14);padding:30px 0 44px}
  .cbf{display:flex;align-items:flex-start;gap:12px}
  .cbf-ico{width:38px;height:38px;border-radius:50%;border:1.5px solid rgba(255,255,255,.35);display:grid;place-items:center;color:#5fd0d9;flex:0 0 auto}
  .cbf-ico svg{width:17px;height:17px}
  .cbf h5{color:#fff;font-family:'Open Sans',sans-serif;font-size:.86rem;font-weight:700;margin-bottom:4px}
  .cbf p{font-size:.76rem;color:rgba(255,255,255,.66);line-height:1.5}

  /* ===== CAUSES — split narrative / facts ===== */
  .ds-causes{background:#fff}
  .ds-causes-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
  .ds-causes-kicker{display:block;font-family:'Poppins',sans-serif;font-weight:600;font-size:2.8rem;color:var(--blue-06);line-height:1;margin-bottom:2px}
  .ds-causes-text h2{margin:0 0 18px}
  .ds-causes-text p{color:#555;font-size:.98rem;line-height:1.8;margin-bottom:14px}
  .ds-causes-text p:last-child{margin-bottom:0}
  .ds-causes-facts{display:flex;flex-direction:column;gap:16px;margin-top:6px}
  .ds-causes-fact{border-left:3px solid var(--gold);background:var(--blue-06);border-radius:0 16px 16px 0;padding:20px 24px}
  .ds-causes-fact-label{display:block;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--teal);margin-bottom:8px}
  .ds-causes-fact p{font-size:.88rem;color:#555;line-height:1.65;margin:0}

  /* ===== COMMON CHARACTERISTICS — categorised trait cards ===== */
  .ds-char{background:linear-gradient(160deg,#f7fbfd 0%,#eef7fb 100%)}
  .ds-char-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:8px}
  .ds-char-card{position:relative;overflow:hidden;background:#fff;border:1px solid var(--line);border-radius:20px;padding:28px 24px 24px;box-shadow:0 10px 28px -18px rgba(10,31,68,.18);transition:transform .35s var(--ease),box-shadow .35s var(--ease),border-color .35s}
  .ds-char-card::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--teal),var(--gold))}
  .ds-char-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px -18px rgba(10,31,68,.26);border-color:rgba(0,140,140,.35)}
  .ds-char-card h4{font-size:.95rem;margin-bottom:16px;display:flex;align-items:center;gap:10px}
  .ds-char-card h4 .ci{width:32px;height:32px;border-radius:10px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;flex:0 0 auto}
  .ds-char-card h4 .ci svg{width:15px;height:15px}
  .ds-char-card ul{list-style:none}
  .ds-char-card li{display:flex;align-items:flex-start;gap:9px;font-size:.85rem;color:#555;line-height:1.6;margin-bottom:11px}
  .ds-char-card li svg{width:15px;height:15px;flex:0 0 auto;color:var(--teal);margin-top:2px}
  .ds-char-card li:last-child{margin-bottom:0}

  @media(max-width:980px){
    .type-grid,.ds-type-grid,.symptom-grid,.ds-char-grid{grid-template-columns:1fr}
    .neuro-grid,.ds-diag-grid,.ds-supp-grid{grid-template-columns:repeat(2,1fr)}
    .cta-banner-media{width:100%;opacity:.22}
    .cta-banner-fade{background:linear-gradient(180deg,rgba(10,31,68,.5),var(--blue) 70%)}
    .cta-banner-features{grid-template-columns:repeat(2,1fr)}
    .ds-causes-grid{grid-template-columns:1fr;gap:30px}
  }
  @media(max-width:680px){
    .neuro-grid,.beh-grid,.ds-diag-grid,.check-grid,.cta-banner-features{grid-template-columns:1fr}
    .ds-supp-grid{grid-template-columns:1fr;max-width:340px;margin-left:auto;margin-right:auto}
    .beh-grid .beh-card:last-child{max-width:100%}
    .sec{padding:60px 0}
    .page-hero{padding:0}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
  }
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO BANNER 1 */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <HeroBannerImage src="/images/downs-syndrome/hero-banner-1.png" alt="Down's Syndrome (Trisomy 21) Hero Banner" />
        </div>
      </section>


      {/* CAUSES */}
      <section className="sec ds-causes" id="causes">
        <div className="wrap">
          <div className="ds-causes-grid">
            <div className="ds-causes-text reveal">
              <span className="ds-causes-kicker">21</span>
              <h2>An extra copy of chromosome 21</h2>
              <p>Normally, a baby receives genetic material from both parents. Down's syndrome occurs because of an error in cell division that results in an additional copy of chromosome 21.</p>
              <p>The likelihood of having a baby with Down's syndrome may increase with maternal age, although the condition can occur in pregnancies at any age.</p>
            </div>
            <div className="ds-causes-facts reveal d1">
              <div className="ds-causes-fact">
                <span className="ds-causes-fact-label">Where It Can Occur</span>
                <p>The extra chromosome may be present in every cell, in only some cells, or attached to another chromosome.</p>
              </div>
              <div className="ds-causes-fact">
                <span className="ds-causes-fact-label">Why It Happens</span>
                <p>An error in cell division — it is not caused by anything a parent did during pregnancy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CHARACTERISTICS */}
      <section className="sec ds-char" id="characteristics">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Every child looks and grows differently</h2>
            <p className="lead">Children with Down's syndrome may have different physical and developmental characteristics. Not every child will have the same features, or experience them in the same way.</p>
          </div>
          <div className="ds-char-grid">
            <div className="ds-char-card reveal d1">
              <h4><span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg></span>Growth &amp; Body</h4>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Delayed growth and developmental milestones</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Shorter height</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Low muscle tone or flexible joints</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Developmental or learning differences</li>
              </ul>
            </div>
            <div className="ds-char-card reveal d2">
              <h4><span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg></span>Facial &amp; Head Features</h4>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>A flattened facial profile, especially around the nose bridge</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Almond-shaped eyes that may slant upward</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>A short neck</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Small ears</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>A tongue that may appear to protrude</li>
              </ul>
            </div>
            <div className="ds-char-card reveal d3">
              <h4><span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" /><circle cx="12" cy="11" r="2.2" /></svg></span>Hands &amp; Other Features</h4>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Small hands and feet</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>A single crease across the palm</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>A little finger that may curve toward the thumb</li>
              </ul>
            </div>
          </div>
          <p className="note-strip reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 8v4M12 16h.01" /><circle cx="12" cy="12" r="9" /></svg>
            Some children may also have associated medical conditions, including congenital heart conditions or digestive-system differences. Regular medical evaluation is important for identifying and managing individual health needs.
          </p>
        </div>
      </section>

      {/* TYPES */}
      <section className="sec ds-types" id="types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Three genetic patterns, one diagnosis</h2>
          </div>
          <div className="ds-type-grid">

            <div className="ds-type-card reveal d1">
              <div className="ds-type-photo">
                <img src="https://static.wixstatic.com/media/66422a_fb6bb342d7714c7c97a17f0f1a5a13f1~mv2.png" alt="Child — Trisomy 21" loading="lazy" decoding="async" />
                <svg className="ds-type-wave" viewBox="0 0 400 60" preserveAspectRatio="none"><path d="M0,32 C110,64 300,4 400,30 L400,60 L0,60 Z" fill="#0d2b46" /></svg>
                <div className="ds-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="12" r="3" /><circle cx="12" cy="12" r="3" /><circle cx="17" cy="12" r="3" /></svg></div>
              </div>
              <div className="ds-type-panel p-navy">
                <span className="ds-type-tag">Most Common Type</span>
                <h3>Trisomy 21</h3>
                <p>Every cell in the body has three copies of chromosome 21 instead of two.</p>
                <div className="ds-type-divider"></div>
                <div className="ds-type-stat-row">
                  <div className="ds-type-stat-left">
                    <span className="ds-type-stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></span>
                    <span><span className="ds-type-stat-label">Every Cell Affected</span><span className="ds-type-stat-sub">~95% of cases</span></span>
                  </div>
                  <div className="ds-type-ring on-navy" style={({ '--pct': '95' } as React.CSSProperties)}><span>95%</span></div>
                </div>
              </div>
            </div>

            <div className="ds-type-card reveal d2">
              <div className="ds-type-photo">
                <img src="https://static.wixstatic.com/media/66422a_8231b260c36741e0b1e854e42b21e8aa~mv2.png" alt="Mother and child — Translocation Down's Syndrome" loading="lazy" decoding="async" />
                <svg className="ds-type-wave" viewBox="0 0 400 60" preserveAspectRatio="none"><path d="M0,32 C110,64 300,4 400,30 L400,60 L0,60 Z" fill="#0d4d4d" /></svg>
                <div className="ds-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10M7 12h10M7 17h6" /><path d="M4 4v16" /></svg></div>
              </div>
              <div className="ds-type-panel p-teal">
                <span className="ds-type-tag">Inherited Pattern Possible</span>
                <h3>Translocation<br />Down's Syndrome</h3>
                <p>Part or all of an extra chromosome 21 is attached to another chromosome.</p>
                <div className="ds-type-divider"></div>
                <div className="ds-type-stat-row">
                  <div className="ds-type-stat-left">
                    <span className="ds-type-stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
                    <span><span className="ds-type-stat-label">Genetic Counselling Advised</span><span className="ds-type-stat-sub">~3–4% of cases</span></span>
                  </div>
                  <div className="ds-type-ring on-teal" style={({ '--pct': '4' } as React.CSSProperties)}><span>4%</span></div>
                </div>
              </div>
            </div>

            <div className="ds-type-card reveal d3">
              <div className="ds-type-photo">
                <img src="https://static.wixstatic.com/media/66422a_d9416f198ce2444d9f304fb516c41450~mv2.png" alt="Child playing — Mosaic Down's Syndrome" loading="lazy" decoding="async" />
                <svg className="ds-type-wave" viewBox="0 0 400 60" preserveAspectRatio="none"><path d="M0,32 C110,64 300,4 400,30 L400,60 L0,60 Z" fill="#0d2b46" /></svg>
                <div className="ds-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="4" height="4" rx="1" /><rect x="10" y="4" width="4" height="4" rx="1" /><rect x="16" y="4" width="4" height="4" rx="1" /><rect x="4" y="10" width="4" height="4" rx="1" /><rect x="10" y="10" width="4" height="4" rx="1" /><rect x="16" y="10" width="4" height="4" rx="1" /><rect x="4" y="16" width="4" height="4" rx="1" /><rect x="10" y="16" width="4" height="4" rx="1" /><rect x="16" y="16" width="4" height="4" rx="1" /></svg></div>
              </div>
              <div className="ds-type-panel p-navy">
                <span className="ds-type-tag">Rarest Type</span>
                <h3>Mosaic<br />Down's Syndrome</h3>
                <p>Only some cells carry the extra chromosome 21; others have the usual number.</p>
                <div className="ds-type-divider"></div>
                <div className="ds-type-stat-row">
                  <div className="ds-type-stat-left">
                    <span className="ds-type-stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
                    <span><span className="ds-type-stat-label">Only Some Cells Affected</span><span className="ds-type-stat-sub">~1–2% of cases</span></span>
                  </div>
                  <div className="ds-type-ring on-navy" style={({ '--pct': '2' } as React.CSSProperties)}><span>2%</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="sec neuro" id="diagnosis">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>How Down's syndrome is assessed during pregnancy</h2>
            <p className="lead">A healthcare professional can explain the benefits, limitations and possible risks of each testing option. Neither type can predict exactly how Down's syndrome may affect an individual child's development, health or future abilities.</p>
          </div>
          <div className="ds-diag-grid">
            <div className="ds-diag-card reveal d1">
              <div className="ds-diag-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></div>
              <h3>Screening Tests</h3>
              <p>Screening tests estimate whether a pregnancy has a lower or higher chance of Down's syndrome. They do not provide a definite diagnosis.</p>
            </div>
            <div className="ds-diag-card reveal d2">
              <div className="ds-diag-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11.5 11 13.5 15.5 9" /><circle cx="12" cy="12" r="9" /></svg></div>
              <h3>Diagnostic Tests</h3>
              <p>Diagnostic tests can provide more definite information about whether the baby has Down's syndrome. A healthcare professional can explain benefits and risks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENTAL SUPPORT & CARE */}
      <section className="sec ds-support" id="support">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>An individualised plan, built around your child</h2>
            <p className="lead">Children with Down's syndrome may benefit from individualized support based on their developmental and health needs. Early and consistent intervention can help support progress in different areas.</p>
          </div>
          <div className="ds-supp-grid">

            <div className="ds-supp-card bg-mint reveal d1">
              <div className="ds-supp-peek"><img src="https://static.wixstatic.com/media/66422a_52171f0b2c2d4ce583da8d46c4f65955~mv2.png" alt="Developmental Assessment" loading="lazy" decoding="async" /></div>
              <div className="ds-supp-icon c-mint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></div>
              <h4>Developmental Assessment</h4>
              <p>A detailed look at strengths, progress and individual support needs.</p>
              <span className="ds-supp-line c-mint"></span>
            </div>

            <div className="ds-supp-card bg-pink reveal d2">
              <div className="ds-supp-peek"><img src="https://static.wixstatic.com/media/66422a_9079f7745ef84b69864a0691d52c0bda~mv2.png" alt="Speech &amp; Language Support" loading="lazy" decoding="async" /></div>
              <div className="ds-supp-icon c-pink"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z" /></svg></div>
              <h4>Speech &amp; Language Support</h4>
              <p>Guidance to build communication and understanding.</p>
              <span className="ds-supp-line c-pink"></span>
            </div>

            <div className="ds-supp-card bg-blue reveal d3">
              <div className="ds-supp-peek"><img src="https://static.wixstatic.com/media/66422a_646ae35dbe9244429702d6e201a1c0f9~mv2.png" alt="Physiotherapy &amp; Motor Development" loading="lazy" decoding="async" /></div>
              <div className="ds-supp-icon c-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" /><circle cx="12" cy="7" r="2" /></svg></div>
              <h4>Physiotherapy &amp; Motor Development</h4>
              <p>Building strength, coordination and movement skills.</p>
              <span className="ds-supp-line c-blue"></span>
            </div>

            <div className="ds-supp-card bg-amber reveal d1">
              <div className="ds-supp-peek"><img src="https://static.wixstatic.com/media/66422a_865d33a0aaa14a5fbb38dc8fb99e600f~mv2.png" alt="Occupational Therapy" loading="lazy" decoding="async" /></div>
              <div className="ds-supp-icon c-amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" /><circle cx="12" cy="11" r="2.2" /></svg></div>
              <h4>Occupational Therapy</h4>
              <p>Support for everyday skills and independence.</p>
              <span className="ds-supp-line c-amber"></span>
            </div>

            <div className="ds-supp-card bg-purple reveal d2">
              <div className="ds-supp-peek"><img src="https://static.wixstatic.com/media/66422a_52171f0b2c2d4ce583da8d46c4f65955~mv2.png" alt="Learning &amp; Educational Support" loading="lazy" decoding="async" /></div>
              <div className="ds-supp-icon c-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V6.5A2.5 2.5 0 0 1 6.5 4H20v15" /></svg></div>
              <h4>Learning &amp; Educational Support</h4>
              <p>Approaches tailored to each child's pace and style.</p>
              <span className="ds-supp-line c-purple"></span>
            </div>

            <div className="ds-supp-card bg-mint reveal d3">
              <div className="ds-supp-peek"><img src="https://static.wixstatic.com/media/66422a_9eb07d317ef441adbec7693143f218da~mv2.png" alt="Social &amp; Communication Development" loading="lazy" decoding="async" /></div>
              <div className="ds-supp-icon c-mint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
              <h4>Social &amp; Communication Development</h4>
              <p>Building confidence in social settings and interactions.</p>
              <span className="ds-supp-line c-mint"></span>
            </div>

            <div className="ds-supp-card bg-amber reveal d1">
              <div className="ds-supp-peek"><img src="https://static.wixstatic.com/media/66422a_be4455f39cd64ebf87bf0aa85e5284e8~mv2.png" alt="Regular Medical Monitoring" loading="lazy" decoding="async" /></div>
              <div className="ds-supp-icon c-amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <h4>Regular Medical Monitoring</h4>
              <p>Ongoing check-ups to track health and development.</p>
              <span className="ds-supp-line c-amber"></span>
            </div>

            <div className="ds-supp-card bg-blue reveal d2">
              <div className="ds-supp-peek"><img className="wide" src="https://static.wixstatic.com/media/66422a_7b937718fb0243cb981ffe2e7fd4a956~mv2.png" alt="Family Guidance &amp; Counselling" loading="lazy" decoding="async" /></div>
              <div className="ds-supp-icon c-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
              <h4>Family Guidance &amp; Counselling</h4>
              <p>Helping families feel informed and supported at every step.</p>
              <span className="ds-supp-line c-blue"></span>
            </div>

          </div>
        </div>
      </section>

      {/* OUR AIM */}
      <section className="sec narrative" id="our-aim">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Supporting every child's quality of life</h2>
          </div>
          <div className="info-block reveal">
            <p>Our aim is to support every child's health, development, learning and overall quality of life through a personalized and compassionate approach.</p>
            <p>We understand that every child develops at their own pace. By identifying individual needs and providing appropriate guidance, families can better support their child's communication, independence, learning and participation in everyday life.</p>
          </div>
        </div>
      </section>

      {/* SECONDARY BANNER (BOTTOM) */}
      <section className="secondary-banner-sec" id="bottom-banner">
        <div className="hero-banner-full">
          <img src="/images/downs-syndrome/hero-banner-2.png" alt="Down's Syndrome Care and Support Banner" loading="lazy" decoding="async" />
        </div>
      </section>
    </>
  );
}
