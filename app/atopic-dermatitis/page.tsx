import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Chronic Atopic Dermatitis Eczema Homeopathy Treatment',
  description: "Learn about atopic dermatitis, including causes, types and common symptoms, with supportive care alongside your dermatologist. Dr. Ketan Patel, Ahmedabad.",
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
  .page-hero-features{display:flex;gap:0;align-items:flex-start;margin-top:24px}
  .hpf-item{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:0 22px}
  .hpf-item:first-child{padding-left:0}
  .hpf-item + .hpf-item{border-left:1px solid rgba(10,31,68,.15)}
  .hpf-ico{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.55);display:grid;place-items:center;color:var(--teal);flex:0 0 auto}
  .hpf-ico svg{width:18px;height:18px}
  .hpf-item span{font-size:.76rem;font-weight:600;color:var(--blue);line-height:1.3;max-width:12ch}

  /* hero visual — real photo in rectangular frame */
  .hero-visual{position:relative;display:flex;align-items:center;justify-content:center;min-height:360px}
  .hv-stage{position:relative;width:100%;max-width:400px;aspect-ratio:4/5;display:grid;place-items:center}
  .hv-ring{position:absolute;inset:-14px;border-radius:26px;border:1.5px solid rgba(255,255,255,.75)}
  .hv-photo{position:relative;z-index:2;width:100%;height:100%;border-radius:22px;overflow:hidden;box-shadow:0 30px 60px -20px rgba(10,31,68,.4),0 0 0 6px rgba(255,255,255,.5)}
  .hv-photo img{width:100%;height:100%;object-fit:cover;object-position:center 22%;display:block}
  @media(max-width:980px){
    .page-hero .wrap{grid-template-columns:1fr}
    .hero-visual{order:-1;min-height:280px}
    .hv-stage{max-width:300px}
  }
  .honesty{display:none}
  .breadcrumb{display:none}
  .page-hero-cta{display:flex;gap:12px;flex-wrap:wrap}

  /* sections */
  .sec{padding:88px 0}
  .sec-head{max-width:700px;margin:0 auto 46px;text-align:center}
  .sec-head h2{font-size:clamp(1.6rem,2.8vw,2.25rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}
  .reveal{opacity:0;transform:translateY(28px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
  .reveal.in{opacity:1;transform:none}
  .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}

  /* SECTION 1 — types (photo cards with overlapping icon) */
  .types{background:linear-gradient(160deg,#eef4fa 0%,#f3f7fb 45%,#e9f1f8 100%)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;counter-reset:p}
  .type-card{position:relative;background:#fff;border-radius:26px;overflow:visible;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .type-photo{position:relative;width:100%;aspect-ratio:16/11;border-radius:26px 26px 40% 40%/26px 26px 60px 60px;overflow:hidden;background:#eee}
  .type-photo img{width:100%;height:100%;object-fit:cover;display:block}
  .type-card .num{counter-increment:p;position:absolute;top:16px;left:16px;z-index:2;display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.92);backdrop-filter:blur(4px);font-weight:700;font-size:.8rem;letter-spacing:.02em;color:var(--teal);box-shadow:var(--shadow-sm)}
  .type-card .num::before{content:"0" counter(p)}
  .pico{position:relative;z-index:2;width:58px;height:58px;border-radius:50%;display:grid;place-items:center;margin:-29px auto 0;background:#fff;color:var(--teal);box-shadow:0 8px 20px -8px rgba(10,31,68,.35);border:1px solid var(--line);transition:transform .4s var(--ease)}
  .pico svg{width:23px;height:23px}
  .type-card:hover .pico{transform:scale(1.08) rotate(-4deg)}
  .type-top{padding:16px 30px 4px;text-align:center}
  .type-top h3{font-size:1.1rem;text-align:center}
  .type-body{flex:1;padding:0 30px 34px;text-align:center}
  .type-body p{font-size:.88rem;color:#555;line-height:1.7}

  /* SECTION 2 — neuro conditions (dark frosted cards) */
  .neuro{background:var(--blue);color:var(--ivory)}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .eyebrow{color:var(--gold)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .neuro-card{position:relative;overflow:hidden;background:rgba(186,224,243,.08);border:1.5px solid rgba(255,255,255,.14);border-radius:18px;padding:46px 20px 26px;min-height:260px;text-align:center;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.18) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .neuro-card:hover{transform:translateY(-7px) scale(1.012);border-color:rgba(255,255,255,.4);box-shadow:0 22px 52px -12px rgba(10,50,120,.4)}
  .neuro-card .nnum{position:absolute;top:16px;left:16px;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#2b6fc7;color:#fff;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.75rem;box-shadow:0 6px 14px -6px rgba(43,111,199,.7);z-index:2}
  .neuro-card h4{color:#fff;font-size:1rem;margin-bottom:8px;position:relative;z-index:2}
  .neuro-card p{font-size:.82rem;color:rgba(220,240,252,.85);line-height:1.6;position:relative;z-index:2;max-width:94%;margin:0 auto}
  .neuro-card .nico{position:relative;width:96px;height:96px;margin:0 auto 14px;z-index:1;color:#a9d4ff}
  .neuro-card .nico svg{width:100%;height:100%}
  .neuro-card .nico img{width:100%;height:100%;object-fit:contain;display:block}

  /* SECTION 3 — signs of flare-up (photo + number cards) */
  .behaviour{background:#fff}
  .beh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
  .beh-card{position:relative;display:flex;align-items:stretch;gap:0;overflow:hidden;border:1px solid var(--line);border-radius:18px;background:var(--ivory);box-shadow:0 10px 24px -16px rgba(10,31,68,.18);transition:transform .3s var(--ease),box-shadow .3s var(--ease)}
  .beh-card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(10,31,68,.25)}
  .beh-photo{flex:0 0 38%;min-height:190px;position:relative;overflow:hidden}
  .beh-photo img{width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0;transition:transform .5s var(--ease)}
  .beh-card:hover .beh-photo img{transform:scale(1.05)}
  .beh-content{flex:1;padding:24px 22px}
  .beh-num{display:inline-flex;align-items:center;justify-content:center;width:fit-content;min-width:30px;height:30px;padding:0 9px;border-radius:9px;color:#fff;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.78rem;margin-bottom:12px}
  .beh-card:nth-child(1) .beh-num{background:#2b6fc7}
  .beh-card:nth-child(2) .beh-num{background:#12a48a}
  .beh-card:nth-child(3) .beh-num{background:#e8842c}
  .beh-card:nth-child(4) .beh-num{background:#7c5cd6}
  .beh-content h4{font-size:1rem;margin-bottom:8px}
  .beh-content p{font-size:.85rem;color:#666;line-height:1.65;margin:0}
  @media(max-width:560px){.beh-card{flex-direction:column}.beh-photo{flex-basis:auto;min-height:180px}}

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
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      {/*  HEADER  */}


{/*  PAGE HERO  */}
<section className="page-hero" id="top">
  <div className="wrap">
    <div className="hero-text">
      <h1 className="reveal d1">Gentle, individualised support for chronic eczema.</h1>
      <p className="lead reveal d2">Soothing, individualised homeopathic care that helps calm itching, reduce flare-ups and support healthy skin — alongside your dermatologist's guidance.</p>
      <div className="page-hero-features reveal d3">
        <div className="hpf-item">
          <span className="hpf-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s5 5.2 5 9.5A5 5 0 0 1 7 12.5C7 8.2 12 3 12 3Z"/></svg></span>
          <span>Soothes & Relieves</span>
        </div>
        <div className="hpf-item">
          <span className="hpf-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z"/><path d="M9 12l2 2 4-4"/></svg></span>
          <span>Supports Skin Barrier</span>
        </div>
        <div className="hpf-item">
          <span className="hpf-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z"/><path d="M9.5 12l1.7 1.7L14.5 10"/></svg></span>
          <span>Dermatologist Guided</span>
        </div>
      </div>
    </div>

    <div className="hero-visual reveal d2">
      <div className="hv-stage">
        <div className="hv-ring" aria-hidden="true"></div>
        <div className="hv-photo">
          <img src="/images/atopic-dermatitis/image-1.jpg" alt="Baby gently touching a mild eczema patch on the arm" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </div>
</section>

{/*  SECTION 1 — TYPES OF ECZEMA  */}
<section className="sec types">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>Eczema can take several forms</h2>
      <p className="lead">Eczema includes several different skin conditions. Most share symptoms like itching, redness, inflammation and irritation, but each has its own pattern.</p>
    </div>
    <div className="type-grid">
      <div className="type-card reveal d1">
        <div className="type-photo">
          <img src="/images/atopic-dermatitis/image-2.jpg" alt="Baby with mild atopic dermatitis redness on the cheeks" loading="lazy" decoding="async" />
          <div className="num"></div>
        </div>
        <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a6 6 0 1 0 4.5 9.8A8 8 0 1 1 17 3Z"/></svg></div>
        <div className="type-top">
          <h3>Atopic Dermatitis</h3>
        </div>
        <div className="type-body">
          <p>The most common form, often linked with a family history of allergies, asthma or hay fever, and marked by cycles of flare-ups and remission.</p>
        </div>
      </div>
      <div className="type-card reveal d2">
        <div className="type-photo">
          <img src="/images/atopic-dermatitis/image-3.jpg" alt="Toddler with contact dermatitis irritation on the shoulder" loading="lazy" decoding="async" />
          <div className="num"></div>
        </div>
        <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/></svg></div>
        <div className="type-top">
          <h3>Contact Dermatitis</h3>
        </div>
        <div className="type-body">
          <p>Occurs when the skin reacts to direct contact with an irritant or allergen — including a specific allergic form known as Allergic Contact Dermatitis.</p>
        </div>
      </div>
      <div className="type-card reveal d3">
        <div className="type-photo">
          <img src="/images/atopic-dermatitis/image-4.jpg" alt="Baby with seborrheic dermatitis flaking on the scalp" loading="lazy" decoding="async" />
          <div className="num"></div>
        </div>
        <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg></div>
        <div className="type-top">
          <h3>Seborrheic Dermatitis</h3>
        </div>
        <div className="type-body">
          <p>Typically affects oil-producing areas of the skin such as the scalp and face, causing flaking, redness and irritation.</p>
        </div>
      </div>
    </div>
    <p style={({"textAlign":"center","maxWidth":"70ch","margin":"34px auto 0","fontSize":".9rem","color":"#555"} as React.CSSProperties)}>Other recognised forms include <b style={({"color":"var(--blue)"} as React.CSSProperties)}>Nummular Eczema</b>, <b style={({"color":"var(--blue)"} as React.CSSProperties)}>Neurodermatitis</b>, <b style={({"color":"var(--blue)"} as React.CSSProperties)}>Stasis Dermatitis</b> and <b style={({"color":"var(--blue)"} as React.CSSProperties)}>Dyshidrotic Eczema</b> — each evaluated individually.</p>
  </div>
</section>

{/*  SECTION 2 — CAUSES & TRIGGERS  */}
<section className="sec neuro">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>What contributes to Atopic Dermatitis</h2>
      <p className="lead">The exact cause isn't fully understood, but a combination of genetic and environmental factors is generally believed to play a role.</p>
    </div>
    <div className="neuro-grid">
      <div className="neuro-card reveal d1"><div className="nnum">01</div><div className="nico"><img src="/images/atopic-dermatitis/image-5.png" alt="" loading="lazy" decoding="async" /></div><h4>Family History</h4><p>A family history of eczema or allergies is one of the strongest associated factors.</p></div>
      <div className="neuro-card reveal d2"><div className="nnum">02</div><div className="nico"><img src="/images/atopic-dermatitis/image-6.png" alt="" loading="lazy" decoding="async" /></div><h4>Asthma or Hay Fever</h4><p>Atopic Dermatitis often occurs alongside these related allergic conditions.</p></div>
      <div className="neuro-card reveal d3"><div className="nnum">03</div><div className="nico"><img src="/images/atopic-dermatitis/image-7.png" alt="" loading="lazy" decoding="async" /></div><h4>Immune System Imbalance</h4><p>An overactive or imbalanced immune response can contribute to flare-ups.</p></div>
      <div className="neuro-card reveal d1"><div className="nnum">04</div><div className="nico"><img src="/images/atopic-dermatitis/image-8.png" alt="" loading="lazy" decoding="async" /></div><h4>Environmental Allergens</h4><p>Exposure to common allergens in the surroundings can trigger symptoms.</p></div>
      <div className="neuro-card reveal d2"><div className="nnum">05</div><div className="nico"><img src="/images/atopic-dermatitis/image-9.png" alt="" loading="lazy" decoding="async" /></div><h4>Dry Climate &amp; Weather Changes</h4><p>Low humidity and seasonal shifts can dry out and irritate the skin.</p></div>
      <div className="neuro-card reveal d3"><div className="nnum">06</div><div className="nico"><img src="/images/atopic-dermatitis/image-10.png" alt="" loading="lazy" decoding="async" /></div><h4>Harsh Soaps &amp; Skin Irritants</h4><p>Certain soaps, detergents and fabrics can strip and irritate the skin barrier.</p></div>
      <div className="neuro-card reveal d1"><div className="nnum">07</div><div className="nico"><img src="/images/atopic-dermatitis/image-11.png" alt="" loading="lazy" decoding="async" /></div><h4>Stress</h4><p>Emotional stress is commonly reported as a trigger for flare-ups.</p></div>
      <div className="neuro-card reveal d2"><div className="nnum">08</div><div className="nico"><img src="/images/atopic-dermatitis/image-12.png" alt="" loading="lazy" decoding="async" /></div><h4>Dust, Pollen &amp; Pollution</h4><p>Airborne irritants can worsen symptoms in sensitive individuals.</p></div>
    </div>
  </div>
</section>

{/*  SECTION 3 — COMMON SYMPTOMS  */}
<section className="sec behaviour">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>Signs of an eczema flare-up</h2>
      <p className="lead">Symptoms range from mild to severe and often worsen at night. Some individuals also experience swelling, oozing, crusting or small raised bumps that can become infected if scratched.</p>
    </div>
    <div className="beh-grid">
      <div className="beh-card reveal d1">
        <div className="beh-photo"><img src="/images/atopic-dermatitis/image-13.jpg" alt="Child scratching an itchy eczema patch on the arm" loading="lazy" decoding="async" /></div>
        <div className="beh-content"><div className="beh-num">01</div><h4>Intense Itching</h4><p>Often the most disruptive symptom, and typically more noticeable at night.</p></div>
      </div>
      <div className="beh-card reveal d2">
        <div className="beh-photo"><img src="/images/atopic-dermatitis/image-14.jpg" alt="Baby with dry and rough eczema-prone skin on the face" loading="lazy" decoding="async" /></div>
        <div className="beh-content"><div className="beh-num">02</div><h4>Dry & Rough Skin</h4><p>Skin can feel persistently dry, rough or flaky, especially in affected patches.</p></div>
      </div>
      <div className="beh-card reveal d3">
        <div className="beh-photo"><img src="/images/atopic-dermatitis/image-15.jpg" alt="Child with red inflamed eczema patches on the back and shoulder" loading="lazy" decoding="async" /></div>
        <div className="beh-content"><div className="beh-num">03</div><h4>Red or Inflamed Patches</h4><p>Visible redness and inflammation on the affected areas of skin.</p></div>
      </div>
      <div className="beh-card reveal d1">
        <div className="beh-photo"><img src="/images/atopic-dermatitis/image-16.jpg" alt="Toddler with cracking and flaking eczema skin on the arm" loading="lazy" decoding="async" /></div>
        <div className="beh-content"><div className="beh-num">04</div><h4>Skin Cracking, Scaling & Flaking</h4><p>Over time, dry patches can crack or flake, especially with repeated scratching.</p></div>
      </div>
    </div>
    <p style={({"textAlign":"center","maxWidth":"70ch","margin":"34px auto 0","fontSize":".9rem","color":"#555"} as React.CSSProperties)}>Repeated scratching can also lead to <b style={({"color":"var(--blue)"} as React.CSSProperties)}>thickened skin</b> over time in affected areas — a pattern we watch for as part of your individualised assessment.</p>
  </div>
</section>

{/*  CTA  */}
<section className="cta">
  <div className="wrap">
    <h2 className="reveal d1">Calmer skin, fewer flare-ups, more comfort.</h2>
    <p className="reveal d1">Book a consultation or share your reports securely. We'll assess your skin's pattern carefully and build an individualised plan alongside your dermatologist's ongoing care.</p>
    <div className="cta-row reveal d2">
      <Link className="btn btn-primary" href="/contact">Book a Consultation</Link>
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
