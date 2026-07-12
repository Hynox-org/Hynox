'use client';

import { Mail } from 'lucide-react';

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
}

export default function ServiceCTA({
  title = 'Ready to Start Your Project?',
  subtitle = "Tell us what you need — we'll get back to you within 24 hours.",
}: ServiceCTAProps) {
  return (
    <section className="svc-section svc-cta-section reveal-zoom" id="cta">
      <div className="svc-cta-outer">
        <div className="svc-cta-inner">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="svc-cta-buttons">
            <a href="mailto:thehynoxofficial@gmail.com" className="btn svc-btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              Start a Project
            </a>
            <a href="https://wa.me/918870524355" className="btn svc-btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.772-.725 2.02-1.425.25-.7.25-1.3 0-1.425-.075-.125-.27-.199-.57-.35zM12 2C6.477 2 2 6.477 2 12c0 1.74.443 3.37 1.217 4.793L2 22l5.377-1.411A9.947 9.947 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.153-.443-4.466-1.214l-.32-.189-3.32.872.887-3.218-.207-.33A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
          <div className="svc-cta-contact">
            <a href="mailto:thehynoxofficial@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              thehynoxofficial@gmail.com
            </a>
            <span className="separator">·</span>
            <a href="tel:+918870524355" style={{ color: 'inherit', textDecoration: 'none' }}>
              +91 88705 24355
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
