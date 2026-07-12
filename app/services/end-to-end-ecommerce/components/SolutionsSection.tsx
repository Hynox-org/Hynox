import React from 'react';

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 md:py-40 relative">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-3xl animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <span className="text-xs uppercase tracking-[0.6em] text-muted-foreground mb-4 md:mb-6 block" style={{ color: '#a1a1aa' }}>The HYNOX Solution</span>
            <h2 className="text-4xl md:text-7xl font-serif leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>Modernizing Enterprise <br className="hidden md:block"/>Legacy Systems</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm font-light leading-relaxed italic" style={{ color: '#a1a1aa' }}>"Every system we build is an asset for the next 10 years of scaling, not a temporary patch."</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          <div className="p-12 border-r border-b border-white/10 hover:bg-white/[0.03] transition-all duration-700 group cursor-default relative overflow-hidden animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-10 text-muted-foreground group-hover:text-white transition-colors duration-500" style={{ color: '#a1a1aa' }}>
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <h3 className="text-2xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Dedicated IT Support Team</h3>
            <p className="text-muted-foreground text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ color: '#a1a1aa' }}>An elite squad of specialized engineers assigned exclusively to your enterprise infrastructure for 24/7 coverage.</p>
          </div>
          <div className="p-12 border-r border-b border-white/10 hover:bg-white/[0.03] transition-all duration-700 group cursor-default relative overflow-hidden animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-10 text-muted-foreground group-hover:text-white transition-colors duration-500" style={{ color: '#a1a1aa' }}>
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
            </svg>
            <h3 className="text-2xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>System Integration</h3>
            <p className="text-muted-foreground text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ color: '#a1a1aa' }}>We bridge the gap between high-value legacy software and modern API-driven architectures with zero data loss.</p>
          </div>
          <div className="p-12 border-r border-b border-white/10 hover:bg-white/[0.03] transition-all duration-700 group cursor-default relative overflow-hidden animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-10 text-muted-foreground group-hover:text-white transition-colors duration-500" style={{ color: '#a1a1aa' }}>
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <h3 className="text-2xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Cloud Infrastructure</h3>
            <p className="text-muted-foreground text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ color: '#a1a1aa' }}>Architecting high-availability environments on AWS/Azure designed for ₹100Cr+ transaction volumes.</p>
          </div>
          <div className="p-12 border-r border-b border-white/10 hover:bg-white/[0.03] transition-all duration-700 group cursor-default relative overflow-hidden animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-10 text-muted-foreground group-hover:text-white transition-colors duration-500" style={{ color: '#a1a1aa' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <h3 className="text-2xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Proactive 24/7 Monitoring</h3>
            <p className="text-muted-foreground text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ color: '#a1a1aa' }}>Real-time NOC monitoring that identifies and resolves bottlenecks before they affect your bottom line.</p>
          </div>
          <div className="p-12 border-r border-b border-white/10 hover:bg-white/[0.03] transition-all duration-700 group cursor-default relative overflow-hidden animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-10 text-muted-foreground group-hover:text-white transition-colors duration-500" style={{ color: '#a1a1aa' }}>
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            <h3 className="text-2xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Workflow Automation</h3>
            <p className="text-muted-foreground text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ color: '#a1a1aa' }}>Custom-built enterprise automation tools that save thousands of man-hours across your global operations.</p>
          </div>
          <div className="p-12 border-r border-b border-white/10 hover:bg-white/[0.03] transition-all duration-700 group cursor-default relative overflow-hidden animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-10 text-muted-foreground group-hover:text-white transition-colors duration-500" style={{ color: '#a1a1aa' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <h3 className="text-2xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Security &amp; Compliance</h3>
            <p className="text-muted-foreground text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ color: '#a1a1aa' }}>Hardening your infrastructure to meet international security standards and enterprise compliance requirements.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
