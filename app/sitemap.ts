/**
 * Production-grade XML Sitemap — Speciality Homeopathy
 *
 * -------------------------------------------------------
 * CANONICAL-ONLY STRATEGY
 * -------------------------------------------------------
 * This sitemap contains ONLY canonical, publicly indexable URLs.
 * All redirect sources, alias pages, and re-export pages are EXCLUDED.
 *
 * Key exclusion rules applied:
 *  • /care-areas           → server-side redirect to /treatments       (excluded)
 *  • /aboutus              → re-exports /about-us                      (excluded)
 *  • /autismbehaviour      → re-exports /autism-behaviour              (excluded)
 *  • /casestudies          → re-exports /important-links/case-studies  (canonical = /casestudies? NO — redirect goes /case-studies → /casestudies, but /casestudies itself is the re-export. The redirect destination is /casestudies so that IS canonical)
 *  • /case-studies         → 301 → /casestudies                       (excluded)
 *  • /medical-tips         → 301 → /medicaltips                       (excluded)
 *  • /printmedia           → 301 → /print-media                       (excluded)
 *  • /autism-history       → 301 → /autismhistory                     (excluded)
 *  • /ourapproach          → re-exports /our-approach                  (excluded)
 *  • /contactus            → re-exports /contact                      (excluded)
 *  • /researchcenter       → re-exports /research-center              (excluded)
 *  • /privacy-policy-2     → re-exports /privacy                      (excluded)
 *  • /our-experts          → re-exports /our-doctors (redirect /our-doctors → /our-experts, canonical = /our-experts)
 *  • /our-doctors          → 301 → /our-experts                       (excluded as source)
 *  • /downssyndrome        → duplicate page content of /downs-syndrome (excluded)
 *  • /treatments/X         → ALL 301 redirect to root-level X          (ALL excluded)
 *  • /our-experts/dr-*     → 301 to /dr-*-speciality-homeopathy       (excluded)
 *  • /important-links/*    → redirect targets or re-exports            (excluded sub-pages)
 *
 * Canonical treatment pages live at root level (e.g. /autism-care, /adhd-add).
 * The /treatments index page is real canonical content.
 *
 * Production domain: https://specialityhomeopathy.com
 * Configurable via NEXT_PUBLIC_SITE_URL environment variable.
 *
 * lastModified: Omitted intentionally. These are mostly static medical content
 * pages with no reliable programmatic modification date. Using new Date() on
 * every request is inaccurate and misleading to search engines.
 * Add lastModified per-route only when a CMS or build-time date is available.
 * -------------------------------------------------------
 */

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Production domain — set NEXT_PUBLIC_SITE_URL in Vercel environment variables.
  // Never falls back to localhost. Falls back to confirmed production domain.
  const baseUrl =
    (process.env.NEXT_PUBLIC_SITE_URL || 'https://specialityhomeopathy.com')
      .replace(/\/$/, ''); // strip any accidental trailing slash

  /**
   * All routes are canonical HTTPS URLs with no trailing slash,
   * consistent with the site's Next.js configuration (trailingSlash not set = false by default).
   *
   * Priority guide:
   *   1.0  Homepage
   *   0.9  High-value conversion/inquiry pages
   *   0.8  Core identity, doctor profiles, all primary treatment pages, locations
   *   0.7  Supporting content (research, media, educational)
   *   0.6  Reference / utility content
   *   0.3  Legal / compliance
   */

  return [
    // ── HOMEPAGE ────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}`,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── CORE IDENTITY & NAVIGATION PAGES ────────────────────────────────────
    {
      url: `${baseUrl}/about-us`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-approach`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/what-is-homeopathy`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/research-center`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── INQUIRY & CONTACT ────────────────────────────────────────────────────
    // /inquiry is the primary booking/consultation form — high conversion value
    {
      url: `${baseUrl}/inquiry`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-pay-fees`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },

    // ── DOCTOR / EXPERT PROFILES ─────────────────────────────────────────────
    // /our-experts is canonical (next.config.js: /our-doctors → /our-experts permanent redirect)
    {
      url: `${baseUrl}/our-experts`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Individual doctor pages — canonical flat URLs (not /our-experts/dr-* which redirect)
    {
      url: `${baseUrl}/dr-ketan-patel-speciality-homeopathy`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dr-kamal-patel-speciality-homeopathy`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dr-bhakti-batavia-speciality-homeopathy`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── TREATMENTS INDEX ─────────────────────────────────────────────────────
    // /treatments is a real page listing all care areas
    // Note: /care-areas redirects → /treatments (excluded from sitemap)
    {
      url: `${baseUrl}/treatments`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── CANONICAL TREATMENT / CARE PAGES (root level) ───────────────────────
    //
    // IMPORTANT: ALL /treatments/X paths 301-redirect to these root-level URLs.
    // Only the root-level canonical paths appear here.
    //
    // Child Neurology & Developmental
    {
      url: `${baseUrl}/autism-care`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/autism-behaviour`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // /autismhistory is the redirect destination for /autism-history and /important-links/autism-history
      url: `${baseUrl}/autismhistory`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/adhd-add`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cerebral-palsy`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/downs-syndrome`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/developmental-delays`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/intellectual-disability`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mental-retardation`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/child-neurological-disorders`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/child-behavioral-disorder`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dyslexia`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // General & Adult Treatments
    {
      url: `${baseUrl}/asthma-allergy`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/atopic-dermatitis`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prolapsed-vertebral-disc`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hair-falling`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/increase-height`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/male-infertility`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/female-infertility`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oligospermia`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recurrent-abortions`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mdr-tuberculosis`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── MEDIA & CONTENT PAGES ────────────────────────────────────────────────
    // /casestudies: redirect destination for /case-studies and /important-links/case-studies
    {
      url: `${baseUrl}/casestudies`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/videos`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // /print-media: redirect destination for /printmedia; re-exports /important-links/print-media
    {
      url: `${baseUrl}/print-media`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // /medicaltips: redirect destination for /medical-tips and /important-links/medical-tips
    {
      url: `${baseUrl}/medicaltips`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // /important-links is the parent hub page (real content, not a redirect)
    {
      url: `${baseUrl}/important-links`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ── THERAPY & SPECIALISED PROGRAMS ──────────────────────────────────────
    {
      url: `${baseUrl}/therapy-for-ability`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── CLINIC BRANCH LOCATION PAGES ─────────────────────────────────────────
    {
      url: `${baseUrl}/locations`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-mumbai`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-new-delhi`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-bangalore`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-kolkata`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-hyderabad`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-chennai`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-secunderabad`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-uk`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/speciality-homeopathy-usa`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── INFORMATIONAL / UTILITY ──────────────────────────────────────────────
    {
      url: `${baseUrl}/medical-registrations`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },

    // ── LEGAL & COMPLIANCE ───────────────────────────────────────────────────
    // /privacy-policy re-exports from /privacy; /privacy is the content page.
    // Either is indexable but /privacy-policy is more user-facing.
    // Include /privacy-policy as the user-presented canonical.
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/medical-disclaimer`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
