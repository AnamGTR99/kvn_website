'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/maqaweng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <main>
        <div className="contact-page">
          <div className="thankyou-card">
            <h1 className="thankyou-heading">Thank you.</h1>
            <p className="thankyou-sub">Your message has been sent successfully.<br />I&apos;ll get back to you as soon as possible.</p>
            <div className="thankyou-links">
              <a href="/" className="thankyou-btn">Back to home</a>
              <a href="/contact" className="thankyou-btn secondary" onClick={(e) => { e.preventDefault(); setShowSuccess(false); }}>Send another</a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="contact-page">
        <div className="site-boundary" style={{ width: '100%' }}>
          <div className="contact-grid">
            {/* LEFT COLUMN */}
            <div className="contact-left">
              <h1 className="contact-heading">
                Let&apos;s
                <em> Work.</em>
              </h1>
              <p className="contact-sub">
                Have a project in mind, or just want to say hello? Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>
              <div className="contact-links">
                <a href="mailto:contact@bykevinchiang.com" className="contact-link">
                  contact@bykevinchiang.com
                </a>
                <a
                  href="https://www.instagram.com/bykevinchiang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @bykevinchiang
                </a>
                <span className="contact-link">
                  Melbourne, Australia
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button type="submit" className="contact-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
