'use client';

import { useState, useEffect } from 'react';

const faqs = [
  { q: "What software services does HYNOX provide in Coimbatore?", a: "HYNOX is a custom software development company based in Coimbatore, Tamil Nadu. We specialize in building custom web applications, mobile apps (Android & iOS), enterprise ERP systems, Shopify stores, and custom AI business automation." },
  { q: "Does HYNOX provide custom software development in Coimbatore?", a: "Yes, HYNOX is a custom software company based in Coimbatore, Tamil Nadu. We design and build custom business databases, inventory portals, and CRM/ERP systems tailored for garment manufacturers, textile brands, and e-commerce stores." },
  { q: "What industries does HYNOX work with?", a: "We work with textile manufacturers, garment brands, ecommerce businesses, interior designers, travel agencies, food businesses, and startups." },
  { q: "Do you build custom software for businesses?", a: "Yes, we develop custom software tailored to your business processes, workflows, and growth requirements." },
  { q: "Can HYNOX develop ERP software?", a: "Yes, we build ERP software for inventory management, order processing, billing, production tracking, and business automation." },
  { q: "Do you create ecommerce websites?", a: "Yes, we develop Shopify stores and custom ecommerce websites with payment gateways, inventory management, and order tracking." },
  { q: "Do you build mobile applications?", a: "Yes, we develop Android and iOS mobile applications for businesses, startups, and ecommerce brands." },
  { q: "How much does software development cost?", a: "The cost depends on project scope, features, integrations, and business requirements. We provide custom quotations based on your needs." },
  { q: "How long does a project take?", a: "Most projects are completed within 2 to 6 weeks, depending on complexity and requirements." },
  { q: "Do you provide website redesign services?", a: "Yes, we redesign existing websites to improve performance, user experience, branding, and conversion rates." },
  { q: "Can HYNOX integrate third-party services?", a: "Yes, we integrate payment gateways, ERP systems, CRM platforms, WhatsApp APIs, SMS gateways, and other business tools." },
  { q: "Do you offer AI solutions for businesses?", a: "Yes, we develop AI-powered automation solutions that help businesses reduce manual work and improve productivity." },
  { q: "Do you provide digital marketing services?", a: "Yes, we offer Google Ads, Meta Ads, social media marketing, content marketing, and performance marketing services." },
  { q: "Why choose HYNOX?", a: "Businesses choose HYNOX because of our fast delivery, direct communication, custom solutions, global experience, and long-term support." },
  { q: "Do you provide support after project delivery?", a: "Yes, we provide ongoing maintenance, updates, technical support, and performance optimization after launch." }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleQuestionClick = (index: number) => {
    if (isMobile && activeIndex === index) {
      setActiveIndex(-1); // Toggle off if clicked again
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="faq-split-section">
      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">FAQ</span>
        <h2>Got questions? We have answers.</h2>
      </div>

      <div className="faq-split-container reveal-on-scroll reveal-delay-200">
        <div className="faq-questions-list">
          {faqs.map((faq, index) => (
            <div key={index} style={{ width: '100%', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                className={`faq-q-btn ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleQuestionClick(index)}
                style={{ width: '100%' }}
              >
                <span>{faq.q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: isMobile && activeIndex === index ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              {isMobile && activeIndex === index && (
                <div style={{ padding: '1rem 1.5rem 1.5rem', color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Desktop Panel */}
        {!isMobile && activeIndex !== -1 && (
          <div className="faq-answer-panel">
            <div className="faq-answer-card" key={activeIndex}>
              <span className="faq-answer-label">Answer</span>
              <h3 className="faq-answer-q">{faqs[activeIndex]?.q}</h3>
              <p className="faq-answer-a">{faqs[activeIndex]?.a}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
