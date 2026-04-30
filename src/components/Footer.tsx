"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="gradient-text">ULTIMATE</span> TECH
            </Link>
            <p className="footer-desc">
              Your trusted partner for Network Cabling, Security Systems, and Digital Solutions. 
              Providing professional Cat6 installation and surveillance systems across BC.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>Network Cabling</li>
              <li>Security Systems</li>
              <li>Digital Solutions</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>778-882-4554</p>
            <p>604-729-4240</p>
            <p>service@ultimatetechbbc.ca</p>
            <p className="footer-address">5676 Smith Avenue, Unit 106, Burnaby BC V5H 2K9</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ULTIMATE TECH. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid var(--glass-border);
          padding-bottom: 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .footer-desc {
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 350px;
        }

        .footer h4 {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .footer ul li {
          margin-bottom: 0.8rem;
        }

        .footer ul li a {
          color: var(--text-muted);
        }

        .footer ul li a:hover {
          color: white;
        }

        .footer-social, .footer-contact {
          display: flex;
          flex-direction: column;
        }

        .footer-contact p {
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .footer-address {
          max-width: 250px;
          margin-top: 0.5rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: var(--glass-bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
        }

        .social-icon:hover {
          background: var(--primary);
          transform: translateY(-3px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}
