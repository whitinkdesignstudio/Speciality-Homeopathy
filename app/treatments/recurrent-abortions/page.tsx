import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Recurrent Abortion Prevention & Homeopathy Treatment',
  description: 'Homeopathic support for recurrent abortions caused by chromosomal abnormalities or placental insufficiency — compassionate, holistic care for women at Speciality Homeopathy.',
  keywords: 'recurrent miscarriage homeopathy, recurrent abortion homeopathic treatment, spontaneous miscarriage homeopathy, placental insufficiency homeopathy, pregnancy loss natural treatment',
};

const pageStyles = `:root{
    --navy:#0b1f45;
    --navy-dark:#081533;
    --navy-panel:#102552;
    --navy-panel-2:#0e2049;
    --teal:#0e7c86;
    --teal-dark:#0a5c66;
    --blue:#2f7ee0;
    --blue-light:#eaf4fc;
    --blue-bg:#e3f0fa;
    --blue-bg-2:#d8ecf8;
    --cream:#faf6f0;
    --cream-card:#ffffff;
    --gold:#e0b34d;
    --ink:#0b1f45;
    --text-gray:#5b6b82;
    --text-gray-light:#8b97ab;
    --border-soft:#e3ecf5;
    --radius-lg:28px;
    --radius-md:18px;
    --radius-sm:12px;
    --shadow-card:0 15px 35px rgba(11,31,69,0.07);
    --shadow-soft:0 10px 25px rgba(11,31,69,0.06);
  }

  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{
    font-family:'Open Sans', sans-serif;
    color:var(--ink);
    background:#ffffff;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,h4{
    font-family:'Poppins', sans-serif;
    color:var(--navy);
    line-height:1.2;
    font-weight:700;
  }
  p{color:var(--text-gray);line-height:1.7;}
  a{text-decoration:none;color:inherit;}
  ul{list-style:none;}
  img{max-width:100%;display:block;}
  .container{max-width:1240px;margin:0 auto;padding:0 24px;}
  .eyebrow{
    font-family:'Poppins',sans-serif;
    font-weight:700;
    font-size:13px;
    letter-spacing:1.5px;
    text-transform:uppercase;
    color:var(--teal);
    display:inline-block;
    margin-bottom:14px;
  }
  .section-head{max-width:760px;margin:0 auto 56px;text-align:center;}
  .section-head p{font-size:16px;}
  .btn{
    display:inline-flex;align-items:center;gap:10px;
    font-family:'Poppins',sans-serif;font-weight:600;font-size:15px;
    padding:15px 28px;border-radius:50px;
    border:1.5px solid transparent;cursor:pointer;
    transition:transform .2s ease, box-shadow .2s ease;
    white-space:nowrap;
  }
  .btn:hover{transform:translateY(-2px);}
  .btn-primary{
    background:linear-gradient(135deg,var(--teal-dark),var(--navy));
    color:#fff;
    box-shadow:0 10px 25px rgba(10,92,102,0.35);
  }
  .btn-outline{
    background:#fff;
    color:var(--navy);
    border-color:#d7e3f0;
  }
  .btn-white{
    background:#fff;color:var(--navy);border-color:#e0e8f2;
  }

  /* ===================== PLACEHOLDER COMPONENT ===================== */
  .img-placeholder{
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    gap:8px;
    background:repeating-linear-gradient(135deg,#f2f6fa,#f2f6fa 10px,#e9eff6 10px,#e9eff6 20px);
    border:2px dashed #b9c8dc;
    border-radius:var(--radius-md);
    color:#7c8aa0;
    font-family:'Poppins',sans-serif;
    font-weight:600;
    font-size:13px;
    letter-spacing:.3px;
    text-align:center;
    width:100%;
    min-height:100%;
  }
  .img-placeholder svg{width:30px;height:30px;opacity:.55;}
  .img-placeholder span{padding:0 10px;}

  /* ===================== NAVBAR ===================== */
  .navbar-wrap{
    padding:18px 24px 0;
    background:linear-gradient(180deg,#cfe6f7 0%, #ffffff 100%);
  }
  .navbar{
    max-width:1400px;margin:0 auto;
    display:flex;align-items:center;justify-content:space-between;
    gap:16px;
    background:#fff;
    border-radius:50px;
    padding:10px 10px 10px 14px;
    box-shadow:0 12px 30px rgba(11,31,69,0.08);
    flex-wrap:nowrap;
  }
  .nav-brand{display:flex;align-items:center;gap:10px;padding-left:2px;flex-shrink:0;}
  .nav-logo-icon{
    width:38px;height:38px;border-radius:11px;
    background:linear-gradient(135deg,var(--teal-dark),var(--navy));
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;
  }
  .nav-logo-icon svg{width:18px;height:18px;stroke:#ffffff;fill:none;}
  .nav-brand-text{line-height:1.15;white-space:nowrap;}
  .nav-brand-text .name{
    font-family:'Poppins',sans-serif;font-weight:700;font-size:14.5px;color:var(--navy);
    display:block;
  }
  .nav-brand-text .doc{
    font-family:'Poppins',sans-serif;font-weight:600;font-size:9px;letter-spacing:.6px;
    color:var(--teal-dark);display:block;margin-top:1px;
  }
  .nav-links{display:flex;align-items:center;gap:17px;flex-wrap:nowrap;}
  .nav-links a{
    font-family:'Poppins',sans-serif;font-weight:500;font-size:12.3px;color:var(--navy);
    display:flex;align-items:center;gap:2px;white-space:nowrap;
  }
  .nav-links a:hover{color:var(--teal-dark);}
  .nav-links .caret{width:8px;height:8px;opacity:.6;flex-shrink:0;}
  .nav-cta{
    background:linear-gradient(135deg,var(--teal-dark),var(--navy));
    color:#fff;font-family:'Poppins',sans-serif;font-weight:600;font-size:12.5px;
    padding:10px 18px;border-radius:50px;white-space:nowrap;flex-shrink:0;
  }
  @media(max-width:1150px){
    .nav-links{display:none;}
  }

  /* ===================== HERO (Section 1) ===================== */
  .hero-section{padding:36px 24px 70px;}
  .hero-panel{
    max-width:1240px;margin:0 auto;
    background:linear-gradient(120deg,#e7f2fb 0%,#f3f9fd 55%,#ffffff 100%);
    border-radius:var(--radius-lg);
    display:grid;grid-template-columns:1.05fr 1fr;
    align-items:center;
    overflow:hidden;
    box-shadow:var(--shadow-card);
  }
  .hero-content{padding:56px 50px;}
  .breadcrumb{
    font-size:13.5px;color:#5b6b82;margin-bottom:22px;
    font-family:'Open Sans',sans-serif;
  }
  .breadcrumb span{margin:0 6px;color:#a9b6c7;}
  .hero-eyebrow{
    font-family:'Poppins',sans-serif;font-weight:700;font-size:12.5px;
    letter-spacing:1.5px;text-transform:uppercase;color:var(--teal-dark);
    margin-bottom:14px;
  }
  .hero-content h1{
    font-size:42px;margin-bottom:22px;
  }
  .hero-content h1 .accent{color:var(--teal);}
  .hero-content > p{font-size:16px;max-width:520px;margin-bottom:26px;}
  .info-box{
    display:flex;gap:12px;align-items:flex-start;
    background:#eef7fc;border:1px solid #cfe4f2;
    border-radius:14px;padding:16px 18px;margin-bottom:30px;max-width:520px;
  }
  .info-box svg{width:20px;height:20px;flex-shrink:0;margin-top:2px;stroke:var(--blue);}
  .info-box p{font-size:14px;color:#465369;margin:0;}
  .hero-buttons{display:flex;gap:14px;flex-wrap:wrap;}
  .hero-image-wrap{position:relative;height:100%;min-height:460px;}
  .hero-image-wrap .img-placeholder{
    position:absolute;inset:0;border-radius:0;border:2px dashed #a9c3da;
  }
  .hero-decor{position:absolute;font-size:22px;pointer-events:none;}

  @media(max-width:900px){
    .hero-panel{grid-template-columns:1fr;}
    .hero-image-wrap{min-height:320px;order:-1;}
    .hero-content{padding:40px 28px;}
    .hero-content h1{font-size:32px;}
  }

  /* ===================== FACTORS (Section 2) ===================== */
  .factors-section{padding:100px 24px 70px;background:#ffffff;}
  .factors-grid{
    max-width:1240px;margin:190px auto 0;
    display:grid;grid-template-columns:repeat(3,1fr);gap:34px;
  }
  .factor-card{
    position:relative;
    isolation:isolate;
    background:#fff;
    border:1px solid var(--border-soft);
    border-radius:22px;
    padding:110px 30px 34px;
    box-shadow:var(--shadow-card);
    text-align:center;
    overflow:visible;
    z-index:1;
  }
  .factor-baby{
    position:absolute;
    top:-182px;left:50%;transform:translateX(-50%);
    width:220px;height:200px;
    display:flex;align-items:flex-end;justify-content:center;
    z-index:2;
    pointer-events:none;
  }
  .factor-baby img{
    width:190px;
    height:auto;
    display:block;
    filter:drop-shadow(0 10px 8px rgba(20,45,80,.16));
  }
  .factor-doodle{
    position:absolute;
    z-index:1;
    pointer-events:none;
    color:var(--blue);
    opacity:.75;
  }
  .factor-doodle.heart-1{top:-140px;left:14px;width:20px;}
  .factor-doodle.star-1{top:-155px;right:10px;width:22px;}
  .factor-doodle.heart-2{top:-60px;right:22px;width:16px;}
  .factor-doodle.star-2{top:-70px;left:16px;width:14px;}
  .factor-number{
    position:absolute;top:18px;right:22px;
    font-family:'Poppins',sans-serif;font-weight:700;font-size:14px;
    color:#c3d3e6;
  }
  .factor-icon{
    width:64px;height:64px;border-radius:50%;
    background:var(--blue-light);
    display:flex;align-items:center;justify-content:center;
    margin:0 auto 20px;
  }
  .factor-icon svg{width:28px;height:28px;stroke:var(--blue);fill:none;stroke-width:1.6;}
  .factor-card h3{font-size:19px;margin-bottom:16px;}
  .factor-divider{
    display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:16px;
  }
  .factor-divider .line{width:26px;height:1px;background:#c9d8e8;}
  .factor-divider .heart{color:var(--blue);font-size:11px;}
  .factor-card p{font-size:14.5px;}

  @media(max-width:900px){
    .factors-grid{grid-template-columns:1fr;gap:190px;margin-top:190px;}
  }

  /* ===================== DARK OBJECTIVES (Section 3) ===================== */
  .objectives-section{
    padding:100px 24px;
    background:radial-gradient(ellipse at top, #14294f 0%, var(--navy-dark) 60%);
  }
  .objectives-section .eyebrow{color:#4fd1d9;}
  .objectives-section .section-head h2{color:#fff;}
  .objectives-section .section-head p{color:#a8b6cc;}
  .objectives-grid{
    max-width:1240px;margin:0 auto 30px;
    display:grid;grid-template-columns:repeat(3,1fr);gap:22px;
  }
  .obj-card{
    background:var(--navy-panel);
    border:1px solid #223361;
    border-radius:18px;
    padding:26px 24px;
    display:flex;gap:18px;
    align-items:flex-start;
  }
  .obj-num{
    flex-shrink:0;
    width:30px;height:30px;border-radius:50%;
    background:#173163;color:#dce7fb;
    font-family:'Poppins',sans-serif;font-weight:700;font-size:13px;
    display:flex;align-items:center;justify-content:center;
  }
  .obj-icon-ph{
    width:60px;height:60px;flex-shrink:0;
  }
  .obj-icon-ph .img-placeholder{
    background:#0c1d40;
    border:2px dashed #2a4172;
    color:#5f76a0;
    font-size:8px;
    border-radius:12px;
  }
  .obj-icon-ph .img-placeholder svg{width:16px;height:16px;}
  .obj-text h4{color:#fff;font-size:16.5px;margin-bottom:8px;}
  .obj-text .divider{width:26px;height:2px;background:var(--teal);margin-bottom:10px;}
  .obj-text p{color:#a8b6cc;font-size:13.8px;}
  .obj-card{flex-wrap:wrap;}
  .obj-card .obj-num{order:0;}
  .obj-card .obj-icon-ph{order:1;}
  .obj-card .obj-text{order:2;flex:1;min-width:150px;}

  .objectives-footer{
    max-width:900px;margin:0 auto;
    background:var(--navy-panel);
    border:1px solid #223361;
    border-radius:50px;
    padding:16px 30px;
    display:flex;align-items:center;gap:14px;
    justify-content:center;
    text-align:center;
  }
  .objectives-footer .check{
    width:34px;height:34px;border-radius:50%;
    background:#173163;display:flex;align-items:center;justify-content:center;flex-shrink:0;
  }
  .objectives-footer .check svg{width:16px;height:16px;stroke:#5fd0dc;}
  .objectives-footer p{color:#c7d3e6;font-size:14px;}

  @media(max-width:900px){
    .objectives-grid{grid-template-columns:1fr;}
  }

  /* ===================== CONDITIONS COVERED (Section 4) ===================== */
  .conditions-section{
    padding:110px 24px 100px;
    background:var(--cream);
    position:relative;
    overflow:hidden;
  }
  .conditions-inner{
    max-width:1150px;margin:0 auto;
    position:relative;
    min-height:720px;
  }

  /* decorative dashed arcs, left & right of the hammock */
  .cond-arc{
    position:absolute;
    width:380px;height:380px;
    border:1.5px dashed #d9cdae;
    border-radius:50%;
    z-index:0;
    pointer-events:none;
  }
  .cond-arc-left{ left:-210px; top:260px; }
  .cond-arc-right{ right:-210px; top:260px; }

  /* baby hammock — dead center, cropped to a clean centered square so it reads
     like a contained photo rather than a wide stretched banner */
  .center-baby{
    position:absolute;
    top:0px; left:50%;
    transform:translateX(-50%);
    width:430px;
    height:430px;
    border-radius:26px;
    overflow:hidden;
    z-index:1;
    pointer-events:none;
  }
  .center-baby img{
    width:100%;height:100%;
    object-fit:cover;
    object-position:center 42%;
    display:block;
  }

  /* hanging peg / thread above each card */
  .peg{
    position:absolute;top:-40px;left:50%;transform:translateX(-50%);
    width:1px;height:40px;background:#c9baa1;
  }
  .peg::before{
    content:'';position:absolute;top:-8px;left:50%;transform:translateX(-50%);
    width:16px;height:16px;border-radius:50%;background:#e7dcc6;border:1px solid #c9baa1;
  }

  .cond-card{
    position:absolute;
    width:300px;
    background:#fff;
    border-radius:18px;
    padding:26px 24px;
    box-shadow:0 18px 34px rgba(160,140,100,0.10);
    z-index:2;
  }

  /* precise placement matching reference layout */
  .cond-1{ top:15px;  left:95px; width:300px; }
  .cond-2{ top:20px;  right:80px; width:300px; }
  .cond-3{ top:300px; left:85px; width:270px; }
  .cond-4{ top:295px; right:95px; width:255px; }
  .cond-5{ top:405px; left:50%; transform:translateX(-50%); width:320px; }
  /* top cards hang from the hammock's own corner, not an independent ceiling point */
  .cond-1 .peg{ left:88%; top:-34px; }
  .cond-2 .peg{ left:12%; top:-34px; }
  .cond-3 .peg,
  .cond-4 .peg{ height:26px; top:-26px; }

  .cond-icon{
    width:46px;height:46px;border-radius:50%;
    background:#e2f2ee;display:flex;align-items:center;justify-content:center;margin-bottom:14px;
  }
  .cond-icon svg{width:20px;height:20px;stroke:var(--teal-dark);fill:none;stroke-width:1.6;}
  .cond-card h4{font-size:16px;margin-bottom:10px;}
  .cond-card .divider{width:24px;height:2px;background:var(--teal);margin-bottom:10px;}
  .cond-card p{font-size:13.6px;}

  @media(max-width:900px){
    .conditions-inner{min-height:0;}
    .cond-arc{display:none;}
    .center-baby{
      position:relative;top:auto;left:auto;transform:none;
      width:280px;height:280px;margin:0 auto 40px;
    }
    .center-baby img{width:100%;height:100%;}
    .cond-card{
      position:relative;top:auto;left:auto;right:auto;transform:none;
      width:100%;max-width:420px;margin:0 auto 60px;
    }
    .cond-5{width:100%;max-width:420px;}
  }

  /* ===================== CTA JOURNEY (Section 5) ===================== */
  .cta-section{padding:90px 0;background:#ffffff;}
  .cta-panel{
    max-width:1400px;margin:0 auto;
    background:linear-gradient(120deg,#eaf4fb 0%, #f6fbfe 60%);
    border-radius:0;
    display:grid;grid-template-columns:1fr 1fr;
    align-items:center;
    overflow:hidden;
  }
  .cta-content{padding:60px 70px;}
  .cta-badge{
    display:inline-flex;align-items:center;gap:10px;
    margin-bottom:26px;
  }
  .cta-badge .icon{
    width:40px;height:40px;border-radius:50%;background:#dfeefa;
    display:flex;align-items:center;justify-content:center;
  }
  .cta-badge .icon svg{width:18px;height:18px;stroke:var(--blue);fill:none;}
  .cta-badge span{
    font-family:'Poppins',sans-serif;font-weight:700;font-size:12.5px;
    letter-spacing:1.3px;text-transform:uppercase;color:var(--blue);
  }
  .cta-content h2{font-size:38px;margin-bottom:20px;}
  .cta-content h2 .accent{color:var(--blue);}
  .cta-underline{width:50px;height:3px;background:var(--blue);border-radius:4px;margin-bottom:22px;}
  .cta-content p{font-size:16px;max-width:440px;margin-bottom:30px;}
  .cta-buttons{display:flex;gap:12px;flex-wrap:wrap;}
  .cta-buttons .btn{padding:14px 22px;font-size:14px;}
  .cta-buttons .btn svg{width:16px;height:16px;}
  .cta-image-wrap{height:100%;min-height:480px;position:relative;}
  .cta-image-wrap .img-placeholder{
    position:absolute;inset:0;border-radius:0;border:2px dashed #a9c3da;
  }

  @media(max-width:900px){
    .cta-panel{grid-template-columns:1fr;}
    .cta-image-wrap{min-height:300px;order:-1;}
    .cta-content{padding:44px 30px;}
    .cta-content h2{font-size:30px;}
  }

  /* ===================== FOOTER ===================== */
  .site-footer{background:#00424f;padding:70px 24px 0;position:relative;}
  .disclaimer-box{
    max-width:1240px;margin:0 auto 50px;
    background:#0e2049;
    border:1px solid #223a68;
    border-radius:16px;
    padding:22px 26px;
  }
  .disclaimer-box p{color:#aebbd2;font-size:13.5px;line-height:1.8;}
  .disclaimer-box p b{color:#e6c878;font-weight:700;}
  .footer-grid{
    max-width:1240px;margin:0 auto;
    display:grid;grid-template-columns:1.3fr 1fr 1.2fr;gap:40px;
    padding-bottom:40px;
  }
  .footer-brand{display:flex;align-items:flex-start;gap:12px;margin-bottom:16px;}
  .footer-brand-text .name{
    font-family:'Poppins',sans-serif;font-weight:700;font-size:17px;color:#fff;display:block;
  }
  .footer-col p{color:#95a3bd;font-size:13.8px;margin-top:14px;max-width:280px;}
  .footer-social{display:flex;gap:20px;margin-top:20px;}
  .footer-social a{
    color:var(--gold);font-family:'Poppins',sans-serif;font-weight:600;font-size:13px;
  }
  .footer-heading{
    font-family:'Poppins',sans-serif;font-weight:700;font-size:12.5px;
    letter-spacing:1.3px;text-transform:uppercase;color:var(--gold);margin-bottom:20px;
  }
  .footer-col ul li{margin-bottom:13px;}
  .footer-col ul li a{color:#c3cee2;font-size:14px;}
  .footer-col ul li a:hover{color:#fff;}
  .footer-contact li{
    color:#c3cee2;font-size:14px;margin-bottom:16px;line-height:1.6;
  }
  .footer-bottom{
    max-width:1240px;margin:0 auto;
    border-top:1px solid #1c2f57;
    padding:22px 0;
    display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;
  }
  .footer-bottom p{color:#7c8bab;font-size:13px;}
  .footer-bottom-links{display:flex;gap:24px;flex-wrap:wrap;}
  .footer-bottom-links a{color:#7c8bab;font-size:13px;}
  .footer-bottom-links a:hover{color:#fff;}

  .floating-btns{
    position:fixed;right:24px;bottom:24px;
    display:flex;flex-direction:column;gap:14px;align-items:flex-end;
    z-index:50;
  }
  .fab{
    display:flex;align-items:center;gap:8px;
    font-family:'Poppins',sans-serif;font-weight:600;font-size:14px;
    padding:13px 20px;border-radius:50px;color:#fff;
    box-shadow:0 10px 25px rgba(0,0,0,0.25);
  }
  .fab svg{width:17px;height:17px;}
  .fab-whatsapp{background:#25d366;}
  .fab-upload{background:var(--gold);color:#3a2c05;}

  @media(max-width:800px){
    .footer-grid{grid-template-columns:1fr;}
  }`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      {/*  ============================================================  */}
{/*  NAVBAR  */}
{/*  ============================================================  */}


