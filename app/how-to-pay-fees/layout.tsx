import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Pay Consultation Fees | Secure Payment Options & Bank Info',
  description:
    'Official payment guide for Speciality Homeopathy. Secure UPI, NEFT, IMPS, credit cards, and international wire transfer options for patients.',
  keywords:
    'pay consultation fees, Speciality Homeopathy payment, UPI bank transfer, international wire transfer clinic, patient fees payment',
};

export default function HowToPayFeesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
