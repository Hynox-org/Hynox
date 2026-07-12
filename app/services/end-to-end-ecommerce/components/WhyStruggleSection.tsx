import React from 'react';

export function WhyStruggleSection() {
  return (
    <section className="py-24 md:py-40 bg-white/[0.02] border-y border-white/5 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <h2 className="text-3xl md:text-6xl font-serif mb-8 md:mb-10 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Why Businesses Struggle <br className="hidden sm:block"/>With IT Systems</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-12 font-light leading-relaxed" style={{ color: '#a1a1aa' }}>As enterprises scale beyond ₹100Cr, legacy technical debt and fragmented software become operational liabilities.</p>
            <div className="space-y-8">
              <div className="group border-l border-white/10 pl-8 hover:border-white/40 transition-colors">
                <h3 className="text-lg font-medium mb-2 group-hover:translate-x-2 transition-transform">Critical Downtime</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed" style={{ color: '#a1a1aa' }}>Every hour of offline operations costs millions in lost productivity and trust.</p>
              </div>
              <div className="group border-l border-white/10 pl-8 hover:border-white/40 transition-colors">
                <h3 className="text-lg font-medium mb-2 group-hover:translate-x-2 transition-transform">Fragmented Ecosystems</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed" style={{ color: '#a1a1aa' }}>Siloed tools and disconnected software prevent real-time data flow.</p>
              </div>
              <div className="group border-l border-white/10 pl-8 hover:border-white/40 transition-colors">
                <h3 className="text-lg font-medium mb-2 group-hover:translate-x-2 transition-transform">No Dedicated Support</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed" style={{ color: '#a1a1aa' }}>Relying on generic support lines for mission-critical infrastructure.</p>
              </div>
              <div className="group border-l border-white/10 pl-8 hover:border-white/40 transition-colors">
                <h3 className="text-lg font-medium mb-2 group-hover:translate-x-2 transition-transform">Opaque Operational Costs</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed" style={{ color: '#a1a1aa' }}>Hidden technical debt leading to unpredictable scaling expenses.</p>
              </div>
            </div>
            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium" style={{ color: '#a1a1aa' }}>Without the right systems, scaling is risky and inefficient</p>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
              <div className="space-y-4 sm:space-y-6 pt-0 sm:pt-12">
                <div className="aspect-square bg-white/5 border border-white/10 p-10 flex flex-col justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-muted-foreground" style={{ color: '#a1a1aa' }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <p className="text-3xl font-serif mb-1 tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>99.9%</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground" style={{ color: '#a1a1aa' }}>Uptime Risk Without HYNOX</p>
                  </div>
                </div>
                <div className="h-48 bg-white/5 border border-white/10 p-10 flex flex-col justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-muted-foreground" style={{ color: '#a1a1aa' }}>
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                  <p className="text-sm font-light leading-snug">Fragmented Data Architecture</p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="h-64 bg-white/5 border border-white/10 p-10 flex flex-col justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-muted-foreground" style={{ color: '#a1a1aa' }}>
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <div>
                    <p className="text-2xl font-serif mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Vulnerability Gap</p>
                    <p className="text-xs text-muted-foreground leading-relaxed" style={{ color: '#a1a1aa' }}>Legacy systems lack modern security protocols.</p>
                  </div>
                </div>
                <div className="aspect-square bg-white text-black p-10 flex flex-col justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line>
                  </svg>
                  <p className="text-sm font-bold uppercase tracking-wider leading-tight italic">Technical Debt Threshold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
