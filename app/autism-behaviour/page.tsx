import type { Metadata } from 'next';
import ChildBehavioralDisorderPage from '../child-behavioral-disorder/page';

export const metadata: Metadata = {
  title: 'PANS, PANDAS & Lyme Disease Autoantibody Treatment',
  description: 'PANS, PANDAS and Lyme disease autoantibody homeopathic care and treatment from Dr. Ketan Patel, Ahmedabad.',
  keywords: 'PANS homeopathy, PANDAS treatment, Lyme disease homeopathy, autoimmune pediatric homeopathy, Dr Ketan Patel',
};

export default function AutismBehaviourPage() {
  return <ChildBehavioralDisorderPage />;
}
