import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Calendar, Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Shipping & Delivery Policy | HYNOX',
  description: 'Shipping and Delivery Policy of The Black Crest (HYNOX)',
};

export default function ShippingAndDelivery() {
  return (
    <>
      <Header />
      <div className="policy-page-bg" style={{ backgroundColor: '#030303', minHeight: '100vh', paddingTop: '90px', paddingBottom: '100px', paddingLeft: '20px', paddingRight: '20px', backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(30, 40, 50, 0.4) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem', color: '#ffffff' }}>
              <Truck size={28} />
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>Shipping & Delivery Policy</h1>
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
                  <strong style={{ color: '#111111' }}>Company:</strong> THE BLACK CREST (operating as "HYNOX")<br/><br/>
                  Below is the Shipping and Delivery policy for products and services handled by THE BLACK CREST.
                </p>
              </div>

              {/* Section 1 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>1</span>
                Policy Details
              </h2>
              
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '3rem', listStyleType: 'disc', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li>
                  <strong style={{ color: '#111111' }}>Couriers & Partners:</strong> For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Processing Time:</strong> Orders are shipped within Not Applicable or as per the delivery date agreed at the time of order confirmation, subject to Courier Company / post office norms.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Liability for Delays:</strong> THE BLACK CREST is not liable for any delay in delivery by the courier company or postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within Not Applicable from the date of the order and payment, or as per the delivery date agreed at the time of order confirmation.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Delivery Address:</strong> Delivery of all orders will be to the address provided by the buyer.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Confirmation:</strong> Delivery of our services will be confirmed on your registered email ID as specified during registration.
                </li>
              </ul>

              {/* Section 2 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>2</span>
                Helpdesk & Support
              </h2>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ margin: '0 0 1rem 0', color: '#475569' }}>For any issues in utilizing our services, you may contact our helpdesk:</p>
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a', margin: 0, fontWeight: '600' }}>The Black Crest (HYNOX)</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569' }}>
                  <Phone size={16} color="#0f172a" />
                  <a href="tel:8870524355" style={{ color: 'inherit', textDecoration: 'none' }}>8870524355</a>
                </div>

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
