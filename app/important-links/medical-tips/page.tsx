import type { Metadata } from 'next';
import MedicalTipsClient from './MedicalTipsClient';

export const metadata: Metadata = {
  title: 'Autism Care Tips: Speech, Sleep & Focus | Homeopathy',
  description:
    'Practical supportive advice on speech delay, sleep restlessness, and diet for children on the autism spectrum, by experienced homeopaths.',
  keywords:
    'how to increase speech in autistic child, autistic child not sleeping, how to improve focus in autistic child, diet for autistic child',
};

export default function MedicalTipsPage() {
  return <MedicalTipsClient />;
}
