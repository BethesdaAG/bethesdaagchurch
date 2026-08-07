'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const recentSermons = [
{
  title: 'Standing Unshaken',
  speaker: 'Rev Binu J Mathew',
  date: 'Latest Sermon',
  thumbnail: "https://pub-8c1e4840428648e1a080e3046ee0d095.r2.dev/Bethesda%20AG/BAG%202.jpg",
  thumbnailAlt: 'Standing Unshaken sermon by Rev Binu J Mathew - YouTube thumbnail',
  url: 'https://www.youtube.com/live/rd-rtnuqQJY?si=n8PtXYntgr6ZDhbp'
},
{
  title: 'Faith Under Fire',
  speaker: 'Rev Binu J Mathew',
  date: 'Recent Sermon',
  thumbnail: "https://pub-8c1e4840428648e1a080e3046ee0d095.r2.dev/Bethesda%20AG/BAG%203.jpg",
  thumbnailAlt: 'Faith Under Fire sermon by Rev Binu J Mathew - YouTube thumbnail',
  url: 'https://www.youtube.com/watch?v=2r55lHWPfzQ'
},
{
  title: 'Overcome The Trials Against Our Faith',
  speaker: 'Rev Binu J Mathew',
  date: 'Recent Sermon',
  thumbnail: "https://pub-8c1e4840428648e1a080e3046ee0d095.r2.dev/Bethesda%20AG/BAG%201.jpg",
  thumbnailAlt: 'Overcome The Trials Against Our Faith sermon by Rev Binu J Mathew - YouTube thumbnail',
  url: 'https://www.youtube.com/watch?v=cY9f82dXL7Q'
}];



export default function SermonsSection() {
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
      aria-labelledby="sermons-heading">
      
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">The Word</span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2 id="sermons-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green">
            Inspiring Messages for <span className="text-gradient-gold">Every Season</span>
          </h2>
          <p className="text-church-bronze mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Find encouragement and wisdom through our latest sermons.
          </p>
        </div>

        {/* Recent sermons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {recentSermons?.map((sermon, i) =>
          <a
            key={i}
            href={sermon?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll glass-card-ivory rounded-2xl overflow-hidden border border-church-gold/20 card-hover-lift group shadow-sm block"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <div className="relative aspect-video overflow-hidden">
                <AppImage
                src={sermon?.thumbnail}
                alt={sermon?.thumbnailAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw" />
              
                <div className="absolute inset-0 bg-church-green/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-5 h-5 text-church-green ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-church-bronze/60 text-xs mb-1">{sermon?.date}</p>
                <h4 className="font-display text-base font-semibold text-church-green mb-1 leading-snug">{sermon?.title}</h4>
                <p className="text-church-bronze text-xs">by {sermon?.speaker}</p>
              </div>
            </a>
          )}
        </div>

        <div className="text-center mb-10 animate-on-scroll">
          <Link
            href="/sermons"
            className="btn-primary-church inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base">
            Watch More Sermons →
          </Link>
        </div>

        {/* Daily Devotions callout */}
        <div className="animate-on-scroll glass-card-ivory rounded-2xl p-6 sm:p-8 border border-church-gold/25 shadow-md text-center relative overflow-hidden">
          <div className="absolute inset-0 wave-texture opacity-20 rounded-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-church-green/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-church-green" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-church-green mb-2">Daily Devotions & Online Bible Study</h3>
            <p className="text-church-bronze text-sm mb-6 max-w-xl mx-auto">
              Start each day in God's Word. Join our daily devotional community and weekly online Bible study sessions — Tue to Thu, 7:30 PM on Zoom.
            </p>
            <Link
              href="/sermons"
              className="btn-primary-church inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
              Join Daily Devotions →
            </Link>
          </div>
        </div>
      </div>
    </section>);

}