/**
 * City Page Metadata Generator — Speciality Homeopathy
 *
 * Generates SEO-optimized, page-specific metadata for each city landing page.
 * Every city page gets a unique title, description, canonical URL, and OG image.
 */

import type { Metadata } from 'next';

const SITE_URL = 'https://specialityhomeopathy.com';
const OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export interface CityPageConfig {
  slug: string;
  cityName: string;
  stateName: string;
  clinicName?: string;
  clinicArea?: string;
  visitType: 'in-person' | 'teleconsult' | 'visiting-opd';
  uniqueFact?: string; // e.g. "18+ years of OPD visits"
}

export const CITY_CONFIGS: Record<string, CityPageConfig> = {
  'speciality-homeopathy-mumbai': {
    slug: 'speciality-homeopathy-mumbai',
    cityName: 'Mumbai',
    stateName: 'Maharashtra',
    clinicName: 'Labh Homeopathic Clinic',
    clinicArea: 'Vile Parle (West)',
    visitType: 'visiting-opd',
    uniqueFact: '18+ years of regular Mumbai OPD visits',
  },
  'speciality-homeopathy-new-delhi': {
    slug: 'speciality-homeopathy-new-delhi',
    cityName: 'New Delhi',
    stateName: 'Delhi',
    visitType: 'visiting-opd',
    uniqueFact: 'Regular OPD visits by Dr. Ketan Patel',
  },
  'speciality-homeopathy-bangalore': {
    slug: 'speciality-homeopathy-bangalore',
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    visitType: 'visiting-opd',
    uniqueFact: 'Periodic OPD visits and teleconsultation',
  },
  'speciality-homeopathy-chennai': {
    slug: 'speciality-homeopathy-chennai',
    cityName: 'Chennai',
    stateName: 'Tamil Nadu',
    visitType: 'visiting-opd',
    uniqueFact: 'Periodic OPD visits and teleconsultation',
  },
  'speciality-homeopathy-hyderabad': {
    slug: 'speciality-homeopathy-hyderabad',
    cityName: 'Hyderabad',
    stateName: 'Telangana',
    visitType: 'visiting-opd',
    uniqueFact: 'Periodic OPD visits and teleconsultation',
  },
  'speciality-homeopathy-kolkata': {
    slug: 'speciality-homeopathy-kolkata',
    cityName: 'Kolkata',
    stateName: 'West Bengal',
    visitType: 'visiting-opd',
    uniqueFact: 'Periodic OPD visits and teleconsultation',
  },
  'speciality-homeopathy-secunderabad': {
    slug: 'speciality-homeopathy-secunderabad',
    cityName: 'Secunderabad',
    stateName: 'Telangana',
    visitType: 'visiting-opd',
    uniqueFact: 'Periodic OPD visits and teleconsultation',
  },
  'speciality-homeopathy-uk': {
    slug: 'speciality-homeopathy-uk',
    cityName: 'United Kingdom',
    stateName: 'UK',
    visitType: 'teleconsult',
    uniqueFact: 'Online teleconsultation for UK-based families',
  },
  'speciality-homeopathy-usa': {
    slug: 'speciality-homeopathy-usa',
    cityName: 'USA',
    stateName: 'United States',
    visitType: 'teleconsult',
    uniqueFact: 'Online teleconsultation for US-based families',
  },
};

export function buildCityMetadata(slug: string): Metadata {
  const config = CITY_CONFIGS[slug];
  if (!config) {
    // Fallback for unknown slugs
    return {
      title: 'Speciality Homeopathy — Clinic Location',
      description: 'Book a consultation with Speciality Homeopathy — autism & child neurology specialist Dr. Ketan Patel.',
      alternates: { canonical: `${SITE_URL}/${slug}` },
    };
  }

  const { cityName, stateName, clinicArea, visitType, uniqueFact } = config;
  const canonicalUrl = `${SITE_URL}/${slug}`;

  const visitLabel =
    visitType === 'teleconsult'
      ? 'Online Teleconsultation'
      : visitType === 'visiting-opd'
      ? 'Visiting OPD & Teleconsultation'
      : 'Clinic & Teleconsultation';

  const title = `Speciality Homeopathy ${cityName} — Autism & Child Neurology | Dr. Ketan Patel`;
  const description = `Speciality Homeopathy in ${cityName}, ${stateName}. ${visitLabel} for Autism (ASD), Cerebral Palsy, ADHD & child neurological conditions. ${uniqueFact ?? ''} Book a consultation with Dr. Ketan Patel.`.trim();

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: `Speciality Homeopathy ${cityName} — Autism & Child Neurology`,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `Speciality Homeopathy — Autism & Child Neurology Care, ${cityName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
