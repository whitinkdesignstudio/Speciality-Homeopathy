import type { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
  title: 'About Our Autism Clinic | Speciality Homeopathy',
  description:
    "Meet the team behind our autism clinic in Ahmedabad: research-led, individualised homeopathic care alongside your child's medical team.",
  keywords:
    'autism clinic, genetic test for autism, whole exome sequencing for autism child',
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
