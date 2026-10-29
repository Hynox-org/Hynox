'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Check, ArrowRight, Camera, Video, Clapperboard, Plane,
  Sparkles, Layers, ShieldCheck, Clock, Film, Scissors,
  Folder, ChevronLeft, ChevronRight, Plus, ExternalLink,
  Play, Mail
} from 'lucide-react';
import Header from '../../components/Header';
import CubesBackground from '../../components/CubesBackground';
import Footer from '../../components/Footer';

// ── Optimized Lazy Video (Pure video without text overlay) ──
function PortfolioVideo({ videoUrl }: { videoUrl: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="portfolio-video-card"
      style={{
        flex: '0 0 280px',
        width: '280px',
        aspectRatio: '9/16',
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#0d0d0d',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        scrollSnapAlign: 'start',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        muted
        playsInline
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}

// ── Optimized Lazy Image (Pure image without text overlay) ──
function PortfolioImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="portfolio-image-card"
      style={{
        flex: '0 0 420px',
        width: '420px',
        height: '380px',
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        position: 'relative',
        scrollSnapAlign: 'start',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}

export default function PhotographyVideographyPage() {
  const photoScrollRef = useRef<HTMLDivElement>(null);
  const videoScrollRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollTrack = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.75;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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

  // Slide 2: The First Impression
  const firstImpressionPoints = [
    {
      icon: Sparkles,
      title: 'Make a stronger first impression',
      desc: 'People decide what to trust in seconds. Captivate buyers instantly with authoritative, polished visuals across your website and ads.'
    },
    {
      icon: Camera,
      title: 'Show products, places & expertise clearly',
      desc: 'Highlight intricate details, manufacturing precision, architecture, and team talent without ambiguity or compromise.'
    },
    {
      icon: Layers,
      title: 'Keep your brand consistent across web & social',
      desc: 'Maintain a unified aesthetic, tone, and color grading across landing pages, Meta ads, and social channels.'
    },
    {
      icon: Film,
      title: 'Turn everyday business stories into content people remember',
      desc: 'Transform routine client handoffs, workshop moments, and leadership insights into compelling video assets that drive conversions.'
    }
  ];

  // User-ordered Photography Portfolio (No text overlays)
  const photographyPortfolio = [
    { src: '/images/photography/jagan.webp', alt: 'Jagan Portrait & Studio Photography' },
    { src: '/images/photography/drg.webp', alt: 'DRG Commercial & Brand Photography' },
    { src: '/images/photography/3.webp', alt: 'Commercial & Architecture Photography' }
  ];

  // User-ordered Videography Portfolio (No text overlays)
  const videographyPortfolio = [
    '/videos/videography/hynox-works.mp4',
    '/videos/videography/drg-video.mp4',
    '/videos/videography/1.mp4',
    '/videos/videography/2.mp4'
  ];

  // Slide 3: One production partner for the full story
  const fullStoryServices = [
    {
      icon: Camera,
      title: 'Product & Commercial Photography',
      desc: 'Studio e-commerce product shoots, lifestyle lookbooks, and high-resolution catalog captures that convert shoppers.'
    },
    {
      icon: Video,
      title: 'Corporate Films, Interviews & Office Tours',
      desc: 'Executive brand documentaries, leadership interviews, and infrastructure walk-throughs that build investor and client trust.'
    },
    {
      icon: Clapperboard,
      title: 'UGC Videos, Reels, Shorts & Ads',
      desc: 'Authentic creator-led videos, viral vertical hooks, and high-converting paid social ads engineered for Meta, TikTok & YouTube.'
    },
    {
      icon: Plane,
      title: 'Drone & Aerial Shoots',
      desc: 'Cinema-grade 4K aerial videography capturing expansive real estate, industrial facilities, and large-scale corporate campuses.'
    },
    {
      icon: Sparkles,
      title: 'Creative Direction, Scripting & Talent',
      desc: 'End-to-end creative management: scene-by-scene storyboards, high-retention scriptwriting, and professional talent sourcing.'
    },
    {
      icon: Scissors,
      title: 'Cinematic Editing, VFX & Color Grading',
      desc: 'Post-production in DaVinci Resolve & Premiere Pro with custom sound design, color mastering, and licensed commercial audio.'
    }
  ];

  // Slide 4: Choose the content your next campaign needs
  const campaignNeeds = [
    {
      step: 'Show it',
      title: 'Product, Lifestyle & Architecture',
      desc: 'Clean, captivating photography for websites, lookbooks, e-commerce stores, and high-end print collateral.'
    },
    {
      step: 'Explain it',
      title: 'Brand Films, Testimonials & Service Videos',
      desc: 'Clear, authentic visual stories that explain what you do and show genuine client results to build trust.'
    },
    {
      step: 'Sell it',
      title: 'UGC, Paid Ads & Platform-Ready Short-Form',
      desc: 'Scroll-stopping vertical video designed with psychological hooks to maximize ROAS and social engagement.'
    },
    {
      step: 'Extend it',
      title: 'Edit & Repurpose Footage You Already Have',
      desc: 'Transform raw b-roll, past event recordings, and archives into fresh, modern, high-performing content assets.'
    }
  ];

  // Slide 5: From first idea to final delivery
  const processSteps = [
    {
      step: '01',
      title: 'Pre-production',
      desc: 'Concept, script, storyboard, location scouting, and talent casting.'
    },
    {
      step: '02',
      title: 'Production',
      desc: 'Cinema cameras, lighting, sound capture, and creative direction on set.'
    },
    {
      step: '03',
      title: 'Post-production',
      desc: 'Editing, VFX, color grading in DaVinci Resolve, and sound design.'
    },
    {
      step: '04',
      title: 'Review and delivery',
      desc: 'Collaborative feedback, high-resolution exports, and multiple aspect ratio formats.'
    }
  ];

  // Slide 6: Content that is ready to use everywhere
  const deliverables = [
    {
      icon: Folder,
      title: 'Edited Photos & Final Videos',
      desc: 'Master files delivered retouched, color-graded, and ready to publish immediately.'
    },
    {
      icon: Layers,
      title: 'Vertical, Horizontal & Web-Ready Exports',
      desc: '9:16 for Reels/Shorts, 16:9 for YouTube/Web, and 1:1 or 4:5 for feed posts.'
    },
    {
      icon: Sparkles,
      title: 'Branded Titles, Captions & Logo Placement',
      desc: 'Custom animated typography, captions for silent scrolling, and seamless logo watermarks.'
    },
    {
      icon: ShieldCheck,
      title: '4K or 1080p Delivery with Full Usage Rights',
      desc: 'Full digital commercial usage rights with zero licensing restrictions or hidden fees.'
    },
    {
      icon: Clock,
      title: 'Agreed Quantities & Timelines Upfront',
      desc: 'Final deliverables, revision rounds, and production milestones locked in before shooting starts.'
    }
  ];

  // Slide 7 & 8: Quality Pillars (Styled with high-contrast text for light section)
  const qualityPillars = [
    {
      icon: Film,
      title: 'In-House Crew Only',
      desc: 'We do not outsource. Direct collaboration with dedicated in-house directors, cinematographers, and DaVinci colorists.'
    },
    {
      icon: Camera,
      title: 'Cinema-Grade Equipment',
      desc: 'Captured on Sony Cinema Line & RED cameras, cinema prime lenses, studio lighting, and wireless lav audio setups.'
    },
    {
      icon: Clock,
      title: '7–14 Days Delivery',
      desc: 'Fast, milestone-driven turnaround times so your campaigns, product launches, and ads launch on schedule.'
    },
    {
      icon: ShieldCheck,
      title: '100% Commercial Rights',
      desc: 'Complete digital and broadcast commercial rights with zero recurring licensing fees or usage restrictions.'
    }
  ];

  // FAQ Items
  const faqs = [
    { q: 'Do you offer both photography and videography?', a: 'Yes! We are an integrated production partner offering commercial photography, product shoots, brand films, and high-converting UGC video creation under one roof.' },
    { q: 'What is UGC Video Creation and how does it help?', a: 'User Generated Content (UGC) features real creators and actors testing, reviewing, or demonstrating your product. These authentic-style vertical videos generate up to 4x higher CTR and lower CPA on Meta and TikTok ads.' },
    { q: 'Do you provide models, actors, and locations?', a: 'Yes, we handle complete talent casting (models, actors, creators) and location scouting tailored to your script and aesthetic.' },
    { q: 'What deliverables do we receive at handover?', a: 'You receive high-resolution 4K or 1080p master files, platform-optimized vertical (9:16) and horizontal (16:9) versions, animated captions, and full commercial usage rights.' },
    { q: 'How fast is the turnaround from shoot to delivery?', a: 'Initial edits are typically ready within 7 to 14 business days after production, with structured feedback rounds to ensure perfection.' },
    { q: 'Can you repurpose footage we already have?', a: 'Yes. Our "Extend it" workflow takes your existing raw footage, archives, or smartphone b-roll and edits it into modern, high-converting social reels and ads.' }
  ];

  return (
    <>
      <Header />

      <main>
        {/* ─── 1. HERO (Slide 1: Visual branding that builds trust) ─── */}
        <section className="hero-center-section">
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', background: "#050505" }}>
            <div className="desktop-only" style={{ width: '100%', height: '100%' }}>
              <CubesBackground />
            </div>
            {/* Mobile hero with lightweight preload="none" for instant loading */}
            <div className="mobile-only" style={{ width: '100%', height: '100%', opacity: 0.7 }}>
              <video
                src="/videos/videography/hero-section-mobileview.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, pointerEvents: 'none', background: "radial-gradient(ellipse at 50% 50%, rgba(20,35,100,0.25) 0%, rgba(5,5,5,0.65) 75%)" }} />

          <div className="hero-center-content" style={{ position: 'relative', zIndex: 10 }}>
            <span className="hero-badge reveal-fade-in">
              VISUAL BRANDING THAT BUILDS TRUST
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              Visual Branding That<br />
              <span className="svc-hero-accent-bw">Builds Trust.</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              Photography, videography, and creative editing for businesses ready to look as strong as they work. From high-converting UGC to cinematic brand films and product shoots.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <Link href="/contact" className="btn btn-hero-solid">Book a Shoot <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></Link>
              <a href="#photography-portfolio" className="btn btn-hero-outline">View Our Work</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <span>✓ Project-Based Packages</span>
              <span>✓ Custom Creative Direction</span>
              <span>✓ Full Production Under One Roof</span>
              <span>✓ 100% Commercial Usage Rights</span>
            </div>
          </div>

          {/* ─── TECHNOLOGY MARQUEE ─── */}
          <section className="tech-marquee-section" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20, background: 'transparent', borderBottom: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="tech-marquee-container">
              <div className="tech-marquee-content">
                {[...Array(4)].flatMap(() => [
                  { name: "Premiere Pro", customUrl: "https://img.icons8.com/ios-filled/50/ffffff/adobe-premiere-pro.png" },
                  { name: "After Effects", customUrl: "https://img.icons8.com/ios-filled/50/ffffff/adobe-after-effects.png" },
                  { name: "DaVinci Resolve", icon: "davinciresolve" },
                  { name: "Sony Cinema", icon: "sony" },
                  { name: "RED Digital", icon: "red" },
                  { name: "Lightroom", customUrl: "https://img.icons8.com/ios-filled/50/ffffff/adobe-lightroom.png" }
                ]).map((tech, i) => (
                  <div key={i} className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={tech.customUrl || `https://cdn.simpleicons.org/${tech.icon}/ffffff`} alt={tech.name} style={{ width: '24px', height: '24px' }} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* ─── 2. THE FIRST IMPRESSION (Slide 2: People decide what to trust in seconds) ─── */}
        <section className="svc-section" id="first-impression">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">01 / THE FIRST IMPRESSION</span>
            <h2>People Decide What to Trust in Seconds</h2>
            <p style={{ color: '#a3a3a3', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Before a customer reads your copy or compares your prices, they judge your visual quality. We craft imagery that commands respect and establishes immediate authority.
            </p>
          </div>

          <div className="svc-build-grid reveal-zoom reveal-delay-200">
            {firstImpressionPoints.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div className="svc-build-card" key={i}>
                  <div className="svc-build-icon">
                    <IconComp size={32} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 3. PHOTOGRAPHY PORTFOLIO (High Contrast Text & Clean Carousel) ─── */}
        <section className="svc-section svc-section-alt portfolio-scroll-section" id="photography-portfolio" style={{ background: '#f8f9fa' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto 1.5rem', padding: '0 1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="svc-label" style={{ color: '#6b7280' }}>OUR PHOTOGRAPHY</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: '#111827', margin: '0.35rem 0 0', fontWeight: 700 }}>
                Our Photography Work
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => scrollTrack(photoScrollRef, 'left')}
                aria-label="Scroll left"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  color: '#111827',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  transition: 'background 0.2s, transform 0.2s'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollTrack(photoScrollRef, 'right')}
                aria-label="Scroll right"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  color: '#111827',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  transition: 'background 0.2s, transform 0.2s'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={photoScrollRef}
            className="no-scrollbar"
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '0.5rem 1.5rem 2.5rem',
              maxWidth: '100%',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {photographyPortfolio.map((item, i) => (
              <PortfolioImage
                key={i}
                src={item.src}
                alt={item.alt}
              />
            ))}
            <div
              className="portfolio-image-card"
              style={{
                flex: '0 0 320px',
                width: '320px',
                height: '380px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
                scrollSnapAlign: 'start',
                flexShrink: 0,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ margin: '0 0 1.25rem', color: '#ffffff', fontSize: '1.4rem', lineHeight: '1.3', fontWeight: 700 }}>
                BOOK YOUR<br />SHOOT
              </h3>
              <Link
                href="/contact"
                className="btn"
                style={{
                  background: '#ffffff',
                  color: '#000000',
                  fontWeight: 600,
                  padding: '0.75rem 1.75rem',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                Start Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 4. VIDEOGRAPHY PORTFOLIO (1st: Hynox Works, 2nd: DRG Video, balance two - No Text Overlays) ─── */}
        <section className="svc-section portfolio-scroll-section" id="videography-portfolio">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto 1.5rem', padding: '0 1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="svc-label">OUR VIDEOGRAPHY</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: '#ffffff', margin: '0.35rem 0 0' }}>Our Videography Work</h2>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => scrollTrack(videoScrollRef, 'left')}
                aria-label="Scroll left"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollTrack(videoScrollRef, 'right')}
                aria-label="Scroll right"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={videoScrollRef}
            className="no-scrollbar"
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '0.5rem 1.5rem 2.5rem',
              maxWidth: '100%',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {videographyPortfolio.map((url, i) => (
              <PortfolioVideo
                key={i}
                videoUrl={url}
              />
            ))}
            <div
              className="portfolio-video-card"
              style={{
                flex: '0 0 280px',
                width: '280px',
                aspectRatio: '9/16',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #180c29 0%, #2f073d 100%)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
                scrollSnapAlign: 'start',
                flexShrink: 0
              }}
            >
              <h3 style={{ margin: '0 0 1.25rem', color: '#ffffff', fontSize: '1.3rem', lineHeight: '1.3' }}>
                BOOK YOUR<br />SHOOT
              </h3>
              <Link
                href="/contact"
                className="btn"
                style={{
                  background: '#ffffff',
                  color: '#000000',
                  fontWeight: 600,
                  padding: '0.75rem 1.75rem',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Start Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 5. ONE PRODUCTION PARTNER (Slide 3: One production partner for the full story) ─── */}
        <section className="svc-section svc-section-alt" id="what-we-build" style={{ background: '#f8f9fa' }}>
          <div className="svc-section-header reveal-blur">
            <span className="svc-label" style={{ color: '#6b7280' }}>END-TO-END PRODUCTION</span>
            <h2 style={{ color: '#111827' }}>One Production Partner for the Full Story</h2>
            <p style={{ color: '#4b5563', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              One partner across the production — creative direction, scripting, talent casting, cinema-grade shooting, and post-production.
            </p>
            <div className="svc-divider" style={{ background: '#111827' }} />
          </div>
          <div className="svc-build-grid reveal-zoom reveal-delay-200">
            {fullStoryServices.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div className="svc-build-card" key={i}>
                  <div className="svc-build-icon">
                    <IconComp size={32} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 6. CHOOSE THE CONTENT YOUR NEXT CAMPAIGN NEEDS (Slide 4) ─── */}
        <section className="svc-section" id="campaign-needs">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">CAMPAIGN FORMATS</span>
            <h2>Choose the Content Your Next Campaign Needs</h2>
            <p style={{ color: '#a3a3a3', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Tailored visual formats built for every stage of your customer journey.
            </p>
          </div>

          <div className="campaign-needs-grid reveal-from-left reveal-delay-200">
            {campaignNeeds.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                className="hover-lift"
              >
                <div style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(59, 130, 246, 0.25))',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: '#38bdf8',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1.25rem'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#a3a3a3', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. FROM FIRST IDEA TO FINAL DELIVERY (Slide 5: Process) ─── */}
        <section className="svc-section svc-section-alt" id="process" style={{ background: '#f8f9fa' }}>
          <div className="svc-section-header reveal-blur">
            <span className="svc-label" style={{ color: '#6b7280' }}>OUR PROCESS</span>
            <h2 style={{ color: '#111827' }}>From First Idea to Final Delivery</h2>
            <p style={{ color: '#4b5563', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              A disciplined four-phase production framework ensuring cinema-grade standards every time.
            </p>
          </div>
          <div className="svc-process-row reveal-from-left reveal-delay-200">
            {processSteps.map((item, i) => (
              <div className="svc-process-step" key={i}>
                <div className="svc-process-circle">{item.step}</div>
                {i < processSteps.length - 1 && <div className="svc-process-line" />}
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 8. READY FOR EVERY CHANNEL (Slide 6: Deliverables) ─── */}
        <section className="svc-section" id="deliverables">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">READY FOR EVERY CHANNEL</span>
            <h2>Content That Is Ready to Use Everywhere</h2>
            <p style={{ color: '#a3a3a3', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Clear deliverables. Agreed before production. Zero licensing friction.
            </p>
          </div>
          <div className="svc-get-grid reveal-from-left reveal-delay-200">
            {deliverables.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div className="svc-get-card" key={i}>
                  <span className="svc-get-icon">
                    <IconComp size={20} />
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 9. QUALITY & PROOF (High Contrast Text & Clean Cards) ─── */}
        <section className="svc-section svc-section-alt" id="quality-proof" style={{ background: '#f8f9fa' }}>
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label" style={{ color: '#6b7280' }}>QUALITY &amp; PROOF</span>
            <h2 style={{ color: '#111827' }}>Quality Is Built into the Process</h2>
            <p style={{ color: '#4b5563', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Real client results, verified standards, and zero artificial claims.
            </p>
          </div>

          <div className="svc-container-inner" style={{ maxWidth: '1200px', margin: '2.5rem auto 0', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* 4 Pillars Grid (White Cards with Dark Text) */}
            <div className="quality-pillars-grid reveal-zoom reveal-delay-100">
              {qualityPillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '16px',
                      padding: '1.75rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                      transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    className="hover-lift"
                  >
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#f0f9ff',
                      border: '1px solid #bae6fd',
                      color: '#0284c7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#111827', margin: 0 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Featured Client Showcase: Team3 Associates */}
            <div className="featured-client-showcase reveal-from-left reveal-delay-200">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '0.35rem 0.85rem', borderRadius: '30px', marginBottom: '1.25rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f472b6' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f472b6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    CLIENT TESTIMONIAL VIDEO
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                  Team3 Associates
                </h3>

                <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  &ldquo;Watch the client&apos;s own words on Instagram as they share their experience working with Hynox for architectural and commercial video production.&rdquo;
                </p>

                <div className="featured-client-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <a
                    href="https://www.instagram.com/reel/DecBeuOSo0i/?cplk=MmI5ZTBrYXF4b2My"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn featured-client-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #e1306c 0%, #fd1d1d 50%, #f77737 100%)',
                      border: 'none',
                      color: '#ffffff',
                      fontWeight: 600,
                      padding: '0.85rem 1.75rem',
                      borderRadius: '30px',
                      boxShadow: '0 8px 25px rgba(225, 48, 108, 0.35)',
                      transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.86 3.9 2.32 7.15 2.17 8.42 2.11 8.8 2.1 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.27.19-6.78 2.7-6.97 6.98C.01 8.33 0 8.74 0 12s.01 3.67.08 4.95c.19 4.28 2.7 6.79 6.97 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.08c4.28-.19 6.79-2.7 6.98-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.08-4.95c-.19-4.28-2.7-6.79-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                    </svg>
                    <span>Watch Testimonial</span>
                    <ExternalLink size={16} />
                  </a>

                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Verified Client Video</span>
                </div>
              </div>

              {/* Reel Card Preview */}
              <div className="featured-client-preview">
                <Image
                  src="/images/photography/3.webp"
                  alt="Team3 Associates Architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: 'cover' }}
                />
                <a
                  href="https://www.instagram.com/reel/DecBeuOSo0i/?cplk=MmI5ZTBrYXF4b2My"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                  aria-label="Play testimonial video on Instagram"
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    transition: 'transform 0.2s ease'
                  }}>
                    <Play size={26} fill="currentColor" style={{ marginLeft: '3px' }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. REDESIGNED FAQ (Clean Dark Mode Accordion) ─── */}
        <section className="svc-section" id="faq">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: '#a3a3a3', maxWidth: '600px', margin: '0.75rem auto 0', fontSize: '1rem', lineHeight: '1.6' }}>
              Everything you need to know about our photography, videography, and UGC workflows.
            </p>
          </div>

          <div className="svc-container-inner reveal-from-left reveal-delay-200" style={{ maxWidth: '850px', margin: '2.5rem auto 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    background: isOpen ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isOpen ? 'rgba(56, 189, 248, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '14px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      background: 'transparent',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: '#ffffff',
                      fontSize: '1.02rem',
                      fontWeight: 600,
                      gap: '1rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      color: isOpen ? '#38bdf8' : '#888888',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background 0.3s ease'
                    }}>
                      <Plus size={16} style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }} />
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '0 1.5rem 1.25rem',
                      color: '#a3a3a3',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '1rem'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 11. CTA SECTION (WHITE BACKGROUND AS REQUESTED) ─── */}
        <section
          id="cta"
          className="photo-cta-section"
          style={{
            padding: '6rem 1.5rem',
            background: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }} className="reveal-fade-in">
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#6b7280',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              YOUR NEXT PROJECT
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}
            >
              Let&apos;s Build Your Brand Visually
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#4b5563',
                lineHeight: '1.7',
                marginBottom: '2.5rem',
                maxWidth: '680px',
                margin: '0 auto 2.5rem'
              }}
            >
              Bring us a product, service, space, or story. We&apos;ll shape the right mix of shoot, content, and editing for your goals.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '3rem',
                color: '#374151',
                fontSize: '0.95rem',
                fontWeight: 500
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '0.5rem 1.15rem', borderRadius: '30px' }}>
                <Check size={16} color="#0284c7" /> Project-based packages
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '0.5rem 1.15rem', borderRadius: '30px' }}>
                <Check size={16} color="#0284c7" /> Custom creative direction
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '0.5rem 1.15rem', borderRadius: '30px' }}>
                <Check size={16} color="#0284c7" /> Production under one roof
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link
                href="/contact"
                className="btn"
                style={{
                  padding: '1rem 2.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#111827',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: '30px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                }}
              >
                <Mail size={16} />
                Start a Project
              </Link>
              <a
                href="https://wa.me/918870524355"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  padding: '1rem 2.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#25D366',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: '30px',
                  textDecoration: 'none',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.25)'
                }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.772-.725 2.02-1.425.25-.7.25-1.3 0-1.425-.075-.125-.27-.199-.57-.35zM12 2C6.477 2 2 6.477 2 12c0 1.74.443 3.37 1.217 4.793L2 22l5.377-1.411A9.947 9.947 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.153-.443-4.466-1.214l-.32-.189-3.32.872.887-3.218-.207-.33A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', color: '#6b7280', fontSize: '0.92rem', alignItems: 'center' }}>
              <a href="mailto:thehynoxofficial@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                thehynoxofficial@gmail.com
              </a>
              <span>·</span>
              <a href="tel:+918870524355" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 88705 24355
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
