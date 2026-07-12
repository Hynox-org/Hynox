'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CubesBackground from '../components/CubesBackground';
import Footer from '../components/Footer';
import { ArrowRight, Grid, ShoppingCart, Layers, Smartphone, Target, TrendingUp, FileText, Cpu, Users } from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'All': return <Grid size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />;
    case 'Ecommerce': return <ShoppingCart size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />;
    case 'ERP & Automation': return <Layers size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />;
    case 'App Development': return <Smartphone size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />;
    case 'Marketing': return <Target size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />;
    default: return null;
  }
};

const caseStudies = [
  {
    title: 'NSK Tex',
    subtitle: 'Scaling an E-commerce Clothing Brand with Performance Marketing',
    desc: 'NSK Tex is an e-commerce clothing brand built for Gen Z. Despite having trendy, affordable fashion products, the brand faced inconsistent sales and major operational challenges like high return rates and fake COD orders. With a limited budget, they needed smart, results-driven marketing and operational solutions.',
    category: 'Marketing',
    highlight: 'COD fraud eliminated, sales scaled',
    image: '/case-studies/cs_nsk.png',
    slug: 'nsk-tex-ecommerce-performance-marketing-agency'
  },
  {
    title: 'JP Aluminium Interior',
    subtitle: 'Transforming Interior Business with Automation',
    desc: 'JP Aluminium Interior is a leading interior and aluminium works provider in Tamil Nadu. Their challenges revolved around managing leads, quotations, and site updates using manual methods and multiple platforms. They needed an integrated solution that simplified operations, improved customer satisfaction, and eliminated human errors.',
    category: 'ERP & Automation',
    highlight: 'Full automation — saves hours daily',
    image: '/images/JpApp_works.png',
    slug: 'jp-aluminium-erp-automation-software-tamil-nadu'
  },
  {
    title: 'graaps',
    subtitle: 'Taking a Clothing Brand Global',
    desc: 'graaps is a Finland-based startup looking to establish a global clothing brand with production in Tirupur, India, and target market in the UK. They needed comprehensive support to bridge geographical gaps and create a sustainable, globally-focused brand identity.',
    category: 'App Development',
    highlight: 'Global brand launched from Coimbatore',
    image: '/images/graaps_web.png',
    slug: 'graaps-clothing-brand-global-expansion-app-development'
  },
  {
    title: 'Kores',
    subtitle: 'Clothing Manufacturing Wholesale - Custom Development',
    desc: 'Kores needed a tailored software solution to manage their clothing manufacturing wholesale business, from order processing to inventory and client management.',
    category: 'ERP & Automation',
    highlight: 'Custom wholesale system built end to end',
    image: '/images/kores_web.png',
    slug: 'kores-wholesale-clothing-manufacturing-erp-software'
  },
  {
    title: 'Kido Care',
    subtitle: 'Kids Retail Store - Shopify E-commerce Solution',
    desc: 'Kido Care partnered with HYNOX to build a comprehensive Shopify e-commerce store, focusing on user experience, product presentation, and secure payment gateways.',
    category: 'Ecommerce',
    highlight: 'Live store in 2 weeks',
    image: '/images/kido_care_web.jpg',
    slug: 'kido-care-shopify-ecommerce-development-services'
  },
  {
    title: 'Sun Holidays',
    subtitle: 'Tours and Travels Agency - Custom Development',
    desc: 'HYNOX developed a bespoke web platform for Sun Holidays, integrating features for tour package management, customer bookings, and itinerary customization.',
    category: 'ERP & Automation',
    highlight: 'Complete tour management system',
    image: '/images/sun_holidays_web.png',
    slug: 'sun-holidays-travel-agency-custom-software-development'
  },
  {
    title: 'Livinza',
    subtitle: 'Interiors Business - Custom Development',
    desc: 'HYNOX developed a custom web platform for Livinza, focusing on an immersive portfolio display, project management tools, and client communication features.',
    category: 'App Development',
    highlight: 'Immersive portfolio & project management',
    image: '/images/livinza_web.png',
    slug: 'livinza-interior-design-project-management-app'
  }
];

