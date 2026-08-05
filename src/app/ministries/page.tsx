import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MinistriesHero from '@/app/ministries/components/MinistriesHero';
import MinistriesGrid from '@/app/ministries/components/MinistriesGrid';
import MinistriesCTA from '@/app/ministries/components/MinistriesCTA';

export default function MinistriesPage() {
  return (
    <>
      <Header />
      <main>
        <MinistriesHero />
        <MinistriesGrid />
        <MinistriesCTA />
      </main>
      <Footer />
    </>
  );
}