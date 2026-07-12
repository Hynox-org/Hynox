import React from 'react';

export function WhyHynoxSection() {
  return (
    <section id="why-hynox" className="py-24 md:py-40 bg-white/[0.02]">
      <div className="container px-6">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-5 md:sticky md:top-32 animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <h2 className="text-3xl md:text-6xl font-serif mb-6 md:mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>Why Enterprises <br className="hidden md:block"/> Trust HYNOX</h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-12" style={{ color: '#a1a1aa' }}>In the ₹80L+ project tier, reliability isn't a feature—it's the baseline. We position HYNOX as the guardian of your enterprise's digital continuity.</p>
            <div className="space-y-12">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground" style={{ color: '#a1a1aa' }}>Uptime Commitment</span>
                <span className="text-3xl font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>99.99%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground" style={{ color: '#a1a1aa' }}>Response SLA</span>
                <span className="text-3xl font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>&lt; 15 Min</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground" style={{ color: '#a1a1aa' }}>Legacy Experience</span>
                <span className="text-3xl font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>15+ Yrs</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid gap-6">
            <div className="p-12 border border-white/10 bg-background hover:border-white/30 transition-all group animate-on-scroll" style={{ opacity: 0, transform: 'translateX(20px)' }}>
              <div className="flex items-start gap-8">
                <span className="text-4xl font-serif text-white/5 group-hover:text-white/20 transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>01</span>
                <div>
                  <h3 className="text-2xl font-serif mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Large-Scale Expertise</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed" style={{ color: '#a1a1aa' }}>Proven track record of managing systems for companies with massive operational footprints.</p>
                </div>
              </div>
            </div>
            <div className="p-12 border border-white/10 bg-background hover:border-white/30 transition-all group animate-on-scroll" style={{ opacity: 0, transform: 'translateX(20px)' }}>
              <div className="flex items-start gap-8">
                <span className="text-4xl font-serif text-white/5 group-hover:text-white/20 transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>02</span>
                <div>
                  <h3 className="text-2xl font-serif mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Dedicated Partnership</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed" style={{ color: '#a1a1aa' }}>We don't operate on a ticket-system. You have a direct line to our lead infrastructure architects.</p>
                </div>
              </div>
            </div>
            <div className="p-12 border border-white/10 bg-background hover:border-white/30 transition-all group animate-on-scroll" style={{ opacity: 0, transform: 'translateX(20px)' }}>
              <div className="flex items-start gap-8">
                <span className="text-4xl font-serif text-white/5 group-hover:text-white/20 transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>03</span>
                <div>
                  <h3 className="text-2xl font-serif mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Future-Proof Architecture</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed" style={{ color: '#a1a1aa' }}>Every line of code and server configuration is built to handle 10x growth without refactoring.</p>
                </div>
              </div>
            </div>
            <div className="p-12 border border-white/10 bg-background hover:border-white/30 transition-all group animate-on-scroll" style={{ opacity: 0, transform: 'translateX(20px)' }}>
              <div className="flex items-start gap-8">
                <span className="text-4xl font-serif text-white/5 group-hover:text-white/20 transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>04</span>
                <div>
                  <h3 className="text-2xl font-serif mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Security-First Mentality</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed" style={{ color: '#a1a1aa' }}>Enterprise-grade encryption and zero-trust protocols integrated into every layer of our solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
