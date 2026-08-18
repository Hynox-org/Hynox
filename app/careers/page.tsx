'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { roles, type Role } from '../lib/careers';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  useEffect(() => {
    const animationClasses = [
      'reveal-on-scroll', 'reveal-fade-in', 'reveal-from-left',
      'reveal-from-right', 'reveal-zoom', 'reveal-flip-x', 'reveal-blur',
    ];
    const selector = animationClasses.map(c => `.${c}`).join(', ');
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        } else {
          entry.target.classList.remove('is-visible');
          entry.target.classList.add('is-hidden');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh' }}>
        {/* ─── 1. HERO ─── */}
        <section className="hero-2col-section" style={{ minHeight: '40vh', paddingTop: '0rem', alignItems: 'flex-start' }}>
          <div className="hero-aurora-glow" style={{ top: '20%' }}></div>
          <div className="careers-hero-content reveal-blur" style={{ width: '100%', textAlign: 'center', marginTop: '-3rem' }}>
            <div className="badge">JOIN OUR TEAM</div>
            <h1 className="svc-subpage-h1" style={{ fontSize: '3.2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
              Join Our <span className="svc-hero-accent-bw">Team</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.7', margin: '0 auto', maxWidth: '650px' }}>
              Start your career journey with hands-on experience and learn from industry professionals in a dynamic environment.
            </p>
          </div>
        </section>

        {/* ─── 2. OPPORTUNITIES ─── */}
        <section className="svc-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem 4rem 2rem' }}>

          <div className="careers-grid reveal-zoom reveal-delay-200">
            {roles.map((role, i) => (
              <div className="careers-card" key={i}>
                <div>
                  <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{role.type}</span>
                  <h3>{role.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(0, 0, 0, 0.6)', lineHeight: '1.5', minHeight: '75px' }}>
                    {role.desc.substring(0, 120)}...
                  </p>
                  
                  <div className="careers-meta-grid">
                    <div className="careers-meta-item">
                      <span className="careers-meta-label">Duration:</span>
                      <span className="careers-meta-value">{role.duration}</span>
                    </div>
                    <div className="careers-meta-item">
                      <span className="careers-meta-label">Location:</span>
                      <span className="careers-meta-value">{role.location}</span>
                    </div>
                    <div className="careers-meta-item">
                      <span className="careers-meta-label">Type:</span>
                      <span className="careers-meta-value">{role.type}</span>
                    </div>
                    <div className="careers-meta-item">
                      <span className="careers-meta-label">Stipend:</span>
                      <span className="careers-meta-value">{role.stipend}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRole(role)}
                  className="btn btn-hero-solid"
                  style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', cursor: 'pointer', textAlign: 'center' }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ─── 3. ROLE MODAL DETAILS ─── */}
      {selectedRole && (
        <div className="careers-modal-overlay" onClick={() => setSelectedRole(null)}>
          <div className="careers-modal" onClick={(e) => e.stopPropagation()}>
            <button className="careers-modal-close" onClick={() => setSelectedRole(null)}>×</button>
            
            <span className="badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>{selectedRole.type}</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.5rem' }}>{selectedRole.title}</h2>
            
            <div className="careers-meta-grid" style={{ background: '#0d0d0d', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '1.5rem' }}>
              <div className="careers-meta-item">
                <span className="careers-meta-label">Duration:</span>
                <span className="careers-meta-value">{selectedRole.duration}</span>
              </div>
              <div className="careers-meta-item">
                <span className="careers-meta-label">Location:</span>
                <span className="careers-meta-value">{selectedRole.location}</span>
              </div>
              <div className="careers-meta-item">
                <span className="careers-meta-label">Type:</span>
                <span className="careers-meta-value">{selectedRole.type}</span>
              </div>
              <div className="careers-meta-item">
                <span className="careers-meta-label">Stipend:</span>
                <span className="careers-meta-value">{selectedRole.stipend}</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>About The Position</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.6' }}>{selectedRole.desc}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.8rem' }}>Key Responsibilities</h4>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {selectedRole.responsibilities.map((resp: string, idx: number) => (
                  <li key={idx} style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>{resp}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.8rem' }}>Requirements</h4>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {selectedRole.requirements.map((req: string, idx: number) => (
                  <li key={idx} style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>{req}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
              <Link
                href={`/careers/apply?role=${encodeURIComponent(selectedRole.title)}`}
                className="btn btn-hero-solid"
                style={{ flex: 1, textDecoration: 'none', textAlign: 'center', padding: '0.85rem' }}
              >
                Apply Now
              </Link>
              <button
                onClick={() => setSelectedRole(null)}
                className="btn btn-hero-outline"
                style={{ padding: '0.85rem 1.5rem', cursor: 'pointer' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
