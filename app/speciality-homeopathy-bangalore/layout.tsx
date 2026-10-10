import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Clinic in Bangalore Karnataka | Dr. Ketan Patel Care',
  description:
    'Speciality Homeopathy consultation center in Bangalore. Expert constitutional homeopathic care for autism spectrum, child neurology, and chronic illness.',
  keywords:
    'homeopathy clinic Bangalore, autism specialist Bangalore, pediatric neurology Bangalore, Dr Ketan Patel Karnataka, child developmental delays',
};

export default function BangaloreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
