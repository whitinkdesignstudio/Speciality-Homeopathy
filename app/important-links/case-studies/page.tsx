import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Autism & Child Neurology Treatment – Complete Case Studies',
  description:
    'Read documented autism improvement stories and case studies from Speciality Homeopathy. Results vary from child to child; consult our doctor.',
  keywords:
    'autism homeopathy case studies, autism improvement stories, case studies homeopathy',
};

const pageStyles = `
  :root {
    --blue: #0A1F44;
    --navy-bar: #0B2545;
    --teal: #008C8C;
    --gold: #C8A96B;
    --ivory: #FAF8F4;
    --graphite: #2E2E2E;
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
    max-width: 860px;
    margin: 0 auto;
  }
  .breadcrumb {
    font-size: 0.8rem;
    color: rgba(10,31,68,0.65);
    margin-bottom: 14px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  .breadcrumb a { color: var(--teal); font-weight: 600; }
  .page-hero .eyebrow {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 10px;
  }
  .page-hero h1 {
    font-size: clamp(2rem, 3.8vw, 2.9rem);
    color: var(--blue);
    margin-bottom: 14px;
  }
  .page-hero .lead {
    font-size: 1.05rem;
    color: rgba(10,31,68,0.8);
    max-width: 620px;
    margin: 0 auto;
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
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .btn-white:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }

  @media (max-width: 1024px) {
    .cases-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .cases-wrap { padding: 28px 20px 10px; }
  }

  @media (max-width: 640px) {
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
    category: "AUTISM CASES",
    cases: [
      {
        title: "Autism with Multiple Genetic Disorders",
        desc: "Autism associated with multiple genetic disorders can involve complex genetic changes that may affect development, communication, learning, behavior, and overall functioning.",
        image: "/images/treatments/autism-care.jpg",
      },
      {
        title: "Autism with Metabolic Disease",
        desc: "Autism with metabolic disease may involve biochemical or metabolic abnormalities that can influence brain development, energy metabolism, communication, behavior, and overall functioning.",
        image: "/images/autism-care/beh-3-sensory-girl.png",
      },
      {
        title: "Autism with Mitochondrial Disruption",
        desc: "Autism with mitochondrial disruption may involve impaired cellular energy production, which can affect brain development, communication, behavior, and overall neurological functioning.",
        image: "/images/autism-care/beh-2-sleeping-boy.png",
      },
      {
        title: "Intense Autism – Profound Autism Cases",
        desc: "Profound autism refers to severe autism-related support needs that can significantly affect communication, learning, adaptive skills, behavior, and independent daily functioning.",
        image: "/images/autism-care/beh-4-hyper-boy.png",
      },
      {
        title: "Autism with Chromosomal Abnormalities",
        desc: "Autism with chromosomal abnormalities may involve changes in chromosome number or structure that can influence brain development, communication, learning, behavior, and overall development.",
        image: "/images/autism-care/beh-5-anxious-girl.png",
      },
    ],
  },
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
            Explore documented clinical case studies and autism improvement stories across autism spectrum conditions, speech delays, and developmental progress. Results vary from child to child. Consult our doctor for an individual assessment.
          </p>
        </div>
      </section>

      {/* CASE CATEGORIES */}
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
          <Link href="/contactus" className="btn-white">
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
