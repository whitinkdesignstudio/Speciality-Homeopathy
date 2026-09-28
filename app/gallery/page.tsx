import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Patient & Clinic Gallery | Speciality Homeopathy',
  description:
    'Browse photos and videos from Speciality Homeopathy clinics in Ahmedabad and Mumbai — see our facilities, team, and patient moments from around the world.',
  keywords: 'clinic photos Ahmedabad, homeopathy clinic India images, Speciality Homeopathy team, patient gallery',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
