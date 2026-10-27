'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';

export default function TestimonialVideoSection({
  subtitle = "TESTIMONIALS",
  title = "What Our Clients Say",
  description,
  theme = "dark"
}: {
  subtitle?: string;
  title?: string;
  description?: string;
  theme?: 'light' | 'dark';
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const isLight = theme === 'light';

  // Sync and unmute modal video when opened
  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.currentTime = cardVideoRef.current?.currentTime || 0;
      modalVideoRef.current.muted = false;
      modalVideoRef.current.volume = 1;
      modalVideoRef.current.play().catch(() => {});
      if (cardVideoRef.current) cardVideoRef.current.pause();
    } else if (!isModalOpen && cardVideoRef.current) {
      cardVideoRef.current.muted = true;
      cardVideoRef.current.play().catch(() => {});
    }
  }, [isModalOpen]);

  return (
    <section
      id="testimonials"
      style={{
        padding: '3rem 1.5rem',
        background: isLight ? '#ffffff' : '#050505',
        borderTop: isLight ? '1px solid #e5e7eb' : '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: isLight ? '1px solid #e5e7eb' : 'none',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto 1.5rem', textAlign: 'center' }} className="reveal-blur">
        {subtitle && (
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isLight ? '#0284c7' : '#38bdf8',
              display: 'inline-block',
              marginBottom: '0.5rem'
            }}
          >
            {subtitle}
          </span>
        )}
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
            fontWeight: 700,
            color: isLight ? '#111827' : '#ffffff',
            letterSpacing: '-0.02em',
            margin: 0
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              color: isLight ? '#4b5563' : '#a3a3a3',
              maxWidth: '600px',
              margin: '0.5rem auto 0',
              fontSize: '0.95rem',
              lineHeight: '1.5'
            }}
          >
            {description}
          </p>
        )}
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Clickable Testimonial Video Card (Clean, compact, no overlay text) */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="hover-lift reveal-zoom"
          role="button"
          tabIndex={0}
          aria-label="Play Client Testimonial Video with sound"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '220px',
            aspectRatio: '9/16',
            borderRadius: '20px',
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: isLight
              ? '0 15px 35px rgba(0, 0, 0, 0.12), 0 0 0 2px rgba(37, 211, 102, 0.4)'
              : '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(37, 211, 102, 0.4)',
            background: '#000000',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          {/* Continuous Autoplay Preview Video */}
          <video
            ref={cardVideoRef}
            src="/videos/review-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          >
            <source src="/videos/review-video.mp4" type="video/mp4" />
            <source src="/photography%20and%20videography/review-video.mp4" type="video/mp4" />
          </video>

          {/* Subtle Gradient for play button contrast */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Center Play Button Only (No text overlay) */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(37, 211, 102, 0.95)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(37, 211, 102, 0.55)',
              pointerEvents: 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            <Play size={24} fill="currentColor" style={{ marginLeft: '3px' }} />
          </div>
        </div>
      </div>

      {/* POPUP MODAL WITH SOUND */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '360px',
              maxHeight: '90vh',
              background: '#0f172a',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8)'
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '0.85rem 1.25rem',
                background: '#0b1120',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25d366', boxShadow: '0 0 6px #25d366' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Client Review · HYNOX
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close video"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Video with sound */}
            <div style={{ width: '100%', maxHeight: '540px', aspectRatio: '9/16', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <video
                ref={modalVideoRef}
                src="/videos/review-video.mp4"
                autoPlay
                loop
                playsInline
                controls
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src="/videos/review-video.mp4" type="video/mp4" />
                <source src="/photography%20and%20videography/review-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
