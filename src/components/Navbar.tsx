"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          <span className="gradient-text">ULTIMATE</span> TECH SERVICES
        </Link>
        <ul className="nav-links">
          <li><Link href="#services">SERVICES</Link></li>
          <li><Link href="#contact">CONTACT</Link></li>
        </ul>
        <div className="nav-contact">
          <a href="tel:7788824554" className="phone-link">778-882-4554</a>
          <a href="tel:6047294240" className="phone-link">604-729-4240</a>
        </div>
        <Link href="#contact" className="btn-primary nav-cta">Contact Us</Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
        }

        .navbar.scrolled {
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(15px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-links a {
          font-weight: 500;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.2rem;
          margin-left: auto;
          margin-right: 2rem;
        }

        .phone-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
        }

        .phone-link:hover {
          color: white;
        }

        .nav-cta {
          padding: 0.6rem 1.5rem;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .nav-links {
            gap: 1.5rem;
          }
          .nav-contact {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
