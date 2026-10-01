import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Homeopathy Clinics & Consultation Centers | India & Global',
  description:
    'Find Speciality Homeopathy centers across Mumbai, Delhi, Bangalore, Kolkata, Hyderabad, Chennai, and global video telehealth in the USA and UK.',
  keywords:
    'homeopathy clinic locations, autism treatment centers India, Dr Ketan Patel clinic Mumbai, Delhi homeopathy clinic, Bangalore consultation center',
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
