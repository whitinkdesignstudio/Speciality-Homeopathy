import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Autism Homeopathy, Treatment & Care in India | Dr. Ketan Patel',
  description:
    'Comprehensive homeopathy for autism (ASD) in children & teens. Pediatric care for PANS/PANDAS, behavioural disorders & individualized support across India.',
  keywords: [
    'Autism',
    'Autism Spectrum Disorder (ASD)',
    'Autistic Child',
    'Autism in Boys',
    'Autism in Girls',
    'Autism in Young Children',
    'Autism in Teenagers',
    'Homeopathy for Autism',
    'Homeopathic Medicine for Autism',
    'Homeopathic Remedies for Autism',
    'Autism Management',
    'Autism Care',
    'Autism Treatment in India',
    'India Autism Treatment',
    'Autism Therapy',
    'Minimal Therapy for Autism',
    'PANS',
    'PANDAS',
    'Child Behavioural Disorder',
    'Child Behaviour Disorders',
    'Neurological Disorders in Children',
    'Pediatric Neurology',
    'Pediatric Centre',
    'Child Rehabilitation Centre',
    'Rehabilitation for Autism',
    'PTSD Care',
    'Lyme Disease',
    'Neuronal Autoantibodies',
    'autism homeopathy',
    'holistic autism treatment',
    'early intervention therapy',
    'autistic child not sleeping',
    'child not making eye contact',
    'child not responding to name',
  ].join(', '),
};

