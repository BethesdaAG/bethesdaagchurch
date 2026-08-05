'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const mx = (clientX / innerWidth - 0.5) * 14;
      const my = (clientY / innerHeight - 0.5) * 14;
      const shapes = heroRef.current.querySelectorAll<HTMLElement>('.floating-shape');
      shapes.forEach((el, i) => {
        const factor = (i + 1) * 0.35;
        el.style.transform = `translate(${mx * factor}px, ${my * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const languages = ['Kannada', 'Tamil', 'Malayalam', 'English', 'Telugu', 'Hindi'];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-church-ivory"
      aria-label="Hero — Bethesda AG Church">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30"
      style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2E7D4D18 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      {/* Floating decorative shapes — only cross, no dotted circle */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="floating-shape absolute top-32 left-8 opacity-10 animate-cross-float">
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="20" y="4" width="8" height="40" rx="2" fill="#2E7D4D" />
            <rect x="4" y="18" width="40" height="8" rx="2" fill="#2E7D4D" />
          </svg>
        </div>
        <div className="floating-shape absolute top-1/2 left-1/3 opacity-6 animate-float-slower" style={{ animationDelay: '2s' }}>
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="20" y="4" width="8" height="40" rx="2" fill="#C7A16A" />
            <rect x="4" y="18" width="40" height="8" rx="2" fill="#C7A16A" />
          </svg>
        </div>
      </div>

      {/* Main layout: two-column on desktop, stacked on mobile */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-24">

        {/* LEFT — Editorial content panel */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-0 lg:w-[52%] xl:w-[50%]">

          {/* Eyebrow */}
          <div
            className={`mb-8 inline-flex items-center gap-2.5 self-start transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}>
            <span className="w-8 h-px bg-church-gold" />
            <span className="text-church-bronze text-xs font-semibold tracking-[0.2em] uppercase">Bengaluru, India</span>
            <span className="w-8 h-px bg-church-gold" />
          </div>

          {/* Main headline */}
          <h1
            className={`font-display font-bold text-church-green leading-[1.05] mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', transitionDelay: '200ms' }}>
            Loving God.<br />
            Loving People.<br />
            <span className="text-gradient-gold">Changing Lives.</span>
          </h1>

          {/* Divider */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '300ms' }}>
            <div className="w-12 h-0.5 bg-church-gold" />
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="opacity-60">
              <rect x="20" y="4" width="8" height="40" rx="2" fill="#C7A16A" />
              <rect x="4" y="18" width="40" height="8" rx="2" fill="#C7A16A" />
            </svg>
            <div className="w-12 h-0.5 bg-church-gold" />
          </div>

          {/* Mission subhead */}
          <p
            className={`text-church-bronze text-base sm:text-lg leading-relaxed max-w-xl mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '350ms' }}>
            A church family where Christ's love is lived out, experienced, and shared — every single day.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '450ms' }}>
            <Link
              href="/contact"
              className="btn-primary-church animate-pulse-gold px-7 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 shadow-lg shadow-church-green/20">
              Plan Your Visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
            <Link
              href="/sermons"
              className="px-7 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 border-2 border-church-green text-church-green bg-transparent hover:bg-church-green hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Online
            </Link>
          </div>

          {/* Language chips */}
          <div
            className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '550ms' }}>
            <p className="text-church-bronze/60 text-xs tracking-widest uppercase mb-3 font-medium">Sunday Worship in</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) =>
              <span
                key={lang}
                className="px-3 py-1.5 rounded-full border border-church-gold/40 bg-white/60 text-church-bronze text-xs font-medium tracking-wide hover:border-church-green hover:text-church-green transition-colors duration-200">
                  {lang}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT — Box image with rounded borders */}
        <div className="relative lg:w-[48%] xl:w-[50%] flex items-center justify-center px-6 sm:px-10 lg:px-12 py-10 lg:py-16">
          <div
            className={`relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms', aspectRatio: '4/5' }}>
            <AppImage
              src="/assets/images/2b0e5efbaafdcfb9412d220c40b82082-1785901305129.png"
              alt="Worshippers with raised hands in warm atmospheric light during Sunday worship service at Bethesda AG Church"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw" />

            {/* Warm cinematic tint */}
            <div className="absolute inset-0 bg-church-green/10 mix-blend-multiply" />
            {/* Bottom gradient for card overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-church-green/60 via-transparent to-transparent" />

            {/* Floating glass card — service info */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md rounded-2xl p-5 border border-church-gold/30 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-church-green animate-pulse" />
                <span className="text-church-green text-xs font-bold tracking-widest uppercase">Every Sunday</span>
              </div>
              <p className="font-display text-church-green text-lg font-bold leading-tight mb-1">Join Us This Sunday</p>
              <p className="text-church-bronze text-xs leading-relaxed mb-3">Services at 7:30 AM, 9:30 AM, 11:30 AM & 6:30 PM</p>
              <div className="flex items-center gap-2 text-church-bronze/70 text-xs">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rajajinagar, Bengaluru</span>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-6 right-6 opacity-20 animate-cross-float">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect x="20" y="4" width="8" height="40" rx="2" fill="#C7A16A" />
                <rect x="4" y="18" width="40" height="8" rx="2" fill="#C7A16A" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>);

}