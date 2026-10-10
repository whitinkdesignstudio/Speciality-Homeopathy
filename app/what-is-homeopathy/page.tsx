import type { Metadata } from 'next';
import WhatIsHomeopathyPage from './WhatIsHomeopathyClient';

export const metadata: Metadata = {
  title: 'What Is Homeopathy? | Speciality Homeopathy',
  description: 'Learn what homeopathy is, how it works, its core principles, and its role in child neurology and autism care at Speciality Homeopathy Clinic.',
  alternates: { canonical: 'https://specialityhomeopathy.com/what-is-homeopathy' },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/what-is-homeopathy',
    title: 'What Is Homeopathy? | Speciality Homeopathy',
    description: 'Learn what homeopathy is, how it works, its core principles, and its role in child neurology and autism care at Speciality Homeopathy Clinic.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'What Is Homeopathy? | Speciality Homeopathy' }],
  },
};

export default function Page() {
  return <WhatIsHomeopathyPage />;
}
