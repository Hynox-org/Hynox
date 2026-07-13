'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';
const CubesBackground = dynamic(() => import('../../components/CubesBackground'), { ssr: false });
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function EndToEndEcommercePage() {
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
    { icon: 'ShoppingCart',  title: 'Store Setup & Design',   desc: 'Beautiful, high-converting online stores customized to reflect your brand identity.' },
    { icon: 'Megaphone',  title: 'Performance Marketing',    desc: 'Targeted Meta and Google Ads campaigns designed to maximize ROI and lower CPA.' },
    { icon: 'Camera',  title: 'UGC & Product Shoots',         desc: 'Professional photography and authentic User-Generated Content to build trust.' },
    { icon: 'Share2',  title: 'Social Media Management',      desc: 'Consistent, engaging content to grow your online community and organic reach.' },
    { icon: 'BarChart3',  title: 'Analytics & Tracking',     desc: 'Deep data tracking setup (Pixel, GA4) to monitor every sale and user action.' },
    { icon: 'Truck',  title: 'Logistics Integration',       desc: 'Seamless shipping partner integration (Shiprocket, Delhivery) for smooth fulfillment.' },
  ];

  const whatYouGet = [
    { icon: 'Target', title: 'Laser-Targeted Ads',      desc: 'Ad campaigns structured to hit the right audience at the right time.' },
    { icon: 'Smartphone', title: 'Mobile-First Stores',       desc: 'Flawless shopping experiences designed specifically for smartphone users.' },
    { icon: 'CreditCard', title: 'Seamless Payments',    desc: 'Integration with local gateways like Razorpay, PhonePe, and UPI.' },
    { icon: 'TrendingUp', title: 'Growth Strategies',  desc: 'Continuous optimization of sales funnels to boost conversion rates.' },
    { icon: 'MessageSquare', title: 'Automated Retention',     desc: 'WhatsApp and SMS workflows to recover abandoned carts and drive repeat sales.' },
    { icon: 'Video', title: 'High-Converting Video',       desc: 'Engaging video ads crafted to capture attention within the first 3 seconds.' },
  ];

  const whyChoose = [
    { title: 'All-in-One Partner', desc: 'No more juggling between a dev agency, an ad agency, and a content team.' },
    { title: 'Proven ROI',       desc: 'We focus on metrics that matter: Revenue, ROAS, and Net Profit.' },
    { title: 'Local Market Expertise',         desc: 'We understand the nuances of the Indian consumer market and e-commerce landscape.' },
    { title: 'Scalable Infrastructure',       desc: 'Systems built to handle 10 orders a day or 1,000 orders a day without breaking.' },
    { title: 'Data-Driven Decisions',       desc: 'Every strategy and change is backed by concrete data and analytics.' },
  ];

  const caseStudies = [
    { title: "SugarStar", category: "E-Commerce", desc: "Combined custom store design with aggressive performance marketing to dramatically scale online revenue.", metric1: "₹4.2L", metric1Label: "Monthly Revenue", metric2: "4.5×", metric2Label: "ROAS", metric3: "30%", metric3Label: "Conversion Lift", duration: "4 Months" },
    { title: "Teerex", category: "Apparel Brand", desc: "End-to-end launch including brand identity, store setup, UGC content, and international scaling.", metric1: "3+", metric1Label: "Countries Reached", metric2: "₹8L", metric2Label: "Total Sales", metric3: "25%", metric3Label: "Returning Customers", duration: "6 Months" },
  ];

  const faqs = [
    { q: 'What is End-to-End Ecommerce Support?', a: 'It means we handle everything required to sell online successfully: store development, product photography, video creation, social media management, and performance marketing (ads).' },
    { q: 'Do I need to hire a separate agency for ads?', a: 'No. Our team includes both expert developers and seasoned media buyers to ensure your store and your ads work in perfect harmony.' },
    { q: 'How long does it take to launch?', a: 'A full end-to-end setup (store + content + ads) typically takes 3 to 6 weeks depending on the complexity of your product catalog.' },
    { q: 'What platforms do you build on?', a: 'We primarily use Shopify for its robust e-commerce features, scalability, and ease of use for our clients.' },
    { q: 'Do you guarantee sales?', a: 'While we cannot guarantee specific sales numbers, our data-driven approach and proven track record ensure your brand gets the best possible chance at high ROI and scale.' },
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

          <div className="hero-split-content" style={{ zIndex: 2, paddingTop: '0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', width: '100%', gap: '4rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
            
            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', paddingLeft: '0', marginLeft: '-1.5rem', marginTop: '-10rem' }}>
              <span className="hero-badge reveal-fade-in">
                COMPLETE E-COMMERCE GROWTH ENGINE
              </span>

              <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.2' }}>
                Build, Market &amp;<br />
                <span className="svc-hero-accent-bw">Scale Your Brand</span>
              </h1>

              <p className="hero-center-p reveal-fade-in reveal-delay-200" style={{ textAlign: 'left', maxWidth: '100%', marginLeft: 0 }}>
                From setting up your online store to running profitable Meta and Google ads, we provide everything you need to build a successful D2C brand from scratch.
              </p>

              <div className="hero-center-actions reveal-fade-in reveal-delay-300" style={{ justifyContent: 'flex-start' }}>
                <a href="/contact" className="btn btn-hero-solid">Scale Your Brand <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              </div>

              <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'flex-start', marginTop: '2.5rem', gap: '1rem' }}>
                <span>✓ Store Setup</span>
                <span>✓ Ad Campaigns</span>
                <span>✓ UGC Content</span>
                <span>✓ Analytics</span>
              </div>
            </div>

            <div style={{ flex: '1 1 550px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-6rem' }} className="reveal-fade-in reveal-delay-200">
              <img src="/images/teerex_web.png" alt="End-to-End Ecommerce" style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', transform: 'scale(1.1)' }} />
            </div>

          </div>
        </section>

        {/* ─── 2. WHAT WE BUILD ─── */}
        <section className="svc-section svc-section-alt" id="what-we-build">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">OUR SERVICES</span>
            <h2>Comprehensive E-Commerce Ecosystem</h2>
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
            <span className="svc-label">THE DELIVERABLES</span>
            <h2>Everything Needed For Growth</h2>
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
            <span className="svc-label">WHY US</span>
            <h2>Your Growth Partners</h2>
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

        {/* ─── CASE STUDIES ─── */}
        <section className="svc-section" id="cases">
          <style dangerouslySetInnerHTML={{__html: `
            .cases-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 1200px; margin: 0 auto; }
            .case-card { background: #ffffff; border: 1px solid #eaeaea; padding: 4rem; border-radius: 16px; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
            .case-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.15); }
            .case-meta { display: flex; justify-content: space-between; margin-bottom: 2rem; font-size: 0.75rem; color: #888; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; }
            .case-card h3 { font-size: 2.2rem; margin-bottom: 1rem; font-weight: 600; letter-spacing: -0.02em; color: #000; }
            .case-card p { color: #444; line-height: 1.6; margin-bottom: 3rem; font-size: 1.1rem; font-weight: 400; }
            .case-metrics { display: flex; justify-content: space-between; border-top: 1px solid #eaeaea; padding-top: 2.5rem; }
            .case-metric { display: flex; flex-direction: column; }
            .case-metric .val { font-size: 2rem; font-weight: 600; margin-bottom: 0.5rem; letter-spacing: -0.02em; color: #000; }
            .case-metric .lbl { font-size: 0.75rem; color: #666; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
            .case-metric.highlight .val { color: #000; }
            @media (max-width: 900px) { .cases-grid { grid-template-columns: 1fr; } .case-metrics { flex-wrap: wrap; gap: 2rem; } }
          `}} />
          <div className="svc-section-header reveal-from-left">
            <span className="svc-label">SUCCESS STORIES</span>
            <h2>Brands We've Scaled</h2>
          </div>

          <div className="cases-grid reveal-from-bottom reveal-delay-200">
            {caseStudies.map((cs, i) => (
              <div className="case-card" key={i}>
                <div className="case-meta">
                  <span>{cs.category}</span>
                  <span>Duration: {cs.duration}</span>
                </div>
                <h3>{cs.title}</h3>
                <p>{cs.desc}</p>
                
                <div className="case-metrics">
                  <div className="case-metric">
                    <span className="val">{cs.metric1}</span>
                    <span className="lbl">{cs.metric1Label}</span>
                  </div>
                  <div className="case-metric highlight">
                    <span className="val">{cs.metric2}</span>
                    <span className="lbl">{cs.metric2Label}</span>
                  </div>
                  <div className="case-metric">
                    <span className="val">{cs.metric3}</span>
                    <span className="lbl">{cs.metric3Label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. FAQ ─── */}
        <section className="svc-section svc-section-alt" id="faq">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">FAQ</span>
            <h2>Common Questions</h2>
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
          title="Ready to Scale Your E-Commerce Brand?"
          subtitle="Tell us about your products — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
