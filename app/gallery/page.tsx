import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery | Specialist Homeopathy Treatment & Care Centre',
  description:
    'Browse photos and videos from Speciality Homeopathy clinics in Ahmedabad and Mumbai — see our facilities, team, and patient moments from around the world.',
  keywords: 'clinic photos Ahmedabad, homeopathy clinic India images, Speciality Homeopathy team, patient gallery',
  alternates: {
    canonical: 'https://specialityhomeopathy.com/gallery',
  },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/gallery',
    title: 'Gallery | Speciality Homeopathy',
    description: 'Photos from Speciality Homeopathy Clinic — events, awareness programs & clinic activities.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Gallery | Speciality Homeopathy' }],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
