import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Doctor UK & Europe Online Care | Dr. Ketan Patel Clinic',
  description:
    'Online video consultations for patients across London, UK, and Europe. Personalized homeopathic care for autism, speech delays, and chronic disorders.',
  keywords:
    'homeopathy doctor UK, online homeopathy London, autism treatment Europe, Dr Ketan Patel UK, child neurology video consult UK',
};

export default function UkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
