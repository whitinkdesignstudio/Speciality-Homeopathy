import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Speciality Homeopathy',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 700, color: '#2e7d32', marginBottom: '0.5rem' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#555', marginBottom: '2rem', maxWidth: '480px' }}>
        Sorry, we could not find the page you were looking for. It may have been moved or deleted.
      </p>
      <Link
        href="/"
        style={{
          backgroundColor: '#2e7d32',
          color: '#fff',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1rem',
        }}
      >
        Return to Home
      </Link>
    </main>
  );
}
