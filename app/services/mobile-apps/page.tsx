'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';
const CubesBackground = dynamic(() => import('../../components/CubesBackground'), { ssr: false });
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function AppDevelopmentPage() {
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
    { icon: 'Smartphone', title: 'Android Apps',        desc: 'Native and cross-platform Android apps optimized for all screen sizes and versions.' },
    { icon: '🍎', title: 'iOS Apps',            desc: 'Smooth, fast iOS applications built for iPhone and iPad with premium UX standards.' },
    { icon: 'Zap', title: 'Cross-Platform Apps', desc: 'Build once, run on Android & iOS using React Native — saving time and cost.' },
    { icon: '🏢', title: 'Business Apps',       desc: 'Internal business apps for orders, inventory, staff management and workflow automation.' },
    { icon: 'ShoppingCart', title: 'eCommerce Apps',      desc: 'Shopping apps with payments, wishlists, order tracking and push notifications.' },
    { icon: '🔔', title: 'On-Demand Apps',      desc: 'Food delivery, booking and service apps with real-time tracking and notifications.' },
  ];

  const whatYouGet = [
    { icon: 'Shield', title: 'Custom App Development',  desc: 'Built from scratch for your specific business needs — no off-the-shelf solutions.' },
    { icon: 'Palette', title: 'Premium UI/UX Design',    desc: 'Beautiful, intuitive interfaces that keep users engaged and coming back.' },
    { icon: '🔔', title: 'Push Notifications',      desc: 'Engage users with real-time alerts, offers and updates.' },
    { icon: 'CreditCard', title: 'Payment Integration',     desc: 'Razorpay, Stripe, PayPal and UPI payment gateways fully integrated.' },
    { icon: 'BarChart3', title: 'Admin Dashboard',         desc: 'Web-based admin panel to manage users, content, orders and analytics.' },
    { icon: 'Lock', title: 'Secure & Scalable',       desc: 'Encrypted, secure architecture that grows as your user base grows.' },
    { icon: 'Repeat', title: 'API & Backend',           desc: 'Powerful backend and REST/GraphQL APIs to handle all app logic.' },
    { icon: 'Headphones', title: 'Post-Launch Support',     desc: 'Bug fixes, updates and feature additions after your app goes live.' },
  ];

  const whyChoose = [
    { title: '100% Custom Apps',         desc: 'Every app is built from scratch — no templates or clone solutions.' },
    { title: 'End-to-End Delivery',      desc: 'Design, development, testing and launch — all handled by one team.' },
    { title: 'Direct Communication',     desc: 'Work directly with our developers — no account managers or middlemen.' },
    { title: 'App Store Deployment',     desc: 'We handle Google Play Store and Apple App Store submission for you.' },
    { title: 'Ongoing Maintenance',      desc: 'We provide updates, OS compatibility fixes and new feature additions.' },
  ];

  const process = [
    { step: '01', title: 'Discover',   desc: 'We understand your app idea, users and business requirements.' },
    { step: '02', title: 'Wireframe',  desc: 'We create app wireframes and user flow maps before writing code.' },
    { step: '03', title: 'Design',     desc: 'Beautiful, intuitive UI/UX designs for each screen of your app.' },
    { step: '04', title: 'Develop',    desc: 'We build your app with clean, tested and production-ready code.' },
    { step: '05', title: 'Launch',     desc: 'We test, submit and publish your app on Play Store and App Store.' },
  ];

  const portfolio = [
    { title: "JP Interiors App", cat: "App Development", desc: "Custom business automation and project management app", img: "/images/JpApp_works.png" },
    { title: "SugarStar", cat: "Shopify Development", desc: "Premium confectionery online store", img: "/images/sugarstar_web.jpeg" },
    { title: "Team3 Associates", cat: "Custom Development", desc: "Interior Design and Project Execution", img: "/images/team3_web.png" },
    { title: "JP Interiors Web", cat: "Web Development", desc: "Interior design portfolio and service showcase", img: "/images/JpWeb_works.png" },
    { title: "Graaps", cat: "Clothing Brand", desc: "Online clothing store", img: "/images/graaps_web.png" },
    { title: "Food delivery app", cat: "Custom Development", desc: "On-demand food delivery service", img: "/images/aharraa_web.png" }
  ];

  const faqs = [
    { q: 'How much does mobile app development cost in Coimbatore?', a: "The cost depends on the app's features, complexity, platforms, and integrations. We provide custom pricing based on your business requirements." },
    { q: 'How long does it take to develop a mobile app?', a: 'Most mobile apps take between 4 and 12 weeks to design, develop, test, and launch, depending on the project scope.' },
    { q: 'Do you build both Android and iOS apps?', a: 'Yes, we develop Android apps, iOS apps, and cross-platform mobile applications using modern technologies like React Native.' },
    { q: 'Can HYNOX develop custom mobile apps for businesses?', a: 'Yes, we build custom mobile applications for businesses, startups, ecommerce brands, manufacturers, and service providers.' },
    { q: 'Do you develop eCommerce mobile apps?', a: 'Yes, we create ecommerce apps with product catalogs, secure payments, order tracking, push notifications, and customer accounts.' },
    { q: 'Will my mobile app be available on both Android and iPhone?', a: 'Yes, we can build cross-platform applications that work seamlessly on Android and iOS devices.' },
    { q: 'Do you provide App Store and Play Store publishing?', a: 'Yes, we handle Google Play Store and Apple App Store submission, configuration, and deployment.' },
    { q: 'Can you integrate payment gateways into mobile apps?', a: 'Yes, we integrate Razorpay, Stripe, PayPal, UPI, and other payment solutions into mobile applications.' },
    { q: 'Do you provide backend development and APIs?', a: 'Yes, we develop secure backend systems, databases, admin dashboards, and APIs to power your mobile application.' },
    { q: 'Will I receive the source code of my mobile app?', a: 'Yes, once the project is completed, you will receive full ownership of the application and source code.' },
    { q: 'Do you provide mobile app maintenance and support?', a: 'Yes, we provide ongoing support, bug fixes, security updates, performance improvements, and feature enhancements after launch.' },
    { q: 'Why choose HYNOX for mobile app development in Coimbatore?', a: 'HYNOX builds custom Android and iOS applications with modern technology, transparent communication, fast delivery, and long-term support.' },
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
              MOBILE APP DEVELOPMENT COMPANY IN COIMBATORE
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              Mobile Apps That<br />
              <span className="svc-hero-accent-bw">Scale Your Business</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              We design and develop high-performance Android and iOS apps for businesses,
              startups and eCommerce brands. From idea to App Store — we handle everything.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              <a href="/works" className="btn btn-hero-outline">View Our Work</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <span>✓ Android &amp; iOS</span>
              <span>✓ Custom Built</span>
              <span>✓ Fast Delivery</span>
              <span>✓ App Store Ready</span>
            </div>
          </div>
{/* ─── TECHNOLOGY MARQUEE ─── */}
        <section className="tech-marquee-section" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20, background: 'transparent', borderBottom: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="tech-marquee-container">
            <div className="tech-marquee-content">
              {[...Array(4)].flatMap(() => [
                { name: "React Native", icon: "react" },
                { name: "Flutter", icon: "flutter" },
                { name: "Swift", icon: "swift" },
                { name: "Kotlin", icon: "kotlin" },
                { name: "Firebase", icon: "firebase" },
                { name: "iOS", icon: "apple" },
                { name: "Android", icon: "android" }
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
            <h2>Mobile Apps Built For Your Business</h2>
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
          <div className="svc-get-grid reveal-from-right reveal-delay-200">
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
          <div className="svc-process-row reveal-from-right reveal-delay-200">
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
            <h2>Real Apps. Real Results.</h2>
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
            <h2>App Development Questions Answered</h2>
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
          title="Ready to Build Your App?"
          subtitle="Tell us about your idea — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
