import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { CASE_STUDIES } from '../../../lib/caseStudiesData';

export const metadata: Metadata = {
  title: 'Autism & Child Neurology Treatment – Documented Cured Case Studies',
  description:
    'Read documented clinical case studies and autism recovery stories from Speciality Homeopathy. In-depth reports of children diagnosed with ASD, genetic neuropathy, and CACNA1A treated by Dr. Ketan Patel.',
  keywords:
    'autism homeopathy case studies, autism cured cases, autism improvement stories, case studies homeopathy, dr ketan patel case studies',
  alternates: {
    canonical: 'https://specialityhomeopathy.com/casestudies',
  },
};

const pageStyles = `
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
    --shadow-card: 0 10px 28px -10px rgba(10,31,68,0.12);
    --shadow-hover: 0 18px 40px -12px rgba(10,31,68,0.22);
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

  /* ── PAGE HERO ── */
  .page-hero {
    position: relative;
    background: radial-gradient(120% 120% at 84% 0%, #d4eef9 0%, #BAE0F3 48%, #9ed0eb 100%);
    color: var(--blue);
    padding: 56px 24px 64px;
    text-align: center;
  }
  .page-hero .wrap {
    max-width: 900px;
    margin: 0 auto;
  }
  .breadcrumb {
    font-size: 0.82rem;
    color: rgba(10,31,68,0.65);
    margin-bottom: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .breadcrumb a { color: var(--teal-dark); font-weight: 600; text-decoration: none; }
  .breadcrumb a:hover { text-decoration: underline; }
  .page-hero .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--teal-dark);
    background: rgba(255,255,255,0.7);
    padding: 4px 14px;
    border-radius: 999px;
    margin-bottom: 12px;
  }
  .page-hero h1 {
    font-size: clamp(2rem, 3.6vw, 2.8rem);
    color: var(--blue);
    margin-bottom: 14px;
    line-height: 1.25;
  }
  .page-hero .lead {
    font-size: 1.05rem;
    color: rgba(10,31,68,0.85);
    max-width: 720px;
    margin: 0 auto 20px;
    line-height: 1.65;
  }
  .hero-badges-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  .hero-badge-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--blue);
    background: rgba(255,255,255,0.85);
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid rgba(10,31,68,0.08);
  }

  /* ── FEATURED CURED CASES SECTION ── */
  .featured-section {
    max-width: 1220px;
    margin: -32px auto 56px;
    padding: 0 24px;
    position: relative;
    z-index: 5;
  }
  .featured-header-card {
    background: var(--navy-bar);
    color: #ffffff;
    border-radius: 20px 20px 0 0;
    padding: 24px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    box-shadow: 0 10px 30px -10px rgba(11,37,69,0.3);
  }
  .featured-header-card h2 {
    font-size: clamp(1.25rem, 2.2vw, 1.65rem);
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .featured-header-card p {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.8);
    margin-top: 4px;
  }
  .featured-count-badge {
    background: var(--teal);
    color: #ffffff;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 6px 14px;
    border-radius: 999px;
    text-transform: uppercase;
  }

  .featured-grid-wrap {
    background: #ffffff;
    border-radius: 0 0 20px 20px;
    padding: 32px;
    box-shadow: 0 16px 36px -12px rgba(10,31,68,0.12);
    border: 1px solid rgba(10,31,68,0.08);
    border-top: none;
  }
  .featured-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 26px;
  }

  /* ── FEATURED CASE CARD ── */
  .cured-card {
    background: #ffffff;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow-card);
    border: 1px solid rgba(10,31,68,0.08);
    transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.3s;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    position: relative;
  }
  .cured-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    border-color: var(--teal);
  }
  .cured-card-media {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: linear-gradient(135deg, #e8f4fa, #d0eaf5);
  }
  .cured-card-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s var(--ease);
  }
  .cured-card:hover .cured-card-media img {
    transform: scale(1.06);
  }
  .cured-card-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: var(--blue);
    color: #ffffff;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 999px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  }
  .cured-card-verified {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #10B981;
    color: #ffffff;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 4px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .cured-card-body {
    padding: 22px 22px 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .cured-card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }
  .cured-tag {
    font-size: 0.7rem;
    color: var(--teal-dark);
    background: var(--teal-light);
    padding: 2px 8px;
    border-radius: 999px;
    font-weight: 600;
  }
  .cured-card-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--blue);
    line-height: 1.35;
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .cured-profile-pills {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;
    padding: 10px 12px;
    background: #f8fafc;
    border-radius: 10px;
    border: 1px solid rgba(10,31,68,0.06);
    font-size: 0.78rem;
  }
  .cured-pill-row {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #4b5563;
  }
  .cured-pill-row strong {
    color: var(--blue);
    font-size: 0.76rem;
  }
  .cured-card-brief {
    font-size: 0.84rem;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 18px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .cured-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid rgba(10,31,68,0.08);
  }
  .cured-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.84rem;
    font-weight: 700;
    color: var(--teal-dark);
    transition: gap 0.2s, color 0.2s;
  }
  .cured-card:hover .cured-cta-btn {
    color: var(--blue);
    gap: 10px;
  }
  .cured-author {
    font-size: 0.72rem;
    color: var(--muted);
  }

  /* ── CATEGORY SECTION CONTAINER ── */
  .case-section {
    margin-bottom: 48px;
  }

  /* Dark Blue Category Banner */
  .category-bar {
    background: var(--navy-bar);
    color: #ffffff;
    padding: 18px 24px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.2rem, 2.2vw, 1.55rem);
    font-weight: 700;
    letter-spacing: 0.02em;
    box-shadow: 0 4px 16px rgba(11,37,69,0.25);
  }

  .cases-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 36px 24px 12px;
  }

  /* Card Grid */
  .cases-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 26px;
  }

  /* Individual Case Card */
  .case-card {
    background: #ffffff;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow-card);
    border: 1px solid rgba(10,31,68,0.08);
    transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.3s;
    display: flex;
    flex-direction: column;
  }
  .case-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(0,140,140,0.35);
  }

  /* Card Media Top Banner */
  .case-media {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: linear-gradient(135deg, #e8f4fa, #d0eaf5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .case-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s var(--ease);
  }
  .case-card:hover .case-media img {
    transform: scale(1.05);
  }

  /* Visual Graphic Fallback inside Card Media */
  .case-visual-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.9), rgba(206,235,248,0.7));
  }
  .case-visual-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: linear-gradient(135deg, #008C8C, #0A1F44);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin-bottom: 8px;
    box-shadow: 0 6px 16px -4px rgba(0,140,140,0.4);
  }
  .case-visual-tag {
    font-size: 0.72rem;
    font-weight: 700;
    color: #0A1F44;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  /* Card Body */
  .case-body {
    padding: 22px 22px 26px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .case-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 10px;
    line-height: 1.35;
  }
  .case-desc {
    font-size: 0.84rem;
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }

  /* CTA at bottom */
  .cta {
    background: linear-gradient(135deg, #0096c7 0%, #0a4a6e 100%);
    color: #ffffff;
    padding: 72px 24px;
    text-align: center;
    margin-top: 36px;
  }
  .cta h2 { font-size: clamp(1.6rem, 2.6vw, 2.2rem); margin-bottom: 12px; color: #fff; }
  .cta p { font-size: 0.95rem; color: rgba(255,255,255,0.85); max-width: 560px; margin: 0 auto 28px; }
  .cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .btn-white {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #ffffff;
    color: #0a4a6e;
    padding: 12px 24px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none;
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .btn-white:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }

  @media (max-width: 1024px) {
    .featured-cards-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .cases-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .cases-wrap { padding: 28px 20px 10px; }
  }

  @media (max-width: 640px) {
    .featured-cards-grid { grid-template-columns: 1fr; gap: 18px; }
    .featured-grid-wrap { padding: 20px 16px; }
    .featured-header-card { padding: 20px; }
    .cases-grid { grid-template-columns: 1fr; gap: 18px; }
    .page-hero { padding: 40px 16px 48px; }
    .category-bar { font-size: 1.15rem; padding: 14px 16px; }
    .case-body { padding: 18px 18px 22px; }
    .case-title { font-size: 0.98rem; }
  }
`;

