import type { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';
import { SITE_URL } from '@/lib/seo/siteConfig';
import { getWebPageEntity, getBreadcrumbListEntity, createPageJsonLd } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'About Us | Speciality Homeopathy Clinic & Research Centre',
  description:
    "Meet the team behind Speciality Homeopathy Clinic: research-led, individualised homeopathic care for autism, child neurology & chronic conditions — alongside your child's medical team.",
  keywords:
    'about speciality homeopathy, autism clinic Ahmedabad, Dr Ketan Patel, homeopathy research centre, autism specialist Gujarat',
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/about-us`,
    title: 'About Speciality Homeopathy Clinic & Research Centre, Ahmedabad',
    description:
      'Research-led homeopathic care for autism, child neurology & chronic conditions. 34+ years of clinical expertise. Dr. Ketan Patel — Ahmedabad, Gujarat.',
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630, alt: 'About Speciality Homeopathy Clinic, Ahmedabad' }],
  },
};

const canonicalUrl = `${SITE_URL}/about-us`;
const aboutJsonLd = createPageJsonLd([
  getWebPageEntity({
    canonicalUrl,
    name: 'About Speciality Homeopathy',
    description: "Meet the team behind our autism clinic in Ahmedabad: research-led, individualised homeopathic care alongside your child's medical team.",
    pageType: 'AboutPage',
    breadcrumbId: `${canonicalUrl}#breadcrumb`,
  }),
  getBreadcrumbListEntity(canonicalUrl, [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'About Us', url: canonicalUrl },
  ]),
]);

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutUsClient />
    </>
  );
}
