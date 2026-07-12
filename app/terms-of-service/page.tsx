import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Calendar, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | HYNOX',
  description: 'Terms of Service of The Black Crest (HYNOX)',
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="policy-page-bg" style={{ backgroundColor: '#030303', minHeight: '100vh', paddingTop: '90px', paddingBottom: '100px', paddingLeft: '20px', paddingRight: '20px', backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(30, 40, 50, 0.4) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem', color: '#ffffff' }}>
              <FileText size={28} />
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>Terms of Service</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>
              <Calendar size={14} />
              <span>Last Updated: July 2026</span>
            </div>
          </div>

          {/* Content Card */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', padding: 'clamp(2rem, 5vw, 4rem)', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
            
            <div style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: '400' }}>
              
              {/* Intro Box */}
              <div style={{ background: '#f9fafb', borderLeft: '3px solid #111111', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '3rem' }}>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: '#111111' }}>Company:</strong> The Black Crest (operating as "HYNOX")<br/><br/>
                  Welcome to The Black Crest, a registered technology and product development company operating under the brand HYNOX. By accessing or using our website, applications, services, subscription platforms, or engaging with our team in any form, you agree to the Terms of Service stated below.
                </p>
              </div>

              {/* Section 1 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>1</span>
                Eligibility and Acceptance
              </h2>
              <p style={{ marginBottom: '1.5rem', color: '#374151' }}>By engaging with The Black Crest in any capacity — as a client, user, subscriber, employee, intern, or freelancer — you confirm that you:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '3rem', listStyleType: 'disc', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Are at least 18 years old</li>
                <li>Have read and agree to be bound by these Terms</li>
                <li>Are using the services for lawful purposes</li>
              </ul>

              {/* Section 2 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>2</span>
                Scope of Services
              </h2>
              <p style={{ marginBottom: '1.5rem', color: '#374151' }}>The Black Crest offers the following services:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Website & Software Development</li>
                <li>ERP, CRM, and E-commerce Solutions</li>
                <li>UI/UX and SaaS Product Design</li>
                <li>Subscription-Based Clothing Platforms</li>
                <li>Dropshipping, Fulfillment & Brand Management</li>
                <li>Internship, Training & Research Programs</li>
              </ul>
              <div style={{ padding: '1rem 1.5rem', background: '#f9fafb', borderRadius: '8px', border: '1px dashed #d1d5db', marginBottom: '3rem' }}>
                We may modify, discontinue, or expand services with or without prior notice.
              </div>

              {/* Section 3 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>3</span>
                Subscription-Based Clothing Service
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#111111', marginBottom: '1rem', fontWeight: '600' }}>3.1 Payment & Refunds</h3>
                  <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>Once a subscription plan is activated, all payments are final and non-refundable, even if the user discontinues the service mid-cycle.</p>
                  <p style={{ color: '#ef4444', fontSize: '0.95rem' }}>Refunds will not be provided for clothing orders that are processed or shipped, dropshipping services already initiated, or subscription boxes.</p>
                </div>
                
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#111111', marginBottom: '1rem', fontWeight: '600' }}>3.2 Separate Charges</h3>
                  <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>Your subscription fee does not include the following:</p>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'circle', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.95rem' }}>
                    <li>Shopify platform usage charges</li>
                    <li>Domain name registration fees</li>
                    <li>Payment gateway charges or transaction fees</li>
                    <li>Shipping partner fees (if opted directly)</li>
                    <li>Any third-party plugin, app, or integration costs</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>4</span>
                Software Use Policy
              </h2>
              <p style={{ marginBottom: '1.5rem', color: '#374151' }}>All software, code, dashboards, UI/UX designs, and tools created or deployed by The Black Crest remain intellectual property of the company unless contractually transferred.</p>
              
              <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#be123c', marginBottom: '1rem', fontWeight: '600' }}>Prohibited Actions</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0, listStyleType: 'disc', color: '#9f1239', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Reproducing, selling, or redistributing our software</li>
                  <li>Reverse-engineering or cloning our platforms</li>
                  <li>Sharing internal dashboards with external users</li>
                </ul>
              </div>
              <p style={{ marginBottom: '3rem', color: '#374151', fontStyle: 'italic' }}>Use is granted as a limited, non-exclusive, non-transferable license for agreed business purposes only.</p>

              {/* Section 5 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>5</span>
                Limitation of Liability
              </h2>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '3rem', listStyleType: 'disc', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>We do not guarantee uninterrupted access to services or platforms.</li>
                <li>The Black Crest is not responsible for data loss, business loss, or indirect damages.</li>
                <li>All services are provided "as is" and warranties apply only as per individual agreements.</li>
              </ul>

              {/* Section 6 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>6</span>
                Governing Law
              </h2>
              <p style={{ marginBottom: '3rem', color: '#374151' }}>These Terms are governed by the laws of India, with legal jurisdiction based in Coimbatore, Tamil Nadu.</p>

              {/* Section 7 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>7</span>
                Contact Information
              </h2>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a', margin: 0, fontWeight: '600' }}>The Black Crest (HYNOX)</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569' }}>
                  <Mail size={16} color="#0f172a" />
                  <a href="mailto:hello.hynox@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>hello.hynox@gmail.com</a>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', color: '#0f172a' }}><strong style={{fontSize:'12px'}}>W</strong></span>
                  <a href="https://www.hynox.in" style={{ color: 'inherit', textDecoration: 'none' }}>www.hynox.in</a>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#475569' }}>
                  <MapPin size={16} style={{ flexShrink: 0, marginTop: '4px', color: '#0f172a' }} />
                  <span>3rd Floor, Sri Govindaraj Tower, 38/4, Father Randy St,<br />R.S. Puram, Coimbatore, Tamil Nadu 641002</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
