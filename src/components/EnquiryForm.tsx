'use client';

import { useState } from 'react';

export default function EnquiryForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/maqaweng', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setCompany('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="cform-thankyou">
        <h3 className="cform-thankyou-heading">Thank you.</h3>
        <p className="cform-thankyou-sub">Your enquiry has been sent.<br />I&apos;ll get back to you soon.</p>
        <button
          className="cbtn"
          onClick={() => setSubmitted(false)}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Company / brand"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Tell me about your project..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit" className="cbtn" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  );
}
