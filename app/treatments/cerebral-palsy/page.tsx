import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cerebral Palsy Spastic Diplegia & Quadriplegia Treatment',
  description: 'Learn about Cerebral Palsy, including its types, causes and symptoms, with supportive homeopathic care alongside your child’s medical and therapy team.',
  keywords: 'cerebral palsy homeopathy treatment, spastic cerebral palsy homeopathy, hypotonia homeopathic treatment, hypoxic encephalopathy homeopathy, birth injury neuro treatment',
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
  .type-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px}
  .type-card{position:relative;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;align-items:stretch;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-5px);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .type-photo{position:relative;flex:none;width:100%;align-self:stretch;overflow:hidden;aspect-ratio:16/9;min-height:0}
  .type-photo img{width:100%;height:100%;object-fit:cover;object-position:center;display:block}
  .type-num{position:absolute;top:14px;left:14px;width:32px;height:32px;border-radius:50%;background:var(--blue);color:#fff;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.75rem;display:grid;place-items:center;box-shadow:0 6px 16px -6px rgba(10,31,68,.5);z-index:2}
  .type-top{padding:22px 20px 6px;text-align:left}
  .pico{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;margin:0 0 12px;background:var(--teal-10);color:var(--teal);transition:transform .4s var(--ease)}
  .pico svg{width:20px;height:20px}
  .type-card:hover .pico{transform:scale(1.08) rotate(-4deg)}
  .type-top h3{font-size:1.02rem;text-align:left;line-height:1.3}
  .type-body{flex:1;padding:0 20px 22px;text-align:left}
  .type-body p{font-size:.83rem;color:#555;line-height:1.6}

  /* SECTION 2 — possible causes (light cards, numbered + icon photo) */
  .neuro{background:linear-gradient(180deg,#eef5fb 0%,#f6fafd 100%)}
  .neuro .sec-head h2{color:var(--blue)}
  .neuro .eyebrow{color:var(--teal)}
  .neuro .lead{color:#5b6b7c}
  .neuro-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
  .neuro-card{position:relative;background:#fff;border:1px solid var(--line);border-radius:20px;padding:30px 20px 26px;text-align:center;box-shadow:0 14px 34px -20px rgba(20,50,90,.22);transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .neuro-card:hover{transform:translateY(-7px);box-shadow:0 22px 46px -18px rgba(20,50,90,.3)}
  .neuro-num{position:absolute;top:16px;left:18px;width:32px;height:32px;border-radius:50%;background:var(--teal-10);color:#0a4a6e;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.75rem;display:grid;place-items:center}
  .neuro-card .nico{width:78px;height:78px;border-radius:50%;overflow:hidden;background:#eef4fb;display:grid;place-items:center;margin:8px auto 16px}
  .neuro-card .nico img{width:100%;height:100%;object-fit:cover}
  .neuro-card h4{color:var(--blue);font-size:.96rem;margin-bottom:8px}
  .neuro-card p{font-size:.82rem;color:#667;line-height:1.6}

  /* SECTION 3 — behaviour: accent-top cards, numbered, left-aligned */
  .behaviour{position:relative;background:radial-gradient(120% 100% at 18% 0%,#0e1e42 0%,#081130 55%,#040a1e 100%);overflow:hidden}
  .behaviour .sec-head h2{color:#fff}
  .behaviour .sec-head .lead{color:rgba(214,226,244,.72)}
  .behaviour .eyebrow{color:#7fa8e8;display:inline-flex;align-items:center;gap:12px}
  .behaviour .eyebrow::before,.behaviour .eyebrow::after{content:"";width:26px;height:1.5px;background:rgba(127,168,232,.55)}
  .beh-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;counter-reset:sign}
  .beh-card{position:relative;background:rgba(30,55,105,.32);border:1px solid rgba(130,165,225,.18);border-radius:18px;padding:26px 70px 26px 24px;overflow:hidden;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);transition:transform .35s var(--ease),border-color .35s var(--ease),background .35s var(--ease)}
  .beh-card:hover{transform:translateY(-6px);border-color:rgba(150,190,240,.4);background:rgba(34,62,118,.4)}
  .beh-num{counter-increment:sign;width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#3a7bd5,#12306b);color:#fff;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.78rem;display:grid;place-items:center;margin-bottom:16px;box-shadow:0 6px 16px -6px rgba(20,60,140,.6)}
  .beh-num::before{content:"0" counter(sign)}
  .beh-card h4{font-size:1rem;margin-bottom:10px;padding-bottom:10px;position:relative;text-align:left;color:#fff}
  .beh-card h4::after{content:"";position:absolute;left:0;bottom:0;width:26px;height:2px;background:linear-gradient(90deg,#4a8cdb,#1a4a8f)}
  .beh-card p{font-size:.86rem;color:rgba(214,226,244,.72);line-height:1.65;margin:0;text-align:left;max-width:85%}
  .beh-watermark{position:absolute;right:16px;top:16px;width:44px;height:44px;color:#FAF8F4;opacity:1;pointer-events:none;background:linear-gradient(135deg,#e8b25e,#C8A96B);border-radius:50%;padding:9px;box-shadow:0 8px 18px -8px rgba(0,0,0,.4);display:grid;place-items:center}
  .beh-watermark svg{width:22px;height:22px;stroke:#FAF8F4}
  .beh-grid .beh-card:last-child{grid-column:2}

  /* CTA */
  .cta{position:relative;background:linear-gradient(145deg,#ddf1fa 0%,#cbe9f7 45%,#bfe1f2 100%);color:var(--blue);text-align:left;padding:96px 0;overflow:hidden}
  .cta::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 80% 40%,rgba(255,255,255,.35),transparent 70%);pointer-events:none}
  .cta::after{content:"";position:absolute;top:0;left:15%;right:15%;height:1.5px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9) 40%,rgba(255,255,255,.9) 60%,transparent);pointer-events:none}
  .cta .wrap{position:relative;z-index:1;display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}
  .cta h2{color:var(--blue);font-size:clamp(1.7rem,3.2vw,2.4rem);margin-bottom:16px}
  .cta p{color:rgba(10,31,68,.78);max-width:52ch;margin:0 0 28px;font-size:1rem}
  .cta-row{display:flex;gap:12px;flex-wrap:wrap}
  .cta .btn-ghost{background:rgba(255,255,255,.65);color:var(--blue);border-color:rgba(10,31,68,.2);backdrop-filter:blur(8px)}
  .cta .btn-ghost:hover{background:rgba(255,255,255,.85);transform:translateY(-2px)}
  .cta .btn svg{width:15px;height:15px;flex:0 0 auto}
  .cta .eyebrow{color:var(--teal)}
  .cta-photo{position:relative;display:flex;align-items:center;justify-content:center}
  .cta-photo-frame{position:relative;width:100%;max-width:420px;aspect-ratio:1/.92;border-radius:46% 54% 58% 42%/50% 46% 54% 50%;overflow:hidden;box-shadow:0 26px 56px -22px rgba(10,31,68,.35);border:5px solid rgba(255,255,255,.6)}
  .cta-photo-frame img{width:100%;height:100%;object-fit:cover;display:block}
  .cta-deco{position:absolute;color:rgba(10,74,110,.45);pointer-events:none}
  .cta-deco svg{width:100%;height:100%}
  .cta-deco-1{width:26px;height:26px;top:-4%;left:-2%}
  .cta-deco-2{width:20px;height:20px;bottom:6%;left:-6%}
  .cta-deco-3{width:60px;height:110px;top:8%;right:-10%}

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
    .type-card{flex-direction:column;min-height:0}
    .type-photo{flex:none;width:100%;aspect-ratio:16/9}
    .type-top{padding:20px 22px 4px}
    .type-body{padding:0 22px 22px}
    .neuro-grid{grid-template-columns:repeat(2,1fr)}
    .beh-grid{grid-template-columns:repeat(2,1fr)}
    .beh-grid .beh-card:last-child{grid-column:1 / -1;max-width:calc(50% - 11px);margin:0 auto}
    .foot-grid{grid-template-columns:1fr 1fr}
    .cta .wrap{grid-template-columns:1fr !important;text-align:center !important}
    .cta-row{justify-content:center}
    .cta-photo{order:-1;max-width:340px;margin:0 auto 10px}
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
    .page-hero{padding:0}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
    .type-photo{border-radius:22px}
  }
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO — 100% full-width banner */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <HeroBannerImage src="/images/cerebral-palsy/hero-banner.png" alt="Cerebral Palsy Treatment Hero Section Banner" />
        </div>
      </section>

      {/* SECTION 1 — TYPES OF CEREBRAL PALSY */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 style={{ whiteSpace: 'nowrap' }}>Cerebral Palsy can present in different ways</h2>
            <p className="lead">Depending on the muscles and body parts affected, Cerebral Palsy is classified into several types. Understanding the type helps shape a care plan built around your child.</p>
          </div>
          <div className="type-grid">
            <div className="type-card reveal d1">
              <div className="type-photo">
                <span className="type-num">01</span>
                <img src="https://static.wixstatic.com/media/66422a_204eb8afefbb464d9893c8cb3682efb1~mv2.png"
                  alt="Child practising steps at parallel bars"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
              </div>
              <div className="type-top">
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5a5 5 0 0 0 10 0c0-2 1-3 1-5a5 5 0 0 0-5-5Z" />
                    <path d="M9 21h6M10 18h4" />
                  </svg>
                </div>
                <h3>Spastic Cerebral Palsy</h3>
              </div>
              <div className="type-body">
                <p>The most common form, characterised by stiff muscles and difficulty in movement. Muscle tone and range of motion are assessed individually to guide a suitable support plan.</p>
              </div>
            </div>

            <div className="type-card reveal d2">
              <div className="type-photo">
                <span className="type-num">02</span>
                <img src="https://static.wixstatic.com/media/66422a_de360d0ce15d4c71b910227b9840df9b~mv2.png"
                  alt="Child playing with stacking blocks"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
              </div>
              <div className="type-top">
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3.2" />
                    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                  </svg>
                </div>
                <h3>Athetoid (Dyskinetic) Cerebral Palsy</h3>
              </div>
              <div className="type-body">
                <p>Causes uncontrolled and involuntary movements that can affect the face, arms and legs. Support focuses on movement control, communication and daily-activity independence.</p>
              </div>
            </div>

            <div className="type-card reveal d3">
              <div className="type-photo">
                <span className="type-num">03</span>
                <img src="https://static.wixstatic.com/media/66422a_98532d1a83f141c39109a010bf557acf~mv2.png"
                  alt="Child practising balance on a beam"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
              </div>
              <div className="type-top">
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="4.3" />
                    <path d="M9 8.3c.3-.7 1.1-.7 1.4 0M12.6 8.3c.3-.7 1.1-.7 1.4 0" />
                    <path d="M9.6 11c1.2 1 2.6 1 3.8 0" />
                    <path d="M12 4.7v-1M10.4 5.1 9.7 4M13.6 5.1l.7-1.1" />
                    <path d="M7 14.7c0-1.1 1-1.7 1-1.7M17 14.7c0-1.1-1-1.7-1-1.7" />
                    <path d="M6.3 17.8c1-2.3 3.1-3.4 5.7-3.4s4.7 1.1 5.7 3.4" />
                  </svg>
                </div>
                <h3>Ataxic Cerebral Palsy</h3>
              </div>
              <div className="type-body">
                <p>Mainly affects balance and coordination, often making steady walking and precise movements difficult. Individualised assessment guides balance and coordination support.</p>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', maxWidth: '70ch', margin: '34px auto 0', fontSize: '.9rem', color: '#555' }}>
            Cerebral Palsy may also present as <b style={{ color: 'var(--blue)' }}>Hypotonic</b> (reduced muscle tone) or <b style={{ color: 'var(--blue)' }}>Mixed</b> Cerebral Palsy, and can be further classified by the body area affected — Hemiplegia, Diplegia or Quadriplegia.
          </p>
        </div>
      </section>

      {/* SECTION 2 — POSSIBLE CAUSES */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What can contribute to Cerebral Palsy</h2>
            <p className="lead">Cerebral Palsy occurs due to damage or abnormal development of the brain before birth, during delivery, or in early childhood.</p>
          </div>
          <div className="neuro-grid">
            <div className="neuro-card reveal d1">
              <span className="neuro-num">01</span>
              <div className="nico">
                <img src="/images/cerebral-palsy/image-2.png" alt="Brain injury icon" loading="lazy" decoding="async" />
              </div>
              <h4>Brain Injury Before or During Birth</h4>
              <p>Damage to the developing brain occurring before delivery or during a difficult birth.</p>
            </div>

            <div className="neuro-card reveal d2">
              <span className="neuro-num">02</span>
              <div className="nico">
                <img src="/images/cerebral-palsy/image-3.png" alt="Oxygen supply icon" loading="lazy" decoding="async" />
              </div>
              <h4>Lack of Oxygen During Delivery</h4>
              <p>Reduced oxygen supply to the brain around the time of birth can affect development.</p>
            </div>

            <div className="neuro-card reveal d3">
              <span className="neuro-num">03</span>
              <div className="nico">
                <img src="/images/cerebral-palsy/image-4.png" alt="Premature birth icon" loading="lazy" decoding="async" />
              </div>
              <h4>Premature Birth</h4>
              <p>Babies born early may have a higher likelihood of developmental brain differences.</p>
            </div>

            <div className="neuro-card reveal d1">
              <span className="neuro-num">04</span>
              <div className="nico">
                <img src="/images/cerebral-palsy/image-5.png" alt="Neonatal jaundice icon" loading="lazy" decoding="async" />
              </div>
              <h4>Severe Neonatal Jaundice</h4>
              <p>Untreated high bilirubin levels shortly after birth can, in some cases, affect the brain.</p>
            </div>

            <div className="neuro-card reveal d2">
              <span className="neuro-num">05</span>
              <div className="nico">
                <img src="/images/cerebral-palsy/image-6.png" alt="Brain infections icon" loading="lazy" decoding="async" />
              </div>
              <h4>Brain Infections</h4>
              <p>Certain infections affecting the brain in infancy can contribute to developmental changes.</p>
            </div>

            <div className="neuro-card reveal d3">
              <span className="neuro-num">06</span>
              <div className="nico">
                <img src="/images/cerebral-palsy/image-7.png" alt="Head injuries icon" loading="lazy" decoding="async" />
              </div>
              <h4>Head Injuries in Early Childhood</h4>
              <p>Injury to the head during infancy or early childhood can affect brain development.</p>
            </div>

            <div className="neuro-card reveal d1">
              <span className="neuro-num">07</span>
              <div className="nico">
                <img src="/images/cerebral-palsy/image-8.png" alt="Genetic metabolic icon" loading="lazy" decoding="async" />
              </div>
              <h4>Genetic or Metabolic Disorders</h4>
              <p>Some underlying genetic or metabolic conditions are associated with Cerebral Palsy.</p>
            </div>

            <div className="neuro-card reveal d2">
              <span className="neuro-num">08</span>
              <div className="nico">
                <img src="/images/cerebral-palsy/image-9.png" alt="Maternal infections icon" loading="lazy" decoding="async" />
              </div>
              <h4>Maternal Infections During Pregnancy</h4>
              <p>Certain infections during pregnancy can affect the developing baby's brain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SIGNS FAMILIES OFTEN NOTICE */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Signs families often notice</h2>
            <p className="lead">Symptoms vary from child to child. Alongside the signs below, some children also experience feeding difficulties, involuntary movements, learning challenges or recurrent muscle spasms.</p>
          </div>
          <div className="beh-grid">
            <div className="beh-card reveal d1">
              <span className="beh-num"></span>
              <h4>Delayed Developmental Milestones</h4>
              <p>Sitting, crawling, walking or speaking later than typically expected for age.</p>
              <div className="beh-watermark">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <span className="beh-num"></span>
              <h4>Muscle Stiffness or Poor Tone</h4>
              <p>Muscles may feel unusually stiff and tight, or unusually floppy and weak.</p>
              <div className="beh-watermark">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                  <line x1="12" y1="2" x2="12" y2="12" />
                </svg>
              </div>
            </div>

            <div className="beh-card reveal d3">
              <span className="beh-num"></span>
              <h4>Difficulty Sitting, Standing or Walking</h4>
              <p>Coordination and strength challenges can make these everyday movements harder.</p>
              <div className="beh-watermark">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 4v16M7 8l6-4 6 4M7 16l6 4 6-4" />
                </svg>
              </div>
            </div>

            <div className="beh-card reveal d1">
              <span className="beh-num"></span>
              <h4>Poor Balance &amp; Coordination</h4>
              <p>Difficulty maintaining balance during movement or while sitting and standing still.</p>
              <div className="beh-watermark">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
                </svg>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <span className="beh-num"></span>
              <h4>Speech &amp; Communication Difficulties</h4>
              <p>Some children find it harder to form words clearly or express their needs verbally.</p>
              <div className="beh-watermark">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-text">
            <h2 className="reveal d1">Supporting your child's development, one step at a time.</h2>
            <p className="reveal d1">Book a consultation or share your child's reports securely. We'll assess carefully, be honest about how we can help, and work in step with your child's existing medical and therapy team.</p>
            <div className="cta-row reveal d2">
              <Link className="btn btn-primary" href="/contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="3" />
                  <path d="M3 9h18M8 2v4M16 2v4" />
                </svg>
                Book a Consultation
              </Link>
              <a className="btn btn-ghost" href="tel:+919898005354">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2.2Z" />
                </svg>
                Call +91 98980 05354
              </a>
              <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.5-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.6-.1 1.1Z" />
                </svg>
                WhatsApp our team
              </a>
            </div>
          </div>
          <div className="cta-photo reveal d2" aria-hidden="true">
            <div className="cta-photo-frame">
              <img src="/images/cerebral-palsy/image-10.jpg" alt="A parent playing a stacking-ring activity with her child" loading="lazy" decoding="async" />
            </div>
            <span className="cta-deco cta-deco-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
              </svg>
            </span>
            <span className="cta-deco cta-deco-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
              </svg>
            </span>
            <span className="cta-deco cta-deco-3">
              <svg viewBox="0 0 40 110" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M20 4v100M20 20l-12 8M20 36l14 8M20 52l-12 8M20 68l14 8M20 84l-12 8" />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
