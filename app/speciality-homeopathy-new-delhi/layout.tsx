import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Clinic in New Delhi Rajouri Garden | Dr. Ketan Patel',
  description:
    'Leading homeopathy clinic in Rajouri Garden, New Delhi. Specialized care for autism, speech delay, child neurological disorders, and chronic conditions.',
  keywords:
    'homeopathy clinic New Delhi, autism specialist Delhi, Rajouri Garden clinic, Dr Ketan Patel Delhi, speech delay treatment Delhi',
};

export default function DelhiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
