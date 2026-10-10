import type { Metadata } from 'next';
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
