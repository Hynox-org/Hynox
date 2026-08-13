import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-col about-col">
          <h4>ABOUT HYNOX</h4>
          <p>
            HYNOX is the premier <strong>software company</strong> in Coimbatore, Tamil Nadu. As top-rated experts in <strong>web development</strong>, custom <strong>app development</strong>, and AI solutions, we partner with businesses globally to build scalable digital products and enterprise software.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61582185053424" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" /></svg>
            </a>
            <a href="https://www.instagram.com/hynox.in?igsh=a3FjbWd1b3U2c3Vh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.86 3.9 2.32 7.15 2.17 8.42 2.11 8.8 2.1 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.27.19-6.78 2.7-6.97 6.98C.01 8.33 0 8.74 0 12s.01 3.67.08 4.95c.19 4.28 2.7 6.79 6.97 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.08c4.28-.19 6.79-2.7 6.98-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.08-4.95c-.19-4.28-2.7-6.79-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/hynox-in/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.46-2.14 2.96v5.69h-3.56V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" /></svg>
            </a>
            <a href="https://wa.me/918870524355" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.772-.725 2.02-1.425.25-.7.25-1.3 0-1.425-.075-.125-.27-.199-.57-.35zM12 2C6.477 2 2 6.477 2 12c0 1.74.443 3.37 1.217 4.793L2 22l5.377-1.411A9.947 9.947 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.153-.443-4.466-1.214l-.32-.189-3.32.872.887-3.218-.207-.33A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Column 2: Our Services */}
        <div className="footer-col">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><Link href="/services/website-development">Website Development</Link></li>
            <li><Link href="/services/mobile-apps">Mobile Apps</Link></li>
            <li><Link href="/services/erp-software">Custom Software & ERP</Link></li>
            <li><Link href="/services/shopify-stores">Shopify Stores</Link></li>
            <li><Link href="/services/ai-solutions">AI/ML Solutions</Link></li>
            <li><Link href="/services/performance-marketing">Performance Marketing</Link></li>
            <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
            <li><Link href="/services/photography-and-videography">Photography & Videography</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link href="/#home">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Column 4: Get In Touch */}
        <div className="footer-col get-in-touch">
          <h4>GET IN TOUCH</h4>
          <div className="contact-item">
            <Phone size={18} />
            <a href="tel:+918870524355" style={{ color: 'inherit', textDecoration: 'none' }}>
              +91 8870524355
            </a>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <a href="mailto:thehynoxofficial@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              thehynoxofficial@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ lineHeight: '1.4' }}>3rd Floor, Sri Govindaraj Tower, 38/4, Father Randy St, R.S. Puram, Coimbatore, Tamil Nadu 641002</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ lineHeight: '1.4' }}>Jeeva street, Pandian Nagar, Sathya Colony, Tiruppur, Chettipalayam, Tamil Nadu 641602</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', paddingTop: '2rem' }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} HYNOX. All rights reserved.</p>
        <div className="footer-legal-links" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.8rem', color: '#888888' }}>
          <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
          <span style={{ color: '#333' }}>|</span>
          <Link href="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
