'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to build links. On the home page, standard anchor hashes work nicely.
  // On other pages, they are prefixed with '/' to navigate back to the home page sections.
  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isHome ? 'animate-fade-in' : 'svc-header'} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      <Link href="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
        <img src="/images/hynox_logo.jpg" alt="HYNOX" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
        <span>HYNOX</span>
      </Link>
      
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`nav-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav">
          <li><Link href={getHref('#home')} onClick={closeMobileMenu}>HOME</Link></li>
          <li><Link href={getHref('#services')} onClick={closeMobileMenu}>SERVICES</Link></li>
          <li><Link href="/works" className={pathname === '/works' ? 'active' : ''} onClick={closeMobileMenu}>WORKS</Link></li>
          <li><Link href="/case-studies" onClick={closeMobileMenu}>CASE STUDIES</Link></li>
          <li><Link href="/blog" className={pathname === '/blog' ? 'active' : ''} onClick={closeMobileMenu}>BLOG</Link></li>
          <li><Link href="/careers" onClick={closeMobileMenu}>CAREERS</Link></li>
          <li><Link href={getHref('#faq')} onClick={closeMobileMenu}>FAQ</Link></li>
        </ul>
        <div className="mobile-menu-actions">
          <a href="https://voice.hynox.in/" target="_blank" rel="noopener noreferrer" className="btn btn-voice-ai" onClick={closeMobileMenu}>
            <Bot className="btn-icon" size={14} />
            Voice.ai
          </a>
          <Link href="/contact" className="btn btn-outline" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </nav>
      
      <div className="header-actions">
        <a href="https://voice.hynox.in/" target="_blank" rel="noopener noreferrer" className="btn btn-voice-ai">
          <Bot className="btn-icon" size={14} />
          Voice.ai
        </a>
        <Link href="/contact" className="btn btn-outline">
          Contact
        </Link>
      </div>
    </header>
  );
}
