import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Speciality Homeopathy',
  description: 'Review the terms governing use of the Speciality Homeopathy website,including no-medical-advice liability, appointment policies, and site usage guidelines.',
  keywords: 'terms and conditions medical website, website terms of use, medical clinic terms, appointment policy, no medical advice disclaimer',
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


  /* page hero */
  .page-hero{position:relative;background:radial-gradient(120% 120% at 84% 0%,#d4eef9 0%,#BAE0F3 48%,#9ed0eb 100%);color:var(--blue);padding:64px 0 74px;overflow:hidden}
  .page-hero::after{content:"";position:absolute;inset:0;background:radial-gradient(70% 55% at 74% 46%,rgba(255,255,255,.22),rgba(186,224,243,.15) 100%);pointer-events:none}
  .page-hero .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
  .page-hero h1{font-size:clamp(2rem,3.6vw,2.7rem);margin:16px 0 18px}
  .page-hero .lead{color:rgba(10,31,68,.82);font-size:1.02rem;max-width:54ch;margin-bottom:18px}
  .page-hero-trust{display:flex;flex-wrap:wrap;gap:14px 26px;align-items:end;border-top:1px solid rgba(10,31,68,.16);padding-top:18px;margin-top:26px}
  .page-hero-trust .stat-num{font-family:'Open Sans',sans-serif;font-weight:700;font-size:1.5rem;color:#0a4a6e;display:block;line-height:1}
  .page-hero-trust .lbl{font-size:.7rem;color:rgba(10,31,68,.7);line-height:1.35;margin-top:5px;max-width:15ch}

  /* hero visual — floating support illustration */
  .hero-visual{position:relative;display:flex;align-items:center;justify-content:center;min-height:360px}
  .hv-stage{position:relative;width:100%;max-width:400px;aspect-ratio:1/1;display:grid;place-items:center}
  .hv-glow{position:absolute;inset:6%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.55) 0%,rgba(255,255,255,0) 72%)}
  .hv-ring{position:absolute;inset:0;width:100%;height:100%;animation:hvSpin 34s linear infinite}
  .hv-ring circle{fill:none;stroke:rgba(10,31,68,.28);stroke-width:1.4;stroke-dasharray:2 10;stroke-linecap:round}
  @keyframes hvSpin{to{transform:rotate(360deg)}}
  .hv-center{position:relative;z-index:2;width:158px;height:158px;border-radius:50%;background:linear-gradient(150deg,var(--teal),var(--blue));display:grid;place-items:center;box-shadow:0 24px 50px -18px rgba(10,31,68,.45);animation:hvPulse 5s var(--ease) infinite}
  .hv-center svg{width:74px;height:74px}
  @keyframes hvPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.045)}}
  .hv-badge{position:absolute;display:flex;align-items:center;gap:9px;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.9);border-radius:14px;padding:10px 14px;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.76rem;color:var(--blue);box-shadow:var(--shadow-sm);z-index:3;animation:hvFloat 6s var(--ease) infinite}
  .hv-badge .bi{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;flex:0 0 auto;color:#fff}
  .hv-badge .bi svg{width:15px;height:15px}
  .hv-badge-1{top:4%;left:-4%;animation-delay:0s}
  .hv-badge-1 .bi{background:var(--teal)}
  .hv-badge-2{bottom:14%;left:-8%;animation-delay:1.4s}
  .hv-badge-2 .bi{background:var(--gold)}
  .hv-badge-3{top:38%;right:-8%;animation-delay:.7s}
  .hv-badge-3 .bi{background:#0a4a6e}
  @keyframes hvFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
  @media(max-width:980px){
    .page-hero .wrap{grid-template-columns:1fr}
    .hero-visual{order:-1;min-height:280px}
    .hv-stage{max-width:280px}
  }
  @media(max-width:680px){
    .hv-badge{font-size:.68rem;padding:8px 11px}
    .hv-badge-1,.hv-badge-2{left:2%}
    .hv-badge-3{right:2%}
  }
  .honesty{display:inline-flex;align-items:center;gap:.55rem;font-size:.78rem;color:rgba(10,31,68,.88);background:rgba(255,255,255,.45);border:1px solid rgba(10,31,68,.2);padding:.45rem .8rem;border-radius:9px;margin-bottom:26px}
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
  .reveal{opacity:0;transform:translateY(28px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
  .reveal.in{opacity:1;transform:none}
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

  /* footer */
  footer{background:#071529;color:rgba(250,248,244,.78);padding:62px 0 28px;font-size:.86rem}
  .foot-grid{display:grid;grid-template-columns:1.5fr 1fr 1.1fr;gap:34px;margin-bottom:34px}
  footer h5{font-family:'Open Sans',sans-serif;font-size:.74rem;letter-spacing:.13em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;font-weight:600}
  footer ul{list-style:none}
  footer li{margin-bottom:8px}
  footer a:hover{color:var(--ivory)}
  .foot-brand .brand-name{color:var(--ivory)}
  .foot-brand p{margin-top:12px;max-width:38ch;color:rgba(250,248,244,.6);font-size:.83rem}
  .disclaimer{border:1px solid rgba(250,248,244,.14);background:rgba(255,255,255,.03);border-radius:13px;padding:18px 22px;font-size:.76rem;color:rgba(250,248,244,.66);line-height:1.6;margin-bottom:28px}
  .disclaimer b{color:var(--gold);font-family:'Open Sans',sans-serif}
  .foot-bottom{border-top:1px solid rgba(250,248,244,.12);padding-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:.76rem;color:rgba(250,248,244,.55)}
  .foot-bottom a{margin-left:16px}

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
    .foot-grid{grid-template-columns:1fr 1fr}
  }
  @media(max-width:1180px){
    .navlinks{display:none}
    .menu-toggle{display:flex}
    .navlinks.show{display:flex;position:absolute;top:100%;left:0;right:0;flex-direction:column;background:rgba(250,248,244,.97);backdrop-filter:blur(16px);padding:20px 26px;gap:15px;box-shadow:var(--shadow)}
    .navlinks.show a{color:var(--blue)}
    .navlinks.show a{font-size:.9rem}
  }
  @media(max-width:680px){
    .neuro-grid{grid-template-columns:1fr}
    .beh-grid{grid-template-columns:1fr}
    .beh-grid .beh-card:last-child{max-width:100%}
    .foot-grid{grid-template-columns:1fr}
    .sec{padding:60px 0}
    .page-hero{padding:130px 0 54px}
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

  @media(max-width:980px){
    .symptom-grid{grid-template-columns:1fr}
    .split-list{grid-template-columns:1fr;gap:24px}
    .type-grid.cols-2{grid-template-columns:1fr}
  }
  @media(max-width:680px){
    .check-grid{grid-template-columns:1fr}
  }

  /* ===== IMAGE PLACEHOLDER ===== */
  .img-ph{position:relative;width:100%;height:100%;min-height:120px;background:repeating-linear-gradient(45deg,rgba(10,31,68,.05),rgba(10,31,68,.05) 10px,rgba(10,31,68,.09) 10px,rgba(10,31,68,.09) 20px);border:1.5px dashed rgba(10,31,68,.25);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:rgba(10,31,68,.45);font-family:'Open Sans',sans-serif;font-size:.72rem;font-weight:600;letter-spacing:.02em;text-align:center;padding:10px}
  .img-ph svg{width:26px;height:26px;opacity:.6}
  .neuro .img-ph{border-color:rgba(255,255,255,.35);color:rgba(255,255,255,.68);background:repeating-linear-gradient(45deg,rgba(255,255,255,.05),rgba(255,255,255,.05) 10px,rgba(255,255,255,.09) 10px,rgba(255,255,255,.09) 20px)}

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
  .symptom-card{padding:0;overflow:hidden}
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

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      
      
      <section className="page-hero" id="top">
        <div className="wrap">
          <div>
            <h1>Terms & Conditions</h1>
            <p className="lead">Terms of service and consultation guidelines at Speciality Homeopathy.</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-sm)' }}>
            <h2>Terms & Conditions Notice</h2>
            <p style={{ marginTop: '16px', lineHeight: '1.8' }}>
              Speciality Homeopathy provides supportive and complementary homeopathic care and family guidance.
              We do not diagnose medical conditions and do not offer cures for any chronic or medical condition described on this website.
              Our care is intended to support general wellbeing alongside — never as a substitute for — diagnosis, treatment, and ongoing care from qualified medical and allied-health professionals.
            </p>
            <p style={{ marginTop: '16px', lineHeight: '1.8' }}>
              Never stop, reduce, or delay medical treatment or medication your child or family member is receiving from their medical doctor.
              All patient information, medical histories, and consultation records are kept strictly confidential in accordance with medical ethics and applicable data protection guidelines.
            </p>
          </div>
        </div>
      </section>
  
      
    </>
  );
}
