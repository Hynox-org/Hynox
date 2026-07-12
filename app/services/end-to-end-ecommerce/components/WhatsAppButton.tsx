import React from 'react';

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-10 right-10 z-50 hidden lg:block animate-on-scroll" style={{ opacity: 0, transform: 'scale(0.8)' }}>
      <a target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" href="https://wa.me/918870524355">
        <button className="gap-2 whitespace-nowrap text-sm font-medium h-16 w-16 rounded-full bg-white text-black hover:bg-white/90 shadow-2xl p-0 flex items-center justify-center transition-all hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </a>
    </div>
  );
}
