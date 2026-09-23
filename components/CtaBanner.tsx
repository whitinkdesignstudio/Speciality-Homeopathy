import Link from 'next/link';

interface CtaBannerProps {
  eyebrow?: string;
  headline?: string;
  lead?: string;
  consultationLink?: string;
  phone?: string;
  phoneDisplay?: string;
  whatsappUrl?: string;
}

export default function CtaBanner({
  eyebrow = 'Book a Consultation',
  headline = "Let's explore an individualised support plan.",
  lead = 'If you are seeking thoughtful, individualised homeopathic care alongside your conventional medical team, our experienced physicians are here to help.',
  consultationLink = '/contact',
  phone = '+919898005354',
  phoneDisplay = '+91 98980 05354',
  whatsappUrl = 'https://wa.me/918320131612',
}: CtaBannerProps) {
  return (
    <section className="cta">
      <div className="wrap">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h2 className="reveal d1">{headline}</h2>
        <p className="reveal d1">{lead}</p>
        <div className="cta-row reveal d2">
          <Link className="btn btn-primary" href={consultationLink}>
            Book a Consultation
          </Link>
          <a className="btn btn-ghost" href={`tel:${phone}`}>
            Call {phoneDisplay}
          </a>
          <a className="btn btn-ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp our team
          </a>
        </div>
      </div>
    </section>
  );
}
