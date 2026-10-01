/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.wixstatic.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Direct page matches to domain
      { source: '/aboutus', destination: '/about-us', permanent: true },
      { source: '/contactus', destination: '/contact', permanent: true },
      { source: '/researchcenter', destination: '/research-center', permanent: true },
      { source: '/our-doctors', destination: '/our-experts', permanent: true },

      // Doctor profile page redirects (old → new canonical)
      { source: '/our-experts/dr-ketan-patel', destination: '/dr-ketan-patel-speciality-homeopathy', permanent: true },
      { source: '/our-experts/drkamalpatel', destination: '/dr-kamal-patel-speciality-homeopathy', permanent: true },
      { source: '/our-experts/drbhaktibatavia', destination: '/dr-bhakti-batavia-speciality-homeopathy', permanent: true },

      // Flattened important links to domain URLs
      { source: '/important-links/autism-history', destination: '/autismhistory', permanent: true },
      { source: '/autism-history', destination: '/autismhistory', permanent: true },
      { source: '/important-links/case-studies', destination: '/casestudies', permanent: true },
      { source: '/case-studies', destination: '/casestudies', permanent: true },
      { source: '/important-links/medical-tips', destination: '/medicaltips', permanent: true },
      { source: '/medical-tips', destination: '/medicaltips', permanent: true },
      { source: '/important-links/gallery', destination: '/gallery', permanent: true },
      { source: '/important-links/print-media', destination: '/print-media', permanent: true },
      { source: '/important-links/videos', destination: '/videos', permanent: true },

      // Legacy WordPress case studies redirects to canonical /casestudies/[slug]
      { source: '/a-child-of-research-scientist-of-government-of-india-fully-recovered-from-asd-without-any-therapy-cured-cases', destination: '/casestudies/child-of-research-scientist-recovered-from-asd', permanent: true },
      { source: '/genetic-neuropathy-having-symptoms-of-autistic-complex-disorder-cured-cases', destination: '/casestudies/genetic-neuropathy-autistic-complex-disorder', permanent: true },
      { source: '/cacna1a', destination: '/casestudies/cacna1a-hyperactive-asd-child', permanent: true },
      { source: '/letter-from-mother-of-an-asd-child-cured-completely-with-homeopathy', destination: '/casestudies/mother-letter-asd-child-cured-homeopathy', permanent: true },
      { source: '/reply-from-a-mother-of-congenital-disorder-genetic-syndrome-with-autistic-traits-child', destination: '/casestudies/congenital-disorder-genetic-syndrome-autistic-traits', permanent: true },

      // Treatment page redirects (old /treatments/X → new canonical URLs)
      { source: '/treatments/autism-care', destination: '/autism', permanent: true },
      { source: '/treatments/child-neurological-disorders', destination: '/child-neurological-disorders-homeopathy-treatment-dysmorphism-genetic-chromosomal-abnormalities', permanent: true },
      { source: '/treatments/downs-syndrome', destination: '/downs-syndrome', permanent: true },
      { source: '/treatments/adhd-add', destination: '/adhd-add-and-child-focusing-disorder', permanent: true },
      { source: '/treatments/cerebral-palsy', destination: '/cerebral-palsy', permanent: true },
      { source: '/treatments/child-behavioral-disorder', destination: '/pans-pandas-and-communicative-disorder-in-children', permanent: true },
      { source: '/treatments/dyslexia', destination: '/dyslexia-learning-disability-learning-difficulties-slow-learners', permanent: true },
      { source: '/treatments/mental-retardation', destination: '/mental-retardation', permanent: true },
      { source: '/treatments/asthmaallergy', destination: '/asthma-allergy', permanent: true },
      { source: '/treatments/asthma-allergy', destination: '/asthma-allergy', permanent: true },
      { source: '/treatments/atopic-dermatitis', destination: '/atopic-dermatitis-chronic-eczema', permanent: true },
      { source: '/treatments/femaleinfertility', destination: '/female-infertility', permanent: true },
      { source: '/treatments/female-infertility', destination: '/female-infertility', permanent: true },
      { source: '/treatments/male-infertility', destination: '/male-infertility', permanent: true },
      { source: '/treatments/oligospermia', destination: '/oligospermia', permanent: true },
      { source: '/treatments/recurrentabortions', destination: '/recurrent-abortions', permanent: true },
      { source: '/treatments/recurrent-abortions', destination: '/recurrent-abortions', permanent: true },
      { source: '/treatments/hairfalling', destination: '/hair-falling', permanent: true },
      { source: '/treatments/hair-falling', destination: '/hair-falling', permanent: true },
      { source: '/treatments/increaseheight', destination: '/increase-height', permanent: true },
      { source: '/treatments/increase-height', destination: '/increase-height', permanent: true },
      { source: '/treatments/mdr-tuberculosis', destination: '/mdr-tuberculosis', permanent: true },
      { source: '/treatments/prolapsed-vertebral-disc', destination: '/prolapsed-vertebral-disc', permanent: true },
      { source: '/treatments/developmental-delays', destination: '/developmental-delays', permanent: true },
      { source: '/treatments/developmentaldelays', destination: '/developmental-delays', permanent: true },
      { source: '/treatments/intellectual-disability', destination: '/intellectual-disability', permanent: true },
      { source: '/treatments/intellectualdisability', destination: '/intellectual-disability', permanent: true },

      // Root shortcuts to canonical URLs
      { source: '/femaleinfertility', destination: '/female-infertility', permanent: true },
      { source: '/hairfalling', destination: '/hair-falling', permanent: true },
      { source: '/recurrentabortions', destination: '/recurrent-abortions', permanent: true },
      { source: '/intellectualdisability', destination: '/intellectual-disability', permanent: true },
      { source: '/increaseheight', destination: '/increase-height', permanent: true },
      { source: '/asthmaallergy', destination: '/asthma-allergy', permanent: true },
      { source: '/developmentaldelays', destination: '/developmental-delays', permanent: true },
    ];
  },
  async rewrites() {
    return [
      // Map care-areas subroutes
      { source: '/care-areas/adhd-add', destination: '/adhd-add' },
      { source: '/care-areas/asthma-allergy', destination: '/asthma-allergy' },
      { source: '/care-areas/atopic-dermatitis', destination: '/atopic-dermatitis' },
      { source: '/care-areas/autism-care', destination: '/autism-care' },
      { source: '/care-areas/cerebral-palsy', destination: '/cerebral-palsy' },
      { source: '/care-areas/child-behavioral-disorder', destination: '/child-behavioral-disorder' },
      { source: '/care-areas/child-neurological-disorders', destination: '/child-neurological-disorders' },
      { source: '/care-areas/developmental-delays', destination: '/developmental-delays' },
      { source: '/care-areas/downs-syndrome', destination: '/downs-syndrome' },
      { source: '/care-areas/dyslexia', destination: '/dyslexia' },
      { source: '/care-areas/female-infertility', destination: '/female-infertility' },
      { source: '/care-areas/hair-falling', destination: '/hair-falling' },
      { source: '/care-areas/increase-height', destination: '/increase-height' },
      { source: '/care-areas/intellectual-disability', destination: '/intellectual-disability' },
      { source: '/care-areas/male-infertility', destination: '/male-infertility' },
      { source: '/care-areas/mdr-tuberculosis', destination: '/mdr-tuberculosis' },
      { source: '/care-areas/mental-retardation', destination: '/mental-retardation' },
      { source: '/care-areas/oligospermia', destination: '/oligospermia' },
      { source: '/care-areas/prolapsed-vertebral-disc', destination: '/prolapsed-vertebral-disc' },
      { source: '/care-areas/recurrent-abortions', destination: '/recurrent-abortions' },

      // New canonical URLs → existing page content (for renamed slugs)
      { source: '/autism', destination: '/autism-care' },
      { source: '/adhd-add-and-child-focusing-disorder', destination: '/adhd-add' },
      { source: '/child-neurological-disorders-homeopathy-treatment-dysmorphism-genetic-chromosomal-abnormalities', destination: '/child-neurological-disorders' },
      { source: '/pans-pandas-and-communicative-disorder-in-children', destination: '/child-behavioral-disorder' },
      { source: '/dyslexia-learning-disability-learning-difficulties-slow-learners', destination: '/dyslexia' },
      { source: '/atopic-dermatitis-chronic-eczema', destination: '/atopic-dermatitis' },
    ];
  },
};

module.exports = nextConfig;
