import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { SITE_URL } from '@/lib/seo/siteConfig';
import { getWebPageEntity, getBreadcrumbListEntity, createPageJsonLd } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Contact Us | Ahmedabad Specialist Homeopathy Centre',
  description:
    'Contact our clinics and consultation centers in Ahmedabad, Mumbai, New Delhi, Hyderabad, Secunderabad, Kolkata, Bangalore, Chennai, Mysore, and Ludhiana, or book online.',
  keywords:
    'autism doctor in Ahmedabad, autism doctor near me, autism treatment cost, autism doctor consultation fees, affordable autism treatment',
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
