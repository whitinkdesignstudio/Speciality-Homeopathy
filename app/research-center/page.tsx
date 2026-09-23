import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: "Research Center | Speciality Homeopathy — Dr. Ketan Patel",
  description: "Syndromic Autism Spectrum Disorder and Rare Genetic Neurology Research Clinic. Explore our research, cured cases, and clinical findings at Speciality Homeopathy, Ahmedabad.",
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
  h1,h2,h3,h4,h5{font-family:'Poppins',sans-serif;color:var(--blue);font-weight:600;line-height:1.16;letter-spacing:-.01em}
  a{color:inherit;text-decoration:none}
  img{max-width:100%;display:block}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 26px}
  .eyebrow{font-family:'Open Sans',sans-serif;font-weight:600;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal)}
  .lead{font-size:1.02rem;color:#555;max-width:60ch}
  .sec{padding:88px 0}
  .sec-head{margin-bottom:48px}
  .sec-head h2{font-size:clamp(1.7rem,2.8vw,2.3rem);margin:10px 0 14px}

  /* reveal */
  .reveal{opacity:1;transform:none;transition:opacity .7s var(--ease),transform .7s var(--ease)}
  .d1{transition-delay:.08s}.d2{transition-delay:.18s}.d3{transition-delay:.28s}.d4{transition-delay:.38s}

  /* buttons */
  .btn{display:inline-flex;align-items:center;gap:.5rem;font-family:'Open Sans',sans-serif;font-weight:600;font-size:.82rem;padding:.78rem 1.4rem;border-radius:999px;cursor:pointer;border:1px solid transparent;transition:transform .35s var(--ease),box-shadow .35s,background .3s,color .3s}
  .btn-primary{background:linear-gradient(135deg,#0096c7,#0a4a6e);color:#fff;box-shadow:0 8px 22px -10px rgba(0,100,180,.55)}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(0,100,180,.7)}
  .btn-ghost{background:rgba(255,255,255,.35);color:var(--blue);border-color:rgba(10,31,68,.3);backdrop-filter:blur(6px)}
  .btn-ghost:hover{background:rgba(255,255,255,.55);transform:translateY(-2px)}
  .btn-dark{background:var(--blue);color:var(--ivory)}
  .btn-dark:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm)}

  /* ─── HERO / PAGE HEADER ─── */
  .page-hero{
    padding:64px 0 56px;
    background:radial-gradient(120% 120% at 80% 0%,#c8e8f8 0%,#BAE0F3 48%,#9ed0eb 100%);
    position:relative;overflow:hidden;
  }
  .page-hero::after{
    content:"";position:absolute;inset:0;
    background:radial-gradient(70% 55% at 76% 50%,rgba(255,255,255,.22),rgba(186,224,243,.15) 100%);
    pointer-events:none;
  }
  .page-hero::before{
    content:"";position:absolute;width:420px;height:420px;border-radius:50%;
    background:radial-gradient(circle,rgba(0,140,140,.13),transparent 70%);
    top:-80px;right:-80px;pointer-events:none;
  }
  .page-hero .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:48px}
  .hero-text{display:flex;flex-direction:column;align-items:flex-start}
  .breadcrumb{display:flex;align-items:center;gap:8px;font-size:.76rem;color:rgba(10,31,68,.65);margin-bottom:24px}
  .breadcrumb a{color:var(--teal);font-weight:600}
  .breadcrumb svg{width:12px;height:12px;opacity:.5}
  .page-hero h1{font-size:clamp(1.9rem,3.8vw,3rem);color:var(--blue);margin:12px 0 16px;max-width:18ch}
  .page-hero h1 em{font-style:italic;color:#0a4a6e}
  .hero-lead{font-size:1.05rem;color:rgba(10,31,68,.78);max-width:54ch;margin-bottom:28px}
  .hero-badge{display:inline-flex;align-items:center;gap:.55rem;font-size:.78rem;color:rgba(10,31,68,.88);background:rgba(255,255,255,.5);border:1px solid rgba(10,31,68,.18);padding:.45rem .9rem;border-radius:9px;margin-bottom:0}
  .hero-badge svg{width:14px;height:14px;flex:0 0 auto;color:var(--teal)}

  /* ─── HERO ANIMATION PANEL ─── */
  .hero-anim{position:relative;display:flex;align-items:center;justify-content:center;height:340px}
  .hero-anim svg{overflow:visible}

  @keyframes orbit1{from{transform:rotate(0deg) translateX(110px) rotate(0deg)}to{transform:rotate(360deg) translateX(110px) rotate(-360deg)}}
  @keyframes orbit2{from{transform:rotate(120deg) translateX(80px) rotate(-120deg)}to{transform:rotate(480deg) translateX(80px) rotate(-480deg)}}
  @keyframes orbit3{from{transform:rotate(240deg) translateX(140px) rotate(-240deg)}to{transform:rotate(600deg) translateX(140px) rotate(-600deg)}}
  @keyframes orbit4{from{transform:rotate(60deg) translateX(60px) rotate(-60deg)}to{transform:rotate(420deg) translateX(60px) rotate(-420deg)}}
  @keyframes orbitRing{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes orbitRing2{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
  @keyframes pulse-core{0%,100%{r:32}50%{r:36}}
  @keyframes pulse-ring{0%,100%{opacity:.3;r:52}50%{opacity:.12;r:58}}
  @keyframes pulse-ring2{0%,100%{opacity:.18;r:78}50%{opacity:.07;r:85}}
  @keyframes dash-flow{to{stroke-dashoffset:-48}}
  @keyframes float-tag{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  @keyframes float-tag2{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
  @keyframes float-tag3{0%,100%{transform:translateY(-4px)}50%{transform:translateY(5px)}}
  @keyframes scanbar{0%{transform:translateY(-160px);opacity:.6}100%{transform:translateY(160px);opacity:0}}
  @keyframes node-blink{0%,100%{opacity:.4}50%{opacity:1}}

  /* floating label chips */
  .htag{
    position:absolute;background:rgba(255,255,255,.72);
    backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
    border:1.5px solid rgba(10,31,68,.12);
    border-radius:22px;padding:7px 13px;
    font-family:'Open Sans',sans-serif;font-size:.68rem;font-weight:700;
    color:var(--blue);white-space:nowrap;
    box-shadow:0 4px 18px -6px rgba(10,31,68,.16);
  }
  .htag .dot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:5px;vertical-align:middle}
  .htag.t1{top:10px;left:0;animation:float-tag 3.4s ease-in-out infinite}
  .htag.t2{top:10px;right:0;animation:float-tag2 3.9s ease-in-out infinite .5s}
  .htag.t3{bottom:14px;left:50%;transform:translateX(-50%);animation:float-tag3 4.3s ease-in-out infinite 1s}

  @media(max-width:860px){
    .page-hero .wrap{grid-template-columns:1fr}
    .hero-anim{height:240px}
  }

  /* ─── CURED CASES HIGHLIGHT ─── */
  .cases{background:var(--blue);color:var(--ivory)}
  .cases .eyebrow{color:var(--gold)}
  .cases .sec-head h2{color:var(--ivory)}
  .cases .lead{color:rgba(250,248,244,.75)}
  .cases-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:40px}
  .case-card{
    background:rgba(186,224,243,.12);
    border:1.5px solid rgba(255,255,255,.2);
    border-radius:20px;overflow:hidden;
    backdrop-filter:blur(12px);
    transition:transform .4s var(--ease),box-shadow .4s,border-color .35s;
  }
  .case-card:hover{transform:translateY(-5px);box-shadow:0 20px 50px -20px rgba(0,0,0,.5);border-color:rgba(255,255,255,.4)}
  .case-card .cimg{aspect-ratio:16/9;overflow:hidden;background:rgba(10,31,68,.4)}
  .case-card .cimg img{width:100%;height:100%;object-fit:cover;transition:transform .6s var(--ease)}
  .case-card:hover .cimg img{transform:scale(1.04)}
  .case-body{padding:22px 20px 24px}
  .case-tag{display:inline-block;font-family:'Open Sans',sans-serif;font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);background:rgba(200,169,107,.15);border:1px solid rgba(200,169,107,.3);border-radius:6px;padding:.28rem .65rem;margin-bottom:10px}
  .case-body h4{font-size:.98rem;color:#fff;line-height:1.3;margin-bottom:8px}
  .case-body p{font-size:.82rem;color:rgba(250,248,244,.7);line-height:1.6}
  .case-link{display:inline-flex;align-items:center;gap:6px;font-family:'Open Sans',sans-serif;font-size:.76rem;font-weight:600;color:var(--gold);margin-top:14px;transition:gap .3s var(--ease)}
  .case-link svg{width:13px;height:13px}
  .case-link:hover{gap:10px}

  /* ─── RESEARCH METHODOLOGY ─── */
  .method{background:var(--ivory)}
  .method-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
  .method-visual{
    background:linear-gradient(135deg,#BAE0F3 0%,#9ed0eb 100%);
    border-radius:24px;padding:48px 40px;position:relative;overflow:hidden;
  }
  .method-visual::before{
    content:"";position:absolute;top:-40px;right:-40px;width:200px;height:200px;
    border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.3),transparent 70%);
  }
  .method-visual h3{font-size:1.1rem;color:var(--blue);margin-bottom:6px}
  .method-visual .mv-lead{font-size:.86rem;color:rgba(10,31,68,.7);margin-bottom:30px}
  .method-step{display:flex;gap:14px;align-items:flex-start;padding:16px 0;border-bottom:1px solid rgba(10,31,68,.1)}
  .method-step:last-child{border-bottom:none;padding-bottom:0}
  .ms-num{width:32px;height:32px;border-radius:50%;background:var(--blue);color:#fff;font-family:'Open Sans',sans-serif;font-weight:700;font-size:.78rem;display:grid;place-items:center;flex:0 0 auto;margin-top:2px}
  .ms-text h5{font-size:.88rem;color:var(--blue);margin-bottom:3px}
  .ms-text p{font-size:.8rem;color:rgba(10,31,68,.65);line-height:1.55}
  .method-content h2{font-size:clamp(1.6rem,2.5vw,2.1rem);margin:10px 0 16px}
  .method-content p{color:#555;margin-bottom:14px;font-size:.95rem}
  .method-tags{display:flex;flex-wrap:wrap;gap:9px;margin-top:22px}
  .mtag{font-family:'Open Sans',sans-serif;font-size:.72rem;font-weight:600;background:var(--blue-06);color:var(--blue);padding:.4rem .75rem;border-radius:8px;border:1px solid var(--line)}

  /* ─── PUBLICATIONS STRIP ─── */
  .pubs{background:linear-gradient(135deg,#0A1F44 0%,#0a4a6e 100%);color:var(--ivory)}
  .pubs .eyebrow{color:var(--gold)}
  .pubs .sec-head h2{color:#fff}
  .pub-list{display:flex;flex-direction:column;gap:18px;margin-top:40px}
  .pub-item{
    background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:16px;
    padding:22px 26px;display:flex;align-items:flex-start;gap:18px;
    transition:background .35s,border-color .35s,transform .35s var(--ease);
  }
  .pub-item:hover{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.28);transform:translateX(6px)}
  .pub-icon{width:44px;height:44px;border-radius:12px;background:rgba(200,169,107,.15);border:1px solid rgba(200,169,107,.3);display:grid;place-items:center;flex:0 0 auto}
  .pub-icon svg{width:20px;height:20px;color:var(--gold)}
  .pub-body .pub-source{font-family:'Open Sans',sans-serif;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:5px}
  .pub-body h4{font-size:.98rem;color:#fff;line-height:1.35;margin-bottom:5px}
  .pub-body p{font-size:.8rem;color:rgba(250,248,244,.65);line-height:1.55}

  /* ─── CTA ─── */
  .cta{background:linear-gradient(135deg,#0096c7 0%,#0a4a6e 100%);color:#fff;padding:88px 0;text-align:center}
  .cta .eyebrow{color:rgba(255,255,255,.8)}
  .cta h2{color:#fff;font-size:clamp(1.7rem,2.8vw,2.4rem);margin:12px 0 16px}
  .cta p{color:rgba(255,255,255,.8);max-width:54ch;margin:0 auto 32px}
  .cta-row{display:flex;gap:14px;flex-wrap:wrap;justify-content:center}
  .btn-white{background:#fff;color:#0a4a6e;box-shadow:0 10px 28px -12px rgba(0,0,0,.35)}
  .btn-white:hover{transform:translateY(-2px);box-shadow:0 16px 36px -14px rgba(0,0,0,.45)}
  .btn-outline-white{background:transparent;color:#fff;border-color:rgba(255,255,255,.5)}
  .btn-outline-white:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}

  /* ─── RESPONSIVE ─── */
  @media(max-width:1024px){
    .wrap{padding:0 20px}
    .cases-grid{grid-template-columns:1fr 1fr}
    .method-grid{grid-template-columns:1fr;gap:36px}
    .page-hero .wrap{gap:32px}
  }

  @media(max-width:960px){
    .cases-grid{grid-template-columns:1fr 1fr}
  }

  @media(max-width:767px){
    .wrap{padding:0 16px}
    .sec{padding:56px 0}
    .sec-head{margin-bottom:32px}
    .sec-head h2{font-size:1.55rem}
    .lead{font-size:.93rem;max-width:100%}
    .eyebrow{font-size:.64rem}

    .btn{min-height:48px;font-size:.84rem;padding:.82rem 1.3rem;justify-content:center}

    .page-hero{padding:48px 0 44px}
    .page-hero .wrap{
      grid-template-columns:1fr;
      gap:0;
    }
    .hero-text{align-items:center;text-align:center}
    .breadcrumb{font-size:.7rem;margin-bottom:16px}
    .page-hero h1{font-size:1.75rem;max-width:100%;margin:8px 0 14px;text-align:center}
    .hero-lead{font-size:.92rem;max-width:100%;margin-bottom:22px;text-align:center}
    .hero-badge{font-size:.72rem;text-align:center;padding:.45rem .85rem}

    .hero-anim{height:260px;margin-top:28px}
    .hero-anim svg{width:220px;height:220px}
    .htag{font-size:.6rem;padding:5px 10px}
    .htag.t1{top:4px;left:-4px}
    .htag.t2{top:4px;right:-4px}
    .htag.t3{bottom:6px}

    .cases-grid{grid-template-columns:1fr;gap:16px}
    .case-body h4{font-size:.92rem}
    .case-body p{font-size:.8rem}

    .method-grid{grid-template-columns:1fr;gap:24px}
    .method-visual{padding:32px 24px}
    .method-content p{font-size:.88rem}

    .pub-item{padding:18px 16px;gap:14px}
    .pub-icon{width:38px;height:38px;border-radius:10px;flex-shrink:0}
    .pub-body h4{font-size:.9rem}
    .pub-body p{font-size:.76rem}

    .cta{padding:60px 0}
    .cta h2{font-size:1.55rem}
    .cta p{font-size:.9rem;margin-bottom:24px}
    .cta-row{flex-direction:column;align-items:center;gap:12px}
    .cta-row .btn{width:100%;max-width:320px}
  }

  @media(max-width:480px){
    .wrap{padding:0 14px}
    .page-hero{padding:40px 0 36px}
    .page-hero h1{font-size:1.55rem}
    .hero-anim{height:220px}
    .hero-anim svg{width:190px;height:190px}
    .htag.t1,.htag.t2{display:none}
    .sec{padding:48px 0}
    .sec-head h2{font-size:1.4rem}
    .method-visual{padding:26px 18px}
    .pub-item{flex-direction:column;gap:12px}
    .pub-icon{width:36px;height:36px}
    .cta h2{font-size:1.35rem}
  }

  @media(prefers-reduced-motion:reduce){
    .reveal{opacity:1;transform:none}
    .hero-anim *{animation:none !important}
  }
`;

export default function ResearchCenterPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          {/* LEFT: Text */}
          <div className="hero-text">
            <h1 className="reveal d1">
              Welcome to Our <em>Research Center</em>
            </h1>
            <p className="hero-lead reveal d2">
              Over two decades of systematic clinical observation, case documentation and pattern recognition — supporting families with rare neurological and genetic conditions through individualised homeopathic care.
            </p>
          </div>

          {/* RIGHT: Animated Research Illustration */}
          <div className="hero-anim reveal d2">
            {/* Floating keyword chips */}
            <div className="htag t1">
              <span className="dot" style={{ background: '#008C8C' }}></span>Clinical Research
            </div>
            <div className="htag t2">
              <span className="dot" style={{ background: '#0A1F44' }}></span>20+ Years Data
            </div>
            <div className="htag t3">
              <span className="dot" style={{ background: '#C8A96B' }}></span>500+ Cases Documented
            </div>

            {/* Main SVG */}
            <svg viewBox="0 0 300 300" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="softglow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#008C8C" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0A1F44" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BAE0F3" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#008C8C" stopOpacity="0.2" />
                </linearGradient>
                <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#BAE0F3" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#008C8C" stopOpacity="0.6" />
                </radialGradient>
                <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#008C8C" stopOpacity="0" />
                  <stop offset="50%" stopColor="#008C8C" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#008C8C" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Outermost faint pulse ring */}
              <circle cx="150" cy="150" r="130" fill="none" stroke="rgba(0,140,140,.08)" strokeWidth="1" />
              <circle cx="150" cy="150" fill="none" stroke="rgba(10,31,68,.06)" strokeWidth="1">
                <animate attributeName="r" values="78;86;78" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".18;.06;.18" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Orbit ring 1 — dashed, rotates */}
              <g style={{ transformOrigin: '150px 150px', animation: 'orbitRing 22s linear infinite' }}>
                <circle cx="150" cy="150" r="110" fill="none" stroke="url(#ringGrad)" strokeWidth="1.2" strokeDasharray="6 5" />
              </g>

              {/* Orbit ring 2 — rotates opposite */}
              <g style={{ transformOrigin: '150px 150px', animation: 'orbitRing2 16s linear infinite' }}>
                <circle cx="150" cy="150" r="80" fill="none" stroke="url(#ringGrad2)" strokeWidth="1" strokeDasharray="4 8" />
              </g>

              {/* Inner solid faint ring */}
              <circle cx="150" cy="150" r="52" fill="none" stroke="rgba(0,140,140,.2)" strokeWidth="1" />

              {/* Orbiting node 1 — teal — outer ring */}
              <g style={{ transformOrigin: '150px 150px', animation: 'orbitRing 22s linear infinite' }}>
                <circle cx="260" cy="150" r="9" fill="#008C8C" filter="url(#glow)" opacity="0.9" />
                <circle cx="260" cy="150" r="5" fill="#fff" opacity="0.9" />
              </g>

              {/* Orbiting node 2 — navy — mid ring */}
              <g style={{ transformOrigin: '150px 150px', animation: 'orbitRing2 16s linear infinite' }}>
                <circle cx="230" cy="150" r="7" fill="#0A1F44" filter="url(#softglow)" opacity="0.85" />
                <circle cx="230" cy="150" r="3.5" fill="#BAE0F3" opacity="0.9" />
              </g>

              {/* Orbiting node 3 — gold — outer ring offset */}
              <g style={{ transformOrigin: '150px 150px', animation: 'orbit3 28s linear infinite' }}>
                <circle cx="260" cy="150" r="7" fill="#C8A96B" filter="url(#softglow)" opacity="0.85" />
                <circle cx="260" cy="150" r="3.5" fill="#fff" opacity="0.9" />
              </g>

              {/* Orbiting node 4 — light blue — mid ring offset */}
              <g style={{ transformOrigin: '150px 150px', animation: 'orbit4 20s linear infinite' }}>
                <circle cx="230" cy="150" r="6" fill="#BAE0F3" filter="url(#softglow)" />
                <circle cx="230" cy="150" r="3" fill="#0A1F44" opacity="0.7" />
              </g>

              {/* Connection spokes */}
              <line x1="150" y1="150" x2="260" y2="150" stroke="rgba(0,140,140,.15)" strokeWidth="1" strokeDasharray="4 4">
                <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="22s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="0;-48" dur="1.2s" repeatCount="indefinite" />
              </line>
              <line x1="150" y1="150" x2="230" y2="150" stroke="rgba(10,31,68,.1)" strokeWidth="1" strokeDasharray="3 5">
                <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="-360 150 150" dur="16s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="0;-48" dur="1s" repeatCount="indefinite" />
              </line>

              {/* DNA helix — vertical, center */}
              <path d="M138,90 C128,105 128,120 138,135 C148,150 148,165 138,180 C128,195 128,210 138,225" fill="none" stroke="#008C8C" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
              <path d="M162,90 C172,105 172,120 162,135 C152,150 152,165 162,180 C172,195 172,210 162,225" fill="none" stroke="#0A1F44" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />

              {/* DNA rungs */}
              <line x1="138" y1="101" x2="162" y2="101" stroke="rgba(0,140,140,.5)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".5;.9;.5" dur="2.4s" begin="0s" repeatCount="indefinite" /></line>
              <line x1="136" y1="111" x2="164" y2="111" stroke="rgba(10,31,68,.4)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".4;.8;.4" dur="2.4s" begin=".3s" repeatCount="indefinite" /></line>
              <line x1="135" y1="121" x2="165" y2="121" stroke="rgba(0,140,140,.5)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".5;.9;.5" dur="2.4s" begin=".6s" repeatCount="indefinite" /></line>
              <line x1="136" y1="131" x2="164" y2="131" stroke="rgba(10,31,68,.4)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".4;.8;.4" dur="2.4s" begin=".9s" repeatCount="indefinite" /></line>
              <line x1="138" y1="141" x2="162" y2="141" stroke="rgba(0,140,140,.5)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".5;.9;.5" dur="2.4s" begin="1.2s" repeatCount="indefinite" /></line>
              <line x1="140" y1="150" x2="160" y2="150" stroke="rgba(10,31,68,.5)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".4;.9;.4" dur="2.4s" begin="1.5s" repeatCount="indefinite" /></line>
              <line x1="138" y1="159" x2="162" y2="159" stroke="rgba(0,140,140,.5)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".5;.9;.5" dur="2.4s" begin="1.8s" repeatCount="indefinite" /></line>
              <line x1="136" y1="169" x2="164" y2="169" stroke="rgba(10,31,68,.4)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".4;.8;.4" dur="2.4s" begin="2.1s" repeatCount="indefinite" /></line>
              <line x1="135" y1="179" x2="165" y2="179" stroke="rgba(0,140,140,.5)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".5;.9;.5" dur="2.4s" begin="0s" repeatCount="indefinite" /></line>
              <line x1="136" y1="189" x2="164" y2="189" stroke="rgba(10,31,68,.4)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".4;.8;.4" dur="2.4s" begin=".4s" repeatCount="indefinite" /></line>
              <line x1="138" y1="199" x2="162" y2="199" stroke="rgba(0,140,140,.5)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".5;.9;.5" dur="2.4s" begin=".8s" repeatCount="indefinite" /></line>
              <line x1="140" y1="209" x2="160" y2="209" stroke="rgba(10,31,68,.4)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".4;.8;.4" dur="2.4s" begin="1.2s" repeatCount="indefinite" /></line>
              <line x1="142" y1="218" x2="158" y2="218" stroke="rgba(0,140,140,.5)" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values=".5;.9;.5" dur="2.4s" begin="1.6s" repeatCount="indefinite" /></line>

              {/* Scan bar sweeping over DNA */}
              <rect x="120" y="80" width="60" height="18" rx="2" fill="url(#scanGrad)" opacity="0.6">
                <animateTransform attributeName="transform" type="translate" values="0,0;0,145;0,0" dur="3.6s" repeatCount="indefinite" calcMode="ease-in-out" />
              </rect>

              {/* Core circle */}
              <circle cx="150" cy="150" fill="url(#coreGrad)" filter="url(#glow)">
                <animate attributeName="r" values="32;36;32" dur="3.2s" repeatCount="indefinite" />
              </circle>

              {/* Core icon */}
              <g transform="translate(150,150)">
                <circle cx="0" cy="-4" r="9" fill="none" stroke="rgba(10,31,68,.7)" strokeWidth="2" />
                <line x1="6.5" y1="2.5" x2="11" y2="8" stroke="rgba(10,31,68,.7)" strokeWidth="2.2" strokeLinecap="round" />
              </g>

              {/* Small data nodes scattered */}
              <circle cx="90" cy="112" r="4" fill="#008C8C" opacity="0.5"><animate attributeName="opacity" values=".5;1;.5" dur="2.8s" begin="0s" repeatCount="indefinite" /></circle>
              <circle cx="215" cy="100" r="3.5" fill="#0A1F44" opacity="0.4"><animate attributeName="opacity" values=".4;.9;.4" dur="3.1s" begin=".6s" repeatCount="indefinite" /></circle>
              <circle cx="80" cy="190" r="3" fill="#C8A96B" opacity="0.5"><animate attributeName="opacity" values=".5;1;.5" dur="2.5s" begin="1.1s" repeatCount="indefinite" /></circle>
              <circle cx="220" cy="200" r="4" fill="#008C8C" opacity="0.45"><animate attributeName="opacity" values=".45;.9;.45" dur="3.4s" begin=".3s" repeatCount="indefinite" /></circle>
              <circle cx="100" cy="240" r="3" fill="#0A1F44" opacity="0.4"><animate attributeName="opacity" values=".4;.85;.4" dur="2.9s" begin=".9s" repeatCount="indefinite" /></circle>
              <circle cx="200" cy="248" r="3.5" fill="#008C8C" opacity="0.4"><animate attributeName="opacity" values=".4;.9;.4" dur="3.2s" begin="1.4s" repeatCount="indefinite" /></circle>

              {/* Connecting lines between nodes */}
              <line x1="90" y1="112" x2="150" y2="150" stroke="rgba(0,140,140,.18)" strokeWidth="1" strokeDasharray="3 4" />
              <line x1="215" y1="100" x2="150" y2="150" stroke="rgba(10,31,68,.15)" strokeWidth="1" strokeDasharray="3 4" />
              <line x1="80" y1="190" x2="150" y2="150" stroke="rgba(0,140,140,.15)" strokeWidth="1" strokeDasharray="3 4" />
              <line x1="220" y1="200" x2="150" y2="150" stroke="rgba(0,140,140,.15)" strokeWidth="1" strokeDasharray="3 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* FEATURED CURED CASES */}
      <section className="sec cases">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Highlighted Cured Cases</h2>
            <p className="lead">
              A selection of documented cases from our research clinic — shared with family consent. These represent individual clinical observations and are not presented as evidence of guaranteed outcomes.
            </p>
          </div>
          <div className="cases-grid">
            <div className="case-card reveal d1">
              <div className="cimg">
                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80"
                  alt="Child of Government of India Research Scientist — ASD Recovery" loading="lazy" decoding="async" />
              </div>
              <div className="case-body">
                <span className="case-tag">Cured Case · ASD</span>
                <h4>Child of Research Scientist, Government of India — Fully Recovered from ASD Without Any Therapy</h4>
                <p>
                  A notable documented case: a child of a Government of India research scientist, presenting with Autism Spectrum Disorder, achieving full functional recovery through individualised homeopathic care alone — without parallel therapy.
                </p>
              </div>
            </div>

            <div className="case-card reveal d2">
              <div className="cimg">
                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
                  alt="Fragile X Syndrome with ASD Presentation" loading="lazy" decoding="async" />
              </div>
              <div className="case-body">
                <span className="case-tag">Case Study · Syndromic ASD</span>
                <h4>Fragile X Syndrome with ASD Presentation — Progressive Developmental Improvement</h4>
                <p>
                  A multi-year observational case documenting developmental milestone progress in a child presenting with Fragile X Syndrome comorbid with ASD features — with constitutional homeopathic prescription and family history mapping.
                </p>
              </div>
            </div>

            <div className="case-card reveal d3">
              <div className="cimg">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80"
                  alt="Rare Chromosomal Microdeletion Case Study" loading="lazy" decoding="async" />
              </div>
              <div className="case-body">
                <span className="case-tag">Case Study · Rare Genetic</span>
                <h4>Rare Chromosomal Microdeletion — Behavioural &amp; Communication Progress Over 36 Months</h4>
                <p>
                  Documentation of a child with a rare chromosomal microdeletion syndrome, tracking observable changes in communication patterns, sleep quality, and daily functioning across a 36-month supportive care period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH METHODOLOGY */}
      <section className="sec method">
        <div className="wrap">
          <div className="method-grid">
            <div className="method-visual reveal">
              <h3>Our Clinical Research Approach</h3>
              <p className="mv-lead">How we observe, document and learn from each case</p>
              <div className="method-step">
                <div className="ms-num">1</div>
                <div className="ms-text">
                  <h5>Detailed Intake &amp; History</h5>
                  <p>Comprehensive family history, miasmatic assessment, pregnancy history, and developmental timeline recording at first consultation.</p>
                </div>
              </div>
              <div className="method-step">
                <div className="ms-num">2</div>
                <div className="ms-text">
                  <h5>Constitutional Prescription</h5>
                  <p>Individualised homeopathic prescription based on totality of symptoms, genetic patterns and constitutional indicators unique to each child.</p>
                </div>
              </div>
              <div className="method-step">
                <div className="ms-num">3</div>
                <div className="ms-text">
                  <h5>Longitudinal Observation</h5>
                  <p>Structured follow-up over months and years — recording observable changes across behaviour, communication, sleep, and daily function.</p>
                </div>
              </div>
              <div className="method-step">
                <div className="ms-num">4</div>
                <div className="ms-text">
                  <h5>Pattern Recognition &amp; Documentation</h5>
                  <p>Aggregating cases to identify constitutional and miasmatic patterns across similar presentations — contributing to the clinic's growing research archive.</p>
                </div>
              </div>
            </div>
            <div className="method-content reveal d2">
              <h2>Honest, observational, and family-centred research</h2>
              <p>Our research approach is grounded in classical homeopathic methodology — detailed individual case-taking, constitutional analysis, and long-term follow-up. We do not run controlled trials or make efficacy claims beyond what we can observe and document.</p>
              <p>Every case in our archive begins with one principle: serve this child and this family with honesty. What we record is what we observe — transparently, without overstating outcomes or making promises we cannot keep.</p>
              <p>Dr. Ketan Patel's key clinical insight — that tuberculinic family history is a significant indicator in certain ASD presentations — has been documented in published commentary since 2006 and continues to inform our constitutional prescribing approach.</p>
              <div className="method-tags">
                <span className="mtag">Classical Homeopathy</span>
                <span className="mtag">Constitutional Analysis</span>
                <span className="mtag">Miasmatic Theory</span>
                <span className="mtag">Long-term Follow-up</span>
                <span className="mtag">Case Archiving</span>
                <span className="mtag">Genetic Pattern Study</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS & MEDIA */}
      <section className="sec pubs">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Research in the public record</h2>
            <p className="lead" style={{ color: 'rgba(250,248,244,.7)' }}>
              Clinical findings documented in press publications and media coverage spanning two decades of practice.
            </p>
          </div>
          <div className="pub-list">
            <div className="pub-item reveal d1">
              <div className="pub-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
              <div className="pub-body">
                <div className="pub-source">Canada Free Press · 2006</div>
                <h4>If there is a tuberculosis history in the patient's family, then this medicine proves to be effective in many cases</h4>
                <p>Dr. Ketan Patel's landmark publication documenting the clinical correlation between tuberculinic family history and positive homeopathic response in ASD presentations — one of the first of its kind in international homeopathic literature.</p>
              </div>
            </div>

            <div className="pub-item reveal d2">
              <div className="pub-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <div className="pub-body">
                <div className="pub-source">Print Media Archive · Ongoing</div>
                <h4>Case Coverage in Indian &amp; International Medical Press</h4>
                <p>Multiple documented case studies and clinical commentary featured across Indian and international print media — covering rare genetic neurological conditions and ASD recovery cases from the Speciality Homeopathy clinic.</p>
              </div>
            </div>

            <div className="pub-item reveal d3">
              <div className="pub-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <div className="pub-body">
                <div className="pub-source">Video Documentation · Case Gallery</div>
                <h4>Patient Testimony &amp; Case Video Archive</h4>
                <p>A growing library of patient testimonies and family-shared video documentation illustrating developmental progress across cases treated at the research clinic — available in the Videos section of the site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2 className="reveal d1">Is your child's case eligible for our research clinic?</h2>
          <p className="reveal d1">
            We accept a limited number of cases with rare genetic neurological conditions and syndromic ASD for our research clinic consultations. Reach out — we will listen carefully and be honest about how we can help.
          </p>
          <div className="cta-row reveal d2">
            <a className="btn btn-outline-white" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">
              Book a Research Consultation
            </a>
            <a className="btn btn-outline-white" href="tel:+919898005354">
              Call +91 98980 05354
            </a>
            <a className="btn btn-outline-white" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">
              WhatsApp our team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
