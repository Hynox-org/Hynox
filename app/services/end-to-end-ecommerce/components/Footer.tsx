import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505] relative z-10">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link className="flex flex-col mb-8" href="/">
              <span className="text-3xl font-serif font-bold tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>HYNOX</span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground font-light" style={{ color: '#a1a1aa' }}>Enterprise IT Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs font-light leading-relaxed" style={{ color: '#a1a1aa' }}>High-ticket IT systems and dedicated support for enterprises scaling globally. Built for reliability, security, and the future.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-8 text-white">Solutions</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground" style={{ color: '#a1a1aa' }}>
              <li><a className="hover:text-white transition-colors" href="#">Infrastructure</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Support</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Integration</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-8 text-white">Contact</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground" style={{ color: '#a1a1aa' }}>
              <li><span className="text-white">India:</span> +91 88705 24355</li>
              <li><span className="text-white">Email:</span> legacy@hynox.com</li>
              <li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground" style={{ color: '#a1a1aa' }}>© 2026 HYNOX Enterprise IT Solutions Pvt Ltd.</p>
          <div className="flex gap-10 text-[10px] uppercase tracking-widest text-muted-foreground" style={{ color: '#a1a1aa' }}>
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
