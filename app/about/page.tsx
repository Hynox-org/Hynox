'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Code2, Smartphone, Database, ShoppingBag, Bot, Camera, Video,
  Check, ArrowRight, ExternalLink, Mail, MapPin, Phone,
  Target, Eye, ShieldCheck, Compass, Sparkles, Building2
} from 'lucide-react';
import Header from '../components/Header';
import CubesBackground from '../components/CubesBackground';
import Footer from '../components/Footer';
import TestimonialVideoSection from '../components/TestimonialVideoSection';

// Animated Counter component that counts up from 0 when scrolled into view
function MetricCounter({
  target,
  label,
  sub,
  isVisible
}: {
  target: { type: 'single' | 'range'; end: number; end2?: number; prefix?: string; suffix?: string };
  label: string;
  sub: string;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(() => {
    if (target.type === 'range') return '0–0';
    return `0${target.suffix || ''}`;
  });

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds smooth count-up

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      if (target.type === 'range') {
        const cur1 = Math.round(ease * target.end);
        const cur2 = Math.round(ease * (target.end2 || 0));
        setDisplayValue(`${cur1}–${cur2}`);
      } else {
        const cur = Math.round(ease * target.end);
        setDisplayValue(`${target.prefix || ''}${cur}${target.suffix || ''}`);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, target]);

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, color: '#111827', lineHeight: '1', letterSpacing: '-0.03em', marginBottom: '0.5rem', fontVariantNumeric: 'tabular-nums' }}>
        {displayValue}
      </div>
      <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>
        {label}
      </div>
      <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
        {sub}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const [metricsVisible, setMetricsVisible] = useState(false);

  useEffect(() => {
    if (!metricsRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setMetricsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

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

  const coreCapabilities = [
    {
      icon: Code2,
      title: 'Web & Mobile App Engineering',
      desc: 'High-performance Next.js websites, progressive web applications, and native-feeling iOS & Android mobile apps built on robust modern stacks.',
      link: '/services/website-development',
      linkText: 'Explore Web & Apps'
    },
    {
      icon: Database,
      title: 'Custom ERP & Business Software',
      desc: 'End-to-end management systems, inventory workflows, billing platforms (including BillDesk for hospitality), and scalable enterprise software.',
      link: '/services/erp-software',
      linkText: 'Explore ERP Systems'
    },
    {
      icon: ShoppingBag,
      title: 'Shopify E-Commerce & Growth',
      desc: 'Official Shopify Partners crafting bespoke storefronts, frictionless checkout funnels, and data-backed performance marketing campaigns.',
      link: '/services/shopify-stores',
      linkText: 'Explore E-Commerce'
    }
  ];

  const metricsData = [
    {
      target: { type: 'single' as const, end: 15, suffix: '+' },
      label: 'Global Clients',
      sub: 'India, UK & Finland'
    },
    {
      target: { type: 'single' as const, end: 100, suffix: '%' },
      label: 'In-House Execution',
      sub: 'Zero outsourcing'
    },
    {
      target: { type: 'range' as const, end: 7, end2: 14 },
      label: 'Days Sprint Turnaround',
      sub: 'Rapid milestone delivery'
    },
    {
      target: { type: 'single' as const, end: 2 },
      label: 'Strategic Hubs',
      sub: 'Coimbatore & Tiruppur'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Engineering Rigor',
      desc: 'Clean architecture, production security, and speed. We write software designed to perform under heavy operational loads.'
    },
    {
      icon: Eye,
      title: 'Direct Builder Access',
      desc: 'No account managers or sales runarounds. You collaborate directly with the engineers and creative directors building your solution.'
    },
    {
      icon: ShieldCheck,
      title: 'Measurable Commercial Return',
      desc: 'Whether building enterprise software or shooting cinema visuals, our benchmark is real business growth and revenue.'
    }
  ];

  return (
    <>
      <Header />

      <main>
        {/* ─── 1. HERO SECTION ─── */}
        <section className="hero-center-section">
          <div className="absolute inset-0 w-full h-full z-0" style={{ background: '#050505' }}>
            <CubesBackground />
          </div>

          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(20,35,100,0.25) 0%, rgba(5,5,5,0.65) 75%)'
            }}
          />

          <div className="hero-center-content" style={{ position: 'relative', zIndex: 10 }}>
            <span className="hero-badge reveal-fade-in">
              ABOUT HYNOX
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              Engineering Systems.<br />
              <span className="svc-hero-accent-bw">Empowering Modern Brands.</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200" style={{ maxWidth: '620px', margin: '0 auto 2rem' }}>
              A premier software engineering and creative production firm based in Coimbatore, partnering with ambitious businesses globally.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <Link href="/contact" className="btn btn-hero-solid">
                Work With Us <ArrowRight size={16} style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
              </Link>
              <Link href="/works" className="btn btn-hero-outline">
                See Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 2. WHO WE ARE & OUR MISSION (DARK SECTION) ─── */}
        <section className="svc-section" id="story">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHO WE ARE</span>
            <h2>Built from Coimbatore for the World</h2>
            <p style={{ color: '#a3a3a3', maxWidth: '750px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              We started HYNOX with a single clear observation: modern businesses waste critical time dealing with fragmented agencies — one for software, another for marketing, and another for photography. HYNOX unifies enterprise-grade software engineering with cinema-grade creative production under one roof.
            </p>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.75rem'
              }}
              className="reveal-zoom reveal-delay-100"
            >
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '20px',
                  padding: '2.25rem 2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <Target size={22} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0284c7', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  OUR MISSION
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  Engineering Practical Commercial Advantage
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                  We engineer fast, scalable, and bug-free digital systems that automate operational bottlenecks, expand market reach, and deliver tangible ROI for every client.
                </p>
              </div>

              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '20px',
                  padding: '2.25rem 2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="hover-lift"
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#f5f3ff',
                  border: '1px solid #ddd6fe',
                  color: '#7c3aed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <Eye size={22} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7c3aed', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  OUR VISION
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  South India&apos;s Foremost Digital Powerhouse
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                  From Coimbatore&apos;s industrial corridor to clients in the UK and Finland, our vision is to establish Tamil Nadu as a benchmark for world-class software craft.
                </p>
              </div>

              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '20px',
                  padding: '2.25rem 2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="hover-lift"
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <ShieldCheck size={22} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  OUR STANDARD
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  100% In-House Responsibility
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                  No subcontracting to random freelancers. Every line of code, database migration, and camera angle is created and governed directly by our core team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. WHAT WE DO: CORE SOFTWARE & DIGITAL SERVICES (LIGHT SECTION) ─── */}
        <section className="svc-section svc-section-alt" id="what-we-do" style={{ background: '#f8f9fa' }}>
          <div className="svc-section-header reveal-blur">
            <span className="svc-label" style={{ color: '#0284c7' }}>WHAT WE DO</span>
            <h2 style={{ color: '#111827' }}>Software, Applications &amp; Business Systems</h2>
            <p style={{ color: '#4b5563', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              From initial architecture to continuous production scale, we design, engineer, and support mission-critical software systems and scalable applications.
            </p>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
              }}
              className="reveal-zoom reveal-delay-100"
            >
              {coreCapabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '20px',
                      padding: '2.25rem 2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    className="hover-lift"
                  >
                    <div>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: '#f0f9ff',
                        border: '1px solid #bae6fd',
                        color: '#0284c7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem'
                      }}>
                        <Icon size={24} />
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.65', margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>

                    <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #f3f4f6' }}>
                      <Link
                        href={item.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: '#0284c7',
                          fontWeight: 600,
                          fontSize: '0.92rem',
                          textDecoration: 'none'
                        }}
                      >
                        {item.linkText} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 4. OUR VALUES & PRINCIPLES (DARK SECTION) ─── */}
        <section className="svc-section" id="values">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">OUR VALUES</span>
            <h2>How We Build &amp; Partner</h2>
            <p style={{ color: '#a3a3a3', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              We hold ourselves to rigorous standards — combining technical depth with clear communication.
            </p>
          </div>

          <div className="svc-build-grid reveal-zoom reveal-delay-200">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <div className="svc-build-card" key={i}>
                  <div className="svc-build-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 6. BY THE NUMBERS (LIGHT SECTION) ─── */}
        <section className="svc-section svc-section-alt" id="metrics" style={{ background: '#f8f9fa' }} ref={metricsRef}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem',
                textAlign: 'center'
              }}
              className="reveal-fade-in"
            >
              {metricsData.map((m, i) => (
                <MetricCounter
                  key={i}
                  target={m.target}
                  label={m.label}
                  sub={m.sub}
                  isVisible={metricsVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. LOCATIONS (DARK SECTION) ─── */}
        <section className="svc-section" id="locations">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">OUR PRESENCE</span>
            <h2>Where to Find Us</h2>
            <p style={{ color: '#a3a3a3', maxWidth: '600px', margin: '0.75rem auto 0', fontSize: '1rem', lineHeight: '1.6' }}>
              Operating from two strategic hubs in Tamil Nadu, serving businesses locally and globally.
            </p>
          </div>

          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '0 1.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
            className="reveal-fade-in"
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '2.25rem 2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  Coimbatore Office
                </h3>
              </div>
              <p style={{ color: '#a3a3a3', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1.25rem' }}>
                3rd Floor, Sri Govindaraj Tower, 38/4, Father Randy St, R.S. Puram, Coimbatore, Tamil Nadu 641002
              </p>
              <div style={{ fontSize: '0.88rem', color: '#38bdf8' }}>
                Headquarters · Software &amp; Engineering Hub
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '2.25rem 2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(244, 114, 182, 0.1)', color: '#f472b6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  Tiruppur Studio
                </h3>
              </div>
              <p style={{ color: '#a3a3a3', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1.25rem' }}>
                Jeeva street, Pandian Nagar, Sathya Colony, Chettipalayam, Tiruppur, Tamil Nadu 641602
              </p>
              <div style={{ fontSize: '0.88rem', color: '#f472b6' }}>
                Creative Production &amp; Media Studio
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. TESTIMONIALS SECTION (PLAYING REVIEW-VIDEO, CLICK FOR SOUND POPUP) ─── */}
        <TestimonialVideoSection />

        {/* ─── 8. CLEAN WHITE CTA SECTION ─── */}
        <section
          id="cta"
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
              PARTNER WITH HYNOX
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
              Ready to Build Something Remarkable?
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#4b5563',
                lineHeight: '1.7',
                maxWidth: '680px',
                margin: '0 auto 2.5rem'
              }}
            >
              Whether you need scalable enterprise software, a high-converting web application, or specialized architectural visual production — let&apos;s talk.
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
                <Check size={16} color="#0284c7" /> Direct Founder &amp; Developer Access
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '0.5rem 1.15rem', borderRadius: '30px' }}>
                <Check size={16} color="#0284c7" /> 100% In-House Team
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '0.5rem 1.15rem', borderRadius: '30px' }}>
                <Check size={16} color="#0284c7" /> Proven Global Track Record
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
                Get in Touch
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
