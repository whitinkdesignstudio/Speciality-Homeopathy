import type { Metadata } from 'next';
import HomeClient from './HomeClient';

const SITE_URL = 'https://specialityhomeopathy.com';

export const metadata: Metadata = {
  title: 'Autism, Child Neurology & Psychiatry Treatment | Speciality Homeopathy',
  description:
    'Speciality Homeopathy Clinic — expert homeopathic care for Autism (ASD), Cerebral Palsy, ADHD, Down Syndrome & child neurological conditions in Ahmedabad, Gujarat. Book a consultation with Dr. Ketan Patel.',
  keywords:
    'autism specialist Ahmedabad, homeopathy for autism, autism clinic Gujarat, child neurology homeopathy, Dr Ketan Patel, autism treatment India',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Autism & Child Neurology Homeopathy | Speciality Homeopathy, Ahmedabad',
    description:
      'Expert homeopathic care for Autism (ASD), Cerebral Palsy, ADHD & neurological conditions in Ahmedabad. Dr. Ketan Patel — 34+ years. Teleconsultation available across India.',
    images: [
      {
        url: `${SITE_URL}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'Speciality Homeopathy Clinic — Autism & Child Neurology Care, Ahmedabad',
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
