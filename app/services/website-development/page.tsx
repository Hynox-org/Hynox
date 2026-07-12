'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';
const CubesBackground = dynamic(() => import('../../components/CubesBackground'), { ssr: false });
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function WebDevelopmentPage() {
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
    { icon: 'Code', title: 'Web Applications',     desc: 'Custom web applications and dashboards to automate and simplify your business operations.' },
    { icon: '▦',   title: 'Admin Dashboards',     desc: 'Powerful dashboards to manage data, users, reports and business operations in one place.' },
    { icon: 'ShoppingCart',  title: 'eCommerce Platforms',  desc: 'Custom online stores with secure payments, product management and order tracking.' },
    { icon: 'Calendar',  title: 'Booking Systems',      desc: 'Online booking and appointment systems for services, events and facilities.' },
    { icon: '🔗',  title: 'API Integrations',     desc: 'Connect with payment gateways, CRMs, ERPs and third-party services seamlessly.' },
    { icon: '☁',  title: 'SaaS Applications',    desc: 'Scalable SaaS platforms with multi-user support, subscriptions and advanced features.' },
  ];

  const whatYouGet = [
    { icon: 'Shield', title: 'Custom Development',       desc: 'Built specifically for your business needs — no templates.' },
    { icon: 'Smartphone', title: 'Mobile Responsive',        desc: 'Works perfectly on all devices and screen sizes.' },
    { icon: 'Search', title: 'SEO Ready',               desc: 'Technical SEO setup included from the start for better Google rankings.' },
    { icon: 'Zap', title: 'Fast Performance',         desc: 'Optimized for speed, Core Web Vitals and better UX.' },
    { icon: 'Lock', title: 'Secure & Scalable',        desc: 'Clean code and secure architecture designed to grow with you.' },
    { icon: 'Settings', title: 'Admin Panel',              desc: 'Easy to manage content, users and settings without a developer.' },
    { icon: 'Repeat', title: 'Third-Party Integrations', desc: 'Payment gateways, CRM, WhatsApp, APIs and more.' },
    { icon: 'Headphones', title: 'Support After Launch',     desc: "We're here to help even after your project goes live." },
  ];

  const whyChoose = [
    { title: '100% Custom Solutions', desc: 'No templates. Every solution is built from scratch for your business.' },
    { title: 'On-Time Delivery',      desc: 'We follow a clear process and deliver on time — every time.' },
    { title: 'Direct Communication',  desc: 'Work directly with our developers and team — no middlemen.' },
    { title: 'Transparent Pricing',   desc: 'No hidden costs. Pay for what you need.' },
    { title: 'Long-Term Support',     desc: 'Ongoing support and maintenance available after launch.' },
  ];

  const process = [
    { step: '01', title: 'Discover', desc: 'We understand your business, goals and requirements.' },
    { step: '02', title: 'Plan',     desc: 'We plan the structure, features and technology stack.' },
    { step: '03', title: 'Design',   desc: 'Clean UI/UX designs that are modern and user-friendly.' },
    { step: '04', title: 'Develop',  desc: 'We build your solution with clean, tested and secure code.' },
    { step: '05', title: 'Launch',   desc: 'We test everything and deploy your project successfully.' },
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
    { q: 'How much does web development cost in Coimbatore?', a: 'The cost depends on the project scope, features, integrations, and business requirements. We provide custom quotes based on your needs.' },
    { q: 'How long does it take to develop a website?', a: 'Most business websites take 2–4 weeks, while custom web applications may take 4–12 weeks depending on complexity.' },
    { q: 'Do you build custom web applications?', a: 'Yes, we develop custom web applications, dashboards, portals, booking systems, and business management software tailored to your workflow.' },
    { q: 'Do you provide SEO-friendly websites?', a: 'Yes, every website we build follows SEO best practices, including fast loading speeds, mobile responsiveness, and clean code structure.' },
    { q: 'Can you redesign my existing website?', a: 'Yes, we can redesign outdated websites to improve performance, user experience, branding, and conversion rates.' },
    { q: 'Do you develop eCommerce websites?', a: 'Yes, we build eCommerce websites with secure payments, product management, inventory tracking, and order management features.' },
    { q: 'Can you integrate third-party tools and APIs?', a: 'Yes, we integrate payment gateways, CRMs, ERPs, WhatsApp APIs, SMS services, and other third-party platforms.' },
    { q: 'Will my website work on mobile devices?', a: 'Yes, all websites and web applications we build are fully responsive and optimized for mobile, tablet, and desktop devices.' },
    { q: 'Do you provide website maintenance and support?', a: 'Yes, we offer ongoing maintenance, security updates, performance monitoring, and technical support after launch.' },
    { q: 'Why choose HYNOX for web development in Coimbatore?', a: 'HYNOX delivers custom web solutions, transparent communication, fast turnaround times, and long-term support for businesses across Tamil Nadu and beyond.' },
  ];

  return (
    <>
      {/* ── Shared Header ── */}
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
              WEB DEVELOPMENT COMPANY IN COIMBATORE
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              Custom Web Applications<br />
              That <span className="svc-hero-accent-bw">Drive Your Business</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              We build fast, secure and scalable web applications, dashboards and websites
              tailored to your business needs. From idea to launch — we handle everything.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              <a href="/works" className="btn btn-hero-outline">View Our Work</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <span>✓ Custom Built</span>
              <span>✓ SEO Friendly</span>
              <span>✓ Fast &amp; Secure</span>
              <span>✓ Scalable Solutions</span>
            </div>
          </div>
{/* ─── TECHNOLOGY MARQUEE ─── */}
        <section className="tech-marquee-section" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20, background: 'transparent', borderBottom: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="tech-marquee-container">
            <div className="tech-marquee-content">
              {[...Array(4)].flatMap(() => [
                { name: "React", icon: "react" },
                { name: "Next.js", icon: "nextdotjs" },
                { name: "Node.js", icon: "nodedotjs" },
                { name: "TypeScript", icon: "typescript" },
                { name: "Tailwind CSS", icon: "tailwindcss" },
                { name: "Vercel", icon: "vercel" },
                { name: "PostgreSQL", icon: "postgresql" }
              ]).map((tech, i) => (
                <div key={i} className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`} alt={tech.name} style={{ width: '24px', height: '24px' }} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        </section>

        {/* ─── 2. WHAT WE BUILD ─── */}
        <section className="svc-section svc-section-alt" id="what-we-build">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT WE BUILD</span>
            <h2>Web Solutions Built For Your Business</h2>
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

        {/* ─── 6. PORTFOLIO ─── */}
        <section className="svc-section svc-section-alt" id="portfolio">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">PORTFOLIO</span>
            <h2>Real Projects. Real Results.</h2>
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
        <section className="svc-section" id="faq">
          <div className="svc-section-header reveal-flip-x">
            <span className="svc-label">FAQ</span>
            <h2>Web Development Questions Answered</h2>
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

        {/* ─── 8. CTA — Shared Component ─── */}
        <ServiceCTA
          title="Ready to Build Your Website?"
          subtitle="Tell us about your project — we'll get back to you within 24 hours."
        />
      </main>

      {/* ── Shared Footer ── */}
      <Footer />
    </>
  );
}
