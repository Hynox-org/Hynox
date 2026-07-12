import React from 'react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>
      <div className="container px-6 relative z-10">
        <div className="text-center animate-on-scroll" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif mb-16 max-w-6xl mx-auto leading-[1.05] text-balance" style={{ fontFamily: 'var(--font-playfair)' }}>
            Enterprise IT Systems <br/>
            &amp; Dedicated Support <br/>
            for Scaling Businesses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-24 font-light leading-relaxed" style={{ color: '#a1a1aa' }}>
            Reduce downtime, increase efficiency, and scale operations with<br/>
            HYNOX. Your trusted partner for high-ticket IT projects (₹80L–1Cr) and<br/>
            24/7 dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium h-16 px-10 text-base bg-white text-black hover:bg-white/90 rounded-none group transition-all duration-500">
              Book Free Enterprise IT Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <a className="text-sm uppercase tracking-widest font-bold hover:text-muted-foreground transition-colors py-4" href="#solutions" style={{ color: '#a1a1aa' }}>EXPLORE SOLUTIONS</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-on-scroll" style={{ opacity: 0 }}>
        <span className="text-[10px] uppercase tracking-[0.4em] rotate-90 origin-left ml-2">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        </div>
      </div>
    </section>
  );
}


