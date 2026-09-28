import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  disclaimerText?: string;
}

export default function Footer({ disclaimerText }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const defaultDisclaimer =
    'Speciality Homeopathy provides supportive homeopathic care and family guidance for autism, ADHD, cerebral palsy, Down syndrome, and pediatric neurological conditions. Neurological and genetic conditions are complex and highly individual. Homeopathic supportive therapy does not claim to cure genetic alterations. Results vary from child to child. Consult our doctor for an individual assessment. For urgent medical concerns, contact your doctor or emergency services.';

  return (
    <footer className="site-footer">
      <div className="footer-wrap">
        {/* Top Medical Disclaimer Card */}
        <div className="footer-disclaimer">
          <p>
            <strong className="disclaimer-title">Medical disclaimer.</strong> {disclaimerText || defaultDisclaimer}
          </p>
        </div>

        {/* Main 3-Column Footer */}
        <div className="footer-grid">
          {/* Column 1: Brand Logo, Description & Socials */}
          <div className="footer-col-brand">
            <Link href="/" className="footer-brand" aria-label="Speciality Homeopathy Home">
              <Image
                src="/logo.png"
                alt="Speciality Homeopathy - Autism Clinic in Ahmedabad, Gujarat"
                width={240}
                height={65}
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-brand-desc">
              Speciality Homeopathy is a dedicated autism clinic in Ahmedabad, Gujarat, providing supportive homeopathic care for children and families — offered honestly and always alongside your medical team.
            </p>
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com/in/dr-ketan-patel-51893940/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Column 2: Explore Navigation Links */}
          <div className="footer-col">
            <h5 className="footer-col-title">EXPLORE</h5>
            <ul className="footer-links-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/our-experts">Experts</Link>
              </li>
              <li>
                <Link href="/treatments">Treatments</Link>
              </li>
              <li>
                <Link href="/research-center">Research Center</Link>
              </li>
              <li>
                <Link href="/important-links">Important Links</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="footer-col">
            <h5 className="footer-col-title">CONTACT</h5>
            <ul className="footer-contact-list">
              <li>
                <a
                  href="https://maps.app.goo.gl/D3JH9NKPXyA7Qt9b6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A-205/206 Himalaya Arcade, Opp. Lake, Nehru Park, Vastrapur, Ahmedabad 380015, Gujarat
                </a>
              </li>
              <li>
                <a href="tel:+919898005354">+91 98980 05354</a>
              </li>
              <li>
                <a href="mailto:info@specialityhomeopathy.com">info@specialityhomeopathy.com</a>
              </li>
              <li>
                <a href="https://wa.me/918320131612" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +91 83201 31612
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © {currentYear} Speciality Homeopathy - Dr. Ketan Patel. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">T &amp; C</Link>
            <Link href="/medical-disclaimer">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
