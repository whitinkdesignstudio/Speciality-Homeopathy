import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Child Behavioral Disorder Care & Support | Speciality Homeopathy',
  description: 'Learn about child behavioral disorders, PANS, PANDAS and symptoms, with supportive care from Dr. Ketan Patel, Ahmedabad.',
  keywords: 'PANDAS homeopathy treatment, PANS homeopathic treatment, pediatric autoimmune neuropsychiatric disorder, streptococcal neuropsychiatric homeopathy, communicative disorder children',
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

  /* SECTION 1 — types (pillar-style white cards) */
  .types{background:linear-gradient(160deg,#def0fa 0%,#e8f5fc 40%,#cfe8f5 100%)}
  .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;counter-reset:p}
  .type-card{position:relative;background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 14px 38px -16px rgba(20,50,90,.20);display:flex;flex-direction:column;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
  .type-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 22px 52px -16px rgba(20,50,90,.28)}
  .type-card .num{counter-increment:p;position:absolute;top:20px;right:24px;font-weight:700;font-size:.75rem;letter-spacing:.14em;color:rgba(10,50,100,.28)}
  .type-card .num::before{content:"0" counter(p)}
  .type-top{padding:34px 30px 14px;text-align:center}
  .type-top h3{font-size:1.1rem;text-align:center}
  .type-body{padding:0 30px 8px;text-align:center;flex:1}
  .type-body p{font-size:.88rem;color:#555;line-height:1.7}
  .type-img{margin-top:auto;padding:18px 24px 24px;display:flex;justify-content:center}

  /* SECTION 2 — neuro conditions (dark frosted cards) */
  .neuro{background:var(--blue);color:var(--ivory)}
  .neuro .sec-head h2{color:var(--ivory)}
  .neuro .eyebrow{color:var(--gold)}
  .neuro .lead{color:rgba(250,248,244,.8)}
  .neuro-wrap{display:grid;grid-template-columns:.62fr 1.38fr;gap:44px;align-items:center}
  .neuro-photo{position:relative;align-self:stretch;min-height:520px;border-radius:24px;overflow:hidden}
  .sec-head-alt{text-align:left;max-width:560px;margin:0 0 30px}
  .sec-head-alt h2{font-size:clamp(1.55rem,2.6vw,2.05rem);margin-bottom:12px;color:var(--ivory)}
  .sec-head-alt .lead{margin:0}
  .neuro-content .neuro-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
  .neuro-card{position:relative;background:rgba(186,224,243,.14);border:1.5px solid rgba(255,255,255,.28);border-radius:20px;padding:28px 22px;backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 32px -10px rgba(10,50,120,.28),0 1.5px 0 rgba(255,255,255,.35) inset;transition:transform .45s var(--ease),box-shadow .45s var(--ease),border-color .4s}
  .neuro-card:hover{transform:translateY(-7px) scale(1.012);border-color:rgba(255,255,255,.55);box-shadow:0 22px 52px -12px rgba(10,50,120,.4)}
  .neuro-card .nico{width:46px;height:46px;border-radius:13px;background:rgba(255,255,255,.12);display:grid;place-items:center;margin-bottom:16px;color:#BAE0F3}
  .neuro-card .nico svg{width:22px;height:22px}
  .neuro-card h4{color:#fff;font-size:1rem;margin-bottom:8px}
  .neuro-card p{font-size:.82rem;color:rgba(220,240,252,.85);line-height:1.6}

  /* SECTION 3 — behaviour (icon list cards) */
  .behaviour{background:#fff}
  .beh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  .beh-card{display:flex;align-items:center;gap:20px;padding:22px 24px;border:1px solid var(--line);border-radius:16px;background:var(--ivory);box-shadow:0 10px 24px -16px rgba(10,31,68,.18);transition:transform .3s var(--ease),box-shadow .3s var(--ease)}
  .beh-card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(10,31,68,.25)}
  .beh-icon{width:100px;height:100px;border-radius:50%;background:var(--teal-10);display:grid;place-items:center;flex:0 0 auto;color:var(--teal);transition:transform .35s var(--ease);overflow:hidden}
  .beh-card:hover .beh-icon{transform:scale(1.08) rotate(-3deg)}
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
    .neuro-wrap{grid-template-columns:1fr}
    .neuro-photo{min-height:260px}
    .sec-head-alt{text-align:center;margin:0 auto 30px}
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

export default function ChildBehavioralDisorderPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO BANNER */}
      <section className="page-hero" id="top">
        <div className="hero-banner-full">
          <img src="/images/child-behavioral-disorder/hero-banner.png"
            alt="Child Behavioral Disorder Care &amp; Support Hero Banner" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* SECTION 1 — PANS, PANDAS & LYME DISEASE */}
      <section className="sec types">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>When behaviour changes suddenly</h2>
            <p className="lead">
              Children may show a combination of behavioral, emotional, developmental or neurological symptoms that can appear abruptly. A detailed clinical assessment helps identify possible contributing factors.
            </p>
          </div>
          <div className="type-grid">
            <div className="type-card reveal d1">
              <div className="num"></div>
              <div className="type-top">
                <h3>PANS</h3>
              </div>
              <div className="type-body">
                <p>
                  Pediatric Acute-onset Neuropsychiatric Syndrome — a condition in which certain neuropsychiatric symptoms may appear suddenly, associated with infections or immune-related responses affecting behaviour and daily functioning.
                </p>
              </div>
              <div className="type-img">
                <img src="https://static.wixstatic.com/media/66422a_6255697674884822abc1ea6e7ad1c710~mv2.png"
                  alt="PANS illustration"
                  style={{ width: '100%', maxWidth: '210px', aspectRatio: '1/1', borderRadius: '18px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="type-card reveal d2">
              <div className="num"></div>
              <div className="type-top">
                <h3>PANDAS</h3>
              </div>
              <div className="type-body">
                <p>
                  Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal infections — symptoms may develop abruptly and involve changes in behavior, emotions, movement or neurological functioning.
                </p>
              </div>
              <div className="type-img">
                <img src="https://static.wixstatic.com/media/66422a_3321b1be265643eca398cdaa2569073a~mv2.png"
                  alt="PANDAS illustration"
                  style={{ width: '100%', maxWidth: '210px', aspectRatio: '1/1', borderRadius: '18px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="type-card reveal d3">
              <div className="num"></div>
              <div className="type-top">
                <h3>Lyme Disease</h3>
              </div>
              <div className="type-body">
                <p>
                  An infection caused by Borrelia bacteria, commonly transmitted through infected ticks. Early symptoms may include rash, fever, fatigue and body aches, sometimes overlapping with other conditions.
                </p>
              </div>
              <div className="type-img">
                <img src="https://static.wixstatic.com/media/66422a_99810e7bc83b4b088553a65fa21f8f00~mv2.png"
                  alt="Lyme Disease illustration"
                  style={{ width: '100%', maxWidth: '210px', aspectRatio: '1/1', borderRadius: '18px', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COMMON SYMPTOMS */}
      <section className="sec neuro">
        <div className="wrap neuro-wrap">
          <div className="neuro-photo reveal">
            <img src="https://static.wixstatic.com/media/66422a_95761123583b49558ae98be1586e10d2~mv2.jpeg"
              alt="Child behavioural symptoms illustration"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} loading="lazy" decoding="async" />
          </div>
          <div className="neuro-content">
            <div className="sec-head-alt reveal">
              <h2>What symptoms can look like</h2>
              <p className="lead">
                Symptoms may vary from one child to another and can affect communication, attention, activity levels, emotions, learning, sleep and everyday behavior.
              </p>
            </div>
            <div className="neuro-grid">
              <div className="neuro-card reveal d1">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Z" />
                    <circle cx="12" cy="11" r="2.2" />
                  </svg>
                </div>
                <h4>Behavioral &amp; Emotional Changes</h4>
                <p>
                  Sudden behavioral or emotional changes, obsessive thoughts or compulsive behaviors, anxiety or increased fear, and changes in personality or mood.
                </p>
              </div>

              <div className="neuro-card reveal d2">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 4 4 15h7l-1 5 9-11h-7l1-5Z" />
                  </svg>
                </div>
                <h4>Motor &amp; Physical Symptoms</h4>
                <p>
                  Motor or vocal tics, and in the case of Lyme disease, an expanding skin rash, fever, chills, joint pain or swollen lymph nodes.
                </p>
              </div>

              <div className="neuro-card reveal d3">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a6 6 0 1 0 4.5 9.8A8 8 0 1 1 17 3Z" />
                  </svg>
                </div>
                <h4>Sleep &amp; Eating Changes</h4>
                <p>
                  Changes in eating habits, sleep disturbances, and increased urinary frequency observed alongside other symptoms.
                </p>
              </div>

              <div className="neuro-card reveal d1">
                <div className="nico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a10 10 0 0 1-4-.8L3 20l1-4a7.9 7.9 0 0 1-1-4c0-4.4 4-8 9-8s9 3.6 9 8Z" />
                  </svg>
                </div>
                <h4>Attention &amp; Daily Functioning</h4>
                <p>
                  Difficulty with attention or daily activities, and emotional sensitivity or mood fluctuations affecting everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ASSESSMENT & PERSONALIZED CARE */}
      <section className="sec behaviour">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>A coordinated approach to your child's needs</h2>
            <p className="lead">
              Diagnosis should be based on a complete clinical evaluation rather than a single test alone. Every child has unique symptoms and needs.
            </p>
          </div>
          <div className="beh-grid">
            <div className="beh-card reveal d1">
              <div className="beh-icon">
                <img src="https://static.wixstatic.com/media/66422a_1d138db3d5614a75903e9c7309dc2475~mv2.png"
                  alt="Medical Evaluation"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Medical Evaluation</h4>
                <p>
                  Assessment of medical history, symptoms, developmental changes and the timing of symptoms, with relevant laboratory tests when indicated.
                </p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <div className="beh-icon">
                <img src="https://static.wixstatic.com/media/66422a_a7a7d67125e641658de43ef13bd9e90d~mv2.png"
                  alt="Behavioral Support"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Behavioral Support</h4>
                <p>Structured behavioral support planned around the individual child's symptoms and family situation.</p>
              </div>
            </div>

            <div className="beh-card reveal d3">
              <div className="beh-icon">
                <img src="https://static.wixstatic.com/media/66422a_a1fd9271e62c4143849b690651c33f58~mv2.png"
                  alt="Developmental Therapies"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Developmental Therapies</h4>
                <p>Coordinated developmental therapies alongside medical care to support the child's overall progress.</p>
              </div>
            </div>

            <div className="beh-card reveal d1">
              <div className="beh-icon">
                <img src="https://static.wixstatic.com/media/66422a_e3538c8a64454d7b95e1da933e5703ce~mv2.png"
                  alt="Educational Guidance"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Educational Guidance</h4>
                <p>Guidance to help schools and families understand and support the child during periods of change.</p>
              </div>
            </div>

            <div className="beh-card reveal d2">
              <div className="beh-icon">
                <img src="https://static.wixstatic.com/media/66422a_6ddf3afd19dd4659a1618306129ca35a~mv2.png"
                  alt="Nutritional Support &amp; Follow-Up"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div>
                <h4>Nutritional Support &amp; Follow-Up</h4>
                <p>Nutritional guidance alongside regular follow-up to track progress and adjust the care plan as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2 className="reveal d1">Clarity and calm during sudden change.</h2>
          <p className="reveal d1">
            Book a consultation or share your child's reports securely. We'll listen carefully, be honest about how we can help, and work in step with your child's existing medical team.
          </p>
          <div className="cta-row reveal d2">
            <Link className="btn btn-primary" href="/contactus">
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
