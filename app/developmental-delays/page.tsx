import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: "Global Developmental Delays &amp; Motor-Speech Support — Speciality Homeopathy",
  description: "",
};

const pageStyles = `:root{
    --navy:#0b1f45;
    --navy-dark:#081533;
    --navy-panel:#102552;
    --teal:#0e7c86;
    --teal-dark:#0a5c66;
    --blue:#2f7ee0;
    --blue-deep:#1a5fc4;
    --blue-light:#eaf4fc;
    --blue-bg:#e3f0fa;
    --gold:#e0b34d;
    --ink:#0b1f45;
    --text-gray:#5b6b82;
    --border-soft:#e3ecf5;
    --radius-lg:28px;
    --radius-md:18px;
    --shadow-card:0 15px 35px rgba(11,31,69,0.07);
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{font-family:'Open Sans', sans-serif;color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased;}
  h1,h2,h3,h4{font-family:'Poppins', sans-serif;color:var(--navy);line-height:1.2;font-weight:700;}
  p{color:var(--text-gray);line-height:1.7;}
  a{text-decoration:none;color:inherit;}
  ul{list-style:none;}
  img{max-width:100%;display:block;}
  .container{max-width:1240px;margin:0 auto;padding:0 24px;}
  .eyebrow{font-family:'Poppins',sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;color:var(--teal);display:inline-block;margin-bottom:14px;}
  .section-head{max-width:760px;margin:0 auto 56px;text-align:center;}
  .section-head p{font-size:16px;}
  .btn{display:inline-flex;align-items:center;gap:10px;font-family:'Poppins',sans-serif;font-weight:600;font-size:15px;padding:15px 28px;border-radius:50px;border:1.5px solid transparent;cursor:pointer;transition:transform .2s ease;white-space:nowrap;}
  .btn:hover{transform:translateY(-2px);}
  .btn-primary{background:linear-gradient(135deg,var(--teal-dark),var(--navy));color:#fff;box-shadow:0 10px 25px rgba(10,92,102,0.35);}
  .btn-blue{background:linear-gradient(135deg,var(--blue-deep),#123c8a);color:#fff;box-shadow:0 10px 25px rgba(26,95,196,0.3);}
  .btn-outline{background:#fff;color:var(--navy);border-color:#d7e3f0;}
  .btn-white{background:#fff;color:var(--navy);border-color:#e0e8f2;}

  /* ===================== PLACEHOLDER COMPONENT ===================== */
  .img-placeholder{
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;
    background:repeating-linear-gradient(135deg,#f2f6fa,#f2f6fa 10px,#e9eff6 10px,#e9eff6 20px);
    border:2px dashed #b9c8dc;border-radius:var(--radius-md);color:#7c8aa0;
    font-family:'Poppins',sans-serif;font-weight:600;font-size:13px;text-align:center;width:100%;min-height:100%;
  }
  .img-placeholder svg{width:30px;height:30px;opacity:.55;}
  .img-placeholder span{padding:0 10px;}

  /* ===================== NAVBAR ===================== */
  .navbar-wrap{padding:18px 24px 0;background:linear-gradient(180deg,#cfe6f7 0%, #ffffff 100%);overflow-x:auto;}
  .navbar{
    max-width:1240px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;
    background:#fff;border-radius:50px;padding:12px 14px;box-shadow:0 12px 30px rgba(11,31,69,0.08);
    white-space:nowrap;min-width:1500px;gap:24px;
  }
  .nav-brand{display:flex;align-items:center;gap:10px;padding-left:6px;flex-shrink:0;}
  .nav-logo-icon{width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,var(--teal-dark),var(--navy));display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .nav-logo-icon svg{width:19px;height:19px;stroke:#ffffff;fill:none;}
  .nav-brand-text{line-height:1.1;display:flex;align-items:baseline;gap:7px;white-space:nowrap;}
  .nav-brand-text .name{font-family:'Poppins',sans-serif;font-weight:700;font-size:15.5px;color:var(--navy);white-space:nowrap;}
  .nav-brand-text .doc{font-family:'Poppins',sans-serif;font-weight:600;font-size:9.5px;letter-spacing:.8px;color:var(--teal-dark);white-space:nowrap;}
  .nav-links{display:flex;align-items:center;gap:20px;flex-shrink:0;}
  .nav-links a{font-family:'Poppins',sans-serif;font-weight:500;font-size:13.5px;color:var(--navy);display:flex;align-items:center;gap:4px;white-space:nowrap;flex-shrink:0;}
  .nav-links a:hover{color:var(--teal-dark);}
  .nav-links .caret{width:9px;height:9px;opacity:.6;flex-shrink:0;}
  .nav-cta{background:linear-gradient(135deg,var(--teal-dark),var(--navy));color:#fff;font-family:'Poppins',sans-serif;font-weight:600;font-size:13.5px;padding:12px 22px;border-radius:50px;white-space:nowrap;flex-shrink:0;}
  @media(max-width:1000px){.navbar{min-width:0;}}

  /* ===================== HERO (Section 1) ===================== */
  .hero-section{padding:36px 24px 70px;}
  .hero-panel{
    max-width:1240px;margin:0 auto;background:linear-gradient(120deg,#e7f2fb 0%,#f3f9fd 55%,#ffffff 100%);
    border-radius:var(--radius-lg);display:grid;grid-template-columns:1.05fr 1fr;align-items:center;overflow:hidden;box-shadow:var(--shadow-card);
  }
  .hero-content{padding:56px 50px;}
  .hero-badge{
    display:inline-flex;align-items:center;gap:12px;background:#fff;border:1px solid #d7e6f2;
    border-radius:50px;padding:10px 22px;margin-bottom:28px;
  }
  .hero-badge .badge-icon{width:26px;height:26px;flex-shrink:0;}
  .hero-badge .badge-icon svg{width:100%;height:100%;stroke:var(--blue);fill:none;stroke-width:1.6;}
  .hero-badge span{font-family:'Poppins',sans-serif;font-weight:700;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--blue-deep);}
  .hero-badge .sep{color:#b9cbe0;font-weight:400;}
  .hero-badge .loc{color:#6f95c2;}
  .hero-content h1{font-size:40px;margin-bottom:20px;}
  .hero-content h1 .accent{color:var(--blue);display:block;}
  .hero-underline{width:60px;height:4px;background:var(--blue-deep);border-radius:4px;margin-bottom:22px;position:relative;}
  .hero-underline::after{content:'';position:absolute;right:-14px;top:50%;transform:translateY(-50%);width:6px;height:6px;border-radius:50%;background:var(--blue-deep);}
  .hero-content > p.lede{font-size:16.5px;max-width:480px;margin-bottom:26px;color:#3d4a60;font-weight:600;}
  .info-box{display:flex;gap:12px;align-items:flex-start;background:#eef7fc;border:1px solid #cfe4f2;border-radius:14px;padding:16px 18px;margin-bottom:30px;max-width:520px;}
  .info-box .info-icon{width:34px;height:34px;border-radius:50%;background:#dcedf9;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .info-box .info-icon svg{width:16px;height:16px;stroke:var(--blue-deep);}
  .info-box p{font-size:14px;color:#465369;margin:0;}
  .hero-buttons{display:flex;gap:14px;flex-wrap:wrap;}
  .hero-image-wrap{position:relative;height:100%;min-height:460px;}
  .hero-image-wrap .img-placeholder{position:absolute;inset:0;border-radius:0;border:2px dashed #a9c3da;}
  .hero-image-wrap img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}
  @media(max-width:900px){
    .hero-panel{grid-template-columns:1fr;}
    .hero-image-wrap{min-height:320px;order:-1;}
    .hero-content{padding:40px 28px;}
    .hero-content h1{font-size:30px;}
  }

  /* ===================== AT A GLANCE (Section 2 — dark) ===================== */
  .glance-section{padding:100px 24px 90px;background:radial-gradient(ellipse at top, #14294f 0%, var(--navy-dark) 60%);}
  .glance-eyebrow{
    display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:16px;
  }
  .glance-eyebrow .line{width:50px;height:1px;background:#3a4f7a;}
  .glance-eyebrow span{font-family:'Poppins',sans-serif;font-weight:700;font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);}
  .glance-section .section-head h2{color:#fff;font-size:36px;}
  .glance-section .section-head p{color:#a8b6cc;margin-top:10px;}
  .glance-divider{display:flex;align-items:center;justify-content:center;gap:8px;margin:20px auto 0;}
  .glance-divider .line{width:26px;height:1px;background:#3a4f7a;}
  .glance-divider .heart{color:var(--blue);font-size:11px;}

  .glance-stage{max-width:1000px;margin:320px auto 0;position:relative;}
  .glance-baby{
    position:absolute;top:-300px;left:50%;transform:translateX(-50%);
    width:520px;z-index:3;pointer-events:none;
  }
  .glance-baby .img-placeholder{border-radius:50% 50% 46% 46% / 55% 55% 45% 45%;font-size:10px;padding:6px;}
  .glance-baby img{width:100%;height:auto;object-fit:contain;display:block;}
  .glance-cards{display:grid;grid-template-columns:1fr 1fr;gap:26px;}
  .glance-peg{position:absolute;top:-64px;width:1px;height:64px;border-left:1.5px dashed #33447a;z-index:1;}
  .glance-peg.left{left:14%;}
  .glance-peg.right{right:14%;}
  .glance-peg::before{content:'';position:absolute;top:-7px;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;border:1.5px solid #4b5f92;background:#1a2c56;}
  .glance-peg::after{content:'';position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);width:11px;height:11px;border-radius:50%;border:1.5px solid #4b5f92;background:#1a2c56;}
  .glance-card{
    position:relative;background:linear-gradient(160deg,#132a54,#0f2145);
    border:1px solid #24365f;border-radius:22px;padding:56px 32px 34px;z-index:2;
  }
  .glance-icon{width:56px;height:56px;border-radius:16px;background:#1c3364;display:flex;align-items:center;justify-content:center;margin-bottom:22px;}
  .glance-icon svg{width:24px;height:24px;stroke:#8fc3ee;fill:none;stroke-width:1.6;}
  .glance-card h3{color:#fff;font-size:21px;margin-bottom:14px;}
  .glance-card .divider{width:30px;height:2px;background:var(--blue);margin-bottom:16px;position:relative;}
  .glance-card .divider::after{content:'';position:absolute;right:-10px;top:50%;transform:translateY(-50%);width:5px;height:5px;border-radius:50%;background:var(--blue);}
  .glance-card p{color:#a8b6cc;font-size:14.5px;}
  @media(max-width:800px){
    .glance-cards{grid-template-columns:1fr;}
    .glance-baby{width:170px;height:190px;top:-58px;}
    .glance-peg{display:none;}
  }

  /* ===================== CLOSER LOOK (Section 3) ===================== */
  .closer-section{padding:110px 24px;background:var(--blue-bg);position:relative;overflow:hidden;}
  .closer-section .eyebrow{color:var(--teal-dark);}
  .closer-stage{max-width:1240px;margin:0 auto;position:relative;display:flex;align-items:center;justify-content:center;gap:0;}
  .closer-character{width:170px;flex-shrink:0;display:flex;align-items:flex-end;height:320px;z-index:2;}
  .closer-character.left{margin-right:-34px;}
  .closer-character.right{margin-left:-34px;}
  .closer-character .img-placeholder{height:100%;border-radius:20px;font-size:11px;}
  .closer-character img{width:100%;height:auto;object-fit:contain;display:block;}
  .closer-cards{display:grid;grid-template-columns:1fr 1fr;gap:28px;max-width:900px;position:relative;z-index:1;}
  .closer-card{background:#fff;border-radius:22px;padding:38px 34px;box-shadow:var(--shadow-card);position:relative;}
  .closer-num{position:absolute;top:26px;right:30px;font-family:'Poppins',sans-serif;font-weight:700;font-size:15px;color:#c3d3e6;}
  .closer-icon{width:52px;height:52px;border-radius:14px;background:#e2f2ee;display:flex;align-items:center;justify-content:center;margin-bottom:22px;}
  .closer-icon svg{width:24px;height:24px;stroke:var(--teal-dark);fill:none;stroke-width:1.6;}
  .closer-card h3{font-size:20px;margin-bottom:16px;}
  .closer-card p{font-size:14.3px;margin-bottom:14px;}
  .closer-card p:last-child{margin-bottom:0;}
  @media(max-width:1100px){
    .closer-character{display:none;}
  }
  @media(max-width:800px){
    .closer-cards{grid-template-columns:1fr;}
  }

  /* ===================== CTA (Section 4) ===================== */
  .cta-section{padding:90px 0;background:#ffffff;}
  .cta-panel{max-width:1400px;margin:0 auto;background:linear-gradient(120deg,#eaf4fb 0%, #f6fbfe 60%);display:grid;grid-template-columns:1fr 1fr;align-items:center;overflow:hidden;}
  .cta-content{padding:60px 70px;}
  .cta-badge{display:inline-flex;align-items:center;gap:10px;margin-bottom:26px;}
  .cta-badge .icon{width:40px;height:40px;border-radius:50%;background:#dfeefa;display:flex;align-items:center;justify-content:center;}
  .cta-badge .icon svg{width:18px;height:18px;stroke:var(--blue);fill:none;}
  .cta-badge span{font-family:'Poppins',sans-serif;font-weight:700;font-size:12.5px;letter-spacing:1.3px;text-transform:uppercase;color:var(--blue);}
  .cta-content h2{font-size:38px;margin-bottom:20px;}
  .cta-content h2 .accent{color:var(--blue);}
  .cta-underline{width:50px;height:3px;background:var(--blue);border-radius:4px;margin-bottom:22px;}
  .cta-content p{font-size:16px;max-width:440px;margin-bottom:30px;}
  .cta-buttons{display:flex;gap:12px;flex-wrap:wrap;}
  .cta-buttons .btn{padding:14px 22px;font-size:14px;}
  .cta-buttons .btn svg{width:16px;height:16px;}
  .cta-image-wrap{height:100%;min-height:480px;position:relative;}
  .cta-image-wrap .img-placeholder{position:absolute;inset:0;border-radius:0;border:2px dashed #a9c3da;}
  .cta-image-wrap img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}
  @media(max-width:900px){
    .cta-panel{grid-template-columns:1fr;}
    .cta-image-wrap{min-height:300px;order:-1;}
    .cta-content{padding:44px 30px;}
    .cta-content h2{font-size:30px;}
  }

  /* ===================== FOOTER ===================== */
  .site-footer{background:#00424f;padding:70px 24px 0;position:relative;}
  .disclaimer-box{max-width:1240px;margin:0 auto 50px;background:#0e2049;border:1px solid #223a68;border-radius:16px;padding:22px 26px;}
  .disclaimer-box p{color:#aebbd2;font-size:13.5px;line-height:1.8;}
  .disclaimer-box p b{color:#e6c878;font-weight:700;}
  .footer-grid{max-width:1240px;margin:0 auto;display:grid;grid-template-columns:1.3fr 1fr 1.2fr;gap:40px;padding-bottom:40px;}
  .footer-brand{display:flex;align-items:flex-start;gap:12px;margin-bottom:16px;}
  .footer-brand-text .name{font-family:'Poppins',sans-serif;font-weight:700;font-size:17px;color:#fff;display:block;}
  .footer-col p{color:#95a3bd;font-size:13.8px;margin-top:14px;max-width:280px;}
  .footer-social{display:flex;gap:20px;margin-top:20px;}
  .footer-social a{color:var(--gold);font-family:'Poppins',sans-serif;font-weight:600;font-size:13px;}
  .footer-heading{font-family:'Poppins',sans-serif;font-weight:700;font-size:12.5px;letter-spacing:1.3px;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
  .footer-col ul li{margin-bottom:13px;}
  .footer-col ul li a{color:#c3cee2;font-size:14px;}
  .footer-col ul li a:hover{color:#fff;}
  .footer-contact li{color:#c3cee2;font-size:14px;margin-bottom:16px;line-height:1.6;}
  .footer-bottom{max-width:1240px;margin:0 auto;border-top:1px solid #1c2f57;padding:22px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
  .footer-bottom p{color:#7c8bab;font-size:13px;}
  .footer-bottom-links{display:flex;gap:24px;flex-wrap:wrap;}
  .footer-bottom-links a{color:#7c8bab;font-size:13px;}
  .footer-bottom-links a:hover{color:#fff;}
  .floating-btns{position:fixed;right:24px;bottom:24px;display:flex;flex-direction:column;gap:14px;align-items:flex-end;z-index:50;}
  .fab{display:flex;align-items:center;gap:8px;font-family:'Poppins',sans-serif;font-weight:600;font-size:14px;padding:13px 20px;border-radius:50px;color:#fff;box-shadow:0 10px 25px rgba(0,0,0,0.25);}
  .fab svg{width:17px;height:17px;}
  .fab-whatsapp{background:#25d366;}
  .fab-upload{background:var(--gold);color:#3a2c05;}
  @media(max-width:800px){.footer-grid{grid-template-columns:1fr;}}`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      {/*  ============================================================  */}
{/*  NAVBAR  */}
{/*  ============================================================  */}


