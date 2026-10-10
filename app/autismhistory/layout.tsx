import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Autism History & Neurodevelopmental Care | Dr. Ketan Patel',
  description:
    'Explore the clinical history, genetic markers, syndromic autism, and brain injury recovery with supportive homeopathy by Dr. Ketan Patel.',
  keywords:
    'whole exome sequencing autism, genetic test for autism, syndromic autism, profound autism treatment, PVL cerebral palsy homeopathy, HIE brain injury child, Dr Ketan Patel autism specialist',
};

export default function AutismHistoryAliasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
