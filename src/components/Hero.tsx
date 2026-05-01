"use client";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container fade-in">
        <div className="hero-content">
          <div className="gadget-wrapper">
            <svg className="gadget" width="113" height="113" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="outer-ring" />
              <path d="M50 20V30M50 70V80M20 50H30M70 50H80M28.8 28.8L35.9 35.9M64.1 64.1L71.2 71.2M28.8 71.2L35.9 64.1M64.1 35.9L71.2 28.8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="inner-gear" />
              <circle cx="50" cy="50" r="10" fill="currentColor" className="core" />
              <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" className="pulse-ring" />
            </svg>
          </div>
          <span className="hero-tag">
            <span className="underline-text">ULTIMATE TECH</span> GREAT RESULTS
          </span>
          <h1 className="hero-title">
            <span className="side-word">LOW</span> <span className="gradient-text">VOLTAGE</span> <span className="side-word">CABLING</span> <br />
            <span className="side-word">Security System Installs</span>
          </h1>
          <p className="hero-subtitle">
            Specializing in Cat6 installation, structured cabling, and complete security systems. 
            From small cable drops to large infrastructure projects, we provide reliable 
            technical solutions across BC.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get a Free Quote</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 100px;
          background: #050505;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .glow {
          position: absolute;
          width: 60vw;
          height: 60vw;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.12;
          z-index: 0;
        }

        .glow-1 {
          top: -20%;
          right: -10%;
          background: var(--primary);
          animation: float 15s infinite alternate;
        }

        .glow-2 {
          bottom: -20%;
          left: -10%;
          background: var(--secondary);
          animation: float 18s infinite alternate-reverse;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-content {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-tag {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .underline-text {
          animation: textColorCycle 3s infinite alternate ease-in-out;
        }

        @keyframes textColorCycle {
          0% { color: var(--primary); }
          50% { color: var(--secondary); }
          100% { color: var(--accent); }
        }

        /* Gadget Styles */
        .gadget-wrapper {
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .gadget {
          animation: colorCycle 3s infinite alternate ease-in-out;
        }

        .outer-ring {
          animation: rotate 10s infinite linear;
          transform-origin: center;
        }

        .inner-gear {
          animation: rotateRev 5s infinite linear;
          transform-origin: center;
        }

        .pulse-ring {
          animation: pulse 2s infinite ease-out;
          transform-origin: center;
        }

        @keyframes colorCycle {
          0% { color: var(--primary); }
          50% { color: var(--secondary); }
          100% { color: var(--accent); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .hero-title {
          font-size: clamp(2.8rem, 8vw, 4.5rem);
          margin-bottom: 1.5rem;
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .side-word {
          font-size: calc(100% - 13px);
          color: white;
          font-weight: 700;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          line-height: 1.7;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 70vh;
            padding-top: 120px;
          }
          
          .hero-tag {
            font-size: calc(0.95rem - 7px);
            padding: 0.4rem 1.2rem;
          }

          .hero-title {
            font-size: calc(2.2rem - 9px);
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            font-size: calc(1.1rem - 9px);
            margin-bottom: 2rem;
          }

          .hero-btns {
            flex-direction: column;
            align-items: stretch;
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
