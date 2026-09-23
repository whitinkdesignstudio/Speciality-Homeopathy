import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Speciality Homeopathy — Dr. Ketan Patel | Constitutional & Sequential Homeopathy',
  description:
    'Pioneering clinical, constitutional & sequential homeopathy in Ahmedabad. Dedicated care for autism, developmental delays, chronic respiratory conditions, fertility, and rare paediatric conditions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <SiteInteractions />
      </body>
    </html>
  );
}
