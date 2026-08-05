'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function GiveSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-church-sand relative overflow-hidden"
      aria-labelledby="give-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-on-scroll rounded-3xl bg-white border border-church-gold/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
          {/* Subtle gold glow at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-church-gold/10 blur-3xl pointer-events-none" />
          {/* Wave texture */}
          <div className="absolute inset-0 wave-texture opacity-20 pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">Generosity</span>
            <div className="section-divider-gold w-16 mx-auto mb-4" />
            <h2 id="give-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green mb-4">
              Partner With <span className="text-gradient-gold">God's Work</span>
            </h2>
            <p className="text-church-bronze max-w-xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
              Your generous giving enables us to worship, serve, and reach our community and beyond. Every gift is an act of faith and partnership in God's kingdom.
            </p>

            {/* Give button with pulse */}
            <Link
              href="/give"
              className="btn-primary-church animate-pulse-gold inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              Give Online
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12"/>
              </svg>
            </Link>

            <p className="text-church-bronze/50 text-xs mt-4">Secure · Trusted · Tax-deductible receipts provided</p>

            {/* Ways to give */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {[
                { label: 'Online', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', desc: 'Give securely online anytime' },
                { label: 'In Person', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', desc: 'During any Sunday service' },
                { label: 'Bank Transfer', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', desc: '[Bank details — confirm with church]' },
              ]?.map((way) => (
                <div key={way?.label} className="glass-card-ivory rounded-xl p-4 border border-church-gold/20 text-left">
                  <svg className="w-5 h-5 text-church-green mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={way?.icon} />
                  </svg>
                  <p className="text-church-green font-semibold text-sm mb-1">{way?.label}</p>
                  <p className="text-church-bronze text-xs">{way?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}