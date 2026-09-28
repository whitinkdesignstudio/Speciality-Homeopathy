import React from 'react';

const aboutStyles = `
:root{
  --blue:#0a1f44;
  --teal:#009ba8;
  --gold:#009ba8;
  --ivory:#ceedf8;
  --graphite:#0a1f44;
  --blue-06:rgba(10, 31, 68, .06);
  --teal-10:rgba(0, 155, 168, .10);
  --line:rgba(10, 31, 68, .10);
  --shadow:0 24px 60px -30px rgba(10, 31, 68, .34);
  --shadow-sm:0 12px 30px -20px rgba(10, 31, 68, .3);
  --maxw:1180px;
  --ease:cubic-bezier(.2,.7,.2,1);
}

.about-page-container {
  font-family:'Open Sans',system-ui,sans-serif;
  color:var(--graphite);
  background:var(--ivory);
  font-size:16px;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

.about-page-container h1,
.about-page-container h2,
.about-page-container h3,
.about-page-container h4{
  font-family:'Poppins',sans-serif;
  color:var(--blue);
  font-weight:600;
  line-height:1.16;
  letter-spacing:-.01em;
}

.about-page-container .stat-num{
  font-family:'Open Sans',sans-serif;
  font-weight:700;
  letter-spacing:-.02em;
}

.about-page-container a{
  color:inherit;
  text-decoration:none;
}

.about-page-container img{
  max-width:100%;
  display:block;
}

.about-page-container .wrap{
  max-width:var(--maxw);
  margin:0 auto;
  padding:0 26px;
}

.about-page-container .eyebrow{
  font-family:'Open Sans',sans-serif;
  font-weight:600;
  font-size:.7rem;
  letter-spacing:.2em;
  text-transform:uppercase;
  color:var(--teal);
}

.about-page-container .lead{
  font-size:1.02rem;
  color:#0a1f44;
  max-width:60ch;
}

.about-page-container .more-link{
  display:inline-flex;
  align-items:center;
  gap:7px;
  font-family:'Open Sans',sans-serif;
  font-weight:600;
  font-size:.78rem;
  letter-spacing:.03em;
  color:var(--teal);
  margin-top:8px;
  transition:gap .3s var(--ease);
}
.about-page-container .more-link svg{width:14px;height:14px}
.about-page-container .more-link:hover{gap:12px}

/* buttons */
.about-page-container .btn{
  display:inline-flex;
  align-items:center;
  gap:.5rem;
  font-family:'Open Sans',sans-serif;
  font-weight:600;
  font-size:.82rem;
  padding:.78rem 1.4rem;
  border-radius:999px;
  cursor:pointer;
  border:1px solid transparent;
  transition:transform .35s var(--ease),box-shadow .35s,background .3s,color .3s;
}

.about-page-container .btn-primary{
  background:linear-gradient(135deg,#009ba8,#009ba8) !important;
  color:#fff !important;
  box-shadow:0 8px 22px -10px rgba(0, 155, 168, .55) !important;
}

.about-page-container .btn-primary:hover{
  transform:translateY(-2px);
  box-shadow:0 14px 30px -12px rgba(0, 155, 168, .7) !important;
}

.about-page-container .btn-ghost{
  background:rgba(255,255,255,.35);
  color:var(--blue);
  border-color:rgba(10, 31, 68, .3);
  backdrop-filter:blur(6px);
}

.about-page-container .btn-ghost:hover{
  background:rgba(255,255,255,.55);
  transform:translateY(-2px);
}

.about-page-container .btn-dark{
  background:var(--blue);
  color:var(--ivory);
}

.about-page-container .btn-dark:hover{
  transform:translateY(-2px);
  box-shadow:var(--shadow-sm);
}

/* sections */
.about-page-container .sec{padding:70px 0}
.about-page-container .sec-head{max-width:680px;margin-bottom:46px}
.about-page-container .sec-head h2{font-size:clamp(1.65rem,2.8vw,2.35rem);margin:12px 0 14px}

.about-page-container .reveal{
  opacity:0;
  transform:translateY(28px);
  transition:opacity .8s var(--ease),transform .8s var(--ease);
}
.about-page-container .reveal.in{
  opacity:1;
  transform:none;
}
.about-page-container .reveal.d1{transition-delay:.08s}
.about-page-container .reveal.d2{transition-delay:.16s}
.about-page-container .reveal.d3{transition-delay:.24s}

/* ===== ABOUT PAGE: inner breadcrumb ===== */
.about-page-container .ab-crumb{
  display:flex;
  gap:8px;
  align-items:center;
  font-size:.78rem;
  color:rgba(10, 31, 68, .55);
  margin-bottom:22px;
}
.about-page-container .ab-crumb a{
  color:rgba(10, 31, 68, .55);
  transition:color .3s;
}
.about-page-container .ab-crumb a:hover{
  color:var(--teal);
}
.about-page-container .ab-crumb svg{
  width:11px;
  height:11px;
  opacity:.6;
}

.about-page-container .eyebrow-pill{
  display:inline-flex;
  align-items:center;
  gap:7px;
  font-family:'Open Sans',sans-serif;
  font-weight:700;
  font-size:.72rem;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:var(--teal);
  background:var(--teal-10);
  padding:.4rem .9rem;
  border-radius:999px;
  margin-bottom:18px;
}
.about-page-container .eyebrow-pill span{
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--teal);
  flex:0 0 auto;
}

/* ===== ABOUT HERO ===== */
.about-page-container .ab-hero{
  position:relative;
  padding:56px 0 64px;
  overflow:hidden;
  background:linear-gradient(180deg,#ceedf8 0%,var(--ivory) 78%);
}
.about-page-container .ab-blob{
  position:absolute;
  border-radius:50%;
  filter:blur(60px);
  pointer-events:none;
  opacity:.55;
}
.about-page-container .ab-blob-1{
  width:420px;
  height:420px;
  top:-180px;
  right:-120px;
  background:radial-gradient(circle,rgba(0, 155, 168, .28),transparent 70%);
  animation:abDrift1 16s ease-in-out infinite;
}
.about-page-container .ab-blob-2{
  width:320px;
  height:320px;
  bottom:-160px;
  left:-100px;
  background:radial-gradient(circle,rgba(0, 155, 168, .24),transparent 70%);
  animation:abDrift2 19s ease-in-out infinite;
}
@keyframes abDrift1{
  0%,100%{transform:translate(0,0)}
  50%{transform:translate(-26px,22px)}
}
@keyframes abDrift2{
  0%,100%{transform:translate(0,0)}
  50%{transform:translate(22px,-18px)}
}

.about-page-container .ab-hero-grid{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:1.15fr .85fr;
  gap:48px;
  align-items:center;
}
.about-page-container .ab-hero-text h1{
  font-size:clamp(2rem,3.6vw,3rem);
  margin:16px 0 18px;
}
.about-page-container .ab-hero-text h1 em{
  font-style:normal;
  color:var(--teal);
}

/* signature orbit visual */
.about-page-container .ab-orbit-wrap{
  position:relative;
  width:100%;
  max-width:400px;
  margin:0 auto;
}
.about-page-container .ab-orbit-wrap svg{
  width:100%;
  height:auto;
  overflow:visible;
}
.about-page-container .orbit-spin{
  transform-origin:200px 200px;
  animation:orbitSpin 90s linear infinite;
}
@keyframes orbitSpin{to{transform:rotate(360deg)}}

.about-page-container .orbit-line{
  stroke-dasharray:100;
  stroke-dashoffset:100;
  animation:orbitDraw 1.5s var(--ease) forwards;
}
.about-page-container .orbit-line.d1{animation-delay:.15s}
.about-page-container .orbit-line.d2{animation-delay:.4s}
.about-page-container .orbit-line.d3{animation-delay:.65s}
@keyframes orbitDraw{to{stroke-dashoffset:0}}

.about-page-container .orbit-dot{
  opacity:0;
  animation:orbitDotIn .6s var(--ease) forwards;
}
.about-page-container .orbit-dot.d1{animation-delay:.5s}
.about-page-container .orbit-dot.d2{animation-delay:.75s}
.about-page-container .orbit-dot.d3{animation-delay:1s}
.about-page-container .orbit-dot.d4{animation-delay:1.25s}
.about-page-container .orbit-dot.d5{animation-delay:1.5s}
.about-page-container .orbit-dot.d6{animation-delay:1.75s}
@keyframes orbitDotIn{
  0%{opacity:0;transform:scale(0)}
  70%{transform:scale(1.25)}
  100%{opacity:1;transform:scale(1)}
}

.about-page-container .orbit-core{
  opacity:0;
  animation:orbitCoreIn 1s var(--ease) forwards;
  animation-delay:1.9s;
  transform-origin:200px 200px;
}
@keyframes orbitCoreIn{
  0%{opacity:0;transform:scale(.6)}
  100%{opacity:1;transform:scale(1)}
}

.about-page-container .orbit-pulse{
  animation:orbitPulse 3s ease-in-out infinite;
  animation-delay:2.6s;
  transform-origin:200px 200px;
}
@keyframes orbitPulse{
  0%,100%{transform:scale(1);opacity:.5}
  50%{transform:scale(1.12);opacity:.15}
}

/* stat strip */
.about-page-container .ab-stats{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
  margin-top:58px;
}
.about-page-container .ab-stat{
  background:#fff;
  border:1px solid var(--line);
  border-radius:18px;
  padding:24px 16px;
  text-align:center;
  box-shadow:var(--shadow-sm);
  transition:transform .35s var(--ease);
}
.about-page-container .ab-stat:hover{transform:translateY(-4px)}
.about-page-container .ab-stat .num{
  font-family:'Open Sans',sans-serif;
  font-weight:800;
  font-size:1.9rem;
  color:var(--teal);
  letter-spacing:-.02em;
}
.about-page-container .ab-stat .lbl{
  font-size:.75rem;
  color:#0a1f44;
  margin-top:6px;
  line-height:1.4;
}

/* ===== APPROACH SECTION ===== */
.about-page-container .approach-sec{
  padding:70px 0;
  background:var(--ivory);
}
.about-page-container .approach-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:26px;
  margin-top:46px;
  perspective:1200px;
}
.about-page-container .approach-card{
  position:relative;
  background:#fff;
  border-radius:22px;
  padding:36px 28px;
  border:1px solid var(--line);
  box-shadow:var(--shadow-sm);
  transition:transform .25s var(--ease),box-shadow .25s var(--ease);
  transform-style:preserve-3d;
  will-change:transform;
}
.about-page-container .approach-card:hover{
  box-shadow:var(--shadow);
}
.about-page-container .approach-icon{
  width:54px;
  height:54px;
  border-radius:15px;
  background:var(--teal-10);
  display:grid;
  place-items:center;
  color:var(--teal);
  margin-bottom:20px;
  transition:transform .4s var(--ease);
}
.about-page-container .approach-icon svg{width:25px;height:25px}
.about-page-container .approach-card:hover .approach-icon{
  transform:scale(1.1) rotate(-6deg);
}
.about-page-container .approach-card h3{
  font-size:1.12rem;
  margin-bottom:10px;
}
.about-page-container .approach-card p{
  font-size:.88rem;
  color:#0a1f44;
  line-height:1.7;
}

/* ===== MISSION SECTION (dark contrast panel) ===== */
.about-page-container .mission-sec{
  position:relative;
  background:var(--blue);
  color:var(--ivory);
  padding:76px 0;
  overflow:hidden;
  text-align:center;
}
.about-page-container .mission-sec::before{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(60% 60% at 50% 0%,rgba(0, 155, 168, .22),transparent 70%);
  pointer-events:none;
}
.about-page-container .mission-sec .wrap{position:relative;z-index:2}
.about-page-container .mission-sec .eyebrow{color:#009ba8}
.about-page-container .mission-statement{
  font-family:'Poppins',sans-serif;
  font-style:italic;
  font-weight:500;
  font-size:clamp(1.3rem,2.6vw,1.9rem);
  line-height:1.5;
  max-width:46ch;
  margin:18px auto 50px;
  color:#fff;
}
.about-page-container .mission-statement span{
  color:var(--gold);
  font-style:normal;
  font-weight:600;
}
.about-page-container .mission-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
}
.about-page-container .mission-stat{
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  border-radius:18px;
  padding:24px 14px;
  backdrop-filter:blur(6px);
  transition:transform .35s var(--ease),background .35s;
}
.about-page-container .mission-stat:hover{
  transform:translateY(-4px);
  background:rgba(255,255,255,.1);
}
.about-page-container .mission-stat .num{
  font-family:'Open Sans',sans-serif;
  font-weight:800;
  font-size:1.7rem;
  color:var(--gold);
}
.about-page-container .mission-stat .lbl{
  font-size:.72rem;
  color:rgba(206, 237, 248, .72);
  margin-top:6px;
  line-height:1.4;
}

/* ===== JOURNEY / PROCESS SECTION ===== */
.about-page-container .journey-sec{
  padding:70px 0;
  background:var(--ivory);
}
.about-page-container .journey-track{
  position:relative;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:34px;
  margin-top:54px;
}
.about-page-container .journey-line{
  position:absolute;
  top:34px;
  left:calc(16.66%);
  right:calc(16.66%);
  height:2px;
  background:var(--line);
  z-index:0;
}
.about-page-container .journey-line-fill{
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:0%;
  background:linear-gradient(90deg,var(--teal),var(--gold));
  transition:width 1.4s var(--ease);
}
.about-page-container .journey-line.in .journey-line-fill{
  width:100%;
}
.about-page-container .journey-step{
  position:relative;
  z-index:1;
  text-align:center;
}
.about-page-container .journey-num{
  width:68px;
  height:68px;
  border-radius:50%;
  background:#fff;
  border:2px solid var(--teal);
  color:var(--teal);
  display:grid;
  place-items:center;
  margin:0 auto 22px;
  font-family:'Poppins',sans-serif;
  font-weight:600;
  font-size:1.3rem;
  box-shadow:var(--shadow-sm);
  transition:transform .4s var(--ease),background .4s,color .4s;
}
.about-page-container .journey-step:hover .journey-num{
  background:var(--teal);
  color:#fff;
  transform:scale(1.08);
}
.about-page-container .journey-step h3{
  font-size:1.05rem;
  margin-bottom:10px;
}
.about-page-container .journey-step p{
  font-size:.85rem;
  color:#0a1f44;
  line-height:1.7;
  max-width:30ch;
  margin:0 auto;
}

/* ===== CTA ===== */
.about-page-container .cta{
  position:relative;
  background:linear-gradient(145deg,#ceedf8 0%,#ceedf8 45%,#009ba8 100%);
  color:var(--blue);
  text-align:center;
  padding:76px 0;
  overflow:hidden;
}
.about-page-container .cta::before{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(255,255,255,.32),transparent 75%);
  pointer-events:none;
}
.about-page-container .cta::after{
  content:"";
  position:absolute;
  top:0;
  left:15%;
  right:15%;
  height:1.5px;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.9) 40%,rgba(255,255,255,.9) 60%,transparent);
  pointer-events:none;
}
.about-page-container .cta .wrap{
  position:relative;
  z-index:1;
}
.about-page-container .cta h2{
  color:var(--blue);
  font-size:clamp(1.8rem,3.2vw,2.6rem);
  margin-bottom:16px;
}
.about-page-container .cta p{
  color:rgba(10, 31, 68, .78);
  max-width:52ch;
  margin:0 auto 30px;
  font-size:1rem;
}
.about-page-container .cta-row{
  display:flex;
  gap:12px;
  justify-content:center;
  flex-wrap:wrap;
}
.about-page-container .cta .btn-ghost{
  background:rgba(255,255,255,.55);
  color:var(--blue);
  border-color:rgba(10, 31, 68, .25);
  backdrop-filter:blur(8px);
}
.about-page-container .cta .btn-ghost:hover{
  background:rgba(255,255,255,.75);
  transform:translateY(-2px);
}
.about-page-container .cta .eyebrow{color:var(--teal)}

/* Responsive */
@media(max-width:880px){
  .about-page-container .ab-hero-grid{grid-template-columns:1fr}
  .about-page-container .ab-orbit-wrap{max-width:260px;margin-top:20px}
  .about-page-container .ab-stats{grid-template-columns:repeat(2,1fr)}
  .about-page-container .approach-grid{grid-template-columns:1fr}
  .about-page-container .mission-grid{grid-template-columns:repeat(2,1fr)}
  .about-page-container .journey-track{grid-template-columns:1fr;gap:46px}
  .about-page-container .journey-line{display:none}
}
@media(max-width:560px){
  .about-page-container .ab-hero{padding:44px 0 48px}
  .about-page-container .ab-blob-1{width:260px;height:260px;top:-110px;right:-90px}
  .about-page-container .ab-blob-2{width:200px;height:200px;bottom:-100px;left:-80px}
  .about-page-container .ab-orbit-wrap{max-width:200px}
  .about-page-container .ab-stats{grid-template-columns:1fr 1fr;gap:12px;margin-top:40px}
  .about-page-container .ab-stat{padding:18px 12px}
  .about-page-container .ab-stat .num{font-size:1.5rem}
  .about-page-container .ab-stat .lbl{font-size:.7rem}
  .about-page-container .approach-sec,
  .about-page-container .journey-sec{padding:50px 0}
  .about-page-container .approach-card{padding:28px 22px}
  .about-page-container .mission-sec{padding:54px 0}
  .about-page-container .mission-grid{grid-template-columns:1fr 1fr;gap:12px}
  .about-page-container .mission-stat{padding:18px 10px}
  .about-page-container .mission-stat .num{font-size:1.4rem}
  .about-page-container .mission-statement{font-size:1.15rem;margin-bottom:36px}
  .about-page-container .journey-num{width:56px;height:56px;font-size:1.1rem}
  .about-page-container .approach-card:hover{transform:none !important}
}
@media(min-width:1440px){
  :root{--maxw:1280px}
}
@media(prefers-reduced-motion:reduce){
  .about-page-container .reveal{opacity:1;transform:none}
  .about-page-container .orbit-spin,
  .about-page-container .orbit-line,
  .about-page-container .orbit-dot,
  .about-page-container .orbit-core,
  .about-page-container .orbit-pulse,
  .about-page-container .ab-blob{animation:none}
}
`;

