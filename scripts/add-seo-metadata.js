/**
 * SEO Metadata Patch Script
 * Adds canonical + OpenGraph metadata to all canonical treatment and key pages.
 * Run with: node scripts/add-seo-metadata.js
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://specialityhomeopathy.com';
const APP_DIR = path.join(__dirname, '..', 'app');
const OG_IMG = `${BASE_URL}/images/og-default.jpg`;

/**
 * Map of route → {title, description, canonical, ogTitle, ogDesc}
 * Only covers pages that already HAVE metadata exports but are MISSING canonical/OG.
 */
const PAGE_UPGRADES = {
  'treatments': {
    canonical: '/treatments',
    ogTitle: 'All Homeopathy Treatments | Speciality Homeopathy',
    ogDesc: 'Browse all homeopathic treatment areas: Autism, Cerebral Palsy, ADHD, Infertility, Eczema & more. Dr. Ketan Patel, Ahmedabad.',
  },
  'autism-care': { canonical: '/autism-care', ogTitle: 'Autism Homeopathy Treatment | Dr. Ketan Patel', ogDesc: 'Expert homeopathic care for Autism Spectrum Disorder (ASD) in children & teens.' },
  'adhd-add': { canonical: '/adhd-add', ogTitle: 'ADHD/ADD Homeopathy Treatment | Speciality Homeopathy', ogDesc: 'Homeopathic care for ADHD, ADD, and child focusing disorders in Ahmedabad.' },
  'cerebral-palsy': { canonical: '/cerebral-palsy', ogTitle: 'Cerebral Palsy Homeopathy | Speciality Homeopathy', ogDesc: 'Supportive homeopathic care for Cerebral Palsy and motor delays. Dr. Ketan Patel, Ahmedabad.' },
  'downs-syndrome': { canonical: '/downs-syndrome', ogTitle: 'Down Syndrome Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic care for Down Syndrome (Trisomy 21). Dr. Ketan Patel, Ahmedabad.' },
  'dyslexia': { canonical: '/dyslexia', ogTitle: 'Dyslexia & Learning Disability Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic support for dyslexia, learning disabilities, and slow learners. Ahmedabad.' },
  'developmental-delays': { canonical: '/developmental-delays', ogTitle: 'Developmental Delays Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic care for developmental delays, speech delay, and global developmental delay.' },
  'intellectual-disability': { canonical: '/intellectual-disability', ogTitle: 'Intellectual Disability Homeopathy | Speciality Homeopathy', ogDesc: 'Supportive homeopathic care for intellectual disability. Dr. Ketan Patel, Ahmedabad.' },
  'mental-retardation': { canonical: '/mental-retardation', ogTitle: 'Intellectual Disability / Mental Retardation Homeopathy | Speciality Homeopathy', ogDesc: 'Supportive constitutional homeopathy for intellectual disability and developmental conditions.' },
  'child-behavioral-disorder': { canonical: '/child-behavioral-disorder', ogTitle: 'Child Behavioral Disorder Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic care for PANS/PANDAS, ODD, aggression, and communicative disorders in children.' },
  'child-neurological-disorders': { canonical: '/child-neurological-disorders', ogTitle: 'Child Neurological Disorders Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic care for genetic, chromosomal, and neurological conditions in children.' },
  'asthma-allergy': { canonical: '/asthma-allergy', ogTitle: 'Asthma & Allergy Homeopathy | Speciality Homeopathy', ogDesc: 'Constitutional homeopathic treatment for chronic asthma and allergies. Dr. Ketan Patel, Ahmedabad.' },
  'atopic-dermatitis': { canonical: '/atopic-dermatitis', ogTitle: 'Atopic Dermatitis & Chronic Eczema Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic treatment for atopic dermatitis and chronic eczema. Dr. Ketan Patel, Ahmedabad.' },
  'female-infertility': { canonical: '/female-infertility', ogTitle: 'Female Infertility Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic treatment for female infertility and recurrent pregnancy loss.' },
  'male-infertility': { canonical: '/male-infertility', ogTitle: 'Male Infertility Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic treatment for male infertility and oligospermia. Dr. Ketan Patel.' },
  'oligospermia': { canonical: '/oligospermia', ogTitle: 'Oligospermia Homeopathy Treatment | Speciality Homeopathy', ogDesc: 'Constitutional homeopathic care for oligospermia and low sperm count.' },
  'recurrent-abortions': { canonical: '/recurrent-abortions', ogTitle: 'Recurrent Abortions Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic care for recurrent miscarriages and pregnancy loss. Dr. Ketan Patel.' },
  'hair-falling': { canonical: '/hair-falling', ogTitle: 'Hair Loss Homeopathy Treatment | Speciality Homeopathy', ogDesc: 'Constitutional homeopathic treatment for hair falling and alopecia.' },
  'increase-height': { canonical: '/increase-height', ogTitle: 'Increase Height Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic support for height growth in children and adolescents.' },
  'mdr-tuberculosis': { canonical: '/mdr-tuberculosis', ogTitle: 'MDR Tuberculosis Homeopathy | Speciality Homeopathy', ogDesc: 'Supportive constitutional homeopathy for MDR Tuberculosis cases.' },
  'prolapsed-vertebral-disc': { canonical: '/prolapsed-vertebral-disc', ogTitle: 'Prolapsed Disc Homeopathy | Speciality Homeopathy', ogDesc: 'Homeopathic care for prolapsed vertebral disc and chronic back conditions.' },
  'inquiry': { canonical: '/inquiry', ogTitle: 'Book Homeopathy Consultation | Speciality Homeopathy', ogDesc: 'Book a consultation with Dr. Ketan Patel — autism, child neurology, and chronic conditions.' },
  'our-experts': { canonical: '/our-experts', ogTitle: 'Our Doctors | Speciality Homeopathy', ogDesc: 'Meet Dr. Ketan Patel, Dr. Kamal Patel, and Dr. Bhakti Batavia — experienced homeopathic physicians.' },
  'dr-ketan-patel-speciality-homeopathy': { canonical: '/dr-ketan-patel-speciality-homeopathy', ogTitle: 'Dr. Ketan Patel | Autism Specialist, Speciality Homeopathy', ogDesc: 'MD Homeopathy, BCJP. 34+ years in autism and child neurology. Founder, Speciality Homeopathy, Ahmedabad.' },
  'dr-kamal-patel-speciality-homeopathy': { canonical: '/dr-kamal-patel-speciality-homeopathy', ogTitle: 'Dr. Kamal Patel | Speciality Homeopathy', ogDesc: 'Consulting homeopathic physician at Speciality Homeopathy Clinic, Ahmedabad.' },
  'dr-bhakti-batavia-speciality-homeopathy': { canonical: '/dr-bhakti-batavia-speciality-homeopathy', ogTitle: 'Dr. Bhakti Batavia | Speciality Homeopathy', ogDesc: 'Consulting homeopathic physician at Speciality Homeopathy and Labh Homeopathic Clinic, Mumbai.' },
  'what-is-homeopathy': { canonical: '/what-is-homeopathy', ogTitle: 'What Is Homeopathy? | Speciality Homeopathy', ogDesc: 'A clear guide to how homeopathy works, its principles, and its role in child neurology care.' },
  'research-center': { canonical: '/research-center', ogTitle: 'Research Centre | Speciality Homeopathy', ogDesc: 'Speciality Homeopathy Research Centre — clinical documentation and homeopathic research by Dr. Ketan Patel.' },
  'locations': { canonical: '/locations', ogTitle: 'Clinic Locations | Speciality Homeopathy', ogDesc: 'Find Speciality Homeopathy clinics in Ahmedabad, Mumbai, Delhi, Bangalore, Chennai, Hyderabad & Kolkata.' },
  'casestudies': { canonical: '/casestudies', ogTitle: 'Case Studies | Speciality Homeopathy', ogDesc: 'Documented clinical case observations from Speciality Homeopathy — autism, neurological conditions & more.' },
  'gallery': { canonical: '/gallery', ogTitle: 'Gallery | Speciality Homeopathy', ogDesc: 'Photos from Speciality Homeopathy Clinic — events, awareness programs & clinic activities.' },
  'our-approach': { canonical: '/our-approach', ogTitle: 'Our Approach | Speciality Homeopathy', ogDesc: 'The clinical philosophy behind Speciality Homeopathy — individualized constitutional care for children and adults.' },
};

