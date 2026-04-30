"use client";

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container contact-container">
        <div className="contact-info fade-in">
          <h2 className="section-title">Let's Build <br /><span className="gradient-text">Something Great</span></h2>
          <p className="contact-desc">
            Ready to take your business to the next level? Drop us a message and our 
            experts will get back to you within 24 hours.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <h4>Office</h4>
                <p>123 Tech Avenue, Silicon Valley, CA</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>778-882-4554 / 604-729-4240</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>hello@ultimatetechbc.ca</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form glass fade-in" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required 
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary submit-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
          {status === 'error' && <p className="status-msg error">Something went wrong. Please try again.</p>}
        </form>
      </div>

      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .contact-desc {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin: 2rem 0;
          line-height: 1.7;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .contact-item .icon {
          font-size: 1.5rem;
          background: var(--glass-bg);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .contact-item h4 {
          margin-bottom: 0.2rem;
        }

        .contact-item p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .contact-form {
          padding: 3rem;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .form-group input, .form-group textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          padding: 1rem;
          border-radius: 12px;
          color: white;
          font-family: inherit;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
          outline: none;
          background: rgba(255, 255, 255, 0.1);
        }

        .submit-btn {
          width: 100%;
          margin-top: 1rem;
        }

        .status-msg {
          text-align: center;
          font-size: 0.9rem;
          margin-top: 1rem;
        }

        .status-msg.success { color: #10b981; }
        .status-msg.error { color: #ef4444; }

        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
}