{/*  ============================================================  */}
{/*  SECTION 1 : HERO  */}
{/*  ============================================================  */}
<section className="hero-section">
  <div className="hero-panel">
    <div className="hero-content">
      <h1>Global Developmental Delays &amp;<span className="accent">Motor-Speech Support</span></h1>
      <div className="hero-underline"></div>
      <p className="lede">Early understanding. Personalised care. Better progress for your child.</p>
      <div className="info-box">
        <div className="info-icon">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
        </div>
        <p>Supportive &amp; complementary care — never a replacement for your child's medical team.</p>
      </div>
    </div>
    <div className="hero-image-wrap">
      <img src="/images/developmental-delays/image-1.webp" alt="Baby lying on tummy smiling, teddy bear beside" loading="lazy" decoding="async" />
    </div>
  </div>
</section>

{/*  ============================================================  */}
{/*  SECTION 2 : AT A GLANCE (DARK)  */}
{/*  ============================================================  */}
<section className="glance-section">
  <div className="section-head">
    <h2>Two areas we're often asked about</h2>
    <p>A quick look before the detail below.</p>
    <div className="glance-divider"><span className="line"></span><span className="heart">&#10084;</span><span className="line"></span></div>
  </div>

  <div className="glance-stage">
    <div className="glance-baby">
      <img src="/images/developmental-delays/image-2.webp" alt="Smiling baby peeking over the two cards" loading="lazy" decoding="async" />
    </div>

    <div className="glance-peg left"></div>
    <div className="glance-peg right"></div>

    <div className="glance-cards">
      <div className="glance-card">
        <div className="glance-icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3>Global Developmental Delays</h3>
        <div className="divider"></div>
        <p>Delays in multiple areas of development, including motor skills, speech, language, learning, communication and social development.</p>
      </div>

      <div className="glance-card">
        <div className="glance-icon">
          <svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H8L4 21l1-4a8.4 8.4 0 1 1 16-5.5z" strokeLinejoin="round"/><circle cx="8.5" cy="12" r=".6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none"/><circle cx="15.5" cy="12" r=".6" fill="currentColor" stroke="none"/></svg>
        </div>
        <h3>Motor &amp; Speech Delays</h3>
        <div className="divider"></div>
        <p>Personalized developmental support to improve movement, coordination, communication and speech-related skills.</p>
      </div>
    </div>
  </div>
