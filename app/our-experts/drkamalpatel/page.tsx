import type { Metadata } from 'next';
import DrKamalPatelClient from './DrKamalPatelClient';

export const metadata: Metadata = {
  title: 'Dr. Kamal Patel | Specialist Homeopathic Physician',
  description:
    'Dr. Kamal Patel is a homeopathic physician at Speciality Homeopathy, Ahmedabad, working alongside Dr. Ketan Patel to provide paediatric and general homeopathic care.',
  keywords: 'Dr. Kamal Patel homeopath, homeopathic doctor Ahmedabad, pediatric homeopathy Ahmedabad, Speciality Homeopathy doctors, general homeopathy India',
};

export default function DrKamalPatelPage() {
  return <DrKamalPatelClient />;
}
