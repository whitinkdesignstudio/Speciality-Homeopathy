'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertsOpen, setExpertsOpen] = useState(false);
  const [clinicsOpen, setClinicsOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setExpertsOpen(false);
    setClinicsOpen(false);
    setLinksOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile navigation drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Handle scroll shadow with rAF throttle & state-equality guard
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setExpertsOpen(false);
        setClinicsOpen(false);
        setLinksOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Safely compute the active navigation tab ensuring strict mutual exclusivity
  const cleanPath = (pathname || '').replace(/\/+$/, '') || '/';

  const isImportantLinks =
    cleanPath.startsWith('/important-links') ||
    [
      '/autismhistory',
      '/autism-history',
      '/casestudies',
      '/case-studies',
      '/medicaltips',
      '/medical-tips',
      '/gallery',
      '/print-media',
      '/videos',
      '/what-is-homeopathy',
      '/how-to-pay-fees',
      '/medical-registrations',
      '/therapy-for-ability',
      '/inquiry',
    ].includes(cleanPath);

  const isAbout = cleanPath === '/aboutus' || cleanPath === '/about-us';
  const isExperts = cleanPath.startsWith('/our-doctors') || cleanPath.startsWith('/our-experts') || cleanPath.startsWith('/dr-');
  const isResearch = cleanPath === '/research-center' || cleanPath === '/researchcenter';
  const isContact = cleanPath === '/contact' || cleanPath === "/contact";
  const isLocations = cleanPath === '/locations' || cleanPath.startsWith('/speciality-homeopathy-');
  const isTreatments =
    cleanPath === '/treatments' ||
    cleanPath.startsWith('/treatments/') ||
    cleanPath === '/care-areas' ||
    cleanPath.startsWith('/care-areas/');

  // Strict mutual exclusivity: Home is ONLY active when exactly at root and no other section is active
  const isHome =
    cleanPath === '/' &&
    !isImportantLinks &&
    !isAbout &&
    !isExperts &&
    !isResearch &&
    !isContact &&
    !isLocations &&
    !isTreatments;

  return (
    <header
      id="header"
      ref={headerRef}
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="header-container">
        {/* Brand Logo */}
        <Link prefetch={true} href="/" className="header-brand" aria-label="Speciality Homeopathy Home">
          <Image
            src="/logo.png"
            alt="Speciality Homeopathy"
            className="header-logo-img"
            width={280}
            height={76}
            loading="eager"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="header-nav" aria-label="Main Navigation">
          <ul className={`navlinks ${mobileOpen ? 'show' : ''}`} id="navlinks">
            {/* 1. Home */}
            <li className="nav-item">
              <Link prefetch={true} href="/"
                className={`nav-link ${isHome ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* 2. About Us */}
            <li className="nav-item">
              <Link prefetch={true} href="/about-us"
                className={`nav-link ${isAbout ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
            </li>

            {/* 3. Our Experts ⌵ */}
            <li
              className={`nav-item has-dropdown ${expertsOpen ? 'open' : ''} ${isExperts ? 'child-active' : ''
                }`}
              onMouseEnter={() => {
                if (typeof window !== 'undefined' && window.innerWidth > 992) setExpertsOpen(true);
              }}
              onMouseLeave={() => {
                if (typeof window !== 'undefined' && window.innerWidth > 992) setExpertsOpen(false);
              }}
            >
              <button
                type="button"
                className={`dropdown-toggle ${isExperts ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setExpertsOpen((prev) => !prev);
                  setLinksOpen(false);
                }}
                aria-expanded={expertsOpen}
              >
                <span>Our Experts</span>
                <svg
                  className="chevron-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <ul className={`dropdown-menu ${expertsOpen ? 'show open' : ''}`}>
                <li>
                  <Link prefetch={true} href="/dr-ketan-patel-speciality-homeopathy"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dr. Ketan Patel
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/dr-kamal-patel-speciality-homeopathy"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dr. Kamal Patel
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/dr-bhakti-batavia-speciality-homeopathy"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dr. Bhakti Batavia
                  </Link>
                </li>
              </ul>
            </li>

            {/* 4. Treatments */}
            <li className="nav-item">
              <Link prefetch={true} href="/treatments"
                className={`nav-link ${isTreatments ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Treatments
              </Link>
            </li>

            {/* 5. Research Center */}
            <li className="nav-item">
              <Link prefetch={true} href="/research-center"
                className={`nav-link ${isResearch ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Research Center
              </Link>
            </li>

            {/* 6. Contact Us */}
            <li className="nav-item">
              <Link prefetch={true} href="/contact"
                className={`nav-link ${isContact ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </li>

            {/* 7. Clinics & Branches ⌵ */}
            <li
              className={`nav-item has-dropdown ${clinicsOpen ? 'open' : ''} ${isLocations ? 'child-active' : ''}`}
              onMouseEnter={() => {
                if (typeof window !== 'undefined' && window.innerWidth > 992) setClinicsOpen(true);
              }}
              onMouseLeave={() => {
                if (typeof window !== 'undefined' && window.innerWidth > 992) setClinicsOpen(false);
              }}
            >
              <button
                type="button"
                className={`dropdown-toggle ${isLocations ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setClinicsOpen((prev) => !prev);
                  setExpertsOpen(false);
                  setLinksOpen(false);
                }}
                aria-expanded={clinicsOpen}
              >
                <span>Clinics</span>
                <svg
                  className="chevron-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <ul className={`dropdown-menu ${clinicsOpen ? 'show open' : ''}`}>
                <li>
                  <Link prefetch={true} href="/locations" onClick={() => setMobileOpen(false)}>
                    All Clinics &amp; Centers
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-mumbai" onClick={() => setMobileOpen(false)}>
                    Mumbai (Vile Parle)
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-new-delhi" onClick={() => setMobileOpen(false)}>
                    New Delhi (Rajouri Garden)
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-kolkata" onClick={() => setMobileOpen(false)}>
                    Kolkata &amp; East India
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-hyderabad" onClick={() => setMobileOpen(false)}>
                    Hyderabad (VOICE Saidabad)
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-secunderabad" onClick={() => setMobileOpen(false)}>
                    Secunderabad (MG Road)
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-bangalore" onClick={() => setMobileOpen(false)}>
                    Bangalore Center
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-chennai" onClick={() => setMobileOpen(false)}>
                    Chennai Center
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-usa" onClick={() => setMobileOpen(false)}>
                    USA &amp; Americas Online
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/speciality-homeopathy-uk" onClick={() => setMobileOpen(false)}>
                    London UK &amp; Europe Online
                  </Link>
                </li>
              </ul>
            </li>

            {/* 8. Important Links ⌵ */}
            <li
              className={`nav-item has-dropdown ${linksOpen ? 'open' : ''} ${isImportantLinks ? 'child-active' : ''
                }`}
              onMouseEnter={() => {
                if (typeof window !== 'undefined' && window.innerWidth > 992) setLinksOpen(true);
              }}
              onMouseLeave={() => {
                if (typeof window !== 'undefined' && window.innerWidth > 992) setLinksOpen(false);
              }}
            >
              <button
                type="button"
                className={`dropdown-toggle ${isImportantLinks ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setLinksOpen((prev) => !prev);
                  setExpertsOpen(false);
                  setClinicsOpen(false);
                }}
                aria-expanded={linksOpen}
              >
                <span>Important Links</span>
                <svg
                  className="chevron-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <ul className={`dropdown-menu ${linksOpen ? 'show open' : ''}`}>
                <li>
                  <Link prefetch={true} href="/what-is-homeopathy" onClick={() => setMobileOpen(false)}>
                    What is Homeopathy?
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/inquiry" onClick={() => setMobileOpen(false)}>
                    Consultation Inquiry
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/how-to-pay-fees" onClick={() => setMobileOpen(false)}>
                    How to Pay Fees
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/therapy-for-ability" onClick={() => setMobileOpen(false)}>
                    Therapy For Ability (Delhi)
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/medical-registrations" onClick={() => setMobileOpen(false)}>
                    Medical Registrations
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/casestudies" onClick={() => setMobileOpen(false)}>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/medicaltips" onClick={() => setMobileOpen(false)}>
                    Medical Tips
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/autismhistory" onClick={() => setMobileOpen(false)}>
                    Autism History
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/gallery" onClick={() => setMobileOpen(false)}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/print-media" onClick={() => setMobileOpen(false)}>
                    Print Media
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="/videos" onClick={() => setMobileOpen(false)}>
                    Videos
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`menu-toggle ${mobileOpen ? 'is-active' : ''}`}
          id="menuToggle"
          aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
