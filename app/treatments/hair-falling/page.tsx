import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: "Hair Falling & Baldness (Alopecia Areata) Care | Speciality Homeopathy — Dr. Ketan Patel",
  description: "Individualised homeopathic care for hair fall, baldness and Alopecia Areata — causes, commonly used remedies and our root-cause approach. Dr. Ketan Patel, Vastrapur, Ahmedabad.",
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

  /* sections */
  .sec{padding:88px 0}
  .sec-head{max-width:700px;margin:0 auto 46px;text-align:center}
  .sec-head h2{font-size:clamp(1.6rem,2.8vw,2.25rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}
  .reveal{opacity:1;transform:none}
  .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}

  /* SECTION 1 — types (left content / right photo cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;counter-reset:p}
  .type-card{position:relative;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:row;align-items:stretch;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .type-info{flex:1 1 50%;min-width:0;padding:26px 14px 22px 20px;display:flex;flex-direction:column;gap:12px}
  .type-head{display:flex;align-items:center;gap:12px}
  .type-card .num{counter-increment:p;font-weight:700;font-size:.78rem;letter-spacing:.1em;color:rgba(10,50,100,.32);flex:0 0 auto}
  .type-card .num::before{content:"0" counter(p)}
  .pico{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;background:var(--teal-10);color:var(--teal);flex:0 0 auto;transition:transform .4s var(--ease)}
  .pico svg{width:21px;height:21px}
  .type-card:hover .pico{transform:scale(1.08) rotate(-4deg)}
  .type-info h3{font-size:1.02rem;line-height:1.3}
  .type-info h3::after{content:"";display:block;width:26px;height:2px;background:var(--teal);margin-top:8px;border-radius:2px}
  .type-info p{font-size:.83rem;color:#555;line-height:1.65;margin-top:2px}
  .type-photo{flex:0 0 50%;position:relative;min-height:100%}
  .img-ph{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;text-align:center;padding:10px;background:repeating-linear-gradient(135deg,#eef4f8,#eef4f8 9px,#e2ecf3 9px,#e2ecf3 18px);color:rgba(10,31,68,.34)}
  .img-ph svg{width:30px;height:30px;opacity:.6}
  .img-ph span{font-family:'Open Sans',sans-serif;font-size:.62rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;line-height:1.4}
  @media(max-width:560px){
    .type-card{flex-direction:column}
    .type-photo{flex:0 0 auto;min-height:170px}
  }

  /* SECTION 2 — neuro conditions (dark frosted cards) */
  .neuro{background:var(--blue);color:var(--ivory)}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .eyebrow{color:var(--gold)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
  .neuro-card{position:relative;display:flex;flex-direction:row;align-items:flex-start;gap:24px;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:32px 30px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .neuro-card:hover{transform:translateY(-7px) scale(1.012);border-color:rgba(255,255,255,.55);box-shadow:0 22px 52px -12px rgba(10,50,120,.4)}
  .neuro-card .nico{width:112px;height:112px;border-radius:50%;background:rgba(255,255,255,.12);display:grid;place-items:center;flex:0 0 auto;color:#BAE0F3}
  .neuro-card .nico svg{width:42px;height:42px}
  .nico.ph{border:1.5px dashed rgba(186,224,243,.55);color:rgba(186,224,243,.55)}
  .neuro-content{flex:1;min-width:0}
  .neuro-card h4{color:#fff;font-size:1.15rem;margin-bottom:10px}
  .neuro-card h4::after{content:"";display:block;width:26px;height:2px;background:rgba(186,224,243,.7);margin-top:8px;border-radius:2px}
  .neuro-card p{font-size:.86rem;color:rgba(220,240,252,.85);line-height:1.7}
  @media(max-width:560px){
    .neuro-card{flex-direction:column;align-items:center;text-align:center;gap:16px}
  }

  /* SECTION 3 — behaviour (icon list cards) */
  .behaviour{background:#fff}
  .beh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  .beh-card{display:flex;align-items:flex-start;gap:18px;padding:22px 20px;border:1px solid var(--line);border-radius:16px;background:var(--ivory);box-shadow:0 10px 24px -16px rgba(10,31,68,.18);transition:transform .3s var(--ease),box-shadow .3s var(--ease)}
  .beh-card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(10,31,68,.25)}
  .beh-icon{position:relative;width:60px;height:60px;border-radius:50%;background:radial-gradient(circle at 32% 28%,#eef8fb,var(--teal-10));display:grid;place-items:center;flex:0 0 auto;color:var(--teal);transition:transform .35s var(--ease)}
  .beh-icon::before{content:"";position:absolute;inset:-6px;border-radius:50%;border:1.5px dashed rgba(0,140,140,.3)}
  .beh-card:hover .beh-icon{transform:scale(1.08) rotate(-3deg)}
  .beh-icon svg{width:24px;height:24px}
  .beh-icon.ph{color:rgba(10,31,68,.3)}
  .beh-icon.ph::before{border-color:rgba(10,31,68,.25)}
  .beh-card h4{font-size:1rem;margin-bottom:6px}
  .beh-card h4::after{content:"";display:block;width:26px;height:2px;background:var(--teal);margin:6px 0 10px;border-radius:2px}
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
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO — 100% full-width banner */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <img src="/images/hair-falling/hero-banner.png"
            alt="Hair Falling &amp; Baldness (Alopecia Areata) Care Hero Section Banner"
            style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" decoding="async" />
        </div>
      </section>

      {/* SECTION 1 — COMMON CAUSES */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What contributes to hair loss</h2>
            <p className="lead">Hair fall can occur due to several factors — genetic, hormonal, environmental and lifestyle-related.</p>
          </div>
          <div className="type-grid">
            <div className="type-card reveal d1">
              <div className="type-info">
                <div className="type-head">
                  <span className="num"></span>
                  <div className="pico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
                      <circle cx="12" cy="11" r="2.2" />
                    </svg>
                  </div>
                </div>
                <h3>Genetic or Hereditary Tendency</h3>
                <p>A family history of hair thinning or baldness is one of the most common underlying factors.</p>
              </div>
              <div className="type-photo">
                <img src="https://static.wixstatic.com/media/66422a_1932590a1eba4988b04e8b1a74c39468~mv2.jpeg"
                  alt="Genetic or hereditary hair loss illustration"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="type-card reveal d2">
              <div className="type-info">
                <div className="type-head">
                  <span className="num"></span>
                  <div className="pico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3.2" />
                      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                    </svg>
                  </div>
                </div>
                <h3>Alopecia Areata</h3>
                <p>Patchy hair loss where hair may regrow over time with appropriate, individualised support.</p>
              </div>
              <div className="type-photo">
                <img src="https://static.wixstatic.com/media/66422a_3e1d2097a5b241448601bf44aacb7117~mv2.png"
                  alt="Alopecia areata illustration"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="type-card reveal d3">
              <div className="type-info">
                <div className="type-head">
                  <span className="num"></span>
                  <div className="pico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" />
                      <circle cx="12" cy="7" r="2" />
                    </svg>
                  </div>
                </div>
                <h3>Hormonal Imbalance</h3>
                <p>Hormonal shifts — including after illness, childbirth or thyroid changes — can contribute to hair fall.</p>
              </div>
              <div className="type-photo">
                <img src="https://static.wixstatic.com/media/66422a_41a4521fcafa4596a6b572d48db8a905~mv2.png"
                  alt="Hormonal imbalance hair loss illustration"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', maxWidth: '70ch', margin: '34px auto 0', fontSize: '.9rem', color: '#555' }}>
            Other contributing factors include <b style={{ color: 'var(--blue)' }}>stress and psychological factors</b>, <b style={{ color: 'var(--blue)' }}>poor scalp hygiene</b>, unsuitable shampoos, <b style={{ color: 'var(--blue)' }}>hard water</b>, allergies, hair follicle disorders, and recovery after acute illnesses such as fever.
          </p>
        </div>
      </section>

      {/* SECTION 2 — HOMEOPATHIC REMEDIES */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Selected according to individual symptoms</h2>
            <p className="lead">Homeopathic treatment aims to address the underlying causes of hair fall rather than focusing only on external applications. Remedies are traditionally considered based on the specific pattern presented.</p>
          </div>
          <div className="neuro-grid">
            <div className="neuro-card reveal d1">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_2809e11e4ee24c859404b6e91214a5db~mv2.png"
                alt="Natrum Muriaticum icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <h4>Natrum Muriaticum</h4>
                <p>Considered for hair falling easily, coming out while combing, and hair fall in children or after illness.</p>
              </div>
            </div>

            <div className="neuro-card reveal d2">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_590d0a2336ec43d18d657b59cfc234f6~mv2.png"
                alt="Carbo Vegetabilis icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <h4>Carbo Vegetabilis</h4>
                <p>May be considered for hair fall after severe illness or following childbirth.</p>
              </div>
            </div>

            <div className="neuro-card reveal d3">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_9ed61cbe94d346c5bfbe1bb5dbfd517d~mv2.png"
                alt="Sepia icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <h4>Sepia</h4>
                <p>Traditionally used for hair fall associated with chronic headaches or during menopause.</p>
              </div>
            </div>

            <div className="neuro-card reveal d1">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_073493a66c8e47a6a9b6fadce1bd6175~mv2.png"
                alt="Phosphorus icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <h4>Phosphorus</h4>
                <p>May be indicated for dry, scaly bald patches, hair falling in bunches, dandruff or premature greying.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CONDITIONS COVERED */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Different patterns of hair loss we support</h2>
            <p className="lead">An individualised, holistic approach focused on the underlying cause — suitable for a range of hair and scalp concerns.</p>
          </div>
          <div className="beh-grid">
            <div className="beh-card reveal d1">
              <img className="beh-icon"
                src="https://static.wixstatic.com/media/66422a_c6b38c7629c64a4ca50af26952909635~mv2.png"
                alt="Hair Fall &amp; Thinning icon"
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div>
                <h4>Hair Fall &amp; Thinning</h4>
                <p>Gradual or sudden hair thinning addressed through individualised, symptom-based care.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <img className="beh-icon"
                src="https://static.wixstatic.com/media/66422a_d1f3bebda9e845d6a0d0839edb70dca5~mv2.png"
                alt="Baldness &amp; Alopecia Areata icon"
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div>
                <h4>Baldness &amp; Alopecia Areata</h4>
                <p>Patchy or progressive hair loss supported with a holistic, individualised treatment plan.</p>
              </div>
            </div>

            <div className="beh-card reveal d3">
              <img className="beh-icon"
                src="https://static.wixstatic.com/media/66422a_1b1fb38527754429b699adf11f7f9ca8~mv2.png"
                alt="Premature Hair Greying icon"
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div>
                <h4>Premature Hair Greying</h4>
                <p>Early greying addressed alongside overall hair and scalp health.</p>
              </div>
            </div>

            <div className="beh-card reveal d1">
              <img className="beh-icon"
                src="https://static.wixstatic.com/media/66422a_b9c53e8b3afd45919e77f25ee18ca86d~mv2.png"
                alt="Split Ends &amp; Rough Hair icon"
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div>
                <h4>Split Ends &amp; Rough Hair</h4>
                <p>Recurring split ends and rough texture considered as part of overall hair health.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <img className="beh-icon"
                src="https://static.wixstatic.com/media/66422a_66a26f31df534eb3bfd9135a2c08d09d~mv2.png"
                alt="Dandruff-Associated Hair Loss icon"
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} loading="lazy" decoding="async" />
              <div>
                <h4>Dandruff-Associated Hair Loss</h4>
                <p>Scalp conditions linked to dandruff addressed alongside hair-fall concerns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY BANNER (BOTTOM) */}
      <section className="secondary-banner-sec" id="bottom-banner">
        <div className="hero-banner-full">
          <img src="/images/hair-falling/banner-2.png"
            alt="Hair Falling Care and Support Banner"
            style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" decoding="async" />
        </div>
      </section>

      {/* STICKY ACTIONS */}
      <div className="sticky-actions">
        <a className="fab fab-wa" href="https://wa.me/918320131612" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.5-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.6-.1 1.1Z" />
          </svg>
          <span>WhatsApp</span>
        </a>
        <Link className="fab fab-up" href="/contact" aria-label="Upload reports">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
          </svg>
          <span>Upload Reports</span>
        </Link>
      </div>
    </>
  );
}