const pageStyles = `
  body{
    margin:0;
    padding:0;
    width:100%;
    height:auto;
    overflow-x:hidden !important;
    scrollbar-width:none !important;
    -ms-overflow-style:none !important;
  }
  html::-webkit-scrollbar,
  body::-webkit-scrollbar{
    display:none !important;
    width:0 !important;
  }
  .niddan-features{
    overflow:hidden !important;
  }
  .nf-container{
    overflow:hidden !important;
  }
  :root{
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
  body{font-family:'Open Sans',system-ui,sans-serif;color:var(--graphite);background:var(--ivory);font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased}
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

  /* page hero */
  .page-hero{position:relative;background:radial-gradient(120% 120% at 84% 0%,#d4eef9 0%,#BAE0F3 48%,#9ed0eb 100%);color:var(--blue);padding:92px 0 74px;overflow:hidden}
  .page-hero::after{content:"";position:absolute;inset:0;background:radial-gradient(70% 55% at 74% 46%,rgba(255,255,255,.22),rgba(186,224,243,.15) 100%);pointer-events:none}
  .page-hero .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
  .page-hero h1{font-size:clamp(2rem,3.6vw,2.7rem);margin:16px 0 18px}
  .page-hero .lead{color:rgba(10,31,68,.82);font-size:1.02rem;max-width:54ch;margin-bottom:18px}
  .page-hero-trust{display:flex;flex-wrap:wrap;gap:14px 26px;align-items:end;border-top:1px solid rgba(10,31,68,.16);padding-top:18px;margin-top:26px}
  .page-hero-trust .stat-num{font-family:'Open Sans',sans-serif;font-weight:700;font-size:1.5rem;color:#0a4a6e;display:block;line-height:1}
  .page-hero-trust .lbl{font-size:.7rem;color:rgba(10,31,68,.7);line-height:1.35;margin-top:5px;max-width:15ch}

  /* hero visual */
  .hero-visual{position:relative;display:flex;align-items:center;justify-content:center;min-height:360px}
  .hv-photo-wrap{position:relative;width:100%;max-width:400px;border-radius:24px;overflow:hidden;box-shadow:0 26px 50px -20px rgba(10,31,68,.35);border:1px solid rgba(255,255,255,.6)}
  .hv-photo{display:block;width:100%;height:auto}
  @media(max-width:980px){
    .page-hero .wrap{grid-template-columns:1fr}
    .hero-visual{order:-1;min-height:300px}
    .hv-photo-wrap{max-width:280px}
  }
  .honesty{display:inline-flex;align-items:center;gap:.55rem;font-size:.78rem;color:rgba(10,31,68,.88);background:rgba(255,255,255,.45);border:1px solid rgba(10,31,68,.2);padding:.45rem .8rem;border-radius:9px;margin-bottom:26px}
  .honesty svg{width:15px;height:15px;flex:0 0 auto;color:var(--teal)}
  .page-hero-cta{display:flex;gap:12px;flex-wrap:wrap}

  /* sections */
  .sec{padding:84px 0}
  .sec-head{max-width:800px;margin:0 auto 46px;text-align:center}
  .sec-head h2{font-size:clamp(1.5rem,2.6vw,2.15rem);margin:12px 0 14px}
  .sec-head .lead{margin:0 auto;max-width:68ch}
  .reveal{opacity:1;transform:none}

  /* SECTION 1 — types (pastel cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}
  .type-grid-v2{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:8px}
  .type-card-v2{position:relative;border-radius:26px;padding:100px 26px 30px;text-align:center;box-shadow:0 16px 40px -20px rgba(10,31,68,.22);transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card-v2:hover{transform:translateY(-6px);box-shadow:0 24px 54px -18px rgba(10,31,68,.28)}
  .type-card-v2.tint-teal{background:linear-gradient(170deg,#E7F6F4,#F5FBFA)}
  .type-card-v2.tint-gold{background:linear-gradient(170deg,#FBF2E4,#FDF9F1)}
  .type-card-v2.tint-blue{background:linear-gradient(170deg,#E9F2FB,#F5F9FD)}
  .type-peek{position:absolute;top:0;left:50%;transform:translate(-50%,-58%);width:140px;height:140px;border-radius:50%;overflow:hidden;background:#fff;box-shadow:0 10px 26px -10px rgba(10,31,68,.3);border:4px solid #fff;display:flex;align-items:center;justify-content:center}
  .type-peek img{width:100%;height:100%;object-fit:contain;object-position:center center}
  .type-card-v2 h3{font-size:1.08rem;margin-bottom:12px}
  .type-card-v2 .tv2-rule{width:34px;height:3px;border-radius:3px;margin:0 auto 14px}
  .tint-teal .tv2-rule{background:var(--teal)}
  .tint-gold .tv2-rule{background:var(--gold)}
  .tint-blue .tv2-rule{background:#3E7CB1}
  .type-card-v2 p{font-size:.86rem;color:#555;line-height:1.7}
  .type-card-v2 .tv2-deco{position:absolute;bottom:16px;right:18px;width:20px;height:20px;opacity:.35}
  @media(max-width:980px){.type-grid-v2{grid-template-columns:1fr;max-width:380px;margin:8px auto 0}}

  /* AGE & GENDER SECTION */
  .age-gender-sec{background:#ffffff}
  .age-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .age-card{background:#f8fbfe;border:1px solid #ddecfa;border-radius:20px;padding:28px 22px;transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
  .age-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-sm);border-color:var(--teal)}
  .age-card h3{font-size:1.05rem;color:var(--blue);margin-bottom:10px}
  .age-card p{font-size:.86rem;color:#555;line-height:1.65;margin:0}

  /* SECTION 2 — NEUROLOGICAL & IMMUNE (dark navy) */
  .neuro{background:var(--blue);color:var(--ivory)}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-grid-v2{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .neuro-card-v2{position:relative;background:rgba(186,224,243,.10);border:1.5px solid rgba(255,255,255,.22);border-radius:18px;padding:22px 18px;backdrop-filter:blur(16px) saturate(1.3);-webkit-backdrop-filter:blur(16px) saturate(1.3);box-shadow:0 8px 32px -10px rgba(10,50,120,.28);transition:transform .4s var(--ease),border-color .4s}
  .neuro-card-v2:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.5)}
  .neuro-card-v2 .nico-v2{width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.14);display:grid;place-items:center;margin-bottom:12px;color:#BAE0F3}
  .neuro-card-v2 .nico-v2 svg{width:18px;height:18px}
  .neuro-card-v2 h4{color:#fff;font-size:.95rem;margin-bottom:8px;line-height:1.35}
  .neuro-card-v2 p{font-size:.82rem;color:rgba(220,240,252,.85);line-height:1.6;margin-bottom:14px}
  .neuro-learn{display:inline-flex;align-items:center;gap:5px;font-size:.65rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(200,169,107,.55);border-radius:999px;padding:6px 12px;transition:background .3s,color .3s;white-space:nowrap}
  .neuro-learn:hover{background:var(--gold);color:var(--blue)}
  .neuro-learn svg{width:11px;height:11px}
  @media(max-width:980px){.neuro-grid-v2{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:680px){.neuro-grid-v2{grid-template-columns:1fr}}

  /* SECTION 3 — BEHAVIOUR */
  .behaviour{background:#fff}
  .beh-grid-v2{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
  .beh-card-v2{position:relative;display:flex;gap:18px;align-items:center;padding:24px 22px;border-radius:20px;box-shadow:0 12px 30px -18px rgba(10,31,68,.22);transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
  .beh-card-v2:hover{transform:translateY(-5px);box-shadow:0 18px 38px -16px rgba(10,31,68,.28)}
  .beh-card-v2.tint-teal{background:linear-gradient(165deg,#E7F6F4,#F6FBFA)}
  .beh-card-v2.tint-gold{background:linear-gradient(165deg,#FBF2E4,#FDF9F1)}
  .beh-card-v2.tint-blue{background:linear-gradient(165deg,#E9F2FB,#F6FAFD)}
  .beh-peek{flex:0 0 auto;width:110px;display:flex;align-items:center;justify-content:center}
  .beh-peek img{width:100%;max-height:120px;object-fit:contain}
  .beh-card-v2 .bico-v2{position:absolute;top:20px;right:20px;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;color:#fff}
  .beh-card-v2 .bico-v2 svg{width:16px;height:16px}
  .tint-teal .bico-v2{background:var(--teal)}
  .tint-gold .bico-v2{background:var(--gold)}
  .tint-blue .bico-v2{background:#3E7CB1}
  .beh-card-v2 h4{font-size:.98rem;margin-bottom:6px;padding-right:38px}
  .beh-card-v2 .bv2-rule{width:26px;height:2.5px;border-radius:3px;margin-bottom:10px}
  .tint-teal .bv2-rule{background:var(--teal)}
  .tint-gold .bv2-rule{background:var(--gold)}
  .tint-blue .bv2-rule{background:#3E7CB1}
  .beh-card-v2 p{font-size:.82rem;color:#555;line-height:1.65;margin:0}
  .beh-grid-v2 .beh-card-v2:last-child{grid-column:1 / -1;max-width:calc(50% - 10px)}
  @media(max-width:680px){.beh-grid-v2{grid-template-columns:1fr}.beh-grid-v2 .beh-card-v2:last-child{max-width:100%}}

  /* MINIMAL THERAPY & CLINICAL HOMEOPATHY SECTION */
  .therapy-sec{background:linear-gradient(160deg,#f0f8fa 0%,#e4f3f7 100%)}
  .therapy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
  .therapy-card{background:#ffffff;border:1px solid #ddecfa;border-radius:22px;padding:32px 24px;box-shadow:0 12px 30px -16px rgba(10,31,68,.12);transition:transform .35s var(--ease)}
  .therapy-card:hover{transform:translateY(-5px);border-color:var(--teal)}
  .therapy-card h3{font-size:1.15rem;color:var(--blue);margin-bottom:12px}
  .therapy-card p{font-size:.88rem;color:#4b6382;line-height:1.7}

  /* KEYWORD HUB / GLOSSARY */
  .hub-sec{background:#ffffff;border-top:1px solid #e5eff8}
  .hub-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px}
  .hub-item{background:#f8fbfe;border:1px solid #ddecfa;border-radius:14px;padding:18px 20px}
  .hub-item h4{font-size:.92rem;color:var(--blue);margin-bottom:6px}
  .hub-item p{font-size:.8rem;color:#5a718d;margin:0;line-height:1.55}

  /* CTA */
  .cta-v2{position:relative;background:linear-gradient(120deg,#081733,#0A1F44 55%,#0d2650);color:#fff;padding:0;overflow:hidden}
  .cta-v2-inner{position:relative;z-index:2;display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:40px;padding:88px 0}
  .cta-v2 h2{color:#fff;font-size:clamp(1.8rem,3.2vw,2.5rem);margin:14px 0 16px}
  .cta-v2 p{color:rgba(255,255,255,.78);max-width:52ch;margin-bottom:30px;font-size:.98rem;line-height:1.7}
  .cta-v2-row{display:flex;gap:12px;flex-wrap:wrap}
  .cta-v2 .btn-ghost{background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.28)}
  .cta-v2 .btn-ghost:hover{background:rgba(255,255,255,.18)}
  .cta-v2-photo{position:relative;background:linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02));border:1px solid rgba(255,255,255,0.1);border-radius:28px;overflow:hidden;box-shadow:0 25px 50px -15px rgba(0,0,0,.45);aspect-ratio:4/3;display:flex;align-items:flex-end;justify-content:center}
  .cta-v2-photo img{width:100%;height:100%;object-fit:cover;object-position:bottom center}
  .cta-v2-ribbon{position:absolute;top:-40px;right:-10px;width:340px;height:340px;opacity:.5;pointer-events:none;z-index:1}
  .cta-v2::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 60% at 8% 90%,rgba(0,140,140,.14),transparent 70%);pointer-events:none;z-index:1}
  @media(max-width:980px){
    .age-grid{grid-template-columns:repeat(2,1fr)}
    .therapy-grid{grid-template-columns:1fr}
    .cta-v2-inner{grid-template-columns:1fr;padding:64px 0;text-align:center}
    .cta-v2-row{justify-content:center}
    .cta-v2-photo{max-width:420px;margin:0 auto}
    .cta-v2-ribbon{display:none}
  }
  @media(max-width:640px){
    .age-grid{grid-template-columns:1fr}
    .sec{padding:60px 0}
    .page-hero{padding:84px 0 54px}
  }
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO */}
      <section className="page-hero" id="top">
        <div className="wrap">
          <div className="hero-text">
            <h1 className="reveal d1">
              Homeopathy for Autism, Autism Care &amp; ASD Management in India
            </h1>
            <p className="lead reveal d2">
              A comprehensive clinical approach to Autism Spectrum Disorder (ASD), child behaviour disorders, and neurological conditions in children — offering gentle homeopathic medicine for autism, minimal therapy, and individualized constitutional care alongside your pediatric neurology team.
            </p>
            <div className="honesty reveal d2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 8v4M12 16h.01"/>
                <circle cx="12" cy="12" r="9"/>
              </svg>
              Supportive &amp; complementary autism care — working collaboratively with your pediatric centre and medical specialists.
            </div>
            <div className="page-hero-cta reveal d3">
              <Link className="btn btn-primary" href="/contact">Book a Consultation</Link>
              <Link className="btn btn-ghost" href="/contact">
                Upload Reports
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 16V4M7 9l5-5 5 5M5 20h14"/>
                </svg>
              </Link>
            </div>
            <div className="page-hero-trust reveal d3">
              <div><span className="stat-num">34+</span><span className="lbl">Years of practice, Dr. Ketan Patel</span></div>
              <div><span className="stat-num">3</span><span className="lbl">Experienced homeopathic physicians</span></div>
              <div><span className="stat-num">0–16</span><span className="lbl">Ages cared for, infancy to adolescence</span></div>
            </div>
          </div>

          <div className="hero-visual reveal d2" aria-hidden="true">
            <div className="hv-photo-wrap">
              <img className="hv-photo" src="/images/autism-care/image-1.png" alt="Child autism specialist care — child holding colourful puzzle pieces" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — AUTISM TYPES & ASSOCIATED CONDITIONS */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Autism Spectrum Disorder (ASD) Presentations</h2>
            <p className="lead">
              Every autistic child presents with a distinct developmental trajectory — from mild sensory differences and Asperger’s traits to Intense and Profound Autism. Autism management begins with understanding the whole child, not applying a generic label.
            </p>
          </div>
          <div className="type-grid-v2">
            <div className="type-card-v2 tint-teal reveal d1">
              <div className="type-peek">
                <img src="/images/autism-care/child-boy-peeking.png" alt="Illustration for Profound Autism" loading="lazy" decoding="async" />
              </div>
              <h3>Profound Autism</h3>
              <div className="tv2-rule"></div>
              <p>
                Often categorized as Intense Autism, where non-verbal communication, intense behavioural dysregulation, sensory distress, and daily living vulnerabilities are prominent. Our individualized autism care integrates calming homeopathic remedies for autism to support sleep, sensory equilibrium, and emotional stabilization.
              </p>
              <svg className="tv2-deco" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.6">
                <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z"/>
              </svg>
            </div>
            <div className="type-card-v2 tint-gold reveal d2">
              <div className="type-peek">
                <img src="/images/autism-care/child-girl-peeking.png" alt="Illustration for Syndromic Autism" loading="lazy" decoding="async" />
              </div>
              <h3>Syndromic Autism</h3>
              <div className="tv2-rule"></div>
              <p>
                Autistic traits occurring in tandem with documented genetic syndromes (Fragile X, Angelman, Rett, TSC). Detailed pediatric neurology history and constitutional homeopathic remedies help address both cellular metabolic balance and everyday cognitive development.
              </p>
              <svg className="tv2-deco" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6">
                <path d="M6 3l1 3H4l1-3ZM19 15l1 3h-3l1-3Z"/>
                <path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4"/>
              </svg>
            </div>
            <div className="type-card-v2 tint-blue reveal d3">
              <div className="type-peek">
                <img src="/images/autism-care/family-peeking.png" alt="Illustration for Genetic, Metabolic and Mitochondrial Autism" loading="lazy" decoding="async" />
              </div>
              <h3>Genetic, Metabolic &amp; Mitochondrial Autism</h3>
              <div className="tv2-rule"></div>
              <p>
                Cases characterized by cellular energy deficits, mitochondrial dysfunction, or metabolic dysbiosis. Homeopathic medicine for autism works gently at the constitutional level to support neuroplasticity, digestive harmony, and overall stamina without heavy chemical burden.
              </p>
              <svg className="tv2-deco" viewBox="0 0 24 24" fill="none" stroke="#3E7CB1" strokeWidth="1.6">
                <path d="M9 3v4M15 3v4M6 21v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 11V7"/>
                <circle cx="12" cy="7" r="2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — AUTISM ACROSS GENDER & AGE GROUPS */}
      <section className="sec age-gender-sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Autism in Boys, Girls, Young Children &amp; Teenagers</h2>
            <p className="lead">
              Autism spectrum disorder manifests differently across sexes and developmental phases. Understanding these distinct nuances is fundamental to effective autism management:
            </p>
          </div>
          <div className="age-grid">
            <div className="age-card reveal d1">
              <h3>Autism in Young Children</h3>
              <p>
                Early identification in toddlers and preschoolers: lack of eye contact, speech delay, not responding to name, repetitive play, and sensory defensiveness. Early intervention therapy combined with gentle homeopathic care builds essential developmental milestones.
              </p>
            </div>
            <div className="age-card reveal d2">
              <h3>Autism in Boys</h3>
              <p>
                Historically recognized earlier due to overt motor hyperactivity, outward stimming, intense special interests, and prominent speech delays. Homeopathy for autism helps calm motor restlessness and improve classroom attention.
              </p>
            </div>
            <div className="age-card reveal d3">
              <h3>Autism in Girls</h3>
              <p>
                Frequently underdiagnosed due to social masking, imitation of neurotypical peers, and internalized anxiety or gut distress rather than external defiance. Constitutional remedies address deep emotional overload and sensory exhaustion.
              </p>
            </div>
            <div className="age-card reveal d4">
              <h3>Autism in Teenagers</h3>
              <p>
                Adolescence brings hormonal shifts, increased social complexity, executive function demands, and heightened anxiety. Homeopathic medicine for autism supports mood stability, sleep regulation, and nervous system resilience during teenage transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — NEUROLOGICAL, IMMUNE & CO-MORBID CONDITIONS */}
      <section className="sec neuro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Neurological Disorders in Children &amp; Neuro-Immune Conditions</h2>
            <p className="lead">
              Many children evaluated for Autism Spectrum Disorder experience underlying neuro-inflammatory, immune, or co-occurring neurological challenges:
            </p>
          </div>
          <div className="neuro-grid-v2">
            <div className="neuro-card-v2 reveal d1">
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5a5 5 0 0 0 10 0c0-2 1-3 1-5a5 5 0 0 0-5-5Z"/>
                  <path d="M9 21h6M10 18h4"/>
                </svg>
              </div>
              <h4>Cerebral Palsy &amp; Motor Delays</h4>
              <p>Affecting coordination, posture, and muscle control. Supportive constitutional homeopathy improves muscle tone, deglutition, and motor progress alongside pediatric neurology care.</p>
              <Link className="neuro-learn" href="/contact">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            <div className="neuro-card-v2 reveal d2">
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3.5 2"/>
                </svg>
              </div>
              <h4>PANS &amp; PANDAS</h4>
              <p>Pediatric Acute-onset Neuropsychiatric Syndrome triggered by post-infectious basal ganglia inflammation, manifesting as overnight severe OCD, motor tics, separation anxiety, and behavioral regressions.</p>
              <Link className="neuro-learn" href="/contact">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            <div className="neuro-card-v2 reveal d3">
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>
                </svg>
              </div>
              <h4>Neuronal Autoantibodies &amp; Encephalitis</h4>
              <p>Autoimmune cross-reactivity and circulating anti-neuronal antibodies that irritate central nervous tissue, provoking acute developmental stalls, sleep fragmentation, and sudden sensory meltdowns.</p>
              <Link className="neuro-learn" href="/contact">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            <div className="neuro-card-v2 reveal d4">
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11Z"/>
                </svg>
              </div>
              <h4>Lyme Disease &amp; Chronic Co-Infections</h4>
              <p>Tick-borne Borrelia and vector-transmitted infections that cross the blood-brain barrier, triggering chronic neuro-fatigue, brain fog, and behaviors mimicking spectrum disorders.</p>
              <Link className="neuro-learn" href="/contact">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            <div className="neuro-card-v2 reveal d1">
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h4>PTSD Care in Autistic Children</h4>
              <p>Trauma, sensory panic, or distress from intensive medical testing can heighten fight-or-flight nervous system reactivity. Compassionate PTSD care restores deep neurological security.</p>
              <Link className="neuro-learn" href="/contact">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            <div className="neuro-card-v2 reveal d2">
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3.5 2"/>
                </svg>
              </div>
              <h4>PVL (Periventricular Leukomalacia)</h4>
              <p>Damage to the brain’s periventricular white matter following premature birth, impacting motor development and sensory coordination requiring systematic developmental observation.</p>
              <Link className="neuro-learn" href="/contact">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            <div className="neuro-card-v2 reveal d3">
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>
                </svg>
              </div>
              <h4>Mild Hypoxic-Ischemic Encephalopathy (HIE)</h4>
              <p>Resulting from perinatal oxygen deprivation. Homeopathy offers supportive care to encourage neuroplastic repair and cognitive stimulation alongside pediatric neurology teams.</p>
              <Link className="neuro-learn" href="/contact">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            <div className="neuro-card-v2 reveal d4">
              <div className="nico-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                </svg>
              </div>
              <h4>Child Behavioural Disorder &amp; ADHD</h4>
              <p>Oppositional defiance, severe attention deficits, impulsivity, and sensory aggression. Non-sedating constitutional homeopathy balances neurotransmitter sensitivity gently.</p>
              <Link className="neuro-learn" href="/contact">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AUTISM BEHAVIOUR & EVERYDAY CHALLENGES */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Child Behaviour Disorders &amp; Everyday Challenges</h2>
            <p className="lead">
              From speech delay and hyperactivity to meltdowns and screen-linked "Virtual Autism" traits — supporting autistic children with patience, structure, and targeted constitutional care.
            </p>
          </div>
          <div className="beh-grid-v2">
            <div className="beh-card-v2 tint-teal reveal d1">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-4-hyper-boy.png" alt="Speech & Communication Delays" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z"/>
                  </svg>
                </div>
                <h4>Speech &amp; Social Communication Delays</h4>
                <div className="bv2-rule"></div>
                <p>Difficulty developing words, understanding receptive language, or expressing physical needs. Parents frequently ask how to increase speech in an autistic child; constitutional remedies activate speech clarity alongside early intervention therapy.</p>
              </div>
            </div>

            <div className="beh-card-v2 tint-gold reveal d2">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-5-anxious-girl.png" alt="Hyperactive & Restless Child" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>
                  </svg>
                </div>
                <h4>Hyperactivity &amp; Restless Attention</h4>
                <div className="bv2-rule"></div>
                <p>Inability to sit calmly, extreme physical restlessness, and difficulty sustaining task focus. Evaluating dietary sensitivities and constitutional balance helps improve focus in an autistic child.</p>
              </div>
            </div>

            <div className="beh-card-v2 tint-blue reveal d3">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-1-crying-boy.png" alt="Self-Injuries & Injuries to Others" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 9v4M12 17h.01"/>
                    <path d="M10.3 3.9 2.5 17a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>
                  </svg>
                </div>
                <h4>Self-Injuries &amp; Behavioural Distress</h4>
                <div className="bv2-rule"></div>
                <p>Distressing responses to sensory overload or non-verbal frustration, such as head-banging or biting. Identifying sensory triggers and calming nervous system hyper-arousal is vital.</p>
              </div>
            </div>

            <div className="beh-card-v2 tint-gold reveal d1">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-2-sleeping-boy.png" alt="Meltdowns & Sensory Overload" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M8 6l8 12M6 6l12 12"/>
                  </svg>
                </div>
                <h4>Meltdowns &amp; Sensory Overload</h4>
                <div className="bv2-rule"></div>
                <p>Triggered by sudden routine changes, loud sounds, or crowd overstimulation. A predictable environment and individualized homeopathic support foster faster emotional recovery.</p>
              </div>
            </div>

            <div className="beh-card-v2 tint-teal reveal d2">
              <div className="beh-peek">
                <img src="/images/autism-care/beh-3-sensory-girl.png" alt="Sleep Support in Autistic Child" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="bico-v2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a6 6 0 1 0 4.5 9.8A8 8 0 1 1 17 3Z"/>
                  </svg>
                </div>
                <h4>Sleep Disturbances &amp; Night Waking</h4>
                <div className="bv2-rule"></div>
                <p>Trouble settling to sleep, frequent nocturnal waking, and altered melatonin cycles. Homeopathic remedies gently harmonize circadian rhythm without chemical sedatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — MINIMAL THERAPY, HOMEOPATHY & REHABILITATION IN INDIA */}
      <section className="sec therapy-sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Minimal Therapy for Autism &amp; India Autism Treatment</h2>
            <p className="lead">
              Our pediatric centre bridges the best of classical homeopathic science with collaborative child rehabilitation centre networks across India:
            </p>
          </div>
          <div className="therapy-grid">
            <div className="therapy-card reveal d1">
              <h3>Minimal Therapy for Autism</h3>
              <p>
                Many families report therapy burnout from subjecting a young child to 30–40 hours of weekly clinical appointments. Minimal therapy for autism advocates for calming constitutional homeopathy that balances sensory receptors, allowing natural learning to flourish at home without exhausting the child.
              </p>
            </div>
            <div className="therapy-card reveal d2">
              <h3>Homeopathic Medicine for Autism</h3>
              <p>
                Targeted, non-toxic homeopathic remedies for autism stimulate cellular self-healing, clear miasmatic blocks, and resolve gut-brain inflammation. Prepared under strict pharmacopoeia standards, sweet globules are willingly accepted by children with zero side-effects.
              </p>
            </div>
            <div className="therapy-card reveal d3">
              <h3>Rehabilitation for Autism in India</h3>
              <p>
                As a leading pediatric centre for autism treatment in India, Dr. Ketan Patel works in partnership with your child&apos;s existing occupational therapists, speech therapists, and child rehabilitation centre specialists to ensure coherent, multi-disciplinary developmental gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CLINICAL KEYWORDS & TOPICS INDEX */}
      <section className="sec hub-sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Clinical Specialties &amp; Autism Care Domains</h2>
            <p className="lead">
              Explore key clinical areas and conditions evaluated at our pediatric centre and research facility:
            </p>
          </div>
          <div className="hub-grid">
            <div className="hub-item">
              <h4>Autism Spectrum Disorder (ASD)</h4>
              <p>Neurodevelopmental spectrum support focusing on cognitive flexibility, eye contact, and emotional regulation.</p>
            </div>
            <div className="hub-item">
              <h4>Autism in Boys &amp; Girls</h4>
              <p>Sex-specific phenotypic analysis addressing overt hyperactivity in boys and subtle social masking in girls.</p>
            </div>
            <div className="hub-item">
              <h4>Autism in Young Children &amp; Teenagers</h4>
              <p>Age-appropriate interventions from toddler early intervention to adolescent hormonal and sensory transitions.</p>
            </div>
            <div className="hub-item">
              <h4>Homeopathy for Autism in India</h4>
              <p>India autism treatment protocols developed over 34+ years of clinical documentation by Dr. Ketan Patel.</p>
            </div>
            <div className="hub-item">
              <h4>PANS, PANDAS &amp; Autoantibodies</h4>
              <p>Targeting acute post-infectious neuro-inflammation, basal ganglia reactivity, and circulating neuronal antibodies.</p>
            </div>
            <div className="hub-item">
              <h4>Neurological Disorders in Children</h4>
              <p>Pediatric neurology guidance for Cerebral Palsy, HIE, microcephaly, developmental delays, and genetic syndromes.</p>
            </div>
            <div className="hub-item">
              <h4>Child Behavioural Disorders</h4>
              <p>Holistic behavioral care for emotional outbursts, sensory meltdowns, oppositional defiance, and ADHD hyperactivity.</p>
            </div>
            <div className="hub-item">
              <h4>Rehabilitation for Autism</h4>
              <p>Synergizing homeopathic remedies with speech therapy, sensory integration, and child rehabilitation centre goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-v2">
        <svg className="cta-v2-ribbon" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M170 40c60 20 90 70 60 120-20 33-70 40-95 15-18-18-15-45 5-58 15-10 33-4 38 10" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" opacity=".55"/>
          <path d="M70 260c-25-35-15-85 30-100 38-13 78 5 88 38" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" opacity=".35"/>
          <circle cx="205" cy="120" r="3" fill="var(--teal)" opacity=".7"/>
          <circle cx="95" cy="205" r="2.5" fill="var(--gold)" opacity=".6"/>
          <circle cx="250" cy="180" r="2" fill="var(--teal)" opacity=".5"/>
        </svg>
        <div className="wrap cta-v2-inner">
          <div>
            <h2 className="reveal d1">A calmer, more supported everyday for your child.</h2>
            <p className="reveal d1">
              At our pediatric centre in Ahmedabad, we offer holistic autism treatment and autism management through constitutional homeopathic medicine for autism, minimal therapy, and supportive pediatric neurology protocols. Consult Dr. Ketan Patel in person or through telemedicine across India and worldwide.
            </p>
            <div className="cta-v2-row reveal d2">
              <Link className="btn btn-primary" href="/contact">Book a Consultation</Link>
              <a className="btn btn-ghost" href="tel:+919898005354">Call +91 98980 05354</a>
              <a className="btn btn-ghost" href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">WhatsApp our team</a>
            </div>
          </div>
          <div className="cta-v2-photo reveal d2">
            <img src="/images/autism-care/a14.png" alt="Family together supporting their child" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
    </>
  );
}
