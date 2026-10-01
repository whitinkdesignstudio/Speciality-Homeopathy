import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Clinic in Mumbai Vile Parle | Dr. Ketan Patel Centre',
  description:
    'Visit our Mumbai homeopathic clinic at Vile Parle East. Expert consultations by Dr. Ketan Patel for autism, pediatric neurology, and chronic disorders.',
  keywords:
    'homeopathy clinic Mumbai, autism doctor Mumbai, Vile Parle homeopathy, Dr Ketan Patel Mumbai, child specialist Mumbai',
};

export default function MumbaiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
