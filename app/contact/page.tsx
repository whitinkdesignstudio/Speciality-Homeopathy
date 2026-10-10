import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { SITE_URL } from '@/lib/seo/siteConfig';
import { getWebPageEntity, getBreadcrumbListEntity, createPageJsonLd } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Contact Us | Speciality Homeopathy — Ahmedabad & India',
  description:
    'Contact Speciality Homeopathy Clinic in Ahmedabad, or book a teleconsultation. Visiting OPDs in Mumbai, Delhi, Bangalore, Chennai, Hyderabad & Kolkata. Dr. Ketan Patel: +91 98980 05354.',
  keywords:
    'autism doctor in Ahmedabad, homeopathy clinic contact, autism doctor near me, Dr Ketan Patel contact, autism consultation booking',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/contact`,
    title: 'Contact Speciality Homeopathy — Book Autism & Neurology Consultation',
    description:
      'Book a consultation at Speciality Homeopathy Clinic, Ahmedabad or teleconsult from anywhere in India, UK, USA. Dr. Ketan Patel — +91 98980 05354.',
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630, alt: 'Contact Speciality Homeopathy Clinic' }],
  },
};

const canonicalUrl = `${SITE_URL}/contact`;
const contactJsonLd = createPageJsonLd([
  getWebPageEntity({
    canonicalUrl,
    name: 'Contact Speciality Homeopathy',
    description: 'Contact our clinics and consultation centers across India, or book an online consultation from the Americas, UK, and Europe.',
    pageType: 'ContactPage',
    breadcrumbId: `${canonicalUrl}#breadcrumb`,
  }),
  getBreadcrumbListEntity(canonicalUrl, [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Contact Us', url: canonicalUrl },
  ]),
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