const categories = ['All', 'Ecommerce', 'ERP & Automation', 'App Development', 'Marketing'];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredStudies = activeTab === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeTab);

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
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <>
      <Header />
      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh', paddingBottom: '6rem' }}>
        
        {/* FILTERS */}
        <section className="cs-filters-section reveal-blur" style={{ paddingTop: '1rem' }}>
          <div className="cs-filters-container">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`category-btn-item reveal-fade-in reveal-delay-${(i % 5) * 100} ${activeTab === cat ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                {getCategoryIcon(cat)}
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* GRID */}
        <section style={{ maxWidth: '1400px', marginTop: 0, marginBottom: '3rem', marginLeft: 'auto', marginRight: 'auto', padding: '0 2rem', minHeight: '400px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {filteredStudies.map((cs, i) => (
              <div key={`${activeTab}-${i}`} className={`reveal-zoom reveal-delay-${(i % 3) * 100}`} style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, borderColor 0.3s, boxShadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                

                {/* Content */}
                {/* Image */}
                <div style={{ 
                  height: '160px', 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  flexShrink: 0,
                  overflow: 'hidden'
                }}>
                  <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.25rem' }}>{cs.title}</h3>
                  <div style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.75rem', lineHeight: 1.4 }}>{cs.subtitle}</div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>{cs.desc}</p>
                  
                  <span style={{ 
                    display: 'inline-block', 
                    fontSize: '0.75rem', 
                    color: '#ffffff', 
                    marginBottom: '1rem',
                    fontWeight: 500
                  }}>
                    {cs.category}
                  </span>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: '#a3a3a3',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    marginBottom: '1.5rem'
                  }}>
                    <TrendingUp size={16} style={{ color: '#ffffff' }} />
                    <span>{cs.highlight}</span>
                  </div>
                  
                  {/* Know More Button */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <a href={`/case-studies/${cs.slug}`} style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'gap 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'} onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}>
                      Know More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS THAT CREATE IMPACT BANNER */}
        <section style={{ maxWidth: '1400px', margin: '5rem auto 0', padding: '0 2rem' }} className="reveal-blur">
          <div style={{ 
            background: '#0a0a0a', 
            border: '1px solid rgba(255, 255, 255, 0.05)', 
            borderRadius: '16px', 
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 500, marginBottom: '1rem' }}>Projects That Create Impact</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, fontSize: '1rem' }}>
                Hynox has delivered software projects for businesses in Coimbatore, Tamil Nadu and internationally. Our case studies cover ecommerce brands, textile manufacturers, interior businesses, mobile applications and travel agencies.
              </p>
            </div>
          </div>
        </section>
        
        {/* STATS SECTION */}
        <section style={{ maxWidth: '1400px', margin: '3rem auto 4rem', padding: '0 2rem' }} className="reveal-blur reveal-delay-200">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            <div className="reveal-zoom" style={{ background: '#0a0a0a', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', color: '#ffffff', padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 600 }}>8+</div>
                <div style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Case Studies<br/><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Real projects delivered successfully</span></div>
              </div>
            </div>
            
            <div className="reveal-zoom reveal-delay-100" style={{ background: '#0a0a0a', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', color: '#ffffff', padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cpu size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 600 }}>5+</div>
                <div style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Industries Served<br/><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Across different business domains</span></div>
              </div>
            </div>

            <div className="reveal-zoom reveal-delay-200" style={{ background: '#0a0a0a', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', color: '#ffffff', padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 600 }}>15+</div>
                <div style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Businesses Transformed<br/><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Through technology and digital solutions</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }} className="reveal-blur reveal-delay-300">
          <div style={{ 
            background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)', 
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px', 
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.5rem' }}>Have a Project in Mind?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Let's build something amazing together.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ background: '#ffffff', color: '#000000', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f0f0f0'} onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}>
                Get Free Consultation <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/918870524355" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.772-.725 2.02-1.425.25-.7.25-1.3 0-1.425-.075-.125-.27-.199-.57-.35zM12 2C6.477 2 2 6.477 2 12c0 1.74.443 3.37 1.217 4.793L2 22l5.377-1.411A9.947 9.947 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.153-.443-4.466-1.214l-.32-.189-3.32.872.887-3.218-.207-.33A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
