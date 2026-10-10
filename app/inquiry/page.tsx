import type { Metadata } from 'next';
import React from 'react';
import InquiryClient from './InquiryClient';

export const metadata: Metadata = {
  title: 'Book Doctor Consultation & Case Triage | Speciality Homeopathy',
  description:
    'Book an in-clinic or video consultation with Dr. Ketan Patel. Submit your case history and medical reports for personalized pediatric and clinical care.',
  keywords:
    'autism consultation inquiry, pediatric neurology appointment, Dr Ketan Patel consultation, homeopathy case triage, developmental delay evaluation',
  alternates: {
    canonical: 'https://specialityhomeopathy.com/inquiry',
  },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/inquiry',
    title: 'Book Homeopathy Consultation | Speciality Homeopathy',
    description: 'Book a consultation with Dr. Ketan Patel — autism, child neurology, and chronic conditions.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Book Homeopathy Consultation | Speciality Homeopathy' }],
  },
};

export default function InquiryPage() {
  return <InquiryClient />;
}
