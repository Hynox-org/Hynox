'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, X, MessageCircle } from 'lucide-react';

export default function FloatingReviewVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const miniVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Ensure mini video autoplays muted continuously
  useEffect(() => {
    const video = miniVideoRef.current;
    if (!video || isOpen || isDismissed) return;

    // Explicitly set DOM muted properties for browser policy compliance
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay policy deferred until user interaction
      });
    };

    playVideo();
    video.addEventListener('canplay', playVideo);
    video.addEventListener('loadeddata', playVideo);

    // If blocked, trigger playback on first user touch/click anywhere on page
    const onFirstInteract = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
      window.removeEventListener('click', onFirstInteract);
      window.removeEventListener('touchstart', onFirstInteract);
    };

    window.addEventListener('click', onFirstInteract, { once: true });
    window.addEventListener('touchstart', onFirstInteract, { once: true });

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadeddata', playVideo);
      window.removeEventListener('click', onFirstInteract);
      window.removeEventListener('touchstart', onFirstInteract);
    };
  }, [isOpen, isDismissed]);

  // When modal opens, sync time and play with sound
  useEffect(() => {
    if (isOpen && modalVideoRef.current) {
      modalVideoRef.current.currentTime = miniVideoRef.current?.currentTime || 0;
      modalVideoRef.current.muted = isMuted;
      modalVideoRef.current.play().catch(() => {});
    }
  }, [isOpen, isMuted]);

  if (isDismissed) return null;

  return (
    <>
      {/* ─── 1. COMPACT FLOATING VIDEO BUBBLE (DIRECTLY ABOVE WHATSAPP) ─── */}
      {!isOpen && (
        <div
          className="floating-review-bubble"
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Play Client Review Video"
        >
          {/* Dismiss button */}
          <button
            type="button"
            className="floating-review-dismiss"
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            aria-label="Close review video"
          >
            <X size={12} />
          </button>

          {/* Video Container */}
          <div className="floating-review-media">
            <video
              ref={miniVideoRef}
              src="/videos/review-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/videos/review-video.mp4" type="video/mp4" />
              <source src="/photography%20and%20videography/review-video.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="floating-review-overlay" />

            {/* Live Indicator + Review Pill */}
            <div className="floating-review-badge">
              <span className="floating-review-dot" />
              <span>Review</span>
            </div>

            {/* Center Play Icon */}
            <div className="floating-review-play-icon">
              <Play size={13} fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      {/* ─── 2. EXPANDED POPUP MODAL (When clicked) ─── */}
      {isOpen && (
        <div
          className="floating-review-modal-backdrop"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="floating-review-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="floating-review-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="floating-review-dot" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Client Review · HYNOX
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  type="button"
                  className="floating-review-action-btn"
                  onClick={() => {
                    const next = !isMuted;
                    setIsMuted(next);
                    if (modalVideoRef.current) modalVideoRef.current.muted = next;
                  }}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <button
                  type="button"
                  className="floating-review-action-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Video Area */}
            <div className="floating-review-modal-video-wrap">
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

            {/* Modal Footer with WhatsApp CTA */}
            <div className="floating-review-modal-footer">
              <a
                href="https://wa.me/918870524355?text=Hi%20Hynox,%20I%20saw%20your%20client%20review%20video%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="floating-review-whatsapp-btn"
              >
                <MessageCircle size={16} />
                <span>Chat with Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
