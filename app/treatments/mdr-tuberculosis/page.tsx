import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'MDR Tuberculosis Treatment with Homeopathy for TB Patients',
  description: 'Learn about MDR tuberculosis, its types, causes and symptoms, with supportive care alongside your TB specialist. Dr. Ketan Patel, Ahmedabad.',
  keywords: 'MDR tuberculosis homeopathy, multi drug resistant TB homeopathy, MDR-TB natural treatment India, tuberculosis homeopathic remedy, drug resistant TB homeopathy',
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

  /* ===== REDESIGN ADDITIONS ===== */
  .hv-photo{position:relative;z-index:2;width:250px;height:250px;border-radius:50%;padding:8px;background:linear-gradient(150deg,var(--teal),var(--blue));box-shadow:0 24px 50px -18px rgba(10,31,68,.45);animation:hvPulse 5s var(--ease) infinite}
  .hv-photo-in{width:100%;height:100%;border-radius:50%;overflow:hidden;border:3px solid rgba(255,255,255,.9);background:#fff}
  .hv-photo-in img{width:100%;height:100%;object-fit:cover;display:block}

  /* section 1 — types, illustrated cards */
  .type-card{padding-bottom:2px}
  .type-top{padding:34px 26px 14px}
  .type-img-wrap{width:100%;aspect-ratio:1/0.82;border-radius:18px;overflow:hidden;margin:0 auto 18px;background:radial-gradient(80% 80% at 50% 40%,rgba(0,140,140,.08),rgba(186,224,243,.35));display:grid;place-items:center}
  .type-img-wrap img{width:86%;height:86%;object-fit:contain}
  .type-card:hover .type-img-wrap img{transform:scale(1.05)}
  .type-img-wrap img{transition:transform .5s var(--ease)}
  .type-card .num{top:18px;right:20px;width:30px;height:30px;border-radius:50%;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;font-size:.68rem}

  /* section 2 — causes, dark cards with photo */
  .neuro-grid-v2{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
  .neuro-card-v2{position:relative;display:flex;gap:16px;align-items:flex-start;background:rgba(186,224,243,.08);border:1.5px solid rgba(255,255,255,.16);border-radius:18px;padding:18px;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);transition:transform .4s var(--ease),border-color .4s,box-shadow .4s}
  .neuro-card-v2:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.4);box-shadow:0 22px 48px -14px rgba(10,50,120,.4)}
  .neuro-card-v2 .nimg{flex:0 0 auto;width:100px;display:flex;align-items:flex-end;justify-content:center}
  .neuro-card-v2 .nimg img{width:100%;height:auto;max-height:132px;object-fit:contain;display:block;filter:drop-shadow(0 10px 16px rgba(0,0,0,.35))}
  .neuro-card-v2 .ntxt{flex:1;min-width:0}
  .neuro-card-v2 .nnum{display:inline-block;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.68rem;color:#BAE0F3;background:rgba(255,255,255,.1);border-radius:999px;padding:3px 9px;margin-bottom:8px}
  .neuro-card-v2 h4{color:#fff;font-size:.94rem;margin-bottom:6px;line-height:1.3}
  .neuro-card-v2 p{font-size:.78rem;color:rgba(220,240,252,.82);line-height:1.55}

  /* section 3 — symptoms, icon-photo cards */
  .beh-icon{background:radial-gradient(70% 70% at 50% 50%,#eaf5fb,#dcedf7);padding:0;width:62px;height:62px;border-radius:16px}
  .beh-icon img{width:80%;height:80%;object-fit:contain}
  .beh-grid .beh-card:last-child{max-width:calc(50% - 8px)}

  @media(max-width:880px){
    .neuro-grid-v2{grid-template-columns:1fr}
    .hv-photo{width:200px;height:200px}
  }
  @media(max-width:600px){
    .beh-grid .beh-card:last-child{max-width:100%}
  }`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      {/*  HEADER  */}


{/*  PAGE HERO  */}
<section className="page-hero" id="top">
  <div className="wrap">
    <div className="hero-text">
      <h1 className="reveal d1">MDR Tuberculosis — individualised supportive care alongside your TB specialist.</h1>
      <p className="lead reveal d2">Multi-Drug Resistant Tuberculosis (MDR-TB) is a form of tuberculosis resistant to the two most commonly used first-line anti-TB medicines, requiring specialised medical care. Our clinic offers individualised homeopathic consultation as supportive and complementary care, always alongside prescribed anti-tuberculosis treatment.</p>
      <div className="page-hero-trust reveal d3">
        <div><span className="stat-num">20+</span><span className="lbl">Years of practice, Dr. Ketan Patel</span></div>
        <div><span className="stat-num">3</span><span className="lbl">Experienced homeopathic physicians</span></div>
        <div><span className="stat-num">All</span><span className="lbl">Ages, alongside your TB specialist</span></div>
      </div>
    </div>

    <div className="hero-visual reveal d2" aria-hidden="true">
      <div className="hv-stage">
        <div className="hv-glow"></div>
        <svg className="hv-ring" viewBox="0 0 400 400"><circle cx="200" cy="200" r="176"/></svg>
        <div className="hv-photo">
          <div className="hv-photo-in"><img src="/images/mdr-tuberculosis/image-1.webp" alt="Illustration of the lungs, representing pulmonary tuberculosis" loading="lazy" decoding="async" /></div>
        </div>
        <div className="hv-badge hv-badge-1">
          <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z"/><circle cx="12" cy="11" r="2.2"/></svg></span>
          Supportive Care
        </div>
        <div className="hv-badge hv-badge-2">
          <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span>
          Regular Follow-up
        </div>
        <div className="hv-badge hv-badge-3">
          <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7"/><circle cx="12" cy="7" r="2"/></svg></span>
          Works With Your Specialist
        </div>
      </div>
    </div>
  </div>
</section>

{/*  SECTION 1 — TYPES OF TUBERCULOSIS  */}
<section className="sec types">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>TB can affect different organs</h2>
      <p className="lead">Tuberculosis can affect various organs of the body. Each type requires proper medical evaluation and an individualised treatment plan under a TB specialist.</p>
    </div>
    <div className="type-grid">
      <div className="type-card reveal d1">
        <div className="num"></div>
        <div className="type-top">
          <div className="type-img-wrap"><img src="/images/mdr-tuberculosis/image-2.webp" alt="Watercolor illustration of the human lungs" loading="lazy" decoding="async" /></div>
          <h3>Pulmonary Tuberculosis (Lungs)</h3>
        </div>
        <div className="type-body">
          <p>The most common form of TB, affecting the lungs and typically presenting with a persistent cough and chest-related symptoms.</p>
        </div>
      </div>
      <div className="type-card reveal d2">
        <div className="num"></div>
        <div className="type-top">
          <div className="type-img-wrap"><img src="/images/mdr-tuberculosis/image-3.webp" alt="Watercolor illustration of a knee joint, representing bone tuberculosis" loading="lazy" decoding="async" /></div>
          <h3>Bone Tuberculosis</h3>
        </div>
        <div className="type-body">
          <p>Affects the bones and joints, requiring careful orthopaedic and medical evaluation alongside anti-TB treatment.</p>
        </div>
      </div>
      <div className="type-card reveal d3">
        <div className="num"></div>
        <div className="type-top">
          <div className="type-img-wrap"><img src="/images/mdr-tuberculosis/image-4.webp" alt="Watercolor illustration of the human brain, representing tubercular meningitis" loading="lazy" decoding="async" /></div>
          <h3>Tubercular Meningitis (Brain)</h3>
        </div>
        <div className="type-body">
          <p>A serious form affecting the brain and its coverings — needs urgent specialist care and close monitoring.</p>
        </div>
      </div>
    </div>
    <p style={({"textAlign":"center","maxWidth":"70ch","margin":"34px auto 0","fontSize":".9rem","color":"#555"} as React.CSSProperties)}>TB can also affect other organs, including <b style={({"color":"var(--blue)"} as React.CSSProperties)}>Renal</b> (kidney), <b style={({"color":"var(--blue)"} as React.CSSProperties)}>Intestinal</b> and <b style={({"color":"var(--blue)"} as React.CSSProperties)}>Pleural</b> Tuberculosis.</p>
  </div>
</section>

{/*  SECTION 2 — CAUSES OF MDR-TB  */}
<section className="sec neuro">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>How drug resistance develops</h2>
      <p className="lead">MDR-TB develops when treatment is incomplete, medicines aren't taken regularly, or the bacteria become resistant during treatment.</p>
    </div>
    <div className="neuro-grid-v2">
      <div className="neuro-card-v2 reveal d1"><div className="nimg"><img src="/images/mdr-tuberculosis/image-5.webp" alt="Person looking discouraged, marking missed treatment days on a calendar" loading="lazy" decoding="async" /></div><div className="ntxt"><span className="nnum">01</span><h4>Incomplete TB Treatment</h4><p>Stopping treatment before the full prescribed course is completed.</p></div></div>
      <div className="neuro-card-v2 reveal d2"><div className="nimg"><img src="/images/mdr-tuberculosis/image-6.webp" alt="Alarm clock beside medicine bottles and strips, representing missed doses" loading="lazy" decoding="async" /></div><div className="ntxt"><span className="nnum">02</span><h4>Irregular Medication Intake</h4><p>Missing doses or inconsistent timing of anti-TB medicines.</p></div></div>
      <div className="neuro-card-v2 reveal d3"><div className="nimg"><img src="/images/mdr-tuberculosis/image-7.webp" alt="Person looking uncertain while holding a tablet, questioning the medication" loading="lazy" decoding="async" /></div><div className="ntxt"><span className="nnum">03</span><h4>Incorrect Treatment Regimen</h4><p>An inappropriate drug combination or dosage during initial treatment.</p></div></div>
      <div className="neuro-card-v2 reveal d1"><div className="nimg"><img src="/images/mdr-tuberculosis/image-8.webp" alt="Illustration of TB transmission between two people through the air" loading="lazy" decoding="async" /></div><div className="ntxt"><span className="nnum">04</span><h4>Drug-Resistant TB from Another Person</h4><p>Direct transmission of an already drug-resistant strain of TB.</p></div></div>
      <div className="neuro-card-v2 reveal d2"><div className="nimg"><img src="/images/mdr-tuberculosis/image-9.webp" alt="Person appearing tired at a table with medicines and water" loading="lazy" decoding="async" /></div><div className="ntxt"><span className="nnum">05</span><h4>Poor Treatment Adherence</h4><p>Difficulty consistently following the full prescribed treatment plan.</p></div></div>
      <div className="neuro-card-v2 reveal d3"><div className="nimg"><img src="/images/mdr-tuberculosis/image-10.webp" alt="Doctor reviewing a chest X-ray" loading="lazy" decoding="async" /></div><div className="ntxt"><span className="nnum">06</span><h4>Delayed Diagnosis</h4><p>A late diagnosis can allow drug-resistant bacteria more time to develop.</p></div></div>
    </div>
  </div>
</section>

{/*  SECTION 3 — COMMON SYMPTOMS  */}
<section className="sec behaviour">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>Signs to watch for</h2>
      <p className="lead">Symptoms of MDR-TB are similar to active tuberculosis. Some patients also experience loss of appetite or, in some cases, coughing up blood — the severity depends on the affected organ and disease stage.</p>
    </div>
    <div className="beh-grid">
      <div className="beh-card reveal d1"><div className="beh-icon"><img src="/images/mdr-tuberculosis/image-11.webp" alt="Alarm clock and medicine strips icon" loading="lazy" decoding="async" /></div><div><h4>Persistent Cough (2+ Weeks)</h4><p>A cough lasting more than two weeks is a key warning sign of TB.</p></div></div>
      <div className="beh-card reveal d2"><div className="beh-icon"><img src="/images/mdr-tuberculosis/image-12.webp" alt="Thermometer icon" loading="lazy" decoding="async" /></div><div><h4>Fever</h4><p>Ongoing low-grade or intermittent fever is a common accompanying symptom.</p></div></div>
      <div className="beh-card reveal d3"><div className="beh-icon"><img src="/images/mdr-tuberculosis/image-13.webp" alt="Crescent moon and stars icon" loading="lazy" decoding="async" /></div><div><h4>Night Sweats & Weight Loss</h4><p>Unexplained weight loss along with sweating during sleep is frequently reported.</p></div></div>
      <div className="beh-card reveal d1"><div className="beh-icon"><img src="/images/mdr-tuberculosis/image-14.webp" alt="Low battery icon" loading="lazy" decoding="async" /></div><div><h4>Fatigue & Weakness</h4><p>Persistent tiredness and low energy that doesn't improve with rest.</p></div></div>
      <div className="beh-card reveal d2"><div className="beh-icon"><img src="/images/mdr-tuberculosis/image-15.webp" alt="Person with hand on chest icon" loading="lazy" decoding="async" /></div><div><h4>Chest Pain</h4><p>Discomfort or pain in the chest, especially with pulmonary involvement.</p></div></div>
    </div>
  </div>
</section>

{/*  CTA  */}
<section className="cta">
  <div className="wrap">
    <h2 className="reveal d1">Supportive care, working alongside your TB specialist.</h2>
    <p className="reveal d1">Book a consultation or share your reports securely. Homeopathy is offered here only as supportive care — never as a replacement for your prescribed anti-tuberculosis treatment.</p>
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
