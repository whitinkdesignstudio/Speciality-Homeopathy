import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Autism, Child Neurology & Psychiatry Treatment & Therapy',
  description:
    'Homeopathic autism clinic in Ahmedabad, Gujarat. Individualised, supportive care for children, alongside your medical team. Book a consultation.',
  keywords:
    'autism specialist in Ahmedabad, autism clinic, child autism specialist, autism specialist in Gujarat, diet for autistic child',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png' },
    ],
    shortcut: '/favicon.ico',
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': 'https://specialityhomeopathy.com/#clinic',
      name: 'Speciality Homeopathy - Autism Clinic',
      alternateName: 'Speciality Homeopathy Clinic & Research Centre',
      url: 'https://specialityhomeopathy.com',
      logo: 'https://specialityhomeopathy.com/logo.png',
      image: 'https://specialityhomeopathy.com/logo.png',
      description:
        'Homeopathic autism clinic in Ahmedabad, Gujarat, offering individualised, supportive care for children, alongside your medical team.',
      telephone: '+91 98980 05354',
      email: 'info@specialityhomeopathy.com',
      medicalSpecialty: 'Homeopathic',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'A-205/206 Himalaya Arcade, Opp. Lake, Nehru Park, Vastrapur',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '380015',
        addressCountry: 'IN',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Ahmedabad',
        },
        {
          '@type': 'State',
          name: 'Gujarat',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
      ],
      founder: {
        '@id': 'https://specialityhomeopathy.com/#physician',
      },
    },
    {
      '@type': 'Physician',
      '@id': 'https://specialityhomeopathy.com/#physician',
      name: 'Dr. Ketan Patel',
      jobTitle: 'Autism Specialist Doctor & Homeopathic Physician',
      medicalSpecialty: 'Homeopathic',
      worksFor: {
        '@id': 'https://specialityhomeopathy.com/#clinic',
      },
      telephone: '+91 98980 05354',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'A-205/206 Himalaya Arcade, Opp. Lake, Nehru Park, Vastrapur',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '380015',
        addressCountry: 'IN',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <SiteInteractions />
      </body>
    </html>
  );
}