</section>

{/*  ============================================================  */}
{/*  SECTION 3 : A CLOSER LOOK  */}
{/*  ============================================================  */}
<section className="closer-section">
  <div className="section-head">
    <h2>A closer look, in everyday language</h2>
    <p>Every child develops at a different pace. Here's what these two commonly-discussed areas can involve, and why individual assessment matters.</p>
  </div>

  <div className="closer-stage">
    <div className="closer-character left">
      <img src="/images/developmental-delays/image-3.webp" alt="Cartoon illustration of a boy peeking beside the card" loading="lazy" decoding="async" />
    </div>

    <div className="closer-cards">
      <div className="closer-card">
        <div className="closer-num">01</div>
        <div className="closer-icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3>Global Developmental Delays</h3>
        <p>In Global Developmental Delay (GDD), a child's development can be slower than expected across more than one area. This can include delays related to motor skills, speech and language, communication, learning, social development and daily activities.</p>
        <p>Every child develops at a different pace. That's why a proper assessment of the child's cognitive level, language ability, communication skills, social development, play behaviour and overall developmental progress is important. Associated medical conditions, including genetic, metabolic and mitochondrial disorders, can also be evaluated.</p>
      </div>

      <div className="closer-card">
        <div className="closer-num">02</div>
        <div className="closer-icon">
          <svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H8L4 21l1-4a8.4 8.4 0 1 1 16-5.5z" strokeLinejoin="round"/></svg>
        </div>
        <h3>Motor &amp; Speech Delays</h3>
        <p>Motor and speech delays can affect a child's movement, coordination, communication and language development. In motor delay, skills such as sitting, crawling, walking, balance or coordination may take more time to develop than expected for the child's age. In speech delay, a child may find it difficult to develop words, understand language, or express their needs and emotions.</p>
        <p>To understand a child's individual developmental needs, a detailed assessment of cognitive ability, language skills, communication, social interaction and overall behaviour is helpful. Personalised support can focus on improving motor development, communication skills and speech development.</p>
      </div>
    </div>

    <div className="closer-character right">
      <img src="/images/developmental-delays/image-4.webp" alt="Cartoon illustration of a girl peeking beside the card" loading="lazy" decoding="async" />
    </div>
  </div>
