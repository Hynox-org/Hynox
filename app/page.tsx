"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
const CubesBackground = dynamic(() => import("./components/CubesBackground"), { ssr: false });
import { ArrowRight, ShoppingBag, Factory, Briefcase, Check, Users, MapPin, Zap, MessageSquare, Globe, LifeBuoy } from "lucide-react";

export default function Home() {
  /* 
  const messages = [
    { text: "Welcome to Hynox.", bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { text: "We build Websites.", bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
    { text: "Mobile Apps.", bg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" },
    { text: "Custom Software.", bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
    { text: "Shopify Stores.", bg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" },
    { text: "& ERP Systems.", bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" }
  ];
  const [showIntro, setShowIntro] = useState(true);
  const [step, setStep] = useState(0);
  */

  useEffect(() => {
    // Bi-directional Scroll Animation Observer
    const animationClasses = [
      'reveal-on-scroll',
      'reveal-fade-in',
      'reveal-from-left',
      'reveal-from-right',
      'reveal-zoom',
      'reveal-flip-x',
      'reveal-blur',
      'reveal-rotate',
      'reveal-scale-up',
    ];

    const selector = animationClasses.map(c => `.${c}`).join(', ');

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        } else {
          // Reverse animation when scrolling back up
          entry.target.classList.remove('is-visible');
          entry.target.classList.add('is-hidden');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 
      {showIntro && (
        <section className="intro-screen">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className="intro-bg-image" 
              style={{ 
                backgroundImage: `url(${msg.bg})`,
                opacity: step === index ? 1 : 0 
              }} 
            />
          ))}
          <div className="intro-bg-overlay"></div>
          <h1 
            key={step} 
            className="intro-sequence-text-white"
          >
            {messages[step]?.text || ""}
          </h1>
        </section>
      )} 
      */}

      <Header />

      <main id="home" className="hero-center-section">
        {/* Animated Cubes Background */}
        <div className="absolute inset-0 w-full h-full z-0" style={{ background: "#050505" }}>
          <CubesBackground />
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(20,35,100,0.25) 0%, rgba(5,5,5,0.65) 75%)" }} />

        {/* Centred content */}
        <div className="hero-center-content">
          <span className="hero-badge reveal-fade-in">
            Software &amp; App Development Company in Coimbatore
          </span>

          <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
            Custom Software, Web &amp;<br className="hidden md:block" /> App Development in Coimbatore
          </h1>

          <p className="hero-center-p reveal-fade-in reveal-delay-200">
            HYNOX is the leading software development company in Coimbatore, Tamil Nadu. We build fast websites, custom mobile apps, responsive ERP systems, and AI automation to scale your business globally. We are Shopify partners.
          </p>

          <div className="hero-center-actions reveal-fade-in reveal-delay-300">
            <Link href="/contact" className="btn btn-hero-solid">Get Free Consultation</Link>
            <Link href="/works" className="btn btn-hero-outline">See Our Work</Link>
          </div>
        </div>
      </main>

      <div className="marquee-container reveal-fade-in reveal-delay-400">
        <div className="marquee-content">
          <span className="marquee-text">Trusted by 15+ businesses across India, UK & Finland — from Coimbatore textile brands to global ecommerce stores</span>
          <span className="marquee-text">Trusted by 15+ businesses across India, UK & Finland — from Coimbatore textile brands to global ecommerce stores</span>
          <span className="marquee-text">Trusted by 15+ businesses across India, UK & Finland — from Coimbatore textile brands to global ecommerce stores</span>
          <span className="marquee-text">Trusted by 15+ businesses across India, UK & Finland — from Coimbatore textile brands to global ecommerce stores</span>
        </div>
      </div>

      <section className="global-reach">
        <span className="section-subtitle reveal-blur">GLOBAL REACH</span>
        <h2 className="reveal-on-scroll">Delivering from Coimbatore to the world</h2>
        
        <div className="cards-grid">
          <div className="reach-card reveal-from-left reveal-delay-100">
            <div className="flag-box">
              <img src="https://flagcdn.com/in.svg" alt="India Flag" className="card-flag" />
            </div>
            <div className="reach-card-content">
              <h4>India</h4>
              <p>15+ clients across Tamil Nadu — textile brands, retail, travel & food businesses</p>
            </div>
          </div>
          
          <div className="reach-card reveal-zoom reveal-delay-200">
            <div className="flag-box">
              <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="card-flag" />
            </div>
            <div className="reach-card-content">
              <h4>United Kingdom</h4>
              <p>Built Graaps clothing brand's online store targeting the UK market</p>
            </div>
          </div>
          
          <div className="reach-card reveal-from-right reveal-delay-300">
            <div className="flag-box">
              <img src="https://flagcdn.com/fi.svg" alt="Finland Flag" className="card-flag" />
            </div>
            <div className="reach-card-content">
              <h4>Finland</h4>
              <p>Supported Graaps and Voice.ai from their Finland base</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="services-section" style={{ paddingBottom: '2rem' }}>
        <div className="services-header reveal-blur">  
          <span className="section-subtitle">OUR PRODUCTS</span>
          <h2>Digital Products & Platforms</h2>
          <p>Explore our proprietary systems built for modern businesses and institutions.</p>
        </div>

        <div className="services-category reveal-from-left reveal-delay-100">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            
            <Link href="https://ai-learning-platform-wheat-two.vercel.app/" target="_blank" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" alt="Hynox AI Campus" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-ai">Platform</span>
                <h4>Hynox AI Campus</h4>
                <p>AI-driven campus management and intelligent learning ecosystem</p>
                <div className="service-link">Know More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            
            <Link href="/contact" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" alt="Shopify Checkout" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-dev">E-Commerce</span>
                <h4>Shopify Checkout</h4>
                <p>Seamless, high-converting custom checkout experiences for Shopify</p>
                <div className="service-link">Know More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            
            <Link href="/contact" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" alt="Healthcare Card System" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-dev" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}>Healthcare</span>
                <h4>Healthcare Card System</h4>
                <p>Secure digital health cards and centralized patient record management</p>
                <div className="service-link">Know More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-header reveal-blur">  
          <span className="section-subtitle">OUR SERVICES</span>
          <h2>Software &amp; Digital Services in Coimbatore</h2>
          <p>Custom software development and digital marketing services. Design, development, and marketing — all under one roof.</p>
        </div>

        <div className="services-category reveal-from-left reveal-delay-100">
          <h3 className="category-title">BUILD</h3>
          <div className="services-grid">
            <Link href="/services/website-development" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" alt="Website Development" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-dev">Development</span>
                <h4>Website Development</h4>
                <p>Fast, modern websites that convert visitors into customers</p>
                <div className="service-link">Learn More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            <Link href="/services/mobile-apps" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" alt="Mobile Apps" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-dev">Development</span>
                <h4>Mobile Apps</h4>
                <p>iOS & Android apps built for your business workflow</p>
                <div className="service-link">Learn More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            <Link href="/services/erp-software" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="Custom Software & ERP" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-dev">Development</span>
                <h4>Custom Software & ERP</h4>
                <p>Automate operations — orders, inventory, billing, all in one system</p>
                <div className="service-link">Learn More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            <Link href="/services/shopify-stores" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="/images/shopify_logo_thumbnail.png" alt="Shopify Stores" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-dev">Development</span>
                <h4>Shopify Stores</h4>
                <p>Launch your ecommerce store — from setup to first sale</p>
                <div className="service-link">Learn More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            <Link href="/services/ai-solutions" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" alt="AI/ML Solutions" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-ai">AI/ML</span>
                <h4>AI/ML Solutions</h4>
                <p>Automate repetitive tasks, reduce costs, scale faster</p>
                <div className="service-link">Learn More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', justifyContent: 'center' }}>
              <div>
                <span className="badge-dev" style={{ background: 'linear-gradient(135deg, #7928CA 0%, #FF007A 100%)', color: '#ffffff', marginBottom: '1.25rem', display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase' }}>Custom</span>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', marginTop: '0.5rem' }}>Have a Custom Project?</h4>
                <p style={{ color: '#a3a3a3', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', margin: 0 }}>
                  Need a custom software system, mobile app, or specialized integration? We build bespoke tech tailored to your workflows.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/contact" className="service-link" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
                  Contact Us <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="services-category reveal-from-right reveal-delay-200">
          <h3 className="category-title">GROW</h3>
          <div className="services-grid">
            <Link href="/services/performance-marketing" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Performance Marketing" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-marketing">Marketing</span>
                <h4>Performance Marketing</h4>
                <p>Meta & Google Ads that bring real paying customers</p>
                <div className="service-link">Learn More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            <Link href="/services/social-media-marketing" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="Social Media Marketing" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-marketing">Marketing</span>
                <h4>Social Media Marketing</h4>
                <p>Content + strategy to grow your brand online</p>
                <div className="service-link">Learn More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
            <Link href="/services/photography-and-videography" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <img src="/images/ugc_video_creation_thumbnail.png" alt="Photography & Videography" className="service-card-image" loading="lazy" />
              <div className="service-card-content">
                <span className="badge-content">Content</span>
                <h4>Photography & Videography</h4>
                <p>High-quality product shoots & UGC video creation</p>
                <div className="service-link">Learn More <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="industries" className="business-types-section">
        <div className="section-header reveal-on-scroll" style={{ textAlign: 'left' }}>
          <span className="section-subtitle">CORE SOLUTIONS</span>
          <h2>Transforming Businesses Across Industries</h2>
        </div>

        <div className="business-grid reveal-zoom reveal-delay-200">
          <div className="business-card">
            <div className="business-icon">
              <ShoppingBag size={24} />
            </div>
            <h4>End-to-End Ecommerce Support</h4>
            <p>We help clothing, food & retail businesses go online — with stores that actually sell.</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', color: '#444444', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li>Store Setup & Optimization</li>
              <li>Performance Marketing (Meta & Google Ads)</li>
              <li>Sales Funnel & Conversion Optimization</li>
              <li>Social Media Marketing & Management</li>
              <li>Product Shoots & UGC Video Creation</li>
              <li>Analytics, Tracking & Growth Monitoring</li>
            </ul>
            <Link href="/services/end-to-end-ecommerce" className="business-link">Scale your brand <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></Link>
          </div>

          <div className="business-card">
            <div className="business-icon">
              <Factory size={24} />
            </div>
            <h4>Enterprise Systems & Automation</h4>
            <p>ERP & automation systems that replace spreadsheets — orders, inventory, tracking.</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', color: '#444444', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li>Custom ERP & Business Platforms</li>
              <li>Workflow Automation & Process Control</li>
              <li>Inventory, Orders & Financial Systems</li>
              <li>Real-time Analytics & Monitoring</li>
              <li>System Integration & API Infrastructure</li>
            </ul>
            <Link href="https://end-to-end-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer" className="business-link">Automate your business <ArrowRight size={14} style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} /></Link>
          </div>
        </div>
      </section>
      <section id="work" className="our-work-section">
        <div className="section-header reveal-flip-x">
          <span className="section-subtitle">OUR WORK</span>
          <h2>Real projects. Real results.</h2>
        </div>

        <div className="work-marquee-wrapper reveal-from-left reveal-delay-200">
          <div className="work-marquee-container">
            <div className="work-marquee-content">
              {[
                { title: "SugarStar", category: "Shopify Development", badgeClass: "badge-dev", desc: "Premium confectionery online store", image: "/images/sugarstar_web.jpeg" },
                { title: "JP Interiors App", category: "App Development", badgeClass: "badge-dev", desc: "Custom business automation and project management app", image: "/images/JpApp_works.png" },
                { title: "Team3 Associates", category: "Custom Development", badgeClass: "badge-dev", desc: "Interior Design and Project Execution", image: "/images/team3_web.png" },
                { title: "JP Interiors Web", category: "Web Development", badgeClass: "badge-dev", desc: "Interior design portfolio and service showcase", image: "/images/JpWeb_works.png" },
                { title: "Teerex", category: "Custom Development", badgeClass: "badge-dev", desc: "E-commerce platform with custom features", image: "/images/teerex_web.png" },
                { title: "Mallika Garments", category: "Custom Development", badgeClass: "badge-dev", desc: "Fashion retail business solution", image: "/images/malika-garments_web.jpg" },
                { title: "Graaps", category: "Clothing Brand", badgeClass: "badge-marketing", desc: "Online clothing store", image: "/images/graaps_web.png" },
                { title: "Food delivery app", category: "Custom Development", badgeClass: "badge-dev", desc: "On-demand food delivery service", image: "/images/aharraa_web.png" },
                { title: "Kores Fabrics", category: "Clothing Brand", badgeClass: "badge-marketing", desc: "Online clothing Wholesale Store", image: "/images/kores_web.png" },
                { title: "Kido Care", category: "Kids Clothing Brand", badgeClass: "badge-ai", desc: "Online clothing store", image: "/images/kido_care_web.jpg" },
                { title: "Sun Holidays", category: "Tours and Travel Agency", badgeClass: "badge-content", desc: "Travel Agency Portfolio", image: "/images/sun_holidays_web.png" },
                { title: "Livinza", category: "Interior Business", badgeClass: "badge-content", desc: "Interior Business Portfolio", image: "/images/livinza_web.png" },
                // Duplicate for infinite scroll
                { title: "SugarStar", category: "Shopify Development", badgeClass: "badge-dev", desc: "Premium confectionery online store", image: "/images/sugarstar_web.jpeg" },
                { title: "JP Interiors App", category: "App Development", badgeClass: "badge-dev", desc: "Custom business automation and project management app", image: "/images/JpApp_works.png" },
                { title: "Team3 Associates", category: "Custom Development", badgeClass: "badge-dev", desc: "Interior Design and Project Execution", image: "/images/team3_web.png" },
                { title: "JP Interiors Web", category: "Web Development", badgeClass: "badge-dev", desc: "Interior design portfolio and service showcase", image: "/images/JpWeb_works.png" },
                { title: "Teerex", category: "Custom Development", badgeClass: "badge-dev", desc: "E-commerce platform with custom features", image: "/images/teerex_web.png" },
                { title: "Mallika Garments", category: "Custom Development", badgeClass: "badge-dev", desc: "Fashion retail business solution", image: "/images/malika-garments_web.jpg" },
                { title: "Graaps", category: "Clothing Brand", badgeClass: "badge-marketing", desc: "Online clothing store", image: "/images/graaps_web.png" },
                { title: "Food delivery app", category: "Custom Development", badgeClass: "badge-dev", desc: "On-demand food delivery service", image: "/images/aharraa_web.png" },
                { title: "Kores Fabrics", category: "Clothing Brand", badgeClass: "badge-marketing", desc: "Online clothing Wholesale Store", image: "/images/kores_web.png" },
                { title: "Kido Care", category: "Kids Clothing Brand", badgeClass: "badge-ai", desc: "Online clothing store", image: "/images/kido_care_web.jpg" },
                { title: "Sun Holidays", category: "Tours and Travel Agency", badgeClass: "badge-content", desc: "Travel Agency Portfolio", image: "/images/sun_holidays_web.png" },
                { title: "Livinza", category: "Interior Business", badgeClass: "badge-content", desc: "Interior Business Portfolio", image: "/images/livinza_web.png" }
              ].map((project, index) => (
                <div className="work-card" key={index}>
                  <div className="work-card-image">
                    <img src={project.image} alt={project.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="work-card-content">
                    <span className={project.badgeClass}>{project.category}</span>
                    <h4 className="work-title">{project.title}</h4>
                    <p className="work-highlight">
                      <Check size={14} className="check-icon" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle', color: '#ffffff' }} /> {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <section id="clients" className="clients-testimonials-section">
        <div className="section-header reveal-blur">
          <span className="section-subtitle">OUR CLIENTS</span>
          <h2>Businesses that trust us</h2>
        </div>

        <div className="clients-marquee-wrapper reveal-zoom reveal-delay-200">
          {/* Row 1: Leftward Scroll */}
          <div className="clients-marquee-container">
            <div className="clients-marquee-content clients-marquee-content-left">
              {[
                { name: "SugarStar", category: "Retail", logo: "/images/sugarstar_logo.jpg" },
                { name: "West", category: "Textile", logo: "/images/West_logo.png" },
                { name: "Aharraa", category: "Food", logo: "/images/aharraa_logo.jpg" },
                { name: "Teerex", category: "Textile", logo: "/images/teerex_logo.jpg" },
                { name: "Kyto", category: "Textile", logo: "/images/kyto_logo.jpg" },
                { name: "NSK", category: "Textile", logo: "/images/nsk_logo.jpg" },
                { name: "JP Nets", category: "Textile", logo: "/images/jpnets_logo.jpg" },
                { name: "Team3", category: "Interiors", logo: "/images/team3_logo.png" },
                // Duplicate for infinite scroll
                { name: "SugarStar", category: "Retail", logo: "/images/sugarstar_logo.jpg" },
                { name: "West", category: "Textile", logo: "/images/West_logo.png" },
                { name: "Aharraa", category: "Food", logo: "/images/aharraa_logo.jpg" },
                { name: "Teerex", category: "Textile", logo: "/images/teerex_logo.jpg" },
                { name: "Kyto", category: "Textile", logo: "/images/kyto_logo.jpg" },
                { name: "NSK", category: "Textile", logo: "/images/nsk_logo.jpg" },
                { name: "JP Nets", category: "Textile", logo: "/images/jpnets_logo.jpg" },
                { name: "Team3", category: "Interiors", logo: "/images/team3_logo.png" }
              ].map((client, index) => (
                <div className="client-logo-item" key={index}>
                  <div className="client-logo-box">
                    <img src={client.logo} alt={client.name} loading="lazy" style={{ backgroundColor: '#ffffff', padding: '10px', objectFit: 'contain', width: '100%', height: '100%' }} />
                  </div>
                  <p className="client-logo-name">{client.name}</p>
                  <p className="client-logo-category">{client.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Scroll */}
          <div className="clients-marquee-container" style={{ marginTop: '1.5rem' }}>
            <div className="clients-marquee-content clients-marquee-content-right">
              {[
                { name: "Mallika Garments", category: "Textile", logo: "/images/mallika_garments_logo.jpg" },
                { name: "NP Global Exports", category: "Textile", logo: "/images/npglobal_logo.jpg" },
                { name: "Graaps", category: "Textile", logo: "/images/graasp_logo.jpg" },
                { name: "Kores Fabrics", category: "Textile", logo: "/images/kores_logo.jpg" },
                { name: "Kido Care", category: "Textile", logo: "/images/kido_care_logo.png" },
                { name: "Sun Holidays", category: "Travel", logo: "/images/sun_holidays_logo.png" },
                { name: "Livinza", category: "Interiors", logo: "/images/livinza_logo.png" },
                // Duplicate for infinite scroll
                { name: "Mallika Garments", category: "Textile", logo: "/images/mallika_garments_logo.jpg" },
                { name: "NP Global Exports", category: "Textile", logo: "/images/npglobal_logo.jpg" },
                { name: "Graaps", category: "Textile", logo: "/images/graasp_logo.jpg" },
                { name: "Kores Fabrics", category: "Textile", logo: "/images/kores_logo.jpg" },
                { name: "Kido Care", category: "Textile", logo: "/images/kido_care_logo.png" },
                { name: "Sun Holidays", category: "Travel", logo: "/images/sun_holidays_logo.png" },
                { name: "Livinza", category: "Interiors", logo: "/images/livinza_logo.png" }
              ].map((client, index) => (
                <div className="client-logo-item" key={index}>
                  <div className="client-logo-box">
                    <img src={client.logo} alt={client.name} style={{ backgroundColor: '#ffffff', padding: '10px', objectFit: 'contain', width: '100%', height: '100%' }} />
                  </div>
                  <p className="client-logo-name">{client.name}</p>
                  <p className="client-logo-category">{client.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="testimonials-marquee-wrapper reveal-from-left reveal-delay-300">
          <div className="testimonials-marquee-container">
            <div className="testimonials-marquee-content">
              {[
                { quote: "We used to manage everything on books and WhatsApp. Their ERP software brought all our inventory and billing into one place. Saves us a lot of time daily.", author: "JP Aluminium" },
                { quote: "Our old website was really slow. Hynox rebuilt it on Shopify, and our sales instantly went up. Very easy to work with them.", author: "SugarStar" },
                { quote: "The site updates and order tracking app they built is super easy to use. Our team does everything on it now.", author: "JP Interiors" },
                { quote: "We wanted a customized store for our apparel brand. They finished the coding fast and it works exactly how we wanted it to.", author: "Teerex" },
                { quote: "Helped us launch our brand in the UK. Setting up global currency and international shipping was smooth. Highly recommend them.", author: "Graaps" },
                { quote: "They built a custom booking dashboard for our travels business. Customers can easily book tours online now without any issues.", author: "Sun Holidays" },
                { quote: "They built a custom mobile app for our retail customers. Very simple UI and works great on both Android and iPhone.", author: "Mallika Garments" },
                { quote: "Got our kids store ready and live in just 2 weeks. Very supportive team, answered all our doubts even at night.", author: "Kido Care" },
                // Duplicate for infinite scroll
                { quote: "We used to manage everything on books and WhatsApp. Their ERP software brought all our inventory and billing into one place. Saves us a lot of time daily.", author: "JP Aluminium" },
                { quote: "Our old website was really slow. Hynox rebuilt it on Shopify, and our sales instantly went up. Very easy to work with them.", author: "SugarStar" },
                { quote: "The site updates and order tracking app they built is super easy to use. Our team does everything on it now.", author: "JP Interiors" },
                { quote: "We wanted a customized store for our apparel brand. They finished the coding fast and it works exactly how we wanted it to.", author: "Teerex" },
                { quote: "Helped us launch our brand in the UK. Setting up global currency and international shipping was smooth. Highly recommend them.", author: "Graaps" },
                { quote: "They built a custom booking dashboard for our travels business. Customers can easily book tours online now without any issues.", author: "Sun Holidays" },
                { quote: "They built a custom mobile app for our retail customers. Very simple UI and works great on both Android and iPhone.", author: "Mallika Garments" },
                { quote: "Got our kids store ready and live in just 2 weeks. Very supportive team, answered all our doubts even at night.", author: "Kido Care" }
              ].map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <p className="testimonial-author">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-choose-us-section">
        <div className="section-header reveal-flip-x">
          <span className="section-subtitle">WHY HYNOX</span>
          <h2>Software Engineers &amp; Marketers in Coimbatore</h2>
        </div>
        
        <div className="features-bento-grid reveal-on-scroll reveal-delay-200">
          {[
            { title: "Full stack team", icon: <Users size={24} />, desc: "Design, development and marketing — one team, one place, no middlemen. We handle the entire lifecycle of your product." },
            { title: "Based in Coimbatore", icon: <MapPin size={24} />, desc: "As the top software company in Coimbatore, we understand Tamil Nadu's textile, garments manufacturing, and business landscape better than anyone." },
            { title: "Fast delivery", icon: <Zap size={24} />, desc: "Most projects delivered in 2–6 weeks — not 6 months." },
            { title: "Direct communication", icon: <MessageSquare size={24} />, desc: "You talk to the developers actually building your product — not a sales rep." },
            { title: "Global experience", icon: <Globe size={24} />, desc: "Delivered premium projects for clients across India, UK and Finland." },
            { title: "Post-launch support", icon: <LifeBuoy size={24} />, desc: "We don't disappear after delivery — ongoing support, maintenance, and updates are part of our commitment to your growth." }
          ].map((feature, index) => (
            <div className="bento-card" key={index}>
              <div className="bento-icon-wrapper">
                {feature.icon}
              </div>
              <div className="bento-content">
                <h3 className="bento-title">{feature.title}</h3>
                <p className="bento-desc">{feature.desc}</p>
              </div>
              <div className="bento-glow"></div>
            </div>
          ))}
        </div>
      </section>

      <FAQ />

      <section id="cta" className="cta-section reveal-zoom">
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

      <Footer />
    </>
  );
}
