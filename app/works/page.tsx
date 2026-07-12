'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WorksPage() {
  useEffect(() => {
    const animationClasses = [
      'reveal-on-scroll', 'reveal-fade-in', 'reveal-from-left',
      'reveal-from-right', 'reveal-zoom', 'reveal-blur',
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

  const featuredProjects = [
    { 
      title: "SugarStar", 
      cat: "Website & Social Marketing", 
      desc: "Premium confectionery brand scaling digitally.", 
      img: "/images/sugarstar_web.jpeg",
      points: ["Premium Shopify Store Development", "High-Converting UX/UI Design", "Social Media Growth Strategy", "Meta Performance Marketing Campaigns"]
    },
    { 
      title: "Team3 Associates", 
      cat: "Website & Digital Marketing", 
      desc: "Interior Design and Project Execution firm.", 
      img: "/images/team3_web.png",
      points: ["Corporate Website Architecture", "Local SEO Optimization", "Lead Generation Campaigns", "Brand Identity & Positioning"]
    },
    { 
      title: "JP Interiors", 
      cat: "Website Development", 
      desc: "Interior design portfolio and service showcase.", 
      img: "/images/JpWeb_works.png",
      points: ["Portfolio Website Development", "Fast & Responsive Interface", "Interactive Service Showcases", "Technical SEO Implementation"]
    },
    { 
      title: "JP Interiors", 
      cat: "Mobile App Development", 
      desc: "Custom business automation tool.", 
      img: "/images/JpApp_works.png",
      points: ["Custom Business Automation", "Internal Project Management", "Cross-Platform iOS & Android App", "Real-time Cloud Syncing"]
    }
  ];

  const otherProjects = [
    { title: "Teerex", cat: "Custom Development", desc: "E-commerce platform with custom features", img: "/images/teerex_web.png" },
    { title: "Mallika Garments", cat: "Custom Development", img: "/images/malika-garments_web.jpg" },
    { title: "Graaps", cat: "Clothing Brand", img: "/images/graaps_web.png" },
    { title: "Food delivery app", cat: "Custom Development", img: "/images/aharraa_web.png" },
    { title: "Kores Fabrics", cat: "Clothing Brand", img: "/images/kores_web.png" },
    { title: "Kido Care", cat: "Kids Clothing Brand", img: "/images/kido_care_web.jpg" },
    { title: "Sun Holidays", cat: "Tours and Travel", img: "/images/sun_holidays_web.png" },
    { title: "Livinza", cat: "Interior Business", img: "/images/livinza_web.png" }
  ];

  return (
    <>
      <Header />
      
      <main className="works-page" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
        {/* FEATURED WORKS GRID */}
        <section style={{ padding: '2rem 5% 6rem 5%' }}>
          <style dangerouslySetInnerHTML={{__html: `
            .client-section {
              margin-bottom: 6rem;
            }
            .client-heading {
              font-size: 2.5rem;
              font-weight: 500;
              color: #fff;
              margin-bottom: 2.5rem;
              letter-spacing: -0.02em;
            }
            .sketch-grid-4 {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 2.5rem;
            }
            .sketch-grid-3 {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 2.5rem;
            }
            .sketch-grid-2 {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 2.5rem;
            }
            .sketch-card {
              background: #ffffff;
              border-radius: 12px;
              padding: 1.2rem 1.2rem 2.5rem 1.2rem;
              box-shadow: 0 10px 40px rgba(0,0,0,0.5);
              display: flex;
              flex-direction: column;
              transition: transform 0.3s ease;
              color: #000;
            }
            .sketch-card:hover {
              transform: scale(1.02);
            }
            .sketch-media {
              width: 100%;
              aspect-ratio: 1/1;
              background: #f0f0f0;
              border-radius: 6px;
              overflow: hidden;
              margin-bottom: 1.5rem;
            }
            .sketch-media-rect {
              width: 100%;
              aspect-ratio: 16/10;
              background: #f0f0f0;
              border-radius: 6px;
              overflow: hidden;
              margin-bottom: 1.5rem;
            }
            .sketch-media img, .sketch-media video,
            .sketch-media-rect img, .sketch-media-rect video {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            }
            .sketch-text {
              text-align: center;
              font-size: 1.2rem;
              font-weight: 600;
              letter-spacing: 0.02em;
            }
            @media (max-width: 900px) {
              .sketch-grid-4, .sketch-grid-3, .sketch-grid-2 {
                grid-template-columns: 1fr;
              }
            }
            
            /* Marquee CSS */
            .works-marquee-container {
              overflow: hidden;
              width: 100%;
              padding: 3rem 0 0 0;
              background: rgba(255,255,255,0.01);
              border-top: 1px solid rgba(255,255,255,0.05);
              position: relative;
            }
            .works-marquee-track {
              display: flex;
              gap: 2rem;
              width: max-content;
              animation: scrollWorks 30s linear infinite;
            }
            .works-marquee-container:hover .works-marquee-track {
              animation-play-state: paused;
            }
            @keyframes scrollWorks {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 1rem)); }
            }
            .mini-work-card {
              width: 350px;
              border-radius: 16px;
              overflow: hidden;
              background: rgba(255,255,255,0.03);
              border: 1px solid rgba(255,255,255,0.05);
              flex-shrink: 0;
            }
            .mini-work-img {
              width: 100%;
              height: 200px;
            }
            .mini-work-img img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .mini-work-info {
              padding: 1.5rem;
            }
            .mini-work-title {
              font-size: 1.3rem;
              color: #fff;
              margin-bottom: 0.5rem;
              font-weight: 500;
            }
            .mini-work-cat {
              font-size: 0.8rem;
              color: #888;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }

            @media (max-width: 900px) {
              .featured-works-grid {
                grid-template-columns: 1fr;
              }
            }
          `}} />
          
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* SugarStar */}
            <div className="client-section reveal-from-bottom">
              <h2 className="client-heading">SugarStar</h2>
              <div className="sketch-grid-4">
                <div className="sketch-card">
                  <div className="sketch-media">
                    <img src="/images/sugarstar_web.jpeg" alt="Web Dev" />
                  </div>
                  <div className="sketch-text">Web Development</div>
                </div>
                <div className="sketch-card">
                  <div className="sketch-media">
                    <video src="/videos/3.mp4" autoPlay loop muted playsInline></video>
                  </div>
                  <div className="sketch-text">Social Media Marketing</div>
                </div>
                <div className="sketch-card">
                  <div className="sketch-media">
                    <img src="/performance-marketing-hero.png" alt="Performance Market" />
                  </div>
                  <div className="sketch-text">Performance Marketing</div>
                </div>
                <div className="sketch-card">
                  <div className="sketch-media">
                    <video src="/videos/influencer_marketing.mp4" autoPlay loop muted playsInline></video>
                  </div>
                  <div className="sketch-text">Influencer Marketing</div>
                </div>
              </div>
            </div>

            {/* Team 3 Associates */}
            <div className="client-section reveal-from-bottom">
              <h2 className="client-heading">Team 3 Associates</h2>
              <div className="sketch-grid-3">
                <div className="sketch-card">
                  <div className="sketch-media">
                    <img src="/images/team3_web.png" alt="Web Dev" />
                  </div>
                  <div className="sketch-text">Web Development</div>
                </div>
                <div className="sketch-card">
                  <div className="sketch-media">
                    <video src="/videos/2.mp4" autoPlay loop muted playsInline></video>
                  </div>
                  <div className="sketch-text">Photography and Videography Production</div>
                </div>
                <div className="sketch-card">
                  <div className="sketch-media" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0a' }}>
                    <span style={{ fontSize: '5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '4px', fontFamily: 'var(--font-geist-sans), sans-serif' }}>T3</span>
                  </div>
                  <div className="sketch-text">Social Media Management</div>
                </div>
              </div>
            </div>

            {/* JP Interior */}
            <div className="client-section reveal-from-bottom">
              <h2 className="client-heading">JP Interior</h2>
              <div className="sketch-grid-2">
                <div className="sketch-card">
                  <div className="sketch-media-rect">
                    <img src="/images/JpWeb_works.png" alt="Web Dev" />
                  </div>
                  <div className="sketch-text">Web Development</div>
                </div>
                <div className="sketch-card">
                  <div className="sketch-media-rect">
                    <img src="/images/JpApp_works.png" alt="App Dev" />
                  </div>
                  <div className="sketch-text">App Development</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* AUTOSCROLL SECTION */}
        <section className="works-marquee-section">
          <div className="svc-section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2>More Successful Projects</h2>
          </div>
          <div className="works-marquee-container">
            <div className="works-marquee-track">
              {/* Double array for seamless scroll */}
              {[...otherProjects, ...otherProjects].map((item, i) => (
                <div className="mini-work-card" key={i}>
                  <div className="mini-work-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="mini-work-info">
                    <h4 className="mini-work-title">{item.title}</h4>
                    <span className="mini-work-cat">{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="cta" className="cta-section reveal-zoom" style={{ margin: '6rem auto', padding: '0 5%', display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '1200px' }}>
          <div className="cta-outer-card">
            <div className="cta-card">
              <h2>Ready to build something?</h2>
              <p className="cta-subtitle">Tell us what you need — we'll get back to you within 24 hours.</p>
              
              <div className="cta-buttons">
                <Link href="/contact" className="cta-btn primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Start a Project
                </Link>
                <a href="https://wa.me/918870524355" target="_blank" rel="noopener noreferrer" className="cta-btn secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  WhatsApp Us
                </a>
              </div>

              <div className="cta-contact">
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
      </main>

      <Footer />
    </>
  );
}
