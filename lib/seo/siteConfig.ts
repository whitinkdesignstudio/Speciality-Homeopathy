/**
 * Centralized SEO & Entity Configuration — Speciality Homeopathy
 *
 * Single Source of Truth (SSOT) for all business entities, publisher identity,
 * physician credentials, clinic locations, and Schema.org properties.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://specialityhomeopathy.com').replace(/\/$/, '');

export const SITE_NAME = 'Speciality Homeopathy';
export const SITE_LEGAL_NAME = 'Speciality Homeopathy Clinic & Research Centre';
export const SITE_TAGLINE = 'Autism, Child Neurology & Psychiatry Treatment & Therapy';
export const SITE_DESCRIPTION =
  'Homeopathic autism clinic in Ahmedabad, Gujarat, offering individualised, supportive care for children, alongside your medical team.';

export const LOGO_URL = `${SITE_URL}/logo.png`;
export const LOGO_ID = `${SITE_URL}/#logo`;

export const CLINIC_ENTITY_ID = `${SITE_URL}/#medicalclinic`;
export const WEBSITE_ENTITY_ID = `${SITE_URL}/#website`;
export const PHYSICIAN_ENTITY_ID = `${SITE_URL}/#physician`;

export const CLINIC_CONTACT = {
  telephone: '+91 98980 05354',
  landline: '+91 79 26763575',
  whatsapp: '+91 83201 31612',
  email: 'info@specialityhomeopathy.com',
  address: {
    streetAddress: 'A-205/206 Himalaya Arcade, Opp. Lake, Nehru Park, Vastrapur',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380015',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 23.0368,
    longitude: 72.5323,
  },
  priceRange: '$$',
  medicalSpecialty: 'Homeopathic',
  areasServed: [
    { name: 'Ahmedabad', type: 'City' },
    { name: 'Gujarat', type: 'State' },
    { name: 'India', type: 'Country' },
  ],
  socialProfiles: [
    'https://www.facebook.com/specialityhomeopathy',
    'https://www.instagram.com/specialityhomeopathy',
    'https://www.linkedin.com/in/dr-ketan-patel-51893940/',
    'https://maps.app.goo.gl/D3JH9NKPXyA7Qt9b6',
  ],
};

export const LEAD_PHYSICIAN = {
  name: 'Dr. Ketan Patel',
  id: PHYSICIAN_ENTITY_ID,
  jobTitle: 'Autism Specialist Doctor & Homeopathic Physician',
  medicalSpecialty: 'Homeopathic',
  telephone: '+91 98980 05354',
  profileUrl: `${SITE_URL}/dr-ketan-patel-speciality-homeopathy`,
  sameAs: [
    'https://www.linkedin.com/in/dr-ketan-patel-51893940/',
  ],
};
