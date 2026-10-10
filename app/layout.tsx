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

const SITE_URL = 'https://specialityhomeopathy.com';
const OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE_URL),
  title: {
    default: 'Autism, Child Neurology & Psychiatry Treatment | Speciality Homeopathy',
    template: '%s | Speciality Homeopathy',
  },
  description:
    'Speciality Homeopathy Clinic in Ahmedabad, Gujarat — expert homeopathic care for Autism (ASD), Cerebral Palsy, ADHD, Down Syndrome & child neurological conditions. Book a consultation with Dr. Ketan Patel.',
  keywords:
    'autism specialist Ahmedabad, homeopathy for autism, autism clinic Gujarat, child neurology homeopathy, Dr Ketan Patel, autism treatment India, cerebral palsy homeopathy, ADHD homeopathy',
  authors: [{ name: 'Dr. Ketan Patel', url: `${SITE_URL}/dr-ketan-patel-speciality-homeopathy` }],
  creator: 'Speciality Homeopathy',
  publisher: 'Speciality Homeopathy',
  alternates: {
    canonical: SITE_URL,
  },
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Speciality Homeopathy',
    title: 'Autism & Child Neurology Homeopathy Clinic | Speciality Homeopathy, Ahmedabad',
    description:
      'Expert homeopathic care for Autism (ASD), Cerebral Palsy, ADHD & child neurological conditions. Dr. Ketan Patel — 34+ years experience. Clinics in Ahmedabad, Mumbai, Delhi & online across India.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Speciality Homeopathy Clinic — Autism & Child Neurology Care, Ahmedabad',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autism & Child Neurology Homeopathy | Speciality Homeopathy, Ahmedabad',
    description:
      'Expert homeopathic care for Autism (ASD), Cerebral Palsy, ADHD & neurological conditions. Dr. Ketan Patel — 34+ years. Book a consultation.',
    images: [OG_IMAGE],
    creator: '@specialityhomeopathy',
    site: '@specialityhomeopathy',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/logo.png' }],
    shortcut: '/favicon.ico',
  },
  // ── SEARCH CONSOLE VERIFICATION ───────────────────────────────────────
  // TODO: Replace placeholder values with your actual verification codes.
  // To obtain: Google Search Console → Add Property → HTML Tag method.
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  //   other: { 'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE' },
  // },
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
        {/* ── ANALYTICS ────────────────────────────────────────────────────────
            TODO: Once you have a GA4 Measurement ID (format: G-XXXXXXXXXX):
            1. Run: npm install @next/third-parties
            2. Import: import { GoogleAnalytics } from '@next/third-parties/google'
            3. Add inside <body>: <GoogleAnalytics gaId="G-XXXXXXXXXX" />
            ─────────────────────────────────────────────────────────────────── */}
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
