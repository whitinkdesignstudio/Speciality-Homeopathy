'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const conditions = [
  {
    id: 1,
    title: 'Autism Spectrum',
    img: 'https://static.wixstatic.com/media/66422a_374dd45a9f1e41f98467dc61529716eb~mv2.png',
    link: '/treatments/autism-care',
    summary: 'A lifelong neurodevelopmental difference in communication, social interaction and sensory experience.',
    detail: 'Autism is not an illness to be cured — it is part of who a person is. Diagnosis and developmental support belong with qualified specialists. Our role is supportive: comfort, routine, sleep and family wellbeing, alongside that care.'
  },
  {
    id: 2,
    title: 'Child Neurological Conditions',
    img: 'https://static.wixstatic.com/media/66422a_b09ca22d233542e6b4c7003eb3729969~mv2.png',
    link: '/treatments/child-neurological-disorders',
    summary: 'A range of conditions affecting how a child’s nervous system develops and functions.',
    detail: 'These conditions are diagnosed and managed by paediatric neurologists and allied specialists. We offer gentle, supportive, family-centred care that complements — never replaces — that medical care.'
  },
  {
    id: 3,
    title: 'ADHD & ADD',
    img: 'https://static.wixstatic.com/media/66422a_b09ca22d233542e6b4c7003eb3729969~mv2.png',
    link: '/treatments/adhd-add',
    summary: 'Neurodevelopmental conditions affecting attention, activity level and impulse regulation.',
    detail: 'Best assessed and managed by qualified clinicians. Where families seek complementary support for general wellbeing and daily routine, we offer it honestly — never as a replacement for professional assessment or prescribed care.'
  },
  {
    id: 4,
    title: 'Cerebral Palsy',
    img: 'https://static.wixstatic.com/media/66422a_08f37d6825ae4a53b7af204543855533~mv2.png',
    link: '/treatments/cerebral-palsy',
    summary: 'A group of conditions affecting movement and posture, arising from early brain development.',
    detail: 'Cerebral palsy requires ongoing medical, physiotherapy and occupational-therapy care. Our supportive role focuses on comfort and family wellbeing and never substitutes for that essential care.'
  },
  {
    id: 5,
    title: 'Down Syndrome',
    img: 'https://static.wixstatic.com/media/66422a_e778b27795fc439d9d70fead90fdb7bc~mv2.png',
    link: '/treatments/downs-syndrome',
    summary: 'A genetic condition (trisomy 21) present from birth.',
    detail: 'Down syndrome is genetic and lifelong; it cannot be cured or reversed, and we make no such claim. Families are supported by paediatric and developmental specialists. We offer gentle, supportive care for general wellbeing alongside that team.'
  },
  {
    id: 6,
    title: 'Developmental Delay',
    img: 'https://static.wixstatic.com/media/66422a_4503b3e8572146928ad4ffa0867e4672~mv2.png',
    link: '/treatments/developmentaldelays',
    summary: 'When a child reaches developmental milestones later than typically expected.',
    detail: 'Developmental delay deserves timely, professional assessment so the right early support can begin. We walk alongside families, encouraging that early intervention and supporting wellbeing at home.'
  }
];

