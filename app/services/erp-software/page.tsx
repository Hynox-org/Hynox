'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';
const CubesBackground = dynamic(() => import('../../components/CubesBackground'), { ssr: false });
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function ERPSoftwarePage() {
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
    { icon: 'Settings',  title: 'Custom ERP Systems',      desc: 'All-in-one business management platforms for inventory, sales, purchasing, and operations.' },
    { icon: 'Users',  title: 'CRM Software',            desc: 'Track leads, client conversations, task history, sales pipelines, and follow-ups.' },
    { icon: 'Package',  title: 'Inventory & Stock',       desc: 'Real-time stock monitoring, automated reordering, stock alerts, and warehouse tracking.' },
    { icon: 'BarChart3',  title: 'Admin Dashboards',        desc: 'Custom visual dashboards to see business metrics, financial graphs, and operations statistics.' },
    { icon: 'Briefcase',  title: 'HR & Payroll Systems',    desc: 'Manage employee shifts, attendance logs, salary slips, performance records, and files.' },
    { icon: 'Repeat',  title: 'Workflow Automation',     desc: 'Automate manual entry, email notifications, WhatsApp alerts, and data sync between platforms.' },
  ];

  const whatYouGet = [
    { icon: 'Shield', title: 'Custom Fit Solutions',     desc: 'Software mapped exactly to your current business workflows — zero compromises.' },
    { icon: 'BarChart3', title: 'Real-time Analytics',       desc: 'View sales, stock, and staff productivity reports live at any time.' },
    { icon: 'Lock', title: 'Secure Database',           desc: 'Encrypted databases and secure architecture to protect sensitive data.' },
    { icon: 'Users', title: 'Role Access Control',       desc: 'Define who can view, edit, or delete data based on employee hierarchy.' },
    { icon: 'Zap', title: 'Fast & Lightweight',       desc: 'Built with modern frontend and backend frameworks for blazing speed.' },
    { icon: 'Settings', title: 'No License Fees',           desc: 'Complete ownership. Say goodbye to expensive per-user monthly subscription fees.' },
    { icon: 'Repeat', title: 'API Integrations',          desc: 'Seamlessly link payment gates, WhatsApp, SMS gateways, and accounting software.' },
    { icon: 'Headphones', title: 'Support & Updates',         desc: 'Ongoing support, routine data backups, and upgrades as your business grows.' },
  ];

  const whyChoose = [
    { title: '100% Customized For You',    desc: 'We map out your manual business processes first and then build the software to mirror them.' },
    { title: 'Zero Monthly License Fees',  desc: 'Unlike off-the-shelf software, you own the code completely. No surprise subscription increases.' },
    { title: 'Enterprise-grade Security',  desc: 'We prioritize secure code protocols, role-based authorization, and encrypted backups.' },
    { title: 'Direct Developer Contact',   desc: 'Communicate directly with our project leads and coders for fast feedback and deployment.' },
    { title: 'Local Coimbatore Presence',   desc: 'We are based in Coimbatore. We understand local textile, manufacturing, and business workflows.' },
  ];

  const process = [
    { step: '01', title: 'Discover',  desc: 'We study your business workflow, pain points, and requirements.' },
    { step: '02', title: 'Design',    desc: 'We map the database architecture, user roles, and dashboard wireframes.' },
    { step: '03', title: 'Develop',   desc: 'We build your custom system with clean, secure, and optimized code.' },
    { step: '04', title: 'Test',      desc: 'We run security checks, user acceptance tests, and database validation.' },
    { step: '05', title: 'Launch',    desc: 'We deploy to your server, migrate your legacy data, and train your staff.' },
  ];

  const portfolio = [
    { title: "Hynox Admin", cat: "Custom ERP System", desc: "Comprehensive business dashboard for quotation and invoice management", img: "/images/hynox_admin.png" },
    { title: "Team3 Admin", cat: "Custom Development", desc: "Internal system dashboard for project and content management", img: "/images/team3_admin.png" }
  ];

  const faqs = [
    { q: 'How much does custom ERP software development cost in Coimbatore?', a: 'The cost depends on the number of modules, users, integrations, and business requirements. We provide custom pricing based on your workflow and goals.' },
    { q: 'What is custom ERP software?', a: 'Custom ERP software is a business management system built specifically for your company\'s processes, helping manage inventory, sales, purchases, production, accounts, and operations in one place.' },
    { q: 'Can HYNOX build ERP software for textile businesses?', a: 'Yes, we develop custom ERP solutions for textile manufacturers, garment companies, wholesalers, exporters, and other businesses in Coimbatore.' },
    { q: 'Do you develop CRM software?', a: 'Yes, we build custom CRM software to manage leads, customers, follow-ups, sales pipelines, and client communication.' },
    { q: 'Can ERP software automate my business operations?', a: 'Yes, ERP software can automate inventory tracking, order processing, billing, employee management, reporting, and other repetitive tasks.' },
    { q: 'Do you provide inventory management software?', a: 'Yes, we develop inventory and stock management systems with real-time tracking, stock alerts, warehouse management, and reporting.' },
    { q: 'Can ERP software integrate with WhatsApp, payment gateways, and third-party tools?', a: 'Yes, we integrate ERP systems with WhatsApp, SMS gateways, accounting software, payment gateways, and other business applications.' },
    { q: 'Will my ERP system be accessible on mobile devices?', a: 'Yes, all ERP systems developed by HYNOX are mobile-responsive and can be accessed from desktops, tablets, and smartphones.' },
    { q: 'Do I own the ERP software after development?', a: 'Yes, you receive complete ownership of the software without recurring license fees or vendor lock-in.' },
    { q: 'How long does it take to develop custom ERP software?', a: 'Development timelines depend on project complexity, but most ERP and business software projects take between 6 and 16 weeks.' },
    { q: 'Is custom ERP better than ready-made software?', a: 'Custom ERP software is designed around your workflow, giving you more flexibility, better efficiency, and complete control compared to generic software.' },
    { q: 'Why choose HYNOX for ERP software development in Coimbatore?', a: 'HYNOX specializes in custom ERP development, business automation, CRM systems, inventory management software, and workflow solutions tailored for growing businesses.' },
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
              CUSTOM ERP &amp; SOFTWARE COMPANY IN COIMBATORE
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              Custom ERP &amp; Software<br />
              That <span className="svc-hero-accent-bw">Automates Your Business</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              We design and develop custom ERP systems, CRM portals, databases, and admin dashboards
              built specifically for your business workflow. Streamline your operations today.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              <a href="/works" className="btn btn-hero-outline">View Our Work</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <span>✓ Custom ERP</span>
              <span>✓ CRM Software</span>
              <span>✓ Mobile Responsive</span>
              <span>✓ No License Fees</span>
            </div>
          </div>
{/* ─── TECHNOLOGY MARQUEE ─── */}
        <section className="tech-marquee-section" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20, background: 'transparent', borderBottom: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="tech-marquee-container">
            <div className="tech-marquee-content">
              {[...Array(4)].flatMap(() => [
                { name: "Python", icon: "python" },
                { name: "Django", icon: "django" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Docker", icon: "docker" },
                { name: "AWS", customUrl: "https://img.icons8.com/ios-filled/50/ffffff/amazon-web-services.png" },
                { name: "GraphQL", icon: "graphql" },
                { name: "React", icon: "react" }
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
            <h2>Business Software Designed For Growth</h2>
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
          <div className="svc-portfolio-grid reveal-zoom reveal-delay-200" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {portfolio.map((item, i) => (
              <div className="svc-portfolio-card" key={i}>
                <div className="svc-portfolio-img" style={{ backgroundColor: '#050505' }}>
                  <img src={item.img} alt={item.title} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
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
            <h2>Software Development Questions Answered</h2>
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
          title="Ready to Build Your System?"
          subtitle="Tell us about your business processes — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