{/*  ============================================================  */}
{/*  SECTION 1 : HERO BANNER  */}
{/*  ============================================================  */}
<section className="hero-section">
  <div className="hero-panel">
    <div className="hero-content">
      <h1>Recurrent Abortions &mdash; individualised support for <span className="accent">reproductive health.</span></h1>
      <p>Recurrent abortion refers to three or more consecutive spontaneous miscarriages. Our individualised homeopathic approach is intended to support overall reproductive health alongside your gynecologist's ongoing antenatal care.</p>
      <div className="info-box">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="11"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <p>Supportive care only &mdash; please remain under regular antenatal care with your gynecologist throughout.</p>
      </div>
    </div>
    <div className="hero-image-wrap">
      {/*  PLACEHOLDER: Hero photo — mother holding baby on bed  */}
<img src="/images/recurrent-abortions/image-1.png" alt="Mother smiling with baby on bed" style={({"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover"} as React.CSSProperties)} loading="lazy" decoding="async" />
    </div>
  </div>
</section>

{/*  ============================================================  */}
{/*  SECTION 2 : FACTORS THAT MAY CONTRIBUTE  */}
{/*  ============================================================  */}
<section className="factors-section">
  <div className="section-head">
    <h2>Factors that may contribute</h2>
    <p>Several factors may contribute to recurrent miscarriage. While chromosomal abnormalities are a common cause of sporadic miscarriage, repeated losses can also occur in pregnancies with normal chromosomes.</p>
  </div>

  <div className="factors-grid">

    <div className="factor-card">
      <div className="factor-baby"><img src="/images/recurrent-abortions/image-2.png" alt="Smiling baby" loading="lazy" decoding="async" /></div><svg className="factor-doodle heart-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2.3 4.5 6 4.5c2 0 3.5 1.2 4 2.7.5-1.5 2-2.7 4-2.7 3.7 0 5.3 3.5 3.5 7C19 15.65 12 20 12 20z"/></svg><svg className="factor-doodle star-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.6L12 15.2 6.3 19.2l2.1-6.6L3 8.6h6.8z" strokeLinejoin="round"/></svg><svg className="factor-doodle heart-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2.3 4.5 6 4.5c2 0 3.5 1.2 4 2.7.5-1.5 2-2.7 4-2.7 3.7 0 5.3 3.5 3.5 7C19 15.65 12 20 12 20z"/></svg><svg className="factor-doodle star-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.6L12 15.2 6.3 19.2l2.1-6.6L3 8.6h6.8z" strokeLinejoin="round"/></svg>
      <div className="factor-number">01</div>
      <div className="factor-icon">
        <svg viewBox="0 0 24 24"><path d="M6 3c0 4 4 5 4 9s-4 5-4 9M18 3c0 4-4 5-4 9s4 5 4 9" strokeLinecap="round"/></svg>
      </div>
      <h3>Chromosomal Abnormalities</h3>
      <div className="factor-divider"><span className="line"></span><span className="heart">&#10084;</span><span className="line"></span></div>
      <p>Chromosomal abnormalities in either parent are among the most commonly identified causes of pregnancy loss.</p>
    </div>

    <div className="factor-card">
      <div className="factor-baby"><img src="/images/recurrent-abortions/image-3.png" alt="Smiling baby girl" loading="lazy" decoding="async" /></div><svg className="factor-doodle heart-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2.3 4.5 6 4.5c2 0 3.5 1.2 4 2.7.5-1.5 2-2.7 4-2.7 3.7 0 5.3 3.5 3.5 7C19 15.65 12 20 12 20z"/></svg><svg className="factor-doodle star-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.6L12 15.2 6.3 19.2l2.1-6.6L3 8.6h6.8z" strokeLinejoin="round"/></svg><svg className="factor-doodle heart-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2.3 4.5 6 4.5c2 0 3.5 1.2 4 2.7.5-1.5 2-2.7 4-2.7 3.7 0 5.3 3.5 3.5 7C19 15.65 12 20 12 20z"/></svg><svg className="factor-doodle star-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.6L12 15.2 6.3 19.2l2.1-6.6L3 8.6h6.8z" strokeLinejoin="round"/></svg>
      <div className="factor-number">02</div>
      <div className="factor-icon">
        <svg viewBox="0 0 24 24"><path d="M12 4c-3 0-6 3-6 7 0 4 3 7 3 9M12 4c3 0 6 3 6 7 0 4-3 7-3 9" strokeLinecap="round"/></svg>
      </div>
      <h3>Reproductive Organ Abnormalities</h3>
      <div className="factor-divider"><span className="line"></span><span className="heart">&#10084;</span><span className="line"></span></div>
      <p>Structural abnormalities of the maternal reproductive organs, including cervical incompetence, can contribute.</p>
    </div>

    <div className="factor-card">
      <div className="factor-baby"><img src="/images/recurrent-abortions/image-4.png" alt="Baby pointing up" loading="lazy" decoding="async" /></div><svg className="factor-doodle heart-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2.3 4.5 6 4.5c2 0 3.5 1.2 4 2.7.5-1.5 2-2.7 4-2.7 3.7 0 5.3 3.5 3.5 7C19 15.65 12 20 12 20z"/></svg><svg className="factor-doodle star-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.6L12 15.2 6.3 19.2l2.1-6.6L3 8.6h6.8z" strokeLinejoin="round"/></svg><svg className="factor-doodle heart-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2.3 4.5 6 4.5c2 0 3.5 1.2 4 2.7.5-1.5 2-2.7 4-2.7 3.7 0 5.3 3.5 3.5 7C19 15.65 12 20 12 20z"/></svg><svg className="factor-doodle star-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.6L12 15.2 6.3 19.2l2.1-6.6L3 8.6h6.8z" strokeLinejoin="round"/></svg>
      <div className="factor-number">03</div>
      <div className="factor-icon">
        <svg viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M12 10v4M10 12h4" strokeLinecap="round"/></svg>
      </div>
      <h3>Chronic Medical Conditions</h3>
      <div className="factor-divider"><span className="line"></span><span className="heart">&#10084;</span><span className="line"></span></div>
      <p>Conditions such as diabetes, kidney disease and hypothyroidism can raise the risk of recurrent miscarriage.</p>
    </div>

  </div>
