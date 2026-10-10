import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://specialityhomeopathy.com').replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/',
          '/images/',
          '/favicon.ico',
          '/logo.png',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/data/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/_next/static/',
          '/images/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/data/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/images/',
          '/logo.png',
        ],
        disallow: [
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/_next/static/',
          '/images/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/data/',
          '/private/',
        ],
      },
      // AI Search & Citation Bots (AEO/GEO optimization for clinic discoverability)
      {
        userAgent: [
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Applebot',
        ],
        allow: [
          '/',
          '/_next/static/',
          '/images/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/data/',
          '/private/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
