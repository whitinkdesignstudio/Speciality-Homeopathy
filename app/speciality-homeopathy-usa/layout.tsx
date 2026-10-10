import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Doctor USA Online Consultation | Dr. Ketan Patel Care',
  description:
    'Online homeopathic consultations for patients across the USA and Americas. Telehealth care for autism spectrum, child neurology, and chronic illness.',
  keywords:
    'homeopathy doctor USA, online homeopathy consultation USA, autism treatment USA, Dr Ketan Patel Americas, homeopathic telehealth',
};

export default function UsaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
