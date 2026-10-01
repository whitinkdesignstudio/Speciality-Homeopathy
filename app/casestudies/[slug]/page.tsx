import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { CASE_STUDIES, getCaseStudyBySlug } from '../../../lib/caseStudiesData';
import { SITE_URL } from '@/lib/seo/siteConfig';
import {
  getWebPageEntity,
  getArticleEntity,
  getBreadcrumbListEntity,
  createPageJsonLd,
} from '@/lib/seo/schema';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  CASE_STUDIES.forEach((c) => {
    params.push({ slug: c.slug });
    if (c.wpSlug && c.wpSlug !== c.slug) {
      params.push({ slug: c.wpSlug });
    }
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Speciality Homeopathy',
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    };
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://specialityhomeopathy.com').replace(/\/$/, '');
  const canonicalUrl = `${siteUrl}/casestudies/${caseStudy.slug}`;

  return {
    title: `${caseStudy.shortTitle} – Documented Autism Case Study | Speciality Homeopathy`,
    description: caseStudy.metaDescription,
    keywords: caseStudy.metaKeywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${caseStudy.shortTitle} – Speciality Homeopathy`,
      description: caseStudy.metaDescription,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: `${siteUrl}${caseStudy.image}`,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
  };
}

const detailStyles = `
  :root {
    --blue: #0A1F44;
    --navy-bar: #0B2545;
    --teal: #008C8C;
    --teal-dark: #006666;
    --teal-light: #E0F2F1;
    --gold: #C8A96B;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --muted: #5A6A80;
    --border: rgba(10,31,68,0.1);
    --shadow-card: 0 12px 32px -10px rgba(10,31,68,0.1);
    --shadow-hover: 0 20px 45px -12px rgba(10,31,68,0.2);
    --ease: cubic-bezier(.2,.7,.2,1);
  }

  .case-detail-page {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #f7fafc;
    line-height: 1.7;
    padding-bottom: 60px;
  }

  /* ── HERO BANNER ── */
  .case-hero {
    background: radial-gradient(120% 120% at 85% 0%, #d4eef9 0%, #BAE0F3 48%, #9ed0eb 100%);
    padding: 48px 24px 56px;
    border-bottom: 1px solid rgba(10,31,68,0.08);
  }
  .case-hero .hero-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .hero-nav-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 22px;
  }
  .case-breadcrumb {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.84rem;
    color: rgba(10,31,68,0.7);
  }
  .case-breadcrumb a {
    color: var(--teal-dark);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
  }
  .case-breadcrumb a:hover {
    color: var(--blue);
    text-decoration: underline;
  }
  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--blue);
    background: rgba(255,255,255,0.85);
    padding: 6px 14px;
    border-radius: 999px;
    text-decoration: none;
    border: 1px solid rgba(10,31,68,0.12);
    transition: all 0.2s;
  }
  .back-link:hover {
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(10,31,68,0.1);
    transform: translateX(-2px);
  }

  .badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 16px;
  }
  .pill-badge {
    background: var(--blue);
    color: #ffffff;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 999px;
  }
  .pill-tag {
    background: rgba(0,140,140,0.15);
    color: var(--teal-dark);
    font-size: 0.74rem;
    font-weight: 600;
    padding: 5px 12px;
    border-radius: 999px;
  }

  .case-main-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 3.2vw, 2.5rem);
    font-weight: 700;
    color: var(--blue);
    line-height: 1.25;
    margin-bottom: 18px;
  }
  .case-meta-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 18px;
    font-size: 0.88rem;
    color: rgba(10,31,68,0.8);
    padding-top: 8px;
    border-top: 1px solid rgba(10,31,68,0.1);
  }
  .meta-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  /* ── METRICS STRIP ── */
  .metrics-wrap {
    max-width: 1100px;
    margin: -30px auto 40px;
    padding: 0 24px;
    position: relative;
    z-index: 10;
  }
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    background: #ffffff;
    border-radius: 18px;
    padding: 22px 28px;
    box-shadow: 0 14px 34px -10px rgba(10,31,68,0.12);
    border: 1px solid rgba(10,31,68,0.06);
  }
  .metric-cell {
    text-align: center;
    border-right: 1px solid rgba(10,31,68,0.08);
    padding: 0 10px;
  }
  .metric-cell:last-child {
    border-right: none;
  }
  .metric-label {
    font-size: 0.74rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
    font-weight: 700;
    margin-bottom: 4px;
  }
  .metric-value {
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--blue);
  }

  /* ── MAIN CONTENT LAYOUT ── */
  .case-content-layout {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 36px;
    align-items: start;
  }

  /* ── ARTICLE BODY ── */
  .case-article {
    background: #ffffff;
    border-radius: 20px;
    padding: 40px 42px;
    box-shadow: var(--shadow-card);
    border: 1px solid var(--border);
  }
  .case-article h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.45rem;
    color: var(--blue);
    margin: 34px 0 14px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--teal-light);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .case-article h2:first-of-type {
    margin-top: 0;
  }
  .case-article p {
    font-size: 0.98rem;
    color: #374151;
    margin-bottom: 16px;
    line-height: 1.75;
  }
  .case-quote-box {
    margin: 28px 0;
    padding: 24px 28px;
    background: linear-gradient(135deg, #f0f9ff 0%, #e6f6f5 100%);
    border-left: 4px solid var(--teal);
    border-radius: 0 16px 16px 0;
    font-style: italic;
    color: var(--blue);
    font-size: 1.05rem;
    line-height: 1.7;
    position: relative;
  }
  .case-quote-box strong {
    display: block;
    font-style: normal;
    margin-top: 10px;
    font-size: 0.85rem;
    color: var(--teal-dark);
  }

  /* Symptoms Checklist Box */
  .symptoms-box {
    background: #faf8f5;
    border: 1px solid rgba(200,169,107,0.3);
    border-radius: 16px;
    padding: 26px 28px;
    margin: 28px 0;
  }
  .symptoms-box h3 {
    font-size: 1.15rem;
    color: var(--blue);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .symptom-list {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .symptom-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.92rem;
    color: #4b5563;
  }
  .symptom-icon {
    flex-shrink: 0;
    margin-top: 3px;
    color: #c93b2b;
  }

  /* Timeline */
  .timeline-container {
    margin: 32px 0;
    position: relative;
    padding-left: 28px;
  }
  .timeline-container::before {
    content: '';
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 8px;
    width: 2px;
    background: var(--teal-light);
  }
  .timeline-step {
    position: relative;
    margin-bottom: 24px;
  }
  .timeline-step:last-child {
    margin-bottom: 0;
  }
  .timeline-dot {
    position: absolute;
    left: -28px;
    top: 3px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--teal);
    border: 3px solid #ffffff;
    box-shadow: 0 0 0 2px var(--teal);
  }
  .timeline-time {
    display: inline-block;
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--teal-dark);
    background: var(--teal-light);
    padding: 2px 10px;
    border-radius: 999px;
    margin-bottom: 4px;
  }
  .timeline-title {
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--blue);
    margin-bottom: 4px;
  }
  .timeline-desc {
    font-size: 0.9rem;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 0 !important;
  }

  /* Points to ponder */
  .points-box {
    background: #edf8f8;
    border: 1px solid rgba(0,140,140,0.25);
    border-radius: 16px;
    padding: 26px 28px;
    margin: 32px 0;
  }
  .points-box h3 {
    font-size: 1.15rem;
    color: var(--teal-dark);
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .points-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .point-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.92rem;
    color: #2e4a4a;
  }
  .point-check {
    color: var(--teal);
    flex-shrink: 0;
    margin-top: 3px;
  }

  /* Doctor Commentary */
  .doctor-note-card {
    background: linear-gradient(135deg, #0A1F44 0%, #0d3066 100%);
    color: #ffffff;
    border-radius: 18px;
    padding: 28px 30px;
    margin: 36px 0 20px;
    box-shadow: 0 16px 36px -12px rgba(10,31,68,0.3);
  }
  .doctor-note-card h3 {
    font-size: 1.15rem;
    color: #ffffff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .doctor-note-card p {
    color: rgba(255,255,255,0.9);
    font-size: 0.94rem;
    line-height: 1.7;
    margin-bottom: 14px;
  }
  .doctor-sign {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(255,255,255,0.15);
  }
  .doctor-name {
    font-weight: 700;
    font-size: 0.92rem;
  }
  .doctor-title {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.75);
  }

  /* ── SIDEBAR ── */
  .case-sidebar {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: sticky;
    top: 90px;
  }
  .sidebar-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 26px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow-card);
  }
  .sidebar-card h3 {
    font-size: 1.1rem;
    color: var(--blue);
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(10,31,68,0.08);
  }
  .profile-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .profile-row {
    display: flex;
    flex-direction: column;
  }
  .profile-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted);
  }
  .profile-val {
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--blue);
    margin-top: 2px;
  }

  /* CTA Sidebar */
  .sidebar-cta-card {
    background: radial-gradient(circle at top right, #0096c7, #0B2545);
    color: #ffffff;
    border-radius: 18px;
    padding: 28px 24px;
    text-align: center;
    box-shadow: 0 16px 36px -10px rgba(11,37,69,0.35);
  }
  .sidebar-cta-card h3 {
    color: #ffffff;
    font-size: 1.25rem;
    margin-bottom: 8px;
  }
  .sidebar-cta-card p {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.85);
    margin-bottom: 20px;
    line-height: 1.55;
  }
  .btn-cta-white {
    display: block;
    width: 100%;
    background: #ffffff;
    color: var(--blue);
    font-weight: 700;
    font-size: 0.86rem;
    padding: 12px 18px;
    border-radius: 10px;
    text-decoration: none;
    margin-bottom: 10px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn-cta-white:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }
  .btn-cta-whatsapp {
    display: block;
    width: 100%;
    background: #25D366;
    color: #ffffff;
    font-weight: 700;
    font-size: 0.86rem;
    padding: 12px 18px;
    border-radius: 10px;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn-cta-whatsapp:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37,211,102,0.3);
  }

  /* Related Cases in Sidebar */
  .other-cases-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .other-case-link {
    display: block;
    padding: 10px 12px;
    border-radius: 10px;
    background: #f8fafc;
    border: 1px solid rgba(10,31,68,0.06);
    text-decoration: none;
    transition: all 0.2s;
  }
  .other-case-link:hover {
    background: var(--teal-light);
    border-color: rgba(0,140,140,0.3);
    transform: translateX(3px);
  }
  .other-case-title {
    font-size: 0.86rem;
    font-weight: 700;
    color: var(--blue);
    line-height: 1.35;
  }
  .other-case-tag {
    font-size: 0.72rem;
    color: var(--teal-dark);
    font-weight: 600;
    margin-top: 4px;
    display: block;
  }

  /* ── MORE CASE STUDIES SECTION ── */
  .more-cases-section {
    max-width: 1100px;
    margin: 50px auto 0;
    padding: 0 24px;
  }
  .more-cases-section h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: var(--blue);
    margin-bottom: 22px;
    text-align: center;
  }
  .more-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }
  .more-case-card {
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-card);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
    text-decoration: none;
  }
  .more-case-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(0,140,140,0.35);
  }
  .more-card-img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    background: #e2e8f0;
  }
  .more-card-body {
    padding: 18px 20px 22px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .more-card-badge {
    align-self: flex-start;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--teal-dark);
    background: var(--teal-light);
    padding: 3px 10px;
    border-radius: 999px;
    margin-bottom: 8px;
  }
  .more-card-title {
    font-size: 0.98rem;
    font-weight: 700;
    color: var(--blue);
    line-height: 1.35;
    margin-bottom: 8px;
  }
  .more-card-brief {
    font-size: 0.82rem;
    color: #64748b;
    line-height: 1.55;
    margin-bottom: 12px;
    flex: 1;
  }
  .more-card-cta {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--teal-dark);
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  /* ── MEDICAL DISCLAIMER ── */
  .medical-disclaimer-box {
    max-width: 1100px;
    margin: 44px auto 0;
    padding: 22px 24px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid rgba(10,31,68,0.08);
    font-size: 0.8rem;
    color: #6b7280;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 1024px) {
    .case-content-layout {
      grid-template-columns: 1fr;
    }
    .metrics-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .metric-cell:nth-child(2) {
      border-right: none;
    }
    .metric-cell:nth-child(3) {
      border-right: 1px solid rgba(10,31,68,0.08);
    }
    .more-cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .case-sidebar {
      position: static;
    }
  }

  @media (max-width: 640px) {
    .case-article {
      padding: 26px 20px;
    }
    .case-main-title {
      font-size: 1.5rem;
    }
    .metrics-grid {
      grid-template-columns: 1fr;
      padding: 18px 20px;
    }
    .metric-cell {
      border-right: none;
      border-bottom: 1px solid rgba(10,31,68,0.08);
      padding-bottom: 12px;
    }
    .metric-cell:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .more-cards-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function CaseStudyDetailPage({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const otherCases = CASE_STUDIES.filter((c) => c.id !== caseStudy.id);

  const canonicalUrl = `${SITE_URL}/casestudies/${caseStudy.slug}`;
  const breadcrumbItems = [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Case Studies', url: `${SITE_URL}/casestudies` },
    { name: caseStudy.shortTitle, url: canonicalUrl },
  ];

  // Structured Data (JSON-LD) with consistent Publisher & WebSite linkages
  const pageJsonLd = createPageJsonLd([
    getWebPageEntity({
      canonicalUrl,
      name: `${caseStudy.shortTitle} – Documented Autism Case Study`,
      description: caseStudy.metaDescription,
      pageType: 'MedicalWebPage',
      breadcrumbId: `${canonicalUrl}#breadcrumb`,
    }),
    getArticleEntity({
      canonicalUrl,
      headline: caseStudy.title,
      description: caseStudy.metaDescription,
      imageUrl: `${SITE_URL}${caseStudy.image}`,
      datePublished: caseStudy.dateISO,
      authorName: caseStudy.patientProfile.author,
    }),
    getBreadcrumbListEntity(canonicalUrl, breadcrumbItems),
  ]);

  return (
    <div className="case-detail-page">
      <style dangerouslySetInnerHTML={{ __html: detailStyles }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="case-hero">
        <div className="hero-inner">
          <div className="hero-nav-row">
            <Link href="/casestudies" className="back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Case Studies
            </Link>
          </div>

          <div className="badge-row">
            <span className="pill-badge">{caseStudy.badge}</span>
            {caseStudy.tags.map((tag, tIdx) => (
              <span key={tIdx} className="pill-tag">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="case-main-title">{caseStudy.title}</h1>

          <div className="case-meta-line">
            <div className="meta-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>
                <strong>Documented by:</strong> {caseStudy.patientProfile.author}
              </span>
            </div>
            <div className="meta-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{caseStudy.patientProfile.location}</span>
            </div>
            <div className="meta-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{caseStudy.publishDate}</span>
            </div>
            <div className="meta-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span style={{ color: 'var(--teal-dark)', fontWeight: 700 }}>
                Verified Clinical Outcome
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS ROW */}
      <section className="metrics-wrap">
        <div className="metrics-grid">
          {caseStudy.stats.map((stat, sIdx) => (
            <div key={sIdx} className="metric-cell">
              <div className="metric-label">{stat.label}</div>
              <div className="metric-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN TWO-COLUMN BODY */}
      <section className="case-content-layout">
        {/* ARTICLE */}
        <article className="case-article">
          {/* SYMPTOMS BEFORE */}
          <h2>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Pre-Treatment Clinical Presentation &amp; Symptoms
          </h2>
          <div className="symptoms-box">
            <h3>Key Behavioral &amp; Neurodevelopmental Signs Documented</h3>
            <ul className="symptom-list">
              {caseStudy.symptomsBefore.map((symptom, idx) => (
                <li key={idx} className="symptom-item">
                  <span className="symptom-icon">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CHRONOLOGICAL TIMELINE */}
          <h2>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Chronological Progression &amp; Milestones
          </h2>
          <div className="timeline-container">
            {caseStudy.timeline.map((item, tIdx) => (
              <div key={tIdx} className="timeline-step">
                <div className="timeline-dot" />
                <span className="timeline-time">{item.period}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* FULL SECTIONS */}
          {caseStudy.fullStorySections.map((sec, secIdx) => (
            <div key={secIdx}>
              <h2>{sec.heading}</h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {sec.quote && (
                <div className="case-quote-box">
                  "{sec.quote}"
                  <strong>— Excerpt from Case Documentation / Parent Record</strong>
                </div>
              )}
            </div>
          ))}

          {/* POINTS TO PONDER (IF APPLICABLE) */}
          {caseStudy.pointsToPonder && caseStudy.pointsToPonder.length > 0 && (
            <div className="points-box">
              <h3>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Points to Ponder (Parent Guidance &amp; Practical Tips)
              </h3>
              <ul className="points-list">
                {caseStudy.pointsToPonder.map((point, ptIdx) => (
                  <li key={ptIdx} className="point-item">
                    <span className="point-check">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* DOCTOR COMMENTARY */}
          <div className="doctor-note-card">
            <h3>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Clinical Insight &amp; Physician Commentary
            </h3>
            <p>{caseStudy.doctorCommentary}</p>
            <div className="doctor-sign">
              <div>
                <div className="doctor-name">Dr. Ketan Patel (BHMS, MD Homeopathy)</div>
                <div className="doctor-title">Autism &amp; Rare Child Neurological Disorders Specialist • Since 1992</div>
              </div>
            </div>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="case-sidebar">
          {/* PROFILE SUMMARY */}
          <div className="sidebar-card">
            <h3>Patient &amp; Case Profile</h3>
            <div className="profile-list">
              <div className="profile-row">
                <span className="profile-label">Age at Start</span>
                <span className="profile-val">{caseStudy.patientProfile.ageAtStart}</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Gender &amp; Location</span>
                <span className="profile-val">{caseStudy.patientProfile.gender} • {caseStudy.patientProfile.location}</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Clinical Diagnosis</span>
                <span className="profile-val">{caseStudy.patientProfile.diagnosis}</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Protocol Duration</span>
                <span className="profile-val">{caseStudy.patientProfile.duration}</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Current Academic / School Status</span>
                <span className="profile-val" style={{ color: 'var(--teal-dark)' }}>
                  {caseStudy.patientProfile.schoolStatus}
                </span>
              </div>
            </div>
          </div>

          {/* CTA CARD */}
          <div className="sidebar-cta-card">
            <h3>Have Questions About Your Child?</h3>
            <p>
              Dr. Ketan Patel and the clinical team provide individualised evaluations for autism, speech regression, and genetic channelopathies.
            </p>
            <Link href="/contact" className="btn-cta-white">
              Book Doctor Consultation
            </Link>
            <a
              href="https://wa.me/918320131612"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-whatsapp"
            >
              WhatsApp Medical Desk
            </a>
          </div>

          {/* RELATED CASE STUDIES */}
          <div className="sidebar-card">
            <h3>More Documented Cases</h3>
            <div className="other-cases-list">
              {otherCases.map((other) => (
                <Link
                  key={other.id}
                  href={`/casestudies/${other.slug}`}
                  className="other-case-link"
                >
                  <span className="other-case-title">{other.shortTitle}</span>
                  <span className="other-case-tag">{other.badge}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* MORE CASE STUDIES GRID */}
      <section className="more-cases-section">
        <h2>Explore Other Documented Recovery Case Studies</h2>
        <div className="more-cards-grid">
          {otherCases.slice(0, 3).map((other) => (
            <Link
              key={other.id}
              href={`/casestudies/${other.slug}`}
              className="more-case-card"
            >
              <img
                src={other.image}
                alt={other.shortTitle}
                className="more-card-img"
                loading="lazy"
              />
              <div className="more-card-body">
                <span className="more-card-badge">{other.badge}</span>
                <h3 className="more-card-title">{other.shortTitle}</h3>
                <p className="more-card-brief">{other.brief.slice(0, 110)}...</p>
                <span className="more-card-cta">
                  Read Full Case Story &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MEDICAL DISCLAIMER */}
      <div className="medical-disclaimer-box">
        <strong>Medical &amp; Clinical Notice:</strong> Speciality Homeopathy provides individualized homeopathic care alongside family guidance. Neurological and genetic conditions are complex, and outcomes vary depending on the child's age, neuroplastic window, and individual constitutional responsiveness. Results cannot be guaranteed. Case studies represent documented patient experiences under Dr. Ketan Patel's protocol and are shared for educational and informational purposes. Always consult a qualified medical professional for health emergencies.
      </div>
    </div>
  );
}
