'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ConditionData {
  id: string;
  tabLabel: string;
  tabSub: string;
  badge: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  overview: string;
  clinicalSigns: { title: string; desc: string }[];
  biologyInsight: { title: string; body: string };
  homeopathyProtocol: {
    approach: string;
    targetOutcomes: string[];
  };
  doctorQuote: string;
}

const conditions: ConditionData[] = [
  {
    id: 'profound',
    tabLabel: 'Profound Autism',
    tabSub: 'Substantial 24/7 Daily Living Support',
    badge: 'Category: Severe Spectrum & High Support',
    title: 'Profound Autism: Sensory Calming & Constitutional Care',
    tagline: 'Supporting the non-speaking, intensely dysregulated child with profound patience and cellular-level constitutional balance.',
    image: '/images/treatments/profound-autism.jpg',
    imageAlt: 'Mother holding and comforting a child with profound autism with gentle care',
    imageCaption: 'Individualized constitutional homeopathic care prioritizes sensory calmness, restorative sleep, and nervous system comfort.',
    overview:
      'Profound autism is a clinical classification designating children and adolescents who require continuous, 24/7 physical and emotional support. These children typically present with minimal or absent speech, pronounced intellectual challenges, intense sensory processing distress, and distressing physical comorbidities including chronic gut dysbiosis, sleep fragmentation, and severe anxiety meltdowns.',
    clinicalSigns: [
      {
        title: 'Communication Barriers',
        desc: 'Non-speaking or strictly non-functional speech, limited ability to signal physical pain or emotional distress.',
      },
      {
        title: 'Acute Sensory Dysregulation',
        desc: 'Extreme sensitivity to auditory, visual, or tactile stimuli, triggering flight-or-freeze tantrums and defensive behavior.',
      },
      {
        title: 'Comorbid Sleep & Gut Distress',
        desc: 'Severe circadian rhythm disturbances, nocturnal awakenings, chronic constipation, and food selectivity.',
      },
      {
        title: 'Safety & Daily Living Vulnerabilities',
        desc: 'Absence of danger awareness, bolting (elopement), self-injurious head-banging or biting during dysregulation.',
      },
    ],
    biologyInsight: {
      title: 'The Neuro-Biological Underpinning',
      body:
        'Children with profound autism frequently experience a hyper-aroused autonomic nervous system stuck in a persistent sympathetic state (fight-or-flight). Chronic microglial neuro-inflammation in the cerebral cortex and cerebellum, combined with intestinal barrier hyperpermeability (leaky gut), creates systemic toxicity that manifests as behavioral panic.',
    },
    homeopathyProtocol: {
      approach:
        'Rather than attempting to suppress outward behaviors with tranquilizers, classical constitutional homeopathy evaluates the child’s thermal state, digestive sensitivities, sleep posture, and non-verbal triggers to administer gentle, highly diluted micro-doses that calm autonomic storms.',
      targetOutcomes: [
        'Gradual down-regulation of sensory panic and fight-or-flight overreactions',
        'Restoration of unassisted 6–8 hour uninterrupted restorative sleep cycles',
        'Resolution of gastrointestinal cramping, bloating, and painful constipation',
        'Emergence of eye contact, affectionate engagement, and receptive joint attention',
      ],
    },
    doctorQuote:
      'In 34+ years of treating profound autism, I have seen that beneath the hardest meltdowns is a child trapped in sensory agony. When we soothe their nervous system constitutionally, the true child emerges.',
  },
  {
    id: 'syndromic',
    tabLabel: 'Syndromic Autism',
    tabSub: 'Fragile X, Rett, Tuberous Sclerosis',
    badge: 'Category: Chromosomal & Genetic Syndromes',
    title: 'Syndromic Autism: Personalized Care for Known Syndromes',
    tagline: 'When autism traits accompany an identified genetic syndrome, care must be tailored to the whole human constitution.',
    image: '/images/autism-history/syndromic-autism.jpg',
    imageAlt: 'Pediatric specialist reviewing developmental progress with caring mother and child in clinical office',
    imageCaption: 'Syndromic conditions require a multi-disciplinary lens that looks past the chromosomal label to the child’s unique vitality.',
    overview:
      'Syndromic autism describes autism spectrum characteristics that manifest as part of a recognized, genetically diagnosed medical syndrome. Unlike idiopathic autism where the exact root is multi-factorial, syndromic autism is linked to identifiable chromosomal anomalies, microdeletions, or single-gene defects such as Fragile X Syndrome (FMR1 gene), Rett Syndrome (MECP2), Tuberous Sclerosis Complex (TSC1/TSC2), and Angelman Syndrome.',
    clinicalSigns: [
      {
        title: 'Identified Monogenic Origin',
        desc: 'Definitive diagnostic mutation confirmed via Karyotyping, Chromosomal Microarray (CMA), or targeted gene sequencing.',
      },
      {
        title: 'Dysmorphic & Somatic Features',
        desc: 'Subtle physical characteristics such as distinct facial architecture, joint hypermobility, macrocephaly, or skin macules.',
      },
      {
        title: 'Epilepsy & Neurological Vulnerability',
        desc: 'Elevated prevalence of subclinical or overt seizures, EEG abnormalities, motor coordination deficits, and hypotonia.',
      },
      {
        title: 'Developmental Plateauing',
        desc: 'Milestones attained early may plateau or show partial regression between 12 and 36 months of age.',
      },
    ],
    biologyInsight: {
      title: 'Genetics as a Blueprint, Not a Fate',
      body:
        'While conventional genetics views a chromosomal mutation as static, epigenetics proves that gene expression is dynamic. Cellular signaling pathways like mTOR (in Tuberous Sclerosis) or synaptic spine density (in Fragile X) respond positively when systemic toxicity, oxidative stress, and inflammatory cascades are mitigated.',
    },
    homeopathyProtocol: {
      approach:
        'In classical constitutional homeopathy, we do not attempt to "rewrite" the chromosome. Instead, we prescribe for the unique somatic totality—alleviating seizure thresholds, normalizing digestive assimilation, and strengthening physical vitality.',
      targetOutcomes: [
        'Stabilization of neurological baseline and reduction of seizure susceptibility',
        'Improvement in muscle tone, postural control, and voluntary limb coordination',
        'Reduction in involuntary stereotypies (hand-wringing, flapping, rocking)',
        'Enhanced social alertness and engagement with parents and therapists',
      ],
    },
    doctorQuote:
      'A genetic test gives us a diagnostic label, but it does not tell us the limits of what a child can achieve. Our goal is to maximize their functional neuroplastic capacity every single day.',
  },
  {
    id: 'metabolic',
    tabLabel: 'Genetic & Metabolic',
    tabSub: 'Whole Exome Sequencing & Mitochondria',
    badge: 'Category: Cellular Energy & Metabolic ASD',
    title: 'Genetic, Metabolic & Mitochondrial Autism',
    tagline: 'Uncovering the biochemical energy deficits, inborn metabolic errors, and Whole Exome Sequencing variants.',
    image: '/images/autism-history/genetic-metabolic-autism.jpg',
    imageAlt: 'Senior pediatric specialist doctor discussing genetic reports and metabolic test results with parents',
    imageCaption: 'Whole Exome Sequencing (WES) and organic acid panels reveal metabolic blocks that respond to constitutional care.',
    overview:
      'Advances in genomic medicine have revealed that upwards of 25% of children on the autism spectrum suffer from treatable metabolic and mitochondrial disorders. In these children, cellular power plants (mitochondria) produce insufficient ATP, leaving high-energy tissues—specifically the brain and gastrointestinal tract—in a state of chronic metabolic exhaustion, frequently leading to sudden post-viral developmental regression.',
    clinicalSigns: [
      {
        title: 'Whole Exome Sequencing (WES) Findings',
        desc: 'Pathogenic variants or Variants of Unknown Significance (VUS) in ion channels, synaptic scaffolding, or methylation enzymes.',
      },
      {
        title: 'Mitochondrial Energy Depletion',
        desc: 'Child fatigues unusually fast, displays muscle weakness, struggles with stair-climbing, and crashes after mild physical exertion.',
      },
      {
        title: 'Post-Febrile Developmental Regression',
        desc: 'History of losing spoken words, eye contact, or fine motor skills directly following a fever, infection, or vaccination stress.',
      },
      {
        title: 'Organic Acid & Amino Acid Abnormalities',
        desc: 'Elevated lactate, pyruvate, krebs cycle intermediates, or carnitine deficiencies visible on specialized metabolic urine panels.',
      },
    ],
    biologyInsight: {
      title: 'Mitochondrial Exhaustion in the Developing Brain',
      body:
        'The human brain consumes 20% of the body’s total resting metabolic energy despite representing only 2% of total body weight. When mitochondrial electron transport chain complexes underperform, neurons cannot fire with rapid fidelity, leading to synaptic pruning failure, sensory gating deficits, and profound cognitive fatigue.',
    },
    homeopathyProtocol: {
      approach:
        'Dr. Ketan Patel pairs classical homeopathic constitutional prescriptions with strict biochemical elimination protocols (eliminating neuro-inflammatory gluten, casein, refined sugars) to relieve mitochondrial oxidative stress and restore cellular resilience.',
      targetOutcomes: [
        'Reversal of severe physical and cognitive lethargy; sustained daily energy',
        'Stabilization against regression episodes during common childhood infections',
        'Normalization of gastrointestinal motility, appetite, and nutrient absorption',
        'Rapid acceleration of receptive language and cognitive processing speed',
      ],
    },
    doctorQuote:
      'When you feed the mitochondria the right environment and clear toxic cellular blockages with constitutional remedies, the brain wakes up. Energy returns, and language follows.',
  },
  {
    id: 'cerebral-palsy',
    tabLabel: 'Cerebral Palsy',
    tabSub: 'Motor Tone, Spasticity & Coordination',
    badge: 'Category: Neuromotor & Postural Conditions',
    title: 'Cerebral Palsy: Neuro-Motor Recovery & Tone Balance',
    tagline: 'Gentle constitutional support to ease muscle spasticity, stimulate neural pathways, and build physical independence.',
    image: '/images/autism-history/cerebral-palsy-care.jpg',
    imageAlt: 'Pediatric physical therapist gently assisting young child with balance and physical motor exercises',
    imageCaption: 'Integrating constitutional homeopathy with physical and occupational therapy enhances motor milestone progress.',
    overview:
      'Cerebral Palsy (CP) is an umbrella term for a spectrum of non-progressive motor, posture, and muscle control disorders caused by damage to the immature, developing brain—most commonly occurring before, during, or shortly after labor. Depending on the anatomical brain regions affected (cortex, basal ganglia, cerebellum), children experience spasticity, athetosis, ataxia, or mixed tone variations that hinder independent milestone acquisition.',
    clinicalSigns: [
      {
        title: 'Spasticity or Severe Hypotonia',
        desc: 'Stiff, hypertonic limbs with scissoring gait, toe-walking, or conversely, floppiness with inability to hold the neck upright.',
      },
      {
        title: 'Delayed Motor Milestones',
        desc: 'Significant delays in rolling over, sitting independently, crawling, cruising, standing, and reciprocal walking.',
      },
      {
        title: 'Oral-Motor & Speech Difficulties',
        desc: 'Dysarthria (slurred speech), excessive drooling, difficulties with chewing coarse foods, and swallowing incoordination.',
      },
      {
        title: 'Asymmetric Voluntary Movement',
        desc: 'Predominant use of one side of the body (hemiplegia) with persistent fisting of the affected hand and clawing toes.',
      },
    ],
    biologyInsight: {
      title: 'Upper Motor Neuron Lesions & Reflex Arcs',
      body:
        'Damage to descending corticospinal motor tracts interrupts the inhibitory signals that normally modulate muscle contraction. As a consequence, spinal reflex arcs become hyperactive, causing sustained painful muscle spasms, contracture risk, and restricted joint range of motion.',
    },
    homeopathyProtocol: {
      approach:
        'Constitutional remedies act on neuromuscular excitability and peripheral nerve circulation, assisting tight muscle bellies to soften without causing systemic muscle weakness. This dramatically magnifies the gains achieved during regular physiotherapy sessions.',
      targetOutcomes: [
        'Noticeable softening of rigid spastic muscle groups in calves, adductors, and hamstrings',
        'Improvement in head control, trunk stability, and sitting posture endurance',
        'Enhancement of fine motor grasp, pincer grasp, and voluntary object release',
        'Reduction of excessive drooling and clearer articulation of speech syllables',
      ],
    },
    doctorQuote:
      'Our goal in cerebral palsy is not simply to manage stiffness; it is to awaken dormant motor pathways. When the nervous system relaxes, children discover the joy of movement.',
  },
  {
    id: 'pvl',
    tabLabel: 'PVL (White Matter)',
    tabSub: 'Periventricular Leukomalacia in Preterms',
    badge: 'Category: Preterm Brain Injury & White Matter',
    title: 'Periventricular Leukomalacia (PVL): White Matter Repair',
    tagline: 'Protecting and rebuilding white matter transmission tracts following premature birth ischemia.',
    image: '/images/autism-history/pvl-care.jpg',
    imageAlt: 'Doctor reviewing developmental milestone charts and child recovery with mother in modern medical clinic',
    imageCaption: 'The infant brain possesses immense neuroplastic plasticity to build collateral pathways around white matter lesions.',
    overview:
      'Periventricular Leukomalacia (PVL) is a critical form of brain injury defined by necrosis (softening and damage) of the cerebral white matter surrounding the fluid-filled lateral ventricles. PVL is predominantly diagnosed in premature infants born before 32 weeks of gestation or weighing less than 1500g, whose periventricular arterial end-zones are exceptionally susceptible to drops in neonatal blood pressure and oxygenation.',
    clinicalSigns: [
      {
        title: 'Periventricular Hyperintensities on MRI',
        desc: 'Brain imaging reveals characteristic cystic cavities or periventricular scarring and reduction of white matter volume.',
      },
      {
        title: 'Spastic Diplegia Predominance',
        desc: 'Because leg motor fibers run closest to the ventricles, children typically experience disproportionate stiffness and tightness in the legs.',
      },
      {
        title: 'Visual & Spatial Perception Delays',
        desc: 'Damage to the optic radiations running through periventricular white matter can cause cerebral visual impairment (CVI) or strabismus.',
      },
      {
        title: 'Cognitive & Executive Disconnects',
        desc: 'Processing speed delays, difficulties following complex multi-step instructions, and executive functioning challenges.',
      },
    ],
    biologyInsight: {
      title: 'Oligodendrocyte Precursor Vulnerability',
      body:
        'During gestational weeks 23 to 32, pre-myelinating oligodendrocytes (cells that construct myelin insulation around nerve fibers) are acutely vulnerable to free radical damage and hypoxia. When these cells perish, nerve signals cannot travel at high speed between the brain and extremities.',
    },
    homeopathyProtocol: {
      approach:
        'Early constitutional intervention takes advantage of the miraculous neuroplasticity of the infant brain. Homoeopathic remedies stimulate micro-capillary perfusion and nerve vitality, supporting collateral pathway development across undamaged brain regions.',
      targetOutcomes: [
        'Acceleration of rolling, crawling, and weight-bearing milestone acquisition',
        'Reduction of scissor-gait tendencies and improved ankle dorsiflexion flexibility',
        'Improved visual fixation, eye tracking, and spatial coordination in early development',
        'Prevention of secondary joint contractures and reduced dependency on orthopedic bracing',
      ],
    },
    doctorQuote:
      'A diagnosis of PVL on an ultrasound or MRI is a call to early action, not a prediction of failure. The infant brain is capable of extraordinary rerouting when supported early and consistently.',
  },
  {
    id: 'hie',
    tabLabel: 'HIE (Birth Injury)',
    tabSub: 'Hypoxic Ischemic Encephalopathy',
    badge: 'Category: Perinatal Hypoxia & Asphyxia',
    title: 'HIE: Recovering from Perinatal Oxygen Depletion',
    tagline: 'Restoring neurological balance, suck-swallow reflexes, and motor trajectories after birth asphyxia.',
    image: '/images/treatments/birth-injuries.jpg',
    imageAlt: 'Compassionate pediatric physician gently examining an infant while speaking with caring parents',
    imageCaption: 'Long-term homeopathic constitutional care offers continuous regenerative support following neonatal therapeutic cooling.',
    overview:
      'Hypoxic Ischemic Encephalopathy (HIE) is a traumatic neurological condition resulting from impaired cerebral blood flow (ischemia) and oxygen starvation (hypoxia) during labor and delivery. Common obstetric triggers include placental abruption, umbilical cord prolapse, uterine rupture, prolonged second-stage labor, or severe maternal hypotension, categorized clinically under Sarnat Stages (Mild, Moderate, or Severe).',
    clinicalSigns: [
      {
        title: 'Low APGAR & Resuscitation History',
        desc: 'APGAR scores below 5 at 5 and 10 minutes, delayed initial spontaneous cry, requirement for mechanical neonatal ventilation.',
      },
      {
        title: 'Therapeutic Hypothermia (Cooling) Protocol',
        desc: 'Infant underwent 72 hours of total body cooling in the Neonatal Intensive Care Unit (NICU) to mitigate secondary reperfusion injury.',
      },
      {
        title: 'Altered Primitive Reflexes & Tone',
        desc: 'Weak or absent suck-and-swallow reflexes, diminished Moro reflex, excessive lethargy or extreme irritability with jitteriness.',
      },
      {
        title: 'Neonatal Seizures & Basal Ganglia Lesions',
        desc: 'Subtle or electrographic seizures in the first 48 hours of life; MRI demonstrating bilateral thalami or basal ganglia involvement.',
      },
    ],
    biologyInsight: {
      title: 'Primary vs. Secondary Reperfusion Cascades',
      body:
        'The true neurological danger in HIE occurs in two phases: the primary phase during the oxygen debt, followed by a dangerous secondary phase 6 to 48 hours later characterized by mitochondrial failure, glutamate excitotoxicity, free radical storm, and apoptosis in vital deep brain structures.',
    },
    homeopathyProtocol: {
      approach:
        'Once acute NICU stabilization is complete, constitutional homeopathy provides deep, non-toxic support to reduce secondary neuro-inflammation, stabilize sleep-wake rhythms, and foster continuous sensory-motor recovery throughout the critical first 3 years of life.',
      targetOutcomes: [
        'Rapid strengthening of the suck-swallow-breathe coordination, enabling safe bottle or breastfeeding',
        'Steady resolution of abnormal posturing, neck stiffness, and exaggerated startle reflexes',
        'Normalisation of primitive reflexes and steady acquisition of head balance and rolling',
        'Prevention of secondary developmental regressions and protection of cognitive milestones',
      ],
    },
    doctorQuote:
      'Children who survive HIE are true fighters. With gentle, patient constitutional homeopathy, we help their developing brains recover and build strong new pathways step by step.',
  },
];

