import type { Metadata } from 'next';
import HeroBannerImage from '@/components/HeroBannerImage';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dyslexia, Dyscalculia & Learning Difficulties Treatment ',
  description: 'Learn about dyslexia, reading challenges and learning support strategies with Dr. Ketan Patel, Vastrapur, Ahmedabad.',
  keywords: [
    'Dyslexia',
    'Dyscalculia',
    'Dysgraphia',
    'Specific Learning Difficulties',
    'Specific Learning Disorder',
    'Slow Learner',
    'Dyslexic Child',
    'Dyslexia Treatment',
    'Dyscalculia in Children',
    'Dysgraphia in Children',
    'Visual Processing Difficulties',
    'Poor Academic Performance',
    'Difficulty in Studies',
    'Poor Concentration',
    'Lack of Focus',
    'Concentration Problems',
    'Focus Disorder',
    'Calculation Difficulties',
    'Mathematics Learning Difficulties',
    'Weak in Mathematics',
    'Poor Mathematical Skills',
    'Writing Difficulties',
    'Mistakes in Writing',
    'Reading Difficulties',
    'Reading Problems',
    'Mirror Image Writing',
    'Letter Reversal',
    'Omitting Words in Sentences',
    'Difficulty Reading Sentences',
    'Learning Difficulties in Children',
    'Child Learning Problems',
    'Educational Rehabilitation',
    'Pediatric Learning Disorders',
    'Dyslexia in Children',
    'Dyslexia Treatment in India',
    'Homeopathy for Dyslexia',
    'Homeopathy for Learning Difficulties',
    'Homeopathic Treatment for Dyslexia',
    'Homeopathic Remedies for Dyslexia',
    'Homeopathy for Dyscalculia',
    'Homeopathy for Dysgraphia',
    'Homeopathy for Concentration Problems',
    'Homeopathy for Poor Focus',
    'Homeopathy for Slow Learners',
    'Homeopathic Care for Learning Disorders',
  ].join(', '),
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
  .lead{font-size:1.02rem;color:#555;max-width:62ch}

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

  /* hero text bar */
  .hero-intro-bar{background:#ffffff;border-bottom:1px solid #e1edf6;padding:36px 0}
  .hero-intro-bar h1{font-size:clamp(1.8rem,3vw,2.4rem);margin-bottom:12px;color:var(--blue)}
  .hero-intro-bar p{font-size:1.02rem;color:#4b6382;max-width:80ch;line-height:1.75;margin:0}

  /* sections */
  .sec{padding:84px 0}
  .sec-head{max-width:760px;margin:0 auto 46px;text-align:center}
  .sec-head h2{font-size:clamp(1.6rem,2.8vw,2.25rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto}
  .reveal{opacity:1;transform:none}
  .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}

  /* SECTION 1 — types (pillar-style white cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%);position:relative}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:86px}
  .type-card{position:relative;border-radius:26px;overflow:visible;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;padding-top:80px;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .card-mint{background:linear-gradient(180deg,#e7f5ee 0%,#f3faf6 100%)}
  .card-pink{background:linear-gradient(180deg,#fbeff2 0%,#fdf6f8 100%)}
  .card-cream{background:linear-gradient(180deg,#fdf3e2 0%,#fdf8ee 100%)}
  .type-char{position:absolute;top:-78px;left:50%;transform:translateX(-50%);width:168px;height:168px;z-index:2;filter:drop-shadow(0 14px 20px rgba(20,50,90,.16))}
  .type-char img{width:100%;height:100%;object-fit:contain;border-radius:18px}
  .type-deco{position:absolute;width:20px;height:20px;opacity:.5;z-index:1}
  .type-deco.tl{top:26px;left:24px;color:#5aa98f}
  .type-deco.tr{top:26px;right:26px;color:#d98fa3}
  .card-cream .type-deco{color:#cfa457}
  .type-body{flex:1;padding:6px 30px 34px;text-align:center;position:relative;z-index:1}
  .type-body h3{font-size:1.15rem;margin-bottom:12px}
  .type-body p{font-size:.88rem;color:#555;line-height:1.7}
  .type-puzzle{position:absolute;bottom:14px;right:16px;width:52px;height:52px;opacity:.16;z-index:0}
  .card-mint .type-puzzle{color:#3f9c78}
  .card-pink .type-puzzle{color:#d17b95}
  .card-cream .type-puzzle{color:var(--gold)}

  /* SECTION 2 — neuro conditions (dark frosted cards) */
  .neuro{background:var(--blue);color:var(--ivory);position:relative;overflow:hidden}
  .neuro .wrap{position:relative;z-index:2}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-visual-wrap{position:relative}
  .neuro-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;position:relative;z-index:2}
  .neuro-card{position:relative;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:28px 22px 24px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;display:flex;flex-direction:column;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .neuro-card:hover{transform:translateY(-7px) scale(1.012);border-color:rgba(255,255,255,.55);box-shadow:0 22px 52px -12px rgba(10,50,120,.4)}
  .neuro-card .nico{width:46px;height:46px;border-radius:13px;background:rgba(255,255,255,.12);display:grid;place-items:center;margin-bottom:16px;color:#BAE0F3}
  .neuro-card .nico svg{width:22px;height:22px}
  .neuro-card h4{color:#fff;font-size:1.05rem;margin-bottom:10px}
  .nico-rule{width:26px;height:2px;background:var(--teal);border-radius:2px;margin-bottom:12px}
  .neuro-card p{font-size:.82rem;color:rgba(220,240,252,.85);line-height:1.6;flex:1}
  .therapy-row{display:flex;align-items:center;gap:10px;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.16)}
  .therapy-ico{width:34px;height:34px;border-radius:10px;background:rgba(200,169,107,.16);display:grid;place-items:center;color:var(--gold);flex:0 0 auto}
  .therapy-ico svg{width:17px;height:17px}
  .therapy-row div b{display:block;font-family:'Open Sans',sans-serif;font-size:.72rem;font-weight:700;color:var(--gold);letter-spacing:.02em}
  .therapy-row div span{display:block;font-size:.72rem;color:rgba(220,240,252,.7);margin-top:1px}

  /* SECTION 3 — behaviour & learning strategies */
  .behaviour{background:#fff}
  .beh-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:16px 20px;margin-top:110px}
  .beh-card:nth-child(1){grid-column:1 / 3}
  .beh-card:nth-child(2){grid-column:3 / 5}
  .beh-card:nth-child(3){grid-column:5 / 7}
  .beh-card:nth-child(4){grid-column:2 / 4}
  .beh-card:nth-child(5){grid-column:4 / 6}
  .beh-card{position:relative;display:flex;align-items:flex-start;gap:18px;padding:46px 22px 24px;border:1px solid var(--line);border-radius:18px;background:var(--ivory);box-shadow:0 10px 24px -16px rgba(10,31,68,.18);transition:transform .3s var(--ease),box-shadow .3s var(--ease)}
  .beh-card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(10,31,68,.25)}
  .beh-char{position:absolute;top:-128px;left:50%;transform:translateX(-50%);width:150px;height:168px;z-index:2;filter:drop-shadow(0 14px 18px rgba(10,31,68,.18))}
  .beh-char img{width:100%;height:100%;object-fit:contain}
  .beh-icon{width:48px;height:48px;border-radius:14px;background:var(--teal-10);display:grid;place-items:center;flex:0 0 auto;color:var(--teal);transition:transform .35s var(--ease);position:relative;z-index:1}
  .beh-card:hover .beh-icon{transform:scale(1.08) rotate(-3deg)}
  .beh-icon svg{width:22px;height:22px}
  .beh-icon-mint{background:rgba(90,169,143,.14);color:#3f9c78}
  .beh-icon-gold{background:rgba(200,169,107,.16);color:var(--gold)}
  .beh-icon-blue{background:rgba(10,150,199,.12);color:#0a4a6e}
  .beh-icon-lav{background:rgba(150,120,200,.14);color:#8a6bc4}
  .beh-text h4{font-size:1.02rem;margin-bottom:6px}
  .beh-text p{font-size:.85rem;color:#666;line-height:1.65;margin:0}

  /* SECTION 4 — HOMEOPATHIC CARE & REHABILITATION */
  .homeo-care-sec{background:linear-gradient(160deg,#f0f8fa 0%,#e4f3f7 100%)}
  .homeo-care-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
  .homeo-care-card{background:#ffffff;border:1px solid #ddecfa;border-radius:22px;padding:32px 24px;box-shadow:0 12px 30px -16px rgba(10,31,68,.12);transition:transform .35s var(--ease)}
  .homeo-care-card:hover{transform:translateY(-5px);border-color:var(--teal)}
  .homeo-care-card h3{font-size:1.15rem;color:var(--blue);margin-bottom:12px}
  .homeo-care-card p{font-size:.88rem;color:#4b6382;line-height:1.7}

  /* SECTION 5 — KEYWORDS & CLINICAL GLOSSARY INDEX */
  .glossary-sec{background:#ffffff;border-top:1px solid #e2edf6}
  .glossary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px}
  .glossary-box{background:#f8fbfe;border:1px solid #ddecfa;border-radius:14px;padding:20px}
  .glossary-box h4{font-size:.92rem;color:var(--blue);margin-bottom:8px}
  .glossary-box p{font-size:.82rem;color:#5a718d;margin:0;line-height:1.55}

  /* CTA */
  .cta{position:relative;background:linear-gradient(145deg,#ceedf8 0%,#BAE0F3 45%,#a8d6ee 100%);color:var(--blue);text-align:center;padding:90px 0;overflow:hidden}
  .cta::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(255,255,255,.32),transparent 75%);pointer-events:none}
  .cta::after{content:"";position:absolute;top:0;left:15%;right:15%;height:1.5px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9) 40%,rgba(255,255,255,.9) 60%,transparent);pointer-events:none}
  .cta .wrap{position:relative;z-index:1;max-width:720px}
  .cta h2{color:var(--blue);font-size:clamp(1.7rem,3.2vw,2.4rem);margin-bottom:16px}
  .cta p{color:rgba(10,31,68,.78);max-width:54ch;margin:0 auto 30px;font-size:1rem;line-height:1.7}
  .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
  .cta .btn-ghost{background:rgba(255,255,255,.55);color:var(--blue);border-color:rgba(10,31,68,.25);backdrop-filter:blur(8px)}
  .cta .btn-ghost:hover{background:rgba(255,255,255,.75);transform:translateY(-2px)}

  @media(max-width:980px){
    .type-grid{grid-template-columns:1fr;margin-top:60px}
    .neuro-grid{grid-template-columns:repeat(2,1fr)}
    .homeo-care-grid{grid-template-columns:1fr}
  }
  @media(max-width:680px){
    .neuro-grid{grid-template-columns:1fr}
    .beh-grid{grid-template-columns:1fr;margin-top:90px}
    .beh-card{grid-column:1 / -1 !important}
    .beh-char{width:100px;height:112px;top:-92px}
    .sec{padding:60px 0}
  }
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}`;

export default function DyslexiaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO BANNER */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <HeroBannerImage src="/images/dyslexia/hero-banner.png" alt="Dyslexia &amp; Learning Difficulty Support Hero Banner" />
        </div>
      </section>

      {/* HERO INTRO BAR */}
      <section className="hero-intro-bar">
        <div className="wrap">
          <h1>Dyslexia Treatment, Learning Difficulties &amp; Educational Rehabilitation in India</h1>
          <p>
            Compassionate, research-grounded homeopathic treatment for dyslexia, dyscalculia, dysgraphia, and pediatric learning disorders. Helping dyslexic children, slow learners, and students struggling with poor concentration, reading problems, and calculation difficulties unlock their true cognitive potential.
          </p>
        </div>
      </section>

      {/* SECTION 1 — SPECIFIC LEARNING DIFFICULTIES (DYSLEXIA, DYSCALCULIA, DYSGRAPHIA) */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Specific Learning Difficulties &amp; Disorders in Children</h2>
            <p className="lead">
              Specific Learning Disorder (SLD) is a neurodevelopmental variation. Understanding which difficulties show up alongside Dyslexia in children helps design an individualized roadmap around your child, not a label.
            </p>
          </div>
          <div className="type-grid">
            {/* Card 1: Dyscalculia */}
            <div className="type-card card-mint reveal d1">
              <div className="type-char">
                <img src="https://static.wixstatic.com/media/66422a_ed3ae9597dfe407e97324932750d201a~mv2.png" alt="Child illustration — Dyscalculia in Children" loading="lazy" decoding="async" />
              </div>
              <div className="type-deco tl" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2 9.5 8 2 9l6 5.2L6.5 22 12 18l5.5 4-1.5-7.8L22 9l-7.5-1Z" />
                </svg>
              </div>
              <div className="type-body">
                <h3>Dyscalculia in Children</h3>
                <p>
                  <strong>Calculation difficulties and mathematics learning difficulties:</strong> Children who are weak in mathematics often struggle with number sequences, basic arithmetic, remembering multiplication tables, and understanding math symbols despite normal intellect. Homeopathy for dyscalculia supports numerical reasoning, working memory, and poor mathematical skills.
                </p>
              </div>
              <div className="type-puzzle" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="currentColor">
                  <path d="M22 4h9a4 4 0 0 1 0 8 3 3 0 1 0 0 6 4 4 0 0 1 0 8h-9v-8a3 3 0 1 0-6 0v8H4v-9a4 4 0 0 1 8 0 3 3 0 1 0 6 0 4 4 0 0 1-8 0v-9h12Z" />
                </svg>
              </div>
            </div>

            {/* Card 2: Dysgraphia */}
            <div className="type-card card-pink reveal d2">
              <div className="type-char">
                <img src="https://static.wixstatic.com/media/66422a_7adaa7f4c9284ad38ead74ef95055684~mv2.png" alt="Child illustration — Dysgraphia in Children" loading="lazy" decoding="async" />
              </div>
              <div className="type-deco tr" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21s-6.7-4.35-9.3-9C1 8.7 2 5 5.4 5c1.9 0 3.2 1.1 4 2.2C10.2 5.9 11.6 5 13.5 5 17 5 18 8.6 16.3 12c-2.6 4.6-4.3 9-4.3 9Z" />
                </svg>
              </div>
              <div className="type-body">
                <h3>Dysgraphia in Children</h3>
                <p>
                  <strong>Writing difficulties and mistakes in writing:</strong> Marked by irregular letter sizing, painful pencil grip, mirror image writing, letter reversal (confusing b/d or p/q), and omitting words in sentences. Homeopathy for dysgraphia enhances fine-motor planning, hand-eye visual tracking, and cognitive-spatial writing clarity.
                </p>
              </div>
              <div className="type-puzzle" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="currentColor">
                  <path d="M22 4h9a4 4 0 0 1 0 8 3 3 0 1 0 0 6 4 4 0 0 1 0 8h-9v-8a3 3 0 1 0-6 0v8H4v-9a4 4 0 0 1 8 0 3 3 0 1 0 6 0 4 4 0 0 1-8 0v-9h12Z" />
                </svg>
              </div>
            </div>

            {/* Card 3: Dyslexia */}
            <div className="type-card card-cream reveal d3">
              <div className="type-char">
                <img src="https://static.wixstatic.com/media/66422a_5303be8aa6f442b3a4d06aa24b7641d0~mv2.png" alt="Child illustration — Dyslexic Child" loading="lazy" decoding="async" />
              </div>
              <div className="type-deco tl" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.3 4.6L18 8l-4.7 1.4L12 14l-1.3-4.6L6 8l4.7-1.4Z" />
                </svg>
              </div>
              <div className="type-body">
                <h3>Dyslexia &amp; Visual Processing</h3>
                <p>
                  <strong>Reading difficulties and reading problems:</strong> A dyslexic child experiences difficulty reading sentences fluently, visual processing difficulties where letters appear to jump, slow phonological decoding, and frequent letter reversal. Homeopathy for dyslexia stimulates neural integration and reading ease.
                </p>
              </div>
              <div className="type-puzzle" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="currentColor">
                  <path d="M22 4h9a4 4 0 0 1 0 8 3 3 0 1 0 0 6 4 4 0 0 1 0 8h-9v-8a3 3 0 1 0-6 0v8H4v-9a4 4 0 0 1 8 0 3 3 0 1 0 6 0 4 4 0 0 1-8 0v-9h12Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COGNITIVE, CONCENTRATION & STUDY CHALLENGES */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Understanding Pediatric Learning Disorders &amp; Academic Stress</h2>
            <p className="lead">
              Children with specific learning difficulties possess bright intelligence but experience a painful discrepancy between their intellectual ability and poor academic performance — causing significant difficulty in studies.
            </p>
          </div>
          <div className="neuro-visual-wrap">
            <div className="neuro-grid">
              <div className="neuro-card reveal d1">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z" />
                  </svg>
                </div>
                <h4>Reading Problems &amp; Sentence Gaps</h4>
                <div className="nico-rule"></div>
                <p>
                  Reading difficulties such as skipping lines, omitting words in sentences, difficulty reading sentences aloud, and stumbling over common phonetic sounds. Homeopathic treatment for dyslexia sharpens visual-auditory linkage.
                </p>
                <div className="therapy-row">
                  <div className="therapy-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3l-3 3v-3H8a2 2 0 0 1-2-2v-1" />
                      <path d="M3 14V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3" />
                    </svg>
                  </div>
                  <div>
                    <b>Reading Intervention</b>
                    <span>Phonics &amp; Fluency Support</span>
                  </div>
                </div>
              </div>

              <div className="neuro-card reveal d2">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" />
                  </svg>
                </div>
                <h4>Writing Difficulties &amp; Reversal</h4>
                <div className="nico-rule"></div>
                <p>
                  Writing difficulties characterized by letter reversal, mirror image writing, inconsistent margins, and frequent mistakes in writing despite understanding the subject matter thoroughly.
                </p>
                <div className="therapy-row">
                  <div className="therapy-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="18" r="3" />
                      <path d="M11 18V4l8-2v14" />
                      <circle cx="19" cy="16" r="3" />
                    </svg>
                  </div>
                  <div>
                    <b>Writing Support</b>
                    <span>Fine Motor &amp; Spatial Alignment</span>
                  </div>
                </div>
              </div>

              <div className="neuro-card reveal d3">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                </div>
                <h4>Poor Concentration &amp; Lack of Focus</h4>
                <div className="nico-rule"></div>
                <p>
                  Concentration problems and focus disorder symptoms where a child is easily distracted, fidgety, and daydreams during lectures. Homeopathy for poor focus and concentration problems naturally settles restlessness.
                </p>
                <div className="therapy-row">
                  <div className="therapy-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5v.6A3.9 3.9 0 0 0 2 11v.5A3.5 3.5 0 0 0 5.5 15H6v3a2 2 0 0 0 2 2h1" />
                      <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5v.6A3.9 3.9 0 0 1 22 11v.5A3.5 3.5 0 0 1 18.5 15H18v3a2 2 0 0 1-2 2h-1" />
                    </svg>
                  </div>
                  <div>
                    <b>Focus Training</b>
                    <span>Attention &amp; Working Memory</span>
                  </div>
                </div>
              </div>

              <div className="neuro-card reveal d4">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
                  </svg>
                </div>
                <h4>Slow Learner &amp; Study Fatigue</h4>
                <div className="nico-rule"></div>
                <p>
                  A slow learner absorbs concepts steadily but needs additional repetitions and patience. Homeopathy for slow learners alleviates academic anxiety, boosts mental processing speed, and elevates scholastic confidence.
                </p>
                <div className="therapy-row">
                  <div className="therapy-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" />
                      <path d="M5 4h2v4a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1Z" />
                      <path d="M19 4h-2v4a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1Z" />
                    </svg>
                  </div>
                  <div>
                    <b>Study Confidence</b>
                    <span>Educational Rehabilitation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — BEHAVIOUR & CLASSROOM SUPPORT STRATEGIES */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Resolving Child Learning Problems in the Classroom</h2>
            <p className="lead">
              Child learning problems often result from sensory-cognitive mismatch rather than lack of effort. Early identification and structured educational rehabilitation relieve study stress for parents and children alike.
            </p>
          </div>
          <div className="beh-grid">
            <div className="beh-card reveal d1">
              <div className="beh-char">
                <img src="https://static.wixstatic.com/media/66422a_3cc6ce56b79d45549e55adc5e4959215~mv2.png" alt="Child illustration — reading support" loading="lazy" decoding="async" />
              </div>
              <div className="beh-icon beh-icon-mint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" />
                </svg>
              </div>
              <div className="beh-text">
                <h4>Individualized Educational Plan (IEP)</h4>
                <p>Tailored interventions honoring the child’s unique learning profile, helping them overcome difficulty in studies at their own natural pace.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <div className="beh-char">
                <img src="https://static.wixstatic.com/media/66422a_079f565d2d1342b291325062c7c2ae07~mv2.png" alt="Child illustration — phonics support" loading="lazy" decoding="async" />
              </div>
              <div className="beh-icon beh-icon-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z" />
                </svg>
              </div>
              <div className="beh-text">
                <h4>Multi-Sensory Phonics &amp; Visual Training</h4>
                <p>Combining visual, auditory, and kinesthetic learning methods to overcome visual processing difficulties, letter reversal, and reading problems.</p>
              </div>
            </div>

            <div className="beh-card reveal d3">
              <div className="beh-char">
                <img src="https://static.wixstatic.com/media/66422a_2867728357c24fbeb0a231cfa76ceeee~mv2.png" alt="Child illustration — classroom accommodations" loading="lazy" decoding="async" />
              </div>
              <div className="beh-icon beh-icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
                  <circle cx="12" cy="11" r="2.2" />
                </svg>
              </div>
              <div className="beh-text">
                <h4>Classroom Accommodations &amp; Extra Time</h4>
                <p>Providing extra time during examinations and allowing oral submissions reduces anxiety for children facing calculation difficulties and mistakes in writing.</p>
              </div>
            </div>

            <div className="beh-card reveal d1">
              <div className="beh-char">
                <img src="https://static.wixstatic.com/media/66422a_0ac18e34b17e42bc9711c79ca5ce8dd4~mv2.png" alt="Child illustration — early assessment" loading="lazy" decoding="async" />
              </div>
              <div className="beh-icon beh-icon-lav">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4M12 16h.01" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div className="beh-text">
                <h4>Early Psycho-Educational Assessment</h4>
                <p>Formal diagnostic evaluation by clinical psychologists and pediatric learning disorder specialists accurately differentiates dyslexia from ADHD or emotional stress.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <div className="beh-char">
                <img src="https://static.wixstatic.com/media/66422a_befd629ec39e409a9212bbe0c4cf9f67~mv2.png" alt="Child illustration — family involvement" loading="lazy" decoding="async" />
              </div>
              <div className="beh-icon beh-icon-mint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
                </svg>
              </div>
              <div className="beh-text">
                <h4>Parental Encouragement &amp; Positive Reinforcement</h4>
                <p>Protecting self-esteem is fundamental. Celebrating creative and athletic strengths helps a child with learning difficulties in children thrive despite academic hurdles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOMEOPATHIC CARE & TREATMENT IN INDIA */}
      <section className="sec homeo-care-sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Homeopathic Treatment for Dyslexia &amp; Learning Difficulties</h2>
            <p className="lead">
              How constitutional homeopathy offers a gentle, non-stimulant approach to brain plasticity, memory enhancement, and focus stabilization:
            </p>
          </div>
          <div className="homeo-care-grid">
            <div className="homeo-care-card reveal d1">
              <h3>Homeopathy for Dyslexia in India</h3>
              <p>
                Dr. Ketan Patel’s clinic specializes in <strong>dyslexia treatment in India</strong>, offering constitutional <strong>homeopathic remedies for dyslexia</strong> that optimize cerebral circulation, reduce visual fatigue, and improve language processing centers.
              </p>
            </div>
            <div className="homeo-care-card reveal d2">
              <h3>Homeopathy for Concentration &amp; Poor Focus</h3>
              <p>
                Targeted <strong>homeopathy for concentration problems</strong> and <strong>homeopathy for poor focus</strong> addresses restless neurotransmitter signaling, allowing students to absorb classroom instructions, sustain task endurance, and overcome focus disorder symptoms naturally.
              </p>
            </div>
            <div className="homeo-care-card reveal d3">
              <h3>Homeopathy for Slow Learners &amp; Dyscalculia</h3>
              <p>
                <strong>Homeopathy for slow learners</strong> and <strong>homeopathy for dyscalculia</strong> and dysgraphia strengthens working memory, logical sequencing, and spatial comprehension without sedatives or pharmaceutical side-effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CLINICAL TOPICS & KEYWORDS GLOSSARY */}
      <section className="sec glossary-sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Clinical Topics &amp; Learning Difficulty Glossary</h2>
            <p className="lead">
              Comprehensive overview of learning conditions treated at Speciality Homeopathy:
            </p>
          </div>
          <div className="glossary-grid">
            <div className="glossary-box">
              <h4>Dyslexia &amp; Reading Difficulties</h4>
              <p>Phonological decoding challenges, reading problems, and omitting words in sentences in dyslexic children.</p>
            </div>
            <div className="glossary-box">
              <h4>Dyscalculia in Children</h4>
              <p>Calculation difficulties, weak in mathematics, and poor mathematical skills addressed with cognitive support.</p>
            </div>
            <div className="glossary-box">
              <h4>Dysgraphia &amp; Writing Difficulties</h4>
              <p>Fine motor struggles, mirror image writing, letter reversal, and frequent mistakes in writing.</p>
            </div>
            <div className="glossary-box">
              <h4>Slow Learners &amp; Poor Focus</h4>
              <p>Educational rehabilitation for slow learners with poor concentration, lack of focus, and study fatigue.</p>
            </div>
            <div className="glossary-box">
              <h4>Visual Processing Difficulties</h4>
              <p>Overcoming perceptual letter crowding, tracking fatigue, and difficulty reading sentences fluently.</p>
            </div>
            <div className="glossary-box">
              <h4>Specific Learning Disorder (SLD)</h4>
              <p>Evidence-based homeopathic care for learning disorders across all academic and cognitive domains.</p>
            </div>
            <div className="glossary-box">
              <h4>Homeopathy for Dyslexia in India</h4>
              <p>Over 34 years of clinical experience delivering homeopathic medicine and remedies across India and internationally.</p>
            </div>
            <div className="glossary-box">
              <h4>Educational Rehabilitation</h4>
              <p>Synergizing homeopathic therapy with school accommodations, remedial tutoring, and parental support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2 className="reveal d1">Stronger reading, sharper focus &amp; academic confidence.</h2>
          <p className="reveal d1">
            Book a consultation or share your child's educational psychology reports securely with Dr. Ketan Patel. We'll listen carefully, assess their cognitive profile holistically, and work in step with your child's school and educational rehabilitation team.
          </p>
          <div className="cta-row reveal d2">
            <Link className="btn btn-primary" href="/contact">
              Book a Consultation
            </Link>
            <a className="btn btn-ghost" href="tel:+919898005354">
              Call +91 98980 05354
            </a>
            <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">
              WhatsApp our team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
