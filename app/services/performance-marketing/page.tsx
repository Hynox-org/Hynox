'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import CubesBackground from '../../components/CubesBackground';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function PerformanceMarketingPage() {
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

  const whatWeBuild = [
    { icon: 'Smartphone',  title: 'Meta (Facebook & IG) Ads', desc: 'Create, launch and manage high-converting image and video ads targeting relevant buyers.' },
    { icon: 'Search',  title: 'Google Search & PMax',    desc: 'Capture active search intent and shopping queries using Google Search, Performance Max, and Shopping ads.' },
    { icon: 'Repeat',  title: 'Retargeting Funnels',     desc: 'Re-engage cart abandoners and store visitors with custom dynamic catalog ads to secure lost sales.' },
    { icon: 'TrendingUp',  title: 'CRO Store Audit',         desc: 'A/B testing, layout edits, and speed audits to convert a higher percentage of visitors into buyers.' },
    { icon: 'FileText',  title: 'Custom Landing Pages',    desc: 'Design distraction-free, lightning-fast landing pages crafted specifically for single-product campaigns.' },
    { icon: 'BarChart3',  title: 'Analytics & GA4 Setup',   desc: 'Configure Meta Conversions API (CAPI), Google Analytics 4, and UTM tags for accurate data tracking.' },
  ];

  const whatYouGet = [
    { icon: 'Settings', title: 'Complete Pixel Setup',     desc: 'Error-free implementation of tracking codes and pixel triggers.' },
    { icon: 'Target', title: 'Audience Segments',        desc: 'Custom, lookalike, and interest-based buyer audience definitions.' },
    { icon: 'PenTool', title: 'Ad Copy & Angles',         desc: 'Persuasive sales copywriting tailored to address buyer pain points.' },
    { icon: 'BarChart3', title: 'Weekly Performance Logs',  desc: 'Detailed updates highlighting cost per purchase, ROAS, and clicks.' },
    { icon: 'Shield', title: 'Daily Budget Safety',      desc: 'Close monitoring to prevent overspending and budget waste.' },
    { icon: 'Repeat', title: 'Creative Testing Grid',    desc: 'Systematic testing of hooks, layouts, and copy variations.' },
    { icon: 'MessageSquare', title: 'Slack / WhatsApp Sync',    desc: 'Direct channels to message the marketers handling your budget.' },
    { icon: 'TrendingUp', title: 'Scaling Strategy',        desc: 'Vertical and horizontal scaling frameworks for winning assets.' },
  ];

  const whyChoose = [
    { title: 'ROAS over Vanity Metrics',     desc: 'We focus entirely on metrics that matter — cost per purchase and total return on ad spend (ROAS).' },
    { title: 'Tech & Marketing Integration',  desc: 'Since we code websites and run ads, we can resolve tracking and page speed errors instantly.' },
    { title: 'Proven E-commerce Results',    desc: 'Experienced in scaling textile and apparel brands in local and international markets.' },
    { title: '100% Transparent Tracking',    desc: 'You hold full ownership of ad accounts and billing profiles — complete visibility.' },
    { title: 'Local Coimbatore Context',       desc: 'We know the exact buyer demographics and target markets for manufacturing and retail.' },
  ];

  const process = [
    { step: '01', title: 'Audit',     desc: 'We evaluate your store conversion rate, speed scores, and past campaigns.' },
    { step: '02', title: 'Tracking',  desc: 'We configure GA4, Meta Pixel, and Conversions API (CAPI) for clean data.' },
    { step: '03', title: 'Creatives', desc: 'We outline high-performing ad formats, layout concepts, and copywriting hooks.' },
    { step: '04', title: 'Test',      desc: 'We launch testing campaigns to locate winning audiences and creatives.' },
    { step: '05', title: 'Scale',     desc: 'We redirect budget into winning assets to scale your e-commerce revenues.' },
  ];

  const portfolio = [
    { title: "SugarStar", cat: "Shopify Development", desc: "Premium confectionery online store", img: "/images/sugarstar_web.jpeg" },
    { title: "JP Interiors App", cat: "App Development", desc: "Custom business automation and project management app", img: "/images/JpApp_works.png" },
    { title: "Team3 Associates", cat: "Custom Development", desc: "Interior Design and Project Execution", img: "/images/team3_web.png" },
    { title: "JP Interiors Web", cat: "Web Development", desc: "Interior design portfolio and service showcase", img: "/images/JpWeb_works.png" },
    { title: "Teerex", cat: "Custom Development", desc: "E-commerce platform with custom features", img: "/images/teerex_web.png" },
    { title: "Mallika Garments", cat: "Custom Development", desc: "Fashion retail business solution", img: "/images/malika-garments_web.jpg" },
    { title: "Graaps", cat: "Clothing Brand", desc: "Online clothing store", img: "/images/graaps_web.png" },
    { title: "Food delivery app", cat: "Custom Development", desc: "On-demand food delivery service", img: "/images/aharraa_web.png" },
    { title: "Kores Fabrics", cat: "Clothing Brand", desc: "Online Wholesale Store", img: "/images/kores_web.png" },
    { title: "Kido Care", cat: "Kids Clothing Brand", desc: "Online clothing store", img: "/images/kido_care_web.jpg" },
    { title: "Sun Holidays", cat: "Tours and Travel Agency", desc: "Travel Agency Portfolio", img: "/images/sun_holidays_web.png" },
    { title: "Livinza", cat: "Interior Business", desc: "Interior Business Portfolio", img: "/images/livinza_web.png" }
  ];

  const videoPortfolio = [
    { 
      title: 'JP Interiors', 
      username: '@jp_interiors',
      subtitle: 'Design & Build', 
      img: '/images/JpWeb_works.png',
      videoUrl: '/videos/1.mp4'
    },
    { 
      title: 'Graaps Brand', 
      username: '@graaps_clothing',
      subtitle: 'Summer Collection', 
      img: '/images/graaps_web.png',
      videoUrl: '/videos/3.mp4'
    },
    { 
      title: 'Sun Holidays', 
      username: '@_sun_holidays',
      subtitle: 'Tours & Travels', 
      img: '/images/sun_holidays_web.png',
      videoUrl: '/videos/4.mp4',
      titleColor: '#facc15'
    },
    { 
      title: 'Kido Care', 
      username: '@kidocare_store',
      subtitle: 'Kids Fashion Reels', 
      img: '/images/kido_care_web.jpg',
      videoUrl: '/videos/5.mp4'
    },
    {
      title: 'Team 3 Associates',
      username: '@team3_associates',
      subtitle: 'Photography & Videography',
      img: '/images/team3_web.png',
      videoUrl: '/videos/2.mp4'
    },
    {
      title: 'SugarStar',
      username: '@sugarstar_official',
      subtitle: 'Social Media Management',
      img: '/images/sugarstar_web.jpeg',
      videoUrl: '/videos/1.mp4'
    }
  ];

  const faqs = [
    { q: 'What is performance marketing?', a: 'Performance marketing is a results-driven advertising strategy where campaigns are optimized to generate leads, sales, website traffic, and measurable business growth.' },
    { q: 'Does HYNOX manage Meta Ads and Google Ads?', a: 'Yes, we create, manage, and optimize Meta Ads (Facebook & Instagram) and Google Ads campaigns for businesses across various industries.' },
    { q: 'How much does performance marketing cost?', a: 'The cost depends on your advertising budget, campaign goals, target audience, and competition. We provide customized plans based on your business objectives.' },
    { q: 'How long does it take to see results from paid ads?', a: 'Most campaigns start generating data within a few days, while meaningful optimization and consistent results typically take a few weeks.' },
    { q: 'Do you run ads for eCommerce businesses?', a: 'Yes, we specialize in performance marketing for eCommerce brands, including Shopify stores, clothing brands, textile businesses, and retail companies.' },
    { q: 'What is ROAS in performance marketing?', a: 'ROAS (Return on Ad Spend) measures how much revenue is generated for every rupee spent on advertising.' },
    { q: 'Do you provide Meta Pixel and Google Analytics setup?', a: 'Yes, we configure Meta Pixel, Google Analytics 4 (GA4), Conversion Tracking, and Conversions API (CAPI) for accurate reporting.' },
    { q: 'Can HYNOX create landing pages for ad campaigns?', a: 'Yes, we design high-converting landing pages optimized for lead generation, product sales, and advertising performance.' },
    { q: 'Do you offer remarketing and retargeting campaigns?', a: 'Yes, we run retargeting campaigns that reconnect with website visitors, cart abandoners, and previous customers to increase conversions.' },
    { q: 'Will I have access to my ad accounts?', a: 'Yes, you maintain full ownership and access to your advertising accounts, analytics, and billing profiles at all times.' },
    { q: 'Do you provide performance marketing for businesses in Coimbatore?', a: 'Yes, HYNOX helps businesses in Coimbatore and across India grow through Meta Ads, Google Ads, lead generation campaigns, and eCommerce marketing.' },
    { q: 'Why choose HYNOX as a performance marketing agency in Coimbatore?', a: 'HYNOX combines marketing expertise with technical development skills, allowing us to optimize ads, websites, landing pages, and tracking systems for maximum ROI.' },
  ];

  return (
    <>
      <Header />

      <main>
        {/* ─── 1. HERO ─── */}
        <section className="hero-center-section">
          {/* Animated Cubes Background */}
          <div className="absolute inset-0 w-full h-full z-0" style={{ background: "#050505" }}>
            <CubesBackground />
          </div>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(20,35,100,0.25) 0%, rgba(5,5,5,0.65) 75%)" }} />

          <div className="hero-center-content">
            <span className="hero-badge reveal-fade-in">
              PERFORMANCE MARKETING AGENCY IN COIMBATORE
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              Performance Marketing That<br />
              <span className="svc-hero-accent-bw">Scales Your Revenues</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              We plan, launch and manage high-converting Meta Ads, Google Ads, and shopping campaigns 
              designed to scale your online orders and boost your bottom line.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              <a href="/works" className="btn btn-hero-outline">View Our Work</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <span>✓ Meta (FB/IG) Ads</span>
              <span>✓ Google Search &amp; PMax</span>
              <span>✓ ROAS Optimization</span>
              <span>✓ Creative Strategy</span>
            </div>
          </div>
        </section>

        {/* ─── DIGITAL PRESENCE ─── */}
        <section className="svc-section svc-section-alt" id="digital-presence">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT WE DO</span>
            <h2>Digital Presence</h2>
            <div className="svc-divider" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', flexWrap: 'wrap', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* YouTube */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#FF0000', borderRadius: '12px', width: '56px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>
                 <FaYoutube size={36} color="#FFFFFF" />
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 500 }}>YouTube</span>
            </div>

            {/* Instagram */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius: '14px', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>
                 <FaInstagram size={36} color="#FFFFFF" />
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 500 }}>Instagram</span>
            </div>

            {/* LinkedIn */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>
                 <FaLinkedin size={54} color="#0A66C2" />
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 500 }}>LinkedIn</span>
            </div>

            {/* Facebook */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>
                 <FaFacebook size={54} color="#1877F2" />
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 500 }}>Facebook</span>
            </div>

            {/* Hotstar */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#111827', fontSize: '1.75rem', fontWeight: 600, letterSpacing: '-0.02em', fontFamily: 'system-ui, -apple-system, sans-serif' }}>hotstar</span>
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 500 }}>Hotstar</span>
            </div>

          </div>
        </section>

        {/* ─── CASE STUDIES ─── */}
        <section className="svc-section" id="recent-works">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">PERFORMANCE</span>
            <h2>Proven Results</h2>
            <div className="svc-divider" />
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
            {/* Card 1: SugarStar */}
            <div className="case-study-card reveal-from-left" style={{ flex: '1 1 500px', background: '#ffffff', borderRadius: '12px', padding: '3rem', color: '#000000', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.05em' }}>
                <span>E-COMMERCE · LOUNGEWEAR</span>
                <span>DURATION: 4 MONTHS</span>
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1.5rem', color: '#000000', letterSpacing: '-0.02em' }}>SugarStar</h3>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.6, marginBottom: '3rem', flexGrow: 1 }}>
                Executed hyper-targeted message campaigns to drive direct inquiries. Achieved massive scale with optimized entry costs, resulting in high-intent sales conversions.
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', paddingTop: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>₹9.9</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.05em' }}>COST PER CLICK</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>₹4.2L</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.05em' }}>TOTAL SALES</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>₹1L</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.05em' }}>NET PROFIT</div>
                </div>
              </div>
            </div>

            {/* Card 2: Teerex */}
            <div className="case-study-card reveal-from-right" style={{ flex: '1 1 500px', background: '#ffffff', borderRadius: '12px', padding: '3rem', color: '#000000', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.05em' }}>
                <span>RETAIL · APPAREL</span>
                <span>DURATION: 6 MONTHS</span>
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1.5rem', color: '#000000', letterSpacing: '-0.02em' }}>Teerex</h3>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.6, marginBottom: '3rem', flexGrow: 1 }}>
                Scaled lead generation for high-volume retail. By optimizing lead quality, we delivered a consistent flow of prospects and a strong return on marketing investment.
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', paddingTop: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>₹220</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.05em' }}>COST PER LEAD</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>₹11.48L</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.05em' }}>TOTAL RETURNS</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>3.02×</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.05em' }}>ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. WHAT WE BUILD ─── */}
        <section className="svc-section svc-section-alt" id="what-we-build">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT WE BUILD</span>
            <h2>Advertising Channels We Master</h2>
            <div className="svc-divider" />
          </div>
          <div className="svc-build-grid reveal-zoom reveal-delay-200">
            {whatWeBuild.map((item, i) => (
              <div className="svc-build-card" key={i}>
                {(() => {
                  const BuildIcon = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
                  return <div className="svc-build-icon"><BuildIcon size={36} /></div>;
                })()}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. WHAT YOU GET ─── */}
        <section className="svc-section" id="what-you-get">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT YOU GET</span>
            <h2>Everything You Need, Included</h2>
          </div>
          <div className="svc-get-grid reveal-from-left reveal-delay-200">
            {whatYouGet.map((item, i) => (
              <div className="svc-get-card" key={i}>
                {(() => {
                  const GetIcon = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
                  return <span className="svc-get-icon"><GetIcon size={20} /></span>;
                })()}
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4. WHY CHOOSE HYNOX ─── */}
        <section className="svc-section svc-section-alt" id="why-hynox">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">WHY CHOOSE HYNOX?</span>
            <h2>We Focus On What Matters</h2>
          </div>
          <div className="svc-why-grid reveal-zoom reveal-delay-200">
            {whyChoose.map((item, i) => (
              <div className="svc-why-card" key={i}>
                <div className="svc-why-check"><Check size={16} /></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 5. PROCESS ─── */}
        <section className="svc-section" id="process">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">OUR PROCESS</span>
            <h2>Simple Process, Successful Results</h2>
          </div>
          <div className="svc-process-row reveal-from-left reveal-delay-200">
            {process.map((item, i) => (
              <div className="svc-process-step" key={i}>
                <div className="svc-process-circle">{item.step}</div>
                {i < process.length - 1 && <div className="svc-process-line" />}
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. FAQ ─── */}
        <section className="svc-section svc-section-alt" id="faq">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">FAQ</span>
            <h2>Performance Marketing Questions Answered</h2>
          </div>
          <div className="svc-faq-list reveal-from-left reveal-delay-200">
            {faqs.map((item, i) => (
              <details className="svc-faq-item" key={i}>
                <summary className="svc-faq-q">{item.q}</summary>
                <p className="svc-faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ─── 8. CTA ─── */}
        <ServiceCTA
          title="Ready to Scale Your Ads?"
          subtitle="Tell us about your conversion goals — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