const tabIcons: Record<string, React.ReactNode> = {
  profound: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  syndromic: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    </svg>
  ),
  genetic: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 19 8.5 19 15.5 12 22 5 15.5 5 8.5 12 2" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
  cp: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v8m0 0l-3 6m3-6l3 6M7 11h10" />
    </svg>
  ),
  pvl: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.2 7.8l7.6 7.6M15.8 7.8l-7.6 7.6" />
    </svg>
  ),
  hie: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

const testIcons: Record<string, React.ReactNode> = {
  cma: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#008C8C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    </svg>
  ),
  wes: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#008C8C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  ),
  metabolic: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#008C8C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 19 8.5 19 15.5 12 22 5 15.5 5 8.5 12 2" />
    </svg>
  ),
  mri: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#008C8C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eeg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#008C8C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
};

const diagnosticGuide = [
  {
    id: 'cma',
    name: 'Chromosomal Microarray (CMA)',
    target: 'Copy Number Variations (CNVs)',
    whenUsed: 'First-line test for developmental delay, syndromic features, or dysmorphic signs.',
    whatItShows: 'Identifies microdeletions or microduplications across all 23 chromosome pairs that are too small for standard karyotyping.',
  },
  {
    id: 'wes',
    name: 'Whole Exome Sequencing (WES)',
    target: 'Coding Gene Variants (Exons)',
    whenUsed: 'When CMA is normal but child has profound ASD, regression, or strong family history.',
    whatItShows: 'Reads all 20,000+ protein-coding genes to find single-letter spelling mutations (pathogenic variants or VUS).',
  },
  {
    id: 'metabolic',
    name: 'Metabolic & Organic Acid Panel',
    target: 'Cellular & Mitochondrial Biochemistry',
    whenUsed: 'History of fatigue, regression after fevers, cyclical vomiting, or unexplained hypotonia.',
    whatItShows: 'Detects inborn errors of metabolism, lactate/pyruvate elevations, and mitochondrial electron chain deficits.',
  },
  {
    id: 'mri',
    name: 'High-Resolution Brain MRI',
    target: 'Structural White & Gray Matter',
    whenUsed: 'Evaluation of PVL, HIE, microcephaly, cerebral palsy, or focal neurological deficits.',
    whatItShows: 'Visualizes periventricular white matter thinning, corpus callosum abnormalities, and deep gray matter ischemic scars.',
  },
  {
    id: 'eeg',
    name: 'Video-EEG Telemetry',
    target: 'Cortical Electrical Activity',
    whenUsed: 'Unexplained stare spells, developmental regression, nighttime twitching, or behavioral pauses.',
    whatItShows: 'Reveals subclinical electrical status epilepticus (ESES), spike-wave discharges, and subtle focal seizures.',
  },
];

