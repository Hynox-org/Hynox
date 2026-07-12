'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const countries = [
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
];

const services = [
  { value: 'web-application', label: 'Web Application' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'shopify-store', label: 'Shopify Store' },
  { value: 'erp-software', label: 'ERP Software' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'others', label: 'Others' },
];

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [interestService, setInterestService] = useState('web-application');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Intersection observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-blur, .reveal-zoom, .reveal-fade-in');
    revealElements.forEach((el) => observer.observe(el));

    // Instant trigger for hero-like elements on top
    setTimeout(() => {
      const topElements = document.querySelectorAll('.reveal-top');
      topElements.forEach((el) => el.classList.add('active'));
    }, 100);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phone: `${country} ${phoneNumber}`,
          service: interestService,
          message,
          source: 'Contact Page'
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setInterestService('web-application');
        setMessage('');
        
        // Auto clear success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        alert('Failed to send message. Please try again or email us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountryObj = countries.find(c => c.code === country) || countries[0];

  return (
    <div className="contact-page-light-wrapper">
      <Header />
      
      <main className="contact-page-container">
        <div className="contact-content-grid">
          
          {/* Left Column: Dark Blue Info Card */}
          <div className="contact-info-panel reveal-top">
            <div className="quote-box why-choose-hynox-card" style={{ padding: 0, overflow: 'hidden', height: '350px' }}>
              <iframe 
                src="https://maps.google.com/maps?q=Sri%20Govindaraj%20Tower,%20R.S.%20Puram,%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact details list vertically below the box inside the panel */}
            <div className="contact-details-list">
              {/* Phone item */}
              <a href="tel:+918870524355" className="contact-detail-card">
                <div className="icon-wrapper">
                  <Phone size={20} />
                </div>
                <div className="detail-card-text">
                  <span className="detail-card-title">Phone</span>
                  <span className="detail-value">+91 8870524355</span>
                </div>
              </a>

              {/* Email item */}
              <a href="mailto:thehynoxofficial@gmail.com" className="contact-detail-card">
                <div className="icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="detail-card-text">
                  <span className="detail-card-title">Email</span>
                  <span className="detail-value">thehynoxofficial@gmail.com</span>
                </div>
              </a>

              {/* Location item */}
              <div className="contact-detail-card pointer-none">
                <div className="icon-wrapper" style={{ alignSelf: 'flex-start', marginTop: '4px' }}>
                  <MapPin size={20} />
                </div>
                <div className="detail-card-text">
                  <span className="detail-card-title">Location</span>
                  <span className="detail-value" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                    3rd Floor, Sri Govindaraj Tower, 38/4, Father Randy St, R.S. Puram, Coimbatore, Tamil Nadu 641002
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="contact-form-panel reveal-top">
            <div className="form-container-clean">
              <div className="form-card-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              {submitSuccess ? (
                <div className="form-success-alert animate-fade-in">
                  <div className="success-icon">
                    <Check size={24} strokeWidth={2.5} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out to HYNOX. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="campus-contact-form">
                  {/* Full Name Field */}
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="phone-input-wrapper">
                      <div className="country-selector">
                        <span className="country-flag">{selectedCountryObj.flag}</span>
                        <span className="country-code-display">{country}</span>
                        <ChevronDown className="dropdown-arrow" size={10} strokeWidth={2.5} />
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="country-select"
                        >
                          {countries.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.name} ({c.code})
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest (Optional)</label>
                    <div className="select-input-wrapper">
                      <select
                        id="service"
                        value={interestService}
                        onChange={(e) => setInterestService(e.target.value)}
                        className="service-select-element"
                      >
                        {services.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className={`btn-send-message ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="spinner"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
