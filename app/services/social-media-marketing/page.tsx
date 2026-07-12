'use client';

import { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight, Play } from 'lucide-react';
import Header from '../../components/Header';
import CubesBackground from '../../components/CubesBackground';
import ServiceCTA from '../../components/ServiceCTA';
import Footer from '../../components/Footer';

export default function SocialMediaMarketingPage() {
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
    { icon: 'Calendar',  title: 'Content Strategy Calendar', desc: 'Pre-planned monthly calendar outlining educational, promotional, and trending content ideas.' },
    { icon: 'Palette',  title: 'Custom Graphic Design',    desc: 'Bespoke feed banners, carousel infographics, and story templates reflecting your brand guidelines.' },
    { icon: 'Film',  title: 'Reels & Video Editing',   desc: 'Professional editing of raw product videos with trending audios, captions, and transitions.' },
    { icon: 'MessageSquare',  title: 'Community Engagement',     desc: 'Daily monitoring of post comments and direct messages (DMs) to boost interaction score.' },
    { icon: 'Users',  title: 'Influencer Collaboration',  desc: 'Sourcing, vetting, and coordinating with local creators for product features.' },
    { icon: 'TrendingUp',  title: 'Profile Optimization',     desc: 'Revamp bio layouts, story highlights, link placements, and tags for better profile conversion.' },
  ];

  const whatYouGet = [
    { icon: 'PenTool', title: 'Monthly Strategy File',    desc: 'Structured themes and goals defined for the upcoming month.' },
    { icon: 'Palette', title: 'Premium Visual Designs',   desc: 'Clean, minimalist grid layouts matching premium aesthetics.' },
    { icon: '✂', title: 'Short-form Video Edits',    desc: 'Edited Reels, TikToks, and Shorts optimized for viewer retention.' },
    { icon: 'MessageSquare', title: 'Daily Message Reviews',    desc: 'Ensuring customer questions are addressed instantly in comments.' },
    { icon: 'Tag', title: 'Niche Hashtag Lists',      desc: 'Researched keyword groupings to improve explore-page reach.' },
    { icon: 'BarChart3', title: 'Monthly Growth Audits',    desc: 'Reports detailing reach improvements, follower gains, and link clicks.' },
    { icon: 'Flame', title: 'Trend Sourcing Alerts',    desc: 'Weekly briefs on trending formats and sounds to hop on early.' },
    { icon: 'Headphones', title: 'Direct Team Access',       desc: 'Talk directly to the designer and editor managing your page.' },
  ];

  const whyChoose = [
    { title: 'Aesthetics First Curation',    desc: 'We prioritize premium visual layouts. Clean typography, cohesive grids, and elegant video edits.' },
    { title: 'Local demographic Savvy',      desc: 'We understand what content resonates with Tamil Nadu and global export audiences.' },
    { title: 'Direct Creative Collaboration', desc: 'No account managers filters. Share feedback directly with active editors.' },
    { title: 'Cross-channel Publishing',     desc: 'Synchronized publishing across Instagram, Facebook, LinkedIn, and YouTube.' },
    { title: 'Zero Long Retainer Locks',     desc: 'Flexible terms that guarantee quality results month after month.' },
  ];

  const process = [
    { step: '01', title: 'Analyze',  desc: 'We review your competitor pages, current branding, and style guide.' },
    { step: '02', title: 'Calendar', desc: 'We outline the monthly content buckets, copy drafts, and shoot requirements.' },
    { step: '03', title: 'Create',   desc: 'We design the graphics, draft captions, and edit product reels.' },
    { step: '04', title: 'Review',   desc: 'You inspect the planned drafts in a shared workspace before publishing.' },
    { step: '05', title: 'Manage',   desc: 'We schedule, reply to comments, audit insights, and optimize the calendar.' },
  ];

  const portfolio = [
    { 
      
      videoUrl: '/videos/smm-1.mp4'
    },
    {
      
      videoUrl: '/videos/smm-2.mp4'
    },
    { 
      
      videoUrl: '/videos/smm-3.mp4'
    },
    { 
      
      videoUrl: '/videos/smm-4.mp4',
      titleColor: '#facc15'
    },
    { 
      
      videoUrl: '/videos/smm-5.mp4'
    },
    
   
  ];

  const faqs = [
    { q: 'What is social media marketing?', a: 'Social media marketing helps businesses build brand awareness, engage customers, generate leads, and grow their online presence through platforms like Instagram, Facebook, LinkedIn, and YouTube.' },
    { q: 'What social media marketing services does HYNOX provide?', a: 'HYNOX offers content creation, social media management, graphic design, reel editing, content calendars, community engagement, and profile optimization services.' },
    { q: 'Do you manage Instagram and Facebook pages?', a: 'Yes, we manage Instagram, Facebook, LinkedIn, and other social media platforms with content planning, publishing, and audience engagement.' },
    { q: 'How often will you post content on my social media pages?', a: 'The posting frequency depends on your package and goals. Most businesses publish content multiple times per week along with stories and reels.' },
    { q: 'Do you create reels and short-form videos?', a: 'Yes, we create and edit Instagram Reels, Facebook Reels, YouTube Shorts, and other short-form videos designed to increase engagement and reach.' },
    { q: 'Can social media marketing help my business grow?', a: 'Yes, consistent social media marketing can improve brand visibility, customer trust, audience engagement, and lead generation.' },
    { q: 'Do you provide content strategy and content calendars?', a: 'Yes, we create monthly content strategies and calendars tailored to your industry, audience, and business objectives.' },
    { q: 'Do you design social media graphics and creatives?', a: 'Yes, we design professional social media posts, carousel graphics, banners, promotional creatives, and branded visual content.' },
    { q: 'Can HYNOX help increase followers and engagement?', a: 'Yes, we focus on organic growth strategies, engaging content, profile optimization, and audience interaction to improve engagement.' },
    { q: 'Do you offer social media marketing for businesses in Coimbatore?', a: 'Yes, HYNOX provides social media marketing services for businesses in Coimbatore and across India, including textile brands, retailers, manufacturers, and startups.' },
    { q: 'How long does it take to see results from social media marketing?', a: 'Social media growth is a long-term strategy. Most businesses begin seeing noticeable improvements in reach and engagement within a few months of consistent activity.' },
    { q: 'Why choose HYNOX as a social media marketing agency in Coimbatore?', a: 'HYNOX combines content strategy, creative design, video editing, and audience engagement to help businesses build a strong and professional online presence.' },
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
              SOCIAL MEDIA MARKETING AGENCY IN COIMBATORE
            </span>

            <h1 className="hero-center-h1 reveal-fade-in reveal-delay-100">
              Social Media Strategy That<br />
              <span className="svc-hero-accent-bw">Grows Your Brand Value</span>
            </h1>

            <p className="hero-center-p reveal-fade-in reveal-delay-200">
              We plan content calendars, design custom feed graphics, edit high-retention reels, 
              and engage your community to establish a premium online presence.
            </p>

            <div className="hero-center-actions reveal-fade-in reveal-delay-300">
              <a href="/contact" className="btn btn-hero-solid">Get Free Consultation <ArrowRight size={16} style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} /></a>
              <a href="/works" className="btn btn-hero-outline">View Our Work</a>
            </div>

            <div className="svc-hero-badges-bw reveal-fade-in reveal-delay-400" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
              <span>✓ Content Creation</span>
              <span>✓ Page Management</span>
              <span>✓ Organic Growth</span>
              <span>✓ Brand Engagement</span>
            </div>
          </div>
{/* ─── TECHNOLOGY MARQUEE ─── */}
        <section className="tech-marquee-section" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20, background: 'transparent', borderBottom: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="tech-marquee-container">
            <div className="tech-marquee-content">
              {[...Array(4)].flatMap(() => [
                { name: "Instagram Reels", icon: "instagram" },
                { name: "TikTok", icon: "tiktok" },
                { name: "YouTube Shorts", icon: "youtube" },
                { name: "LinkedIn", customUrl: "https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" },
                { name: "X (Twitter)", icon: "x" },
                { name: "Pinterest", icon: "pinterest" }
              ]).map((tech, i) => (
                <div key={i} className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={tech.customUrl || `https://cdn.simpleicons.org/${tech.icon}/ffffff`} alt={tech.name} style={{ width: '24px', height: '24px' }} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        </section>
        {/* ─── 6. PORTFOLIO ─── */}
        <section className="svc-section svc-section-alt" id="portfolio">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">PORTFOLIO</span>
            <h2>Recent Works</h2>
          </div>
          <div className="social-portfolio-grid reveal-zoom reveal-delay-200">
            {portfolio.map((item: any, i) => (
              <div className="social-portfolio-card" key={i}>
                <div className="social-portfolio-img" style={{ width: '100%', height: '100%' }}>
                  <video 
                    src={item.videoUrl} 
                    poster={item.img} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              </div>
            ))}
            <div className="social-portfolio-card social-portfolio-cta-card">
              <h4 style={{ margin: 0 }}>YOUR BRAND<br />NEXT?</h4>
              <a href="/contact" className="cta-btn">
                Start Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>


        {/* ─── 6b. PROOF OF PERFORMANCE / VIEW INSIGHTS ─── */}
        <section className="svc-section" id="insights" style={{ paddingBottom: '5rem' }}>
          <div className="svc-section-header reveal-blur" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="svc-label" style={{ letterSpacing: '0.15em', fontSize: '0.85rem' }}>PROOF OF PERFORMANCE</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', marginTop: '0.5rem', fontFamily: 'var(--font-geist-sans), sans-serif' }}>View Insights</h2>
            <div className="svc-divider" style={{ margin: '1rem auto' }} />
          </div>

          <div className="reveal-zoom" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            {/* Dashboard Card 1 */}
            <div style={{ background: '#0b0f19', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '2rem 1.75rem', width: '100%', maxWidth: '380px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', color: '#ffffff' }}>
                <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>←</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Professional dashboard</span>
                <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>⚙</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Insights</h3>
                </div>
                <div style={{ color: '#8e9aa8', fontSize: '0.8rem', fontWeight: 500 }}>6 Apr-5 May</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e9aa8', fontSize: '0.9rem', fontWeight: 500 }}>Views</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4ade80', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>↗ 4.2M</span>
                    <span style={{ color: '#8e9aa8', fontSize: '0.8rem', marginLeft: '2px' }}>&gt;</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e9aa8', fontSize: '0.9rem', fontWeight: 500 }}>Interactions</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>330.2K</span>
                    <span style={{ color: '#8e9aa8', fontSize: '0.8rem', marginLeft: '2px' }}>&gt;</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e9aa8', fontSize: '0.9rem', fontWeight: 500 }}>New followers</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>829</span>
                    <span style={{ color: '#8e9aa8', fontSize: '0.8rem', marginLeft: '2px' }}>&gt;</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e9aa8', fontSize: '0.9rem', fontWeight: 500 }}>Content you shared</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>47</span>
                    <span style={{ color: '#8e9aa8', fontSize: '0.8rem', marginLeft: '2px' }}>&gt;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Card 2 */}
            <div style={{ background: '#0b0f19', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '2rem 1.75rem', width: '100%', maxWidth: '380px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', color: '#ffffff' }}>
                <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>←</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Professional dashboa...</span>
                <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>⚙</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Insights</h3>
                </div>
                <div style={{ color: '#8e9aa8', fontSize: '0.8rem', fontWeight: 500 }}>14 Apr-13 May</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e9aa8', fontSize: '0.9rem', fontWeight: 500 }}>Views</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>1.4L</span>
                    <span style={{ color: '#8e9aa8', fontSize: '0.8rem', marginLeft: '2px' }}>&gt;</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e9aa8', fontSize: '0.9rem', fontWeight: 500 }}>Interactions</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4ade80', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>↗ 1.1T</span>
                    <span style={{ color: '#8e9aa8', fontSize: '0.8rem', marginLeft: '2px' }}>&gt;</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e9aa8', fontSize: '0.9rem', fontWeight: 500 }}>New followers</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4ade80', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>↗ 119</span>
                    <span style={{ color: '#8e9aa8', fontSize: '0.8rem', marginLeft: '2px' }}>&gt;</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#8e9aa8', fontSize: '0.9rem', fontWeight: 500 }}>Content you shared</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>31</span>
                    <span style={{ color: '#8e9aa8', fontSize: '0.8rem', marginLeft: '2px' }}>&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. WHAT WE BUILD ─── */}
        <section className="svc-section svc-section-alt" id="what-we-build">
          <div className="svc-section-header reveal-blur">
            <span className="svc-label">WHAT WE BUILD</span>
            <h2>Our Social Media Services</h2>
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
            <h2>Social Media Questions Answered</h2>
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
          title="Ready to Build Your Social Presence?"
          subtitle="Tell us about your brand goals — we'll get back to you within 24 hours."
        />
      </main>

      <Footer />
    </>
  );
}
