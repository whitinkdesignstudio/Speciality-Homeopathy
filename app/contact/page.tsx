import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { SITE_URL } from '@/lib/seo/siteConfig';
import { getWebPageEntity, getBreadcrumbListEntity, createPageJsonLd } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Contact Us | Ahmedabad Specialist Homeopathy Centre',
  description:
    'Visit our autism clinic in Vastrapur, Ahmedabad, Gujarat, or our Mumbai & New Delhi clinics. Affordable, transparent consultation. Call to book.',
  keywords:
    'autism doctor in Ahmedabad, autism doctor near me, autism treatment cost, autism doctor consultation fees, affordable autism treatment',
};

const canonicalUrl = `${SITE_URL}/contact`;
const contactJsonLd = createPageJsonLd([
  getWebPageEntity({
    canonicalUrl,
    name: 'Contact Speciality Homeopathy',
    description: 'Visit or contact our autism clinic in Vastrapur, Ahmedabad, Gujarat, or our Mumbai & New Delhi clinics.',
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
