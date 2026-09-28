import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Mental Retardation Homeopathy Treatment | Speciality Homeopathy',
  description: 'Learn about intellectual disability, its possible causes, developmental signs and supportive care with Dr. Ketan Patel, Vastrapur, Ahmedabad.',
  keywords: 'mental retardation homeopathy, cognitive delay homeopathic treatment, intellectual disability homeopathy, neurological cognitive delay treatment, cerebral palsy cognitive delay',
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
  .lead{font-size:1.02rem;color:#555;max-width:60ch}

  /* buttons */
  .btn{display:inline-flex;align-items:center;gap:.5rem;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.78rem;padding:.68rem 1.2rem;border-radius:999px;cursor:pointer;border:1px solid transparent;transition:transform .35s var(--ease),box-shadow .35s,background .3s,color .3s;white-space:nowrap}
  .btn-primary{background:linear-gradient(135deg,#0096c7,#0a4a6e);color:#fff;box-shadow:0 8px 22px -10px rgba(0,100,180,.55)}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(0,100,180,.7)}
  .btn-ghost{background:rgba(255,255,255,.35);color:var(--blue);border-color:rgba(10,31,68,.3);backdrop-filter:blur(6px)}
  .btn-ghost:hover{background:rgba(255,255,255,.55);transform:translateY(-2px)}

  /* page hero */
  .page-hero{position:relative;background:
      radial-gradient(60% 50% at 12% 0%,rgba(0,140,140,.16),transparent 60%),
      radial-gradient(70% 60% at 88% 100%,rgba(200,169,107,.10),transparent 60%),
      radial-gradient(120% 90% at 50% 0%,#123a63 0%,#0A1F44 55%,#071531 100%);
    color:var(--ivory);padding:64px 0 74px;overflow:hidden}
  .page-hero .dotgrid{position:absolute;width:150px;height:110px;background-image:radial-gradient(rgba(255,255,255,.16) 1.4px,transparent 1.4px);background-size:14px 14px;pointer-events:none}
  .page-hero .dotgrid.tl{top:26px;left:18px}
  .page-hero .dotgrid.br{bottom:10px;right:24px;opacity:.7}
  .page-hero .wavepath{position:absolute;top:14%;right:6%;width:170px;opacity:.3;pointer-events:none}
  .page-hero .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1.1fr;gap:36px;align-items:center}
  .hero-visual{position:relative;display:flex;align-items:center;justify-content:center;min-height:280px}
  .hv-stage{position:relative;width:100%;max-width:420px;aspect-ratio:1/1;display:grid;place-items:center}
  .hv-photo{position:relative;z-index:2;width:86%;height:86%;border-radius:50%;overflow:hidden;background:linear-gradient(150deg,rgba(0,140,140,.28),rgba(10,31,68,.55));display:grid;place-items:center;box-shadow:0 24px 50px -18px rgba(0,0,0,.5)}
  .hv-glow{position:absolute;inset:4%;border-radius:50%;background:radial-gradient(circle,rgba(92,200,232,.20) 0%,rgba(92,200,232,0) 72%)}
  .hv-ring{position:absolute;inset:0;width:100%;height:100%;animation:hvSpin 34s linear infinite}
  .hv-ring circle{fill:none;stroke:rgba(255,255,255,.22);stroke-width:1.4;stroke-dasharray:2 10;stroke-linecap:round}
  @keyframes hvSpin{to{transform:rotate(360deg)}}
  .hero-visual img{position:relative;width:82%;height:82%;object-fit:contain;filter:drop-shadow(0 10px 22px rgba(0,0,0,.3))}
  .hero-text{max-width:56ch}
  .page-hero h1{font-size:clamp(1.9rem,3.2vw,2.5rem);margin:0 0 16px;color:#fff}
  .page-hero h1 .accent{background:linear-gradient(120deg,#5cc8e8,#BAE0F3);-webkit-background-clip:text;background-clip:text;color:transparent}
  .page-hero .lead{color:rgba(230,240,250,.82);font-size:.98rem;max-width:52ch;margin:0}
  @media(max-width:980px){
    .page-hero .wrap{grid-template-columns:1fr}
    .hero-visual{order:-1;min-height:220px}
    .hv-stage{max-width:260px}
    .hero-text{max-width:none}
  }
  @media(max-width:680px){
    .page-hero{padding:60px 0}
    .page-hero .dotgrid,.page-hero .wavepath{display:none}
  }

  /* sections */
  .sec{padding:88px 0}
  .sec-head{max-width:700px;margin:0 auto 46px;text-align:center}
  .sec-head h2{font-size:clamp(1.6rem,2.8vw,2.25rem);margin:0 0 14px}
  .sec-head .lead{margin:0 auto}
  .reveal{opacity:1;transform:none}
  .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}

  /* SECTION 1 — POSSIBLE CAUSES */
  .types{background:#F7F9FB;position:relative;overflow:hidden}
  .types .dotgrid{position:absolute;width:140px;height:100px;background-image:radial-gradient(rgba(10,31,68,.14) 1.4px,transparent 1.4px);background-size:14px 14px;pointer-events:none}
  .types .dotgrid.tl{top:40px;left:0}
  .types .dotgrid.br{bottom:20px;right:6%}
  .types .kids-illus{position:absolute;top:-6px;left:26px;width:300px;opacity:.95;pointer-events:none}
  .types .wavepath{position:absolute;top:30%;right:4%;width:150px;opacity:.5;pointer-events:none}
  .types .sec-head{text-align:center;margin:0 auto 46px;max-width:820px}
  .types .sec-head h2{font-size:clamp(1.4rem,2.6vw,2.15rem);white-space:nowrap}
  .types .sec-head h2 .hl{color:var(--teal)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
  .type-card{position:relative;background:#fff;border:1px solid rgba(10,31,68,.08);border-radius:20px;padding:30px 28px 26px;box-shadow:0 10px 30px -20px rgba(20,50,90,.25);transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-6px);box-shadow:0 20px 44px -18px rgba(20,50,90,.3)}
  .type-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}
  .pico{width:60px;height:60px;border-radius:50%;display:grid;place-items:center;flex:0 0 auto}
  .pico svg{width:26px;height:26px}
  .pico.c-teal{background:var(--teal-10);color:var(--teal)}
  .pico.c-blue{background:rgba(10,74,110,.1);color:#0a4a6e}
  .pico.c-purple{background:rgba(140,100,220,.12);color:#8c64dc}
  .type-num{font-family:'Open Sans',sans-serif;font-weight:700;font-size:.82rem;color:rgba(10,31,68,.35);width:34px;height:34px;border-radius:50%;border:1px solid rgba(10,31,68,.14);display:grid;place-items:center;flex:0 0 auto}
  .type-card h3{font-size:1.04rem;margin-bottom:6px}
  .type-card .hr{width:34px;height:2.5px;border-radius:2px;margin-bottom:14px}
  .type-card:nth-child(1) .hr{background:var(--teal)}
  .type-card:nth-child(2) .hr{background:#0a4a6e}
  .type-card:nth-child(3) .hr{background:#8c64dc}
  .type-card p{font-size:.87rem;color:#5b5b5b;line-height:1.7}
  .types-note{margin-top:32px;display:flex;align-items:center;gap:16px;background:#fff;border:1px solid rgba(10,31,68,.08);border-radius:16px;padding:18px 26px;box-shadow:0 10px 26px -20px rgba(20,50,90,.25)}
  .types-note .tn-icon{width:38px;height:38px;border-radius:10px;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;flex:0 0 auto}
  .types-note .tn-icon svg{width:18px;height:18px}
  .types-note p{font-size:.9rem;color:#3d3d3d;margin:0;flex:1}
  .types-note .tn-fly{width:26px;height:26px;color:var(--teal);opacity:.8;flex:0 0 auto}

  /* SECTION 2 — RELATED CONDITIONS */
  .neuro{background:linear-gradient(180deg,#0A1F44 0%,#0c2450 100%);color:var(--ivory);position:relative;overflow:hidden}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .sec-head h2 .hl{background:linear-gradient(120deg,#9cd4ec,#BAE0F3);-webkit-background-clip:text;background-clip:text;color:transparent}
  .neuro .lead{color:rgba(220,232,245,.78)}
  .neuro-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
  .neuro-card{position:relative;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:30px 24px 34px;transition:transform .4s var(--ease),border-color .4s,background .4s}
  .neuro-card:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.06)}
  .neuro-card::after{content:"";position:absolute;left:22px;right:22px;bottom:0;height:1px;background:linear-gradient(90deg,transparent,rgba(92,200,232,.55),transparent);opacity:0;transition:opacity .4s}
  .neuro-card:hover::after{opacity:1}
  .neuro-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px}
  .nico{width:56px;height:56px;border-radius:50%;border:1px solid rgba(255,255,255,.28);display:grid;place-items:center;color:#9cd4ec}
  .nico svg{width:24px;height:24px}
  .neuro-num{font-family:'Open Sans',sans-serif;font-weight:700;font-size:1.6rem;color:rgba(255,255,255,.14);line-height:1}
  .neuro-card h4{color:#fff;font-size:1.02rem;margin-bottom:5px}
  .neuro-card .hr{width:30px;height:2px;background:linear-gradient(90deg,#5cc8e8,transparent);margin-bottom:12px}
  .neuro-card p{font-size:.82rem;color:rgba(220,232,245,.78);line-height:1.65}

  /* SECTION 3 — SIGNS & DEVELOPMENTAL CONCERNS */
  .behaviour{background:linear-gradient(180deg,#0c2450 0%,#0A1F44 100%);color:var(--ivory)}
  .behaviour .sec-head h2{color:#fff}
  .behaviour .sec-head h2 .hl{color:#4fd8c8}
  .behaviour .lead{color:rgba(220,232,245,.78)}
  .beh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
  .beh-card{display:flex;align-items:center;gap:20px;padding:18px;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:rgba(255,255,255,.035);transition:transform .3s var(--ease),border-color .3s}
  .beh-card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.28)}
  .beh-icon{width:120px;height:120px;flex:0 0 auto;display:grid;place-items:center}
  .beh-icon img{width:100%;height:100%;object-fit:contain;display:block}
  @media(max-width:680px){.beh-icon{width:96px;height:96px}}
  .beh-card h4{font-size:.98rem;margin-bottom:6px;color:#fff}
  .beh-card p{font-size:.83rem;color:rgba(220,232,245,.75);line-height:1.6;margin:0}
  .beh-grid .beh-card:last-child{grid-column:1 / -1}

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

  /* sticky */
  .sticky-actions{position:fixed;right:16px;bottom:16px;z-index:80;display:flex;flex-direction:column;gap:11px}
  .fab{display:flex;align-items:center;gap:9px;padding:12px 16px 12px 13px;border-radius:999px;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.8rem;box-shadow:var(--shadow);cursor:pointer;transition:transform .3s var(--ease)}
  .fab:hover{transform:translateY(-3px) scale(1.02)}
  .fab svg{width:19px;height:19px;flex:0 0 auto}
  .fab-wa{background:#25D366;color:#06351a}
  .fab-up{background:var(--gold);color:var(--blue)}

  @media(max-width:980px){
    .type-grid{grid-template-columns:1fr}
    .types .kids-illus,.types .wavepath{display:none}
    .neuro-grid{grid-template-columns:repeat(2,1fr)}
  }
  @media(max-width:680px){
    .neuro-grid{grid-template-columns:1fr}
    .beh-grid{grid-template-columns:1fr}
    .beh-grid .beh-card:last-child{grid-column:1}
    .sec{padding:60px 0}
    .types .sec-head h2{white-space:normal;font-size:clamp(1.5rem,5vw,1.9rem)}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
  }
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO */}
      <section className="page-hero" id="top">
        <div className="dotgrid tl" aria-hidden="true"></div>
        <div className="dotgrid br" aria-hidden="true"></div>
        <svg className="wavepath" viewBox="0 0 160 120" fill="none" aria-hidden="true">
          <path d="M6 100C40 100 30 20 70 20S100 90 154 30" stroke="#5cc8e8" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 9" />
          <circle cx="154" cy="30" r="3" fill="#5cc8e8" />
        </svg>
        <div className="wrap">
          <div className="hero-visual reveal" aria-hidden="true">
            <div className="hv-stage">
              <div className="hv-glow"></div>
              <svg className="hv-ring" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="176" />
              </svg>
              <div className="hv-photo">
                <img src="/images/intellectual-disability/image-1.webp" alt="Child focused on learning and development" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="reveal d1">Understanding <span className="accent">Intellectual Disability</span></h1>
            <p className="lead reveal d2">Possible causes, related conditions and the signs families often notice — with gentle, supportive homeopathic care alongside your child's medical team.</p>
          </div>
        </div>
      </section>

      {/* SECTION 1 — POSSIBLE CAUSES */}
      <section className="sec types">
        <div className="dotgrid tl" aria-hidden="true"></div>
        <div className="dotgrid br" aria-hidden="true"></div>
        <svg className="wavepath" viewBox="0 0 160 120" fill="none" aria-hidden="true">
          <path d="M6 100C40 100 30 20 70 20S100 90 154 30" stroke="#0A1F44" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 9" opacity=".5" />
          <circle cx="154" cy="30" r="3" fill="var(--teal)" />
        </svg>
        <img className="kids-illus" src="/images/intellectual-disability/image-2.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Intellectual Disability can arise from <span className="hl">many factors</span></h2>
            <p className="lead">Healthy brain development depends on how effectively neural connections form and function. Intellectual Disability may be associated with different genetic, developmental, medical, nutritional or environmental factors — every child's picture is unique.</p>
          </div>
          <div className="type-grid">
            <div className="type-card reveal d1">
              <div className="type-top">
                <div className="pico c-teal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4c3 1 3 4 6 4s3-3 6-4M6 20c3-1 3-4 6-4s3 3 6 4M6 4v16M18 4v16" />
                  </svg>
                </div>
                <div className="type-num">01</div>
              </div>
              <h3>Genetic, Chromosomal &amp; Metabolic Factors</h3>
              <div className="hr"></div>
              <p>Genetic changes and chromosomal conditions, including Down syndrome and other chromosomal abnormalities, along with certain inherited metabolic or organic acid disorders, may affect a child's brain development and function.</p>
            </div>
            <div className="type-card reveal d2">
              <div className="type-top">
                <div className="pico c-blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="7" r="3.4" />
                    <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                  </svg>
                </div>
                <div className="type-num">02</div>
              </div>
              <h3>Birth-Related, Infection &amp; Illness Factors</h3>
              <div className="hr"></div>
              <p>Complications during pregnancy or delivery, including birth injuries or reduced oxygen supply, infections affecting the brain or nervous system, and serious illness, prolonged fever or severe dehydration may affect neurological health.</p>
            </div>
            <div className="type-card reveal d3">
              <div className="type-top">
                <div className="pico c-purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c4 3 6 6 6 10a6 6 0 0 1-12 0c0-4 2-7 6-10Z" />
                    <path d="M12 13v5" />
                  </svg>
                </div>
                <div className="type-num">03</div>
              </div>
              <h3>Nutritional, Environmental &amp; Injury Factors</h3>
              <div className="hr"></div>
              <p>Nutritional deficiencies including iodine deficiency, inadequate nutrition during pregnancy, significant head injuries, and the early developmental environment, access to care and stimulation may all influence a child's developmental progress.</p>
            </div>
          </div>
          <div className="types-note reveal">
            <div className="tn-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-4.8-7-10.2A5 5 0 0 1 12 6a5 5 0 0 1 7 4.8C19 16.2 12 21 12 21Z" />
              </svg>
            </div>
            <p>Understanding these factors helps us provide early support, targeted care and a nurturing environment for every child to reach their potential.</p>
            <svg className="tn-fly" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 2 — RELATED CONDITIONS */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Conditions often seen alongside<br /><span className="hl">Intellectual Disability</span></h2>
            <p className="lead">Children with additional conditions may require coordinated care from multiple healthcare professionals. Our supportive role is to walk alongside that care — never to replace it.</p>
          </div>
          <div className="neuro-grid">
            <div className="neuro-card reveal d1">
              <div className="neuro-top">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 4a4 4 0 0 0-4 4c0 1.4.5 2 .5 3.5S5 14 5 15.5A3.5 3.5 0 0 0 8.5 19M9 4a4 4 0 0 1 4 4c0 1.4-.5 2-.5 3.5S13 14 13 15.5a3.5 3.5 0 0 1-3.5 3.5M8.5 19c0 1.1.9 2 2 2" />
                  </svg>
                </div>
                <span className="neuro-num">01</span>
              </div>
              <h4>Cerebral Palsy</h4>
              <div className="hr"></div>
              <p>Developmental challenges may occur alongside Cerebral Palsy, particularly when areas of the brain responsible for movement and motor control are affected.</p>
            </div>
            <div className="neuro-card reveal d2">
              <div className="neuro-top">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4c-2 3-2 3-4 3s-2-2-2-2 0 3 2 4c-2 1-2 4-2 4l4 2v6h4v-6l4-2s0-3-2-4c2-1 2-4 2-4s0 2-2 2-2-3-4-3Z" />
                  </svg>
                </div>
                <span className="neuro-num">02</span>
              </div>
              <h4>Down Syndrome</h4>
              <div className="hr"></div>
              <p>A chromosomal condition associated with Intellectual Disability in many cases, requiring individualised developmental and educational support planned around the child.</p>
            </div>
            <div className="neuro-card reveal d3">
              <div className="neuro-top">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3c2 0 3 1.5 3 3s-1 2-1 3.5S11 12 11 13.5 10 16 8 16M16 3c-2 0-3 1.5-3 3s1 2 1 3.5S13 12 13 13.5 14 16 16 16M8 20c2 0 3-1.5 3-3M16 20c-2 0-3-1.5-3-3" />
                  </svg>
                </div>
                <span className="neuro-num">03</span>
              </div>
              <h4>Genetic Disorders</h4>
              <div className="hr"></div>
              <p>A range of genetic and chromosomal conditions can affect brain development and cognitive functioning, guiding a specialist and coordinated approach to care.</p>
            </div>
            <div className="neuro-card reveal d1">
              <div className="neuro-top">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2.4" />
                    <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21M5.6 5.6l2.5 2.5M15.9 15.9l2.5 2.5M5.6 18.4l2.5-2.5M15.9 8.1l2.5-2.5" />
                  </svg>
                </div>
                <span className="neuro-num">04</span>
              </div>
              <h4>Neurological Disorders</h4>
              <div className="hr"></div>
              <p>Some children may experience associated seizures or other neurological concerns that call for coordinated evaluation and ongoing monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SIGNS & DEVELOPMENTAL CONCERNS */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What <span className="hl">families</span> often notice</h2>
            <p className="lead">Symptoms and the level of support required can vary significantly from one child to another. Understanding what sits behind a delay is often the first step to supporting it.</p>
          </div>
          <div className="beh-grid">
            <div className="beh-card reveal d1">
              <div className="beh-icon">
                <img src="/images/intellectual-disability/image-3.webp" alt="Delayed Speech & Language" loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Delayed Speech &amp; Language</h4>
                <p>Difficulty developing speech and language, and understanding instructions. Individual assessment guides suitable communication support.</p>
              </div>
            </div>
            <div className="beh-card reveal d2">
              <div className="beh-icon">
                <img src="/images/intellectual-disability/image-4.webp" alt="Slow Learning & Reduced Academic Progress" loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Slow Learning &amp; Reduced Academic Progress</h4>
                <p>Difficulty with reasoning and problem-solving, along with challenges in memory and concentration during learning tasks.</p>
              </div>
            </div>
            <div className="beh-card reveal d3">
              <div className="beh-icon">
                <img src="/images/intellectual-disability/image-5.webp" alt="Delayed Daily Living Skills" loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Delayed Daily Living Skills</h4>
                <p>Difficulty developing age-appropriate daily living skills, with reduced independence in everyday activities.</p>
              </div>
            </div>
            <div className="beh-card reveal d1">
              <div className="beh-icon">
                <img src="/images/intellectual-disability/image-6.webp" alt="Delayed Social & Emotional Development" loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Delayed Social &amp; Emotional Development</h4>
                <p>Difficulty adapting to new situations, along with behaviour that may appear younger than expected for the child's age.</p>
              </div>
            </div>
            <div className="beh-card reveal d2">
              <div className="beh-icon">
                <img src="/images/intellectual-disability/image-7.webp" alt="Delayed Developmental Milestones" loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Delayed Developmental Milestones</h4>
                <p>Delayed achievement of age-appropriate milestones, sometimes noticed earliest by parents at home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2 className="reveal d1">A clearer path for your child's development.</h2>
          <p className="reveal d1">Book a consultation or share your child's reports securely. We'll listen carefully, be honest about how we can help, and work in step with your child's existing care team.</p>
          <div className="cta-row reveal d2">
            <Link className="btn btn-primary" href="/contactus">Book a Consultation</Link>
            <a className="btn btn-ghost" href="tel:+919898005354">Call +91 98980 05354</a>
            <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener">WhatsApp our team</a>
          </div>
        </div>
      </section>

      {/* STICKY */}
    </>
  );
}
