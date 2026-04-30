"use client";

const services = [
  {
    title: "Network Cabling & Infrastructure",
    desc: "The backbone of your business. We specialize in Cat6 cable installation, structured cabling, and professional rack organization. Small cable drop jobs are always welcome.",
    icon: "🔌"
  },
  {
    title: "Security & Surveillance",
    desc: "Complete security system and camera installation. We provide high-definition surveillance solutions and integrated security systems to protect your assets 24/7.",
    icon: "🛡️"
  },
  {
    title: "Digital Solutions & Tech Support",
    desc: "Custom website development, mobile app building, and professional computer repair. We provide end-to-end technical support for all your digital needs.",
    icon: "💻"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center">Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle text-center">
            Comprehensive technology and infrastructure solutions for your business.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass fade-in">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.title === "Network Cabling & Infrastructure" && (
                  <>
                    <li>Cat6 Cable Installation</li>
                    <li>Structured Cabling</li>
                    <li>Small Cable Drops</li>
                  </>
                )}
                {service.title === "Security & Surveillance" && (
                  <>
                    <li>Security Camera Install</li>
                    <li>Complete System Setup</li>
                    <li>HD Monitoring</li>
                  </>
                )}
                {service.title === "Digital Solutions & Tech Support" && (
                  <>
                    <li>Website & Phone App Build</li>
                    <li>Computer Repair</li>
                    <li>Software Support</li>
                  </>
                )}
              </ul>
              <p className="service-desc">{service.desc}</p>
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
        }

        .service-title {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
          color: white;
          font-family: 'Outfit', sans-serif;
        }

        .service-list {
          margin-bottom: 1.5rem;
          padding-left: 1.2rem;
        }

        .service-list li {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          list-style-type: disc;
        }

        .service-desc {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}
