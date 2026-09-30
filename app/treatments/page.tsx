import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Neurological, Genetic & Metabolic Disorder Homeopathy Care',
  description:
    'Explore homeopathic care programs at Speciality Homeopathy: autism, cerebral palsy, ADHD and more, with early intervention support. Consult today.',
  keywords:
    'early intervention therapy, homeopathy treatments India, pediatric homeopathy, natural treatment for children',
};

const treatmentAreas = [
  {
    title: "Autism Care",
    desc: "Supportive homeopathic care for autism spectrum conditions, focusing on individualised comfort, routine, and child wellbeing.",
    image: "/images/treatments/autism-care.jpg",
    slug: "/autism-care",
  },
  {
    title: "Child Neurological Disorders",
    desc: "Child Neurological Disorders – expert homoeopathic care targeting the root causes of neurological conditions in children.",
    image: "/images/treatments/child-neurological-disorders.jpg",
    slug: "/child-neurological-disorders",
  },
  {
    title: "Down's Syndrome",
    desc: "Down's Syndrome is one of the most common genetic birth defects, associated with intellectual disability.",
    image: "/images/treatments/downs-syndrome.jpg",
    slug: "/downs-syndrome",
  },
  {
    title: "ADHD & ADD",
    desc: "Support for attention deficit, hyperactivity, impulsivity, focus concentration, and executive function in children.",
    image: "/images/treatments/adhd-add.jpg",
    slug: "/adhd-add",
  },
  {
    title: "Cerebral Palsy",
    desc: "Targeted support for motor control, muscle tone coordination, balance, and developmental milestones.",
    image: "/images/cerebral-palsy/image-1.jpg",
    slug: "/cerebral-palsy",
  },
  {
    title: "Child Behavioral Disorders",
    desc: "Supportive constitutional care for PANS, PANDAS, emotional regulation, anxiety, and sudden behavioural shifts.",
    image: "/images/treatments/child-behavioral-disorder.jpg",
    slug: "/child-behavioral-disorder",
  },
  {
    title: "Dyslexia & Learning Difficulties",
    desc: "Support for reading challenges, working memory, cognitive processing speed, and academic confidence.",
    image: "/images/treatments/dyslexia.jpg",
    slug: "/dyslexia",
  },
  {
    title: "Developmental Delays",
    desc: "Holistic care addressing delayed speech, motor milestones, cognitive development, and sensory processing.",
    image: "/images/developmental-delays/image-1.webp",
    slug: "/developmental-delays",
  },
  {
    title: "Intellectual Disability",
    desc: "Compassionate constitutional therapy supporting cognitive abilities, adaptive behavior, and daily living skills.",
    image: "/images/intellectual-disability/image-1.webp",
    slug: "/intellectual-disability",
  },
  {
    title: "Mental Retardation",
    desc: "Compassionate, individualised developmental and cognitive assistance tailored to your child's pace.",
    image: "/images/mental-retardation/image-1.webp",
    slug: "/mental-retardation",
  },
  {
    title: "Asthma & Allergies",
    desc: "Strengthening respiratory resilience and reducing hypersensitivity and bronchial spasms naturally.",
    image: "/images/treatments/asthma-allergy.jpg",
    slug: "/asthma-allergy",
  },
  {
    title: "Atopic Dermatitis & Eczema",
    desc: "Gentle, deep-acting constitutional relief for chronic skin inflammation, itching, and dry eczema.",
    image: "/images/atopic-dermatitis/image-1.jpg",
    slug: "/atopic-dermatitis",
  },
  {
    title: "Female Infertility & PCOS",
    desc: "Constitutional balance for menstrual regularity, ovulation support, PCOS/PCOD, and conception.",
    image: "/images/treatments/female-infertility.jpg",
    slug: "/female-infertility",
  },
  {
    title: "Male Infertility",
    desc: "Comprehensive support for sperm count, motility, morphology, and constitutional reproductive vitality.",
    image: "/images/oligospermia/image-1.jpg",
    slug: "/male-infertility",
  },
  {
    title: "Oligospermia Treatment",
    desc: "Targeted natural homeopathic formulations for low sperm count, motility, and semen quality.",
    image: "/images/oligospermia/image-6.jpg",
    slug: "/oligospermia",
  },
  {
    title: "Recurrent Abortions",
    desc: "Constitutional support for reproductive resilience, uterine lining strength, and full-term pregnancy.",
    image: "/images/recurrent-abortions/image-1.png",
    slug: "/recurrent-abortions",
  },
  {
    title: "Hair Falling & Baldness",
    desc: "Natural constitutional therapy for hair regrowth, follicle vitality, and chronic scalp shedding.",
    image: "/images/treatments/hair-falling.jpg",
    slug: "/hair-falling",
  },
  {
    title: "Increase Height & Growth",
    desc: "Support for pituitary growth axis and bone development during critical growing adolescent years.",
    image: "/images/treatments/increase-height.jpg",
    slug: "/increase-height",
  },
  {
    title: "MDR Tuberculosis Care",
    desc: "Supportive complementary care to enhance vitality, immune strength, and reduce medication side effects.",
    image: "/images/mdr-tuberculosis/image-1.webp",
    slug: "/mdr-tuberculosis",
  },
  {
    title: "Prolapsed Vertebral Disc (PVD)",
    desc: "Non-surgical constitutional management for disc herniation, nerve compression, and sciatica relief.",
    image: "/images/treatments/prolapsed-vertebral-disc.jpg",
    slug: "/prolapsed-vertebral-disc",
  },
];