interface CaseItem {
  title: string;
  desc: string;
  image?: string;
  iconType?: string;
}

interface CaseCategory {
  category: string;
  cases: CaseItem[];
}

const caseStudyCategories: CaseCategory[] = [
  {
    category: "Global Developmental Delays",
    cases: [
      {
        title: "Global Delay with Gross & Fine Motor Lag",
        desc: "Multi-domain developmental lag affecting milestones like sitting, crawling, independent walking, hand grasping, and bilateral coordination.",
        image: "/images/developmental-delays/image-1.webp",
      },
      {
        title: "Developmental Delay with Sensory Challenges",
        desc: "Supporting children with sensory modulation difficulties, vestibular imbalance, auditory hypersensitivity, and milestone progress.",
        image: "/images/developmental-delays/image-2.webp",
      },
      {
        title: "Comprehensive Cognitive & Adaptive Delay",
        desc: "Constitutional homeopathic care targeting cognitive processing, working memory, emotional stability, and self-care milestone gains.",
        image: "/images/developmental-delays/image-3.webp",
      },
    ],
  },
  {
    category: "Speech Delays",
    cases: [
      {
        title: "Expressive Speech Delay with Clear Comprehension",
        desc: "Children with age-appropriate understanding who struggle with spoken vocabulary, word-finding, sentence formation, and articulation.",
        image: "/images/autism-care/child-boy-peeking.png",
      },
      {
        title: "Receptive-Expressive Language Disorder",
        desc: "Individualized support for auditory comprehension processing speed, verbal instruction retention, and conversational confidence.",
        image: "/images/autism-care/child-girl-peeking.png",
      },
      {
        title: "Non-Verbal Communication & Vocalization Support",
        desc: "Fostering communicative intent, eye contact, gesture coordination, and progressive expressive vocalization in early childhood.",
        image: "/images/autism-care/neuro-peek-4-teal-boy.png",
      },
    ],
  },
  {
    category: "ADHD with Dyslexia",
    cases: [
      {
        title: "ADHD Combined with Reading Difficulties",
        desc: "Dual support addressing short attention span, impulsivity, phonetic decoding struggles, letter reversals, and reading fatigue.",
        image: "/images/adhd-add/card-1.png",
      },
      {
        title: "Executive Function & Working Memory Deficit",
        desc: "Constitutional assistance for organizing academic tasks, following multi-step directions, and sustaining focus in classroom settings.",
        image: "/images/adhd-add/card-2.png",
      },
      {
        title: "Hyperactivity with Visual Tracking Challenges",
        desc: "Soothing motor restlessness while strengthening visual tracking, word line alignment, and reading fluency over time.",
        image: "/images/adhd-add/card-3.png",
      },
    ],
  },
  {
    category: "ADHD with Genetic Variants",
    cases: [
      {
        title: "ADHD with Neurotransmitter Pathway Variants",
        desc: "Constitutional management for dopamine and noradrenaline pathway variations influencing impulse control, arousal, and focus.",
        image: "/images/adhd-add/card-4.png",
      },
      {
        title: "Attention Deficit with Strong Familial History",
        desc: "Mapping multi-generational constitutional indicators to formulate deep-acting, individualised homeopathic remedies for ADHD.",
        image: "/images/adhd-add/card-5.png",
      },
      {
        title: "Inattentive Type with Sluggish Cognitive Tempo",
        desc: "Supporting daydreaming tendencies, processing speed delays, low mental stamina, and lack of daytime physical vitality.",
        image: "/images/adhd-add/card-6.png",
      },
    ],
  },
  {
    category: "Asperger's Syndrome",
    cases: [
      {
        title: "Asperger's with Social Communication Challenges",
        desc: "Supporting nuance recognition in peer interactions, conversational reciprocity, and non-literal communication comfort.",
        image: "/images/autism-care/neuro-peek-1-purple-girl.png",
      },
      {
        title: "Fixated Interests & Rigid Routine Needs",
        desc: "Helping children smoothly manage transitions, unexpected schedule shifts, and sensory sensitivity in crowded environments.",
        image: "/images/autism-care/neuro-peek-2-red-boy.png",
      },
      {
        title: "Emotional Regulation & Meltdown Management",
        desc: "Calming hyper-arousal and anxiety triggers to prevent emotional meltdowns while supporting academic self-confidence.",
        image: "/images/autism-care/neuro-peek-3-yellow-girl.png",
      },
    ],
  },
  {
    category: "Spina Bifida",
    cases: [
      {
        title: "Spina Bifida Occulta with Neurological Symptoms",
        desc: "Complementary care promoting lower extremity nerve conductivity, leg muscle strength, and reflex coordination.",
        image: "/images/treatments/child-neurological-disorders.jpg",
      },
      {
        title: "Myelomeningocele Supportive Care",
        desc: "Constitutional support assisting bladder/bowel functional tone, physical mobility stamina, and infection resistance.",
        image: "/images/cerebral-palsy/image-1.jpg",
      },
      {
        title: "Hydrocephalus & Shunt Recovery Support",
        desc: "Gentle homeopathic assistance to relieve headaches, enhance cognitive alertness, and sustain vital childhood energy.",
        image: "/images/cerebral-palsy/image-10.jpg",
      },
    ],
  },
  {
    category: "Dyslexia & Learning Difficulties",
    cases: [
      {
        title: "Phonological Dyslexia & Decoding Struggles",
        desc: "Assisting children with phoneme-grapheme mapping difficulties, sequential reading memory, and word recognition speed.",
        image: "/images/treatments/dyslexia.jpg",
      },
      {
        title: "Surface Dyslexia & Sight Word Processing",
        desc: "Support for visual word memory, irregular spelling comprehension, and reading confidence across school grades.",
        image: "/images/adhd-add/card-7.png",
      },
      {
        title: "Dysgraphia & Handwriting Coordination",
        desc: "Addressing fine motor pencil fatigue, spatial letter spacing, hand tremors, and expressive written output anxiety.",
        image: "/images/developmental-delays/image-4.webp",
      },
    ],
  },
  {
    category: "Cerebral Palsy",
    cases: [
      {
        title: "Spastic Diplegia with Lower Limb Muscle Tightness",
        desc: "Complementary constitutional support aimed at reducing muscle hypertonia, scissor gait patterns, and joint stiffness.",
        image: "/images/cerebral-palsy/image-1.jpg",
      },
      {
        title: "Hemiplegic Cerebral Palsy with Coordination Lag",
        desc: "Encouraging bilateral body awareness, arm/hand grasping strength, and balanced weight-bearing posture.",
        image: "/images/cerebral-palsy/image-10.jpg",
      },
      {
        title: "Athetoid & Ataxic Motor Support",
        desc: "Supportive care targeting involuntary choreic movements, trunk balance coordination, and speech articulation clarity.",
        image: "/images/developmental-delays/image-5.webp",
      },
    ],
  },
  {
    category: "Intellectual Disability",
    cases: [
      {
        title: "Mild to Moderate Cognitive Support",
        desc: "Enhancing cognitive processing capacity, concept retention, everyday adaptive communication, and school engagement.",
        image: "/images/intellectual-disability/image-1.webp",
      },
      {
        title: "Cognitive Delay with Restless Behaviors",
        desc: "Individualized remedies addressing emotional volatility, hyperactive restlessness, and attention deficit alongside ID.",
        image: "/images/mental-retardation/image-1.webp",
      },
      {
        title: "Syndromic Cognitive & Daily Living Support",
        desc: "Holistic constitutional management supporting personal independence, daily life routines, and emotional wellbeing.",
        image: "/images/autism-care/family-peeking.png",
      },
    ],
  },
  {
    category: "Down Syndrome (Trisomy 21)",
    cases: [
      {
        title: "Down Syndrome with Delayed Speech & Motor Milestones",
        desc: "Constitutional support addressing hypotonia, gross motor milestone lag, tongue thrust, and verbal articulation.",
        image: "/images/treatments/downs-syndrome.jpg",
      },
      {
        title: "Trisomy 21 with Recurrent Respiratory Infections",
        desc: "Strengthening respiratory mucosal immunity, reducing seasonal chest congestion, and improving vital resilience.",
        image: "/images/autism-care/beh-1-crying-boy.png",
      },
      {
        title: "Cognitive & Metabolic Support for Down Syndrome",
        desc: "Longitudinal constitutional management fostering cognitive alertness, memory retention, and thyroid/metabolic balance.",
        image: "/images/treatments/child-behavioral-disorder.jpg",
      },
    ],
  },
  {
    category: "PANS & PANDAS",
    cases: [
      {
        title: "Post-Infectious Sudden Behavioral Onset",
        desc: "Targeted support for abrupt-onset OCD rituals, vocal/motor tics, and severe anxiety following bacterial or viral triggers.",
        image: "/images/treatments/child-behavioral-disorder.jpg",
      },
      {
        title: "PANS with Emotional Lability & Sensory Amplification",
        desc: "Calming intense mood swings, tactile defensiveness, sleep terrors, and food avoidance in neuroimmune flare-ups.",
        image: "/images/autism-care/beh-5-anxious-girl.png",
      },
      {
        title: "Chronic Relapsing PANDAS Care",
        desc: "Constitutional immunological management aimed at decreasing flare frequency, severity, and cognitive regression.",
        image: "/images/autism-care/beh-4-hyper-boy.png",
      },
    ],
  },
  {
    category: "Lyme Disease",
    cases: [
      {
        title: "Chronic Post-Lyme Cognitive Fog & Fatigue",
        desc: "Restoring mental alertness, attention focus, and physical energy following tick-borne borreliosis infection.",
        image: "/images/autism-care/beh-2-sleeping-boy.png",
      },
      {
        title: "Neurological Lyme with Joint & Nerve Pain",
        desc: "Complementary relief for migrating joint stiffness, neuropathic tingling, sleep disturbances, and bodily fatigue.",
        image: "/images/treatments/child-neurological-disorders.jpg",
      },
      {
        title: "Paediatric Lyme with Behavioral & Mood Shifts",
        desc: "Supporting children experiencing emotional volatility, school fatigue, and headache episodes post-infection.",
        image: "/images/autism-care/beh-1-crying-boy.png",
      },
    ],
  },
  {
    category: "OCD (Obsessive-Compulsive Disorder)",
    cases: [
      {
        title: "Intrusive Thoughts & Repetitive Checking Rituals",
        desc: "Constitutional homeopathic treatment reducing compulsive routines, symmetry distress, and mental looping in children.",
        image: "/images/autism-care/beh-4-hyper-boy.png",
      },
      {
        title: "Contamination Anxiety & Avoidance Behaviors",
        desc: "Gentle remedies helping desensitize intense germ fears, compulsive handwashing, and avoidance of everyday surfaces.",
        image: "/images/autism-care/beh-5-anxious-girl.png",
      },
      {
        title: "Paediatric Acute-Onset OCD with Motor Tics",
        desc: "Comprehensive dual care addressing compulsive thought distress alongside motor/vocal tics and bedtime separation anxiety.",
        image: "/images/autism-care/neuro-peek-2-red-boy.png",
      },
    ],
  },
  {
    category: "Anxiety",
    cases: [
      {
        title: "Generalized Anxiety & Chronic Anticipatory Worry",
        desc: "Constitutional remedies for pervasive worry, somatic tension, gastrointestinal nervousness, and sleep disturbances in children.",
        image: "/images/autism-care/beh-5-anxious-girl.png",
      },
      {
        title: "Panic Episodes & Acute Palpitations",
        desc: "Rapid-acting gentle homeopathic support reducing sudden panic attacks, hyperventilation, trembling, and agoraphobia fears.",
        image: "/images/autism-care/beh-1-crying-boy.png",
      },
      {
        title: "Social Anxiety & Selective Mutism Traits",
        desc: "Assisting children experiencing extreme performance anxiety, school phobia, peer shyness, and speech hesitation.",
        image: "/images/autism-care/child-girl-peeking.png",
      },
    ],
  },
  {
    category: "Depression",
    cases: [
      {
        title: "Chronic Low Mood & Vital Energy Depletion",
        desc: "Constitutional support addressing emotional apathy, loss of interest, morning melancholy, and sluggish mental vitality.",
        image: "/images/autism-care/beh-2-sleeping-boy.png",
      },
      {
        title: "Situational Depression & Grief Processing",
        desc: "Individualized therapy supporting children and adolescents navigating family stress, bereavement, and academic burnout.",
        image: "/images/autism-care/neuro-peek-1-purple-girl.png",
      },
      {
        title: "Adolescent Mood Fluctuations & Irritability",
        desc: "Harmonizing neuroendocrine balance, restoring circadian sleep rhythm, and rebuilding emotional resilience in youth.",
        image: "/images/autism-care/neuro-peek-3-yellow-girl.png",
      },
    ],
  },
  {
    category: "PTSD (Post-Traumatic Stress Disorder)",
    cases: [
      {
        title: "Intrusive Trauma Memories & Flashbacks",
        desc: "Deep-acting constitutional remedies to soothe hyper-arousal, exaggerated startle response, and distressing mental imagery.",
        image: "/images/autism-care/beh-4-hyper-boy.png",
      },
      {
        title: "Emotional Numbing & Avoidance Reactions",
        desc: "Helping individuals recover emotional connection, reduce trigger avoidance, and release chronic physical somatic holding.",
        image: "/images/autism-care/family-peeking.png",
      },
      {
        title: "Paediatric Trauma & Night Terror Relief",
        desc: "Gentle homeopathic care for nocturnal panic, bedtime terror episodes, separation distress, and behavioral regression.",
        image: "/images/autism-care/child-boy-peeking.png",
      },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <h1>Autism Improvement Stories &amp; Clinical Case Studies</h1>
          <p className="lead">
            Explore documented clinical case studies and verified autism recovery stories treated with Dr. Ketan Patel's specialized homeopathic protocols. Real parent narratives detailing early detection, milestone breakthroughs, and mainstream school integration.
          </p>

          <div className="hero-badges-row">
            <div className="hero-badge-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--teal)" strokeWidth="2.2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>5 Documented Cured Cases</span>
            </div>
            <div className="hero-badge-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--teal)" strokeWidth="2.2">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Over 34+ Years Clinical Focus</span>
            </div>
            <div className="hero-badge-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--teal)" strokeWidth="2.2">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Mainstream School Transitions</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CURED CLINICAL CASE STUDIES CARDS */}
      <section className="featured-section" id="cured-cases">
        <div className="featured-header-card">
          <div>
            <h2>
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Documented Cured Case Studies – Patient Recovery Records
            </h2>
            <p>
              Click any card below to read the complete case study, including pre-treatment symptoms, milestones timeline, parent letters, and clinical commentary.
            </p>
          </div>
          <span className="featured-count-badge">5 Full Case Studies</span>
        </div>

        <div className="featured-grid-wrap">
          <div className="featured-cards-grid">
            {CASE_STUDIES.map((c) => (
              <Link
                key={c.id}
                href={`/casestudies/${c.slug}`}
                className="cured-card"
                title={`Read Case Study: ${c.title}`}
              >
                <div className="cured-card-media">
                  <img src={c.image} alt={c.title} loading="lazy" decoding="async" />
                  <span className="cured-card-badge">{c.badge}</span>
                  <span className="cured-card-verified">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Verified Case
                  </span>
                </div>

                <div className="cured-card-body">
                  <div className="cured-card-meta">
                    {c.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="cured-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="cured-card-title">{c.title}</h3>

                  <div className="cured-profile-pills">
                    <div className="cured-pill-row">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>
                        <strong>Patient:</strong> {c.patientProfile.ageAtStart} • {c.patientProfile.location}
                      </span>
                    </div>
                    <div className="cured-pill-row">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>
                        <strong>Course:</strong> {c.patientProfile.duration}
                      </span>
                    </div>
                    <div className="cured-pill-row">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#10B981" strokeWidth="2.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ color: 'var(--teal-dark)', fontWeight: 600 }}>
                        {c.patientProfile.schoolStatus}
                      </span>
                    </div>
                  </div>

                  <p className="cured-card-brief">{c.brief}</p>

                  <div className="cured-card-footer">
                    <span className="cured-author">{c.publishDate}</span>
                    <span className="cured-cta-btn">
                      Read Full Case Story &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CLINICAL PRESENTATIONS & CATEGORIES */}
      {caseStudyCategories.map((cat, idx) => (
        <section key={idx} className="case-section">
          <div className="category-bar">
            {cat.category}
          </div>
          <div className="cases-wrap">
            <div className="cases-grid">
              {cat.cases.map((c, cIdx) => (
                <div key={cIdx} className="case-card">
                  <div className="case-media">
                    {c.image ? (
                      <img src={c.image} alt={c.title} loading="lazy" decoding="async" />
                    ) : (
                      <div className="case-visual-badge">
                        <div className="case-visual-icon">
                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <span className="case-visual-tag">{cat.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="case-body">
                    <h3 className="case-title">{c.title}</h3>
                    <p className="case-desc">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta">
        <h2>Have questions about a specific case presentation?</h2>
        <p>Our clinical team is available to review your child's developmental reports and discuss tailored homeopathic care.</p>
        <div className="cta-row">
          <Link href="/contact" className="btn-white">
            Book Consultation
          </Link>
          <a href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer" className="btn-white">
            WhatsApp Our Team
          </a>
        </div>
      </section>
    </>
  );
}
