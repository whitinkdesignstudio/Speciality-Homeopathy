'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertsOpen, setExpertsOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setExpertsOpen(false);
    setLinksOpen(false);
  }, [pathname]);

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
        setLinksOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const isHome = pathname === '/';
  const isAbout = pathname === '/about-us';
  const isExperts = pathname.startsWith('/our-doctors') || pathname.startsWith('/our-experts');
  const isTreatments = pathname === '/treatments' || pathname === '/care-areas';
  const isResearch = pathname === '/research-center';
  const isContact = pathname === '/contact';
  const isMilestone = pathname === '/developmental-delays' || pathname === '/milestonecare';
  const isImportantLinks = pathname.startsWith('/important-links');

  return (
    <header
      id="header"
      ref={headerRef}
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="header-container">
        {/* Brand Logo */}
        <Link href="/" className="header-brand" aria-label="Speciality Homeopathy Home">
          <Image
            src="/logo.png"
            alt="Speciality Homeopathy"
            className="header-logo-img"
            width={280}
            height={76}
            priority
            fetchPriority="high"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="header-nav" aria-label="Main Navigation">
          <ul className={`navlinks ${mobileOpen ? 'show' : ''}`} id="navlinks">
            {/* 1. Home */}
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isHome ? 'active' : ''}`}>
                Home
              </Link>
            </li>

            {/* 2. About Us */}
            <li className="nav-item">
              <Link href="/about-us" className={`nav-link ${isAbout ? 'active' : ''}`}>
                About Us
              </Link>
            </li>

            {/* 3. Our Experts ⌵ */}
            <li
              className={`nav-item has-dropdown ${expertsOpen ? 'open' : ''} ${
                isExperts ? 'child-active' : ''
              }`}
              onMouseEnter={() => {
                if (window.innerWidth > 992) setExpertsOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 992) setExpertsOpen(false);
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
              <ul className={`dropdown-menu ${expertsOpen ? 'show' : ''}`}>
                <li>
                  <Link href="/our-experts/dr-ketan-patel">Dr. Ketan Patel</Link>
                </li>
                <li>
                  <Link href="/our-experts/drkamalpatel">Dr. Kamal Patel</Link>
                </li>
                <li>
                  <Link href="/our-experts/drbhaktibatavia">Dr. Bhakti Batavia</Link>
                </li>
              </ul>
            </li>

            {/* 4. Treatments */}
            <li className="nav-item">
              <Link href="/treatments" className={`nav-link ${isTreatments ? 'active' : ''}`}>
                Treatments
              </Link>
            </li>

            {/* 5. Research Center */}
            <li className="nav-item">
              <Link
                href="/research-center"
                className={`nav-link ${isResearch ? 'active' : ''}`}
              >
                Research Center
              </Link>
            </li>

            {/* 6. Contact Us */}
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${isContact ? 'active' : ''}`}>
                Contact Us
              </Link>
            </li>

            {/* 7. MilestoneCare */}
            <li className="nav-item">
              <Link
                href="/developmental-delays"
                className={`nav-link ${isMilestone ? 'active' : ''}`}
              >
                MilestoneCare
              </Link>
            </li>

            {/* 8. Important Links ⌵ */}
            <li
              className={`nav-item has-dropdown ${linksOpen ? 'open' : ''} ${
                isImportantLinks ? 'child-active' : ''
              }`}
              onMouseEnter={() => {
                if (window.innerWidth > 992) setLinksOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 992) setLinksOpen(false);
              }}
            >
              <button
                type="button"
                className={`dropdown-toggle ${isImportantLinks ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setLinksOpen((prev) => !prev);
                  setExpertsOpen(false);
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
              <ul className={`dropdown-menu ${linksOpen ? 'show' : ''}`}>
                <li>
                  <Link href="/important-links/autism-history">Autism History</Link>
                </li>
                <li>
                  <Link href="/important-links/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/important-links/medical-tips">Medical Tips</Link>
                </li>
                <li>
                  <Link href="/important-links/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/important-links/print-media">Print Media</Link>
                </li>
                <li>
                  <Link href="/important-links/videos">Videos</Link>
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
