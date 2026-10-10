const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, '..', 'app', 'what-is-homeopathy', 'page.tsx');
const clientFile = path.join(__dirname, '..', 'app', 'what-is-homeopathy', 'WhatIsHomeopathyClient.tsx');

const content = fs.readFileSync(pageFile, 'utf8');

// The client portion starts at 'use client'; (around line 15)
const marker = "'use client';";
const markerIdx = content.indexOf(marker);

if (markerIdx !== -1) {
  const clientCode = content.slice(markerIdx);
  fs.writeFileSync(clientFile, clientCode, 'utf8');
  console.log('Created WhatIsHomeopathyClient.tsx');

  const serverCode = `import type { Metadata } from 'next';
import WhatIsHomeopathyPage from './WhatIsHomeopathyClient';

export const metadata: Metadata = {
  title: 'What Is Homeopathy? | Speciality Homeopathy',
  description: 'Learn what homeopathy is, how it works, its core principles, and its role in child neurology and autism care at Speciality Homeopathy Clinic.',
  alternates: { canonical: 'https://specialityhomeopathy.com/what-is-homeopathy' },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/what-is-homeopathy',
    title: 'What Is Homeopathy? | Speciality Homeopathy',
    description: 'Learn what homeopathy is, how it works, its core principles, and its role in child neurology and autism care at Speciality Homeopathy Clinic.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'What Is Homeopathy? | Speciality Homeopathy' }],
  },
};

export default function Page() {
  return <WhatIsHomeopathyPage />;
}
`;
  fs.writeFileSync(pageFile, serverCode, 'utf8');
  console.log('Updated app/what-is-homeopathy/page.tsx to Server Component');
}
