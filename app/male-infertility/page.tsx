import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Male Infertility, Low Sperm Count & Motility Treatment',
  description: "Learn about male infertility, low sperm count, motility and semen quality, with supportive care from Dr. Ketan Patel, Ahmedabad.",
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

  /* page hero â€” 100% full-width banner */
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

  /* SECTION 1 â€” types (pillar-style white cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;counter-reset:p}
  .type-card{position:relative;background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;min-height:380px;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .type-card .num{position:relative;counter-increment:p;font-weight:700;font-size:.85rem;letter-spacing:.1em;color:rgba(10,50,100,.3)}
  .type-card .num::before{content:"0" counter(p)}
  .type-top{padding:26px 26px 16px}
  .pico{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;margin:14px 0 16px;background:var(--teal-10);color:var(--teal);transition:transform .4s var(--ease)}
  .pico svg{width:20px;height:20px}
  .type-card:hover .pico{transform:scale(1.08) rotate(-4deg)}
  .type-top h3{font-size:1.08rem}
  .type-body{padding:0 26px 22px}
  .type-body p{font-size:.86rem;color:#555;line-height:1.7}
  .type-img-wrap{position:relative;margin:0 18px 18px;flex:1}
  .type-img-ph{width:100%;height:100%;min-height:180px;border-radius:20px;object-fit:cover}

  /* SECTION 2 â€” neuro conditions (dark frosted cards) */
  .neuro{background:var(--blue);color:var(--ivory)}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .eyebrow{color:var(--gold)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .neuro-card{position:relative;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:20px 20px 26px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .neuro-card:hover{transform:translateY(-7px) scale(1.012);border-color:rgba(255,255,255,.55);box-shadow:0 22px 52px -12px rgba(10,50,120,.4)}
  .neuro-card .neuro-num{position:absolute;top:16px;left:16px;z-index:2;width:26px;height:26px;border-radius:50%;background:rgba(6,20,45,.8);border:1px solid rgba(186,224,243,.6);color:#BAE0F3;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.68rem;display:grid;place-items:center}
  .neuro-img-ph{position:relative;width:100%;aspect-ratio:4/3;border-radius:14px;object-fit:cover;margin-bottom:16px}
  .neuro-card h4{color:#fff;font-size:.96rem;margin-bottom:8px}
  .neuro-card p{font-size:.8rem;color:rgba(220,240,252,.85);line-height:1.6}

  /* SECTION 3 â€” behaviour (icon list cards) */
  .behaviour{background:#fff}
  .beh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
  .beh-card{display:flex;align-items:center;gap:22px;padding:22px;border:1px solid var(--line);border-radius:18px;background:var(--ivory);box-shadow:0 10px 24px -16px rgba(10,31,68,.18);transition:transform .3s var(--ease),box-shadow .3s var(--ease)}
  .beh-card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(10,31,68,.25)}
  .beh-img-ph{width:128px;height:112px;flex:0 0 128px;border-radius:14px;object-fit:cover;transition:transform .35s var(--ease)}
  .beh-card:hover .beh-img-ph{transform:scale(1.04)}
  .beh-num{display:inline-block;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.7rem;color:var(--teal);background:var(--teal-10);border-radius:999px;padding:2px 9px;margin-bottom:8px}
  .beh-card h4{font-size:1rem;margin-bottom:6px}
  .beh-card p{font-size:.85rem;color:#666;line-height:1.65;margin:0}
  .beh-grid .beh-card:last-child{grid-column:1 / -1}
  .beh-grid .beh-card:last-child .beh-img-ph{width:150px;flex:0 0 150px}

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

      {/* PAGE HERO â€” 100% full-width banner */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <HeroBannerImage src="/images/male-infertility/hero-banner.png" alt="Male Infertility Treatment Hero Section Banner" />
        </div>
      </section>

      {/* SECTION 1 â€” UNDERSTANDING MALE INFERTILITY */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Common fertility factors on semen analysis</h2>
            <p className="lead">These are among the most common male fertility factors identified during semen analysis.</p>
          </div>
          <div className="type-grid">
            <div className="type-card reveal d1">
              <div className="type-top">
                <span className="num"></span>
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                </div>
                <h3>Oligospermia &amp; Azoospermia</h3>
              </div>
              <div className="type-body">
                <p>Oligospermia refers to a low sperm count, while Azoospermia refers to the absence of sperm in semen.</p>
              </div>
              <div className="type-img-wrap">
                <img className="type-img-ph"
                  src="https://static.wixstatic.com/media/66422a_98af139ff95f484b88c2bcbf31ccecc1~mv2.png"
                  alt="Oligospermia and Azoospermia illustration"
                  style={{ width: '100%', height: '100%', minHeight: '180px', objectFit: 'cover', borderRadius: '20px' }} loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="type-card reveal d2">
              <div className="type-top">
                <span className="num"></span>
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
                  </svg>
                </div>
                <h3>Asthenozoospermia</h3>
              </div>
              <div className="type-body">
                <p>Refers to poor sperm motility â€” reduced movement ability that can affect fertilisation.</p>
              </div>
              <div className="type-img-wrap">
                <img className="type-img-ph"
                  src="https://static.wixstatic.com/media/66422a_0c1677411e6e4fa59686790d30bbebd7~mv2.png"
                  alt="Asthenozoospermia illustration"
                  style={{ width: '100%', height: '100%', minHeight: '180px', objectFit: 'cover', borderRadius: '20px' }} loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="type-card reveal d3">
              <div className="type-top">
                <span className="num"></span>
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3.2" />
                    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                  </svg>
                </div>
                <h3>Teratozoospermia &amp; OAT</h3>
              </div>
              <div className="type-body">
                <p>Teratozoospermia refers to abnormal sperm shape; OAT describes a combination of low count, poor motility and abnormal shape together.</p>
              </div>
              <div className="type-img-wrap">
                <img className="type-img-ph"
                  src="https://static.wixstatic.com/media/66422a_f78df6bdcbfd4a1099f596995446dea3~mv2.png"
                  alt="Teratozoospermia and OAT illustration"
                  style={{ width: '100%', height: '100%', minHeight: '180px', objectFit: 'cover', borderRadius: '20px' }} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 â€” CONDITIONS TREATED */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What our approach addresses</h2>
            <p className="lead">Treatment focuses on improving sperm production, supporting hormonal balance, and improving overall semen quality â€” individualised to the patient's condition.</p>
          </div>
          <div className="neuro-grid">
            <div className="neuro-card reveal d1">
              <div className="neuro-num">01</div>
              <img className="neuro-img-ph"
                src="https://static.wixstatic.com/media/66422a_6b4a32811b6340569a02a9f981ab1fb0~mv2.png"
                alt="Low Sperm Count &amp; Motility illustration"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} loading="lazy" decoding="async" />
              <h4>Low Sperm Count &amp; Motility</h4>
              <p>Support for oligospermia and reduced sperm movement.</p>
            </div>

            <div className="neuro-card reveal d2">
              <div className="neuro-num">02</div>
              <img className="neuro-img-ph"
                src="https://static.wixstatic.com/media/66422a_43f9e1074b994bc89ee123a5cfdca275~mv2.png"
                alt="Low Semen Volume illustration"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} loading="lazy" decoding="async" />
              <h4>Low Semen Volume</h4>
              <p>Addressing reduced semen volume as part of overall assessment.</p>
            </div>

            <div className="neuro-card reveal d3">
              <div className="neuro-num">03</div>
              <img className="neuro-img-ph"
                src="https://static.wixstatic.com/media/66422a_95d13970319e41c79a0059e47a5b0d04~mv2.png"
                alt="Abnormal Sperm Morphology illustration"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} loading="lazy" decoding="async" />
              <h4>Abnormal Sperm Morphology</h4>
              <p>Support for sperm shape and structural abnormalities.</p>
            </div>

            <div className="neuro-card reveal d1">
              <div className="neuro-num">04</div>
              <img className="neuro-img-ph"
                src="https://static.wixstatic.com/media/66422a_93d17120c9a34e7e9de8ecd8f1495fd7~mv2.png"
                alt="Semen Viscosity Disorders illustration"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} loading="lazy" decoding="async" />
              <h4>Semen Viscosity Disorders</h4>
              <p>Addressing semen consistency-related concerns.</p>
            </div>

            <div className="neuro-card reveal d2">
              <div className="neuro-num">05</div>
              <img className="neuro-img-ph"
                src="https://static.wixstatic.com/media/66422a_8e2229e5af834a90971e11ac209ebbbc~mv2.png"
                alt="Anti-Sperm Antibodies illustration"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} loading="lazy" decoding="async" />
              <h4>Anti-Sperm Antibodies</h4>
              <p>Support for immune-related fertility factors.</p>
            </div>

            <div className="neuro-card reveal d3">
              <div className="neuro-num">06</div>
              <img className="neuro-img-ph"
                src="https://static.wixstatic.com/media/66422a_2fee0aa25ff64296aa515d987a088b6d~mv2.png"
                alt="Hormonal Imbalance illustration"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} loading="lazy" decoding="async" />
              <h4>Hormonal Imbalance</h4>
              <p>Support for hormonal factors affecting fertility.</p>
            </div>

            <div className="neuro-card reveal d1">
              <div className="neuro-num">07</div>
              <img className="neuro-img-ph"
                src="https://static.wixstatic.com/media/66422a_e047580255444ccfb2ee64f0409816bb~mv2.png"
                alt="Urological Disorders illustration"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} loading="lazy" decoding="async" />
              <h4>Urological Disorders</h4>
              <p>Selected urological conditions affecting fertility are considered as part of care.</p>
            </div>

            <div className="neuro-card reveal d2">
              <div className="neuro-num">08</div>
              <img className="neuro-img-ph"
                src="https://static.wixstatic.com/media/66422a_f5871cad5aa243d7a84f040f1a7afd4e~mv2.png"
                alt="Varicocele-Associated Infertility illustration"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} loading="lazy" decoding="async" />
              <h4>Varicocele-Associated Infertility</h4>
              <p>Supportive care considered alongside varicocele-related fertility concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 â€” TREATMENT HIGHLIGHTS */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What our approach aims for</h2>
            <p className="lead">Improvement is monitored through periodic semen analysis, with continued follow-up recommended depending on individual progress.</p>
          </div>
          <div className="beh-grid">
            <div className="beh-card reveal d1">
              <img className="beh-img-ph"
                src="https://static.wixstatic.com/media/66422a_1c7e9705d03a4aebb561ca1876760289~mv2.png"
                alt="Improve Sperm Count illustration"
                style={{ width: '128px', height: '112px', flex: '0 0 128px', objectFit: 'cover', borderRadius: '14px' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">01</span>
                <h4>Improve Sperm Count</h4>
                <p>Supporting the body's natural sperm production process.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <img className="beh-img-ph"
                src="https://static.wixstatic.com/media/66422a_6c823470c3984d5c9037a883a14c9ff3~mv2.png"
                alt="Enhance Sperm Motility illustration"
                style={{ width: '128px', height: '112px', flex: '0 0 128px', objectFit: 'cover', borderRadius: '14px' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">02</span>
                <h4>Enhance Sperm Motility</h4>
                <p>Aiming to improve sperm movement and function.</p>
              </div>
            </div>

            <div className="beh-card reveal d3">
              <img className="beh-img-ph"
                src="https://static.wixstatic.com/media/66422a_b2dce82abdb64341b6de25ef462877b7~mv2.png"
                alt="Support Normal Morphology illustration"
                style={{ width: '128px', height: '112px', flex: '0 0 128px', objectFit: 'cover', borderRadius: '14px' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">03</span>
                <h4>Support Normal Morphology</h4>
                <p>Working toward healthier sperm structure and shape.</p>
              </div>
            </div>

            <div className="beh-card reveal d1">
              <img className="beh-img-ph"
                src="https://static.wixstatic.com/media/66422a_33bf21d1a6334562bc5e7ab227728c03~mv2.png"
                alt="Correct Spermatogenesis illustration"
                style={{ width: '128px', height: '112px', flex: '0 0 128px', objectFit: 'cover', borderRadius: '14px' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">04</span>
                <h4>Correct Spermatogenesis</h4>
                <p>Supporting the overall sperm production process, hormone-free.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <img className="beh-img-ph"
                src="https://static.wixstatic.com/media/66422a_e55996b0d3244a569e60d4a520f841b0~mv2.png"
                alt="Address Hormonal Imbalance illustration"
                style={{ width: '150px', height: '112px', flex: '0 0 150px', objectFit: 'cover', borderRadius: '14px' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">05</span>
                <h4>Address Hormonal Imbalance</h4>
                <p>Supporting hormonal factors relevant to fertility, alongside medical advice.</p>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', maxWidth: '70ch', margin: '34px auto 0', fontSize: '.9rem', color: '#555' }}>
            <b style={{ color: 'var(--blue)' }}>Before starting:</b> avoid hormonal treatment unless advised by your treating physician, get a baseline semen analysis, and take any additional supplements or tonics only on medical advice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2 className="reveal d1">Individualised support for your fertility journey.</h2>
          <p className="reveal d1">Book a consultation or share your semen analysis reports securely. We'll assess your case carefully and build a plan suited to your specific parameters.</p>
          <div className="cta-row reveal d2">
            <Link className="btn btn-primary" href="/contactus">Book a Consultation</Link>
            <a className="btn btn-ghost" href="tel:+919898005354">Call +91 98980 05354</a>
            <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener">WhatsApp our team</a>
          </div>
        </div>
      </section>
    </>
  );
}

