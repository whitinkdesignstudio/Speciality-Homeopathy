/**
 * Production-Grade Schema.org Structured Data Generators
 *
 * Implements Google-compliant, semantic linked data (@graph architecture)
 * for MedicalClinic, Organization, WebSite, Physician, WebPage, and Article.
 */

import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  SITE_DESCRIPTION,
  LOGO_URL,
  LOGO_ID,
  CLINIC_ENTITY_ID,
  WEBSITE_ENTITY_ID,
  PHYSICIAN_ENTITY_ID,
  CLINIC_CONTACT,
  LEAD_PHYSICIAN,
} from './siteConfig';

/**
 * Primary Publisher Entity: MedicalClinic + Organization
 * Represents the official healthcare institution and publishing body.
 */
export function getPublisherEntity() {
  return {
    '@type': ['MedicalClinic', 'Organization'],
    '@id': CLINIC_ENTITY_ID,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    alternateName: [SITE_LEGAL_NAME, `${SITE_NAME} - Autism Clinic`],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      caption: `${SITE_NAME} Logo`,
      inLanguage: 'en-US',
    },
    image: {
      '@id': LOGO_ID,
    },
    description: SITE_DESCRIPTION,
    telephone: CLINIC_CONTACT.telephone,
    email: CLINIC_CONTACT.email,
    medicalSpecialty: CLINIC_CONTACT.medicalSpecialty,
    priceRange: CLINIC_CONTACT.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC_CONTACT.address.streetAddress,
      addressLocality: CLINIC_CONTACT.address.addressLocality,
      addressRegion: CLINIC_CONTACT.address.addressRegion,
      postalCode: CLINIC_CONTACT.address.postalCode,
      addressCountry: CLINIC_CONTACT.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_CONTACT.geo.latitude,
      longitude: CLINIC_CONTACT.geo.longitude,
    },
    areaServed: CLINIC_CONTACT.areasServed.map((area) => ({
      '@type': area.type,
      name: area.name,
    })),
    sameAs: CLINIC_CONTACT.socialProfiles,
    founder: {
      '@id': PHYSICIAN_ENTITY_ID,
    },
  };
}

/**
 * Primary WebSite Entity
 * References the canonical Publisher entity so audit tools discover the publisher.
 */
export function getWebSiteEntity() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ENTITY_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    alternateName: SITE_LEGAL_NAME,
    description: SITE_DESCRIPTION,
    publisher: {
      '@id': CLINIC_ENTITY_ID,
    },
    inLanguage: 'en-US',
  };
}

/**
 * Lead Physician / Doctor Entity
 */
export function getPhysicianEntity() {
  return {
    '@type': 'Physician',
    '@id': PHYSICIAN_ENTITY_ID,
    name: LEAD_PHYSICIAN.name,
    jobTitle: LEAD_PHYSICIAN.jobTitle,
    url: LEAD_PHYSICIAN.profileUrl,
    medicalSpecialty: LEAD_PHYSICIAN.medicalSpecialty,
    telephone: LEAD_PHYSICIAN.telephone,
    worksFor: {
      '@id': CLINIC_ENTITY_ID,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC_CONTACT.address.streetAddress,
      addressLocality: CLINIC_CONTACT.address.addressLocality,
      addressRegion: CLINIC_CONTACT.address.addressRegion,
      postalCode: CLINIC_CONTACT.address.postalCode,
      addressCountry: CLINIC_CONTACT.address.addressCountry,
    },
    sameAs: LEAD_PHYSICIAN.sameAs,
  };
}

/**
 * WebPage Entity for specific pages
 */
export function getWebPageEntity({
  canonicalUrl,
  name,
  description,
  pageType = 'WebPage',
  breadcrumbId,
}: {
  canonicalUrl: string;
  name: string;
  description?: string;
  pageType?: string;
  breadcrumbId?: string;
}) {
  return {
    '@type': pageType,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name,
    ...(description ? { description } : {}),
    isPartOf: {
      '@id': WEBSITE_ENTITY_ID,
    },
    publisher: {
      '@id': CLINIC_ENTITY_ID,
    },
    about: {
      '@id': CLINIC_ENTITY_ID,
    },
    inLanguage: 'en-US',
    ...(breadcrumbId ? { breadcrumb: { '@id': breadcrumbId } } : {}),
  };
}

/**
 * Article / Case Study Entity
 */
export function getArticleEntity({
  canonicalUrl,
  headline,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
}: {
  canonicalUrl: string;
  headline: string;
  description: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    headline,
    description,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@id': `${canonicalUrl}#webpage`,
    },
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    publisher: {
      '@id': CLINIC_ENTITY_ID,
    },
    author: authorName
      ? {
          '@type': 'Person',
          name: authorName,
        }
      : {
          '@id': PHYSICIAN_ENTITY_ID,
        },
    inLanguage: 'en-US',
  };
}

/**
 * BreadcrumbList Entity
 */
export function getBreadcrumbListEntity(
  canonicalUrl: string,
  items: { name: string; url: string }[]
) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Root Layout Structured Data Graph
 * Automatically provided to every page via app/layout.tsx
 */
export function buildRootLayoutSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getPublisherEntity(),
      getWebSiteEntity(),
      getPhysicianEntity(),
    ],
  };
}

/**
 * Create a page-specific JSON-LD @graph structure
 */
export function createPageJsonLd(entities: Record<string, any>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': entities,
  };
}

