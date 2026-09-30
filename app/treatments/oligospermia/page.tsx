import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Oligospermia Treatment for Low Sperm Count & Motility',
  description: 'Learn about oligospermia, low sperm count, male infertility and associated conditions, with supportive care from Dr. Ketan Patel, Vastrapur, Ahmedabad.',
  keywords: 'oligospermia homeopathy treatment, low sperm count natural treatment, asthenospermia homeopathy, azoospermia treatment India, oligozoospermia homeopathic remedy',
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

  header{position:fixed;top:0;left:0;right:0;z-index:90;transition:padding .4s var(--ease);padding:14px 0}
  @keyframes navShine{0%{transform:translateX(-160%) skewX(-22deg);opacity:0}6%{opacity:1}38%{transform:translateX(260%) skewX(-22deg);opacity:0}100%{transform:translateX(260%) skewX(-22deg);opacity:0}}
  header .wrap.nav{position:relative;overflow:hidden;background:rgba(252,250,247,.88);backdrop-filter:blur(22px) saturate(1.4) brightness(1.04);-webkit-backdrop-filter:blur(22px) saturate(1.4) brightness(1.04);border:1.5px solid rgba(255,255,255,.95);border-radius:999px;padding:10px 16px 10px 12px;box-shadow:0 4px 24px -8px rgba(10,31,68,.10),0 1.5px 0 rgba(255,255,255,.98) inset,0 -1px 0 rgba(10,31,68,.04) inset;transition:background .4s,box-shadow .4s}
  /* page hero */

  .page-hero{position:relative;background:radial-gradient(120% 120% at 84% 0%,#d4eef9 0%,#BAE0F3 48%,#9ed0eb 100%);color:var(--blue);padding:64px 0 74px;overflow:hidden}
  .page-hero::after{content:"";position:absolute;inset:0;background:radial-gradient(70% 55% at 74% 46%,rgba(255,255,255,.22),rgba(186,224,243,.15) 100%);pointer-events:none}
  .page-hero .wrap{position:relative;z-index:2;max-width:780px}
  .page-hero h1{font-size:clamp(2rem,3.6vw,2.7rem);margin:16px 0 18px}
  .page-hero .lead{color:rgba(10,31,68,.82);font-size:1.02rem;max-width:62ch;margin-bottom:18px}
  .page-hero-trust{display:flex;flex-wrap:wrap;gap:14px 26px;align-items:end;border-top:1px solid rgba(10,31,68,.16);padding-top:18px;margin-top:26px}
  .page-hero-trust .stat-num{font-family:'Open Sans',sans-serif;font-weight:700;font-size:1.5rem;color:#0a4a6e;display:block;line-height:1}
  .page-hero-trust .lbl{font-size:.7rem;color:rgba(10,31,68,.7);line-height:1.35;margin-top:5px;max-width:15ch}
  .honesty{display:inline-flex;align-items:center;gap:.55rem;font-size:.78rem;color:rgba(10,31,68,.88);background:rgba(255,255,255,.45);border:1px solid rgba(10,31,68,.2);padding:.45rem .8rem;border-radius:9px;margin-bottom:26px}
  .honesty svg{width:15px;height:15px;flex:0 0 auto;color:var(--teal)}
  .page-hero-cta{display:flex;gap:12px;flex-wrap:wrap}
  .breadcrumb{font-size:.76rem;color:rgba(10,31,68,.6);margin-bottom:14px;display:flex;gap:6px;align-items:center}
  .breadcrumb a{color:rgba(10,31,68,.6);transition:color .25s}
  .breadcrumb a:hover{color:var(--teal)}

  .sec{padding:82px 0}
  .sec-head{max-width:700px;margin:0 auto 40px;text-align:center}
  .sec-head.left{text-align:left;margin:0 0 34px;max-width:760px}
  .sec-head h2{font-size:clamp(1.5rem,2.6vw,2.1rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}
  .sec-head.left .lead{margin:0}
  .reveal{opacity:0;transform:translateY(28px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
  .reveal.in{opacity:1;transform:none}
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
  .cta .eyebrow{color:var(--teal)}

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
    .foot-grid{grid-template-columns:1fr 1fr}
  }
  @media(max-width:1180px){
    .navlinks{display:none}
    .menu-toggle{display:flex}
    .navlinks.show{display:flex;position:absolute;top:100%;left:0;right:0;flex-direction:column;background:rgba(250,248,244,.97);backdrop-filter:blur(16px);padding:20px 26px;gap:15px;box-shadow:var(--shadow)}
    .navlinks.show a{color:var(--blue);font-size:.9rem}
  }
  @media(max-width:680px){
    .glance-grid{grid-template-columns:1fr}
    .mini-grid{grid-template-columns:1fr}
    .foot-grid{grid-template-columns:1fr}
    .sec{padding:56px 0}
    .page-hero{padding:130px 0 54px}
    .list-card{padding:22px 20px}
    .type-card{padding:26px 22px}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
  }
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}

  /* ============ NEW HERO ============ */
  .hero2{position:relative;background:radial-gradient(120% 120% at 14% 0%,#eaf7fc 0%,#cdeaf6 45%,#a9dcef 100%);overflow:hidden;padding:56px 0 64px}
  .hero2-deco{position:absolute;border-radius:50%;filter:blur(2px);pointer-events:none;z-index:1}
  .hero2-deco.d-a{width:420px;height:420px;background:radial-gradient(circle,rgba(255,255,255,.55),rgba(255,255,255,0) 70%);top:-140px;right:-100px}
  .hero2-deco.d-b{width:260px;height:260px;background:radial-gradient(circle,rgba(0,140,140,.14),rgba(0,140,140,0) 70%);bottom:-80px;left:8%}
  .hero2-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:48px;max-width:1320px;margin:0 auto;padding:0 26px}
  .hero2-copy{max-width:620px}
  .hero2-copy h1{font-size:clamp(1.9rem,3.3vw,2.5rem);margin:14px 0 16px;color:var(--blue);line-height:1.14}
  .hero2-copy .lead{color:rgba(10,31,68,.82);margin-bottom:18px}
  .hero2-info{display:flex;gap:.7rem;align-items:flex-start;font-size:.82rem;color:rgba(10,31,68,.85);background:rgba(255,255,255,.6);border:1px solid rgba(10,31,68,.14);padding:.85rem 1.05rem;border-radius:13px;margin-bottom:22px}
  .hero2-info svg{width:17px;height:17px;flex:0 0 auto;color:var(--teal);margin-top:1px}
  .hero2-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:30px}
  .hero2-stats{display:flex;gap:12px;flex-wrap:wrap}
  .hero2-stat{flex:1;min-width:130px;background:#fff;border:1px solid rgba(10,31,68,.1);border-radius:14px;padding:14px 12px;text-align:center;box-shadow:0 8px 20px -14px rgba(10,31,68,.25)}
  .hero2-stat .hs-ico{width:34px;height:34px;border-radius:50%;background:var(--teal-10);display:grid;place-items:center;margin:0 auto 8px;color:var(--teal)}
  .hero2-stat .hs-ico svg{width:16px;height:16px}
  .hero2-stat .stat-num{font-family:'Open Sans',sans-serif;font-weight:700;font-size:1.3rem;color:#0a4a6e;display:block;line-height:1}
  .hero2-stat .lbl{font-size:.68rem;color:rgba(10,31,68,.65);margin-top:5px;display:block}
  .hero2-media-wrap{position:relative;z-index:2}
  .hero2-media{position:relative;border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -22px rgba(10,31,68,.35);border:6px solid #fff;aspect-ratio:4/5}
  .hero2-media img{width:100%;height:100%;object-fit:cover;object-position:center 22%}
  .hero2-badge-float{position:absolute;left:-18px;bottom:22px;background:#fff;border-radius:14px;padding:12px 16px;box-shadow:0 16px 34px -14px rgba(10,31,68,.35);display:flex;align-items:center;gap:10px;z-index:3;max-width:220px}
  .hero2-badge-float .bf-ico{width:36px;height:36px;border-radius:50%;background:var(--teal-10);display:grid;place-items:center;color:var(--teal);flex:0 0 auto}
  .hero2-badge-float .bf-ico svg{width:17px;height:17px}
  .hero2-badge-float .bf-num{font-family:'Open Sans',sans-serif;font-weight:700;color:var(--blue);font-size:1rem;line-height:1.1}
  .hero2-badge-float .bf-lbl{font-size:.68rem;color:#667}
  @media(max-width:900px){.hero2-grid{grid-template-columns:1fr;gap:30px}.hero2-media{max-width:380px;margin:0 auto;aspect-ratio:1/1}.hero2-badge-float{left:8px}}

  /* ============ NEW GLANCE (dark cards w/ illustration) ============ */
  .glance2-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .glance2-card{background:rgba(186,224,243,.08);border:1.5px solid rgba(255,255,255,.16);border-radius:20px;overflow:hidden;box-shadow:0 10px 34px -14px rgba(0,0,0,.4);transition:transform .4s var(--ease),border-color .4s}
  .glance2-card:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.4)}
  .glance2-card img{width:100%;display:block;aspect-ratio:1/.9;object-fit:cover}
  .glance2-body{padding:18px 20px 22px;border-top:1px solid rgba(255,255,255,.1)}
  .glance2-body h4{color:#fff;font-size:.95rem;margin-bottom:6px}
  .glance2-body p{font-size:.8rem;color:rgba(220,240,252,.78);line-height:1.55}

  /* ============ UNDERSTANDING (badge + split + circle photo) ============ */
  .badge-pill{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);border-radius:999px;padding:9px 18px 9px 10px;box-shadow:var(--shadow-sm);font-size:.72rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--blue);margin-bottom:22px}
  .badge-pill .bp-ico{width:30px;height:30px;border-radius:50%;border:1.5px solid var(--line);display:grid;place-items:center;color:var(--blue)}
  .badge-pill .bp-ico svg{width:14px;height:14px}
  .badge-pill .bp-dot{color:var(--teal)}
  .understand-grid{display:grid;grid-template-columns:1.3fr .7fr;gap:46px;align-items:center;margin-bottom:34px}
  .understand-media{position:relative;border-radius:50%;overflow:hidden;aspect-ratio:1/1;box-shadow:0 30px 60px -22px rgba(10,31,68,.32);border:8px solid #fff;max-width:340px;margin-left:auto}
  .understand-media img{width:100%;height:100%;object-fit:cover;background:#dceefa}
  .split-hd h2{font-size:clamp(1.7rem,3.4vw,2.6rem);line-height:1.1}
  .split-hd h2 .accent{color:var(--teal)}

  /* ============ TREATMENT AIMS split card ============ */
  .aims-card{background:#fff;border:1px solid var(--line);border-radius:22px;overflow:hidden;box-shadow:var(--shadow-sm);display:grid;grid-template-columns:1.15fr .85fr;align-items:stretch;margin-bottom:24px}
  .aims-card-body{padding:32px 36px}
  .aims-card-body h4{font-size:1.05rem;margin-bottom:16px}
  .aims-card-media{position:relative;min-height:220px}
  .aims-card-media img{width:100%;height:100%;object-fit:cover;display:block}
  .aims-duo{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:34px}
  .aims-mini{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:var(--shadow-sm);display:flex;align-items:stretch}
  .aims-mini.teal{background:linear-gradient(160deg,#e4f6f6,#f2fbfb)}
  .aims-mini-txt{padding:24px 22px;flex:1}
  .aims-mini-txt .mi-ico{width:36px;height:36px;border-radius:10px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;margin-bottom:12px}
  .aims-mini-txt .mi-ico svg{width:17px;height:17px}
  .aims-mini-txt h5{font-size:.95rem;margin-bottom:8px;color:var(--blue);font-family:'Poppins',sans-serif;font-weight:600}
  .aims-mini-txt p{font-size:.82rem;color:#555;line-height:1.6}
  .aims-mini-txt mark{background:rgba(0,140,140,.16);color:#0a6d6d;padding:.05em .3em;border-radius:5px;font-weight:600}
  .aims-mini-media{flex:0 0 42%}
  .aims-mini-media img{width:100%;height:100%;object-fit:cover;display:block}
  .help-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:22px}
  .help-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px}
  .help-card .h-ico{width:36px;height:36px;border-radius:10px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;margin-bottom:10px}
  .help-card .h-ico svg{width:17px;height:17px}
  .help-card h5{font-size:.88rem;margin-bottom:5px;color:var(--blue)}
  .help-card p{font-size:.78rem;color:#666}
  .foot-note-pill{display:flex;align-items:center;justify-content:center;gap:9px;background:rgba(0,140,140,.09);border:1px solid rgba(0,140,140,.22);border-radius:14px;padding:14px 18px;font-size:.84rem;color:#0a6d6d;text-align:center}
  .foot-note-pill svg{width:16px;height:16px;flex:0 0 auto}
  @media(max-width:900px){.aims-card{grid-template-columns:1fr}.aims-card-media{min-height:180px}.aims-duo{grid-template-columns:1fr}.help-strip{grid-template-columns:1fr}}

  /* ============ ADVANTAGES & PRECAUTIONS icon headers ============ */
  .adv-card h4{display:flex;align-items:center;gap:12px}
  .adv-card .ah-ico{width:42px;height:42px;border-radius:50%;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;flex:0 0 auto}
  .adv-card .ah-ico svg{width:19px;height:19px}
  .adv-card.gold .ah-ico{background:rgba(200,169,107,.16);color:#a5813f}
  .conditions-card{position:relative;overflow:hidden}
  .conditions-media{position:absolute;right:26px;bottom:0;width:150px;opacity:.95;pointer-events:none}
  .conditions-media img{width:100%;display:block}
  @media(max-width:680px){.conditions-media{display:none}}

  /* ============ OUR APPROACH split photo cards ============ */
  .approach-card{background:#fff;border-radius:22px;overflow:hidden;box-shadow:var(--shadow-sm);display:grid;grid-template-columns:1fr 1fr;align-items:stretch;margin-bottom:22px}
  .approach-card-media{min-height:230px}
  .approach-card-media img{width:100%;height:100%;object-fit:cover;display:block}
  .approach-card-body{padding:32px 36px;display:flex;flex-direction:column;justify-content:center}
  .approach-card-body h4{font-size:1.08rem;margin-bottom:12px;position:relative;padding-left:16px}
  .approach-card-body h4::before{content:"";position:absolute;left:0;top:3px;bottom:3px;width:4px;border-radius:3px;background:var(--teal)}
  .approach-card.warn .approach-card-body h4::before{background:var(--gold)}
  .approach-card-body p{font-size:.9rem;color:#444;line-height:1.75}
  @media(max-width:820px){.approach-card{grid-template-columns:1fr}.approach-card-media{min-height:180px}.approach-card.warn .approach-card-media{order:2}}`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      {/*  HEADER  */}


{/*  PAGE HERO  */}
<section className="hero2" id="top">
  <div className="hero2-deco d-a"></div>
  <div className="hero2-deco d-b"></div>
  <div className="hero2-grid">
    <div className="hero2-copy">
      <h1 className="reveal d1">Oligospermia — Low Sperm Count &amp; Motility Support</h1>
      <p className="lead reveal d2">Low sperm count and motility can affect fertility. Our supportive homeopathic care aims to help improve your chances naturally — always alongside proper fertility evaluation.</p>
      <div className="hero2-stats reveal d3">
        <div className="hero2-stat">
          <div className="hs-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3a4 4 0 0 0-4 4c0 3 4 6 4 6h8s4-3 4-6a4 4 0 0 0-7-2.6A4 4 0 0 0 8 3Z"/><path d="M8 13v3a4 4 0 0 0 8 0v-3"/></svg></div>
          <span className="stat-num">20+</span><span className="lbl">Years of practice</span>
        </div>
        <div className="hero2-stat">
          <div className="hs-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <span className="stat-num">3</span><span className="lbl">Experienced physicians</span>
        </div>
        <div className="hero2-stat">
          <div className="hs-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
          <span className="stat-num">7–9</span><span className="lbl">Months, typical course*</span>
        </div>
      </div>
    </div>
    <div className="hero2-media-wrap reveal d1">
      <div className="hero2-media">
        <img src="/images/oligospermia/image-1.jpg" alt="Couple looking forward to fertility treatment together" loading="lazy" decoding="async" />
      </div>
      <div className="hero2-badge-float">
        <div className="bf-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <div><div className="bf-num">20+ Years</div><div className="bf-lbl">of trusted practice</div></div>
      </div>
    </div>
  </div>
</section>

{/*  QUICK FACTS  */}
<section className="sec glance">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>Sperm count, by the numbers</h2>
    </div>
    <div className="glance2-grid">
      <div className="glance2-card reveal d1">
        <img src="/images/oligospermia/image-2.jpg" alt="Normal sperm count illustration" loading="lazy" decoding="async" />
        <div className="glance2-body"><h4>Normal Sperm Count</h4><p>20–120 million sperm per millilitre of semen.</p></div>
      </div>
      <div className="glance2-card reveal d2">
        <img src="/images/oligospermia/image-3.jpg" alt="Oligospermia illustration" loading="lazy" decoding="async" />
        <div className="glance2-body"><h4>Oligospermia</h4><p>Sperm count below 20 million per millilitre.</p></div>
      </div>
      <div className="glance2-card reveal d3">
        <img src="/images/oligospermia/image-4.jpg" alt="Azoospermia illustration" loading="lazy" decoding="async" />
        <div className="glance2-body"><h4>Azoospermia</h4><p>Complete absence of sperm in the ejaculate.</p></div>
      </div>
      <div className="glance2-card reveal d1">
        <img src="/images/oligospermia/image-5.jpg" alt="Male factor infertility illustration" loading="lazy" decoding="async" />
        <div className="glance2-body"><h4>Male Factor</h4><p>Contributes to ~30% of infertility cases, plus 20% as a contributing factor.</p></div>
      </div>
    </div>
  </div>
</section>

{/*  WHAT IS OLIGOSPERMIA  */}
<section className="sec">
  <div className="wrap">
    <div className="understand-grid">
      <div className="reveal">
        <div className="split-hd">
          <h2>Understanding<br /><span className="accent">Oligospermia</span></h2>
        </div>
        <p className="lead" style={({"marginTop":"14px"} as React.CSSProperties)}>Oligospermia is a condition where the sperm count is lower than normal. It can affect fertility but with proper evaluation and guidance, better outcomes are possible.</p>
      </div>
      <div className="understand-media reveal d1">
        <img src="/images/oligospermia/image-6.jpg" alt="Sperm approaching egg — illustration of fertilisation" loading="lazy" decoding="async" />
      </div>
    </div>
    <div className="list-card conditions-card reveal d1" style={({"position":"relative"} as React.CSSProperties)}>
      <div style={({"position":"absolute","top":"24px","right":"26px","width":"46px","height":"46px","borderRadius":"50%","background":"var(--teal-10)","color":"var(--teal)","display":"grid","placeItems":"center"} as React.CSSProperties)}><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/><path d="M9 12l2 2 4-4"/></svg></div>
      <h4>Conditions Associated with Male Infertility</h4>
      <div className="check-grid">
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Oligospermia &amp; oligozoospermia</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Oligoasthenospermia</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Oligoasthenoteratozoospermia (OAT)</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Asthenozoospermia &amp; asthenospermia</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Teratospermia &amp; teratozoospermia</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Polyzoospermia</div>
      </div>
      <p className="prose" style={({"marginTop":"14px","fontSize":".85rem"} as React.CSSProperties)}>These conditions may affect sperm count, motility, morphology, or overall fertility potential.</p>
    </div>
  </div>
</section>

{/*  TREATMENT AIMS  */}
<section className="sec tint">
  <div className="wrap">
    <div className="sec-head left reveal">
      <h2>What the treatment aims to improve</h2>
      <p className="lead">A personalised approach to enhance male reproductive health and fertility.</p>
    </div>

    <div className="aims-card reveal d1">
      <div className="aims-card-body">
        <h4>Treatment Aims to Improve</h4>
        <div className="check-grid">
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Sperm count</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Sperm motility</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Semen volume</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Sperm morphology</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Spermatogenesis (sperm production)</div>
        </div>
      </div>
      <div className="aims-card-media"><img src="/images/oligospermia/image-7.jpg" alt="Semen analysis sample being handled in a lab" loading="lazy" decoding="async" /></div>
    </div>

    <div className="aims-duo">
      <div className="aims-mini reveal d1">
        <div className="aims-mini-txt">
          <div className="mi-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
          <h5>Treatment Duration</h5>
          <p>Treatment generally takes <mark>7–9 months</mark>, with improvements expected during this period.*</p>
        </div>
        <div className="aims-mini-media"><img src="/images/oligospermia/image-8.jpg" alt="Calendar showing 7 to 9 months treatment duration" loading="lazy" decoding="async" /></div>
      </div>
      <div className="aims-mini teal reveal d2">
        <div className="aims-mini-txt">
          <div className="mi-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <h5>Male Fertility &amp; Conception</h5>
          <p>Addresses key male factors — which can contribute to <mark>~30% of infertility cases</mark>.*</p>
        </div>
        <div className="aims-mini-media"><img src="/images/oligospermia/image-9.jpg" alt="Couple reviewing a fertility report together" loading="lazy" decoding="async" /></div>
      </div>
    </div>

    <h4 style={({"marginBottom":"16px","fontSize":"1.02rem","color":"var(--blue)","textAlign":"center"} as React.CSSProperties)}>How the treatment helps</h4>
    <div className="help-strip">
      <div className="help-card reveal d1">
        <div className="h-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 3a6.5 6.5 0 1 0 5 10.7L19 18l1-1-4.3-4.5A6.5 6.5 0 0 0 9.5 3Z"/></svg></div>
        <h5>Improves Sperm Quality</h5>
        <p>Supports better count &amp; motility.</p>
      </div>
      <div className="help-card reveal d2">
        <div className="h-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5s-1 3-1 5a5 5 0 0 0 10 0c0-2-1-3-1-5s1-3 1-5a5 5 0 0 0-5-5Z"/></svg></div>
        <h5>Restores Hormonal Balance</h5>
        <p>Supports natural reproductive health.</p>
      </div>
      <div className="help-card reveal d3">
        <div className="h-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h5>Builds Fertility Potential</h5>
        <p>Aims for healthier conception outcomes.</p>
      </div>
    </div>

    <div className="foot-note-pill reveal d1">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 8 17 8s3 1.5 1.9 7.2A7 7 0 0 1 11 20Z"/></svg>
      Individualised, safe and holistic care for better reproductive health.
    </div>

    <div className="callout warn reveal d1" style={({"marginTop":"26px"} as React.CSSProperties)}>
      <h4>*About these figures</h4>
      Treatment duration, effectiveness and the figures above reflect the clinic's own stated experience and claims, organised here without adding new medical claims. They are not established by high-quality scientific evidence — please discuss your individual case with a urologist or fertility specialist.
    </div>
  </div>
</section>

{/*  DURING AN ATTACK, RISK FACTORS, DIAGNOSIS  */}
<section className="sec">
  <div className="wrap">
    <div className="sec-head left reveal">
      <h2>What the treatment offers, and what to keep in mind</h2>
    </div>
    <div className="type-grid" style={({"gridTemplateColumns":"1fr 1fr"} as React.CSSProperties)}>
      <div className="list-card adv-card reveal d1">
        <h4><span className="ah-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg></span>Advantages of Treatment</h4>
        <div className="check-grid cols-1">
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Supports improvement in sperm count</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Helps improve motility and semen volume</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Aims to normalise abnormal sperm morphology</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Hormone-free homeopathic medicines</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Small, easy-to-take homeopathic pills</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>May help address varicocele &amp; hormonal imbalance</div>
        </div>
      </div>
      <div className="list-card adv-card gold reveal d2">
        <h4><span className="ah-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/><path d="M9 12l2 2 4-4"/></svg></span>Precautions Before &amp; During Treatment</h4>
        <div className="check-grid cols-1">
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Avoid hormonal or oral fertility treatments for at least one month before starting</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>A semen analysis report is required before treatment, to monitor progress</div>
          <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Avoid additional food supplements, vitamins and sexual tonics during treatment</div>
        </div>
      </div>
    </div>
    <div className="list-card conditions-card reveal d3" style={({"marginTop":"24px"} as React.CSSProperties)}>
      <h4>Conditions Treated</h4>
      <div className="check-grid">
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Oligospermia &amp; low sperm count</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Low sperm motility</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Azoospermia</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Male infertility</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Oligoasthenoteratozoospermia</div>
        <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>Spermatogenesis disorders</div>
      </div>
      <div className="conditions-media"><img src="/images/oligospermia/image-10.jpg" alt="Magnifying glass over a sperm cell" loading="lazy" decoding="async" /></div>
    </div>
  </div>
</section>

{/*  HOMEOPATHIC APPROACH  */}
<section className="sec tint">
  <div className="wrap" style={({"maxWidth":"1040px"} as React.CSSProperties)}>
    <div className="sec-head reveal">
      <h2>Individualised, hormone-free support</h2>
      <p className="lead">Our approach focuses on addressing the root cause and supporting your body's natural potential – without relying on hormones.</p>
    </div>

    <div className="approach-card reveal d1">
      <div className="approach-card-media"><img src="/images/oligospermia/image-11.jpg" alt="Close-up of assisted reproduction / fertilisation" loading="lazy" decoding="async" /></div>
      <div className="approach-card-body">
        <h4>Supporting normal spermatogenesis and hormonal balance</h4>
        <p>The approach is aimed at supporting normal spermatogenesis and hormonal balance, using small, easy-to-take, hormone-free homeopathic medicines. Care is individualised, and may also benefit selected cases associated with small testes or a single testis.</p>
      </div>
    </div>

    <div className="approach-card warn reveal d2">
      <div className="approach-card-body">
        <h4>Important</h4>
        <p>Male infertility should first be properly evaluated by a urologist or fertility specialist. Homeopathic support is offered alongside — never as a replacement for — that evaluation and any medical treatment already advised.</p>
      </div>
      <div className="approach-card-media"><img src="/images/oligospermia/image-12.jpg" alt="Doctor discussing evaluation and treatment with a patient" loading="lazy" decoding="async" /></div>
    </div>
  </div>
</section>

{/*  CTA  */}
<section className="cta">
  <div className="wrap">
    <h2 className="reveal d1">A calm, honest conversation about your fertility.</h2>
    <p className="reveal d1">Book a consultation or share your semen analysis report securely. We'll listen carefully, be honest about how we can help, and work in step with your urologist or fertility specialist.</p>
    <div className="cta-row reveal d2">
      <Link className="btn btn-primary" href="/contactus">Book a Consultation</Link>
      <a className="btn btn-ghost" href="tel:+919898005354">Call +91 98980 05354</a>
      <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener">WhatsApp our team</a>
    </div>
  </div>
</section>

{/*  FOOTER  */}


{/*  STICKY  */}
    </>
  );
}
