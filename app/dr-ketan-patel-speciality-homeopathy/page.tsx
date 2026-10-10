import type { Metadata } from 'next';
import DrKetanPatelClient from '../our-experts/dr-ketan-patel/DrKetanPatelClient';
import { SITE_URL, PHYSICIAN_ENTITY_ID, CLINIC_ENTITY_ID, WEBSITE_ENTITY_ID } from '@/lib/seo/siteConfig';
import { getBreadcrumbListEntity, createPageJsonLd } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Dr. Ketan Patel | Autism & Child Neurology Specialist',
  description:
    'Dr. Ketan Patel (BHMS, MD) has practised homeopathy since 1992, focusing on autism and child neurological conditions. ONGC panel doctor & AHML member.',
  keywords:
    'autism doctor, child autism specialist, autism specialist in Ahmedabad, Dr. Ketan Patel homeopathy',
  alternates: {
    canonical: 'https://specialityhomeopathy.com/dr-ketan-patel-speciality-homeopathy',
  },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/dr-ketan-patel-speciality-homeopathy',
    title: 'Dr. Ketan Patel | Autism Specialist, Speciality Homeopathy',
    description: 'MD Homeopathy, BCJP. 34+ years in autism and child neurology. Founder, Speciality Homeopathy, Ahmedabad.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Dr. Ketan Patel | Autism Specialist, Speciality Homeopathy' }],
  },
};

const canonicalUrl = `${SITE_URL}/dr-ketan-patel-speciality-homeopathy`;
const doctorJsonLd = createPageJsonLd([
  {
    '@type': 'ProfilePage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: 'Dr. Ketan Patel | Autism & Child Neurology Specialist',
    description: 'Dr. Ketan Patel (BHMS, MD) senior homeopathic physician and founder of Speciality Homeopathy.',
    isPartOf: { '@id': WEBSITE_ENTITY_ID },
    publisher: { '@id': CLINIC_ENTITY_ID },
    mainEntity: { '@id': PHYSICIAN_ENTITY_ID },
    breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
  },
  getBreadcrumbListEntity(canonicalUrl, [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Our Experts', url: `${SITE_URL}/our-experts` },
    { name: 'Dr. Ketan Patel', url: canonicalUrl },
  ]),
]);

export default function DrKetanPatelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorJsonLd) }}
      />
      <DrKetanPatelClient />
    </>
  );
}
