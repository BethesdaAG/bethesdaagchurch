'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';

const testimonials = [
  {
    quote: "Bethesda AG is a place of victory. Through the powerful prayers and uplifting worship, I have overcome many challenges in my life. God's presence is truly tangible here.",
    name: "Bindu K.T.",
    role: "Church Member",
    initials: "BK",
  },
  {
    quote: "Coming to Bethesda was the best decision of my life. I found not just a church, but a family that truly cares. The multilingual worship made me feel at home from my very first Sunday.",
    name: "Priya Nair",
    role: "Member",
    initials: "PN",
  },
  {
    quote: "The children\'s ministry has transformed our family. My kids love coming to church now — they come home singing worship songs and quoting scripture. We are so grateful.",
    name: "Rajesh & Sunita Kumar",
    role: "Family Ministry",
    initials: "RK",
  },
  {
    quote: "The prayer ministry changed everything for us. When we were going through a difficult season, the church came alongside us with genuine love and intercession. We were never alone.",
    name: "Ananya & Vikram Sharma",
    role: "Prayer Ministry",
    initials: "AS",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  const pause = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resume = () => { intervalRef.current = setInterval(next, 5000); };

  return (
    <section
      className="py-20 bg-church-ivory relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-church-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">Voices of Our Family</span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2 id="testimonials-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green">
            Stories of <span className="text-gradient-gold">Grace</span>
          </h2>
          <p className="text-church-bronze mt-3 text-sm">Hear what our members have to say about their journey with us.</p>
        </div>

        {/* Quote card */}
        <div className="glass-card-ivory rounded-3xl p-8 sm:p-12 border border-church-gold/25 shadow-xl relative">
          <div className="absolute top-6 left-8 text-church-gold/20 font-display text-8xl font-bold leading-none select-none" aria-hidden="true">"</div>

          <div
            className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          >
            <p className="font-display text-lg sm:text-2xl text-church-green font-light italic leading-relaxed mb-8 relative z-10">
              "{testimonials[current].quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-church-green/15 flex items-center justify-center text-church-green font-display font-bold text-sm border border-church-green/20">
                {testimonials[current].initials}
              </div>
              <div>
                <p className="text-church-green font-semibold text-sm">{testimonials[current].name}</p>
                <p className="text-church-bronze text-xs">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-8 justify-center" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-church-green' : 'w-2 h-2 bg-church-bronze/30 hover:bg-church-green/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}