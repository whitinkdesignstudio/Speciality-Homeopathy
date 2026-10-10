import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is Homeopathy? An In-Depth Study of Homeopathic Science | Dr. Ketan Patel',
  description:
    'Comprehensive homeopathy overview by Dr. Ketan Patel: history, Organon of Medicine, core laws, potentisation, dispensing, and modern paradigms.',
  keywords:
    'what is homeopathy, homeopathic science, Samuel Hahnemann 1796, Organon of Medicine 1810, similia similibus curentur, potentisation, Avogadro paradox, classical homeopathy vs polypharmacy, Dr Ketan Patel',
};

export default function WhatIsHomeopathyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