</section>

{/*  ============================================================  */}
{/*  SECTION 3 : HOMEOPATHIC TREATMENT OBJECTIVES (DARK)  */}
{/*  ============================================================  */}
<section className="objectives-section">
  <div className="section-head">
    <h2>What our approach aims to support</h2>
    <p>Treatment is individualised according to the patient's condition, aiming to support factors that may contribute to recurrent pregnancy loss.</p>
  </div>

  <div className="objectives-grid">

    <div className="obj-card">
      <div className="obj-num">01</div>
      <div className="obj-icon-ph">
        <img src="/images/recurrent-abortions/image-5.png" alt="Uterine health calendar and medicine icon" style={({"width":"100%","height":"100%","objectFit":"cover","borderRadius":"12px","display":"block"} as React.CSSProperties)} loading="lazy" decoding="async" />
      </div>
      <div className="obj-text">
        <h4>Support Uterine Health</h4>
        <div className="divider"></div>
        <p>Aiming to support a healthy uterine environment for pregnancy.</p>
      </div>
    </div>

    <div className="obj-card">
      <div className="obj-num">02</div>
      <div className="obj-icon-ph">
        <img src="/images/recurrent-abortions/image-6.png" alt="Implantation timing clock and medicine icon" style={({"width":"100%","height":"100%","objectFit":"cover","borderRadius":"12px","display":"block"} as React.CSSProperties)} loading="lazy" decoding="async" />
      </div>
      <div className="obj-text">
        <h4>Promote Healthy Implantation</h4>
        <div className="divider"></div>
        <p>Supporting healthy implantation of the fertilised ovum.</p>
      </div>
    </div>

    <div className="obj-card">
      <div className="obj-num">03</div>
      <div className="obj-icon-ph">
        <img src="/images/recurrent-abortions/image-7.png" alt="Hormonal balance icon" style={({"width":"100%","height":"100%","objectFit":"cover","borderRadius":"12px","display":"block"} as React.CSSProperties)} loading="lazy" decoding="async" />
      </div>
      <div className="obj-text">
        <h4>Help Correct Hormonal Imbalance</h4>
        <div className="divider"></div>
        <p>Aiming to support balanced hormonal function relevant to pregnancy.</p>
      </div>
    </div>

    <div className="obj-card">
      <div className="obj-num">04</div>
      <div className="obj-icon-ph">
        <img src="/images/recurrent-abortions/image-8.png" alt="Placental function icon" style={({"width":"100%","height":"100%","objectFit":"cover","borderRadius":"12px","display":"block"} as React.CSSProperties)} loading="lazy" decoding="async" />
      </div>
      <div className="obj-text">
        <h4>Support Placental Function</h4>
        <div className="divider"></div>
        <p>Supporting healthy placental development and function.</p>
      </div>
    </div>

    <div className="obj-card">
      <div className="obj-num">05</div>
      <div className="obj-icon-ph">
        <img src="/images/recurrent-abortions/image-9.png" alt="Immunity shield icon" style={({"width":"100%","height":"100%","objectFit":"cover","borderRadius":"12px","display":"block"} as React.CSSProperties)} loading="lazy" decoding="async" />
      </div>
      <div className="obj-text">
        <h4>Improve Overall Immunity</h4>
        <div className="divider"></div>
        <p>Supporting general immunity throughout the course of treatment.</p>
      </div>
    </div>

    <div className="obj-card">
      <div className="obj-num">06</div>
      <div className="obj-icon-ph">
        <img src="/images/recurrent-abortions/image-10.png" alt="Hands holding a heart icon" style={({"width":"100%","height":"100%","objectFit":"cover","borderRadius":"12px","display":"block"} as React.CSSProperties)} loading="lazy" decoding="async" />
      </div>
      <div className="obj-text">
        <h4>Reduce Risk of Recurrent Abortions</h4>
        <div className="divider"></div>
        <p>Working toward reducing the overall risk of recurrent pregnancy loss.</p>
      </div>
    </div>

  </div>

  <div className="objectives-footer">
    <div className="check">
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <p>A comprehensive, individualised approach helps in prevention, early detection, and effective management of recurrent pregnancy loss.</p>
  </div>
