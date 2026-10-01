import type { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';
import { SITE_URL } from '@/lib/seo/siteConfig';
import { getWebPageEntity, getBreadcrumbListEntity, createPageJsonLd } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'About Us | Specialist Homeopathy & Child Neurology Centre',
  description:
    "Meet the team behind our autism clinic in Ahmedabad: research-led, individualised homeopathic care alongside your child's medical team.",
  keywords:
    'autism clinic, genetic test for autism, whole exome sequencing for autism child',
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
