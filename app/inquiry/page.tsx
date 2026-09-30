import type { Metadata } from 'next';
import React from 'react';
import InquiryClient from './InquiryClient';

export const metadata: Metadata = {
  title: 'Patient Consultation Inquiry & Case Triage | Speciality Homeopathy',
  description:
    'Submit patient developmental symptoms, birth history, and medical records for expert homeopathic evaluation by Dr. Ketan Patel. In-clinic consultations across Ahmedabad, Mumbai, Delhi, Bangalore, Kolkata, Hyderabad, Chennai, and international video tele-health.',
  keywords:
    'autism consultation inquiry, pediatric neurology appointment, Dr Ketan Patel consultation, homeopathy case triage, developmental delay evaluation',
};

export default function InquiryPage() {
  return <InquiryClient />;
}
