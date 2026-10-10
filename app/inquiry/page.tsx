import type { Metadata } from 'next';
import React from 'react';
import InquiryClient from './InquiryClient';

export const metadata: Metadata = {
  title: 'Book Doctor Consultation & Case Triage | Speciality Homeopathy',
  description:
    'Book an in-clinic or video consultation with Dr. Ketan Patel. Submit your case history and medical reports for personalized pediatric and clinical care.',
  keywords:
    'autism consultation inquiry, pediatric neurology appointment, Dr Ketan Patel consultation, homeopathy case triage, developmental delay evaluation',
};

export default function InquiryPage() {
  return <InquiryClient />;
}
