import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Increase Height Naturally with Safe Homeopathy Treatment',
  description: 'Learn about short stature and height growth in children, including possible causes and supportive care with Dr. Ketan Patel, Ahmedabad.',
  keywords: 'increase height homeopathy, height growth homeopathic treatment, natural height increase India, growth deficiency homeopathy, iodine deficiency child growth',
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

  /* secondary banner (bottom) */
  .secondary-banner-sec{position:relative;width:100%;margin:0;padding:0;overflow:hidden;background:#fff}
  .secondary-banner-sec img{width:100%;height:auto;display:block}

  /* sections */
  .sec{padding:88px 0}
  .sec-head{max-width:700px;margin:0 auto 46px;text-align:center}
  .sec-head h2{font-size:clamp(1.6rem,2.8vw,2.25rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}
  .reveal{opacity:1;transform:none}
  .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}

  /* SECTION 1 — types (pillar-style white cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px 28px;padding-top:76px}
  .type-card-outer{position:relative}
  .type-char{position:absolute;top:-70px;left:50%;transform:translateX(-50%);z-index:3;width:130px;height:150px;object-fit:cover;border-radius:16px;box-shadow:0 14px 30px -14px rgba(10,31,68,.35)}
  .type-card{position:relative;background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card::before{content:"";position:absolute;top:0;left:0;right:0;height:64px;background:var(--card-accent,rgba(0,140,140,.14));border-radius:26px 26px 0 0}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .type-card.teal-card{--card-accent:rgba(0,140,140,.14)}
  .type-card.blue-card{--card-accent:rgba(10,74,110,.10)}
  .type-card.gold-card{--card-accent:rgba(139,127,209,.14)}
  .type-top{position:relative;z-index:2;padding:30px 30px 16px;text-align:center}
  .pico{width:68px;height:68px;border-radius:50%;display:grid;place-items:center;margin:0 auto 18px;background:var(--teal-10);color:var(--teal);transition:transform .4s var(--ease)}
  .pico.ico-blue{background:rgba(10,74,110,.10);color:#0a4a6e}
  .pico.ico-gold{background:rgba(139,127,209,.14);color:#8B7FD1}
  .pico svg{width:27px;height:27px}
  .type-card:hover .pico{transform:scale(1.08) rotate(-4deg)}
  .type-top h3{font-size:1.1rem;text-align:center}
  .card-underline{width:40px;height:3px;border-radius:3px;margin:12px auto 0}
  .card-underline.teal{background:var(--teal)}
  .card-underline.blue{background:#0a4a6e}
  .card-underline.gold{background:#8B7FD1}
  .type-body{flex:1;padding:12px 30px 34px;text-align:center}
  .type-body p{font-size:.88rem;color:#555;line-height:1.7}

  /* SECTION 2 — neuro conditions (dark frosted cards) */
  .neuro{background:var(--blue);color:var(--ivory)}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .eyebrow{color:var(--gold)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .neuro-card{position:relative;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:28px 22px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .neuro-card:hover{transform:translateY(-7px) scale(1.012);border-color:rgba(255,255,255,.55);box-shadow:0 22px 52px -12px rgba(10,50,120,.4)}
  .neuro-card .nico{width:100px;height:100px;border-radius:50%;background:transparent;display:grid;place-items:center;margin:0 auto 18px;object-fit:cover}
  .neuro-card h4{color:#fff;font-size:1rem;margin-bottom:8px;text-align:center}
  .neuro-underline{width:32px;height:2.5px;background:#5b9bd5;border-radius:3px;margin:0 auto 12px}
  .neuro-card p{font-size:.82rem;color:rgba(220,240,252,.85);line-height:1.6;text-align:center}

  /* SECTION 3 — behaviour / who may benefit */
  .behaviour{background:#fff;overflow:visible}
  .beh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:50px 44px;padding:0 6px}
  .beh-outer{position:relative}
  .beh-char{position:absolute;top:50%;transform:translateY(-50%);z-index:3;width:120px;height:150px;object-fit:cover;border-radius:16px;box-shadow:0 14px 30px -14px rgba(10,31,68,.35)}
  .beh-outer.left-char .beh-char{left:-36px}
  .beh-outer.right-char .beh-char{right:-36px}
  .beh-card{display:flex;flex-direction:column;gap:4px;padding:26px 24px 26px 96px;border:1px solid var(--line);border-radius:18px;background:var(--ivory);box-shadow:0 10px 24px -16px rgba(10,31,68,.18);transition:transform .3s var(--ease),box-shadow .3s var(--ease)}
  .beh-outer.right-char .beh-card{padding:26px 96px 26px 24px}
  .beh-card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(10,31,68,.25)}
  .beh-icon{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;flex:0 0 auto;color:#fff;transition:transform .35s var(--ease)}
  .beh-card:hover .beh-icon{transform:scale(1.08) rotate(-3deg)}
  .beh-icon svg{width:19px;height:19px}
  .beh-icon.teal-ico{background:var(--teal)}
  .beh-icon.gold-ico{background:#E8A33D}
  .beh-icon.purple-ico{background:#8B7FD1}
  .beh-icon.blue-ico{background:#5B8ECF}
  .beh-card h4{font-size:1rem;margin:10px 0 2px}
  .beh-card h4.txt-teal{color:var(--teal)}
  .beh-card h4.txt-gold{color:#c07d1a}
  .beh-card h4.txt-purple{color:#8B7FD1}
  .beh-card h4.txt-blue{color:#3a6fb0}
  .beh-card p{font-size:.85rem;color:#666;line-height:1.65;margin:0}
  .beh-grid .beh-outer:last-child{grid-column:1 / -1}
  .beh-grid .beh-outer:last-child .beh-char{left:-30px;width:150px;height:180px}
  .beh-grid .beh-outer:last-child .beh-card{padding-left:130px;max-width:none}

  /* sticky */
  .sticky-actions{position:fixed;right:16px;bottom:16px;z-index:80;display:flex;flex-direction:column;gap:11px}
  .fab{display:flex;align-items:center;gap:9px;padding:12px 16px 12px 13px;border-radius:999px;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.8rem;box-shadow:var(--shadow);cursor:pointer;transition:transform .3s var(--ease)}
  .fab:hover{transform:translateY(-3px) scale(1.02)}
  .fab svg{width:19px;height:19px;flex:0 0 auto}
  .fab-wa{background:#25D366;color:#06351a}
  .fab-up{background:var(--gold);color:var(--blue)}

  @media(max-width:980px){
    .type-grid{grid-template-columns:1fr;max-width:340px;margin:0 auto;padding-top:0}
    .type-grid .type-card-outer{margin-top:76px}
    .neuro-grid{grid-template-columns:repeat(2,1fr)}
    .beh-grid{grid-template-columns:1fr;max-width:420px;margin:0 auto;gap:70px}
    .beh-outer.left-char .beh-char,.beh-outer.right-char .beh-char{left:50%;right:auto;top:-56px;transform:translateX(-50%)}
    .beh-outer.left-char .beh-card,.beh-outer.right-char .beh-card{padding:34px 22px 24px}
    .beh-grid .beh-outer:last-child .beh-char{left:50%}
    .beh-grid .beh-outer:last-child .beh-card{padding-left:22px}
  }
  @media(max-width:680px){
    .neuro-grid{grid-template-columns:1fr}
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
          <HeroBannerImage src="/images/increase-height/hero-banner.png" alt="Increase Height Treatment Hero Section Banner" />
        </div>
      </section>

      {/* SECTION 1 — CAUSES OF SHORT HEIGHT */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>What can affect a child's growth</h2>
            <p className="lead">Short stature can occur due to several reasons — most often a combination of genetic, hormonal and nutritional factors.</p>
          </div>
          <div className="type-grid">
            <div className="type-card-outer reveal d1">
              <img className="type-char"
                src="/images/increase-height/cause-1.png"
                alt="Genetic and racial growth factors illustration" loading="lazy" decoding="async" />
              <div className="type-card teal-card">
                <div className="type-top">
                  <div className="pico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
                      <circle cx="12" cy="11" r="2.2" />
                    </svg>
                  </div>
                  <h3>Genetic / Racial Factors</h3>
                  <div className="card-underline teal"></div>
                </div>
                <div className="type-body">
                  <p>Family history and certain ethnic backgrounds naturally influence a child's growth pattern and eventual height.</p>
                </div>
              </div>
            </div>

            <div className="type-card-outer reveal d2">
              <img className="type-char"
                src="/images/increase-height/cause-2.png"
                alt="Hormonal growth factors illustration" loading="lazy" decoding="async" />
              <div className="type-card blue-card">
                <div className="type-top">
                  <div className="pico ico-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3.2" />
                      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                    </svg>
                  </div>
                  <h3>Hormonal Factors</h3>
                  <div className="card-underline blue"></div>
                </div>
                <div className="type-body">
                  <p>Thyroid disorders, pituitary gland disorders and growth hormone deficiency can all affect a child's growth rate.</p>
                </div>
              </div>
            </div>

            <div className="type-card-outer reveal d3">
              <img className="type-char"
                src="/images/increase-height/cause-3.png"
                alt="Nutritional growth factors illustration" loading="lazy" decoding="async" />
              <div className="type-card gold-card">
                <div className="type-top">
                  <div className="pico ico-gold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" />
                      <circle cx="12" cy="7" r="2" />
                    </svg>
                  </div>
                  <h3>Nutritional Factors</h3>
                  <div className="card-underline gold"></div>
                </div>
                <div className="type-body">
                  <p>Iodine deficiency, protein deficiency and poor overall nutritional intake can limit a child's growth potential.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT THE TREATMENT */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>An individualised, hormone-free approach</h2>
            <p className="lead">Conventional medicine offers limited options for supporting height growth, and some approaches carry side effects. Our homeopathic formula is designed to support overall health and growth without relying on hormones.</p>
          </div>
          <div className="neuro-grid">
            <div className="neuro-card reveal d1">
              <img className="nico"
                src="/images/increase-height/treat-1.png"
                alt="Individualised approach icon" loading="lazy" decoding="async" />
              <h4>Individualised Approach</h4>
              <div className="neuro-underline"></div>
              <p>The formula is tailored to the child's growth pattern, nutritional status and family height background.</p>
            </div>

            <div className="neuro-card reveal d2">
              <img className="nico"
                src="/images/increase-height/treat-2.png"
                alt="Hormone-free formula icon" loading="lazy" decoding="async" />
              <h4>Hormone-Free Formula</h4>
              <div className="neuro-underline"></div>
              <p>Designed to support growth without the use of hormonal medication.</p>
            </div>

            <div className="neuro-card reveal d3">
              <img className="nico"
                src="/images/increase-height/treat-3.png"
                alt="Easy for children to take icon" loading="lazy" decoding="async" />
              <h4>Easy for Children to Take</h4>
              <div className="neuro-underline"></div>
              <p>No special diet or exercise required, and no special laboratory tests needed to begin.</p>
            </div>

            <div className="neuro-card reveal d1">
              <img className="nico"
                src="/images/increase-height/treat-4.png"
                alt="Supports overall health icon" loading="lazy" decoding="async" />
              <h4>Supports Overall Health</h4>
              <div className="neuro-underline"></div>
              <p>Intended to support general health and immunity alongside the child's natural growth process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHO MAY BENEFIT / TREATMENT HIGHLIGHTS */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Who may benefit</h2>
            <p className="lead">The approach is designed primarily for children between 8 and 16 years of age, considering the child's nutritional status and parental height, for long-term use under medical supervision.</p>
          </div>
          <div className="beh-grid">
            <div className="beh-outer left-char reveal d1">
              <img className="beh-char"
                src="/images/increase-height/ben-1.png"
                alt="Supports healthy growth illustration" loading="lazy" decoding="async" />
              <div className="beh-card">
                <div className="beh-icon teal-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M6 11l6-6 6 6" />
                  </svg>
                </div>
                <h4 className="txt-teal">Supports Healthy Growth</h4>
                <div className="card-underline teal"></div>
                <p>Designed to work with the child's natural growth process during developing years.</p>
              </div>
            </div>

            <div className="beh-outer right-char reveal d2">
              <img className="beh-char"
                src="/images/increase-height/ben-2.png"
                alt="Easy to consume for children illustration" loading="lazy" decoding="async" />
              <div className="beh-card">
                <div className="beh-icon gold-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z" />
                  </svg>
                </div>
                <h4 className="txt-gold">Easy to Consume for Children</h4>
                <div className="card-underline gold" style={{ background: '#E8A33D' }}></div>
                <p>A simple, child-friendly formula with no hormonal medication involved.</p>
              </div>
            </div>

            <div className="beh-outer left-char reveal d3">
              <img className="beh-char"
                src="/images/increase-height/ben-3.png"
                alt="May help improve immunity illustration" loading="lazy" decoding="async" />
              <div className="beh-card">
                <div className="beh-icon purple-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a6 6 0 1 0 4.5 9.8A8 8 0 1 1 17 3Z" />
                  </svg>
                </div>
                <h4 className="txt-purple">May Help Improve Immunity</h4>
                <div className="card-underline gold"></div>
                <p>Formulated to support overall immunity alongside growth-focused care.</p>
              </div>
            </div>

            <div className="beh-outer right-char reveal d1">
              <img className="beh-char"
                src="/images/increase-height/ben-4.png"
                alt="Helps reduce recurrent infections illustration" loading="lazy" decoding="async" />
              <div className="beh-card">
                <div className="beh-icon blue-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
                    <circle cx="12" cy="11" r="2.2" />
                  </svg>
                </div>
                <h4 className="txt-blue">Helps Reduce Recurrent Infections</h4>
                <div className="card-underline blue" style={{ background: '#5B8ECF' }}></div>
                <p>Plant-based homeopathic medicines support overall health and development.</p>
              </div>
            </div>

            <div className="beh-outer left-char reveal d2">
              <img className="beh-char"
                src="/images/increase-height/ben-5.png"
                alt="Long-term supervised use illustration" loading="lazy" decoding="async" />
              <div className="beh-card">
                <div className="beh-icon teal-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7" />
                    <circle cx="12" cy="7" r="2" />
                  </svg>
                </div>
                <h4 className="txt-teal">Long-Term, Supervised Use</h4>
                <div className="card-underline teal"></div>
                <p>Designed for consistent, long-term use under regular medical guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY BANNER (BOTTOM) */}
      <section className="secondary-banner-sec" id="bottom-banner">
        <div className="hero-banner-full">
          <img src="/images/increase-height/banner-2.png"
            alt="Increase Height Care and Support Banner"
            style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" decoding="async" />
        </div>
      </section>
    </>
  );
}
