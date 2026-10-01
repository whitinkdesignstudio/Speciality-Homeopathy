import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Print Media | Specialist Homeopathy & Healthcare Centre',
  description: 'Read Speciality Homeopathy’s press coverage in Sandesh, Gujarat Samachar, DNA, Chitralekha and South Asia Mail on autism and homeopathy treatment in India.',
  keywords: 'homeopathy press coverage India, autism treatment media coverage, Gujarat homeopathy news, Sandesh homeopathy article, Indian media homeopathy',
};

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --navy-dark: #071D3E;
    --teal: #008C8C;
    --gold: #C8A96B;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --shadow-card: 0 4px 20px rgba(10,31,68,0.06);
    --shadow-hover: 0 12px 32px -8px rgba(10,31,68,0.14);
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
  .media-hero {
    position: relative;
    background: radial-gradient(120% 120% at 84% 0%, #cceaf7 0%, #BBE0F4 48%, #9fd3ed 100%);
    color: var(--blue);
    padding: 64px 24px 68px;
  }
  .media-hero .wrap {
    max-width: 1140px;
    margin: 0 auto;
  }
  .media-hero h1 {
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    color: #0A1F44;
    line-height: 1.18;
    margin-bottom: 14px;
    font-weight: 700;
  }
  .media-hero p {
    font-size: 1.05rem;
    color: #2b566c;
    max-width: 640px;
    line-height: 1.65;
  }

  /* ── MAIN LAYOUT: ARTICLE LIST + SIDEBAR ── */
  .media-section {
    padding: 48px 24px 80px;
  }
  .media-container {
    max-width: 1140px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 36px;
    align-items: start;
  }

  /* Articles List */
  .articles-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* Article Card with Left Accent Border */
  .article-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px 28px;
    box-shadow: var(--shadow-card);
    border: 1px solid rgba(10,31,68,0.06);
    border-left: 4px solid var(--teal);
    transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease), border-color 0.25s;
    display: flex;
    flex-direction: column;
  }
  .article-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(0,140,140,0.4);
    border-left-color: var(--teal);
  }

  /* Publication Tag with Dot */
  .article-source {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 8px;
  }
  .source-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--teal);
    display: inline-block;
  }

  .article-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: #0A1F44;
    line-height: 1.35;
    margin-bottom: 12px;
  }

  .article-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--teal);
    transition: gap 0.2s ease, color 0.2s;
    cursor: pointer;
    margin-top: 2px;
  }
  .article-link svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
  }
  .article-card:hover .article-link {
    color: #0a4a6e;
    gap: 8px;
  }
  .article-card:hover .article-link svg {
    transform: translate(2px, -2px);
  }

  /* ── SIDEBAR ── */
  .media-sidebar {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: sticky;
    top: 24px;
  }

  .sidebar-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 28px 24px;
    box-shadow: var(--shadow-card);
    border: 1px solid rgba(10,31,68,0.06);
  }
  .sidebar-card h3 {
    font-size: 1.12rem;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 12px;
  }
  .sidebar-card p {
    font-size: 0.88rem;
    color: #556677;
    line-height: 1.65;
  }

  .sidebar-image-wrap {
    margin-top: 18px;
    border-radius: 14px;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    background: #e8f4fa;
  }
  .sidebar-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── BOTTOM CTA ── */
  .media-cta {
    background: linear-gradient(135deg, #071D3E 0%, #0A2F5E 100%);
    color: #ffffff;
    padding: 64px 24px;
    text-align: center;
  }
  .media-cta h2 {
    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
    color: #ffffff;
    margin-bottom: 10px;
  }
  .media-cta p {
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
  @media (max-width: 960px) {
    .media-container {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .media-sidebar {
      position: static;
    }
  }

  @media (max-width: 640px) {
    .media-hero {
      padding: 44px 16px 52px;
    }
    .media-section {
      padding: 32px 16px 60px;
    }
    .article-card {
      padding: 20px 20px;
    }
    .article-title {
      font-size: 1.05rem;
    }
  }
`;

interface MediaArticle {
  source: string;
  title: string;
  linkUrl: string;
}

const mediaArticles: MediaArticle[] = [
  {
    source: "SANDESH",
    title: "Autism – In the News",
    linkUrl: "/contact",
  },
  {
    source: "GUJARAT SAMACHAR",
    title: "Less sugar levels in the body will be focused",
    linkUrl: "/contact",
  },
  {
    source: "DNA SYNDICATION",
    title: "Early intervention can cure autism — Doctors",
    linkUrl: "/contact",
  },
  {
    source: "CHITRALEKHA",
    title: "Autism Day Coverage",
    linkUrl: "/contact",
  },
  {
    source: "SOUTH ASIA MAIL",
    title: "Speciality Homeopathy — Feature Story",
    linkUrl: "/contact",
  },
  {
    source: "SOUTH ASIA MAIL",
    title: "Dr. Ketan Patel — Autism & Homeopathy",
    linkUrl: "/contact",
  },
  {
    source: "WEBINDIA123",
    title: "Autism Research Update — India",
    linkUrl: "/contact",
  },
];

export default function PrintMediaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* HERO */}
      <section className="media-hero">
        <div className="wrap">
          <h1>In the Media</h1>
          <p>
            Speciality Homeopathy, Autism, and Dr. Ketan Patel as featured in print media across India and internationally.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT: ARTICLES + SIDEBAR */}
      <section className="media-section">
        <div className="media-container">
          {/* Left Articles List */}
          <main className="articles-list">
            {mediaArticles.map((art, idx) => (
              <article key={idx} className="article-card">
                <div className="article-source">
                  <span className="source-dot"></span>
                  <span>{art.source}</span>
                </div>
                <h2 className="article-title">{art.title}</h2>
                <Link href={art.linkUrl} className="article-link">
                  <span>Read article</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              </article>
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="media-sidebar">
            <div className="sidebar-card">
              <h3>About Dr. Ketan Patel</h3>
              <p>
                With over 34 years of experience in supportive homeopathic care for autism and neurodevelopmental conditions, Dr. Ketan Patel has been featured in leading Indian and international publications.
              </p>
            </div>

            <div className="sidebar-card">
              <h3>Care for Autism</h3>
              <p>
                Providing safe, natural, and specialised supportive care for autism, neurological disorders, and overall wellness.
              </p>
              <div className="sidebar-image-wrap">
                <img src="/images/treatments/autism-care.jpg"
                  alt="Care for Autism — Speciality Homeopathy" loading="lazy" decoding="async" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="media-cta">
        <h2>Share Your Story or Seek Support</h2>
        <p>Book a consultation with Dr. Ketan Patel and take the first step.</p>
        <Link href="/contact" className="btn-consult">
          Book a Consultation Today
        </Link>
      </section>
    </>
  );
}
