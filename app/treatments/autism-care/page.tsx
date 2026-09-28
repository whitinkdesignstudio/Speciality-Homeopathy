import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: "Autism Homeopathy Treatment | Holistic Care Ahmedabad",
  description: "Supportive autism homeopathy, early intervention therapy, and holistic treatment for ASD and speech delays in Ahmedabad. Consult our specialist.",
  keywords: "autism homeopathy, holistic autism treatment, early intervention therapy, biomedical treatment, autism brain therapy, detox therapy, autism specialist",
};

const pageStyles = `
  body{
    margin:0;
    padding:0;
    width:100%;
    height:auto;
    overflow-x:hidden !important;
    scrollbar-width:none !important;
    -ms-overflow-style:none !important;
  }
  html::-webkit-scrollbar,
  body::-webkit-scrollbar{
    display:none !important;
    width:0 !important;
  }
  .niddan-features{
    overflow:hidden !important;
  }
  .nf-container{
    overflow:hidden !important;
  }
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
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'Open Sans',system-ui,sans-serif;color:var(--graphite);background:var(--ivory);font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased}
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
  .page-hero{position:relative;background:radial-gradient(120% 120% at 84% 0%,#d4eef9 0%,#BAE0F3 48%,#9ed0eb 100%);color:var(--blue);padding:92px 0 74px;overflow:hidden}
  .page-hero::after{content:"";position:absolute;inset:0;background:radial-gradient(70% 55% at 74% 46%,rgba(255,255,255,.22),rgba(186,224,243,.15) 100%);pointer-events:none}
  .page-hero .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
  .page-hero h1{font-size:clamp(2rem,3.6vw,2.7rem);margin:16px 0 18px}
  .page-hero .lead{color:rgba(10,31,68,.82);font-size:1.02rem;max-width:54ch;margin-bottom:18px}
  .page-hero-trust{display:flex;flex-wrap:wrap;gap:14px 26px;align-items:end;border-top:1px solid rgba(10,31,68,.16);padding-top:18px;margin-top:26px}
  .page-hero-trust .stat-num{font-family:'Open Sans',sans-serif;font-weight:700;font-size:1.5rem;color:#0a4a6e;display:block;line-height:1}
  .page-hero-trust .lbl{font-size:.7rem;color:rgba(10,31,68,.7);line-height:1.35;margin-top:5px;max-width:15ch}

  /* hero visual — photo, shown as-is */
  .hero-visual{position:relative;display:flex;align-items:center;justify-content:center;min-height:360px}
  .hv-photo-wrap{position:relative;width:100%;max-width:400px;border-radius:24px;overflow:hidden;box-shadow:0 26px 50px -20px rgba(10,31,68,.35);border:1px solid rgba(255,255,255,.6)}
  .hv-photo{display:block;width:100%;height:auto}
  @media(max-width:980px){
    .page-hero .wrap{grid-template-columns:1fr}
    .hero-visual{order:-1;min-height:300px}
    .hv-photo-wrap{max-width:280px}
  }
  .honesty{display:inline-flex;align-items:center;gap:.55rem;font-size:.78rem;color:rgba(10,31,68,.88);background:rgba(255,255,255,.45);border:1px solid rgba(10,31,68,.2);padding:.45rem .8rem;border-radius:9px;margin-bottom:26px}
  .honesty svg{width:15px;height:15px;flex:0 0 auto;color:var(--teal)}
  .page-hero-cta{display:flex;gap:12px;flex-wrap:wrap}
  .breadcrumb{font-size:.76rem;color:rgba(10,31,68,.6);margin-bottom:14px;display:flex;gap:6px;align-items:center}
  .breadcrumb a{color:rgba(10,31,68,.6);transition:color .25s}
  .breadcrumb a:hover{color:var(--teal)}

  /* sections */
  .sec{padding:88px 0}
  .sec-head{max-width:780px;margin:0 auto 46px;text-align:center}
  .types .sec-head{margin-bottom:84px}
  .sec-head h2{font-size:clamp(1.5rem,2.6vw,2.15rem);margin:12px 0 14px;white-space:nowrap}
  .sec-head .lead{margin:0 auto;max-width:68ch}
  @media(max-width:640px){.sec-head h2{white-space:normal}}
  .reveal{opacity:1;transform:none}

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
    .page-hero{padding:84px 0 54px}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
  }

  /* ============ REDESIGN — v2 scoped classes ============ */

  /* --- SECTION 1 v2 — peeking-child pastel cards --- */
  .type-grid-v2{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:8px}
  .type-card-v2{position:relative;border-radius:26px;padding:100px 26px 30px;text-align:center;box-shadow:0 16px 40px -20px rgba(10,31,68,.22);transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card-v2:hover{transform:translateY(-6px);box-shadow:0 24px 54px -18px rgba(10,31,68,.28)}
  .type-card-v2.tint-teal{background:linear-gradient(170deg,#E7F6F4,#F5FBFA)}
  .type-card-v2.tint-gold{background:linear-gradient(170deg,#FBF2E4,#FDF9F1)}
  .type-card-v2.tint-blue{background:linear-gradient(170deg,#E9F2FB,#F5F9FD)}
  .type-peek{position:absolute;top:0;left:50%;transform:translate(-50%,-58%);width:140px;height:140px;border-radius:50%;overflow:hidden;background:#fff;box-shadow:0 10px 26px -10px rgba(10,31,68,.3);border:4px solid #fff;display:flex;align-items:center;justify-content:center}
  .type-peek img{width:100%;height:100%;object-fit:contain;object-position:center center}
  .type-card-v2 h3{font-size:1.08rem;margin-bottom:12px}
  .type-card-v2 .tv2-rule{width:34px;height:3px;border-radius:3px;margin:0 auto 14px}
  .tint-teal .tv2-rule{background:var(--teal)}
  .tint-gold .tv2-rule{background:var(--gold)}
  .tint-blue .tv2-rule{background:#3E7CB1}
  .type-card-v2 p{font-size:.86rem;color:#555;line-height:1.7}
  .type-card-v2 .tv2-deco{position:absolute;bottom:16px;right:18px;width:20px;height:20px;opacity:.35}
  @media(max-width:980px){.type-grid-v2{grid-template-columns:1fr;max-width:380px;margin:8px auto 0}}

  /* --- SECTION 2 v2 — dark navy, side-peek illustration cards --- */
  .neuro-grid-v2{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .neuro-card-v2{position:relative;background:rgba(186,224,243,.10);border:1.5px solid rgba(255,255,255,.22);border-radius:18px;padding:20px 14px 16px 136px;backdrop-filter:blur(16px) saturate(1.3);-webkit-backdrop-filter:blur(16px) saturate(1.3);box-shadow:0 8px 32px -10px rgba(10,50,120,.28);transition:transform .4s var(--ease),border-color .4s}
  .neuro-card-v2:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.5)}
  .neuro-peek{position:absolute;left:0;bottom:0;top:0;width:130px;overflow:hidden;pointer-events:none;border-radius:18px 0 0 18px}
  .neuro-peek img{height:100%;width:auto;display:block;object-fit:contain;object-position:left center}
  .neuro-card-v2 .nico-v2{width:30px;height:30px;border-radius:9px;background:rgba(255,255,255,.14);display:grid;place-items:center;margin-bottom:10px;color:#BAE0F3}
  .neuro-card-v2 .nico-v2 svg{width:15px;height:15px}
  .neuro-card-v2 h4{color:#fff;font-size:.86rem;margin-bottom:5px;line-height:1.3}
  .neuro-card-v2 p{font-size:.72rem;color:rgba(220,240,252,.82);line-height:1.55;margin-bottom:12px}
  .neuro-learn{display:inline-flex;align-items:center;gap:5px;font-size:.62rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(200,169,107,.55);border-radius:999px;padding:6px 11px;transition:background .3s,color .3s;white-space:nowrap}
  .neuro-learn:hover{background:var(--gold);color:var(--blue)}
  .neuro-learn svg{width:11px;height:11px}
  @media(max-width:980px){.neuro-grid-v2{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:680px){.neuro-grid-v2{grid-template-columns:1fr}}

  /* --- SECTION 3 v2 — illustrated pastel behaviour cards --- */
  .beh-grid-v2{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
  .beh-card-v2{position:relative;display:flex;gap:18px;align-items:center;padding:24px 22px;border-radius:20px;box-shadow:0 12px 30px -18px rgba(10,31,68,.22);transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
  .beh-card-v2:hover{transform:translateY(-5px);box-shadow:0 18px 38px -16px rgba(10,31,68,.28)}
  .beh-card-v2.tint-teal{background:linear-gradient(165deg,#E7F6F4,#F6FBFA)}
  .beh-card-v2.tint-gold{background:linear-gradient(165deg,#FBF2E4,#FDF9F1)}
  .beh-card-v2.tint-blue{background:linear-gradient(165deg,#E9F2FB,#F6FAFD)}
  .beh-peek{flex:0 0 auto;width:110px;display:flex;align-items:center;justify-content:center}
  .beh-peek img{width:100%;max-height:120px;object-fit:contain}
  .beh-card-v2 .bico-v2{position:absolute;top:20px;right:20px;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;color:#fff}
  .beh-card-v2 .bico-v2 svg{width:16px;height:16px}
  .tint-teal .bico-v2{background:var(--teal)}
  .tint-gold .bico-v2{background:var(--gold)}
  .tint-blue .bico-v2{background:#3E7CB1}
  .beh-card-v2 h4{font-size:.96rem;margin-bottom:6px;padding-right:38px}
  .beh-card-v2 .bv2-rule{width:26px;height:2.5px;border-radius:3px;margin-bottom:10px}
  .tint-teal .bv2-rule{background:var(--teal)}
  .tint-gold .bv2-rule{background:var(--gold)}
  .tint-blue .bv2-rule{background:#3E7CB1}
  .beh-card-v2 p{font-size:.8rem;color:#555;line-height:1.65;margin:0}
  .beh-grid-v2 .beh-card-v2:last-child{grid-column:1 / -1;max-width:calc(50% - 10px)}
  @media(max-width:680px){.beh-grid-v2{grid-template-columns:1fr}.beh-grid-v2 .beh-card-v2:last-child{max-width:100%}}

  /* --- CTA v2 — dark full-bleed with photo + ribbon motif --- */
  .cta-v2{position:relative;background:linear-gradient(120deg,#081733,#0A1F44 55%,#0d2650);color:#fff;padding:0;overflow:hidden}
  .cta-v2-inner{position:relative;z-index:2;display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:40px;padding:88px 0}
  .cta-v2 .eyebrow{color:var(--teal)}
  .cta-v2 h2{color:#fff;font-size:clamp(1.8rem,3.2vw,2.5rem);margin:14px 0 16px}
  .cta-v2 p{color:rgba(255,255,255,.78);max-width:48ch;margin-bottom:30px;font-size:.98rem}
  .cta-v2-row{display:flex;gap:12px;flex-wrap:wrap}
  .cta-v2 .btn-ghost{background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.28)}
  .cta-v2 .btn-ghost:hover{background:rgba(255,255,255,.18)}
  .cta-v2-photo{position:relative;background:linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02));border:1px solid rgba(255,255,255,0.1);border-radius:28px;overflow:hidden;box-shadow:0 25px 50px -15px rgba(0,0,0,.45);aspect-ratio:4/3;display:flex;align-items:flex-end;justify-content:center}
  .cta-v2-photo img{width:100%;height:100%;object-fit:cover;object-position:bottom center}
  .cta-v2-ribbon{position:absolute;top:-40px;right:-10px;width:340px;height:340px;opacity:.5;pointer-events:none;z-index:1}
  .cta-v2::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 60% at 8% 90%,rgba(0,140,140,.14),transparent 70%);pointer-events:none;z-index:1}
  @media(max-width:980px){.cta-v2-inner{grid-template-columns:1fr;padding:64px 0;text-align:center}.cta-v2-row{justify-content:center}.cta-v2-photo{max-width:420px;margin:0 auto}.cta-v2-ribbon{display:none}}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO */}
      <section className="page-hero" id="top">
        <div className="wrap">
          <div className="hero-text">
            <h1 className="reveal d1">Autism homeopathy care — holistic support, types &amp; everyday developmental progress.</h1>
            <p className="lead reveal d2">
              A closer look at how Autism Spectrum Disorder, Asperger's Syndrome, and developmental differences present. We provide early intervention therapy and supportive autism brain therapy through natural, holistic autism treatment, constitutional homeopathy, and complementary biomedical treatment guidance alongside your child's medical and therapy team.
            </p>
            <div className="honesty reveal d2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 8v4M12 16h.01"/>
                <circle cx="12" cy="12" r="9"/>
              </svg>
              Supportive & complementary care — never a replacement for your child's medical team.
            </div>
            <div className="page-hero-cta reveal d3">
              <Link className="btn btn-primary" href="/contactus">Book a Consultation</Link>
              <Link className="btn btn-ghost" href="/contactus">
                Upload Reports
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 16V4M7 9l5-5 5 5M5 20h14"/>
                </svg>
              </Link>
            </div>
            <div className="page-hero-trust reveal d3">
              <div><span className="stat-num">20+</span><span className="lbl">Years of practice, Dr. Ketan Patel</span></div>
              <div><span className="stat-num">3</span><span className="lbl">Experienced homeopathic physicians</span></div>
              <div><span className="stat-num">0–16</span><span className="lbl">Ages we care for, birth to 16</span></div>
            </div>
          </div>

          <div className="hero-visual reveal d2" aria-hidden="true">
            <div className="hv-photo-wrap">
              <img className="hv-photo" src="/images/autism-care/image-1.png" alt="Child holding colourful puzzle pieces" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — AUTISM TYPES & ASSOCIATED CONDITIONS */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>ASD can present in different ways</h2>
            <p className="lead">Every child's presentation is unique — from Asperger's Syndrome and mild traits to Intense and Profound Autism. Care is shaped around your child, not a label.</p>
          </div>
          <div className="type-grid-v2">
            <div className="type-card-v2 tint-teal reveal d1">
              <div className="type-peek">
                <img src="/images/autism-care/child-boy-peeking.png" alt="Illustration for Profound Autism" loading="lazy" decoding="async" />
              </div>
              <h3>Profound Autism</h3>
              <div className="tv2-rule"></div>
              <p>Sometimes called Intense Autism, this is where symptoms and behavioural challenges are more pronounced and children may need additional support with communication, social interaction, emotional regulation and daily activities. Care is planned around individual assessment — with attention to intense behaviour, self-injurious behaviour, calming support and sleep-related concerns.</p>
              <svg className="tv2-deco" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.6">
                <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z"/>
              </svg>
            </div>
            <div className="type-card-v2 tint-gold reveal d2">
              <div className="type-peek">
                <img src="/images/autism-care/child-girl-peeking.png" alt="Illustration for Syndromic Autism" loading="lazy" decoding="async" />
              </div>
              <h3>Syndromic Autism</h3>
              <div className="tv2-rule"></div>
              <p>Here, autism-related symptoms — sometimes described as Asperger's Syndrome-type or milder Autism Spectrum Disorder traits — appear alongside an associated genetic, neurological or developmental condition. A detailed look at the child's developmental history, medical background, communication abilities and behaviour helps shape care around both the autism and the associated condition.</p>
              <svg className="tv2-deco" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6">
                <path d="M6 3l1 3H4l1-3ZM19 15l1 3h-3l1-3Z"/>
                <path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4"/>
              </svg>
            </div>
            <div className="type-card-v2 tint-blue reveal d3">
              <div className="type-peek">
                <img src="/images/autism-care/family-peeking.png" alt="Illustration for Genetic, Metabolic and Mitochondrial Autism" loading="lazy" decoding="async" />
              </div>
              <h3>Genetic, Metabolic & Mitochondrial Autism</h3>
              <div className="tv2-rule"></div>
              <p>In some children, autism-like symptoms are associated with genetic, metabolic or mitochondrial conditions. These cases call for detailed medical evaluation and specialist assessment. Development, cognition, speech, behaviour and related medical concerns are all considered in building an individualised care approach.</p>
              <svg className="tv2-deco" viewBox="0 0 24 24" fill="none" stroke="#3E7CB1" strokeWidth="1.6">
                <path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7"/>
                <circle cx="12" cy="7" r="2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — NEUROLOGICAL & DEVELOPMENTAL CONDITIONS */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Conditions often seen alongside autism care</h2>
            <p className="lead">Cerebral Palsy, genetic/mitochondrial disorders and PTSD are sometimes seen alongside Autism Spectrum Disorder — diagnosed by specialists, with our care working alongside them.</p>
          </div>
          <div className="neuro-grid-v2">
            <div className="neuro-card-v2 reveal d1">
              <div className="neuro-peek">
                <img src="/images/autism-care/neuro-peek-1-purple-girl.png" alt="Illustration for Cerebral Palsy" loading="lazy" decoding="async" />
              </div>
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5a5 5 0 0 0 10 0c0-2 1-3 1-5a5 5 0 0 0-5-5Z"/>
                  <path d="M9 21h6M10 18h4"/>
                </svg>
              </div>
              <h4>Cerebral Palsy</h4>
              <p>A neurological condition affecting movement, muscle coordination, posture and motor development. Early assessment and personalised support can help.</p>
              <Link className="neuro-learn" href="/contactus">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
            <div className="neuro-card-v2 reveal d2">
              <div className="neuro-peek">
                <img src="/images/autism-care/neuro-peek-2-red-boy.png" alt="Illustration for Periventricular Leukomalacia" loading="lazy" decoding="async" />
              </div>
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3.5 2"/>
                </svg>
              </div>
              <h4>Periventricular Leukomalacia (PVL)</h4>
              <p>A condition affecting the brain's white matter, often linked to motor development and muscle-control challenges. Ongoing monitoring matters.</p>
              <Link className="neuro-learn" href="/contactus">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
            <div className="neuro-card-v2 reveal d3">
              <div className="neuro-peek">
                <img src="/images/autism-care/neuro-peek-3-yellow-girl.png" alt="Illustration for Mild Hypoxic-Ischemic Encephalopathy" loading="lazy" decoding="async" />
              </div>
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>
                </svg>
              </div>
              <h4>Mild Hypoxic-Ischemic Encephalopathy (HIE)</h4>
              <p>Related to reduced oxygen and blood supply to the brain around birth. Regular developmental assessment and specialist guidance matter here.</p>
              <Link className="neuro-learn" href="/contactus">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
            <div className="neuro-card-v2 reveal d2">
              <div className="neuro-peek">
                <img src="/images/autism-care/neuro-peek-4-teal-boy.png" alt="Illustration for PTSD in autistic children" loading="lazy" decoding="async" />
              </div>
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11Z"/>
                </svg>
              </div>
              <h4>PTSD (Post-Traumatic Stress)</h4>
              <p>Stress or trauma-related symptoms can sometimes overlap with or intensify autism-related behaviour. A trained specialist's assessment helps tell the two apart and guide the right support.</p>
              <Link className="neuro-learn" href="/contactus">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — AUTISM BEHAVIOUR */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Everyday behaviours families navigate</h2>
            <p className="lead">From speech delay and hyperactivity to meltdowns and screen-linked "Virtual Autism" traits — supporting boys, girls and young adults with patience and structure.</p>
          </div>
          <div className="beh-grid-v2">
            <div className="beh-card-v2 tint-teal reveal d1">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-4-hyper-boy.png" alt="Illustration for Speech Delays in Child" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z"/>
                  </svg>
                </div>
                <h4>Speech &amp; Social Communication</h4>
                <div className="bv2-rule"></div>
                <p>Early signs like a child not making eye contact, a child not responding to name, or delayed speech. Individual assessment guides suitable communication support and early intervention therapy.</p>
              </div>
            </div>
            <div className="beh-card-v2 tint-gold reveal d2">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-5-anxious-girl.png" alt="Illustration for Hyperactive / Restless Child" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>
                  </svg>
                </div>
                <h4>Hyperactive / Restless Child</h4>
                <div className="bv2-rule"></div>
                <p>Difficulty focusing on one activity, sitting calmly, or maintaining attention. Looking at daily routine, sleep and physical activity helps shape the right support plan.</p>
              </div>
            </div>
            <div className="beh-card-v2 tint-blue reveal d3">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-1-crying-boy.png" alt="Illustration for Self-Injuries & Injuries to Others" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 9v4M12 17h.01"/>
                    <path d="M10.3 3.9 2.5 17a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>
                  </svg>
                </div>
                <h4>Self-Injuries & Injuries to Others</h4>
                <div className="bv2-rule"></div>
                <p>Some children respond to frustration or emotional distress with behaviour that can hurt themselves or others. Identifying triggers and safe, structured support is important.</p>
              </div>
            </div>
            <div className="beh-card-v2 tint-gold reveal d1">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-2-sleeping-boy.png" alt="Illustration for Meltdown in Autistic Child" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M8 6l8 12M6 6l12 12"/>
                  </svg>
                </div>
                <h4>Meltdown in Autistic Child</h4>
                <div className="bv2-rule"></div>
                <p>Can follow sensory overload, a change in routine or emotional stress. A calm environment, predictable routines and individualised support help.</p>
              </div>
            </div>
            <div className="beh-card-v2 tint-teal reveal d2">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-3-sensory-girl.png" alt="Illustration for Sleep Management in Autistic Child" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a6 6 0 1 0 4.5 9.8A8 8 0 1 1 17 3Z"/>
                  </svg>
                </div>
                <h4>Sleep Support in Autistic Child</h4>
                <div className="bv2-rule"></div>
                <p>For parents supporting an autistic child not sleeping, having irregular sleep cycles, or nocturnal waking. Assessing daily routines and constitutional support helps promote calmer rest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-v2">
        <svg className="cta-v2-ribbon" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M170 40c60 20 90 70 60 120-20 33-70 40-95 15-18-18-15-45 5-58 15-10 33-4 38 10" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" opacity=".55"/>
          <path d="M70 260c-25-35-15-85 30-100 38-13 78 5 88 38" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" opacity=".35"/>
          <circle cx="205" cy="120" r="3" fill="var(--teal)" opacity=".7"/>
          <circle cx="95" cy="205" r="2.5" fill="var(--gold)" opacity=".6"/>
          <circle cx="250" cy="180" r="2" fill="var(--teal)" opacity=".5"/>
        </svg>
        <div className="wrap cta-v2-inner">
          <div>
            <h2 className="reveal d1">A calmer, more supported everyday for your child.</h2>
            <p className="reveal d1">
              At our clinic, we offer supportive holistic autism treatment through constitutional homeopathy, gentle detox therapy guidance, and early intervention. Results vary from child to child. Consult our doctor for an individual assessment, transparent consultation fees, and collaborative care alongside your medical team.
            </p>
            <div className="cta-v2-row reveal d2">
              <Link className="btn btn-primary" href="/contactus">Book a Consultation</Link>
              <a className="btn btn-ghost" href="tel:+919898005354">Call +91 98980 05354</a>
              <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">WhatsApp our team</a>
            </div>
          </div>
          <div className="cta-v2-photo reveal d2">
            <img src="/images/autism-care/a14.png" alt="Family together supporting their child" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
    </>
  );
}

