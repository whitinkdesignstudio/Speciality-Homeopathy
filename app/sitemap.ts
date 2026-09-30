import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://specialityhomeopathy.com';
  const currentDate = new Date().toISOString();

  const routes = [
    // Core Pages
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/care-areas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/our-approach', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/our-experts', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/dr-ketan-patel-speciality-homeopathy', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/dr-kamal-patel-speciality-homeopathy', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/dr-bhakti-batavia-speciality-homeopathy', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/research-center', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/inquiry', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/locations', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/case-studies', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/videos', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/print-media', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/medical-tips', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/important-links', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/how-to-pay-fees', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/medical-registrations', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/therapy-for-ability', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/what-is-homeopathy', priority: 0.8, changeFrequency: 'monthly' as const },

    // Treatments & Specialties
    { path: '/treatments', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/treatments/autism-care', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/treatments/adhd-add', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/cerebral-palsy', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/downs-syndrome', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/developmental-delays', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/intellectual-disability', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/mental-retardation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/child-neurological-disorders', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/child-behavioral-disorder', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/dyslexia', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/asthma-allergy', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/atopic-dermatitis', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/prolapsed-vertebral-disc', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/hair-falling', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/increase-height', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/male-infertility', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/female-infertility', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/oligospermia', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/recurrent-abortions', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/treatments/mdr-tuberculosis', priority: 0.8, changeFrequency: 'monthly' as const },

    // Clinic Branch Locations
    { path: '/speciality-homeopathy-mumbai', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speciality-homeopathy-new-delhi', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speciality-homeopathy-bangalore', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speciality-homeopathy-kolkata', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speciality-homeopathy-hyderabad', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speciality-homeopathy-chennai', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speciality-homeopathy-secunderabad', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speciality-homeopathy-uk', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speciality-homeopathy-usa', priority: 0.8, changeFrequency: 'monthly' as const },

    // Compliance & Legal
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/medical-disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: currentDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
