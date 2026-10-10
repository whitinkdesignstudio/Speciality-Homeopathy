import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Clinic Hyderabad Saidabad | Dr. Ketan Patel at VOICE',
  description:
    'Speciality Homeopathy consultation center at VOICE Saidabad, Hyderabad. Expert pediatric autism care and constitutional treatment by Dr. Ketan Patel.',
  keywords:
    'homeopathy clinic Hyderabad, autism treatment Saidabad, VOICE Hyderabad, Dr Ketan Patel Hyderabad, child neurology Hyderabad',
};

export default function HyderabadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
