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
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
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
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <div className="contact-page">
        <div className="site-boundary" style={{ width: '100%' }}>
          <div className="contact-grid">
            {/* LEFT COLUMN */}
            <div className="contact-left">
              <h2 className="contact-heading">
                Let's
                <em> Work!</em>
              </h2>
              <p className="contact-sub">
                Whether you're an architecture software company looking to reach students and professionals, or a brand wanting authentic UGC — I'd love to hear from you. All pricing discussed on enquiry.
              </p>
              <div className="contact-links">
                <a
                  href="https://www.instagram.com/bykevinchiang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @bykevinchiang
                </a>
                <a href="mailto:contact@bykevinchiang.com" className="contact-link">
                  contact@bykevinchiang.com
                </a>
                <a href="https://bykevinchiang.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  bykevinchiang.com
                </a>
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
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </form>

              {showSuccess && (
                <div className="form-success show">
                  <p>Thank you! I've received your message and will get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