const faqs = [
  {
    q: 'Does an identified genetic mutation mean my child’s autism cannot improve?',
    a: 'Absolutely not. A genetic report is an architectural blueprint, not a rigid ceiling. Epigenetics demonstrates that environmental, metabolic, and neuro-energetic health profoundly influence how genes express themselves. While homeopathy does not rewrite the DNA code, it optimizes cellular energy, calms neuro-inflammation, and stimulates neuroplasticity so that children make remarkable, measurable developmental leaps.',
  },
  {
    q: 'Should we complete Whole Exome Sequencing (WES) before consulting Dr. Ketan Patel?',
    a: 'You do not need to wait for genetic test results to begin constitutional care. If you already have genetic reports, bring them to your consultation—Dr. Patel reviews them thoroughly. However, classical homeopathy evaluates the totality of your child’s live symptoms (sleep, digestion, behavior, sensory triggers, thermal preferences), which allows treatment to begin immediately while laboratory tests are underway.',
  },
  {
    q: 'Can a child with MRI findings of PVL or HIE learn to walk and talk?',
    a: 'Yes. The infant and early childhood brain possesses an extraordinary capacity called neuroplasticity—the ability to recruit undamaged regions of the brain and forge new neural circuits to bypass injured tissue. By pairing physical, occupational, and speech therapy with constitutional homeopathic remedies that stimulate micro-circulation and nerve health, many children overcome early odds to achieve independent walking and functional communication.',
  },
  {
    q: 'How does constitutional homeopathy work alongside conventional therapies (OT, PT, Speech)?',
    a: 'Homeopathy is completely complementary and non-interfering. In fact, therapists frequently note that children on Dr. Patel’s protocol become significantly more receptive in sessions: their sensory panic decreases, their frustration tolerance increases, their core muscle tone improves, and they can focus for longer stretches. Homeopathy builds the inner neuro-biological readiness so therapies can succeed faster.',
  },
  {
    q: 'What is the duration of treatment, and when do parents see the first improvements?',
    a: 'Because pediatric neurodevelopment is a gradual biological process, constitutional care is typically a structured journey of 12 to 24 months. However, early qualitative markers—such as improved nighttime sleep, resolution of chronic constipation, reduced meltdowns, and emergent eye contact—are commonly observed within the first 6 to 12 weeks of starting the matched constitutional remedy.',
  },
];

