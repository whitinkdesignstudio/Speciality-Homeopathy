import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Prolapsed Vertebral Disc & Chronic Backache Homeopathy Treatment',
  description: 'Learn about PIVD, including causes and symptoms, with supportive homeopathic care alongside appropriate medical guidance. Dr. Ketan Patel, Ahmedabad.',
  keywords: 'prolapsed disc homeopathy, slipped disc homeopathic treatment, spinal disc injury homeopathy, nucleus pulposus homeopathy, back pain disc treatment India',
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

  /* SECTION 1 — types (photo-top pillar cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;counter-reset:p}
  .type-card{position:relative;background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;text-align:center;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .type-photo{width:100%;aspect-ratio:3/2}
  .type-icon-wrap{margin-top:-34px;position:relative;z-index:2;display:flex;justify-content:center}
  .pico{width:68px;height:68px;border-radius:50%;display:grid;place-items:center;background:var(--teal-10);color:var(--teal);border:4px solid #fff;box-shadow:0 8px 20px -8px rgba(20,50,90,.35);transition:transform .4s var(--ease)}
  .pico svg{width:27px;height:27px}
  .type-card:hover .pico{transform:scale(1.08) rotate(-4deg)}
  .type-card .num{counter-increment:p;display:block;margin:14px 0 4px;font-weight:700;font-size:.78rem;letter-spacing:.12em;color:var(--teal)}
  .type-card .num::before{content:"0" counter(p)}
  .type-top{padding:0 30px 18px;text-align:center}
  .type-top h3{font-size:1.1rem;text-align:center}
  .type-body{flex:1;padding:0 30px 34px}
  .type-body p{font-size:.88rem;color:#555;line-height:1.7}

  /* SECTION 2 — neuro conditions (dark frosted cards) */
  .neuro{background:var(--blue);color:var(--ivory)}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .eyebrow{color:var(--gold)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .neuro-card{position:relative;display:flex;align-items:flex-start;gap:18px;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:26px 22px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .neuro-card:hover{transform:translateY(-7px) scale(1.012);border-color:rgba(255,255,255,.55);box-shadow:0 22px 52px -12px rgba(10,50,120,.4)}
  .neuro-card .nico{width:112px;height:112px;border-radius:50%;flex:0 0 auto}
  .neuro-content{flex:1;min-width:0}
  .neuro-badge{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:9px;background:rgba(255,255,255,.12);color:var(--gold);font-family:'Open Sans',sans-serif;font-weight:700;font-size:.76rem;margin-bottom:14px}
  .neuro-card h4{color:#fff;font-size:1rem;margin-bottom:8px}
  .neuro-card p{font-size:.82rem;color:rgba(220,240,252,.85);line-height:1.6}

  /* SECTION 3 — behaviour (icon list cards) */
  .behaviour{background:#fff}
  .beh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  .beh-card{display:flex;align-items:center;gap:20px;padding:20px;border:1px solid var(--line);border-radius:16px;background:var(--ivory);box-shadow:0 10px 24px -16px rgba(10,31,68,.18);transition:transform .3s var(--ease),box-shadow .3s var(--ease)}
  .beh-card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(10,31,68,.25)}
  .beh-photo{width:112px;height:112px;border-radius:50%;flex:0 0 auto;transition:transform .35s var(--ease)}
  .beh-card:hover .beh-photo{transform:scale(1.05)}
  .beh-num{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:var(--teal-10);color:var(--teal);font-family:'Open Sans',sans-serif;font-weight:700;font-size:.82rem;margin-bottom:10px}
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
          <HeroBannerImage src="/images/prolapsed-vertebral-disc/hero-banner.png" alt="Prolapsed Vertebral Disc (PIVD) Treatment Hero Section Banner" />
        </div>
      </section>

      {/* SECTION 1 — CAUSES */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What can lead to a disc prolapse</h2>
            <p className="lead">A prolapsed disc commonly develops due to ligament injury or trauma, with degenerative changes often playing a contributing role.</p>
          </div>
          <div className="type-grid">
            <div className="type-card reveal d1">
              <img className="type-photo"
                src="https://static.wixstatic.com/media/66422a_c129c20b79b54d5fb897fc386d0c290e~mv2.png"
                alt="Ligament injury and trauma illustration"
                style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="type-top">
                <div className="type-icon-wrap">
                  <div className="pico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" />
                      <circle cx="12" cy="7" r="2" />
                    </svg>
                  </div>
                </div>
                <div className="num"></div>
                <h3>Ligament Injury &amp; Trauma</h3>
              </div>
              <div className="type-body">
                <p>Injury or trauma to the spine can damage supporting ligaments, contributing to disc prolapse.</p>
              </div>
            </div>

            <div className="type-card reveal d2">
              <img className="type-photo"
                src="https://static.wixstatic.com/media/66422a_5bc6ee99c3d64ee886dd904acae3b1f1~mv2.png"
                alt="Disc and nerve root pressure illustration"
                style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="type-top">
                <div className="type-icon-wrap">
                  <div className="pico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3.2" />
                      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                    </svg>
                  </div>
                </div>
                <div className="num"></div>
                <h3>Disc &amp; Nerve Root Pressure</h3>
              </div>
              <div className="type-body">
                <p>Damage to the intervertebral disc can put pressure on nearby spinal nerve roots, causing pain.</p>
              </div>
            </div>

            <div className="type-card reveal d3">
              <img className="type-photo"
                src="https://static.wixstatic.com/media/66422a_27c96ce16a774efe94b73a1457ff29d2~mv2.jpeg"
                alt="Degenerative spinal changes illustration"
                style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="type-top">
                <div className="type-icon-wrap">
                  <div className="pico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
                    </svg>
                  </div>
                </div>
                <div className="num"></div>
                <h3>Degenerative Spinal Changes</h3>
              </div>
              <div className="type-body">
                <p>Gradual wear-related changes in the spine over time can increase the likelihood of disc prolapse.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TREATMENT HIGHLIGHTS */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What our supportive approach aims for</h2>
            <p className="lead">Homeopathic treatment aims to reduce pressure on affected nerves while supporting the ligaments and spinal structures — selected according to the patient's symptoms and overall condition.</p>
          </div>
          <div className="neuro-grid">
            <div className="neuro-card reveal d1">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_c4c18bd892bf46a4a5bda0543d071e91~mv2.png"
                alt="Help relieve nerve compression icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <div className="neuro-badge">01</div>
                <h4>Help Relieve Nerve Compression</h4>
                <p>Aiming to ease pressure on affected nerve roots.</p>
              </div>
            </div>

            <div className="neuro-card reveal d2">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_2617946a26a042d183933b40e53e7c5e~mv2.png"
                alt="Reduce radiating pain icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <div className="neuro-badge">02</div>
                <h4>Reduce Radiating Pain</h4>
                <p>Supporting reduction of pain that travels along the affected nerve pathway.</p>
              </div>
            </div>

            <div className="neuro-card reveal d3">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_7ca472942c3d4f1daecdc0adab780db8~mv2.png"
                alt="Support spinal ligament health icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <div className="neuro-badge">03</div>
                <h4>Support Spinal Ligament Health</h4>
                <p>Working toward stronger, healthier supporting ligaments around the spine.</p>
              </div>
            </div>

            <div className="neuro-card reveal d1">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_295416b1fc024f689a2d18fe1d0a49b3~mv2.png"
                alt="Improve spinal stability icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <div className="neuro-badge">04</div>
                <h4>Improve Spinal Stability</h4>
                <p>Aiming to support overall stability and function of the spine.</p>
              </div>
            </div>

            <div className="neuro-card reveal d2">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_7e0786ad6dd340508978dd8313c1b6b9~mv2.png"
                alt="Promote gradual recovery icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <div className="neuro-badge">05</div>
                <h4>Promote Gradual Recovery</h4>
                <p>Supporting the body's own healing process at a sustainable pace.</p>
              </div>
            </div>

            <div className="neuro-card reveal d3">
              <img className="nico"
                src="https://static.wixstatic.com/media/66422a_8a0b3fce2b6c412b8d7697358352c067~mv2.png"
                alt="Non-surgical approach icon"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div className="neuro-content">
                <div className="neuro-badge">06</div>
                <h4>Non-Surgical Approach</h4>
                <p>An option to consider alongside standard medical care, depending on severity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMMON SYMPTOMS */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Signs of a prolapsed disc</h2>
            <p className="lead">Symptoms vary depending on which disc is affected and the degree of nerve involvement.</p>
          </div>
          <div className="beh-grid">
            <div className="beh-card reveal d1">
              <img className="beh-photo"
                src="https://static.wixstatic.com/media/66422a_0aae3950346145f3ba0a45ad9f2906ac~mv2.png"
                alt="Radiating back pain illustration"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">01</span>
                <h4>Radiating Back Pain</h4>
                <p>Pain that travels from the spine along the path of the affected nerve.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <img className="beh-photo"
                src="https://static.wixstatic.com/media/66422a_241059592ff44ffbbfcd2ea5292017dc~mv2.png"
                alt="Neck or lower back pain illustration"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">02</span>
                <h4>Neck or Lower Back Pain</h4>
                <p>Localised discomfort in the neck or lower back region.</p>
              </div>
            </div>

            <div className="beh-card reveal d3">
              <img className="beh-photo"
                src="https://static.wixstatic.com/media/66422a_37955942673040e68b2f3bab206d0e4c~mv2.png"
                alt="Pain during movement illustration"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">03</span>
                <h4>Pain During Movement</h4>
                <p>Discomfort that increases with certain movements or positions.</p>
              </div>
            </div>

            <div className="beh-card reveal d1">
              <img className="beh-photo"
                src="https://static.wixstatic.com/media/66422a_c4baaf88cbfa435b811fd3cb68c9b052~mv2.png"
                alt="Reduced mobility illustration"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">04</span>
                <h4>Reduced Mobility</h4>
                <p>Difficulty moving freely due to pain or stiffness.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <img className="beh-photo"
                src="https://static.wixstatic.com/media/66422a_03233425045340b9891e6f7f5bacc732~mv2.png"
                alt="Tingling or numbness illustration"
                style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              <div>
                <span className="beh-num">05</span>
                <h4>Tingling or Numbness</h4>
                <p>A pins-and-needles sensation or numbness in the affected area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2 className="reveal d1">Relief that supports your spine's natural recovery.</h2>
          <p className="reveal d1">Book a consultation or share your reports securely. We'll assess your condition carefully and discuss a plan suited to your severity and needs.</p>
          <div className="cta-row reveal d2">
            <Link className="btn btn-primary" href="/contact">Book a Consultation</Link>
            <a className="btn btn-ghost" href="tel:+919898005354">Call +91 98980 05354</a>
            <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener">WhatsApp our team</a>
          </div>
        </div>
      </section>
    </>
  );
}
