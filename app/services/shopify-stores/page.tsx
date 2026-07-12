'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';
const CubesBackground = dynamic(() => import('../../components/CubesBackground'), { ssr: false });
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function ShopifyStoresPage() {
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
    { icon: 'ShoppingCart',  title: 'Bespoke Storefronts',   desc: 'Distinctive, conversion-driven designs that perfectly encapsulate your brand identity.' },
    { icon: 'Settings',  title: 'End-to-End Deployment',    desc: 'From domain mapping to checkout routing, we handle the entire technical launch process.' },
    { icon: 'Plug',  title: 'Ecosystem Integration',         desc: 'Seamlessly connect CRM tools, loyalty programs, and advanced marketing plugins.' },
    { icon: 'Repeat',  title: 'Seamless Migrations',      desc: 'Safely transfer your data, customer lists, and products from WooCommerce, Magento, or Wix.' },
    { icon: '🏢',  title: 'B2B Wholesale Portals',     desc: 'Advanced wholesale environments featuring tiered pricing, bulk ordering, and custom billing.' },
    { icon: 'Zap',  title: 'Performance Tuning',       desc: 'Deep technical optimization to eliminate lag, reduce bounce rates, and secure top Core Web Vitals scores.' },
    { icon: 'CreditCard', title: 'Payment Gateway Integration', desc: 'Secure payment setups with Razorpay, Cashfree, UPI, and major credit cards for frictionless checkout.' },
    { icon: 'Truck', title: 'Delivery Partner', desc: 'Integration with local and international logistics providers to streamline your shipping process.' },
    { icon: 'Package', title: 'Shiprocket Checkout', desc: 'Seamless Shiprocket checkout integration to boost conversion rates and offer real-time tracking.' },
  ];

  const whatYouGet = [
    { icon: 'Palette', title: 'Aesthetic Brilliance',      desc: 'Clean, immersive user interfaces tailored for modern shoppers.' },
    { icon: 'Smartphone', title: 'Mobile-Optimized Commerce',       desc: 'Frictionless browsing and fast checkout experiences designed specifically for smartphones.' },
    { icon: 'CreditCard', title: 'Frictionless Payments',    desc: 'Full integration with local favorites like Razorpay, PhonePe, UPI, and Cash on Delivery.' },
    { icon: '🚚', title: 'Automated Logistics APIs',  desc: 'Real-time shipping rates and tracking synced through partners like Shiprocket and Delhivery.' },
    { icon: 'MessageSquare', title: 'Instant Notifications',     desc: 'Automated WhatsApp and SMS workflows for order updates and abandoned cart recovery.' },
    { icon: 'Search', title: 'Technical SEO Foundation',       desc: 'Advanced schema markup, dynamic sitemaps, and optimized product architectures for Google visibility.' },
    { icon: 'BarChart3', title: 'Data-Driven Tracking',  desc: 'Precision tracking with Meta Pixel, GA4, and Server-Side APIs to measure exact marketing ROI.' },
    { icon: 'Headphones', title: 'Empowered Teams',     desc: 'Comprehensive training and video documentation so your staff can manage daily operations effortlessly.' },
  ];

  const whyChoose = [
    { title: 'Demonstrated Success', desc: 'We’ve engineered and scaled high-volume digital brands like SugarStar and Graaps.' },
    { title: 'Deep Industry Insight',       desc: 'Being rooted in Coimbatore gives us a distinct advantage in apparel logic, inventory lifecycles, and export dynamics.' },
    { title: 'In-House Technical Talent',         desc: 'Direct communication with engineers means faster execution and no outsourced delays.' },
    { title: 'Built for Advertising',       desc: 'Our architectures prioritize speed and conversion rate—the two pillars of profitable ad spend.' },
    { title: 'Absolute Ownership',       desc: 'You own everything. We deliver the keys and the knowledge, with zero vendor lock-in.' },
  ];

  const process = [
    { step: '01', title: 'Blueprint',  desc: 'We audit your inventory, define user personas, and establish the technical requirements.' },
    { step: '02', title: 'Wireframe',    desc: 'Crafting intuitive user journeys, wireframing product pages, and defining visual aesthetics.' },
    { step: '03', title: 'Execution',   desc: 'Translating designs into robust code, structuring collections, and dialing in functionality.' },
    { step: '04', title: 'Connectivity', desc: 'Wiring up payment processors, shipping APIs, and multi-channel inventory syncs.' },
    { step: '05', title: 'Deployment',    desc: 'Rigorous quality assurance, live transaction testing, and deploying to the public web.' },
  ];

  const caseStudies = [
    { title: "SugarStar", category: "E-Commerce · Loungewear", desc: "Executed hyper-targeted message campaigns to drive direct inquiries. Achieved massive scale with optimized entry costs, resulting in high-intent sales conversions.", metric1: "₹9.9", metric1Label: "Cost Per Click", metric2: "₹4.2L", metric2Label: "Total Sales", metric3: "₹1L", metric3Label: "Net Profit", duration: "4 Months" },
    { title: "Teerex", category: "Retail · Apparel", desc: "Scaled lead generation for high-volume retail. By optimizing lead quality, we delivered a consistent flow of prospects and a strong return on marketing investment.", metric1: "₹220", metric1Label: "Cost Per Lead", metric2: "₹11.48L", metric2Label: "Total Returns", metric3: "3.02×", metric3Label: "ROI", duration: "6 Months" },
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
    { title: "Kores Fabrics", cat: "Clothing Brand", desc: "Online clothing Wholesale Store", img: "/images/kores_web.png" },
    { title: "Kido Care", cat: "Kids Clothing Brand", desc: "Online clothing store", img: "/images/kido_care_web.jpg" },
    { title: "Sun Holidays", cat: "Tours and Travel Agency", desc: "Travel Agency Portfolio", img: "/images/sun_holidays_web.png" },
    { title: "Livinza", cat: "Interior Business", desc: "Interior Business Portfolio", img: "/images/livinza_web.png" }
  ];

  const faqs = [
    { q: 'How much does Shopify store development cost in Coimbatore?', a: 'The cost depends on the store size, custom features, integrations, and design requirements. We provide custom pricing based on your business needs.' },
    { q: 'Why should I choose Shopify for my eCommerce business?', a: 'Shopify is a secure, scalable, and easy-to-manage eCommerce platform that helps businesses sell products online with minimal technical complexity.' },
    { q: 'Can HYNOX build a custom Shopify store?', a: 'Yes, we design and develop custom Shopify stores tailored to your brand, products, and customer experience goals.' },
    { q: 'Do you provide Shopify theme customization?', a: 'Yes, we customize Shopify themes to match your branding, improve user experience, and increase conversions.' },
    { q: 'Can you migrate my existing store to Shopify?', a: 'Yes, we can migrate products, customers, orders, and content from WooCommerce, Wix, Magento, or other platforms to Shopify.' },
    { q: 'Do you integrate payment gateways with Shopify?', a: 'Yes, we integrate Razorpay, PhonePe, Paytm, Stripe, PayPal, COD, and other payment solutions.' },
    { q: 'Can you set up shipping and delivery integrations?', a: 'Yes, we integrate shipping providers such as Shiprocket, Delhivery, Blue Dart, and other logistics platforms.' },
    { q: 'Is Shopify good for clothing and textile brands?', a: 'Yes, Shopify is one of the best eCommerce platforms for clothing brands, textile businesses, fashion labels, and D2C businesses looking to sell online.' },
    { q: 'Do you provide SEO for Shopify stores?', a: 'Yes, we optimize Shopify stores with SEO-friendly URLs, product schema, metadata, image optimization, and technical SEO best practices.' },
    { q: 'Can HYNOX build a Shopify wholesale or B2B store?', a: 'Yes, we develop Shopify B2B and wholesale stores with custom pricing, bulk ordering, dealer portals, and customer-specific catalogs.' },
    { q: 'Will my Shopify store work on mobile devices?', a: 'Yes, every Shopify store we build is fully responsive and optimized for mobile, tablet, and desktop users.' },
    { q: 'Why choose HYNOX for Shopify development in Coimbatore?', a: 'HYNOX specializes in Shopify store development, custom theme design, eCommerce automation, and conversion-focused online stores for textile, retail, and wholesale businesses.' },
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
                LEADING E-COMMERCE AGENCY IN COIMBATORE
              </span>

              <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.2' }}>
                Shopify Stores That<br />
                <span className="svc-hero-accent-bw">Drive Online Sales</span>
              </h1>

              <p className="hero-center-p reveal-fade-in reveal-delay-200" style={{ textAlign: 'left', maxWidth: '100%', marginLeft: 0 }}>
                We design and build custom Shopify e-commerce stores, custom theme setups, and API integrations 
                tailored to scale your clothing, retail, or wholesale brand globally.
              </p>

              <div className="hero-center-actions reveal-fade-in reveal-delay-300" style={{ justifyContent: 'flex-start' }}>
                <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
                <a href="/works" className="btn btn-hero-outline">View Our Work</a>
              </div>

              <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'flex-start', marginTop: '2.5rem', gap: '1rem' }}>
                <span>✓ Shopify Setup</span>
                <span>✓ Theme Customization</span>
                <span>✓ Payment &amp; Shipping</span>
                <span>✓ Conversion Focused</span>
              </div>
            </div>

            <div style={{ flex: '1 1 550px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-6rem' }} className="reveal-fade-in reveal-delay-200">
              <img src="/images/shopify_logo_thumbnail.png" alt="Shopify Partner" style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', transform: 'scale(1.1)' }} />
            </div>

          </div>
{/* ─── TECHNOLOGY MARQUEE ─── */}
        <section className="tech-marquee-section" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20, background: 'transparent', borderBottom: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="tech-marquee-container">
            <div className="tech-marquee-content">
              {[...Array(2)].flatMap(() => [
                { name: "Shiprocket", icon: "rocket" },
                { name: "Razorpay", icon: "razorpay" },
                { name: "Messaging", lucide: "MessageSquare" },
                { name: "Flow", lucide: "Workflow" },
                { name: "TYDAL Product Reviews", lucide: "Star" },
                { name: "TrustZ", lucide: "ShieldCheck" },
                { name: "Sized", lucide: "Ruler" },
                { name: "Payflow", lucide: "CreditCard" },
                { name: "MS Order Printers", lucide: "Printer" },
                { name: "Qikify Volume Discount", lucide: "Percent" },
                { name: "Microsoft Clarity", lucide: "LineChart" }
              ]).map((tech: any, i) => {
                const LucideIcon = tech.lucide ? (LucideIcons as any)[tech.lucide] : null;
                return (
                <div key={i} className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {LucideIcon ? <LucideIcon size={24} /> : <img src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`} alt={tech.name} style={{ width: '24px', height: '24px' }} />}
                  <span>{tech.name}</span>
                </div>
              )})}
            </div>
          </div>
        </section>

        </section>

        {/* ─── 2. WHAT WE BUILD ─── */}
        <section className="svc-section svc-section-alt" id="what-we-build">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT WE BUILD</span>
            <h2>Shopify Solutions Designed to Scale</h2>
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

        {/* ─── CASE STUDIES ─── */}
        <section className="svc-section svc-section-alt" id="cases">
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
            <span className="svc-label">Case Studies</span>
            <h2>Stores We've Built & Scaled</h2>
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

        {/* ─── 6. PORTFOLIO ─── */}
        <section className="svc-section" id="portfolio">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">PORTFOLIO</span>
            <h2>Real Stores. Real Results.</h2>
          </div>
          <div className="svc-portfolio-grid reveal-zoom reveal-delay-200">
            {portfolio.map((item, i) => (
              <div className="svc-portfolio-card" key={i}>
                <div className="svc-portfolio-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="svc-portfolio-info">
                  <span className="badge-dev">{item.cat}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. FAQ ─── */}
        <section className="svc-section svc-section-alt" id="faq">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">FAQ</span>
            <h2>Shopify Questions Answered</h2>
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
          title="Ready to Build Your Shopify Store?"
          subtitle="Tell us about your brand — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
