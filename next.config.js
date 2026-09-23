/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
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
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
    ];
  },
  async rewrites() {
    return [
      // Map care-areas subroutes if needed
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

      // Map treatments subroutes
      { source: '/treatments/autism-care', destination: '/autism-care' },
      { source: '/treatments/adhd-add', destination: '/adhd-add' },
      { source: '/treatments/asthma-allergy', destination: '/asthma-allergy' },
      { source: '/treatments/atopic-dermatitis', destination: '/atopic-dermatitis' },
      { source: '/treatments/cerebral-palsy', destination: '/cerebral-palsy' },
      { source: '/treatments/child-behavioral-disorder', destination: '/child-behavioral-disorder' },
      { source: '/treatments/child-neurological-disorders', destination: '/child-neurological-disorders' },
      { source: '/treatments/developmental-delays', destination: '/developmental-delays' },
      { source: '/treatments/downs-syndrome', destination: '/downs-syndrome' },
      { source: '/treatments/dyslexia', destination: '/dyslexia' },
      { source: '/treatments/female-infertility', destination: '/female-infertility' },
      { source: '/treatments/hair-falling', destination: '/hair-falling' },
      { source: '/treatments/increase-height', destination: '/increase-height' },
      { source: '/treatments/intellectual-disability', destination: '/intellectual-disability' },
      { source: '/treatments/male-infertility', destination: '/male-infertility' },
      { source: '/treatments/mdr-tuberculosis', destination: '/mdr-tuberculosis' },
      { source: '/treatments/mental-retardation', destination: '/mental-retardation' },
      { source: '/treatments/oligospermia', destination: '/oligospermia' },
      { source: '/treatments/prolapsed-vertebral-disc', destination: '/prolapsed-vertebral-disc' },
      { source: '/treatments/recurrent-abortions', destination: '/recurrent-abortions' },
    ];
  },
};

module.exports = nextConfig;
