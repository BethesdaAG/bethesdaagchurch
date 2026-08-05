'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const whyReasons = [
  'Experience God\'s transformative presence in a vibrant atmosphere of worship.',
  'Receive relevant, life-giving biblical teaching that applies to your everyday life.',
  'Find your place in a warm and welcoming community that feels like family.',
  'Receive prayer support and encouragement through life\'s challenges.',
  'Grow in your faith through intentional discipleship and mentorship.',
  'Engage in programs and ministries designed for every age and stage of life.',
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef?.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-church-ivory relative overflow-hidden"
      aria-labelledby="about-heading">
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Why Attend Bethesda AG? */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">Why Us</span>
            <div className="section-divider-gold w-16 mx-auto mb-4" />
            <h2 id="about-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green leading-tight">
              Why Attend <span className="text-gradient-gold">Bethesda AG?</span>
            </h2>
            <p className="text-church-bronze mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              At Bethesda AG, we believe church is more than a building — it's a family where lives are changed. Here, you'll discover a place to belong, grow in your faith, and make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {whyReasons?.map((reason, i) => (
              <div
                key={i}
                className="animate-on-scroll glass-card-ivory rounded-2xl p-5 border border-church-gold/20 card-hover-lift shadow-sm flex items-start gap-4"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-7 h-7 rounded-full bg-church-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-church-bronze text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/contact" className="btn-primary-church inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base">
              Join Us This Sunday!
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="animate-on-scroll mb-12">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">Our Heart</span>
            <div className="section-divider-gold w-16 mx-auto mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-church-green">
              Our Mission & <span className="text-gradient-gold">Vision</span>
            </h2>
            <p className="text-church-bronze mt-4 max-w-xl mx-auto text-sm sm:text-base">
              The heart behind everything we do at Bethesda AG Church.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Mission */}
            <div className="glass-card-ivory rounded-3xl p-8 border border-church-gold/25 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-church-green/5 rounded-full -translate-y-8 translate-x-8 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-church-green flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-church-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-church-green mb-3">Our Mission</h3>
                <p className="text-church-bronze/70 text-xs italic mb-3">Inspired by John 13:34 — "A new command I give you: Love one another. As I have loved you, so you must love one another."</p>
                <p className="text-church-bronze text-sm leading-relaxed mb-5">
                  Our mission is to be a community defined by genuine, selfless love that reflects God's heart for humanity.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Loving Genuinely', 'Serving Selflessly', 'Reflecting Christ']?.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-church-green/10 text-church-green text-xs font-semibold border border-church-green/20">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="glass-card-ivory rounded-3xl p-8 border border-church-gold/25 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-church-gold/5 rounded-full -translate-y-8 translate-x-8 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-church-gold flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-church-green mb-3">Our Vision</h3>
                <p className="text-church-bronze text-sm leading-relaxed mb-5">
                  To be a transformative community that raises up passionate disciples of Jesus. We aim to instill Kingdom values in every believer, empowering them to impact their homes, workplaces, and the city of Bangalore for Christ.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Raising Disciples', 'Instilling Kingdom Values', 'Impacting Our World']?.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-church-gold/10 text-church-bronze text-xs font-semibold border border-church-gold/30">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="animate-on-scroll glass-card-dark rounded-3xl p-8 sm:p-10 bg-church-green text-white relative overflow-hidden">
          <div className="absolute inset-0 cross-pattern opacity-5 pointer-events-none" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="font-display text-church-gold text-sm uppercase tracking-widest mb-3">Our Promise to You</p>
            <p className="font-display text-2xl sm:text-3xl font-medium text-white leading-relaxed italic">
              "Every person who walks through our doors will encounter God's Presence, Genuine Love, Biblical Teaching, Authentic Community, and Practical Hope."
            </p>
            <div className="mt-6">
              <Link href="/about" className="inline-flex items-center gap-2 text-church-gold hover:text-white text-sm font-semibold transition-colors duration-200">
                Worship with Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
