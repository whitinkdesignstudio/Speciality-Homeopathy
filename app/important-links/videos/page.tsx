import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Videos | Specialist Homeopathy Treatment & Patient Care',
  description: 'Watch educational videos on homeopathic treatment for autism, cerebral palsy, ADHD, and more from the specialists at Speciality Homeopathy, Ahmedabad.',
  keywords: 'autism homeopathy video, Dr. Ketan Patel video, homeopathy education videos, child neurology treatment videos',
};

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --navy-dark: #071D3E;
    --teal: #008C8C;
    --gold: #C8A96B;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
    --shadow-card: 0 8px 24px -8px rgba(10,31,68,0.12);
    --shadow-hover: 0 16px 36px -10px rgba(10,31,68,0.22);
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
  .videos-hero {
    position: relative;
    background: radial-gradient(120% 120% at 84% 0%, #cceaf7 0%, #BBE0F4 48%, #9fd3ed 100%);
    color: var(--blue);
    padding: 64px 24px 68px;
  }
  .videos-hero .wrap {
    max-width: 1140px;
    margin: 0 auto;
  }
  .videos-hero h1 {
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    color: #0A1F44;
    line-height: 1.18;
    margin-bottom: 14px;
    font-weight: 700;
  }
  .videos-hero p {
    font-size: 1.05rem;
    color: #2b566c;
    max-width: 640px;
    line-height: 1.65;
  }

  /* ── VIDEO CARDS GRID ── */
  .videos-section {
    padding: 48px 24px 72px;
  }
  .videos-container {
    max-width: 1140px;
    margin: 0 auto;
  }
  .video-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-bottom: 56px;
  }

  /* Individual Video Card */
  .video-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-card);
    border: 1px solid rgba(10,31,68,0.06);
    display: flex;
    flex-direction: column;
    transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.3s;
    cursor: pointer;
  }
  .video-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(0,140,140,0.35);
  }

  /* Video Thumbnail Header with Play Overlay */
  .video-thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    background: linear-gradient(135deg, #0A1F44, #1a4a6e);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s var(--ease), opacity 0.3s;
    opacity: 0.92;
  }
  .video-card:hover .video-thumbnail img {
    transform: scale(1.06);
    opacity: 1;
  }

  /* Play Button Icon Overlay */
  .play-btn-circle {
    position: absolute;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0A1F44;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    transition: transform 0.3s var(--ease), background 0.3s, color 0.3s;
    z-index: 2;
  }
  .play-btn-circle svg {
    margin-left: 3px;
    width: 22px;
    height: 22px;
  }
  .video-card:hover .play-btn-circle {
    transform: scale(1.15);
    background: #008C8C;
    color: #ffffff;
  }

  /* Video Card Body */
  .video-body {
    padding: 22px 22px 26px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .video-title {
    font-size: 1.08rem;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 8px;
    line-height: 1.35;
  }
  .video-desc {
    font-size: 0.85rem;
    color: #526270;
    line-height: 1.6;
    margin: 0;
  }

  /* ── STAY UPDATED BOX ── */
  .subscribe-box {
    background: #eaf3f8;
    border: 1px solid #d2e5f0;
    border-radius: 20px;
    padding: 38px 24px;
    text-align: center;
    max-width: 960px;
    margin: 0 auto;
  }
  .subscribe-box h3 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 8px;
  }
  .subscribe-box p {
    font-size: 0.92rem;
    color: #4a5c68;
    margin-bottom: 22px;
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn-youtube {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #008C8C;
    color: #ffffff;
    padding: 12px 28px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 700;
    box-shadow: 0 8px 20px -6px rgba(0,140,140,0.45);
    transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
  }
  .btn-youtube:hover {
    transform: translateY(-2px);
    background: #007777;
    box-shadow: 0 12px 26px -6px rgba(0,140,140,0.6);
  }

  /* ── BOTTOM CTA ── */
  .videos-cta {
    background: linear-gradient(135deg, #071D3E 0%, #0A2F5E 100%);
    color: #ffffff;
    padding: 64px 24px;
    text-align: center;
  }
  .videos-cta h2 {
    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
    color: #ffffff;
    margin-bottom: 10px;
  }
  .videos-cta p {
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
  @media (max-width: 1024px) {
    .video-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 22px;
    }
  }

  @media (max-width: 640px) {
    .video-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .videos-hero {
      padding: 44px 16px 52px;
    }
    .videos-section {
      padding: 32px 16px 56px;
    }
    .video-body {
      padding: 18px 18px 22px;
    }
  }
`;

interface VideoItem {
  title: string;
  desc: string;
  image: string;
  linkUrl: string;
}

const videosData: VideoItem[] = [
  {
    title: "Autism — Early Signs to Watch For",
    desc: "Dr. Ketan Patel explains the early indicators of autism spectrum disorder every parent should know.",
    image: "/images/treatments/autism-care.jpg",
    linkUrl: "https://www.youtube.com/@SpecialityHomeopathy",
  },
  {
    title: "Homeopathy for Autism — Does it Help?",
    desc: "A candid conversation about how supportive homeopathic care complements standard therapies.",
    image: "/images/autism-care/beh-3-sensory-girl.png",
    linkUrl: "https://www.youtube.com/@SpecialityHomeopathy",
  },
  {
    title: "Diet & Nutrition for Autistic Children",
    desc: "Practical dietary advice to support children with neurodevelopmental differences.",
    image: "/images/treatments/female-infertility.jpg",
    linkUrl: "https://www.youtube.com/@SpecialityHomeopathy",
  },
  {
    title: "ADHD & Homeopathy — Parent Guide",
    desc: "Understanding attention-deficit conditions and how holistic support can ease daily life.",
    image: "/images/adhd-add/hero-banner.png",
    linkUrl: "https://www.youtube.com/@SpecialityHomeopathy",
  },
  {
    title: "Case Study: ASD Recovery Journey",
    desc: "An in-depth discussion of a child's progress over 2 years of supportive homeopathic care.",
    image: "/images/developmental-delays/image-3.webp",
    linkUrl: "https://www.youtube.com/@SpecialityHomeopathy",
  },
  {
    title: "FAQ — Homeopathy & Child Neurology",
    desc: "Dr. Patel answers the most common questions from parents seeking complementary care.",
    image: "/images/treatments/child-neurological-disorders.jpg",
    linkUrl: "https://www.youtube.com/@SpecialityHomeopathy",
  },
];

export default function VideosPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* HERO */}
      <section className="videos-hero">
        <div className="wrap">
          <h1>Video Library</h1>
          <p>
            Watch Dr. Ketan Patel discuss autism, homeopathy, and child neurology — informative sessions for parents and caregivers.
          </p>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="videos-section">
        <div className="videos-container">
          <div className="video-grid">
            {videosData.map((item, idx) => (
              <a
                key={idx}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="video-card"
              >
                <div className="video-thumbnail">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                  <div className="play-btn-circle">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="video-body">
                  <h3 className="video-title">{item.title}</h3>
                  <p className="video-desc">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* SUBSCRIBE BOX */}
          <div className="subscribe-box">
            <h3>Stay Updated</h3>
            <p>
              Subscribe to our YouTube channel for the latest videos on autism support, homeopathic care, and child neurology.
            </p>
            <a
              href="https://www.youtube.com/@SpecialityHomeopathy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="videos-cta">
        <h2>Share Your Story or Seek Support</h2>
        <p>Book a consultation with Dr. Ketan Patel and take the first step.</p>
        <Link href="/contactus" className="btn-consult">
          Book a Consultation Today
        </Link>
      </section>
    </>
  );
}
