import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Clinic Secunderabad MG Road | Dr. Ketan Patel Centre',
  description:
    'Consult Dr. Ketan Patel at MG Road, Secunderabad. Advanced homeopathic treatment for developmental delays, autism spectrum, and pediatric conditions.',
  keywords:
    'homeopathy clinic Secunderabad, MG Road homeopathy, autism doctor Secunderabad, developmental delay treatment Telangana',
};

export default function SecunderabadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