</section>

{/*  ============================================================  */}
{/*  SECTION 4 : CTA — LET'S TALK  */}
{/*  ============================================================  */}
<section className="cta-section">
  <div className="cta-panel">
    <div className="cta-content">
      <h2>A calmer, more supported <span className="accent">path forward.</span></h2>
      <div className="cta-underline"></div>
      <p>Book a consultation or share your child's reports securely. We'll listen carefully, be honest about how we can help, and work in step with your child's existing care team.</p>
      <div className="cta-buttons">
        <Link href="/contact" className="btn btn-blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Book a Consultation
        </Link>
        <a href="tel:+919898005354" className="btn btn-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call +91 98980 05354
        </a>
        <a href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer" className="btn btn-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          WhatsApp our team
        </a>
      </div>
    </div>
    <div className="cta-image-wrap">
      <img src="/images/developmental-delays/image-5.webp" alt="Sleeping baby wrapped in a blue blanket" loading="lazy" decoding="async" />
    </div>
  </div>
</section>

{/*  ============================================================  */}
{/*  FOOTER  */}
{/*  ============================================================  */}


<div className="floating-btns">
  <a href="#" className="fab fab-whatsapp">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.86 9.86 0 0 0 4.62 1.15h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z"/></svg>
    WhatsApp
  </a>
  <a href="#" className="fab fab-upload">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
    Upload Reports
  </a>
</div>
    </>
  );
}
