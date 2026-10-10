'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

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
      <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#c62828', marginBottom: '0.5rem' }}>
        Something went wrong
      </h1>
      <p style={{ color: '#555', marginBottom: '2rem', maxWidth: '480px' }}>
        An unexpected error occurred. You can try again or return to the home page.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={reset}
          style={{
            backgroundColor: '#2e7d32',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Try Again
        </button>
        <Link
          href="/"
          style={{
            backgroundColor: '#eee',
            color: '#333',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
