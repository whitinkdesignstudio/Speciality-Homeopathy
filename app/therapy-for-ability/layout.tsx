import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Therapy For Ability Delhi | Integrated OT, Speech & Special Care',
  description:
    'Therapy For Ability in Rajouri Garden, New Delhi offers integrated occupational therapy, speech therapy, and clinical homeopathic care for children.',
  keywords:
    'Therapy For Ability, occupational therapy Rajouri Garden, speech therapy Delhi, sensory integration Delhi, autism therapy center Delhi',
};

export default function TherapyForAbilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
