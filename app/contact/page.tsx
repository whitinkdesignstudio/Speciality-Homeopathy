import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Ahmedabad Specialist Homeopathy Centre',
  description:
    'Visit our autism clinic in Vastrapur, Ahmedabad, Gujarat, or our Mumbai & New Delhi clinics. Affordable, transparent consultation. Call to book.',
  keywords:
    'autism doctor in Ahmedabad, autism doctor near me, autism treatment cost, autism doctor consultation fees, affordable autism treatment',
};

export default function ContactPage() {
  return <ContactClient />;
}
