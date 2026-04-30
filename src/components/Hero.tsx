"use client";

import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Network Cabling & Infrastructure",
    subtitle: "Expert Cat6 installation, structured cabling, and rack organization. Small cable drops are always welcome.",
    cta: "Get a Quote",
    tag: "Primary Service",
    gradient: "linear-gradient(135deg, var(--primary), var(--secondary))"
  },
  {
    title: "Security & Surveillance Systems",
    subtitle: "Complete security camera installation and integrated monitoring systems to protect your business assets.",
    cta: "Secure Your Site",
    tag: "Protection",
    gradient: "linear-gradient(135deg, var(--secondary), var(--accent))"
  },
  {
    title: "Digital Solutions & Support",
    subtitle: "Professional website & phone app development plus expert computer repair and technical support.",
    cta: "Start Your Project",
    tag: "Innovation",
    gradient: "linear-gradient(135deg, var(--accent), var(--primary))"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <span className="slide-tag" style={{ background: slide.gradient }}>{slide.tag}</span>
            <h1 className="hero-title">
              {slide.title.split('&').map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="gradient-text"> & </span>}
                  {part}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">{slide.cta}</a>
              <a href="#services" className="btn-outline">View All Services</a>
            </div>
          </div>
        ))}

        <div className="slider-controls">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
          width: 50vw;
          height: 50vw;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.1;
          z-index: 0;
        }

        .glow-1 {
          top: -10%;
          right: -5%;
          background: var(--primary);
          animation: float 15s infinite alternate;
        }

        .glow-2 {
          bottom: -10%;
          left: -5%;
          background: var(--secondary);
          animation: float 18s infinite alternate-reverse;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-slide {
          position: absolute;
          width: 100%;
          max-width: 900px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          visibility: hidden;
        }

        .hero-slide.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
          visibility: visible;
        }

        .slide-tag {
          display: inline-block;
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          color: white;
        }

        .hero-title {
          font-size: clamp(2.5rem, 7vw, 4rem);
          margin-bottom: 1.5rem;
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.1;
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

        .slider-controls {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 2;
        }

        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transition: var(--transition);
        }

        .slider-dot:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .slider-dot.active {
          background: var(--primary);
          width: 30px;
          border-radius: 10px;
        }

        @media (max-width: 640px) {
          .hero-btns {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-container {
            height: 600px;
          }
          .slider-controls {
            bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
