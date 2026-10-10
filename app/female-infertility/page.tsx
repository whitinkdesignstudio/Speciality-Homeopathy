import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Female Infertility & PCOS Treatment with Homeopathy',
  description: "Learn about female infertility, PCOS, PCOD and common causes, with supportive homeopathic care alongside your gynecologist or fertility specialist.",
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

  /* page hero â€” 100% full-width banner */
  .page-hero{position:relative;width:100%;margin:0;padding:0;overflow:hidden;background:#eef6fc}
  .hero-banner-full{width:100%;margin:0;padding:0}
  .hero-banner-full img{width:100%;height:auto;display:block}
  .secondary-banner-sec{position:relative;width:100%;margin:0;padding:0;overflow:hidden;background:#fff}
  .secondary-banner-sec img{width:100%;height:auto;display:block}

  .sec{padding:82px 0}
  .sec-head{max-width:700px;margin:0 auto 40px;text-align:center}
  .sec-head.left{text-align:left;margin:0 0 34px;max-width:760px}
  .sec-head h2{font-size:clamp(1.5rem,2.6vw,2.1rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}
  .sec-head.left .lead{margin:0}
  .reveal{opacity:1;transform:none}
  .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}

  .tint{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}

  /* glance / dark facts strip */
  .glance{background:var(--blue);color:var(--ivory)}
  .glance .sec-head h2{color:var(--ivory)}
  .glance .eyebrow{color:var(--gold)}
  .glance .lead{color:rgba(250,248,244,.8)}
  .glance-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .glance-card{position:relative;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:18px;padding:26px 22px 30px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s;overflow:hidden;min-height:190px}
  .glance-card:hover{transform:translateY(-6px) scale(1.012);border-color:rgba(255,255,255,.55)}
  .glance-card .nico{width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,.14);display:grid;place-items:center;margin-bottom:16px;color:#BAE0F3;position:relative;z-index:1}
  .glance-card .nico svg{width:22px;height:22px}
  .glance-card h4{color:#fff;font-size:.98rem;margin-bottom:8px;position:relative;z-index:1}
  .glance-card p{font-size:.8rem;color:rgba(220,240,252,.85);line-height:1.55;position:relative;z-index:1}
  .glance-card .wico{position:absolute;right:8px;bottom:2px;width:78px;height:78px;opacity:.10;color:#fff;pointer-events:none}
  .glance-card .wico svg{width:100%;height:100%}

  /* pill list (light rounded background items) */
  .pill-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px 16px}
  .pill-item{display:flex;align-items:center;gap:10px;background:var(--teal-10);border-radius:12px;padding:14px 16px;font-size:.87rem;color:#333;font-weight:500}
  .pill-item .dot{width:7px;height:7px;border-radius:50%;background:var(--teal);flex:0 0 auto}
  @media(max-width:680px){.pill-grid{grid-template-columns:1fr}}

  /* highlight strip (icon + label row) */
  .highlight-strip{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap}
  .highlight-item{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;flex:1 1 140px;min-width:120px;padding:6px 8px}
  .highlight-item .hico{width:46px;height:46px;border-radius:50%;background:var(--teal-10);color:var(--teal);display:grid;place-items:center}
  .highlight-item .hico svg{width:21px;height:21px}
  .highlight-item span{font-size:.82rem;font-weight:600;color:var(--blue);line-height:1.4}
  @media(max-width:680px){.highlight-strip{justify-content:center}}

  /* full-bleed banner grid */
  .mf-grid{display:grid;grid-template-columns:1fr minmax(280px,37%);align-items:stretch}
  .mf-content{display:flex;flex-direction:column;justify-content:center;padding:58px 34px 58px max(26px,calc((100vw - var(--maxw))/2))}
  .mf-photo{width:100%;min-height:100%;border-radius:0}
  @media(max-width:880px){
    .mf-grid{grid-template-columns:1fr}
    .mf-content{padding:40px 26px}
    .mf-photo{aspect-ratio:16/9;border-radius:0}
  }

  /* full-bleed left photo (treatment notes) */
  .tn-grid{display:grid;grid-template-columns:minmax(240px,27%) 1fr;align-items:start}
  .tn-content{padding:58px max(26px,calc((100vw - var(--maxw))/2)) 58px 34px}
  .tn-photo{width:100%;aspect-ratio:4/5;border-radius:0;position:sticky;top:100px}
  @media(max-width:880px){
    .tn-grid{grid-template-columns:1fr}
    .tn-content{padding:40px 26px}
    .tn-photo{aspect-ratio:16/9;border-radius:0;position:static}
  }

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

  /* mini card grid */
  .mini-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
  .mini-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px 20px;box-shadow:var(--shadow-sm);transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
  .mini-card:hover{transform:translateY(-5px);box-shadow:0 18px 34px -18px rgba(20,50,90,.25)}
  .mini-card .mico{width:38px;height:38px;border-radius:50%;background:var(--teal-10);color:var(--teal);display:grid;place-items:center;margin-bottom:12px}
  .mini-card .mico svg{width:18px;height:18px}
  .mini-card h5{font-size:.9rem;margin-bottom:6px}
  .mini-card p{font-size:.8rem;color:#666;line-height:1.6}

  /* callouts */
  .callout{background:var(--teal-10);border-left:4px solid var(--teal);border-radius:12px;padding:22px 26px;font-size:.9rem;color:#333;line-height:1.75}
  .callout.warn{background:rgba(200,169,107,.14);border-left-color:var(--gold)}
  .callout h4{color:var(--blue);margin-bottom:8px;font-size:1rem}

  .block-gap{margin-bottom:38px}
  .block-gap:last-child{margin-bottom:0}

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

  /* sticky */
  .sticky-actions{position:fixed;right:16px;bottom:16px;z-index:80;display:flex;flex-direction:column;gap:11px}
  .fab{display:flex;align-items:center;gap:9px;padding:12px 16px 12px 13px;border-radius:999px;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.8rem;box-shadow:var(--shadow);cursor:pointer;transition:transform .3s var(--ease)}
  .fab:hover{transform:translateY(-3px) scale(1.02)}
  .fab svg{width:19px;height:19px;flex:0 0 auto}
  .fab-wa{background:#25D366;color:#06351a}
  .fab-up{background:var(--gold);color:var(--blue)}

  /* image placeholders */
  .img-ph{position:relative;border-radius:22px;overflow:hidden;flex:0 0 auto}

  /* banner-style two column */
  .banner-split{display:grid;grid-template-columns:1.05fr .95fr;gap:38px;align-items:center}
  .banner-split .img-ph{aspect-ratio:4/4.2;width:100%;border-radius:26px}

  /* glance dark banner image */
  .glance-banner{display:grid;grid-template-columns:1.15fr .85fr;gap:40px;align-items:center;margin-bottom:40px}
  .glance-banner .img-ph{aspect-ratio:5/4;width:100%;border-radius:24px}

  /* approach mini photo inside callout card */
  .approach-card{position:relative;border-radius:20px;padding:26px 26px;display:flex;gap:20px;align-items:stretch;min-height:260px}
  .approach-card .num{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.55);display:grid;place-items:center;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.9rem;color:var(--blue);flex:0 0 auto}
  .approach-card .approach-text{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;justify-content:center}
  .approach-card .approach-text h4{font-size:1rem;margin-bottom:8px}
  .approach-card .approach-text p{font-size:.86rem;color:#444;line-height:1.7}
  .approach-card .img-ph{width:220px;min-width:220px;border-radius:16px;flex:0 0 auto;align-self:stretch}
  .approach-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
  .approach-card.blue{background:rgba(186,224,243,.35)}
  .approach-card.gold{background:rgba(200,169,107,.14)}

  @media(max-width:980px){
    .glance-grid{grid-template-columns:repeat(2,1fr)}
    .mini-grid{grid-template-columns:repeat(2,1fr)}
    .check-grid{grid-template-columns:1fr}
  }
  @media(max-width:880px){
    .banner-split{grid-template-columns:1fr}
    .glance-banner{grid-template-columns:1fr}
    .approach-grid{grid-template-columns:1fr}
  }
  @media(max-width:680px){
    .glance-grid{grid-template-columns:1fr}
    .mini-grid{grid-template-columns:1fr}
    .sec{padding:56px 0}
    .page-hero{padding:0}
    .list-card{padding:22px 20px}
    .fab span{display:none}.fab{padding:13px;border-radius:50%}
  }
  @media(max-width:560px){
    .approach-card{flex-wrap:wrap;min-height:0}
    .approach-card .img-ph{width:100%;min-width:0;aspect-ratio:16/9;align-self:auto}
  }
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO â€” 100% full-width banner */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <HeroBannerImage src="/images/female-infertility/hero-banner.png" alt="Female Infertility Treatment Hero Section Banner" />
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="sec glance">
        <div className="wrap">
          <div className="glance-banner">
            <div className="sec-head left reveal" style={{ margin: 0 }}>
              <h2>What we look at, together</h2>
              <p className="lead" style={{ marginTop: '12px' }}>We assess the key factors that impact fertility to create a clear path forward.</p>
            </div>
            <img className="img-ph on-dark reveal d1"
              src="https://static.wixstatic.com/media/66422a_b524b6941ea14f509d3b196a4a0396d0~mv2.png"
              alt="Fertility assessment overview"
              style={{ width: '100%', aspectRatio: '5/4', borderRadius: '24px', objectFit: 'cover' }} loading="lazy" decoding="async" />
          </div>
          <div className="glance-grid">
            <div className="glance-card reveal d1">
              <div className="nico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2M9 3.5 12 6l3-2.5" />
                </svg>
              </div>
              <h4>Ovulation Disorders</h4>
              <p>Hormonal imbalance affecting regular ovulation.</p>
            </div>

            <div className="glance-card reveal d2">
              <div className="nico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 4a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5Z" />
                  <circle cx="17" cy="9" r="1.6" />
                </svg>
              </div>
              <h4>PCOS / PCOD</h4>
              <p>Among the most common contributing conditions.</p>
            </div>

            <div className="glance-card reveal d3">
              <div className="nico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h4>Hormone-Free Approach</h4>
              <p>Homeopathic care without added hormones.</p>
            </div>

            <div className="glance-card reveal d1">
              <div className="nico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Both Partners</h4>
              <p>Male fertility is evaluated alongside, when relevant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CONTRIBUTES TO FEMALE INFERTILITY */}
      <section className="sec">
        <div className="wrap">
          <div className="banner-split block-gap">
            <div className="sec-head left reveal" style={{ margin: 0 }}>
              <h2>What can contribute to female infertility?</h2>
              <p className="lead" style={{ marginTop: '12px' }}>
                Female infertility can occur due to a variety of reproductive, hormonal, nutritional or anatomical factors. Treatment focuses on identifying and managing common contributing factors while supporting overall reproductive health.
              </p>
            </div>
            <img className="img-ph reveal d1"
              src="https://static.wixstatic.com/media/66422a_a08a37697cd942958bc9e44d5e1b03db~mv2.png"
              alt="Contributing factors to female infertility"
              style={{ aspectRatio: '1/1', width: '100%', borderRadius: '26px', objectFit: 'cover' }} loading="lazy" decoding="async" />
          </div>
          <div className="list-card reveal d1">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--teal-10)', color: 'var(--teal)', display: 'inline-grid', placeItems: 'center', flex: '0 0 auto' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-4 8-8 11Z" />
                </svg>
              </span>
              Common Causes of Female Infertility
            </h4>
            <div className="pill-grid">
              <div className="pill-item"><span className="dot"></span>Ovulation disorders &amp; hormonal imbalance</div>
              <div className="pill-item"><span className="dot"></span>Blocked or damaged fallopian tubes</div>
              <div className="pill-item"><span className="dot"></span>Recurrent miscarriage-related factors</div>
              <div className="pill-item"><span className="dot"></span>Nutritional deficiencies</div>
              <div className="pill-item"><span className="dot"></span>Endometriosis</div>
              <div className="pill-item"><span className="dot"></span>Reproductive tract infections</div>
              <div className="pill-item"><span className="dot"></span>PCOS / PCOD</div>
              <div className="pill-item"><span className="dot"></span>Other gynecological conditions affecting fertility</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE LOOK AT BOTH PARTNERS */}
      <section className="sec tint" style={{ padding: 0 }}>
        <div className="mf-grid">
          <div className="mf-content">
            <div className="sec-head left reveal" style={{ margin: '0 0 20px', maxWidth: '600px' }}>
              <h2>Why we look at both partners</h2>
              <p className="lead" style={{ marginTop: '12px' }}>
                Fertility is a shared journey. By evaluating both partners together, we address the real contributing factors and create a treatment plan that's right for you.
              </p>
            </div>
            <div className="mini-grid" style={{ maxWidth: '820px' }}>
              <div className="mini-card reveal d1">
                <div className="mico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h5>Oligospermia</h5>
                <p>Low sperm count â€” <Link href="/treatments/oligospermia" style={{ color: 'var(--teal)', textDecoration: 'underline' }}>read more</Link>.</p>
              </div>

              <div className="mini-card reveal d2">
                <div className="mico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
                  </svg>
                </div>
                <h5>Poor Sperm Motility</h5>
                <p>Oligoasthenospermia affecting conception.</p>
              </div>

              <div className="mini-card reveal d3">
                <div className="mico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 3a6.5 6.5 0 1 0 5 10.7L19 18l1-1-4.3-4.5A6.5 6.5 0 0 0 9.5 3Z" />
                  </svg>
                </div>
                <h5>Blockage</h5>
                <p>Affecting sperm transport.</p>
              </div>
            </div>
          </div>
          <img className="img-ph mf-photo reveal d1"
            src="https://static.wixstatic.com/media/66422a_ec954819796b4e9c94a05f6b45f37d5a~mv2.png"
            alt="Male and female fertility factors"
            style={{ width: '100%', height: '100%', minHeight: '100%', borderRadius: '28px', objectFit: 'cover' }} loading="lazy" decoding="async" />
        </div>
        <div className="wrap" style={{ paddingTop: '34px', paddingBottom: '82px' }}>
          <div className="list-card reveal d1">
            <h4>Treatment Highlights</h4>
            <div className="highlight-strip">
              <div className="highlight-item">
                <div className="hico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-4 8-8 11Z" />
                  </svg>
                </div>
                <span>Support healthy ovulation</span>
              </div>
              <div className="highlight-item">
                <div className="hico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M12 15v6M9 18h6" />
                  </svg>
                </div>
                <span>Support women with PCOS / PCOD</span>
              </div>
              <div className="highlight-item">
                <div className="hico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
                    <path d="M12 9v4M12 16h.01" />
                  </svg>
                </div>
                <span>Address infection-related fertility concerns</span>
              </div>
              <div className="highlight-item">
                <div className="hico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c6-2 9-6 9-11V5l-9-3-9 3v5c0 5 3 9 9 11Z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span>Hormone-free treatment approach</span>
              </div>
              <div className="highlight-item">
                <div className="hico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v18M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0-3 6a3 3 0 0 0 6 0l-3-6ZM5 7h14M8 21h8" />
                  </svg>
                </div>
                <span>Support couples with both male &amp; female factors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS & CONDITIONS COVERED */}
      <section className="sec" style={{ padding: 0 }}>
        <div className="tn-grid">
          <img className="img-ph tn-photo reveal"
            src="https://static.wixstatic.com/media/66422a_4b83d110b0c44fc598ad8a3049ea1e12~mv2.png"
            alt="Female infertility diagnosis and risk factors"
            style={{ width: '100%', aspectRatio: '4/5', borderRadius: '22px', objectFit: 'cover' }} loading="lazy" decoding="async" />
          <div className="tn-content">
            <div className="sec-head left reveal" style={{ margin: '0 0 26px' }}>
              <h2>What the clinic states, and what's covered</h2>
            </div>
            <div className="list-card reveal d1 block-gap">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--teal-10)', color: 'var(--teal)', display: 'inline-grid', placeItems: 'center', flex: '0 0 auto' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-4 8-8 11Z" />
                  </svg>
                </span>
                Female Infertility Treatment
              </h4>
              <div className="check-grid">
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>May help women with ovulation-related infertility</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>May support fertility in selected recurrent-miscarriage cases</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Management is individualised to the patient's condition</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Regular gynecological evaluation is recommended throughout</div>
              </div>
            </div>

            <div className="list-card reveal d2">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--teal-10)', color: 'var(--teal)', display: 'inline-grid', placeItems: 'center', flex: '0 0 auto' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3c0 3-2 4-2 8a6 6 0 0 0 12 0c0-4-2-5-2-8" />
                    <path d="M12 17v4M9 21h6" />
                  </svg>
                </span>
                Conditions Covered
              </h4>
              <div className="check-grid">
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Female infertility</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>PCOS &amp; PCOD</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Ovulation disorders</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Hormonal imbalance</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Endometriosis</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Blocked fallopian tubes</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Recurrent pregnancy loss</div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>Reproductive tract infections</div>
              </div>
            </div>

            <div className="callout reveal d3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', background: '#fff', marginTop: '32px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--teal-10)', color: 'var(--teal)', display: 'inline-grid', placeItems: 'center', flex: '0 0 auto' }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-4 8-8 11Z" />
                  </svg>
                </span>
                <span>We understand the emotional journey. <strong style={{ color: 'var(--teal)' }}>We're here to support you with care, compassion and expertise.</strong></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEOPATHIC APPROACH */}
      <section className="sec tint">
        <div className="wrap" style={{ maxWidth: '1000px' }}>
          <div className="sec-head reveal">
            <h2>Individualised, hormone-free support</h2>
            <p className="lead" style={{ margin: '12px auto 0' }}>Care tailored to you. Focused on the real causes.</p>
          </div>
          <div className="approach-grid block-gap">
            <div className="approach-card blue reveal d1">
              <div className="num">01</div>
              <div className="approach-text">
                <h4>Addressing contributing factors, not just symptoms</h4>
                <p>We focus on finding and addressing the root causes that affect fertility.</p>
              </div>
              <img className="img-ph"
                src="https://static.wixstatic.com/media/66422a_67550eba7f75456499dc173cc39ba562~mv2.png"
                alt="Addressing contributing factors illustration"
                style={{ width: '220px', minWidth: '220px', borderRadius: '16px', objectFit: 'cover', flex: '0 0 auto', alignSelf: 'stretch' }} loading="lazy" decoding="async" />
            </div>
            <div className="approach-card gold reveal d2">
              <div className="num">02</div>
              <div className="approach-text">
                <h4>Important</h4>
                <p>Our care is built on high-quality medical evidence and delivered alongside specialist gynaecological or fertility support.</p>
              </div>
              <img className="img-ph"
                src="https://static.wixstatic.com/media/66422a_e4a86e1cd78247eebf5da0208be747fc~mv2.png"
                alt="Medical evidence-based care illustration"
                style={{ width: '220px', minWidth: '220px', borderRadius: '16px', objectFit: 'cover', flex: '0 0 auto', alignSelf: 'stretch' }} loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="callout reveal d3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', background: '#fff', borderLeftColor: 'var(--teal)' }}>
            <span><strong style={{ color: 'var(--blue)' }}>You're not alone.</strong> We're here to support you with care that's personal and compassionate.</span>
            <Link className="btn btn-primary" href="/contact">Book a Consultation</Link>
          </div>
          <p className="prose reveal d3" style={{ marginTop: '20px', fontSize: '.82rem', color: '#666' }}>
            Success rate and treatment-effectiveness claims referenced on this page are the clinic's own and are not established by high-quality scientific evidence. Female infertility needs proper evaluation with a gynecologist or fertility specialist â€” homeopathic support is offered alongside, never as a replacement for, that care.
          </p>
        </div>
      </section>

      {/* SECONDARY BANNER (BOTTOM) */}
      <section className="secondary-banner-sec" id="bottom-banner">
        <div className="hero-banner-full">
          <img src="/images/female-infertility/banner-2.png"
            alt="Female Infertility Care and Support Banner" loading="lazy" decoding="async" />
        </div>
      </section>
    </>
  );
}

