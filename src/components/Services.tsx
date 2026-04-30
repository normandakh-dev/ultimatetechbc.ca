"use client";

const services = [
  {
    title: "Web Development",
    desc: "Custom high-performance web applications built with the latest frameworks like Next.js and React.",
    icon: "🌐"
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and serverless architecture to keep your business running smoothly.",
    icon: "☁️"
  },
  {
    title: "AI Integration",
    desc: "Implementing intelligent automation and machine learning to optimize your company workflows.",
    icon: "🤖"
  },
  {
    title: "Cyber Security",
    desc: "Robust security protocols to protect your data and give your clients peace of mind.",
    icon: "🔒"
  },
  {
    title: "UI/UX Design",
    desc: "User-centric designs that focus on providing a seamless and engaging experience for your customers.",
    icon: "🎨"
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile solutions that bring your business directly to your users' pockets.",
    icon: "📱"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center">
            Comprehensive solutions tailored to your unique business needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass fade-in">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          padding: 3rem 2rem;
          border-radius: 24px;
          transition: var(--transition);
        }

        .service-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--primary);
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }

        .service-desc {
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
