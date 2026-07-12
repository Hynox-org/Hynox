'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import CubesBackground from '../components/CubesBackground';
import Footer from '../components/Footer';
import { posts } from './blogData';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Search, Check, Mail } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [emailInput, setEmailInput] = useState('');
  const [emailInputBottom, setEmailInputBottom] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribedBottom, setIsSubscribedBottom] = useState(false);

  const popularPosts = [
    {
      title: 'Website Development Cost in Coimbatore – Complete Guide',
      date: 'Apr 28, 2025',
      image: '/web-development-hero.png',
      slug: 'website-development-cost-in-coimbatore-2025-guide',
    },
    {
      title: 'Why Every Business in Coimbatore Needs a Professional Website',
      date: 'Apr 20, 2025',
      image: '/performance-marketing-hero.png',
      slug: 'why-every-textile-business-needs-a-professional-website',
    },
    {
      title: 'Top 10 Features Every Business Website Must Have',
      date: 'Apr 15, 2025',
      image: '/web-development-hero.png',
      slug: 'top-features-every-business-website-should-have',
    },
    {
      title: 'How We Helped Businesses Automate and Save 50% Time',
      date: 'Apr 10, 2025',
      image: '/erp-software-hero.png',
      slug: 'how-custom-software-saves-time-and-money',
    },
  ];

  const categories = [
    { name: 'Web Development', count: 10 },
    { name: 'eCommerce', count: 10 },
    { name: 'Automation', count: 10 },
    { name: 'App Development', count: 10 },
    { name: 'Digital Marketing', count: 10 },
  ];

  const topics = ['All', 'Web Development', 'eCommerce', 'Automation', 'App Development', 'Digital Marketing'];

  // Filter posts based on selected category & search input
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const POSTS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Safely clamp currentPage if it exceeds totalPages
  const activePage = Math.min(currentPage, Math.max(1, totalPages));

  const indexOfLastPost = activePage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (activePage > 3) {
        pages.push('...');
      }
      
      const start = Math.max(2, activePage - 1);
      const end = Math.min(totalPages - 1, activePage + 1);
      
      for (let i = start; i <= end; i++) {
        // Avoid adding duplicate of page 1 or totalPages
        if (i > 1 && i < totalPages) {
          pages.push(i);
        }
      }
      
      if (activePage < totalPages - 2) {
        pages.push('...');
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const handleSubscribe = (e: React.FormEvent, isBottom: boolean) => {
    e.preventDefault();
    if (isBottom) {
      if (emailInputBottom.trim()) {
        setIsSubscribedBottom(true);
        setTimeout(() => {
          setIsSubscribedBottom(false);
          setEmailInputBottom('');
        }, 4000);
      }
    } else {
      if (emailInput.trim()) {
        setIsSubscribed(true);
        setTimeout(() => {
          setIsSubscribed(false);
          setEmailInput('');
        }, 4000);
      }
    }
  };

  useEffect(() => {
    // Scroll animation support
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-blur, .reveal-fade-in, .reveal-from-left, .reveal-from-right, .reveal-zoom, .reveal-flip-x, .reveal-rotate, .reveal-scale-up');
    elements.forEach((el) => {
      // Set initial state
      el.classList.add('is-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCategory, searchQuery, activePage]);

  return (
    <div className="mono-blog-wrapper">
      <Header />

      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh', paddingBottom: '6rem' }}>
        


        {/* CONTENT SECTION WRAPPER (Dark Background) */}
        <div className="mono-blog-content-section" style={{ background: '#000000', color: '#ffffff', paddingTop: '0rem' }}>
          <div className="mono-blog-container content-container" id="topics">
            
            {/* TOPICS FILTER BAR */}
            <section className="topics-section reveal-fade-in" style={{ marginTop: '-3rem', borderTop: 'none' }}>
              <h2 className="topics-heading">Browse By Topic</h2>
              <div className="topics-pills-container">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setActiveCategory(topic);
                      setCurrentPage(1);
                    }}
                    className={`topic-pill ${activeCategory === topic ? 'active' : ''}`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </section>

            {/* TWO-COLUMN GRID */}
            <section className="blog-main-grid">
              
              {/* Left Column: Post list */}
              <div className="blog-posts-column">
                {currentPosts.length > 0 ? (
                  <div className="posts-cards-grid">
                    {currentPosts.map((post) => (
                      <article key={post.id} className="blog-card reveal-on-scroll">
                        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                           <div className="blog-card-image-box">
                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <span className="blog-card-tag">{post.category}</span>
                          </div>
                        </Link>
                        <div className="blog-card-meta">
                          <span className="meta-date">
                            <Calendar size={12} style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
                            {post.date}
                          </span>
                          <span className="meta-read-time">
                            <Clock size={12} style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
                            {post.readTime}
                          </span>
                        </div>
                        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <h3 className="blog-card-title">{post.title}</h3>
                        </Link>
                        <p className="blog-card-description">{post.desc}</p>
                        <Link href={`/blog/${post.slug}`} className="blog-card-readmore">
                          Read More
                          <ArrowRight size={16} />
                        </Link>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="no-results">
                    <h3>No posts found</h3>
                    <p>Try searching for a different keyword or category.</p>
                    <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); setCurrentPage(1); }} className="btn-reset">
                      Reset Filters
                    </button>
                  </div>
                )}

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="pagination-container reveal-fade-in">
                    <button 
                      onClick={() => {
                        setCurrentPage(prev => Math.max(prev - 1, 1));
                        window.scrollTo({ top: document.getElementById('topics')?.offsetTop || 300, behavior: 'smooth' });
                      }}
                      className="page-btn arrow-btn"
                      disabled={activePage === 1}
                    >
                      <ChevronLeft size={14} />
                    </button>

                    {getPageNumbers().map((pageNum, idx) => {
                      if (pageNum === '...') {
                        return <span key={`dots-${idx}`} className="page-dots">...</span>;
                      }
                      return (
                        <button 
                          key={`page-${pageNum}`} 
                          className={`page-btn ${activePage === pageNum ? 'active' : ''}`} 
                          onClick={() => {
                            setCurrentPage(pageNum as number);
                            window.scrollTo({ top: document.getElementById('topics')?.offsetTop || 300, behavior: 'smooth' });
                          }}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button 
                      onClick={() => {
                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                        window.scrollTo({ top: document.getElementById('topics')?.offsetTop || 300, behavior: 'smooth' });
                      }}
                      className="page-btn arrow-btn"
                      disabled={activePage === totalPages}
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Sidebar */}
              <aside className="blog-sidebar-column">
                
                {/* SEARCH */}
                <div className="sidebar-widget search-widget reveal-on-scroll">
                  <form onSubmit={(e) => e.preventDefault()} className="search-form">
                    <input
                      type="text"
                      placeholder="Search blogs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="sidebar-search-input"
                    />
                    <button type="submit" className="sidebar-search-btn" aria-label="Search">
                      <Search size={16} />
                    </button>
                  </form>
                </div>

                {/* CATEGORIES */}
                <div className="sidebar-widget categories-widget reveal-on-scroll">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="categories-list">
                    {categories.map((cat) => (
                      <li key={cat.name} className="category-item-row">
                        <button
                          onClick={() => {
                            setActiveCategory(cat.name);
                            setCurrentPage(1);
                          }}
                          className={`category-item-btn ${activeCategory.toLowerCase() === cat.name.toLowerCase() ? 'active' : ''}`}
                        >
                          <ChevronRight className="category-arrow" size={10} />
                          {cat.name}
                        </button>
                        <span className="category-count">{cat.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* POPULAR POSTS */}
                <div className="sidebar-widget popular-widget reveal-on-scroll">
                  <h3 className="widget-title">Popular Posts</h3>
                  <div className="popular-posts-list">
                    {popularPosts.map((pop, idx) => (
                      <div key={idx} className="popular-post-item">
                        <Link href={`/blog/${pop.slug}`} style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none' }}>
                          <div className="popular-post-thumb">
                            <img src={pop.image} alt={pop.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <div className="popular-post-details">
                            <h4 className="popular-post-title" style={{ color: '#ffffff' }}>
                              {pop.title}
                            </h4>
                            <span className="popular-post-date">{pop.date}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* STAY UPDATED NEWSLETTER */}
                <div className="sidebar-widget newsletter-widget reveal-on-scroll">
                  <h3 className="widget-title">Have a Project?</h3>
                  <p className="widget-desc">Let's build custom software, web solutions, and marketing engines to grow your business.</p>
                  <a href="/contact" className="newsletter-btn-sidebar" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '42px', marginTop: '1rem' }}>
                    Let's Talk
                    <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </a>
                </div>

              </aside>

            </section>

            {/* BOTTOM NEWSLETTER PANEL */}
            <section className="bottom-newsletter-banner reveal-fade-in">
              <div className="banner-content">
                <div className="banner-icon-box">
                  <Mail size={24} />
                </div>
                <div className="banner-text-details">
                  <h3>Ready to Grow Your Business?</h3>
                  <p>Partner with HYNOX to build custom software, web solutions, and marketing engines.</p>
                </div>
              </div>

              <div className="banner-form-box" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a href="/contact" className="banner-submit-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
                  Get Free Consultation
                  <ArrowRight size={14} strokeWidth={2.5} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
