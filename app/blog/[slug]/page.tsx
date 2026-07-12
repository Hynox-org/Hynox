'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { posts, getBlogDetail, BlogPost } from '../blogData';
import { ChevronRight, Sparkles, Laptop, Palette, Settings, FileText, Wrench, Check, X, Plus, ArrowRight, Copy, Send } from 'lucide-react';

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find current post
  const post = posts.find((p) => p.slug === slug);

  // Redirect if post not found
  useEffect(() => {
    if (slug && !post) {
      router.push('/blog');
    }
  }, [slug, post, router]);

  if (!post) {
    return (
      <div style={{ background: '#000000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
        <h3>Loading Article...</h3>
      </div>
    );
  }

  const detail = getBlogDetail(post);

  // Find 4 related articles in the same category (or other categories if not enough)
  const relatedArticles = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 4);

  // If we don't have 4, pad with articles from other categories
  if (relatedArticles.length < 4) {
    const idsToExclude = [post.id, ...relatedArticles.map((r) => r.id)];
    const padding = posts.filter((p) => !idsToExclude.includes(p.id)).slice(0, 4 - relatedArticles.length);
    relatedArticles.push(...padding);
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmailInput('');
      }, 4000);
    }
  };

  const copyToClipboard = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="mono-blog-wrapper" style={{ background: '#000000', color: '#ffffff' }}>
      <Header />

      <main style={{ minHeight: '100vh', paddingTop: '2.5rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* BREADCRUMB */}
          <div className="breadcrumb-container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#888888', textDecoration: 'none' }} className="hover-white">Home</Link>
            <ChevronRight size={12} style={{ color: '#555555' }} />
            <Link href="/blog" style={{ color: '#888888', textDecoration: 'none' }} className="hover-white">Blog</Link>
            <ChevronRight size={12} style={{ color: '#555555' }} />
            <span className="breadcrumb-active-title">{post.title}</span>
          </div>

          {/* BLOG HEADER */}
          <div style={{ marginBottom: '3.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              background: 'rgba(255,255,255,0.06)', 
              color: '#ffffff', 
              border: '1px solid rgba(255,255,255,0.15)', 
              padding: '0.35rem 0.9rem', 
              borderRadius: '4px', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1.5rem'
            }}>
              {post.category}
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', color: '#ffffff', letterSpacing: '-1.5px', maxWidth: '1000px' }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', width: '100%', maxWidth: '800px' }}>
              <span>{post.date}</span>
              <span style={{ color: '#333333' }}>|</span>
              <span>{post.readTime}</span>
              <span style={{ color: '#333333' }}>|</span>
              <span>By HYNOX</span>
            </div>
          </div>

          {/* TWO-COLUMN GRID */}
          <div className="blog-main-grid" style={{ alignItems: 'start', rowGap: '4rem' }}>
            
            {/* LEFT COLUMN: Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', textAlign: 'left' }}>
              
              {/* QUICK ANSWER / SUMMARY BOX */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '2.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} style={{ color: '#ffffff' }} />
                  <span style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quick Answer</span>
                </div>
                <p style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  {detail.quickAnswer}
                </p>
              </div>

              {/* ARTICLE INTRODUCTION */}
              <div style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
                <p>{detail.introduction}</p>
              </div>

              {/* WHY & PROBLEM */}
              <div style={{ borderLeft: '3px solid #ffffff', paddingLeft: '1.8rem', margin: '1rem 0' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.8rem' }}>The Challenge</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '1.05rem', margin: 0 }}>
                  {detail.problem}
                </p>
              </div>

              {/* DYNAMIC CONTENT SECTIONS */}
              {detail.sections.map((section, idx) => (
                <div key={idx} id={section.anchorId} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', scrollMarginTop: '80px' }}>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.6rem', marginTop: '1rem' }}>
                    {section.title}
                  </h2>
                  
                  {/* Web Dev Guide Factor layout grid */}
                  {post.slug === 'website-development-cost-in-coimbatore-2025-guide' && section.anchorId === 'factors' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
                      {[
                        { title: 'Type of Website', desc: 'Business, eCommerce, Portal or Web App', icon: <Laptop size={28} style={{ color: '#ffffff', margin: '0 auto' }} /> },
                        { title: 'Design Complexity', desc: 'Custom Design vs Template Based', icon: <Palette size={28} style={{ color: '#ffffff', margin: '0 auto' }} /> },
                        { title: 'Features & Options', desc: 'Features, Integrations and Functionality', icon: <Settings size={28} style={{ color: '#ffffff', margin: '0 auto' }} /> },
                        { title: 'Content & Pages', desc: 'Number of pages and content scope', icon: <FileText size={28} style={{ color: '#ffffff', margin: '0 auto' }} /> },
                        { title: 'Maintenance', desc: 'Ongoing support and future updates', icon: <Wrench size={28} style={{ color: '#ffffff', margin: '0 auto' }} /> }
                      ].map((item, index) => (
                        <div key={index} style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
                          <div style={{ marginBottom: '0.6rem' }}>{item.icon}</div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: '#ffffff' }}>{item.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.paragraphs.map((para, pidx) => {
                    const isEstimatedBox = para.startsWith('Estimated Cost:');
                    if (isEstimatedBox) {
                      return (
                        <div key={pidx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.2)', padding: '1.2rem 1.6rem', borderRadius: '8px', margin: '0.5rem 0' }}>
                          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>{para}</span>
                        </div>
                      );
                    }
                    return (
                      <p key={pidx} style={{ fontSize: '1.08rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                        {para}
                      </p>
                    );
                  })}
                </div>
              ))}

              {/* SOLUTION & ADVANTAGES */}
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.2rem' }}>Our Approach & Benefits</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '1.8rem' }}>
                  {detail.solution}
                </p>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {detail.benefits.map((benefit, bidx) => (
                    <li key={bidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.5 }}>
                      <Check size={18} strokeWidth={2.5} style={{ marginTop: '3px', flexShrink: 0, color: '#ffffff' }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMMON MISTAKES */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', borderRadius: '12px', alignItems: 'center' }}>
                <div style={{ flex: '1 1 300px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.2rem', color: '#ffffff' }}>Common Mistakes to Avoid</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {detail.commonMistakes.map((mistake, midx) => (
                      <li key={midx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.5 }}>
                        <X size={16} strokeWidth={2.5} style={{ marginTop: '4px', flexShrink: 0, color: '#ffffff' }} />
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Need a Custom Quote banner card */}
                <div style={{ background: '#ffffff', color: '#000000', padding: '2rem', borderRadius: '8px', flex: '1 1 260px', maxWidth: '100%', textAlign: 'center', border: '1px solid #e5e5e5' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#000000' }}>Need a Custom Quote?</h4>
                  <p style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem', lineHeight: 1.4 }}>
                    Every business is unique. Let\'s discuss your project and get you the right solution.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#000000', color: '#ffffff', textDecoration: 'none', padding: '0.75rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
                    Get Free Consultation
                  </Link>
                </div>
              </div>

              {/* FREQUENTLY ASKED QUESTIONS */}
              <div id="faqs" style={{ scrollMarginTop: '80px', marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '2rem', color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.6rem' }}>
                  Frequently Asked Questions
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {detail.faqs.map((faq, fidx) => (
                    <div 
                      key={fidx} 
                      style={{ 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '8px', 
                        background: activeFaq === fidx ? 'rgba(255,255,255,0.02)' : 'transparent',
                        overflow: 'hidden',
                        transition: 'all 0.3s'
                      }}
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === fidx ? null : fidx)}
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          color: '#ffffff',
                          padding: '1.25rem 1.8rem',
                          textAlign: 'left',
                          fontSize: '1.08rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span>{faq.q}</span>
                        <Plus 
                          size={20} 
                          style={{ 
                            color: 'rgba(255,255,255,0.4)', 
                            transition: 'transform 0.2s', 
                            transform: activeFaq === fidx ? 'rotate(45deg)' : 'none' 
                          }} 
                        />
                      </button>
                      
                      {activeFaq === fidx && (
                        <div style={{ padding: '0 1.8rem 1.5rem 1.8rem', color: 'rgba(255,255,255,0.6)', fontSize: '1.02rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1.2rem' }}>
                          <p style={{ margin: 0 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar */}
            <aside style={{ position: 'sticky', top: '7.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* TABLE OF CONTENTS */}
              <div className="sidebar-widget" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
                <h3 className="widget-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#000000', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.75rem', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                  Table of Contents
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem', textAlign: 'left' }}>
                  {detail.sections.map((section, idx) => (
                    <li key={idx}>
                      <a 
                        href={`#${section.anchorId}`} 
                        style={{ color: '#333333', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, display: 'flex', gap: '0.5rem', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
                      >
                        <span>{idx + 1}.</span>
                        <span>{section.title.replace(/^\d+\.\s*/, '')}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a 
                      href="#faqs" 
                      style={{ color: '#333333', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, display: 'flex', gap: '0.5rem', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
                    >
                      <span>{detail.sections.length + 1}.</span>
                      <span>FAQs</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* LET'S BUILD CTA CARD */}
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '2rem 1.8rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <h4 style={{ color: '#000000', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Let's Build Something Amazing Together</h4>
                <p style={{ color: '#666666', fontSize: '0.85rem', marginBottom: '1.8rem', lineHeight: 1.5 }}>
                  We build fast, secure and scalable websites that help your business grow.
                </p>
                <Link href="/contact" style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  background: '#0052ff', 
                  color: '#ffffff', 
                  padding: '0.8rem 1.6rem', 
                  borderRadius: '6px', 
                  textDecoration: 'none', 
                  fontWeight: 600, 
                  fontSize: '0.9rem',
                  transition: 'all 0.3s'
                }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.background = '#0043d0'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#0052ff'; }}>
                  Start Project <ArrowRight size={16} />
                </Link>
                {/* Tech Dashboard mockup container */}
                <div style={{ marginTop: '2rem', border: '1px solid #e5e5e5', borderRadius: '6px', overflow: 'hidden', height: '140px', background: '#0a0a0a' }}>
                  <img src="/blog-hero.png" alt="Build Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                </div>
              </div>

              {/* SHARE THIS ARTICLE */}
              <div style={{ textAlign: 'left', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '2rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#666666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.75rem' }}>
                  Share this article
                </h4>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  {[
                    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=`, icon: 'FB' },
                    { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=`, icon: 'TW' },
                    { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=`, icon: 'LI' }
                  ].map((soc, sidx) => (
                    <button 
                      key={sidx}
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.open(`${soc.url}${encodeURIComponent(window.location.href)}`, '_blank');
                        }
                      }}
                      style={{ 
                        width: '38px', 
                        height: '38px', 
                        borderRadius: '50%', 
                        background: '#f5f5f5', 
                        border: '1px solid #e5e5e5', 
                        color: '#000000', 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#e5e5e5'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#f5f5f5'; }}
                    >
                      {soc.icon}
                    </button>
                  ))}
                  {/* Copy Link button */}
                  <button 
                    onClick={copyToClipboard}
                    style={{ 
                      borderRadius: '20px', 
                      background: '#f5f5f5', 
                      border: '1px solid #e5e5e5', 
                      color: '#000000', 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      padding: '0 1rem', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#e5e5e5'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#f5f5f5'; }}
                  >
                    {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>
              </div>

              {/* RELATED ARTICLES */}
              <div className="sidebar-widget" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '12px', textAlign: 'left' }}>
                <h3 className="widget-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#000000', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.75rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                  Related Articles
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {relatedArticles.map((art) => (
                    <Link key={art.id} href={`/blog/${art.slug}`} style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none' }}>
                      <div style={{ width: '80px', height: '52px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #e5e5e5', background: '#0d0d0d', flexShrink: 0 }}>
                        <img src={art.image} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#000000', margin: 0, lineHeight: 1.3 }} onMouseEnter={(e) => e.currentTarget.style.color = '#666666'} onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}>
                          {art.title}
                        </h4>
                        <span style={{ fontSize: '0.72rem', color: '#666666' }}>{art.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* HAVE A PROJECT IDEA? */}
              <div className="sidebar-widget" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '12px', textAlign: 'left' }}>
                <h3 className="widget-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#000000', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.75rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  Have a Project?
                </h3>
                <p className="widget-desc" style={{ fontSize: '0.82rem', color: '#666666', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Let's build custom software, web solutions, and marketing engines to grow your business.
                </p>
                <a href="/contact" className="newsletter-btn-sidebar" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0052ff', color: '#ffffff', fontWeight: 'bold', height: '42px' }}>
                  Let's Talk
                  <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                </a>
              </div>

            </aside>

          </div>

          {/* BOTTOM GLOBAL CTA BAR */}
          <div style={{ marginTop: '7rem', background: 'linear-gradient(145deg, #111111, #020202)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '3.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Send size={32} style={{ color: '#000000' }} />
              </div>
              <div>
                <h3 style={{ color: '#ffffff', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Ready to Build Your Website?</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', margin: 0 }}>Get a free consultation and let's discuss your project.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: '#ffffff', color: '#000000', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hover-gray">
                Get Free Consultation <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <a href="https://wa.me/918870524355" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hover-white-border">
                Chat on WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
