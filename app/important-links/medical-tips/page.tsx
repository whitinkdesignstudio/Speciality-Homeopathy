import type { Metadata } from 'next';
import MedicalTipsClient from './MedicalTipsClient';

export const metadata: Metadata = {
  title: 'Medical Tips | Specialist Homeopathy Health & Wellness',
  description:
    'Practical supportive advice on speech delay, sleep restlessness, and diet for children on the autism spectrum, by experienced homeopaths.',
  keywords:
    'how to increase speech in autistic child, autistic child not sleeping, how to improve focus in autistic child, diet for autistic child',
};

export default function MedicalTipsPage() {
  return <MedicalTipsClient />;
}
