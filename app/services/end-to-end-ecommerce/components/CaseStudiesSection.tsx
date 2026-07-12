import React from 'react';

export function CaseStudiesSection() {
  return (
    <section id="proof" className="py-24 md:py-40 bg-white text-black relative">
      <div className="container px-6 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
        <div className="animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <span className="text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6 block opacity-60">Case Studies</span>
          <h2 className="text-4xl md:text-8xl font-serif leading-[0.9] -ml-1" style={{ fontFamily: 'var(--font-playfair)' }}>Execution Over <br className="hidden md:block"/> Expectations</h2>
        </div>
        <p className="max-w-xs text-sm font-bold uppercase tracking-widest leading-relaxed border-l-4 border-black pl-6">Real systems, measurable uptime, and verified enterprise scaling.</p>
      </div>
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 container mx-auto">
        <div className="p-8 md:p-12 border border-black/10 bg-white flex flex-col justify-between aspect-[4/5] sm:aspect-square md:aspect-[4/5] group hover:bg-black hover:text-white transition-all duration-700">
          <div>
            <span className="text-[10px] uppercase tracking-widest mb-6 md:mb-8 block opacity-50 group-hover:opacity-80">System Integration</span>
            <h3 className="text-4xl font-serif leading-tight group-hover:translate-y-[-10px] transition-transform duration-700" style={{ fontFamily: 'var(--font-playfair)' }}>Global Logistics Hub</h3>
          </div>
          <div className="border-t border-black/10 pt-10 group-hover:border-white/20">
            <p className="text-2xl font-serif mb-2 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>90% Reduction in manual sync errors</p>
            <a className="text-xs uppercase tracking-widest font-bold group-hover:underline transition-all" href="#">View Full Architecture</a>
          </div>
        </div>
        <div className="p-8 md:p-12 border border-black/10 bg-white flex flex-col justify-between aspect-[4/5] sm:aspect-square md:aspect-[4/5] group hover:bg-black hover:text-white transition-all duration-700">
          <div>
            <span className="text-[10px] uppercase tracking-widest mb-6 md:mb-8 block opacity-50 group-hover:opacity-80">Security &amp; Cloud</span>
            <h3 className="text-4xl font-serif leading-tight group-hover:translate-y-[-10px] transition-transform duration-700" style={{ fontFamily: 'var(--font-playfair)' }}>Prime FinTech</h3>
          </div>
          <div className="border-t border-black/10 pt-10 group-hover:border-white/20">
            <p className="text-2xl font-serif mb-2 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Zero security breaches in 4 years</p>
            <a className="text-xs uppercase tracking-widest font-bold group-hover:underline transition-all" href="#">View Full Architecture</a>
          </div>
        </div>
        <div className="p-8 md:p-12 border border-black/10 bg-white flex flex-col justify-between aspect-[4/5] sm:aspect-square md:aspect-[4/5] group hover:bg-black hover:text-white transition-all duration-700">
          <div>
            <span className="text-[10px] uppercase tracking-widest mb-6 md:mb-8 block opacity-50 group-hover:opacity-80">Infrastructure</span>
            <h3 className="text-4xl font-serif leading-tight group-hover:translate-y-[-10px] transition-transform duration-700" style={{ fontFamily: 'var(--font-playfair)' }}>Legacy Manufacturing</h3>
          </div>
          <div className="border-t border-black/10 pt-10 group-hover:border-white/20">
            <p className="text-2xl font-serif mb-2 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Saved ₹1.2Cr in annual hardware costs</p>
            <a className="text-xs uppercase tracking-widest font-bold group-hover:underline transition-all" href="#">View Full Architecture</a>
          </div>
        </div>
      </div>
    </section>
  );
}
