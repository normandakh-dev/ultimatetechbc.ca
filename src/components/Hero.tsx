"use client";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-content fade-in">
        <h1 className="hero-title">
          Elevate Your Business with <br />
          <span className="gradient-text">Future-Ready</span> Solutions
        </h1>
        <p className="hero-subtitle">
          We combine cutting-edge technology with strategic innovation to help your company 
          thrive in the digital era. Experience excellence like never before.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">Get Started Now</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(circle at 50% 50%, #111 0%, #050505 100%);
        }

        .glow {
          position: absolute;
          width: 40vw;
          height: 40vw;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          z-index: -1;
        }

        .glow-1 {
          top: -10%;
          right: -5%;
          background: var(--primary);
          animation: float 10s infinite alternate;
        }

        .glow-2 {
          bottom: -10%;
          left: -5%;
          background: var(--secondary);
          animation: float 12s infinite alternate-reverse;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          margin-bottom: 1.5rem;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .hero-btns {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </section>
  );
}
