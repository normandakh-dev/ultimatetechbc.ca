"use client";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container about-grid">
        <div className="about-image glass fade-in">
          <div className="image-placeholder">
            {/* You can replace this with an actual image */}
            <div className="abstract-shape"></div>
          </div>
        </div>
        
        <div className="about-text fade-in">
          <h2 className="section-title">Who We Are</h2>
          <p className="about-desc">
            At ULTIMATE TECH, we believe that technology should empower, not complicate. 
            Founded in 2024, our mission is to provide businesses with the digital tools 
            they need to scale effectively and sustainably.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number gradient-text">100+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">50+</span>
              <span className="stat-label">Global Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">24/7</span>
              <span className="stat-label">Expert Support</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image {
          height: 500px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #111, #222);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .abstract-shape {
          width: 200px;
          height: 200px;
          background: var(--primary);
          filter: blur(80px);
          opacity: 0.4;
          border-radius: 50%;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .about-desc {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-image {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
}