export default function AboutUsClient() {
  return (
    <div className="about-page-container">
      <style dangerouslySetInnerHTML={{ __html: aboutStyles }} />

      {/* ABOUT HERO */}
      <section className="ab-hero" id="top">
        <div className="ab-blob ab-blob-1" />
        <div className="ab-blob ab-blob-2" />
        <div className="wrap">
          <div className="ab-hero-grid">
            <div className="ab-hero-text">
              <h1>Where careful research meets <em>gentle, honest care.</em></h1>
              <p className="lead">
                Dr. Ketan Patel and our team, at our autism clinic in Ahmedabad, support children with autism, ADHD, developmental delays, and pediatric neurological conditions — built on clinical research, and always offered alongside your child&apos;s medical team.
              </p>
            </div>
            <div className="ab-orbit-wrap">
              <svg viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(10, 31, 68, .12)" strokeWidth="1" strokeDasharray="4 7" />
                <g className="orbit-spin">
                  <path className="orbit-line d1" pathLength={100} d="M200,50 L200,350" stroke="#009ba8" strokeWidth="1.6" fill="none" opacity=".55" />
                  <path className="orbit-line d2" pathLength={100} d="M329.9,125 L70.1,275" stroke="#009ba8" strokeWidth="1.6" fill="none" opacity=".55" />
                  <path className="orbit-line d3" pathLength={100} d="M329.9,275 L70.1,125" stroke="#0a1f44" strokeWidth="1.6" fill="none" opacity=".4" />
                  <circle className="orbit-dot d1" cx="200" cy="50" r="9" fill="#009ba8" />
                  <circle className="orbit-dot d2" cx="329.9" cy="125" r="7" fill="#009ba8" />
                  <circle className="orbit-dot d3" cx="329.9" cy="275" r="9" fill="#0a1f44" />
                  <circle className="orbit-dot d4" cx="200" cy="350" r="7" fill="#009ba8" />
                  <circle className="orbit-dot d5" cx="70.1" cy="275" r="9" fill="#009ba8" />
                  <circle className="orbit-dot d6" cx="70.1" cy="125" r="7" fill="#0a1f44" />
                </g>
                <circle className="orbit-pulse" cx="200" cy="200" r="58" fill="none" stroke="#009ba8" strokeWidth="1.4" />
                <g className="orbit-core">
                  <circle cx="200" cy="200" r="46" fill="#ceedf8" stroke="rgba(10, 31, 68, .1)" strokeWidth="1" />
                  <path d="M200,222c-16-11-27-20-27-32a14 14 0 0 1 27-7 14 14 0 0 1 27 7c0 12-11 21-27 32Z" fill="#009ba8" />
                  <path d="M178,182h6v8h8v6h-8v8h-6v-8h-8v-6h8v-8Z" fill="#009ba8" />
                </g>
              </svg>
            </div>
          </div>

          <div className="ab-stats">
            <div className="ab-stat reveal d1">
              <div className="num" data-count="700" data-suffix="+">700+</div>
              <div className="lbl">WES &amp; Mitochondrial Sequencing reports</div>
            </div>
            <div className="ab-stat reveal d2">
              <div className="num" data-count="50" data-suffix="+">50+</div>
              <div className="lbl">CMA reports reviewed</div>
            </div>
            <div className="ab-stat reveal d3">
              <div className="num" data-count="7">7</div>
              <div className="lbl">International publications, BMC Springer</div>
            </div>
            <div className="ab-stat reveal d3">
              <div className="num" data-count="5" data-suffix="M+">5M+</div>
              <div className="lbl">Pages in our research &amp; case-study library</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="approach-sec sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Holistic healing, organised by what your child is facing.</h2>
            <p className="lead">
              We work continuously to find the right supportive care for conditions that are often misunderstood or considered hard to manage — from rare genetic differences to everyday childhood conditions.
            </p>
          </div>
          <div className="approach-grid">
            <div className="approach-card reveal d1">
              <div className="approach-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 3c0 6 10 6 10 12s-10 6-10 12M17 3c0 6-10 6-10 12s10 6 10 12" />
                </svg>
              </div>
              <p>
                Prader-Willi, Angelman and Rett syndromes, SHANK3 and CACNA1A-related conditions, and other uncommon genetic disorders identified through whole exome sequencing.
              </p>
            </div>
            <div className="approach-card reveal d2">
              <div className="approach-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2a4.5 4.5 0 0 0-4.42 5.37A4 4 0 0 0 4 11a4 4 0 0 0 2 7v1a2 2 0 0 0 4 0v-6a3 3 0 0 1 3-3V6a4 4 0 0 0-3.5-4Z" />
                  <path d="M14.5 2a4.5 4.5 0 0 1 4.42 5.37A4 4 0 0 1 20 11a4 4 0 0 1-2 7v1a2 2 0 0 1-4 0v-6" />
                </svg>
              </div>
              <p>
                Autism spectrum disorder, cerebral palsy, spastic diplegia, dyslexia and developmental delay — supported with individualised, family-centred homeopathic care.
              </p>
            </div>
            <div className="approach-card reveal d3">
              <div className="approach-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
                  <path d="M9.5 11.5 11 13l3.5-3.5" />
                </svg>
              </div>
              <p>
                Atopic dermatitis, allergic bronchitis, asthma and chronic skin conditions — gentle, ongoing support for the whole family, alongside your existing care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="mission-sec">
        <div className="wrap">
          <p className="mission-statement reveal d1">
            We are dedicated to advancing autism research and improving developmental support for children — turning <span>one doctor&apos;s database</span> into a resource the wider medical community can learn from.
          </p>
          <div className="mission-grid">
            <div className="mission-stat reveal d1">
              <div className="num" data-count="37" data-suffix="+">0</div>
              <div className="lbl">X-linked chromosome disorders documented</div>
            </div>
            <div className="mission-stat reveal d2">
              <div className="num" data-count="100" data-suffix="+">0</div>
              <div className="lbl">Inborn errors of metabolism studied</div>
            </div>
            <div className="mission-stat reveal d2">
              <div className="num" data-count="700" data-suffix="+">0</div>
              <div className="lbl">Whole exome sequencing reports / month</div>
            </div>
            <div className="mission-stat reveal d3">
              <div className="num" data-count="15">0</div>
              <div className="lbl">Specialised treatment areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALIZED CARE JOURNEY */}
      <section className="journey-sec sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Tailored to your child&apos;s journey, step by step.</h2>
            <p className="lead">
              Doctors and families from around the world are welcome to share their views and cases with us — you don&apos;t need to be a specialist to help us build a healthier future for children.
            </p>
          </div>
          <div className="journey-track">
            <div className="journey-line">
              <div className="journey-line-fill" />
            </div>
            <div className="journey-step reveal d1">
              <div className="journey-num">1</div>
              <p>
                Doctors, institutions and families from every walk of life share their cases and views with us — every perspective helps build a healthier picture of care.
              </p>
            </div>
            <div className="journey-step reveal d2">
              <div className="journey-num">2</div>
              <p>
                Built from Dr. Ketan Patel&apos;s own records — over 700 Whole Exome and Mitochondrial Sequencing reports, reviewed alongside individualised homeopathic care. A genetic test for autism, such as whole exome sequencing for an autistic child, is advised only when a doctor finds it clinically useful — it is not needed for every child.
              </p>
            </div>
            <div className="journey-step reveal d3">
              <div className="journey-num">3</div>
              <p>
                Patient complaints, treatments and outcomes from leading doctors worldwide, documented for honest, ongoing analysis and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="cta">
        <div className="wrap">
          <h2 className="reveal d1">Let&apos;s talk about your child.</h2>
          <p className="reveal d1">
            Book a consultation or share your child&apos;s reports securely. We&apos;ll listen carefully, be honest about how we can help, and work in step with your child&apos;s existing care.
          </p>
          <div className="cta-row reveal d2">
            <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </a>
            <a className="btn btn-ghost" href="tel:+919898005354">
              Call +91 98980 05354
            </a>
            <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">
              WhatsApp our team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