</section>

{/*  ============================================================  */}
{/*  SECTION 4 : CONDITIONS COVERED  */}
{/*  ============================================================  */}
<section className="conditions-section">
  <div className="section-head">
    <h2>Concerns we support alongside your gynecologist</h2>
    <p>Typical treatment duration is 4&ndash;7 months, with patients advised to remain under regular antenatal care throughout pregnancy.</p>
  </div>

  <div className="conditions-inner">

    <div className="cond-arc cond-arc-left"></div>
    <div className="cond-arc cond-arc-right"></div>

    <div className="center-baby">
      {/*  PLACEHOLDER: hammock baby image  */}
<img src="/images/recurrent-abortions/image-11.webp" alt="Sleeping newborn baby in a knit hammock" loading="lazy" decoding="async" />
    </div>

    <div className="cond-card cond-1">
      <div className="peg"></div>
      <div className="cond-icon">
        <svg viewBox="0 0 24 24"><path d="M12 21s-6-4.35-9-8.5C1 8.5 3.5 5 7 5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 6 3.5 4 7.5-3 4.15-9 8.5-9 8.5z" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h4>Recurrent Miscarriage / Habitual Abortion</h4>
      <div className="divider"></div>
      <p>Three or more consecutive pregnancy losses, addressed with individualised supportive care.</p>
    </div>

    <div className="cond-card cond-2">
      <div className="peg"></div>
      <div className="cond-icon">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round"/></svg>
      </div>
      <h4>Hormonal Imbalance</h4>
      <div className="divider"></div>
      <p>Hormonal factors relevant to conception and pregnancy maintenance.</p>
    </div>

    <div className="cond-card cond-3">
      <div className="peg"></div>
      <div className="cond-icon">
        <svg viewBox="0 0 24 24"><path d="M12 4c-3 0-6 3-6 7 0 4 3 7 3 9M12 4c3 0 6 3 6 7 0 4-3 7-3 9" strokeLinecap="round"/></svg>
      </div>
      <h4>Placental Insufficiency</h4>
      <div className="divider"></div>
      <p>Concerns related to placental development and function during pregnancy.</p>
    </div>

    <div className="cond-card cond-4">
      <div className="peg"></div>
      <div className="cond-icon">
        <svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6z" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h4>PCOS / PCOD-Related Concerns</h4>
      <div className="divider"></div>
      <p>Reproductive health concerns linked to Polycystic Ovarian Syndrome.</p>
    </div>

    <div className="cond-card cond-5">
      <div className="peg"></div>
      <div className="cond-icon">
        <svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </div>
      <h4>Chromosomal Abnormality Considerations</h4>
      <div className="divider"></div>
      <p>Individualised support considered alongside genetic evaluation where relevant.</p>
    </div>

  </div>
</section>

{/*  ============================================================  */}
{/*  SECTION 5 : CTA — JOURNEY  */}
{/*  ============================================================  */}
<section className="cta-section">
  <div className="cta-panel">
    <div className="cta-content">
      <h2>Compassionate support through every step of <span className="accent">your journey.</span></h2>
      <div className="cta-underline"></div>
      <p>We listen, understand and guide you with care, clarity and confidence.</p>
      <div className="cta-buttons">
        <a href="#" className="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Book a Consultation
        </a>
        <a href="tel:+919898005354" className="btn btn-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call +91 98980 05354
        </a>
        <a href="#" className="btn btn-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          WhatsApp our team
        </a>
      </div>
    </div>
    <div className="cta-image-wrap">
      {/*  PLACEHOLDER: mother & newborn journey photo  */}
<img src="/images/recurrent-abortions/image-12.png" alt="Mother smiling at her newborn baby" style={({"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover"} as React.CSSProperties)} loading="lazy" decoding="async" />
    </div>
  </div>
</section>

{/*  ============================================================  */}
{/*  FOOTER  */}
{/*  ============================================================  */}
    </>
  );
}
