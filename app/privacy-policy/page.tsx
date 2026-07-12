import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, Calendar, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | HYNOX',
  description: 'Privacy Policy of The Black Crest (HYNOX)',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="policy-page-bg" style={{ backgroundColor: '#030303', minHeight: '100vh', paddingTop: '90px', paddingBottom: '100px', paddingLeft: '20px', paddingRight: '20px', backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(30, 40, 50, 0.4) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem', color: '#ffffff' }}>
              <ShieldCheck size={28} />
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>Privacy Policy</h1>
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
                  Your privacy is important to us. This Privacy Policy explains how The Black Crest, also operating under the name HYNOX, collects, uses, shares, and protects your information when you use our website, services, apps, and subscription-based platforms — including our clothing subscription service.
                </p>
              </div>

              {/* Section 1 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>1</span>
                Information We Collect
              </h2>
              <p style={{ marginBottom: '1.5rem', color: '#374151' }}>We collect the following categories of information to provide and improve our services:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#111111', marginBottom: '1rem', fontWeight: '600' }}>1.1 Personal Info</h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'circle', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Name & Email address</li>
                    <li>Phone number</li>
                    <li>Billing & shipping address</li>
                    <li>Account credentials</li>
                  </ul>
                </div>
                
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#111111', marginBottom: '1rem', fontWeight: '600' }}>1.2 Payment Info</h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'circle', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Card or UPI details</li>
                    <li>Secure third-party gateways</li>
                    <li>Subscription billing details</li>
                  </ul>
                </div>

                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#111111', marginBottom: '1rem', fontWeight: '600' }}>1.3 Usage Data</h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'circle', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>IP address & browser type</li>
                    <li>Operating system info</li>
                    <li>Pages visited & time spent</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>2</span>
                How We Use Your Data
              </h2>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '3rem', listStyleType: 'disc', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><strong style={{ color: '#111111' }}>Service Delivery:</strong> Provide services, fulfill product or software orders.</li>
                <li><strong style={{ color: '#111111' }}>Subscriptions:</strong> Manage subscription plans and send monthly clothing boxes.</li>
                <li><strong style={{ color: '#111111' }}>Support:</strong> Respond to customer support and service requests.</li>
                <li><strong style={{ color: '#111111' }}>Communication:</strong> Send transactional emails, reminders, and promotional offers (you can opt out anytime).</li>
                <li><strong style={{ color: '#111111' }}>Optimization:</strong> Improve platform features and overall user experience.</li>
              </ul>

              {/* Section 3: Leave Policy */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>3</span>
                Leave Policy (Internal)
              </h2>
              <p style={{ marginBottom: '1.5rem', color: '#374151' }}>The following leave entitlements apply to all full-time employees of HYNOX:</p>
              
              <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
                <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
                  <thead style={{ background: '#f3f4f6', color: '#111111' }}>
                    <tr>
                      <th style={{ padding: '1rem', borderBottom: '2px solid #e5e7eb' }}>Leave Type</th>
                      <th style={{ padding: '1rem', borderBottom: '2px solid #e5e7eb' }}>Days Per Year</th>
                      <th style={{ padding: '1rem', borderBottom: '2px solid #e5e7eb' }}>Carry Forward</th>
                      <th style={{ padding: '1rem', borderBottom: '2px solid #e5e7eb' }}>Paid / Unpaid</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: '#4b5563' }}>
                    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '1rem' }}>Casual Leave (CL)</td>
                      <td style={{ padding: '1rem' }}>12 days</td>
                      <td style={{ padding: '1rem' }}>No — lapses at year end</td>
                      <td style={{ padding: '1rem' }}>Paid</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '1rem' }}>Sick Leave (SL)</td>
                      <td style={{ padding: '1rem' }}>12 days</td>
                      <td style={{ padding: '1rem' }}>No — lapses at year end</td>
                      <td style={{ padding: '1rem' }}>Paid</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '1rem' }}>Earned Leave (EL)</td>
                      <td style={{ padding: '1rem' }}>15 days</td>
                      <td style={{ padding: '1rem' }}>Yes — up to 30 days</td>
                      <td style={{ padding: '1rem' }}>Paid</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '1rem' }}>Maternity Leave</td>
                      <td style={{ padding: '1rem' }}>180 days (6 months)</td>
                      <td style={{ padding: '1rem' }}>Not applicable</td>
                      <td style={{ padding: '1rem' }}>Paid</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '1rem' }}>Paternity Leave</td>
                      <td style={{ padding: '1rem' }}>5 days</td>
                      <td style={{ padding: '1rem' }}>Not applicable</td>
                      <td style={{ padding: '1rem' }}>Paid</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '1rem' }}>Emergency Leave</td>
                      <td style={{ padding: '1rem' }}>3 days</td>
                      <td style={{ padding: '1rem' }}>Not applicable</td>
                      <td style={{ padding: '1rem' }}>Paid</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#111111', marginBottom: '1rem', fontWeight: '600' }}>Casual Leave (CL) Rules</h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'circle', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>12 days credited on January 1st</li>
                    <li>Max 3 consecutive days at a time</li>
                    <li>Apply at least 1 day in advance</li>
                    <li>Lapses at year end (no carry forward)</li>
                  </ul>
                </div>
                
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#111111', marginBottom: '1rem', fontWeight: '600' }}>Sick Leave (SL) Rules</h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'circle', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>12 days credited on January 1st</li>
                    <li>Medical certificate mandatory for 2+ days</li>
                    <li>Cannot be planned in advance</li>
                    <li>Lapses at year end (no carry forward)</li>
                  </ul>
                </div>

                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#111111', marginBottom: '1rem', fontWeight: '600' }}>Earned Leave (EL) Rules</h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'circle', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Accrued 1.25 days per month worked</li>
                    <li>Apply at least 7 days in advance</li>
                    <li>Minimum 3 consecutive days must be taken</li>
                    <li>Carry forward up to 30 days maximum</li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Public Holidays */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>4</span>
                Public Holidays
              </h2>
              <p style={{ marginBottom: '1.5rem', color: '#374151' }}>HYNOX observes mandatory public holidays as declared by the Government of Tamil Nadu, including:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '3rem', listStyleType: 'disc', color: '#4b5563', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <li>Republic Day — 26 January</li>
                <li>Independence Day — 15 August</li>
                <li>Gandhi Jayanti — 2 October</li>
                <li>Pongal</li>
                <li>Tamil New Year</li>
                <li>Diwali</li>
                <li>Christmas — 25 December</li>
              </ul>

              {/* Section 5 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>5</span>
                Your Rights
              </h2>
              <p style={{ marginBottom: '1rem', color: '#374151' }}>As a user, you have the right to:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Access and review your personal data.</li>
                <li>Update or correct any inaccurate information.</li>
                <li>Request data deletion (subject to legal or business constraints).</li>
                <li>Opt out of marketing communications at any time.</li>
              </ul>
              <div style={{ padding: '1rem 1.5rem', background: '#f9fafb', borderRadius: '8px', border: '1px dashed #d1d5db' }}>
                To exercise these rights, please contact us at: <a href="mailto:hello.hynox@gmail.com" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600', marginLeft: '5px' }}>hello.hynox@gmail.com</a>
              </div>

              {/* Section 6 */}
              <h2 style={{ fontSize: '1.4rem', color: '#111111', marginTop: '4rem', marginBottom: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', background: '#111111', color: '#ffffff', fontSize: '0.9rem', fontWeight: '700' }}>6</span>
                Contact Us
              </h2>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a', margin: 0, fontWeight: '600' }}>The Black Crest (HYNOX)</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569' }}>
                  <Mail size={16} color="#0f172a" />
                  <a href="mailto:thehynoxofficial@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>thehynoxofficial@gmail.com</a>
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
