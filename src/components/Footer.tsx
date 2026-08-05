import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function Footer() {
  return (
    <footer className="bg-church-sand border-t border-church-gold/25 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 wave-texture pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Our Promise Band */}
        <div className="glass-card-ivory rounded-2xl p-6 sm:p-8 mb-12 text-center border border-church-gold/25 shadow-sm">
          <p className="font-display text-church-gold text-lg sm:text-xl italic mb-2">Our Promise</p>
          <p className="text-church-bronze text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Every person who walks through our doors will encounter God's Presence, Genuine Love, Biblical Teaching, Authentic Community, and Practical Hope.
          </p>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <AppImage
                src="/assets/images/bethesdaag-1785900886399.png"
                alt="Bethesda AG Church"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </div>
            <p className="text-church-bronze text-sm leading-relaxed mb-4">
              Loving God. Loving People. Changing Lives.<br />
              <span className="text-xs text-church-bronze/60">A place of faith, hope, and community.</span>
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://facebook.com', label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { href: 'https://instagram.com', label: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4A5.8 5.8 0 0116.2 22H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2z' },
                { href: 'https://youtube.com', label: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
              ]?.map((social) => (
                <a
                  key={social?.href}
                  href={social?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social?.label}
                  className="w-9 h-9 rounded-full bg-church-ivory border border-church-gold/20 flex items-center justify-center text-church-bronze hover:text-church-gold hover:border-church-gold/50 hover:bg-white transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={social?.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-church-green font-semibold text-sm tracking-wider uppercase mb-4">Ministries</h4>
            <ul className="space-y-2">
              {[
                { label: 'Sunday Service', href: '/ministries' },
                { label: 'Youth Meets', href: '/ministries' },
                { label: "Children's School", href: '/ministries' },
                { label: "Women's Fellowship", href: '/ministries' },
                { label: 'Life Groups', href: '/ministries' },
                { label: 'Prayer Ministry', href: '/ministries' },
              ]?.map((link) => (
                <li key={link?.label}>
                  <Link href={link?.href} className="text-church-bronze hover:text-church-green text-sm transition-colors duration-200">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-church-green font-semibold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Events', href: '#events' },
                { label: 'Sermons', href: '/sermons' },
                { label: 'Give Online', href: '/give' },
                { label: 'Contact', href: '/contact' },
              ]?.map((link) => (
                <li key={link?.href}>
                  <Link href={link?.href} className="text-church-bronze hover:text-church-green text-sm transition-colors duration-200">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-church-green font-semibold text-sm tracking-wider uppercase mb-4">Contact Us</h4>
            <address className="not-italic text-church-bronze text-sm space-y-3">
              <p className="leading-relaxed">36-B, 42nd Cross, 8th Main Rd, 4th Block, Rajajinagar, Bengaluru, Karnataka 560010</p>
              <a href="tel:+919845009824" className="block hover:text-church-green transition-colors">+91 98450 09824</a>
              <a href="mailto:contact@bethesdaag.org" className="block hover:text-church-green transition-colors">contact@bethesdaag.org</a>
            </address>
          </div>
        </div>

        {/* Connect journey strip */}
        <div className="border-t border-church-gold/20 pt-8 mb-6">
          <p className="text-center text-church-bronze/50 text-xs tracking-widest uppercase mb-3">Connect. Grow. Serve. Share.</p>
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            {['SEE', 'BELONG', 'GROW', 'SERVE', 'SHARE']?.map((step, i) => (
              <React.Fragment key={step}>
                <span className="text-church-green font-semibold text-xs sm:text-sm tracking-wider">{step}</span>
                {i < 4 && <span className="text-church-bronze/40 text-sm">›</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-church-gold/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-church-bronze/50 text-xs">
          <p>© 2026 Bethesda AG Church. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-church-green transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-church-green transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}