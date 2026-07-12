import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav style={{ backgroundColor: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(12px)', height: '100px' }} className="fixed top-0 w-full z-50 border-b border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link className="flex flex-col group" href="/">
          <span className="text-2xl font-serif font-bold tracking-tighter group-hover:opacity-80 transition-opacity">HYNOX</span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-light -mt-1" style={{ color: '#a1a1aa' }}>Enterprise IT</span>
        </Link>
        <div className="hidden md:flex items-center gap-12">
          <a className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors" href="#solutions" style={{ color: '#a1a1aa' }}>Solutions</a>
          <a className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors" href="#why-hynox" style={{ color: '#a1a1aa' }}>Why HYNOX</a>
          <a className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors" href="#proof" style={{ color: '#a1a1aa' }}>Case Studies</a>
          <a className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors" href="#contact" style={{ color: '#a1a1aa' }}>Contact</a>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium h-9 px-8 py-6 uppercase tracking-widest text-xs border border-white/10 hover:bg-white hover:text-black transition-all bg-transparent">
            Consultation
          </button>
        </div>
        <button className="md:hidden p-2 text-white" aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