const pageStyles = `:root{
    --blue:#0A1F44;
    --teal:#008C8C;
    --gold:#C8A96B;
    --ivory:#FAF8F4;
    --graphite:#2E2E2E;
    --shadow:0 24px 60px -30px rgba(10,31,68,.34);
    --shadow-sm:0 12px 30px -20px rgba(10,31,68,.3);
    --maxw:1180px;
    --ease:cubic-bezier(.2,.7,.2,1);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'Open Sans',system-ui,sans-serif;color:var(--graphite);background:#ffffff;font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
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

  /* ── HERO BANNER — light blue (matches theme) ── */
  .hero-wrap-outer {
    background: #ffffff;
    padding: 16px 36px 20px;
    width: 100%;
  }
  .hero {
    width: 100%;
    margin: 0 auto;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    min-height: 280px;
    display: flex;
    align-items: center;
    background: #AFDCF7;
    box-shadow: 0 12px 36px -12px rgba(10,31,68,0.18);
  }
  .hero-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(50px);
    pointer-events: none;
  }
  .hero-blob-1 {
    width: 340px; height: 340px;
    top: -140px; left: -80px;
    background: rgba(255,255,255,0.35);
  }
  .hero-blob-2 {
    width: 260px; height: 260px;
    bottom: -120px; left: 38%;
    background: rgba(255,255,255,0.3);
  }
  .hero-dot-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(10,31,68,0.14) 1.5px, transparent 1.5px);
    background-size: 22px 22px;
    -webkit-mask-image: linear-gradient(115deg, transparent 0%, transparent 38%, #000 70%);
    mask-image: linear-gradient(115deg, transparent 0%, transparent 38%, #000 70%);
  }
  .hero-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
    padding: 48px 56px;
  }
  .hero-text { max-width: 560px; }
  .hero h1 {
    font-size: clamp(2rem, 3.2vw, 2.7rem);
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 14px;
    line-height: 1.18;
    letter-spacing: -0.5px;
  }
  .hero h1 span { color: #1e6f78; }
  .hero-sub {
    color: rgba(10,31,68,0.78);
    font-size: 15px;
    line-height: 1.65;
    max-width: 480px;
  }

  /* ── HERO VISUAL: floating glass chips ── */
  .hero-visual {
    position: relative;
    width: 320px;
    height: 250px;
    flex-shrink: 0;
  }
  .hero-visual-ring {
    position: absolute;
    width: 220px; height: 220px;
    border-radius: 50%;
    border: 1.5px dashed rgba(10,31,68,0.2);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .hero-chip {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 9px;
    background: rgba(255,255,255,0.65);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(10,31,68,0.15);
    border-radius: 14px;
    padding: 11px 16px;
    color: #0A1F44;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 10px 26px rgba(10,31,68,0.12);
    animation: chipFloat 4.5s ease-in-out infinite;
  }
  .hero-chip svg { width: 16px; height: 16px; color: #1e6f78; flex-shrink: 0; }
  .chip-1 { top: 10px; left: 0; animation-delay: 0s; }
  .chip-2 { top: 95px; right: -10px; animation-delay: 1.2s; }
  .chip-3 { bottom: 10px; left: 24px; animation-delay: 2.4s; }
  @keyframes chipFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-9px); }
  }

  /* ── OUR TREATMENT AREAS SECTION ── */
  .treatments-section {
    background: #ffffff;
    padding: 50px 36px 84px;
    width: 100%;
  }
  .treatments-wrap {
    max-width: 1240px;
    margin: 0 auto;
  }
  .treatments-header {
    margin-bottom: 34px;
  }
  .treatments-title {
    font-size: clamp(2rem, 3.2vw, 2.5rem);
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: #1a1a2e;
    letter-spacing: -0.01em;
  }
  .treatments-title span {
    color: #3a9ea0;
  }
  .treatments-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .treatment-card {
    background: #ffffff;
    border: 1.5px solid #ececec;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 4px 18px rgba(10, 31, 68, 0.04);
    transition: transform 0.25s cubic-bezier(0.2, 0.7, 0.2, 1),
                box-shadow 0.25s cubic-bezier(0.2, 0.7, 0.2, 1),
                border-color 0.25s ease;
    cursor: pointer;
  }
  .treatment-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 36px rgba(58, 158, 160, 0.15);
    border-color: #b2e2e4;
  }
  .card-img-wrap {
    width: 100%;
    height: 215px;
    overflow: hidden;
    background: #eaf4f7;
    position: relative;
  }
  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .treatment-card:hover .card-img {
    transform: scale(1.03);
  }
  .card-body {
    padding: 22px 24px 26px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .card-title {
    font-size: 1.15rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: #1a1a2e;
    margin-bottom: 12px;
    line-height: 1.3;
  }
  .card-desc {
    font-size: 13.5px;
    color: #444;
    line-height: 1.6;
    font-family: 'Open Sans', system-ui, sans-serif;
    margin: 0;
  }

  /* CTA */
  .cta{position:relative;background:linear-gradient(145deg,#ceedf8 0%,#BAE0F3 45%,#a8d6ee 100%);color:var(--blue);text-align:center;padding:90px 0;overflow:hidden}
  .cta::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(255,255,255,.32),transparent 75%);pointer-events:none}
  .cta::after{content:"";position:absolute;top:0;left:15%;right:15%;height:1.5px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9) 40%,rgba(255,255,255,.9) 60%,transparent);pointer-events:none}
  .cta .wrap{position:relative;z-index:1;max-width:700px}
  .cta h2{color:var(--blue);font-size:clamp(1.7rem,3.2vw,2.4rem);margin-bottom:16px}
  .cta p{color:rgba(10,31,68,.78);max-width:52ch;margin:0 auto 30px;font-size:1rem}
  .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
  .cta .btn-ghost{background:rgba(255,255,255,.55);color:var(--blue);border-color:rgba(10,31,68,.25);backdrop-filter:blur(8px)}
  .cta .btn-ghost:hover{background:rgba(255,255,255,.75);transform:translateY(-2px)}
  .cta .eyebrow{color:var(--teal)}

  @media(max-width: 1024px) {
    .treatments-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
    .hero-wrap-outer {
      padding: 14px 20px;
    }
    .hero-inner {
      padding: 38px 30px;
    }
  }

  @media(max-width: 700px) {
    .hero-wrap-outer {
      padding: 16px 12px 10px;
    }
    .hero {
      padding: 36px 20px !important;
      text-align: center !important;
      min-height: auto !important;
      border-radius: 20px;
    }
    .hero-inner {
      flex-direction: column !important;
      gap: 20px !important;
      padding: 0 !important;
    }
    .hero h1 {
      font-size: 1.8rem !important;
    }
    .hero-sub {
      font-size: 0.92rem !important;
      max-width: 100% !important;
    }
    .hero-visual {
      display: none !important;
    }
    .treatments-section {
      padding: 36px 16px 60px;
    }
    .treatments-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .card-img-wrap {
      height: 200px;
    }
  }
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* HERO BANNER */}
      <section className="hero-wrap-outer" id="top">
        <div className="hero">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-dot-grid" />
          <div className="hero-inner">
            <div className="hero-text">
              <h1>
                Personalised <span>Treatments</span> for Every Condition
              </h1>
              <p className="hero-sub">
                15 specialised treatment programs rooted in classical homeopathy — gentle, natural and tailored to your needs.
              </p>
            </div>
            <div className="hero-visual">
              <div className="hero-visual-ring" />
              <div className="hero-chip chip-1">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
                Autism Care
              </div>
              <div className="hero-chip chip-2">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
                Hormonal Balance
              </div>
              <div className="hero-chip chip-3">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2l3.5 7.5L23 11l-5.5 5.5L19 24l-7-4-7 4 1.5-7.5L1 11l7.5-1.5L12 2z"
                    fill="currentColor"
                  />
                </svg>
                Skin Disorders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TREATMENT AREAS */}
      <section className="treatments-section" id="treatment-areas">
        <div className="treatments-wrap">
          <div className="treatments-header">
            <h2 className="treatments-title">
              Our Treatment <span>Areas</span>
            </h2>
          </div>

          <div className="treatments-grid">
            {treatmentAreas.map((item, idx) => (
              <Link key={idx} href={item.slug} prefetch={true} className="treatment-card">
                <div className="card-img-wrap">
                  <img src={item.image}
                    alt={item.title}
                    className="card-img" loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="wrap">
          <span className="eyebrow">Need Guidance?</span>
          <h2>Not sure which treatment fits your needs?</h2>
          <p>
            Contact our consultation desk to speak with our doctors and understand the best approach for your health.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contact">
              Book a Consultation
            </Link>
            <a className="btn btn-ghost" href="tel:+919898005354">
              Call +91 98980 05354
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