export default function AutismHistoryPage() {
  const [activeTab, setActiveTab] = useState<string>('profound');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeCondition = conditions.find((c) => c.id === activeTab) || conditions[0];

  return (
    <main className="ah-masterpiece">
      {/* =========================================================================
          HERO & EDITORIAL CLINICAL HEADER
          ========================================================================= */}
      <section className="ah-masthead">
        <div className="ah-wrap">
          <div className="ah-hero-grid">
            <div className="ah-hero-content">
              <h1 className="ah-headline">
                The Biological, Genetic &amp; Perinatal Origins of Autism
              </h1>
              <p className="ah-deck">
                Moving beyond diagnostic labels to understand your child&apos;s distinct neurological story—from Whole Exome Sequencing and chromosomal syndromes to perinatal brain injury recovery with constitutional homeopathy.
              </p>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="ah-hero-visual">
              <div className="ah-visual-frame">
                <img
                  src="/images/treatments/autism-care.jpg"
                  alt="Speciality Homeopathy pediatric neurological consultation"
                  className="ah-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Executive Summary Briefing */}
          <div className="ah-briefing-card">
            <div className="ah-briefing-header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <h3>Core Clinical Realities for Families</h3>
            </div>
            <div className="ah-briefing-grid">
              <div className="ah-brief-col">
                <span className="ah-brief-num">01</span>
                <h4>Genetics is a Roadmap, Not a Ceiling</h4>
                <p>
                  Chromosomal microdeletions or WES variants tell us what biological pathways require support—they do not limit how far your child&apos;s neuroplasticity can develop.
                </p>
              </div>
              <div className="ah-brief-col">
                <span className="ah-brief-num">02</span>
                <h4>The Cellular &amp; Gut-Brain Axis</h4>
                <p>
                  Severe sensory panic and non-verbal frustration are heavily amplified by mitochondrial energy deficits and intestinal inflammation, which respond to targeted care.
                </p>
              </div>
              <div className="ah-brief-col">
                <span className="ah-brief-num">03</span>
                <h4>Gentle, Constitutional Stimulus</h4>
                <p>
                  Classical constitutional homeopathy uses micro-dosed constitutional remedies matched to the child&apos;s physical and emotional totality, without sedatives or chemical side-effects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CONDITION EXPLORER (TABBED CLINICAL MASTER)
          ========================================================================= */}
      <section className="ah-explorer-sec" id="condition-explorer">
        <div className="ah-wrap">
          <div className="ah-section-intro">
            <h2>Select a Condition to Examine Its Origins &amp; Care Pathway</h2>
            <p>
              Compare clinical indicators, cellular biology, and classical constitutional homeopathic protocols tailored specifically to each neurodevelopmental presentation.
            </p>
          </div>

          {/* Tab Navigation Ribbon */}
          <div className="ah-tabs-wrapper" role="tablist" aria-label="Condition Selector">
            <div className="ah-tabs-bar">
              {conditions.map((item) => {
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${item.id}`}
                    className={`ah-tab-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <div className="ah-tab-btn-header">
                      <span className="ah-tab-icon">{tabIcons[item.id]}</span>
                      <span className="ah-tab-title">{item.tabLabel}</span>
                    </div>
                    <span className="ah-tab-subtitle">{item.tabSub}</span>
                    {isActive && <span className="ah-tab-indicator" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Condition Detail Showcase */}
          <div className="ah-showcase-panel" id={`panel-${activeCondition.id}`} role="tabpanel">
            {/* 1. Header Banner Spanning Across Card */}
            <div className="ah-panel-header">
              <h3 className="ah-showcase-title">{activeCondition.title}</h3>
              <p className="ah-showcase-tagline">{activeCondition.tagline}</p>
              <div className="ah-showcase-overview">
                <p>{activeCondition.overview}</p>
              </div>
            </div>

            {/* 2. Middle Grid: 2 Perfectly Balanced Columns */}
            <div className="ah-showcase-grid">
              {/* Left Column: Human Medical Photography + Doctor Quote */}
              <div className="ah-showcase-visual-col">
                <div className="ah-photo-frame">
                  <Image
                    src={activeCondition.image}
                    alt={activeCondition.imageAlt}
                    width={720}
                    height={480}
                    priority
                    className="ah-photo-img"
                  />
                </div>

                <p className="ah-photo-caption">{activeCondition.imageCaption}</p>

                {/* Doctor Note Quotation Box */}
                <div className="ah-quote-box">
                  <div className="ah-quote-mark">&ldquo;</div>
                  <p className="ah-quote-text">{activeCondition.doctorQuote}</p>
                  <div className="ah-quote-author">
                    <strong>Dr. Ketan Patel (B.H.M.S.)</strong>
                    <span>Senior Homeopathic Pediatric Specialist · 34+ Years Practice</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Biological Insight + 4 Clinical Indicators */}
              <div className="ah-showcase-content-col">
                {/* Biological Insight Callout */}
                <div className="ah-bio-box">
                  <div className="ah-bio-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <h4>{activeCondition.biologyInsight.title}</h4>
                  </div>
                  <p>{activeCondition.biologyInsight.body}</p>
                </div>

                {/* 4 Clinical Indicators */}
                <div className="ah-indicators-wrapper">
                  <h4 className="ah-sub-head">Key Clinical Signs &amp; Diagnostic Markers</h4>
                  <div className="ah-indicators-grid">
                    {activeCondition.clinicalSigns.map((sign, idx) => (
                      <div key={idx} className="ah-indicator-item">
                        <div className="ah-indicator-check">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <strong>{sign.title}</strong>
                          <p>{sign.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Bottom Row: Full-Width Classical Constitutional Homeopathy Treatment Banner */}
            <div className="ah-protocol-full-banner">
              <div className="ah-protocol-banner-header">
                <div className="ah-protocol-banner-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4>The Classical Constitutional Homeopathy Approach</h4>
                  <p>Individualized treatment protocol targeted to core nervous system recovery</p>
                </div>
              </div>

              <div className="ah-protocol-banner-grid">
                <div className="ah-protocol-left-col">
                  <p className="ah-protocol-desc">{activeCondition.homeopathyProtocol.approach}</p>
                  <Link href="/inquiry" className="ah-protocol-cta-btn">
                    Consult Dr. Patel on {activeCondition.tabLabel} →
                  </Link>
                </div>

                <div className="ah-protocol-right-col">
                  <h5 className="ah-outcomes-heading">Target Clinical Outcomes &amp; Milestones:</h5>
                  <ul className="ah-protocol-list">
                    {activeCondition.homeopathyProtocol.targetOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx}>
                        <span className="ah-outcome-check">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE DIAGNOSTIC TESTING GUIDE FOR FAMILIES
          ========================================================================= */}
      <section className="ah-testing-sec">
        <div className="ah-wrap">
          <div className="ah-section-intro text-center">
            <h2>Understanding Your Child’s Medical &amp; Genetic Reports</h2>
            <p>
              When a child is first evaluated, families receive stacks of clinical paperwork. Here is an honest, plain-English breakdown of what each test actually reveals.
            </p>
          </div>

          <div className="ah-testing-table-wrap">
            <table className="ah-testing-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Medical Investigation</th>
                  <th style={{ width: '24%' }}>What It Examines</th>
                  <th style={{ width: '27%' }}>When Doctors Order It</th>
                  <th style={{ width: '27%' }}>Clinical Insight for Parents</th>
                </tr>
              </thead>
              <tbody>
                {diagnosticGuide.map((test, tIdx) => (
                  <tr key={tIdx}>
                    <td>
                      <div className="ah-test-name-wrap">
                        <span className="ah-test-icon">{testIcons[test.id]}</span>
                        <strong className="ah-test-name">{test.name}</strong>
                      </div>
                    </td>
                    <td>
                      <span className="ah-test-target">{test.target}</span>
                    </td>
                    <td className="ah-test-detail">{test.whenUsed}</td>
                    <td className="ah-test-detail ah-test-highlight">{test.whatItShows}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          "FROM THE DOCTOR'S DESK" — WARM, HUMAN CLINICAL LETTER
          ========================================================================= */}
      <section className="ah-doctor-letter-sec">
        <div className="ah-wrap">
          <div className="ah-letter-card">
            <div className="ah-letter-header">
              <div className="ah-letter-brand-wrap">
                <Image
                  src="/logo.png"
                  alt="Speciality Homeopathy"
                  width={150}
                  height={104}
                  className="ah-letter-brand-img"
                  priority
                />
              </div>
              <div className="ah-letter-header-text">
                <h3>From the Desk of Dr. Ketan Patel</h3>
                <p className="ah-letter-sub">Senior Homeopathic Pediatric Specialist · 34+ Years in Clinical Practice</p>
              </div>
            </div>

            <div className="ah-letter-body">
              <p>
                <strong>Dear Parents,</strong>
              </p>
              <p>
                When you receive a formal diagnosis of profound autism, a genetic syndrome, PVL, or HIE, the world can feel as though it stopped spinning. You are handed clinical reports filled with acronyms like <em>WES, microdeletion, periventricular hyperintensity,</em> or <em>severe encephalopathy</em>, and you are often told: <em>&ldquo;There is no permanent cure; you must manage this for life.&rdquo;</em>
              </p>
              <p>
                In my 34+ years of clinical practice, having cared for thousands of children from across India, the United States, the United Kingdom, and the Middle East, I have learned one absolute truth: <strong>a medical scan or genetic code does not define the limits of your child&apos;s human spirit or neural potential.</strong>
              </p>
              <p>
                The human brain—particularly in childhood—is the most dynamic, adaptable organ in existence. When we look past the generic label and examine your child&apos;s complete constitution—their unique digestive assimilation, their sleep architecture, their sensory panic triggers, and their vital energy—we can prescribe homoeopathic constitutional remedies that gently unlock deep, restorative shifts.
              </p>
              <p>
                Be patient, be consistent, and never let anyone extinguish your hope. We are here to walk this journey with your family.
              </p>

              <div className="ah-letter-signature">
                <div className="ah-sig-name">Dr. Ketan B. Patel</div>
                <div className="ah-sig-title">B.H.M.S., Classical Homeopath</div>
                <div className="ah-sig-clinic">Speciality Homeopathy Clinics (Ahmedabad · Mumbai · Delhi · Bangalore)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT FAQ ACCORDION
          ========================================================================= */}
      <section className="ah-faq-sec">
        <div className="ah-wrap">
          <div className="ah-section-intro text-center">
            <h2>Frequently Asked Clinical Questions</h2>
            <p>
              Direct, transparent answers regarding genetics, diagnostic tests, therapy coordination, and realistic recovery timelines.
            </p>
          </div>

          <div className="ah-faq-list">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div key={fIdx} className={`ah-faq-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="ah-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className="ah-faq-q">{faq.q}</span>
                    <span className="ah-faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="ah-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION & SECOND OPINION CTA BANNER
          ========================================================================= */}
      <section className="ah-cta-section">
        <div className="ah-wrap">
          <div className="ah-master-cta">
            <div className="ah-mcta-left">
              <h3>Need a Clear Second Opinion on Your Child’s Medical Reports?</h3>
              <p className="ah-mcta-desc">
                Share your child’s diagnostic reports, MRI scans, or developmental history with Dr. Ketan Patel. We will provide an honest, thorough evaluation of how constitutional homeopathy can support your child&apos;s development.
              </p>
              <div className="ah-mcta-trust-grid">
                <div className="ah-trust-chip">
                  <div className="ah-trust-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <strong>34+ Years Experience</strong>
                    <span>Senior Pediatric Homeopathy Specialist</span>
                  </div>
                </div>
                <div className="ah-trust-chip">
                  <div className="ah-trust-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <strong>4.9 / 5 Rating</strong>
                    <span>160+ Verified Google Reviews</span>
                  </div>
                </div>
                <div className="ah-trust-chip">
                  <div className="ah-trust-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Global Consultations</strong>
                    <span>Patients across USA, UK, UAE &amp; India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ah-mcta-card-panel">
              <div className="ah-mcta-card-top">
                <h4>Connect with Dr. Ketan Patel</h4>
                <p>Upload reports online or speak directly with our clinical coordinator</p>
              </div>

              <a href="/inquiry" className="ah-mcta-btn-primary">
                <div className="ah-mcta-btn-left">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Book Case Triage Consultation</span>
                </div>
                <svg className="ah-mcta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <div className="ah-cta-divider">
                <span>OR REACH US DIRECTLY</span>
              </div>

              <div className="ah-mcta-direct-row">
                <a
                  href="https://wa.me/918320131612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ah-mcta-btn-wa"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a href="tel:+919898005354" className="ah-mcta-btn-phone">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call Clinic</span>
                </a>
              </div>

              <div className="ah-mcta-privacy">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Confidential review · Reports handled directly by senior clinicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STYLES: CRAFTED BY 30-YEAR VETERAN WEB ARCHITECT
          ========================================================================= */}
      <style jsx>{`
        .ah-masterpiece {
          font-family: var(--font-open-sans), 'Open Sans', system-ui, -apple-system, sans-serif;
          color: #1e293b;
          background: #fdfdfc;
          line-height: 1.65;
          overflow-x: hidden;
        }

        .ah-wrap {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          box-sizing: border-box;
        }

        /* Masthead / Hero */
        .ah-masthead {
          position: relative;
          background: radial-gradient(120% 120% at 84% 0%, #d4eef9 0%, #BAE0F3 48%, #9ed0eb 100%);
          color: #0A1F44;
          padding: 68px 0 60px;
          border-bottom: 3px solid #008C8C;
          overflow: hidden;
        }
        .ah-masthead::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(70% 55% at 74% 46%, rgba(255, 255, 255, 0.28), rgba(186, 224, 243, 0.15) 100%);
          pointer-events: none;
        }

        .ah-hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 40px;
        }

        .ah-headline {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: clamp(2.1rem, 3.8vw, 3.1rem);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: #0A1F44;
          margin: 0 0 18px;
        }

        .ah-deck {
          font-size: clamp(1.02rem, 1.6vw, 1.16rem);
          line-height: 1.72;
          color: rgba(10, 31, 68, 0.85);
          margin: 0;
          max-width: 620px;
        }

        /* Hero Visual */
        .ah-hero-visual {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ah-visual-frame {
          position: relative;
          width: 100%;
          max-width: 480px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 48px -12px rgba(10, 31, 68, 0.22);
          border: 4px solid #ffffff;
          background: #ffffff;
        }
        .ah-hero-img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          transition: transform 0.5s ease;
        }
        .ah-visual-frame:hover .ah-hero-img {
          transform: scale(1.02);
        }

        /* Executive Briefing Card */
        .ah-briefing-card {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.90);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          border-radius: 22px;
          padding: 28px 34px;
          box-shadow: 0 16px 36px -12px rgba(10, 31, 68, 0.14);
        }
        .ah-briefing-header {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #008C8C;
          margin-bottom: 20px;
        }
        .ah-briefing-header svg {
          color: #008C8C;
        }
        .ah-briefing-header h3 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0;
          color: #0A1F44;
        }

        .ah-briefing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .ah-brief-col {
          border-left: 2.5px solid #008C8C;
          padding-left: 18px;
        }
        .ah-brief-num {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.82rem;
          font-weight: 800;
          color: #008C8C;
          display: block;
          margin-bottom: 4px;
        }
        .ah-brief-col h4 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.98rem;
          font-weight: 700;
          color: #0A1F44;
          margin: 0 0 6px;
        }
        .ah-brief-col p {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* Section Intro */
        .ah-section-intro {
          margin-bottom: 36px;
        }
        .ah-section-intro.text-center {
          text-align: center;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .ah-section-intro h2 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: clamp(1.65rem, 2.8vw, 2.3rem);
          font-weight: 700;
          color: #0a1f44;
          line-height: 1.25;
          margin: 0 0 12px;
        }
        .ah-section-intro p {
          font-size: 1.02rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        /* Condition Explorer Section */
        .ah-explorer-sec {
          padding: 72px 0 60px;
          background: #fbfbf9;
        }

        /* Tabs Navigation */
        .ah-tabs-wrapper {
          margin-bottom: 36px;
          position: sticky;
          top: 96px;
          z-index: 40;
          background: #fbfbf9;
          padding: 10px 0;
        }
        .ah-tabs-bar {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 6px;
          box-shadow: 0 6px 20px -4px rgba(10, 31, 68, 0.06);
          overflow-x: auto;
          gap: 6px;
        }
        .ah-tab-btn {
          background: transparent;
          border: none;
          border-radius: 12px;
          padding: 10px 14px;
          text-align: left;
          cursor: pointer;
          position: relative;
          transition: all 0.22s ease;
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 140px;
        }
        .ah-tab-btn:hover {
          background: #f1f5f9;
        }
        .ah-tab-btn.is-active {
          background: #0A1F44;
          box-shadow: 0 4px 14px rgba(10, 31, 68, 0.25);
        }
        .ah-tab-btn-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ah-tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #008C8C;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        .ah-tab-btn.is-active .ah-tab-icon {
          color: #2dd4bf;
        }
        .ah-tab-title {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
        }
        .ah-tab-btn.is-active .ah-tab-title {
          color: #ffffff;
        }
        .ah-tab-subtitle {
          font-size: 0.72rem;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-left: 25px;
        }
        .ah-tab-btn.is-active .ah-tab-subtitle {
          color: #93c5fd;
        }

        /* Showcase Panel */
        .ah-showcase-panel {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 42px 48px;
          box-shadow: 0 16px 44px -12px rgba(10, 31, 68, 0.08);
          animation: ahFadeIn 0.3s ease-out;
        }
        @keyframes ahFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 1. Header Banner Spanning Across Card */
        .ah-panel-header {
          margin-bottom: 30px;
          padding-bottom: 24px;
          border-bottom: 1.5px solid #f1f5f9;
        }
        .ah-panel-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 12px;
        }
        .ah-showcase-badge {
          display: inline-block;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #008C8C;
          background: rgba(0, 140, 140, 0.09);
          padding: 4px 14px;
          border-radius: 999px;
        }
        .ah-panel-tab-indicator {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 500;
        }
        .ah-showcase-title {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: clamp(1.7rem, 2.6vw, 2.25rem);
          font-weight: 700;
          color: #0A1F44;
          line-height: 1.22;
          margin: 0 0 10px;
        }
        .ah-showcase-tagline {
          font-size: 1.05rem;
          color: #008C8C;
          font-weight: 600;
          margin: 0 0 16px;
          line-height: 1.5;
        }
        .ah-showcase-overview p {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #334155;
          margin: 0;
        }

        /* 2. Middle Grid: 2 Perfectly Balanced Equal Columns */
        .ah-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: stretch;
        }

        /* Left Column */
        .ah-showcase-visual-col {
          display: flex;
          flex-direction: column;
        }
        .ah-photo-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #f1f5f9;
          box-shadow: 0 10px 26px -6px rgba(10, 31, 68, 0.12);
          border: 1px solid #e2e8f0;
          aspect-ratio: 16 / 10;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        .ah-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }
        .ah-photo-caption {
          margin-top: 10px;
          font-size: 0.82rem;
          color: #64748b;
          font-style: italic;
          line-height: 1.5;
        }
        .ah-quote-box {
          margin-top: 18px;
          background: linear-gradient(135deg, rgba(200, 169, 107, 0.09) 0%, rgba(200, 169, 107, 0.02) 100%);
          border-left: 3.5px solid #C8A96B;
          border-radius: 0 16px 16px 0;
          padding: 20px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ah-quote-mark {
          font-family: Georgia, serif;
          font-size: 2.6rem;
          line-height: 1;
          color: #C8A96B;
          opacity: 0.45;
          margin-bottom: -14px;
        }
        .ah-quote-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.6;
          font-style: italic;
          margin: 0 0 12px;
        }
        .ah-quote-author strong {
          display: block;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.86rem;
          color: #0f172a;
        }
        .ah-quote-author span {
          display: block;
          font-size: 0.76rem;
          color: #64748b;
        }

        /* Right Column */
        .ah-showcase-content-col {
          display: flex;
          flex-direction: column;
        }
        .ah-bio-box {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 22px;
          margin-bottom: 22px;
        }
        .ah-bio-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0A1F44;
          margin-bottom: 8px;
        }
        .ah-bio-header h4 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          margin: 0;
          color: #0A1F44;
        }
        .ah-bio-box p {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* Indicators Grid */
        .ah-indicators-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .ah-sub-head {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0A1F44;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 14px;
        }
        .ah-indicators-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          flex: 1;
        }
        .ah-indicator-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #ffffff;
          border: 1.5px solid #edf2f7;
          border-radius: 14px;
          padding: 13px 15px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }
        .ah-indicator-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(0, 140, 140, 0.12);
          color: #008C8C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ah-indicator-item strong {
          display: block;
          font-size: 0.88rem;
          color: #0f172a;
          margin-bottom: 3px;
        }
        .ah-indicator-item p {
          font-size: 0.80rem;
          color: #64748b;
          line-height: 1.45;
          margin: 0;
        }

        /* 3. Bottom Row: Full-Width Classical Constitutional Homeopathy Treatment Banner */
        .ah-protocol-full-banner {
          margin-top: 36px;
          background: linear-gradient(135deg, rgba(0, 140, 140, 0.07) 0%, rgba(0, 140, 140, 0.02) 100%);
          border: 1.5px solid rgba(0, 140, 140, 0.24);
          border-radius: 22px;
          padding: 30px 34px;
        }
        .ah-protocol-banner-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(0, 140, 140, 0.14);
        }
        .ah-protocol-banner-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #008C8C;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 140, 140, 0.3);
        }
        .ah-protocol-banner-header h4 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #0A1F44;
          margin: 0 0 2px;
        }
        .ah-protocol-banner-header p {
          font-size: 0.84rem;
          color: #008C8C;
          font-weight: 600;
          margin: 0;
        }

        .ah-protocol-banner-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 36px;
          align-items: start;
        }
        .ah-protocol-left-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ah-protocol-desc {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.65;
          margin: 0;
        }
        .ah-protocol-cta-btn {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          background: #008C8C;
          color: #ffffff;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 11px 22px;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.22s ease;
          box-shadow: 0 4px 14px rgba(0, 140, 140, 0.25);
        }
        .ah-protocol-cta-btn:hover {
          background: #006b6b;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 140, 140, 0.35);
        }

        .ah-outcomes-heading {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.90rem;
          font-weight: 700;
          color: #0A1F44;
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .ah-protocol-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ah-protocol-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: #1e293b;
          line-height: 1.45;
        }
        .ah-outcome-check {
          color: #008C8C;
          font-weight: 800;
          font-size: 0.95rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Testing Section */
        .ah-testing-sec {
          padding: 72px 0;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }
        .ah-testing-table-wrap {
          margin-top: 36px;
          overflow-x: auto;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 8px 30px -4px rgba(10, 31, 68, 0.05);
        }
        .ah-testing-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
          background: #ffffff;
        }
        .ah-testing-table th {
          background: #0A1F44;
          color: #ffffff;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-weight: 600;
          padding: 18px 22px;
          font-size: 0.86rem;
          letter-spacing: 0.02em;
        }
        .ah-testing-table td {
          padding: 18px 22px;
          border-bottom: 1px solid #eef2f6;
          vertical-align: top;
          line-height: 1.55;
        }
        .ah-testing-table tr:last-child td {
          border-bottom: none;
        }
        .ah-testing-table tr:hover td {
          background: #f8fafc;
        }
        .ah-test-name-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ah-test-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(0, 140, 140, 0.08);
          border: 1.5px solid rgba(0, 140, 140, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ah-test-name {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          color: #0f172a;
          font-size: 0.94rem;
        }
        .ah-test-target {
          display: inline-block;
          background: #e0f2fe;
          color: #0369a1;
          font-weight: 600;
          font-size: 0.78rem;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .ah-test-detail {
          color: #475569;
        }
        .ah-test-highlight {
          color: #0f172a;
          font-weight: 500;
        }

        /* Doctor Letter Section */
        .ah-doctor-letter-sec {
          padding: 72px 0;
          background: #FAF8F4;
        }
        .ah-letter-card {
          background: #ffffff;
          border: 1.5px solid #e5e0d8;
          border-radius: 28px;
          padding: 56px 64px;
          box-shadow: 0 16px 40px -10px rgba(10, 31, 68, 0.06);
          position: relative;
        }
        .ah-letter-header {
          display: flex;
          align-items: center;
          gap: 26px;
          margin-bottom: 34px;
          padding-bottom: 26px;
          border-bottom: 1.5px solid #eee9df;
        }
        .ah-letter-brand-wrap {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 10px 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(10, 31, 68, 0.07);
          flex-shrink: 0;
        }
        .ah-letter-brand-img {
          width: auto;
          height: 56px;
          max-width: 160px;
          object-fit: contain;
          display: block;
        }
        .ah-letter-header-text {
          flex: 1;
        }
        .ah-letter-header h3 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 1.55rem;
          font-weight: 700;
          color: #0A1F44;
          margin: 0;
        }
        .ah-letter-sub {
          font-size: 0.86rem;
          color: #64748b;
          margin: 4px 0 0;
        }

        .ah-letter-body {
          font-size: 1.02rem;
          line-height: 1.85;
          color: #334155;
        }
        .ah-letter-body p {
          margin: 0 0 20px;
        }
        .ah-letter-signature {
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid #eee9df;
        }
        .ah-sig-name {
          font-family: 'Brush Script MT', 'Segoe Script', cursive, sans-serif;
          font-size: 2.1rem;
          color: #0A1F44;
          line-height: 1.1;
        }
        .ah-sig-title {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 0.90rem;
          color: #008C8C;
          margin-top: 6px;
        }
        .ah-sig-clinic {
          font-size: 0.82rem;
          color: #64748b;
        }

        /* FAQ Section */
        .ah-faq-sec {
          padding: 72px 0 80px;
          background: #ffffff;
        }
        .ah-faq-list {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .ah-faq-card {
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ah-faq-card.is-open {
          border-color: #008C8C;
          box-shadow: 0 8px 24px -6px rgba(0, 140, 140, 0.12);
        }
        .ah-faq-trigger {
          width: 100%;
          background: transparent;
          border: none;
          padding: 22px 28px;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          cursor: pointer;
        }
        .ah-faq-q {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #0A1F44;
          line-height: 1.4;
        }
        .ah-faq-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: #008C8C;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .ah-faq-card.is-open .ah-faq-icon {
          background: #008C8C;
          color: #ffffff;
        }
        .ah-faq-answer {
          padding: 0 28px 24px;
          border-top: 1px solid #f1f5f9;
          padding-top: 16px;
        }
        .ah-faq-answer p {
          font-size: 0.94rem;
          line-height: 1.7;
          color: #475569;
          margin: 0;
        }

        /* CTA Section */
        .ah-cta-section {
          padding: 20px 0 90px;
          background: #ffffff;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .ah-master-cta {
          background: linear-gradient(135deg, #07162c 0%, #0d2449 55%, #0a354c 100%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 28px;
          padding: 56px 60px;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          align-items: center;
          gap: 48px;
          box-shadow: 0 28px 70px -15px rgba(7, 22, 44, 0.45);
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        .ah-master-cta::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -15%;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 200, 200, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .ah-mcta-left {
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }
        .ah-mcta-left h3 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: clamp(1.75rem, 2.6vw, 2.3rem);
          font-weight: 700;
          line-height: 1.25;
          color: #ffffff;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
          word-break: break-word;
        }
        .ah-mcta-desc {
          font-size: 1.02rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin: 0 0 28px;
          word-break: break-word;
        }

        .ah-mcta-trust-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          box-sizing: border-box;
        }
        .ah-trust-chip {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 10px 16px;
          transition: background 0.2s ease, transform 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .ah-trust-chip:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(4px);
        }
        .ah-trust-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: rgba(0, 163, 163, 0.25);
          color: #5eead4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ah-trust-chip strong {
          display: block;
          font-size: 0.90rem;
          color: #ffffff;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-weight: 600;
        }
        .ah-trust-chip span {
          display: block;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        /* Right CTA Card Panel */
        .ah-mcta-card-panel {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.06);
          border: 1.5px solid rgba(255, 255, 255, 0.18);
          border-radius: 22px;
          padding: 32px 28px;
          backdrop-filter: blur(12px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          min-width: 0;
        }
        .ah-mcta-card-top {
          margin-bottom: 22px;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
        }
        .ah-mcta-card-top h4 {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px;
          word-break: break-word;
        }
        .ah-mcta-card-top p {
          font-size: 0.84rem;
          color: #cbd5e1;
          margin: 0;
          line-height: 1.5;
          word-break: break-word;
        }

        .ah-mcta-btn-primary,
        :global(.ah-mcta-btn-primary) {
          background: #ffffff !important;
          color: #0A1F44 !important;
          font-family: var(--font-poppins), 'Poppins', sans-serif !important;
          font-size: 0.96rem !important;
          font-weight: 700 !important;
          padding: 15px 20px !important;
          border-radius: 14px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          text-decoration: none !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28) !important;
          transition: all 0.25s ease !important;
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          min-width: 0 !important;
        }
        .ah-mcta-btn-primary:hover,
        :global(.ah-mcta-btn-primary:hover) {
          background: #008C8C !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 30px rgba(0, 140, 140, 0.45) !important;
        }
        .ah-mcta-btn-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .ah-mcta-btn-left span {
          display: inline-block;
          min-width: 0;
        }
        .ah-mcta-arrow {
          flex-shrink: 0;
          margin-left: 8px;
          transition: transform 0.2s ease;
        }
        .ah-mcta-btn-primary:hover .ah-mcta-arrow {
          transform: translateX(4px);
        }

        .ah-cta-divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 18px 0;
          width: 100%;
        }
        .ah-cta-divider::before,
        .ah-cta-divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        .ah-cta-divider span {
          padding: 0 12px;
          font-size: 0.70rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #94a3b8;
          white-space: nowrap;
        }

        .ah-mcta-direct-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
          box-sizing: border-box;
        }
        .ah-mcta-btn-wa {
          background: #25D366;
          color: #ffffff;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 12px 14px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.22s ease;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);
          width: 100%;
          box-sizing: border-box;
          min-width: 0;
        }
        .ah-mcta-btn-wa:hover {
          background: #1eb956;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.4);
        }
        .ah-mcta-btn-phone {
          background: rgba(255, 255, 255, 0.10);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 12px 14px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.22s ease;
          width: 100%;
          box-sizing: border-box;
          min-width: 0;
        }
        .ah-mcta-btn-phone:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .ah-mcta-privacy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 18px;
          font-size: 0.72rem;
          color: #94a3b8;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1040px) {
          .ah-hero-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .ah-hero-visual {
            order: -1;
            max-width: 440px;
            margin: 0 auto;
          }
          .ah-hero-img {
            height: 300px;
          }
          .ah-briefing-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .ah-brief-col {
            border-left: 3px solid #008C8C;
            padding-left: 16px;
          }
          .ah-showcase-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ah-tabs-bar {
            grid-template-columns: repeat(3, 1fr);
          }
          .ah-indicators-grid {
            grid-template-columns: 1fr;
          }
          .ah-protocol-banner-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .ah-letter-card {
            padding: 40px 32px;
          }
          .ah-master-cta {
            grid-template-columns: 1fr;
            padding: 44px 36px;
            gap: 36px;
          }
        }

        @media (max-width: 768px) {
          .ah-wrap {
            padding: 0 18px;
          }
          .ah-masthead {
            padding: 42px 0 36px;
          }
          .ah-headline {
            font-size: clamp(1.75rem, 5.5vw, 2.25rem);
            margin-bottom: 14px;
            line-height: 1.22;
          }
          .ah-deck {
            font-size: 0.95rem;
            line-height: 1.65;
          }
          .ah-visual-frame {
            border-radius: 18px;
            border-width: 3px;
          }
          .ah-hero-img {
            height: 240px;
          }
          .ah-briefing-card {
            padding: 20px 18px;
            border-radius: 18px;
          }
          .ah-briefing-header {
            gap: 10px;
            margin-bottom: 14px;
          }
          .ah-briefing-header h3 {
            font-size: 0.88rem;
          }
          .ah-brief-col h4 {
            font-size: 0.92rem;
          }
          .ah-brief-col p {
            font-size: 0.85rem;
            line-height: 1.52;
          }

          /* Section Intros */
          .ah-explorer-sec {
            padding: 48px 0 40px;
          }
          .ah-section-intro {
            margin-bottom: 24px;
          }
          .ah-section-intro h2 {
            font-size: clamp(1.4rem, 5vw, 1.85rem);
            line-height: 1.25;
            margin-bottom: 10px;
          }
          .ah-section-intro p {
            font-size: 0.92rem;
            line-height: 1.6;
          }

          /* Mobile Swipeable Tab Ribbon */
          .ah-tabs-wrapper {
            top: 60px;
            padding: 8px 0;
            margin-bottom: 22px;
          }
          .ah-tabs-bar {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 8px;
            padding: 6px;
            border-radius: 14px;
          }
          .ah-tabs-bar::-webkit-scrollbar {
            display: none;
          }
          .ah-tab-btn {
            flex: 0 0 auto;
            min-width: 145px;
            scroll-snap-align: start;
            padding: 9px 12px;
            border-radius: 10px;
          }
          .ah-tab-subtitle {
            display: none;
          }
          .ah-tab-title {
            font-size: 0.82rem;
          }

          /* Showcase Panel */
          .ah-showcase-panel {
            padding: 22px 18px;
            border-radius: 20px;
          }
          .ah-panel-header {
            margin-bottom: 20px;
            padding-bottom: 18px;
          }
          .ah-showcase-title {
            font-size: clamp(1.35rem, 4.8vw, 1.75rem);
          }
          .ah-showcase-tagline {
            font-size: 0.90rem;
            margin-bottom: 12px;
            line-height: 1.45;
          }
          .ah-showcase-overview p {
            font-size: 0.90rem;
            line-height: 1.6;
          }
          .ah-photo-frame {
            border-radius: 14px;
          }
          .ah-photo-caption {
            font-size: 0.76rem;
            margin-top: 8px;
          }
          .ah-quote-box {
            padding: 16px 14px;
            margin-top: 14px;
            border-radius: 0 12px 12px 0;
          }
          .ah-quote-text {
            font-size: 0.86rem;
            line-height: 1.5;
          }
          .ah-quote-mark {
            font-size: 2.2rem;
          }
          .ah-quote-author strong {
            font-size: 0.82rem;
          }
          .ah-quote-author span {
            font-size: 0.72rem;
          }
          .ah-bio-box {
            padding: 16px 14px;
            border-radius: 14px;
            margin-bottom: 18px;
          }
          .ah-bio-header h4 {
            font-size: 0.88rem;
          }
          .ah-bio-box p {
            font-size: 0.84rem;
            line-height: 1.5;
          }
          .ah-sub-head {
            font-size: 0.86rem;
            margin-bottom: 10px;
          }
          .ah-indicator-item {
            padding: 10px 12px;
            border-radius: 12px;
            gap: 10px;
          }
          .ah-indicator-item strong {
            font-size: 0.84rem;
          }
          .ah-indicator-item p {
            font-size: 0.76rem;
          }

          /* Constitutional Protocol Banner */
          .ah-protocol-full-banner {
            margin-top: 24px;
            padding: 20px 16px;
            border-radius: 18px;
          }
          .ah-protocol-banner-header {
            gap: 10px;
            margin-bottom: 14px;
            padding-bottom: 12px;
          }
          .ah-protocol-banner-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
          .ah-protocol-banner-header h4 {
            font-size: 1rem;
          }
          .ah-protocol-banner-header p {
            font-size: 0.78rem;
          }
          .ah-protocol-banner-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ah-protocol-desc {
            font-size: 0.86rem;
            line-height: 1.55;
          }
          .ah-protocol-cta-btn {
            width: 100%;
            justify-content: center;
            text-align: center;
            padding: 12px 16px;
            font-size: 0.88rem;
          }
          .ah-outcomes-heading {
            font-size: 0.84rem;
            margin-bottom: 10px;
          }
          .ah-protocol-list li {
            font-size: 0.82rem;
            line-height: 1.4;
          }

          /* Diagnostic Table */
          .ah-testing-sec {
            padding: 48px 0;
          }
          .ah-testing-table-wrap {
            margin-top: 20px;
            border-radius: 14px;
            -webkit-overflow-scrolling: touch;
          }
          .ah-testing-table {
            min-width: 620px;
          }
          .ah-testing-table th,
          .ah-testing-table td {
            padding: 12px 14px;
            font-size: 0.82rem;
          }
          .ah-test-name {
            font-size: 0.86rem;
          }
          .ah-test-target {
            font-size: 0.72rem;
            padding: 2px 8px;
          }

          /* Doctor Letter */
          .ah-doctor-letter-sec {
            padding: 48px 0;
          }
          .ah-letter-card {
            padding: 28px 18px;
            border-radius: 20px;
          }
          .ah-letter-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
            margin-bottom: 22px;
            padding-bottom: 18px;
          }
          .ah-letter-brand-wrap {
            padding: 8px 14px;
            border-radius: 14px;
          }
          .ah-letter-brand-img {
            height: 44px;
          }
          .ah-letter-header h3 {
            font-size: 1.35rem;
          }
          .ah-letter-sub {
            font-size: 0.80rem;
          }
          .ah-letter-body {
            font-size: 0.94rem;
            line-height: 1.72;
          }
          .ah-letter-body p {
            margin-bottom: 16px;
          }
          .ah-letter-signature {
            margin-top: 24px;
            padding-top: 18px;
          }
          .ah-sig-name {
            font-size: 1.75rem;
          }
          .ah-sig-title {
            font-size: 0.84rem;
          }
          .ah-sig-clinic {
            font-size: 0.76rem;
          }

          /* FAQ Accordion */
          .ah-faq-sec {
            padding: 48px 0 56px;
          }
          .ah-faq-list {
            gap: 10px;
          }
          .ah-faq-card {
            border-radius: 14px;
          }
          .ah-faq-trigger {
            padding: 16px 18px;
            gap: 12px;
          }
          .ah-faq-q {
            font-size: 0.92rem;
          }
          .ah-faq-icon {
            width: 28px;
            height: 28px;
            font-size: 1.2rem;
          }
          .ah-faq-answer {
            padding: 0 18px 18px;
            padding-top: 12px;
          }
          .ah-faq-answer p {
            font-size: 0.88rem;
            line-height: 1.6;
          }

          /* CTA Banner */
          .ah-cta-section {
            padding: 10px 0 50px;
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
          }
          .ah-master-cta {
            grid-template-columns: 1fr;
            padding: 24px 14px;
            border-radius: 20px;
            gap: 22px;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
          }
          .ah-mcta-left {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
          .ah-mcta-left h3 {
            font-size: 1.35rem;
            margin-bottom: 10px;
            line-height: 1.25;
            word-break: break-word;
          }
          .ah-mcta-desc {
            font-size: 0.88rem;
            margin-bottom: 18px;
            line-height: 1.55;
            word-break: break-word;
          }
          .ah-mcta-trust-grid {
            gap: 10px;
            width: 100%;
            box-sizing: border-box;
          }
          .ah-trust-chip {
            padding: 9px 12px;
            border-radius: 12px;
            gap: 10px;
            width: 100%;
            box-sizing: border-box;
          }
          .ah-trust-chip strong {
            font-size: 0.82rem;
          }
          .ah-trust-chip span {
            font-size: 0.72rem;
          }

          .ah-mcta-card-panel {
            padding: 20px 12px;
            border-radius: 18px;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
          .ah-mcta-card-top {
            margin-bottom: 16px;
            width: 100%;
            box-sizing: border-box;
          }
          .ah-mcta-card-top h4 {
            font-size: 1.15rem;
            line-height: 1.3;
            word-break: break-word;
            margin: 0 0 6px;
          }
          .ah-mcta-card-top p {
            font-size: 0.80rem;
            line-height: 1.45;
            word-break: break-word;
            margin: 0;
          }

          .ah-mcta-btn-primary,
          :global(.ah-mcta-btn-primary) {
            font-size: 0.84rem !important;
            padding: 12px 10px !important;
            border-radius: 12px !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 8px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .ah-mcta-btn-left {
            gap: 8px;
            font-size: 0.84rem;
            white-space: normal;
            justify-content: center;
            text-align: center;
            width: 100%;
          }
          .ah-mcta-btn-left svg {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
          }
          .ah-mcta-btn-left span {
            word-break: break-word;
            line-height: 1.25;
          }
          .ah-mcta-arrow {
            display: none !important;
          }

          .ah-cta-divider {
            margin: 14px 0;
            width: 100%;
          }
          .ah-cta-divider span {
            font-size: 0.65rem;
            padding: 0 8px;
          }

          .ah-mcta-direct-row {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            width: 100%;
            box-sizing: border-box;
          }
          .ah-mcta-btn-wa,
          .ah-mcta-btn-phone {
            padding: 11px 8px;
            font-size: 0.80rem;
            border-radius: 10px;
            gap: 6px;
            width: 100%;
            box-sizing: border-box;
            justify-content: center;
          }
          .ah-mcta-btn-wa svg,
          .ah-mcta-btn-phone svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }
          .ah-mcta-privacy {
            font-size: 0.68rem;
            margin-top: 14px;
            line-height: 1.4;
            flex-wrap: wrap;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
          }
        }

        @media (max-width: 480px) {
          .ah-mcta-direct-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }

        @media (max-width: 420px) {
          .ah-wrap {
            padding: 0 10px;
          }
          .ah-headline {
            font-size: 1.55rem;
          }
          .ah-showcase-panel {
            padding: 16px 10px;
          }
          .ah-letter-card {
            padding: 20px 10px;
          }
          .ah-master-cta {
            padding: 20px 10px;
            border-radius: 16px;
          }
          .ah-mcta-card-panel {
            padding: 16px 8px;
            border-radius: 14px;
          }
          .ah-mcta-btn-primary,
          :global(.ah-mcta-btn-primary) {
            padding: 11px 8px !important;
            font-size: 0.80rem !important;
          }
          .ah-mcta-btn-left {
            font-size: 0.80rem;
          }
          .ah-mcta-btn-left span {
            font-size: 0.80rem;
          }
        }
      `}</style>
    </main>
  );
}
