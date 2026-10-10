import React from 'react';
import Link from 'next/link';

export interface CtaBannerProps {
  eyebrow?: string;
  headline?: string;
  lead?: string;
  title?: string;
  subtitle?: string;
  consultationLink?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  phone?: string;
  phoneDisplay?: string;
  whatsappUrl?: string;
}

export default function CtaBanner({
  eyebrow = 'Book a Consultation',
  headline,
  lead,
  title,
  subtitle,
  consultationLink = '/contact',
  primaryText = 'Book a Consultation',
  primaryHref,
  secondaryText,
  secondaryHref,
  phone = '+919898005354',
  phoneDisplay = '+91 98980 05354',
  whatsappUrl = 'https://wa.me/918320131612',
}: CtaBannerProps): React.JSX.Element {
  const displayHeading = title || headline || "Let's explore an individualised support plan.";
  const displayLead =
    subtitle ||
    lead ||
    'If you are seeking thoughtful, individualised homeopathic care alongside your conventional medical team, our experienced physicians are here to help.';
  const mainLink = primaryHref || consultationLink;

  return (
    <section className="cta" style={{ textAlign: 'center', padding: '60px 24px', borderRadius: '16px', margin: '40px 0' }}>
      <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {eyebrow && <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '10px' }}>{eyebrow}</span>}
        <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '14px', color: '#0a1f44' }}>{displayHeading}</h2>
        <p style={{ fontSize: '1rem', color: '#334155', maxWidth: '640px', margin: '0 auto 24px' }}>{displayLead}</p>
        <div className="cta-row" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" href={mainLink}>
            {primaryText}
          </Link>
          {secondaryText && secondaryHref && (
            <Link className="btn btn-ghost" href={secondaryHref}>
              {secondaryText}
            </Link>
          )}
          <a className="btn btn-ghost" href={`tel:${phone}`}>
            Call {phoneDisplay}
          </a>
          <a className="btn btn-ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
