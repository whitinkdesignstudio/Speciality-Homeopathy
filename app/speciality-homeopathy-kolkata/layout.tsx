import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Clinic Kolkata & East India | Dr. Ketan Patel Centre',
  description:
    'Speciality Homeopathy consultation center in Kolkata serving West Bengal & East India. Advanced care for autism, ADHD, and pediatric neurology.',
  keywords:
    'homeopathy clinic Kolkata, autism specialist Kolkata, child neurology Kolkata, Dr Ketan Patel Kolkata, pediatric care West Bengal',
};

export default function KolkataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
