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
      // Allows public content to be crawled for AI search and citation products.
      // Private routes (api/, admin/, dashboard/) remain disallowed.
      {
        userAgent: [
          'GPTBot',          // OpenAI training crawler
          'OAI-SearchBot',   // OpenAI SearchGPT search crawler (separate from GPTBot)
          'PerplexityBot',   // Perplexity AI search
          'ClaudeBot',       // Anthropic Claude
          'Applebot',        // Apple Intelligence / Siri Knowledge
          'DuckAssistBot',   // DuckDuckGo AI Answer
          'YouBot',          // You.com AI search
        ],
        allow: [
          '/',
          '/_next/static/',
          '/images/',
          '/llms.txt',
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
