import React from 'react';

export function IdealFitSection() {
  return (
    <section className="py-40 border-y border-white/5">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <h2 className="text-4xl md:text-6xl font-serif mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>Is This Partnership <br/> For Your Business?</h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto" style={{ color: '#a1a1aa' }}>HYNOX provides high-ticket, long-term enterprise solutions. We focus on depth of service over volume of clients.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="p-12 bg-white/5 border border-white/10 animate-on-scroll" style={{ opacity: 0, transform: 'translateX(-20px)' }}>
            <h3 className="text-xl font-serif mb-10 tracking-widest uppercase" style={{ fontFamily: 'var(--font-playfair)' }}>Ideal Fit</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white mt-0.5 shrink-0">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-sm font-light leading-relaxed">Mid-size or Large Enterprise</span>
              </li>
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white mt-0.5 shrink-0">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-sm font-light leading-relaxed">Revenue scaling beyond ₹100Cr</span>
              </li>
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white mt-0.5 shrink-0">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-sm font-light leading-relaxed">Need 24/7 dedicated IT system support</span>
              </li>
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white mt-0.5 shrink-0">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-sm font-light leading-relaxed">Legacy infrastructure requiring modernization</span>
              </li>
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white mt-0.5 shrink-0">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-sm font-light leading-relaxed">Ready to invest in ₹80L+ legacy-grade systems</span>
              </li>
            </ul>
          </div>
          <div className="p-12 border border-white/5 opacity-40 hover:opacity-60 transition-opacity flex flex-col justify-center animate-on-scroll" style={{ opacity: 0, transform: 'translateX(20px)' }}>
            <h3 className="text-sm uppercase tracking-[0.4em] mb-8 text-muted-foreground" style={{ color: '#a1a1aa' }}>Not A Fit If...</h3>
            <p className="text-lg font-serif italic leading-relaxed text-muted-foreground mb-8" style={{ fontFamily: 'var(--font-playfair)', color: '#a1a1aa' }}>"You are looking for a one-time fix, a small-scale consumer app, or basic web design. We only accept 4 new enterprise partners per year to maintain our support standards."</p>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50" style={{ color: 'rgba(161, 161, 170, 0.5)' }}>— Lead IT Architect, HYNOX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
