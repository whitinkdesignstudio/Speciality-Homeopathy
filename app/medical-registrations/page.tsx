import type { Metadata } from 'next';
import React from 'react';
import MedicalRegistrationsClient from './MedicalRegistrationsClient';

export const metadata: Metadata = {
  title: 'Medical Registrations & Certifications | Dr. Ketan Patel Clinic',
  description:
    'Verify official medical licenses, board registrations, and credentials of Dr. Ketan Patel and Dr. Kamal Patel at Speciality Homeopathy clinic.',
  keywords:
    'medical registrations, Dr Ketan Patel license, Gujarat Homeopathic Council, Central Council of Homeopathy, certified homeopathy doctor',
};

export default function MedicalRegistrationsPage() {
  return <MedicalRegistrationsClient />;
}