export default function HomePage() {
  useEffect(() => {
    // 1. Trigger reveal animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    document.querySelectorAll('.pillar').forEach((el) => io.observe(el));

    // 2. Auto-loop Elfsight reviews carousel (viewport-throttled for 60fps & zero idle CPU)
    const speed = 0.6;
    let paused = false;
    let isVisible = false;
    let rafId: number | null = null;
    let carouselObserver: IntersectionObserver | null = null;

    function startLoop(list: HTMLElement) {
      if (list.dataset.autoLoopAttached) return;
      list.dataset.autoLoopAttached = 'true';

      list.scrollLeft = list.scrollWidth - list.clientWidth;

      const onMouseEnter = () => { paused = true; };
      const onMouseLeave = () => { paused = false; };
      const onTouchStart = () => { paused = true; };
      const onTouchEnd = () => { paused = false; };

      list.addEventListener('mouseenter', onMouseEnter);
      list.addEventListener('mouseleave', onMouseLeave);
      list.addEventListener('touchstart', onTouchStart, { passive: true });
      list.addEventListener('touchend', onTouchEnd);

      function tick() {
        if (!isVisible) {
          rafId = null;
          return;
        }
        if (!paused) {
          list.scrollLeft -= speed;
          if (list.scrollLeft <= 0) {
            list.scrollLeft = list.scrollWidth - list.clientWidth;
          }
        }
        rafId = requestAnimationFrame(tick);
      }

      if ('IntersectionObserver' in window) {
        carouselObserver = new IntersectionObserver(([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !rafId) {
            rafId = requestAnimationFrame(tick);
          }
        }, { threshold: 0.05 });
        carouselObserver.observe(list);
      } else {
        isVisible = true;
        rafId = requestAnimationFrame(tick);
      }
    }

    function findAndStart() {
      const list = document.querySelector<HTMLElement>(
        '.elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d .eapps-google-reviews-list'
      );
      if (list && list.scrollWidth > list.clientWidth) {
        startLoop(list);
        return true;
      }
      return false;
    }

    let attempts = 0;
    const checkInterval = setInterval(() => {
      attempts++;
      if (findAndStart() || attempts > 20) clearInterval(checkInterval);
    }, 500);

    return () => {
      io.disconnect();
      clearInterval(checkInterval);
      if (carouselObserver) carouselObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Elfsight Script */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-text">
            <h1 className="reveal d1">
              Three gentle steps toward a calmer, brighter <em>everyday.</em>
            </h1>
            <div className="trust reveal d3">
              <div>
                <span className="stat-num">34+</span>
                <span className="lbl">Years of practice, Dr. Ketan Patel</span>
              </div>
              <div>
                <span className="stat-num">5</span>
                <span className="lbl">Experienced homeopathic physicians</span>
              </div>
              <div>
                <span className="stat-num">0–16</span>
                <span className="lbl">Ages we care for, birth to 16</span>
              </div>
            </div>
          </div>

          {/* THE THREE STEPS SCENE */}
          <div
            className="scene reveal d2"
            aria-label="A child climbs three steps — diet for autistic child, exercise and supportive homeopathy — at our autism clinic."
          >
            <div className="stage">
              <svg className="scene-svg" viewBox="0 0 600 470" role="img" xmlns="http://www.w3.org/2000/svg">
                <line x1="40" y1="430" x2="560" y2="430" stroke="rgba(250,248,244,.22)" strokeWidth="1.4" />

                {/* Step 1 */}
                <g>
                  <rect className="glow" id="glow1" x="78" y="356" width="174" height="10" rx="5" />
                  <rect className="stair" x="90" y="370" width="150" height="60" />
                  <rect className="stair-top" x="90" y="370" width="150" height="8" />
                  <text className="step-no" x="106" y="402">01</text>
                  <text className="step-label" x="106" y="420">Diet</text>
                </g>

                {/* Step 2 */}
                <g>
                  <rect className="glow" id="glow2" x="228" y="296" width="174" height="10" rx="5" />
                  <rect className="stair" x="240" y="310" width="150" height="120" />
                  <rect className="stair-top" x="240" y="310" width="150" height="8" />
                  <text className="step-no" x="256" y="342">02</text>
                  <text className="step-label" x="256" y="360">Exercise</text>
                </g>

                {/* Step 3 */}
                <g>
                  <rect className="glow" id="glow3" x="378" y="236" width="174" height="10" rx="5" />
                  <rect className="stair" x="390" y="250" width="150" height="180" />
                  <rect className="stair-top" x="390" y="250" width="150" height="8" />
                  <text className="step-no" x="406" y="282">03</text>
                  <text className="step-label" x="406" y="300">Homeopathy</text>
                </g>

                {/* Animated Climbing Kid */}
                <g id="kid">
                  <ellipse cx="0" cy="3" rx="14" ry="3" fill="rgba(0,0,0,.18)" />
                  <ellipse cx="-5" cy="-1" rx="4.4" ry="2.7" fill="#2E4CA8" />
                  <ellipse cx="5" cy="-1" rx="4.4" ry="2.7" fill="#2E4CA8" />
                  <rect x="-7" y="-13" width="4.6" height="12" rx="2.3" fill="#F6C9A0" />
                  <rect x="2.4" y="-13" width="4.6" height="12" rx="2.3" fill="#F6C9A0" />
                  <path d="M-10 -29 Q-17 -34 -19 -42" stroke="#F6C9A0" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <circle cx="-19.5" cy="-43.5" r="3" fill="#F6C9A0" />
                  <path d="M10 -29 Q17 -25 18 -18" stroke="#F6C9A0" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <circle cx="18" cy="-17" r="3" fill="#F6C9A0" />
                  <path d="M-12 -12 Q-13 -33 0 -33 Q13 -33 12 -12 Z" fill="#79D86F" />
                  <path d="M-9 -31 Q0 -27 9 -31" stroke="#2B63D9" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="0" cy="-20" r="1.5" fill="rgba(0,0,0,.12)" />
                  <circle cx="0" cy="-45" r="13" fill="#F8D2AB" />
                  <circle cx="-12.6" cy="-44" r="2.6" fill="#F8D2AB" />
                  <circle cx="12.6" cy="-44" r="2.6" fill="#F8D2AB" />
                  <path d="M-7 -54 Q0 -61 7 -54 Q3 -57 0 -55 Q-3 -57 -7 -54 Z" fill="#4B3A2A" />
                  <path d="M3 -56 q6 -4 7 2" stroke="#4B3A2A" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                  <circle cx="-7" cy="-42" r="2.8" fill="#F29C9C" opacity=".8" />
                  <circle cx="7" cy="-42" r="2.8" fill="#F29C9C" opacity=".8" />
                  <circle cx="-4.6" cy="-46" r="2.5" fill="#20264D" />
                  <circle cx="4.6" cy="-46" r="2.5" fill="#20264D" />
                  <circle cx="-3.7" cy="-46.9" r="0.85" fill="#fff" />
                  <circle cx="5.5" cy="-46.9" r="0.85" fill="#fff" />
                  <circle cx="0" cy="-43.4" r="0.9" fill="#D99B78" />
                  <path d="M-4 -41 Q0 -37 4 -41" stroke="#9A4D43" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                </g>
              </svg>

              {/* 3D Perspective Door */}
              <div className="door3d" aria-hidden="true">
                <div className="door-inner">
                  <div className="door-light"></div>
                  <div className="door-family">
                    <svg viewBox="0 0 120 96" xmlns="http://www.w3.org/2000/svg">
                      <path d="M60 9 q4 -6 9 -2 q4 4 -1 8 l-8 7 l-8 -7 q-5 -4 -1 -8 q5 -4 9 2 Z" fill="#E5484D" />
                      <g>
                        <path d="M30 96 V62 q0 -16 8 -16 q8 0 8 16 V96 Z" fill="#2B63D9" />
                        <path d="M30 60 q8 5 16 0" stroke="#79D86F" strokeWidth="2" fill="none" />
                        <circle cx="38" cy="40" r="9" fill="#F3C7A2" />
                        <path d="M29 40 a9 9 0 0 1 18 0 q0 -11 -9 -11 q-9 0 -9 11 Z" fill="#4B3A2A" />
                        <circle cx="35" cy="40" r="1.4" fill="#24243A" />
                        <circle cx="41" cy="40" r="1.4" fill="#24243A" />
                        <path d="M35.5 44 q2.5 2.5 5 0" stroke="#9A4D43" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                        <circle cx="33.5" cy="42.5" r="1.6" fill="#F29C9C" opacity=".8" />
                        <circle cx="42.5" cy="42.5" r="1.6" fill="#F29C9C" opacity=".8" />
                      </g>
                      <g>
                        <path d="M52 96 V72 q0 -11 8 -11 q8 0 8 11 V96 Z" fill="#79D86F" />
                        <circle cx="60" cy="54" r="7.5" fill="#F8D2AB" />
                        <path d="M53.5 51 q6.5 -8 13 0 q-3 -3 -6.5 -2 q-3.5 -1 -6.5 2 Z" fill="#4B3A2A" />
                        <circle cx="57.5" cy="54" r="1.2" fill="#24243A" />
                        <circle cx="62.5" cy="54" r="1.2" fill="#24243A" />
                        <path d="M58 57 q2 2 4 0" stroke="#9A4D43" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                        <circle cx="56" cy="55.5" r="1.4" fill="#F29C9C" opacity=".8" />
                        <circle cx="64" cy="55.5" r="1.4" fill="#F29C9C" opacity=".8" />
                      </g>
                      <g>
                        <path d="M74 96 V60 q0 -17 9 -17 q9 0 9 17 V96 Z" fill="#111B78" />
                        <path d="M74 58 q9 5 18 0" stroke="#79D86F" strokeWidth="2" fill="none" />
                        <circle cx="83" cy="38" r="9.2" fill="#E8B07D" />
                        <path d="M74 36 q1 -10 9 -10 q8 0 9 10 q-9 -4 -18 0 Z" fill="#24243A" />
                        <circle cx="80" cy="38" r="1.4" fill="#24243A" />
                        <circle cx="86" cy="38" r="1.4" fill="#24243A" />
                        <path d="M80 42 q3 2.5 6 0" stroke="#8a4f33" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                        <circle cx="78.5" cy="40.5" r="1.6" fill="#D98C7E" opacity=".7" />
                        <circle cx="87.5" cy="40.5" r="1.6" fill="#D98C7E" opacity=".7" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="leaf leaf-l"></div>
                <div className="leaf leaf-r"></div>
                <div className="frame"></div>
              </div>
            </div>

            <p className="caption">
              Diet · Exercise · Homeopathy — one gentle step at a time, toward <span>a happier, more supported family.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="sec about-us" id="about-us">
        <div className="wrap">
          <div className="about-grid reveal">
            {/* Left: image with stat card */}
            <div className="about-img-wrap">
              <img src="https://static.wixstatic.com/media/66422a_029855a865c6474196c5adcd155db0bb~mv2.png"
                alt="Child autism specialist with a child — Speciality Homeopathy, Ahmedabad" loading="lazy" decoding="async" />
              <div className="about-stat-card">
                <span className="num">20+</span>
                <span className="lbl">Years of dedicated pediatric care</span>
              </div>
            </div>
            {/* Right: content */}
            <div className="about-content">
              <h2>Specialty Homeopathic<br />Autism Clinic And Centre</h2>
              <p>
                Children deserve dedicated care for a healthy future. Our child autism specialist team in Ahmedabad specialises in Autism Care, Pediatric Neurological Disorders, Child Psychiatry Disease and Genetic Conditions, offering individualised, supportive care.
              </p>
              <div className="about-feature-row">
                <div className="about-feature">
                  <span className="fi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
                      <path d="M9 11h6M12 8v6" />
                    </svg>
                  </span>
                  <span>Individualised, child-first care</span>
                </div>
                <div className="about-feature">
                  <span className="fi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span>Trusted by families since day one</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="sec pillars" id="pillars">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Three foundations we build, together.</h2>
            <p className="lead">
              No single thing supports a child on its own. We work with families on three everyday foundations — gently, individually, and in step with the doctors and therapists already caring for your child.
            </p>
          </div>
          <div className="pillar-grid">
            <article className="pillar c1">
              <span className="num"></span>
              <div className="pillar-top">
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a9 9 0 1 0 9 9" />
                    <path d="M12 3v9l6 4" />
                    <path d="M16 3a4 4 0 0 0 4 4" />
                  </svg>
                </div>
                <h3>Diet &amp; Nutrition</h3>
              </div>
              <div className="pillar-wave">
                <svg className="wave-divider" viewBox="0 0 600 60" preserveAspectRatio="none">
                  <path d="M0,30 C150,58 450,2 600,28 L600,60 L0,60 Z" />
                </svg>
                <p>
                  Practical diet guidance for an autistic child — everyday nutrition to support comfort, steadier sleep and consistent energy through the day.
                </p>
              </div>
            </article>

            <article className="pillar c2">
              <span className="num"></span>
              <div className="pillar-top">
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="13" cy="4.5" r="2" />
                    <path d="M9 21l2.5-5 2-2-1-5-3 2-2 3" />
                    <path d="M13.5 9l3 1.5 3-.5M11.5 14l4 1 1.5 5" />
                  </svg>
                </div>
                <h3>Exercise &amp; Play</h3>
              </div>
              <div className="pillar-wave">
                <svg className="wave-divider" viewBox="0 0 600 60" preserveAspectRatio="none">
                  <path d="M0,30 C150,58 450,2 600,28 L600,60 L0,60 Z" />
                </svg>
                <p>
                  Play, routine and physical activity that suit your child — supporting regulation, mood and daily wellbeing in ways that feel natural at home.
                </p>
              </div>
            </article>

            <article className="pillar c3">
              <span className="num"></span>
              <div className="pillar-top">
                <div className="pico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
                    <path d="M9 11h6M12 8v6" />
                  </svg>
                </div>
                <h3>Supportive Homeopathy</h3>
              </div>
              <div className="pillar-wave">
                <svg className="wave-divider" viewBox="0 0 600 60" preserveAspectRatio="none">
                  <path d="M0,30 C150,58 450,2 600,28 L600,60 L0,60 Z" />
                </svg>
                <p>
                  Individualised homeopathic care for general wellbeing and comfort — offered honestly, and always alongside your child&apos;s medical and therapeutic care.
                </p>
              </div>
            </article>
          </div>

          <p className="pillar-note reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 8v4M12 16h.01" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            These foundations support a child&apos;s everyday wellbeing. They do not diagnose, cure, or replace the assessment, therapy and medical care your child receives from qualified specialists.
          </p>
        </div>
      </section>

      {/* AUTISM BANNER */}
      <section className="autism-banner" id="autism-banner">
        <div className="wrap">
          <div className="autism-banner-inner reveal">
            {/* Left: Text side */}
            <div className="autism-banner-text-side">
              <div className="autism-banner-text">
                <h2>Specialist Autism Services — Expert Support &amp; Care</h2>
                <p>Providing supportive, natural and specialised care from our autism specialist team in Ahmedabad, Gujarat, for autism, neurological disorders and overall wellness.</p>
              </div>
            </div>
            {/* Right: Illustration */}
            <div className="autism-banner-img-side">
              <div className="autism-banner-img">
                <img src="https://static.wixstatic.com/media/66422a_7f2dc7649d7d44dd8c351a3593f1a23a~mv2.png"
                  alt="Autism clinic in Ahmedabad — autism awareness puzzle"
                  style={{
                    maxWidth: '260px',
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 12px 32px rgba(0,0,0,.28))',
                    borderRadius: '12px'
                  }} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY / CARE TEAM */}
      <section className="sec credit" id="credit">
        <div className="wrap">
          <div className="credit-grid">
            <div className="founder-portrait reveal">
              <img src="https://static.wixstatic.com/media/66422a_2e80f863abef44c4baa603772ca1149c~mv2.png"
                alt="Dr. Ketan Patel — autism doctor in Ahmedabad" loading="lazy" decoding="async" />
            </div>
            <div>
              <h2 className="reveal d1">Led by Dr. Ketan Patel.</h2>
              <p className="lead reveal d1">
                A homeopathic physician with more than two decades focused on children. He lectures internationally on autism and homeopathy and works closely with special-needs schools — bringing that experience into a calm, unhurried, individualised consultation for every family.
              </p>
              <div className="cred reveal d2">
                <span>B.H.M.S.</span>
                <span>B.C.J.P.</span>
                <span>M.D.</span>
                <span>20+ years in practice</span>
              </div>
              <div className="credit-stats reveal d2">
                <div><span>20+</span><small>Years in practice</small></div>
                <div><span>3</span><small>Homeopathic physicians</small></div>
                <div><span>Global</span><small>Autism lectures &amp; schools</small></div>
                <div><span>Birth–16</span><small>Ages cared for</small></div>
              </div>
              <div className="team-row reveal d2">
                <Link href="/our-experts/drkamalpatel" className="doc">
                  <div className="av">
                    <img src="https://static.wixstatic.com/media/66422a_7f710f2df8d44845a086efb7e1311ba9~mv2.png"
                      alt="Dr. Kamal Patel" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h4>Dr. Kamal Patel</h4>
                    <div className="q">B.H.M.S</div>
                    <div className="yr">~20 years</div>
                  </div>
                </Link>
                <Link href="/our-experts/drbhaktibatavia" className="doc">
                  <div className="av">
                    <img src="https://static.wixstatic.com/media/66422a_994a71f1415540d291f87e2b8f8003d7~mv2.png"
                      alt="Dr. Bhakti Batavia" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h4>Dr. Bhakti Batavia</h4>
                    <div className="q">B.H.M.S</div>
                    <div className="yr">27+ years</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="sec why-choose" id="why-choose">
        <div className="wrap">
          <div className="sec-head reveal" style={{ textAlign: 'center', maxWidth: '100%', marginBottom: '10px' }}>
            <h2>A Natural And Safe Approach To Healing</h2>
          </div>
          <p className="sub-lead reveal">
            At Speciality Homeopathy, we believe true healing begins with nature. Our treatments are gentle, holistic, and free from harmful side effects — providing safe, effective care for children and families.
          </p>
          <div className="why-grid reveal">
            {/* 4 Cards */}
            <div className="why-list">
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
                    <path d="M12 11v2M12 15h.01" />
                  </svg>
                </div>
                <div>
                  <span className="why-card-num">01</span>
                  <h4>No side effects</h4>
                  <p>Homeopathy medicines have no side effects as the treatment methodology itself works on holistic level and medicines are of natural substances.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
                    <circle cx="12" cy="11" r="2" />
                  </svg>
                </div>
                <div>
                  <span className="why-card-num">02</span>
                  <h4>Gentle &amp; Holistic Care</h4>
                  <p>It is holistic in approach, supporting each child gently and naturally with no medicinal hangover or adverse after-effects.</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 3L3 9l9 6 9-6-9-6z" />
                    <path d="M3 15l9 6 9-6" />
                    <path d="M3 12l9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <span className="why-card-num">03</span>
                  <h4>Easy to be taken</h4>
                  <p>Easy to be taken even by non-cooperative children. Small sweet pills, drops, powders — a dream of patient and doctor!</p>
                </div>
              </div>

              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <span className="why-card-num">04</span>
                  <h4>Accurate &amp; Fast</h4>
                  <p>In an expert&apos;s hands, time bound improvement; it is very accurate and fast against the belief of it to be slow. It has prophylactic value with more accuracy than vaccinations.</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="why-cta-box">
              <h3>Safe &amp; Gentle<br />Homeopathy for Your<br />Child&apos;s Health!</h3>
              <div className="why-cta-img">
                <img src="https://static.wixstatic.com/media/66422a_67881e509ffe4df69d2f05d1201a8c9d~mv2.png"
                  alt="Doctor" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS / CARE AREAS */}
      <section className="sec conditions" id="conditions">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>The children and families we walk alongside.</h2>
            <p className="lead">
              Tap any card to explore our specialized care approach, assessment guidance, and supportive therapies.
            </p>
          </div>
          <div className="cond-grid" id="condGrid">
            {conditions.map((c, i) => (
              <Link
                key={c.id}
                href={c.link}
                className={`cond reveal d${(i % 3) + 1}`}
              >
                <div className="cimg">
                  <img src={c.img} alt={c.title} loading="lazy" decoding="async" />
                </div>
                <div className="cbody">
                  <h4>{c.title}</h4>
                  <div className="summary">{c.summary}</div>
                  <span className="more">
                    READ MORE +
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (Elfsight Reviews) */}
      <section className="testimonials-sec">
        <div className="wrap">
          <h2 className="review-title">Testimonials &amp; Autism Doctor Reviews</h2>
          <div className="elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta" id="cta">
        <div className="wrap">
          <h2>Let&apos;s talk about your child.</h2>
          <p>
            Book a consultation or share your child&apos;s reports securely. We&apos;ll listen carefully, be honest
            about how we can help, and work in step with your child&apos;s existing care.
          </p>
          <div className="cta-buttons-row">
            <a href="tel:+919898005354" className="cta-btn">
              call +91 9898005354
            </a>
            <a
              href="https://wa.me/918320131612"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              Whatsapp our team
            </a>
          </div>
        </div>
      </section>

      {/* Scoped Page Styles */}
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
    </>
  );
}

const pageStyles = `
  :root {
    --logo-blue: #9ED0EB;
    --logo-blue-dark: #111B78;
    --logo-green: #79D86F;
    --logo-mint: #D2EEE6;
    --logo-lime: #DAF283;
    --logo-red: #E5484D;
    --blue: #111B78;
    --teal: #2B63D9;
    --gold: #79D86F;
    --ivory: #F5FBF8;
    --graphite: #26324A;
    --shadow: 0 24px 60px -30px rgba(17, 27, 120, .34);
    --shadow-sm: 0 12px 30px -20px rgba(17, 27, 120, .30);
    --maxw: 1180px;
    --ease: cubic-bezier(.2, .7, .2, 1);
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
  }

  body {
    font-family: 'Open Sans', system-ui, sans-serif;
    color: var(--graphite);
    background: #ceedf8;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    color: #111B78;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -.01em;
  }

  .stat-num {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    letter-spacing: -.02em;
  }

  .wrap {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 0 26px;
    width: 100%;
  }

  /* ===================== HERO ===================== */
  .hero {
    position: relative;
    width: 100%;
    background: #9ED0EB;
    color: #111B78;
    padding: 30px 0 20px;
    overflow: hidden;
  }

  .hero .wrap {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1.04fr;
    gap: 46px;
    align-items: start;
  }

  .hero-text { display: flex; flex-direction: column; }

  .hero h1 {
    color: #111B78;
    font-size: clamp(2.1rem, 3.2vw, 3.2rem);
    margin: 0 0 28px;
  }

  .hero h1 em { font-style: italic; color: #111B78; }

  .trust {
    display: flex;
    flex-wrap: wrap;
    gap: 14px 26px;
    align-items: end;
    border-top: 1px solid rgba(17, 27, 120, .16);
    padding-top: 20px;
    margin-top: 6px;
  }

  .trust .stat-num {
    font-size: 1.5rem;
    color: #111B78;
    display: block;
    line-height: 1;
  }

  .trust .lbl {
    font-size: .7rem;
    color: rgba(17, 27, 120, .70);
    line-height: 1.35;
    margin-top: 5px;
    max-width: 14ch;
  }

  /* ===================== THREE-STEPS SCENE ===================== */
  .scene { position: relative; width: 100%; margin-top: -40px; }

  .stage {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .stage svg.scene-svg {
    width: 100%;
    height: auto;
    display: block;
    overflow: visible;
  }

  .caption {
    margin-top: 18px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-size: 1.02rem;
    color: rgba(17, 27, 120, .88);
  }

  .caption span { color: #111B78; font-weight: 600; }

  .caption small {
    display: block;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: .74rem;
    color: rgba(17, 27, 120, .58);
    margin-top: 5px;
  }

  .stair { fill: rgba(10, 31, 68, .08); stroke: rgba(17, 27, 120, .22); stroke-width: 1.2; }
  .stair-top { fill: rgba(17, 27, 120, .15); }
  .step-no { font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 13px; fill: #111B78; }
  .step-label { font-family: 'Open Sans', sans-serif; font-weight: 600; font-size: 12px; letter-spacing: .04em; fill: rgba(17, 27, 120, .88); }
  .glow { fill: #111B78; opacity: 0; }

  @keyframes climb {
    0% { transform: translate(108px, 430px); opacity: 1; }
    5% { transform: translate(108px, 430px); opacity: 1; }
    9% { transform: translate(140px, 348px); }
    14% { transform: translate(165px, 372px); }
    24% { transform: translate(165px, 372px); }
    29% { transform: translate(240px, 288px); }
    34% { transform: translate(315px, 312px); }
    44% { transform: translate(315px, 312px); }
    49% { transform: translate(392px, 228px); }
    54% { transform: translate(465px, 252px); }
    64% { transform: translate(465px, 252px); opacity: 1; }
    70% { transform: translate(486px, 252px); opacity: 1; }
    74% { transform: translate(500px, 250px); opacity: 0; }
    89% { transform: translate(500px, 250px); opacity: 0; }
    90% { transform: translate(108px, 430px); opacity: 0; }
    97% { transform: translate(108px, 430px); opacity: 0; }
    100% { transform: translate(108px, 430px); opacity: 1; }
  }

  @keyframes glow1 { 0%,9%{opacity:0} 14%{opacity:.85} 24%{opacity:.85} 30%,100%{opacity:0} }
  @keyframes glow2 { 0%,29%{opacity:0} 34%{opacity:.85} 44%{opacity:.85} 50%,100%{opacity:0} }
  @keyframes glow3 { 0%,49%{opacity:0} 54%{opacity:.85} 64%{opacity:.85} 70%,100%{opacity:0} }

  #kid { animation: climb 14s var(--ease) infinite; }
  #glow1 { animation: glow1 14s linear infinite; }
  #glow2 { animation: glow2 14s linear infinite; }
  #glow3 { animation: glow3 14s linear infinite; }

  /* ---- 3D door ---- */
  .door3d {
    position: absolute;
    left: 66%;
    top: 30%;
    width: 22%;
    height: 23.6%;
    perspective: 1100px;
    transform-style: preserve-3d;
    z-index: 5;
  }

  .door-inner {
    position: absolute;
    inset: 0;
    border-radius: 13px 13px 3px 3px;
    overflow: hidden;
    background: #15218A;
    box-shadow: inset 0 0 26px rgba(0, 0, 0, .45);
  }

  .door-light {
    position: absolute;
    inset: -14%;
    opacity: 0;
    background: radial-gradient(circle at 50% 44%, #F3FFE5 0%, #D8F3A8 42%, rgba(121, 216, 111, 0) 76%);
  }

  .door-family {
    position: absolute;
    left: 6%;
    right: 6%;
    bottom: 6%;
    opacity: 0;
    filter: drop-shadow(0 4px 6px rgba(17, 27, 120, .22));
  }

  .door-family svg { width: 100%; height: auto; display: block; }

  .frame {
    position: absolute;
    inset: -3px;
    border-radius: 15px 15px 5px 5px;
    border: 3px solid var(--gold);
    box-shadow: 0 14px 30px -16px rgba(0, 0, 0, .5);
    pointer-events: none;
  }

  .frame::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -16%;
    width: 14%;
    height: 16%;
    transform: translateX(-50%);
    border-radius: 50% 50% 0 0;
    border: 3px solid var(--gold);
    border-bottom: 0;
  }

  .leaf {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(120deg, #2438A4, #0E176B 60%);
    border: 1px solid rgba(121, 216, 111, .55);
    box-shadow: inset 0 0 12px rgba(0, 0, 0, .4);
    backface-visibility: hidden;
  }

  .leaf::after {
    content: "";
    position: absolute;
    top: 18%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--gold);
    opacity: .8;
  }

  .leaf-l { left: 0; transform-origin: left center; border-radius: 13px 0 0 3px; transform: rotateY(0); }
  .leaf-l::after { right: 10%; }
  .leaf-r { right: 0; transform-origin: right center; border-radius: 0 13px 3px 0; transform: rotateY(0); }
  .leaf-r::after { left: 10%; }

  @keyframes leafL { 0%,62%{transform:rotateY(0)} 72%{transform:rotateY(-112deg)} 88%{transform:rotateY(-112deg)} 95%,100%{transform:rotateY(0)} }
  @keyframes leafR { 0%,62%{transform:rotateY(0)} 72%{transform:rotateY(112deg)} 88%{transform:rotateY(112deg)} 95%,100%{transform:rotateY(0)} }
  @keyframes glowLight { 0%,64%{opacity:0} 74%{opacity:1} 88%{opacity:1} 96%,100%{opacity:0} }
  @keyframes famIn {
    0%,68% { opacity: 0; transform: translateY(10px) scale(.9); }
    79% { opacity: 1; transform: translateY(0) scale(1); }
    88% { opacity: 1; transform: translateY(0) scale(1); }
    95%,100% { opacity: 0; transform: translateY(10px) scale(.9); }
  }

  .leaf-l { animation: leafL 14s var(--ease) infinite; }
  .leaf-r { animation: leafR 14s var(--ease) infinite; }
  .door-light { animation: glowLight 14s ease-in-out infinite; }
  .door-family { animation: famIn 14s var(--ease) infinite; }

  /* Sections general */
  .sec { padding: 84px 0; }
  .sec-head { max-width: 680px; margin-bottom: 34px; }
  .sec-head h2 { font-size: clamp(1.65rem, 2.8vw, 2.35rem); margin: 12px 0 14px; color: #0a1f44; }
  .lead { font-size: 1.02rem; color: #0a1f44; max-width: 60ch; }

  .reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s var(--ease), transform .8s var(--ease); }
  .reveal.in { opacity: 1; transform: none; }
  .reveal.d1 { transition-delay: .08s; }
  .reveal.d2 { transition-delay: .16s; }
  .reveal.d3 { transition-delay: .24s; }

  /* ===== ABOUT US SECTION ===== */
  .about-us { background: linear-gradient(180deg, #ceedf8 0%, #fff 100%); border-top: 1px solid rgba(10, 31, 68, .10); padding-top: 64px; }
  .about-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 54px; align-items: center; }
  .about-img-wrap { position: relative; border-radius: 24px; overflow: visible; min-height: 380px; padding: 0 0 34px 34px; }
  .about-img-wrap::before { content: ""; position: absolute; top: 18px; left: 0; width: 100%; height: 100%; background: #0a1f44; border-radius: 24px; z-index: 0; }
  .about-img-wrap img { position: relative; width: 100%; height: 380px; object-fit: cover; display: block; border-radius: 24px; z-index: 1; box-shadow: 0 24px 50px -22px rgba(10, 31, 68, .4); }
  .about-stat-card { position: absolute; left: -6px; bottom: 0; z-index: 2; background: #fff; border-radius: 16px; box-shadow: 0 24px 60px -30px rgba(10, 31, 68, .34); padding: 18px 22px; display: flex; align-items: center; gap: 14px; min-width: 200px; }
  .about-stat-card .num { font-family: 'Open Sans', sans-serif; font-weight: 800; font-size: 1.7rem; color: #009ba8; line-height: 1; }
  .about-stat-card .lbl { font-size: .74rem; color: #0a1f44; line-height: 1.3; max-width: 18ch; }
  .about-content { padding: 0; display: flex; flex-direction: column; justify-content: center; position: relative; }
  .about-content h2 { font-size: clamp(1.5rem, 2.5vw, 2.1rem); margin-bottom: 18px; color: #0a1f44; }
  .about-content p { color: #0a1f44; font-size: .95rem; line-height: 1.75; margin-bottom: 24px; }
  .about-feature-row { display: flex; gap: 22px; margin-bottom: 28px; flex-wrap: wrap; }
  .about-feature { display: flex; align-items: flex-start; gap: 10px; flex: 1; min-width: 180px; }
  .about-feature .fi { width: 38px; height: 38px; border-radius: 10px; background: rgba(10, 31, 68, .06); color: #0a1f44; display: grid; place-items: center; flex: 0 0 auto; }
  .about-feature .fi svg { width: 18px; height: 18px; }
  .about-feature span { font-size: .84rem; color: #0a1f44; font-weight: 600; line-height: 1.4; padding-top: 6px; }

  /* ===== THREE PILLARS ===== */
  .pillars { background: #ceedf8; }
  .pillar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; counter-reset: p; align-items: stretch; }
  .pillar {
    position: relative;
    background: #fff;
    border-radius: 26px;
    padding: 0;
    box-shadow: 0 14px 38px -16px rgba(10, 31, 68, .20);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .pillar:hover { transform: none !important; box-shadow: 0 14px 38px -16px rgba(20, 50, 90, .20) !important; }
  .pillar .num {
    counter-increment: p;
    position: absolute;
    top: 20px; right: 24px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700; font-size: .75rem;
    letter-spacing: .14em;
    color: rgba(10, 31, 68, .28);
    z-index: 2;
  }
  .pillar .num::before { content: "0" counter(p); }
  .pillar .pillar-top { padding: 38px 28px 22px; text-align: center; }
  .pillar .pico {
    width: 68px; height: 68px;
    border-radius: 50%;
    display: grid; place-items: center;
    margin: 0 auto 20px;
    background: rgba(0, 155, 168, .12);
    color: #009ba8;
  }
  .pillar .pico svg { width: 27px; height: 27px; }
  .pillar .pillar-top h3 { font-size: 1.14rem; margin: 0; color: #0a1f44; text-align: center; font-weight: 700; }
  .pillar .pillar-wave { position: relative; flex: 1 0 auto; display: flex; align-items: center; justify-content: center; padding: 38px 26px 30px; overflow: hidden; background: #009ba8; }
  .pillar .wave-divider { position: absolute; top: -29px; left: 0; width: 100%; height: 30px; display: block; line-height: 0; }
  .pillar .wave-divider path { fill: #009ba8; }
  .pillar .pillar-wave p { position: relative; z-index: 2; margin: 0; font-size: .86rem; line-height: 1.65; text-align: center; color: rgba(255, 255, 255, .95); }
  .pillar-note { margin-top: 30px; font-size: .82rem; color: #009ba8; display: flex; align-items: flex-start; gap: 9px; max-width: 74ch; }
  .pillar-note svg { width: 17px; height: 17px; flex: 0 0 auto; color: #009ba8; margin-top: 2px; }

  /* ===== AUTISM BANNER ===== */
  .autism-banner { padding: 14px 0 60px; background: #ceedf8; }
  .autism-banner-inner {
    display: grid; grid-template-columns: .72fr 1.28fr;
    border-radius: 24px; overflow: hidden;
    box-shadow: 0 26px 64px -18px rgba(10, 31, 68, .32);
    min-height: 110px;
    position: relative;
    background: linear-gradient(118deg, #0a1f44 0%, #0a1f44 24%, #009ba8 48%, #009ba8 76%, #009ba8 100%);
  }
  .autism-banner-inner::before { content: ""; position: absolute; top: 50%; right: 7%; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(255, 255, 255, .18) 0%, rgba(255, 255, 255, 0) 72%); transform: translateY(-50%); pointer-events: none; }
  .autism-banner-text-side { background: transparent; padding: 18px 16px 18px 36px; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; }
  .autism-banner-text h2 { color: #fff; font-size: clamp(1.15rem, 2.1vw, 1.55rem); margin-bottom: 8px; line-height: 1.28; max-width: 26ch; }
  .autism-banner-text p { color: rgba(255, 255, 255, .75); font-size: .85rem; margin-bottom: 0; max-width: 52ch; line-height: 1.55; }
  .autism-banner-img-side { background: transparent; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; overflow: hidden; }
  .autism-banner-img { position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; }

  /* ===== CREDIBILITY / CARE TEAM ===== */
  .credit { background: #fff; border-top: 1px solid rgba(10, 31, 68, .10); }
  .credit-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 50px; align-items: center; }
  .founder-portrait { aspect-ratio: 3/4; border-radius: 20px; overflow: hidden; border: 1px solid #009ba8; box-shadow: 0 24px 60px -30px rgba(10, 31, 68, .34); background: rgba(10, 31, 68, .06); }
  .founder-portrait img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
  .credit h2 { font-size: clamp(1.7rem, 2.8vw, 2.3rem); margin: 12px 0 14px; color: #0a1f44; }
  .cred { display: flex; flex-wrap: wrap; gap: 9px; margin: 16px 0 18px; }
  .cred span { font-family: 'Open Sans', sans-serif; font-size: .72rem; font-weight: 600; background: rgba(10, 31, 68, .06); color: #0a1f44; padding: .42rem .75rem; border-radius: 8px; border: 1px solid rgba(10, 31, 68, .10); }
  .credit p { color: #0a1f44; margin-bottom: 20px; }
  .credit-stats { display: flex; flex-wrap: wrap; gap: 18px 34px; margin: 24px 0 26px; padding-top: 22px; border-top: 1px solid rgba(10, 31, 68, .10); }
  .credit-stats div span { font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 1.55rem; color: #009ba8; display: block; line-height: 1; }
  .credit-stats div small { font-size: .74rem; color: #0a1f44; }
  .team-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 30px; max-width: 480px; }
  .doc { background: #ceedf8; border: 1px solid rgba(10, 31, 68, .10); border-radius: 15px; padding: 16px; display: flex; gap: 13px; align-items: center; transition: transform .35s var(--ease); text-decoration: none; color: inherit; }
  .doc:hover { transform: translateY(-4px); }
  .doc .av { width: 54px; height: 54px; border-radius: 12px; overflow: hidden; flex: 0 0 auto; background: #009ba8; }
  .doc .av img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
  .doc h4 { font-size: .95rem; margin-bottom: 1px; color: #0a1f44; }
  .doc .q { font-family: 'Open Sans', sans-serif; font-size: .6rem; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; color: #009ba8; }
  .doc .yr { font-size: .74rem; color: #0a1f44; margin-top: 2px; }

  /* ===== WHY CHOOSE US ===== */
  .why-choose { background: #fff; }
  .why-choose .sec-head { text-align: center; max-width: 100%; margin-bottom: 10px; }
  .why-choose .sec-head h2 { font-size: clamp(1.55rem, 2.8vw, 2.1rem); color: #0a1f44; }
  .why-choose .sub-lead { text-align: center; color: #0a1f44; font-size: .93rem; max-width: 68ch; margin: 0 auto 40px; }
  .why-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; align-items: stretch; }
  .why-list { display: flex; flex-direction: column; gap: 16px; position: relative; }
  .why-card { display: flex; align-items: flex-start; gap: 18px; padding: 20px 18px; border: 1px solid rgba(10, 31, 68, .10); border-radius: 16px; background: #fff; box-shadow: 0 10px 24px -16px rgba(10, 31, 68, .18); transition: transform .3s var(--ease), box-shadow .3s var(--ease); position: relative; z-index: 1; }
  .why-card:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -16px rgba(10, 31, 68, .25); }
  .why-icon { width: 48px; height: 48px; border-radius: 14px; background: rgba(0, 155, 168, .1); display: grid; place-items: center; flex: 0 0 auto; color: #009ba8; transition: transform .35s var(--ease); box-shadow: 0 8px 18px -10px rgba(0, 155, 168, .35); }
  .why-card:hover .why-icon { transform: scale(1.08) rotate(-3deg); }
  .why-icon svg { width: 22px; height: 22px; }
  .why-card-num { font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: .7rem; letter-spacing: .1em; color: rgba(10, 31, 68, .3); margin-bottom: 4px; display: block; }
  .why-card h4 { font-size: 1rem; text-align: left; margin-bottom: 6px; color: #0a1f44; }
  .why-card p { font-size: .85rem; color: #0a1f44; text-align: left; line-height: 1.65; margin: 0; }
  .why-cta-box { background: linear-gradient(145deg, #009ba8, #009ba8); border-radius: 20px; padding: 30px 24px 0; color: #fff; display: flex; flex-direction: column; align-items: flex-start; overflow: hidden; position: relative; height: 100%; }
  .why-cta-box h3 { font-size: 1.25rem; color: #fff; margin-bottom: 16px; line-height: 1.3; }
  .why-cta-img { width: 100%; flex: 1; margin-top: auto; position: relative; display: flex; align-items: flex-end; justify-content: center; min-height: 0; }
  .why-cta-img img { width: auto; max-width: 100%; height: 100%; display: block; object-fit: contain; object-position: bottom; }

  /* ===== CONDITIONS / CARE AREAS ===== */
  .conditions { background: #0a1f44; color: #ceedf8; }
  .conditions .sec-head h2 { color: #ceedf8; }
  .conditions .lead { color: rgba(206, 237, 248, .8); }
  .cond-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .cond {
    position: relative;
    background: rgba(206, 237, 248, .18);
    border: 1.5px solid rgba(255, 255, 255, .35);
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    backdrop-filter: blur(16px) saturate(1.4);
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    box-shadow: 0 8px 32px -10px rgba(0, 155, 168, .28), 0 1.5px 0 rgba(255, 255, 255, .45) inset, 0 -1px 0 rgba(206, 237, 248, .2) inset;
    transition: transform .35s var(--ease), box-shadow .35s var(--ease), border-color .3s;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
  }
  .cond:hover {
    transform: translateY(-7px) scale(1.012);
    border-color: rgba(255, 255, 255, .6);
    box-shadow: 0 22px 52px -12px rgba(0, 155, 168, .4), 0 1.5px 0 rgba(255, 255, 255, .65) inset, 0 -1px 0 rgba(206, 237, 248, .3) inset;
  }
  .cond .cimg { height: 160px; overflow: hidden; position: relative; border-radius: 16px 16px 0 0; }
  .cond .cimg img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s var(--ease); }
  .cond:hover .cimg img { transform: scale(1.06); }
  .cond .cimg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10, 31, 68, .05), rgba(10, 31, 68, .38)); }
  .cond .cbody { padding: 22px 20px 22px; position: relative; z-index: 2; display: flex; flex-direction: column; flex: 1; }
  .cond h4 { color: #fff; font-size: 1.08rem; margin-bottom: 8px; text-shadow: 0 1px 6px rgba(10, 31, 68, .35); font-weight: 600; }
  .cond .summary { font-size: .84rem; color: rgba(206, 237, 248, .88); line-height: 1.55; margin-bottom: 16px; flex: 1; }
  .cond .more {
    font-family: 'Open Sans', sans-serif;
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: #ceedf8;
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color .3s, transform .3s;
  }
  .cond:hover .more {
    color: #ffffff;
    transform: translateX(4px);
  }

  /* ===== TESTIMONIALS (Elfsight Reviews) ===== */
  .testimonials-sec {
    background: #fff;
    padding: 60px 0 40px;
  }

  .review-title {
    text-align: center;
    font-family: 'Montserrat', 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin: 0 0 24px;
    letter-spacing: 1px;
    color: #0a1f44;
  }

  .elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d h2,
  .elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d .eapps-widget-toolbar,
  .elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d [class*="title"],
  .elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d [class*="header"] {
    display: none !important;
  }

  .elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d .eapps-google-reviews-list {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    gap: 20px;
    padding-bottom: 10px;
  }

  .elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d .eapps-google-reviews-card {
    min-width: 320px !important;
    flex: 0 0 auto !important;
  }

  .elfsight-app-4d58e6e8-caf2-4778-ab12-87c93e83968d .eapps-google-reviews-list::-webkit-scrollbar {
    display: none;
  }

  /* ===== CTA SECTION ===== */
  .cta {
    position: relative;
    background: linear-gradient(145deg, #ceedf8 0%, #ceedf8 45%, #009ba8 100%);
    color: #0a1f44;
    text-align: center;
    padding: 54px 0 52px;
    overflow: hidden;
  }

  .cta::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 70% at 50% 50%, rgba(255, 255, 255, .32), transparent 75%);
    pointer-events: none;
  }

  .cta .wrap { position: relative; z-index: 1; }
  .cta h2 {
    color: #0a1f44;
    font-size: clamp(1.75rem, 2.8vw, 2.35rem);
    font-weight: 700;
    margin-bottom: 12px;
    opacity: 1 !important;
  }
  .cta p {
    color: rgba(10, 31, 68, .78);
    max-width: 52ch;
    margin: 0 auto;
    font-size: 0.95rem;
    line-height: 1.58;
    opacity: 1 !important;
  }

  .cta-buttons-row {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 16px !important;
    margin-top: 28px !important;
    flex-wrap: wrap !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .cta-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: #ffffff !important;
    color: #0a1f44 !important;
    border: 1.5px solid #009ba8 !important;
    border-radius: 14px !important;
    padding: 10px 28px !important;
    font-family: 'Open Sans', system-ui, sans-serif !important;
    font-size: 0.86rem !important;
    font-weight: 600 !important;
    text-decoration: none !important;
    box-shadow: 0 4px 14px rgba(10, 31, 68, 0.06) !important;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease !important;
    cursor: pointer !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .cta-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 24px rgba(0, 155, 168, 0.25) !important;
    background: #fdfefe !important;
  }

  /* ===== RESPONSIVE ===== */
  @media (min-width: 1400px) {
    .hero { padding: 72px 0 40px; }
  }

  @media (max-width: 980px) {
    .hero .wrap, .credit-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .scene { max-width: 600px; margin: 0 auto; order: 2; }
    .hero-text { order: 1; }
    .hero { padding: 56px 0; }
    .pillar-grid { grid-template-columns: 1fr; }
    .cond-grid { grid-template-columns: repeat(2, 1fr); }
    .about-grid { grid-template-columns: 1fr; }
    .about-img-wrap { margin-bottom: 20px; }
    .why-grid { grid-template-columns: 1fr; }
    .why-cta-box { height: auto; min-height: 260px; }
    .autism-banner-inner { grid-template-columns: 1fr; }
    .autism-banner-text-side { padding: 24px 24px; }
    .autism-banner-img-side { padding: 18px 24px; min-height: 130px; }
  }

  @media (max-width: 680px) {
    .wrap { padding: 0 16px !important; }
    .hero { padding: 40px 0 44px !important; text-align: center; }
    .hero .wrap { grid-template-columns: 1fr !important; gap: 28px !important; }
    .hero-text { order: 1; align-items: center; }
    .scene { order: 2; max-width: 100%; margin-top: 0; }
    .hero h1 { font-size: 1.75rem !important; margin: 0 0 20px !important; }
    .trust { justify-content: center; flex-wrap: wrap; gap: 10px 20px; }
    .trust .stat-num { font-size: 1.2rem; }
    .cond-grid, .team-row { grid-template-columns: 1fr; }
    .sec { padding: 54px 0; }
    .autism-banner-text-side { padding: 18px 16px; }
    .autism-banner-img-side { padding: 14px 16px; }
    .about-content { padding: 0; }
    .about-img-wrap { padding: 0 0 28px 24px; }
    .about-stat-card { min-width: 170px; padding: 14px 16px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; }
    #kid, #glow1, #glow2, #glow3, .leaf-l, .leaf-r, .door-light, .door-family { animation: none; }
    #kid { transform: translate(465px, 252px); opacity: 1; }
    .leaf-l { transform: rotateY(-112deg); }
    .leaf-r { transform: rotateY(112deg); }
    .door-light { opacity: 1; }
    .door-family { opacity: 1; transform: none; }
  }
`;
