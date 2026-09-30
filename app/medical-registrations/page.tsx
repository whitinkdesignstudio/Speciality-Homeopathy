import type { Metadata } from 'next';
import React from 'react';
import MedicalRegistrationsClient from './MedicalRegistrationsClient';

export const metadata: Metadata = {
  title: 'Medical Registrations & Clinical Collaboration | Speciality Homeopathy',
  description:
    'Academic and institutional medical registrations with Speciality Homeopathy Research Center. Open collaboration for individual doctors, child neurologists, infertility centers, special schools, and research fellows.',
  keywords:
    'medical registration homeopathy, clinical collaboration autism, doctor training Dr Ketan Patel, Dan doctors homeopathy, medical institute research affiliation',
};

export default function MedicalRegistrationsPage() {
  return <MedicalRegistrationsClient />;
}
