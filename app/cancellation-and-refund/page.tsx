import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RefreshCcw, Calendar, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Cancellation & Refund Policy | HYNOX',
  description: 'Cancellation and Refund Policy of The Black Crest (HYNOX)',
};

export default function CancellationAndRefund() {
  return (
    <>
      <Header />
      <div className="policy-page-bg" style={{ backgroundColor: '#030303', minHeight: '100vh', paddingTop: '90px', paddingBottom: '100px', paddingLeft: '20px', paddingRight: '20px', backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(30, 40, 50, 0.4) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem', color: '#ffffff' }}>
              <RefreshCcw size={28} />
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>Cancellation & Refund Policy</h1>
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
                  THE BLACK CREST believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy, the following rules apply:
                </p>
              </div>

              {/* Section 1 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>1</span>
                Policy Details
              </h2>
              
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '3rem', listStyleType: 'disc', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li>
                  <strong style={{ color: '#111111' }}>Order Cancellations:</strong> Cancellations will be considered only if the request is made within 7 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Perishable Items:</strong> THE BLACK CREST does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Damaged or Defective Items:</strong> In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 days of receipt of the products.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Product Expectations:</strong> In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Manufacturer Warranty:</strong> In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
                </li>
                <li>
                  <strong style={{ color: '#111111' }}>Refund Processing:</strong> In case of any Refunds approved by the THE BLACK CREST, it'll take Not Applicable for the refund to be processed to the end customer.
                </li>
              </ul>

              {/* Section 2 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>2</span>
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
