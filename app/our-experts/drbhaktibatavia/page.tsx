import type { Metadata } from 'next';
import DrBhaktiBataviaClient from './DrBhaktiBataviaClient';

export const metadata: Metadata = {
  title: 'Dr. Bhakti Batavia – Homeopath Mumbai | Speciality Homeopathy',
  description:
    'Dr. Bhakti Batavia practices at Labh Homeopathic Clinic, Vile Parle West, Mumbai, offering paediatric and general homeopathic consultations alongside Dr. Ketan Patel.',
  keywords: 'Dr. Bhakti Batavia homeopath, Labh Homeopathic Clinic Mumbai, homeopathy Vile Parle West, Mumbai homeopathic doctor, pediatric homeopathy Mumbai',
};

export default function DrBhaktiBataviaPage() {
  return <DrBhaktiBataviaClient />;
}
