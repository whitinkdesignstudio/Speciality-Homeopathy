import type { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
  title: "About Us | Speciality Homeopathy — Dr. Ketan Patel",
  description:
    "Meet Speciality Homeopathy — Dr. Ketan Patel's research-led, family-honest approach to supportive homeopathic care for children with autism and neurodevelopmental conditions.",
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
