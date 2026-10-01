export interface CaseStudy {
  id: number;
  slug: string;
  wpSlug: string;
  title: string;
  shortTitle: string;
  badge: string;
  patientProfile: {
    ageAtStart: string;
    gender: string;
    location: string;
    author: string;
    diagnosis: string;
    duration: string;
    outcomeSummary: string;
    schoolStatus: string;
  };
  publishDate: string;
  dateISO: string;
  tags: string[];
  image: string;
  brief: string;
  stats: {
    label: string;
    value: string;
  }[];
  symptomsBefore: string[];
  timeline: {
    period: string;
    title: string;
    description: string;
  }[];
  fullStorySections: {
    heading: string;
    paragraphs: string[];
    quote?: string;
    bullets?: string[];
  }[];
  pointsToPonder?: string[];
  doctorCommentary: string;
  metaDescription: string;
  metaKeywords: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    slug: 'child-of-research-scientist-recovered-from-asd',
    wpSlug: 'a-child-of-research-scientist-of-government-of-india-fully-recovered-from-asd-without-any-therapy-cured-cases',
    title: 'A child of Research Scientist of Government of India, fully recovered from ASD without any therapy : Cured Cases',
    shortTitle: 'Child of Govt. Research Scientist: Full ASD Recovery',
    badge: 'ASD Cured Case',
    patientProfile: {
      ageAtStart: '22 Months Old',
      gender: 'Male',
      location: 'India',
      author: 'Father (Research Scientist, Government of India)',
      diagnosis: 'Autism Spectrum Disorder (Severe Regression & Sensory Issues)',
      duration: '2 Years Homeopathic Treatment',
      outcomeSummary: 'Full recovery, attending mainstream LKG school with complete communicative and academic milestones',
      schoolStatus: 'Mainstream LKG School (Writing A-Z, 1-20, Hindi, Socializing)',
    },
    publishDate: 'June 2, 2025',
    dateISO: '2025-06-02',
    tags: ['ASD', 'Autism', 'Cured Cases', 'GFCF Diet', 'Early Intervention'],
    image: '/images/autism-care/child-boy-peeking.png',
    brief: 'It was hot summer of May 2015. Seeing my 22-month-old son flapping his hands, relatives joked he would fly like a bird. We took it lightly, least realizing that this was the tip of the iceberg...',
    stats: [
      { label: 'Starting Age', value: '22 Mos' },
      { label: 'Speech Regression', value: 'Reversed' },
      { label: 'Therapies Needed', value: 'Zero' },
      { label: 'Current Status', value: 'Normal LKG' },
    ],
    symptomsBefore: [
      'Flapping hands continuously, especially when excited or stimulated.',
      'Circling around objects; standing transfixed near rotating objects (washing machines, spinning tops, fans).',
      'Extremely poor, almost absent eye contact.',
      'Low to almost nil speech with acute regression (spoke a few words at age 1, then ceased completely).',
      'Dairy intolerance (any milk other than breastmilk caused distress).',
      'Severe, unmanageable hyperactivity.',
      'Playing only with individual parts of an object (e.g., spinning wheels) rather than the toy as a whole.',
      'Playing in strict isolation, especially with tiny objects.',
      'Crying whenever an outsider approached.',
      'Constant irritability and lack of joyful demeanor, correlated by doctors to sensory hyperactivity.',
      'Inability to blow or suck from a pipe or straw.',
      'Crying in the middle of the night for 30 minutes with a blank, disconnected stare.',
      'Severe hypersensitivity to haircuts.',
      'Extreme sensory aversion to brushing teeth; complete refusal to pick up food items independently.',
      'Urinating in small containers compulsively.',
    ],
    timeline: [
      {
        period: 'May 2015 (Age 22 Mos)',
        title: 'Initial Detection & Diagnosis',
        description: 'Parents noticed a marked developmental difference compared to peers. Visits to specialized hospitals confirmed "High Risk of Autism Spectrum Disorder".',
      },
      {
        period: 'Month 1 – 2',
        title: 'Dietary Shift at NIMH',
        description: 'Early intervention team at NIMH guided the family to switch to GFCF (Gluten-Free, Casein-Free) and sugar-free foods. Noticed mild eye contact improvement.',
      },
      {
        period: 'First Consultation',
        title: 'Meeting Dr. Ketan Patel',
        description: 'Learned about Dr. Ketan Patel through other special-needs parents. Dr. Patel examined the boy, provided constitutional homeopathy, and gave reassurance that the child would recover.',
      },
      {
        period: 'Day 45',
        title: 'The Breakthrough Moment',
        description: 'First major motor coordination breakthrough: the child started spontaneously blowing at fallen thermocol balls on the floor. Progressive cyclic improvements began.',
      },
      {
        period: '2 Years Course',
        title: 'Cyclic Diminution of Symptoms',
        description: 'Head banging and irritability showed cyclic decreases until fading completely to nil. Social responsiveness, vocabulary, and affection expanded month after month.',
      },
      {
        period: 'Age 4+ Years',
        title: 'Full Recovery & Mainstream School',
        description: 'Passed Nursery and currently thriving in LKG at a regular school. Writes English and Hindi alphabets, counts 1-20, communicates spontaneously, and plays normally with peers.',
      },
    ],
    fullStorySections: [
      {
        heading: 'Detection: The Tip of the Iceberg',
        paragraphs: [
          'Namaste Doctor Saab, I am forwarding you the following narrative of our journey.',
          'It was the hot summer of May 2015. We had been to my in-laws’ place. Seeing my son (then 22 months old) flapping his hands, they would joke saying he will fly like a bird. We took it lightly, least realizing that this was only the tip of an iceberg.',
          'After coming back home, one evening I took my son to a local park for playing. Another kid just one month older than my son was playing nearby. I closely observed her activities: she was much more responsive. When told to jump, she jumped; touch the ground, she touched; pointed at birds, she looked at them. I realized with a sinking heart that these interactive activities were missing in my son. The difference between my son and the other child was around 80%.',
          'I started reflecting upon my wife’s persistent words since my son was 12 months old—that his learning, speech, and responses were not up to the mark. Earlier, I had assumed she was just an over-worried first-time mother, compounded by the common societal belief that "boys speak later than girls."',
          'Now, what to do? Where to go? Luckily, one evening my wife heard about a neighbouring child who was evaluated at a nearby hospital for specially-abled children. We immediately went there. After visits filled with detailed questions and assessments, we were told our son was a child "with high risk of Autism." It was the greatest shock of our lives. Sleepless nights followed as we agonized over his future.',
        ],
      },
      {
        heading: 'Symptom Mapping & Confirmation',
        paragraphs: [
          'We turned to medical literature and found that my son exhibited 15 distinct classic signs of early-onset autistic regression and sensory modulation dysfunction.',
        ],
      },
      {
        heading: 'Acceptance: The First Step with Diet',
        paragraphs: [
          'Luckily, the National Institute for the Mentally Handicapped (NIMH) was nearby. We gathered courage and visited their Early Intervention department. After detailed screening, we were advised to initiate strict dietary intervention: GFCF (no wheat/gluten and no dairy/casein) alongside sugar-free food.',
          'Digesting this guidance was hard because 90% of my son’s food intake consisted of milk, wheat, and sugar. The doctor patiently supported my wife through the transition. It took around two months to transition him, but in that window we realized a tangible improvement in his eye contact. One evening, my son came over and hugged his mother affectionately. That single hug gave us immense faith.',
        ],
      },
      {
        heading: 'The Second Step: Discovering Dr. Ketan Patel',
        paragraphs: [
          'We frequently interacted with other parents of specially-abled children. During one interaction, we heard about Dr. Ketan Patel, who was visiting our town once every three months.',
          'We took our son to see him. After observing him closely for a few minutes, Dr. Patel spoke with absolute confidence and assured us our child would become completely alright. He dispensed individualized constitutional homeopathic medicines directly. By this time, we knew conventional allopathy offered no curative medicines for autism, and Ayurvedic herbs were practically impossible for a 22-month-old to consume. Dr. Patel advised that positive indications would begin within 60 days.',
        ],
      },
      {
        heading: 'The Take Off: Milestones & Cyclic Healing',
        paragraphs: [
          'Every single day, we administered the medicines with devotion. Around day 45, the first vivid positive response emerged: I remember the exact day my son spontaneously bent down and started blowing at thermocol balls scattered on the floor—a skill he had never previously possessed.',
          'From that day forward, continuous improvements unfolded. We noticed that improvements occurred in cycles: his head banging would decrease, flare up slightly, and then decrease even further. After a few such cycles, head banging diminished to nil.',
          'We maintained the homeopathic regimen faithfully for nearly two years under Dr. Patel’s direction.',
        ],
        quote: 'Now, he is 4+ years old. Dr. Ketan Patel’s medicines have worked wonders. He passed Nursery and is currently studying in LKG in a normal school. He communicates, asks questions, writes A-Z, 1 to 20, Hindi alphabets, and plays joyfully with friends.',
      },
    ],
    pointsToPonder: [
      'Regular medicine protocol: administer the first morning dose on an empty stomach; ensure nothing is eaten 15 minutes before or after.',
      'Daily head-to-toe gentle massage accompanied by mild, soothing acoustic music.',
      'Strict adherence to diet control (GFCF & refined sugar-free) as rigorously as possible.',
      'Frequent visits to parks, playgrounds, and public gatherings to maximize natural socialization.',
      'Engage in energetic outdoor play and running with the child daily.',
      'Exercise caution with therapy centers that lack transparency; verify clinical track records.',
      'Above all: maintain immense patience throughout the cyclic phases of neurodevelopmental recovery.',
    ],
    doctorCommentary: 'Early constitutional intervention within the neuroplastic window (under age 3) can reverse secondary neuroinflammatory blockades. When paired with gastrointestinal barrier stabilization (GFCF diet), individualised homeopathic remedies stimulate dormant neurological pathways without sedation.',
    metaDescription: 'Read the documented case study of a 22-month-old child of a Government of India Research Scientist who fully recovered from ASD with Dr. Ketan Patel’s homeopathy protocol.',
    metaKeywords: 'autism cured case, ASD homeopathy case study, research scientist child autism recovery, Dr Ketan Patel cured cases',
  },
  {
    id: 2,
    slug: 'genetic-neuropathy-autistic-complex-disorder',
    wpSlug: 'genetic-neuropathy-having-symptoms-of-autistic-complex-disorder-cured-cases',
    title: 'Genetic Neuropathy having symptoms of Autistic Complex Disorder : Cured Cases',
    shortTitle: 'Genetic Neuropathy with Autistic Complex Disorder (USA)',
    badge: 'Genetic Neuropathy / USA',
    patientProfile: {
      ageAtStart: '2 Years Old',
      gender: 'Male (Kevin)',
      location: 'California, USA',
      author: 'Mother (California, USA)',
      diagnosis: 'Autism Spectrum Disorder with Genetic Neuropathy',
      duration: '16 Months Protocol',
      outcomeSummary: 'Passed all developmental & speech evaluations; no longer qualifies for speech therapy; thrives in normal daycare',
      schoolStatus: 'Mainstream Daycare Preschool in California',
    },
    publishDate: 'March 4, 2011',
    dateISO: '2011-03-04',
    tags: ['ASD', 'Autism', 'Genetic Neuropathy', 'Cured Cases', 'USA Patient'],
    image: '/images/autism-care/beh-2-sleeping-boy.png',
    brief: 'A mother from California, USA contacted Dr. Ketan Patel regarding her 2-year-old son diagnosed with Autism Spectrum Disorder and genetic neuropathy. 16 months later, he passed his formal evaluations and entered normal daycare.',
    stats: [
      { label: 'Origin', value: 'California, USA' },
      { label: 'Speech Evaluation', value: 'Passed 100%' },
      { label: 'Initial Status', value: 'Non-Verbal' },
      { label: 'Follow-up Interval', value: '16 Months' },
    ],
    symptomsBefore: [
      'Completely non-verbal at 2 years old.',
      'Extreme hyperactivity and severe emotional dysregulation.',
      'Zero eye contact when addressed.',
      'Persistent head-banging and aggressive tantrums.',
      'Repetitive spinning with fingers and objects.',
      'Acoustic defensiveness (placing hands tightly over ears whenever sounds occurred).',
      'Total inability to follow parental commands or cooperate with daily routines.',
    ],
    timeline: [
      {
        period: 'Late 2009',
        title: 'Initial International Call',
        description: 'Mother reached out to Dr. Ketan Patel from California requesting urgent intervention for her 2-year-old son Kevin following formal ASD diagnosis.',
      },
      {
        period: 'Dec 19, 2009',
        title: 'First Clinic Consultation',
        description: 'Family travelled to Ahmedabad clinic. Complete case analysis conducted; first 4-month individualized homeopathic regimen dispensed.',
      },
      {
        period: 'Day 100 Follow-Up',
        title: 'Initial Expressive Speech & Eye Contact',
        description: 'Mother reported marked improvement in eye contact, 10 clear functional single words, and ability to follow 3 out of 5 instructions.',
      },
      {
        period: 'Day 120 Follow-Up',
        title: 'Second Round of Protocol',
        description: 'Hyperactivity and tantrums stabilized with extended stretches of calm behavior. Second 4-month regimen prescribed prior to return to USA.',
      },
      {
        period: '16 Months of Care',
        title: 'Formal Evaluation Passed in USA',
        description: 'State developmental evaluation in California declared Kevin no longer qualified for speech therapy. Enrolled in standard preschool daycare.',
      },
    ],
    fullStorySections: [
      {
        heading: 'International Outreach: California to Ahmedabad',
        paragraphs: [
          'A mother of a 2-year-old boy rang me up from California, USA on my cell phone 18 months prior: "Dr. Ketan, are you available at your clinic on 19th December 2009?" I confirmed our schedule.',
          'She explained that her son had been formally evaluated and diagnosed with Autism Spectrum Disorder alongside symptoms of genetic neuropathy. She was determined to help her child achieve normalcy. Following our associate pediatrician’s guidance, an in-person clinical appointment was scheduled for Saturday, 19th December 2009.',
          'Kevin, aged 2 years, was brought to our clinic by his mother with a comprehensive file of US medical reports. He presented as a non-verbal, intensely hyperactive toddler with no eye contact. He was extremely difficult for the mother to manage, did not respond to any parental requests, engaged in frequent crying with head banging, exhibited finger spinning, and placed his hands over his ears at routine sounds.',
          'After taking his detailed constitutional history and mapping neuromuscular parameters, I formulated a 4-month treatment course and scheduled a structured review upon completion.',
        ],
      },
      {
        heading: 'Progression Across Follow-Ups',
        paragraphs: [
          'The mother returned for review after 100 days of treatment. She reported notable strides: clear improvements in eye contact, 10 distinct functional single words, and the child began obeying commands 3 out of 5 times.',
          'While tantrums and hyperactivity still occurred twice a fortnight, they were followed by 10 to 12 consecutive good days—a marked improvement over his pre-treatment state. We completed a thorough review before the family departed back for California.',
          'At the 120-day milestone, the second round of individualized homeopathic medicine was prepared for the subsequent four months, with instructions for regular progress tracking.',
        ],
      },
      {
        heading: 'Formal Letter from Mother (California, USA)',
        paragraphs: [
          'After 16 months of systematic treatment, I received the following official progress email from Kevin’s mother in the United States:',
        ],
        quote: 'Respected Dr., Kevin is doing very well. He is now not qualifying for speech therapy anymore; he passed the evaluation! He will still receive ABA and occupational therapy offered by the state and private therapy. We enrolled Kevin in a normal daycare preschool. The main teacher is good and taking good care so Kevin can understand her. He is doing good there. Last medicine is finishing this week, so I will start the new round and update you on his progress.',
      },
    ],
    doctorCommentary: 'Neuropathic channel blockades combined with autistic traits frequently present with auditory hypersensitivity and sensory overwhelm. Homeopathy works on neuromuscular nerve conductivity and receptor synchronization, enabling expressive speech emergence.',
    metaDescription: 'Read the documented cured case of Kevin, a 2-year-old from California with genetic neuropathy and ASD who passed his speech evaluation under Dr. Ketan Patel’s care.',
    metaKeywords: 'genetic neuropathy autism case, Dr Ketan Patel USA patient, cured cases autism California, speech evaluation passed autism',
  },
  {
    id: 3,
    slug: 'cacna1a-hyperactive-asd-child',
    wpSlug: 'cacna1a',
    title: 'Hyperactive ASD CHILD : Cured Cases',
    shortTitle: 'Hyperactive ASD Child (CACNA1A Channelopathy)',
    badge: 'CACNA1A / ASD Recovery',
    patientProfile: {
      ageAtStart: '3 Years 8 Months',
      gender: 'Male (Rizwan - Name Changed)',
      location: 'Mumbai, India',
      author: 'Mother & Relatives (Mumbai)',
      diagnosis: 'High-Functioning Autism / Severe Hyperactivity (CACNA1A Gene Variant)',
      duration: '21 Months Protocol',
      outcomeSummary: 'All developmental milestones attained; converses freely; medicine discontinued with zero regression',
      schoolStatus: 'Mainstream Academic Integration',
    },
    publishDate: 'July 4, 2024',
    dateISO: '2024-07-04',
    tags: ['ASD', 'Autism', 'CACNA1A', 'GFCF Diet', 'Cured Cases'],
    image: '/images/autism-care/beh-4-hyper-boy.png',
    brief: 'Rizwan, a 3-year-8-month boy from Mumbai diagnosed with High Functioning Autism and severe hyperactivity, showed little response to 3 months of conventional sedatives. After 21 months under Dr. Patel, he achieved all developmental milestones.',
    stats: [
      { label: 'Patient Location', value: 'Mumbai, India' },
      { label: 'Conventional Meds', value: 'Failed (3 Mos)' },
      { label: 'Breakthrough', value: 'Day 120' },
      { label: 'Final Outcome', value: '100% Milestones' },
    ],
    symptomsBefore: [
      'Completely non-verbal at 3 years 8 months old.',
      'Fair, chubby, obstinate, and severely restless constitution.',
      'Extreme hyperactivity unresponsive to conventional allopathic medications.',
      'Refusal to sit, follow commands, or engage with family members.',
      'Lack of communicative babbling or functional word production.',
      'Frequent meltdowns and persistent oppositional behavior.',
    ],
    timeline: [
      {
        period: 'May 7, 2009',
        title: 'Initial Consultation in Clinic',
        description: 'Family travelled from Mumbai after four months of phone consultation. Child presented with severe hyperactivity, obstinacy, and non-verbal ASD symptoms.',
      },
      {
        period: 'Day 120',
        title: 'Initial Babbling & Sound Production',
        description: 'Following the first two 3-month courses, receptive comprehension sharpened and spontaneous babbling with occasional single words commenced.',
      },
      {
        period: 'Month 9',
        title: 'Phrases & Name Orientation',
        description: 'Rizwan began pairing two clear words together, orienting immediately to his name, following multi-step orders, and reciting ABCD and numbers.',
      },
      {
        period: 'Month 21',
        title: 'Full Conversational Independence',
        description: 'Brought to Mumbai clinic; answered questions spontaneously regarding breakfast, lunch, and dinner plans. Discontinued medicine with zero regression.',
      },
    ],
    fullStorySections: [
      {
        heading: 'Clinical Presentation: Mumbai Boy with Severe Restlessness',
        paragraphs: [
          'Baby boy of 3 years 8 months from Mumbai, India.',
          'Rizwan (name changed for patient confidentiality) visited our clinic on 7th May 2009 following four months of prior telephonic conversations, as travel schedules and initial family skepticism regarding homeopathy had delayed an in-person meeting.',
          'The boy was brought to our clinic by his mother and two relatives. He presented as a fair, chubby, non-verbal, and highly obstinate toddler exhibiting all the core signs of Autism Spectrum Disorder. A leading pediatric neurologist in Mumbai had diagnosed him with High Functioning Autism. Conventional medications intended to control his severe hyperactivity had been administered for three consecutive months without noticeable benefit.',
          'His mother had also maintained him on a GFCF (Gluten-Free, Casein-Free) diet for three months. Desperate for a solution, they received our reference from another family whose daughter had shown remarkable improvement under our care.',
        ],
      },
      {
        heading: 'Sequential Homeopathic Protocol',
        paragraphs: [
          'After taking a thorough constitutional history and noting specific behavioral modalities, I mapped out 90-day review cycles. The first 3-month course was dispensed, followed by a second 3-month cycle upon clinical review.',
          'Substantial progress became visible after approximately 120 days of treatment. During his subsequent review, the boy was observed babbling enthusiastically, with occasional single functional words breaking through.',
          'Although speech therapy was initially recommended to complement his care, the family faced financial constraints and could not arrange specialized therapists. We continued with our customized homeopathic protocol.',
        ],
      },
      {
        heading: 'Breakthrough: Two-Word Sentences & Academic Learning',
        paragraphs: [
          'Over the next three months, speech clarity accelerated rapidly: two distinct words together, deeper cognitive understanding, immediate response to his name, and steady obedience to commands. He began learning letters A-B-C-D and numeric counting.',
          'Regular follow-ups continued over a total span of 21 months of treatment.',
        ],
      },
      {
        heading: 'The Conversation Test & Full Normalcy',
        paragraphs: [
          'During his final evaluation at our Mumbai evening clinic, his mother brought him for assessment. I engaged the boy directly in conversation:',
          'I asked him what he had eaten for breakfast—he replied accurately with full clarity. I inquired about his lunch—his answer was completely correct. He then looked up with a radiant smile and told me that his family would be going out for dinner to a specific restaurant to have Biryani!',
          'All core developmental parameters were fully achieved. Treatment was officially discontinued. Follow-ups conducted two months post-treatment confirmed zero behavioral regression, with only rare emotional tantrums common to any healthy growing toddler.',
        ],
      },
    ],
    doctorCommentary: 'Channelopathies affecting voltage-gated calcium channels (such as the CACNA1A variant) can induce severe motor restlessness and communicative delay. Constitutional homeopathy targets neuro-signaling efficiency, restoring calmness and organic speech acquisition.',
    metaDescription: 'Discover the clinical case study of Rizwan, a 3-year-8-month hyperactive ASD child from Mumbai who achieved full speech and developmental recovery under Dr. Ketan Patel.',
    metaKeywords: 'cacna1a case study, hyperactive asd cured case, mumbai autism homeopathy, Dr Ketan Patel cacna1a, autism speech recovery',
  },
  {
    id: 4,
    slug: 'mother-letter-asd-child-cured-homeopathy',
    wpSlug: 'letter-from-mother-of-an-asd-child-cured-completely-with-homeopathy',
    title: 'Letter from mother of an ASD CHILD cured completely with Homeopathy',
    shortTitle: 'Physiotherapist Mother’s Letter: Complete ASD Cure',
    badge: 'Physiotherapist Mother / ASD Cure',
    patientProfile: {
      ageAtStart: '18 Months Old',
      gender: 'Male',
      location: 'India',
      author: 'Mother (Professional Physiotherapist)',
      diagnosis: 'Autism Spectrum Disorder, Severe Hyperactivity & Echolalia',
      duration: '12 Months Protocol',
      outcomeSummary: 'Completely cured; medicine discontinued 10+ months; normal school & unrestricted diet',
      schoolStatus: 'Mainstream School (Independent Homework, Reciting Slokas)',
    },
    publishDate: 'June 4, 2023',
    dateISO: '2023-06-04',
    tags: ['ASD', 'Autism', 'GFCF Diet', 'Testimonial', 'Cured Cases'],
    image: '/images/autism-care/family-peeking.png',
    brief: 'A practicing physiotherapist shares her deeply emotional journey of how her son—who once did not recognize her and suffered from echolalia—achieved complete recovery, learned complex Sanskrit slokas, and thrives in mainstream school.',
    stats: [
      { label: 'Parent Profession', value: 'Physiotherapist' },
      { label: 'First Breakthrough', value: '4 Months' },
      { label: 'Medication Stopped', value: '10+ Months Ago' },
      { label: 'Diet Status', value: 'Unrestricted' },
    ],
    symptomsBefore: [
      'Failed to recognize or bond with his own mother at 18 months old.',
      'Diagnosed by pediatric neurologist as severely hyperactive; occupational therapy advised.',
      'Persistent echolalia at age 2.5: parroted questions back rather than answering.',
      'Extreme sensory sensitivity in crowded environments (burst into tears at family functions).',
      'Inability to sit still in a classroom setting.',
      'Irrelevant verbalization with no conversational intent.',
    ],
    timeline: [
      {
        period: 'Year 2014',
        title: 'Initial Signs & Maternal Distress',
        description: 'At 1.5 years old, the child lacked eye contact and failed to recognize his mother. Put on strict GFCF diet for a year with limited behavioral change.',
      },
      {
        period: 'Year 2015',
        title: 'Consultation with Dr. Ketan Patel',
        description: 'Mother discovered Dr. Patel via parent forums. Video consultation held via Skype; Dr. Patel reinforced GFCF diet and initiated 4-month homeopathic protocol.',
      },
      {
        period: 'Month 4',
        title: 'Sequential Storytelling & Schooling',
        description: 'Dramatic behavioral transformation: answered questions sequentially and began telling stories. Doctor advised enrolling him in a normal mainstream school.',
      },
      {
        period: 'Month 8',
        title: 'Socializing at Family Gathering',
        description: 'Attended a large family function where he previously would have cried inconsolably; this time enjoyed playing freely with everyone present.',
      },
      {
        period: 'Month 12',
        title: 'Reciting Slokas & Medicine Discontinuation',
        description: 'Sat attentively in classroom, completed homework independently, and recited difficult Sanskrit slokas. Doctor officially ceased medication.',
      },
      {
        period: '10+ Months Post-Treatment',
        title: 'Sustained Normalcy & Unrestricted Diet',
        description: 'Over 10 months post-treatment with zero regression. All food restrictions lifted; child enjoys a completely normal childhood.',
      },
    ],
    fullStorySections: [
      {
        heading: 'A Medical Professional’s Personal Crisis',
        paragraphs: [
          'Hi Sir,',
          'Thank you for your great treatment and kind support in bringing my child back to normal life.',
          'I am a physiotherapist by profession. I was terribly worried regarding my son’s health in the year 2014, because at that time he was not behaving like a normal one-and-a-half-year-old child. He did not recognize me as his mother. A pediatric neurologist suggested occupational therapy due to severe hyperactivity. Through my senior colleagues, I learned about the GFCF diet and placed him on it strictly.',
          'Even after following that diet for an entire year, his hyperactivity was only slightly reduced. By two and a half years old, he began uttering words, but speech was entirely irrelevant. Whenever we asked a question, he would repeat the exact question back to us (echolalia) rather than formulating an answer.',
        ],
      },
      {
        heading: 'Discovering Dr. Ketan Patel & First 4 Months',
        paragraphs: [
          'In 2015, while searching extensively for the best autism treatment in India, I came across Dr. Ketan Patel and his Speciality Homeopathy clinic. Across various parent forums, I found numerous inspiring testimonials.',
          'I spoke with Doctor over the phone and presented my son via Skype consultation. Dr. Patel confirmed the necessity of maintaining the GFCF diet alongside his customized homeopathic remedies, which he prescribed for four months.',
          'Within the first four months itself, we witnessed drastic, wonderful changes in my son’s health and behavior. He began answering questions properly, could narrate sequential stories, and his hyperactivity noticeably settled down.',
        ],
      },
      {
        heading: 'Normal Schooling & Social Breakthrough',
        paragraphs: [
          'After four months, I brought my son to meet Dr. Patel in person. He encouraged us to enroll him in a standard mainstream school. He began attending school, though initially had difficulty sitting in one spot.',
          'After eight months of treatment, I took him to a large family function. In earlier days, he would cry inconsolably in function halls, forcing us to leave immediately. This time, he was calm, joyful, and mingled with everyone. His social engagement had blossomed immensely.',
        ],
      },
      {
        heading: 'Slokas, Academic Excellence & Full Independence',
        paragraphs: [
          'After twelve months of treatment, he sat peacefully in his classroom, listened attentively to his teacher’s instructions, and displayed personal enthusiasm for doing homework independently. Astonishingly, he began reciting even the toughest Sanskrit slokas with flawless pronunciation!',
          'At that juncture, Dr. Patel advised us to stop the homeopathic medicines and maintain the diet for a brief transitional period.',
        ],
        quote: 'After discontinuing the medicine for more than ten months, he remains completely fine in his daily routine. Now Doctor has advised us that he can enjoy all food items without any restriction. I express heartfelt gratitude to Dr. Ketan Patel for his marvelous treatment and great support.',
      },
    ],
    doctorCommentary: 'Maternal detachment and echolalia represent profound socio-communicative impairment. By clearing neuro-immune dysregulation with deep-acting constitutional remedies, cognitive processing shifts from rote parroting to authentic communicative intent.',
    metaDescription: 'Read the moving testimonial from a physiotherapist mother whose autistic son completely recovered, mastered Sanskrit slokas, and joined mainstream school under Dr. Ketan Patel.',
    metaKeywords: 'mother letter autism cured homeopathy, physiotherapist autism testimonial, echolalia cured homeopathy, Dr Ketan Patel autism recovery',
  },
  {
    id: 5,
    slug: 'congenital-disorder-genetic-syndrome-autistic-traits',
    wpSlug: 'reply-from-a-mother-of-congenital-disorder-genetic-syndrome-with-autistic-traits-child',
    title: 'Reply from a mother of congenital disorder – genetic syndrome with Autistic Traits Child',
    shortTitle: 'Congenital Disorder & Genetic Syndrome with Autistic Traits',
    badge: 'Genetic Syndrome / Congenital Disorder',
    patientProfile: {
      ageAtStart: '3 Years Old (Diagnosed at 8 Mos)',
      gender: 'Male',
      location: 'India',
      author: 'Ms. Aggarwal (Mother)',
      diagnosis: 'Congenital Genetic Disorder with Autistic Spectrum Traits',
      duration: '2 Years Comprehensive Care',
      outcomeSummary: 'Overcame prognosis of immobility; now walks, speaks, understands concepts, and attends normal school',
      schoolStatus: 'Mainstream School',
    },
    publishDate: 'December 4, 2022',
    dateISO: '2022-12-04',
    tags: ['Autism', 'Congenital Disorder', 'Genetic Birth Defect', 'Testimonial', 'Cured Cases'],
    image: '/images/autism-care/beh-5-anxious-girl.png',
    brief: '“Sorry Ms. Aggarwal, we cannot help you,” said one of India’s top doctors when her son was 8 months old. Predicted to never walk or speak, the boy is today walking, speaking, and studying in a normal school.',
    stats: [
      { label: 'Initial Prognosis', value: 'Permanent Disability' },
      { label: 'Age at Homeopathy', value: '3 Years' },
      { label: 'Motor Milestones', value: 'Walking Confidently' },
      { label: 'School Outcome', value: 'Mainstream Normal' },
    ],
    symptomsBefore: [
      'Pronounced incurable at 8 months by leading super-specialists ("will never walk, speak, or play").',
      'Non-verbal and speechless at age 3.',
      'Zero cognitive comprehension and complete lack of social skills.',
      'Extremely restricted voluntary physical movement.',
      'High sensory defensiveness making conventional therapy sessions distressing.',
      'No name orientation or command recognition.',
    ],
    timeline: [
      {
        period: 'Age 8 Months',
        title: 'The Devastating Prognosis',
        description: 'Super-specialist doctors told the family they could not help: the child was predicted to never walk, talk, or achieve independence.',
      },
      {
        period: 'Age 8 Mos – 3 Yrs',
        title: 'Years of Fruitless Therapies',
        description: 'Mother pursued every therapy relentlessly, but therapists treated the boy as "merely a hopeless case". No recovery occurred.',
      },
      {
        period: 'Age 3 Years',
        title: 'First Meeting with Dr. Ketan Patel',
        description: 'Common friend recommended Dr. Patel. Doctor immediately diagnosed the genetic syndrome markers and promised dedicated treatment.',
      },
      {
        period: 'Month 1 – 4',
        title: 'Eye Contact & Single Commands',
        description: 'Within month 1, eye contact and name recognition appeared. By month 4, the child responded reliably to single-word instructions.',
      },
      {
        period: 'Month 5 – 8',
        title: 'Babbling & Parent Recognition',
        description: 'Started babbling, following complex commands, and identifying mother and father affectionately.',
      },
      {
        period: '2 Years of Care',
        title: 'Walking, Speaking & Normal School',
        description: 'Achieved independent walking, spontaneous verbal communication, concept understanding, and entered mainstream school.',
      },
    ],
    fullStorySections: [
      {
        heading: '“Sorry Ms. Aggarwal, We Cannot Help You”',
        paragraphs: [
          '“Sorry Ms. Aggarwal, we cannot help you,” said one of the topmost doctors in India. Those words still echo in my ears.',
          'My story begins with my special child born with a genetic disorder. He was just 8 months old when we discovered this condition. Our lives took a 360-degree turn when we were told our son would never be normal—that he would never be able to walk, speak, or play like a normal kid, and would remain entirely dependent.',
          'As a mother, I refused to surrender hope. I continued therapies relentlessly until he was 3 years old. I even had to endure therapists asking: "Ma’am, why are you still hopeful for such a case?" For everyone else, my child was merely a hopeless clinical case, not a precious human being. Despite years of therapy, he was not recovering at all: still completely non-verbal, without social skills, and with no command following or recognition.',
        ],
      },
      {
        heading: 'A Doctor Who Saw a Child, Not a Case',
        paragraphs: [
          'Time was slipping through our fingers and our hope was waning until a mutual friend introduced us to Dr. Ketan Patel.',
          'During our first meeting, Dr. Patel observed my 3-year-old son with deep clinical acumen: non-verbal, speechless, zero understanding, absent social engagement, low mobility, and exceptionally hypersensitive. Dr. Patel knew the path would be challenging, but firmly stated it was not impossible.',
          'Two things stood out immediately: firstly, for him my son was a human being worthy of healing, not merely a file number; secondly, the moment he observed my child, he clinically pinpointed his genetic syndrome markers. He assured us that with patience, our son would improve. He prescribed an initial four-month regimen and advised a gluten-free diet.',
        ],
      },
      {
        heading: 'Step-by-Step Neurodevelopmental Awakenings',
        paragraphs: [
          'We began the medicines. During the very first month, I observed my child making steady eye contact, followed by responding directly to his name. By the completion of four months, he began understanding single-word commands.',
          'During our second consultation, I shared our joy, and Dr. Patel encouraged us that there was still significant ground to cover. Over the next four months, major breakthroughs occurred: he began babbling happily, following directions, and recognizing us as his mother and father with warm smiles.',
          'Four months later, during our third consultation, he began speaking individual words. At each milestone, Dr. Patel calibrated the homeopathic medicines to his evolving needs.',
        ],
        quote: 'Now it has been two years in touch with Dr. Ketan Patel, and there is no looking back. My child has started walking, speaking, understanding concepts, and developing social skills. He has started attending a normal school! Thank you Dr. Patel for making the impossible possible.',
      },
    ],
    doctorCommentary: 'Genetic syndromes and congenital defects are often deemed unchangeable. While genetic code alterations are inherent, downstream protein expression, neuroplastic pathways, and neuromuscular connectivity can be significantly optimized through individualised constitutional homeopathy.',
    metaDescription: 'Read Ms. Aggarwal’s powerful account of how her son, diagnosed with an incurable congenital genetic disorder, learned to walk and speak under Dr. Ketan Patel’s care.',
    metaKeywords: 'congenital genetic disorder homeopathy, autistic traits recovery, genetic syndrome cured case, Dr Ketan Patel testimonial',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const cleanSlug = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  return CASE_STUDIES.find(
    (c) => c.slug === cleanSlug || c.wpSlug === cleanSlug || c.slug.includes(cleanSlug) || cleanSlug.includes(c.slug)
  );
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}
