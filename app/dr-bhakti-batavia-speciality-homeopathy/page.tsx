import type { Metadata } from 'next';
import DrBhaktiBataviaClient from '../our-experts/drbhaktibatavia/DrBhaktiBataviaClient';

export const metadata: Metadata = {
  title: 'Dr. Bhakti Batavia | Specialist Homeopathic Physician',
  description:
    'Dr. Bhakti Batavia provides compassionate paediatric and general homeopathic care at Labh Homeopathic Clinic, Vile Parle West, Mumbai.',
  keywords: 'Dr. Bhakti Batavia homeopath, Labh Homeopathic Clinic Mumbai, homeopathy Vile Parle West, Mumbai homeopathic doctor, pediatric homeopathy Mumbai',
};

export default function DrBhaktiBataviaPage() {
  return <DrBhaktiBataviaClient />;
}
