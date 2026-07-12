import React from 'react';

export function ContactSection() {
  return (
    <section id="contact" className="py-40 bg-white text-black relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-on-scroll" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <span className="text-[10px] uppercase tracking-[0.8em] font-bold mb-8 block opacity-60">Consultation Phase</span>
            <h2 className="text-5xl md:text-9xl font-serif mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>Ready To Build <br/>Your Legacy?</h2>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-16 opacity-90 font-light leading-relaxed">Book a confidential enterprise consultation to discuss your infrastructure bottlenecks and scaling roadmap.</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all h-20 px-14 text-lg bg-black text-white hover:bg-black/90 rounded-none group font-bold tracking-widest uppercase">
                Schedule Consultation
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <a target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest group cursor-pointer border-b border-black/20 pb-2 hover:border-black transition-all" href="https://wa.me/918870524355">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-black/5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 border-t border-black/5 pointer-events-none"></div>
    </section>
  );
}