// Build the OG snippet to inject
function buildOgSnippet(canonical, ogTitle, ogDesc) {
  return `  alternates: {
    canonical: '${BASE_URL}${canonical}',
  },
  openGraph: {
    type: 'website',
    url: '${BASE_URL}${canonical}',
    title: '${ogTitle.replace(/'/g, "\\'")}',
    description: '${ogDesc.replace(/'/g, "\\'")}',
    images: [{ url: '${OG_IMG}', width: 1200, height: 630, alt: '${ogTitle.replace(/'/g, "\\'")}' }],
  },`;
}

let updatedCount = 0;
let skippedCount = 0;
let errorCount = 0;

for (const [route, config] of Object.entries(PAGE_UPGRADES)) {
  const filePath = path.join(APP_DIR, route, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  NOT FOUND: ${route}/page.tsx`);
    skippedCount++;
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has canonical
  if (content.includes('alternates:') && content.includes('canonical:')) {
    console.log(`✅ SKIP (already has canonical): ${route}`);
    skippedCount++;
    continue;
  }

  // Find the closing }; of the metadata export and inject before it
  const metadataEndRegex = /^(\s*keywords:[^;]+;)/m;
  const ogSnippet = buildOgSnippet(config.canonical, config.ogTitle, config.ogDesc);

  if (content.includes('export const metadata')) {
    // Inject after the last property in metadata (before the closing };)
    // Strategy: find "keywords:" line end and insert after it
    const kwMatch = content.match(/(  keywords:[^\n]*(?:\n    '[^']*',)*\n  \],?\n)(};)/);
    if (kwMatch) {
      content = content.replace(kwMatch[0], kwMatch[1] + ogSnippet + '\n' + kwMatch[2]);
    } else {
      // Simpler pattern for single-line keywords
      const singleKwMatch = content.match(/(  keywords:[^\n]+\n)(};)/);
      if (singleKwMatch) {
        content = content.replace(singleKwMatch[0], singleKwMatch[1] + ogSnippet + '\n' + singleKwMatch[2]);
      } else {
        // Find end of metadata object
        const closingMatch = content.match(/(  robots:[^}]+}\n  },?\n)(};)/);
        if (closingMatch) {
          content = content.replace(closingMatch[0], closingMatch[1] + ogSnippet + '\n' + closingMatch[2]);
        } else {
          console.log(`❌ PATTERN NOT MATCHED: ${route}`);
          errorCount++;
          continue;
        }
      }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ UPDATED: ${route}`);
    updatedCount++;
  } else {
    console.log(`⚠️  NO METADATA EXPORT: ${route}`);
    skippedCount++;
  }
}

console.log(`\n📊 Summary: ${updatedCount} updated, ${skippedCount} skipped, ${errorCount} errors`);
