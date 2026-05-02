"use client";

const EthernetIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glowing-icon">
    <rect x="6" y="2" width="12" height="10" rx="2" />
    <path d="M10 12v10" />
    <path d="M14 12v10" />
    <path d="M6 22h12" />
    <path d="M9 2v3M12 2v3M15 2v3" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const WifiIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const services = [
  {
    title: "Structured Cabling Installation",
    desc: "Design and install Cat5e, Cat6, Cat6A, Cat7, and fiber optic systems.",
    icon: <EthernetIcon />,
    items: [
      { name: "Network Cable Pulling & Termination", detail: "Running cables through walls/ceilings, terminating into jacks, patch panels, or racks." },
      { name: "Fiber Optic Installation", detail: "Single-mode and multi-mode fiber, splicing, testing." },
      { name: "Cable Management", detail: "Tray systems, conduits, labeling, and organization for clean infrastructure." },
      { name: "Industry Compliance", detail: "Compliance with standards like TIA/EIA and BICSI." }
    ]
  },
  {
    title: "Security & Surveillance",
    desc: "Comprehensive low-voltage wiring and security system implementations.",
    icon: <ShieldIcon />,
    items: [
      { name: "CCTV & NVR/DVR", detail: "IP camera (CCTV) cabling and installation, NVR/DVR setup." },
      { name: "Access & Intercom", detail: "Access control systems (card readers, door strikes) and Intercom systems." },
      { name: "A/V & Automation", detail: "Audio/visual wiring (conference rooms, displays) and Building automation (HVAC)." },
      { name: "Industry Compliance", detail: "Compliance with standards like TIA/EIA and BICSI." }
    ]
  },
  {
    title: "Wireless & Communication",
    desc: "Reliable wireless networks and unified communication setups.",
    icon: <WifiIcon />,
    items: [
      { name: "Wi-Fi Systems", detail: "Wi-Fi access point installation and upgrades." },
      { name: "VoIP Telephony", detail: "VoIP phone system cabling and setup." },
      { name: "Office Phone Systems", detail: "Low cost office phone systems." },
      { name: "Industry Compliance", detail: "Compliance with standards like TIA/EIA and BICSI." }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center">Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle text-center">
            Insured work with full satisfaction guarantee for complete low-voltage solutions including structured cabling, fiber optic installation, network infrastructure setup, Wi-Fi deployment, security system wiring, and ongoing maintenance for residential and commercial environments.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass fade-in">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc-top">{service.desc}</p>
              <ul className="service-list">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="item-name">{item.name}</span>
                    <span className="item-detail">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .service-card {
          padding: 3rem 2rem;
          border-radius: 24px;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--primary);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }

        .glowing-icon {
          filter: drop-shadow(0 0 5px var(--primary));
          animation: iconGlow 2s infinite alternate ease-in-out;
        }

        @keyframes iconGlow {
          0% { filter: drop-shadow(0 0 2px var(--primary)); opacity: 0.8; }
          100% { filter: drop-shadow(0 0 15px var(--accent)); opacity: 1; }
        }

        .service-title {
          font-size: 1.6rem;
          margin-bottom: 0.8rem;
          color: white;
          font-family: 'Outfit', sans-serif;
        }
        
        .service-desc-top {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 1.5rem;
        }

        .service-list {
          margin-bottom: 1.5rem;
          padding-left: 0;
        }

        .service-list li {
          margin-bottom: 1rem;
          list-style-type: none;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #006400;
          font-weight: bold;
        }

        .item-name {
          color: white;
          font-weight: 600;
          display: block;
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
        }

        .item-detail {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.4;
          display: block;
        }
      `}</style>
    </section>
  );
}
