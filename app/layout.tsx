import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopProgressBar from '@/components/TopProgressBar';
import SiteInteractions from '@/components/SiteInteractions';
import { buildRootLayoutSchema } from '@/lib/seo/schema';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://specialityhomeopathy.com'),
  title: 'Autism, Child Neurology & Psychiatry Treatment & Therapy',
  description:
    'Homeopathic autism clinic in Ahmedabad, Gujarat. Individualised, supportive care for children, alongside your medical team. Book a consultation.',
  keywords:
    'autism specialist in Ahmedabad, autism clinic, child autism specialist, autism specialist in Gujarat, diet for autistic child',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

const schemaMarkup = buildRootLayoutSchema();

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
        <TopProgressBar />
        <Header />
        {children}
        <Footer />
        <SiteInteractions />
      </body>
    </html>
  );
}
