import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Autism, Child Neurology & Psychiatry Treatment & Therapy',
  description:
    'Homeopathic autism clinic in Ahmedabad, Gujarat. Individualised, supportive care for children, alongside your medical team. Book a consultation.',
  keywords:
    'autism specialist in Ahmedabad, autism clinic, child autism specialist, autism specialist in Gujarat, diet for autistic child',
};

export default function HomePage() {
  return <HomeClient />;
}
