'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const ministries = [
{
  name: 'Sunday Service',
  desc: 'Join us every Sunday for a time of worship, community, and an inspiring message. All are welcome.',
  time: 'Sundays at 7:30 AM, 9:30 AM, 11:30 AM & 6:30 PM',
  image: "/assets/images/2b0e5efbaafdcfb9412d220c40b82082-1785901155852.png",
  imageAlt: 'Church congregation singing during a Sunday service with raised hands in warm light',
  icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
},
{
  name: 'Youth Meets',
  desc: 'A dynamic and fun environment for teenagers to grow in their faith and build lasting friendships.',
  time: 'Saturdays at 6:00 PM',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_128f22dd1-1776447270395.png",
  imageAlt: 'Teenagers laughing and talking in a youth group meeting with warm natural light',
  icon: 'M13 10V3L4 14h7v7l9-11h-7z'
},
{
  name: "Children\'s School",
  desc: "Engaging and age-appropriate lessons for kids to learn about God\'s love in a safe and fun setting.",
  time: 'During Sunday Service',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13cb05976-1772099502538.png",
  imageAlt: 'Children participating in a fun activity during Sunday school with colorful materials',
  icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
}];


export default function MinistriesSection() {
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
      className="py-20 bg-church-ivory relative overflow-hidden"
      aria-labelledby="ministries-heading">
      
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-church-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">Get Involved</span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2 id="ministries-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green">
            Programs & <span className="text-gradient-gold">Ministries</span>
          </h2>
          <p className="text-church-bronze mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Find your place to connect, grow, and serve within our church family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {ministries?.map((ministry, i) =>
          <div
            key={ministry?.name}
            className="animate-on-scroll glass-card-ivory rounded-2xl overflow-hidden border border-church-gold/20 card-hover-lift group shadow-sm"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <div className="relative aspect-video overflow-hidden">
                <AppImage
                src={ministry?.image}
                alt={ministry?.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw" />
              
                <div className="absolute inset-0 bg-church-green/20" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-church-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-church-green" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={ministry?.icon} />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-church-green">{ministry?.name}</h3>
                </div>
                <p className="text-church-gold text-xs font-semibold mb-2">{ministry?.time}</p>
                <p className="text-church-bronze text-sm leading-relaxed mb-4">{ministry?.desc}</p>
                <Link
                href="/ministries"
                className="inline-flex items-center gap-1 text-church-green hover:text-church-gold text-xs font-semibold transition-colors duration-200">
                
                  Learn More →
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="text-center animate-on-scroll">
          <Link
            href="/ministries"
            className="btn-primary-church inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base">
            
            Explore All Ministries →
          </Link>
        </div>
      </div>
    </section>);

}