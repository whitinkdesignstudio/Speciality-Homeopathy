import type { Metadata } from 'next';
import DrBhaktiBataviaClient from '../our-experts/drbhaktibatavia/DrBhaktiBataviaClient';

export const metadata: Metadata = {
  title: 'Dr. Bhakti Batavia | Specialist Homeopathic Physician',
  description:
    'Dr. Bhakti Batavia provides compassionate paediatric and general homeopathic care at Labh Homeopathic Clinic, Vile Parle West, Mumbai.',
  keywords: 'Dr. Bhakti Batavia homeopath, Labh Homeopathic Clinic Mumbai, homeopathy Vile Parle West, Mumbai homeopathic doctor, pediatric homeopathy Mumbai',
  alternates: {
    canonical: 'https://specialityhomeopathy.com/dr-bhakti-batavia-speciality-homeopathy',
  },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/dr-bhakti-batavia-speciality-homeopathy',
    title: 'Dr. Bhakti Batavia | Speciality Homeopathy',
    description: 'Consulting homeopathic physician at Speciality Homeopathy and Labh Homeopathic Clinic, Mumbai.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Dr. Bhakti Batavia | Speciality Homeopathy' }],
  },
};

export default function DrBhaktiBataviaPage() {
  return <DrBhaktiBataviaClient />;
}
