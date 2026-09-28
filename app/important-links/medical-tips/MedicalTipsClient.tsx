'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --navy-dark: #071D3E;
    --teal: #008C8C;
    --gold: #C8A96B;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --shadow-sm: 0 4px 18px rgba(10,31,68,0.06);
    --shadow-md: 0 10px 30px -10px rgba(10,31,68,0.12);
    --shadow-hover: 0 18px 40px -12px rgba(10,31,68,0.2);
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f4f8fb;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  a { color: inherit; text-decoration: none; }

  /* ── HERO ── */
  .tips-hero {
    position: relative;
    background: radial-gradient(120% 120% at 84% 0%, #cceaf7 0%, #BBE0F4 48%, #9fd3ed 100%);
    color: var(--blue);
    padding: 64px 24px 72px;
  }
  .tips-hero .wrap {
    max-width: 1140px;
    margin: 0 auto;
  }
  .tips-hero h1 {
    font-size: clamp(2.1rem, 4vw, 3rem);
    color: #0A1F44;
    line-height: 1.2;
    margin-bottom: 14px;
    max-width: 22ch;
  }
  .tips-hero p {
    font-size: 1.05rem;
    color: #2b566c;
    max-width: 580px;
    line-height: 1.6;
  }

  /* ── MAIN CONTENT: SIDEBAR + TIPS ── */
  .tips-section {
    padding: 48px 24px 80px;
  }
  .tips-container {
    max-width: 1140px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 36px;
    align-items: start;
  }

  /* Sidebar Categories */
  .categories-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 24px 20px;
    box-shadow: var(--shadow-sm);
    border: 1px solid rgba(10,31,68,0.06);
    position: sticky;
    top: 24px;
  }
  .cat-title {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 16px;
    display: block;
  }
  .cat-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .cat-btn {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 0.88rem;
    font-weight: 500;
    color: #4a5a67;
    cursor: pointer;
    transition: background 0.25s, color 0.25s, transform 0.2s;
    font-family: inherit;
  }
  .cat-btn:hover {
    background: rgba(0,140,140,0.08);
    color: var(--teal);
    transform: translateX(3px);
  }
  .cat-btn.active {
    background: #e0f2f1;
    color: #00796b;
    font-weight: 700;
  }

  /* Tips List */
  .tips-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  /* Tip Card */
  .tip-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(10,31,68,0.06);
    display: grid;
    grid-template-columns: 240px 1fr;
    transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.3s;
  }
  .tip-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(0,140,140,0.3);
  }

  /* Card Image / Left Visual */
  .tip-media {
    position: relative;
    background: linear-gradient(135deg, #e8f4fa, #d0eaf5);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-height: 180px;
  }
  .tip-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .tip-card:hover .tip-media img {
    transform: scale(1.06);
  }

  /* SVG illustration inside media if no photo */
  .tip-media-illustration {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #0A1F44;
    padding: 20px;
    text-align: center;
  }
  .tip-media-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: linear-gradient(135deg, #008C8C, #0a4a6e);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 16px -4px rgba(0,140,140,0.35);
  }
  .tip-media-cat {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #0A1F44;
  }

  /* Card Content */
  .tip-body {
    padding: 26px 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .tip-date {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #008C8C;
    margin-bottom: 8px;
    display: block;
  }
  .tip-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 10px;
    line-height: 1.35;
  }
  .tip-desc {
    font-size: 0.88rem;
    color: #4a5568;
    line-height: 1.65;
    margin-bottom: 16px;
  }
  .tip-link {
    font-size: 0.82rem;
    font-weight: 600;
    color: #008C8C;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: gap 0.25s ease, color 0.25s;
    cursor: pointer;
  }
  .tip-link:hover {
    gap: 9px;
    color: #0a4a6e;
  }

  /* ── BOTTOM CTA ── */
  .tips-cta {
    background: linear-gradient(135deg, #071D3E 0%, #0A2F5E 100%);
    color: #ffffff;
    padding: 64px 24px;
    text-align: center;
  }
  .tips-cta h2 {
    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
    color: #ffffff;
    margin-bottom: 10px;
  }
  .tips-cta p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.8);
    max-width: 520px;
    margin: 0 auto 28px;
  }
  .btn-consult {
    display: inline-flex;
    align-items: center;
    background: #0096c7;
    color: #ffffff;
    padding: 13px 28px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    box-shadow: 0 8px 24px -6px rgba(0,150,199,0.5);
    transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
  }
  .btn-consult:hover {
    transform: translateY(-2px);
    background: #0084b0;
    box-shadow: 0 12px 28px -6px rgba(0,150,199,0.7);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .tips-container {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .categories-card {
      position: static;
    }
    .cat-list {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
    }
    .cat-btn {
      width: auto;
      padding: 8px 14px;
    }
  }

  @media (max-width: 640px) {
    .tip-card {
      grid-template-columns: 1fr;
    }
    .tip-media {
      aspect-ratio: 16 / 9;
      min-height: 160px;
    }
    .tip-body {
      padding: 20px 20px 24px;
    }
    .tips-hero {
      padding: 44px 16px 52px;
    }
    .tips-section {
      padding: 32px 16px 60px;
    }
  }
`;

interface MedicalTip {
  category: string;
  date: string;
  title: string;
  desc: string;
  image: string;
}

const allTips: MedicalTip[] = [
  {
    category: "Pain & Spine",
    date: "JUN 13, 2025",
    title: "Pain in Back after Delivery due to Injury to Spine",
    desc: "Rx Hypericum-30, 4 pills (30 no. globule) 3 times a day for 1–2 days then wait for a week. Repeat if needed after 2–3 months. Safe, gentle support for post-delivery spinal discomfort.",
    image: "/images/treatments/prolapsed-vertebral-disc.jpg",
  },
  {
    category: "General Health",
    date: "JUL 04, 2025",
    title: "Carcinoma — Tail of Pancreas",
    desc: "Rx Calc Ars-30, 4 pills (30 no. globule) only once. Repeat if needed after 1 month. Always alongside your oncology care team.",
    image: "/images/treatments/child-neurological-disorders.jpg",
  },
  {
    category: "General Health",
    date: "JUL 15, 2025",
    title: "Common Cold and Allergic Rhinitis",
    desc: "To prevent recurrent attacks: Rx Quilla Saponaria-30, 4 pills 3 times a day for 1–3 days, then wait a week. Repeat as needed. Effective for chronic allergic rhinitis sufferers.",
    image: "/images/treatments/asthma-allergy.jpg",
  },
  {
    category: "Hair & Skin",
    date: "FEB 10, 2025",
    title: "Hair Falling & Premature Greying",
    desc: "Rx Weisbaden 30, 4 pills early in the morning every 3rd day until hair fall stops. This remedy also helps prevent premature greying of hair and strengthens root follicles.",
    image: "/images/treatments/hair-falling.jpg",
  },
  {
    category: "Child Neurology",
    date: "MAY 18, 2025",
    title: "Support for Autistic Child Not Sleeping & Restlessness",
    desc: "Helpful guidance for an autistic child not sleeping or experiencing bedtime anxiety: Rx Stramonium-30, 4 pills before bedtime for 3 days. Calms hyper-arousal and sensory sensitivity.",
    image: "/images/autism-care/beh-2-sleeping-boy.png",
  },
  {
    category: "Child Neurology",
    date: "AUG 22, 2025",
    title: "How to Increase Speech in Autistic Child — Homeopathic Guidance",
    desc: "Parents asking how to increase speech in autistic child alongside speech therapy can explore Rx Baryta Carb-30, 4 pills once weekly to support cognitive readiness and focus.",
    image: "/images/autism-care/child-boy-peeking.png",
  },
  {
    category: "Women's Health",
    date: "SEP 05, 2025",
    title: "Painful Menstrual Spasms & Dysmenorrhea",
    desc: "Rx Magnesia Phos-6X, 4 tablets dissolved in warm water every 2 hours during acute spasms for rapid, muscle-relaxing abdominal soothing.",
    image: "/images/treatments/female-infertility.jpg",
  },
  {
    category: "Women's Health",
    date: "OCT 12, 2025",
    title: "PCOS & Hormonal Irregularity Support",
    desc: "Rx Pulsatilla-30, 4 pills once weekly in the morning. Gently encourages natural ovarian cyclicity, follicular balance, and mood stability.",
    image: "/images/treatments/female-infertility.jpg",
  },
  {
    category: "Pain & Spine",
    date: "NOV 01, 2025",
    title: "Sciatica & Lumbar Disc Herniation Relief",
    desc: "Rx Gnaphalium-30, 4 pills twice daily for 3 days to alleviate numbness, sciatic leg tingling, and nerve compression discomfort.",
    image: "/images/treatments/prolapsed-vertebral-disc.jpg",
  },
  {
    category: "Hair & Skin",
    date: "DEC 14, 2025",
    title: "Atopic Eczema with Intense Dry Itching",
    desc: "Rx Graphites-30, 4 pills twice weekly to soothe cracked skin folds, skin dryness, and strengthen the epidermal barrier naturally.",
    image: "/images/atopic-dermatitis/image-1.jpg",
  },
];

const categories = [
  "All Tips",
  "Child Neurology",
  "General Health",
  "Women's Health",
  "Pain & Spine",
  "Hair & Skin",
];

export default function MedicalTipsPage() {
  const [selectedCat, setSelectedCat] = useState("All Tips");

  const filteredTips =
    selectedCat === "All Tips"
      ? allTips
      : allTips.filter((tip) => tip.category === selectedCat);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* HERO */}
      <section className="tips-hero">
        <div className="wrap">
          <h1>Homeopathy Tips for Everyday Wellness</h1>
          <p>
            Practical homeopathic guidance from Dr. Ketan Patel — for autism, neurological disorders, and general child health.
          </p>
        </div>
      </section>

      {/* MAIN BODY WITH CATEGORIES AND TIPS */}
      <section className="tips-section">
        <div className="tips-container">
          {/* Left Categories Sidebar */}
          <aside className="categories-card">
            <span className="cat-title">Categories</span>
            <ul className="cat-list">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`cat-btn ${selectedCat === cat ? "active" : ""}`}
                    onClick={() => setSelectedCat(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Tips List */}
          <main className="tips-list">
            {filteredTips.map((tip, idx) => (
              <article key={idx} className="tip-card">
                <div className="tip-media">
                  <img src={tip.image} alt={tip.title} loading="lazy" decoding="async" />
                </div>
                <div className="tip-body">
                  <span className="tip-date">{tip.date}</span>
                  <h3 className="tip-title">{tip.title}</h3>
                  <p className="tip-desc">{tip.desc}</p>
                  <Link href="/contactus" className="tip-link">
                    Read full tip &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </main>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="tips-cta">
        <h2>Share Your Story or Seek Support</h2>
        <p>Book a consultation with Dr. Ketan Patel and take the first step.</p>
        <Link href="/contactus" className="btn-consult">
          Book a Consultation Today
        </Link>
      </section>
    </>
  );
}
