const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

// 1. Fix app/locations/page.tsx
const locPath = path.join(appDir, 'locations', 'page.tsx');
let locContent = fs.readFileSync(locPath, 'utf8');
const clientMarker = "'use client';";
const markerIdx = locContent.indexOf(clientMarker);

if (markerIdx !== -1) {
  const clientCode = locContent.slice(markerIdx);
  fs.writeFileSync(path.join(appDir, 'locations', 'LocationsClient.tsx'), clientCode, 'utf8');

  // Rewrite app/locations/page.tsx as Server Component
  const serverCode = `import type { Metadata } from 'next';
import LocationsHubPage from './LocationsClient';

export const metadata: Metadata = {
  title: 'Clinic Locations | Speciality Homeopathy',
  description: 'Find Speciality Homeopathy clinics in Ahmedabad, Mumbai, Delhi, Bangalore, Chennai, Hyderabad & Kolkata. Online teleconsultation available worldwide.',
  alternates: { canonical: 'https://specialityhomeopathy.com/locations' },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/locations',
    title: 'Clinic Locations | Speciality Homeopathy',
    description: 'Find Speciality Homeopathy clinics in Ahmedabad, Mumbai, Delhi, Bangalore, Chennai, Hyderabad & Kolkata. Online teleconsultation available worldwide.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Clinic Locations | Speciality Homeopathy' }],
  },
};

export default function LocationsPage() {
  return <LocationsHubPage />;
}
`;
  fs.writeFileSync(locPath, serverCode, 'utf8');
  console.log('Fixed app/locations/page.tsx and created LocationsClient.tsx');
}

// 2. Fix the 9 city pages by removing 'use client'; entirely (making them pure Server Components)
const citySlugs = [
  'speciality-homeopathy-bangalore',
  'speciality-homeopathy-chennai',
  'speciality-homeopathy-hyderabad',
  'speciality-homeopathy-kolkata',
  'speciality-homeopathy-mumbai',
  'speciality-homeopathy-new-delhi',
  'speciality-homeopathy-secunderabad',
  'speciality-homeopathy-uk',
  'speciality-homeopathy-usa'
];

citySlugs.forEach(slug => {
  const p = path.join(appDir, slug, 'page.tsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    // Remove the comment and 'use client'; directive
    content = content.replace(/\/\/ -- CLIENT CONTENT BELOW --\r?\n'use client';\r?\n?/g, '');
    content = content.replace(/\/\/ ── CLIENT CONTENT BELOW ──[\s\S]*?'use client';\r?\n?/g, '');
    content = content.replace(/'use client';\r?\n?/g, '');
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Cleaned 'use client' from ${slug}/page.tsx`);
  }
});
