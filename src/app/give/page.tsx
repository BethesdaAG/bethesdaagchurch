import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GiveHero from '@/app/give/components/GiveHero';
import GiveWays from '@/app/give/components/GiveWays';
import GiveImpact from '@/app/give/components/GiveImpact';
import GiveFAQ from '@/app/give/components/GiveFAQ';

export default function GivePage() {
  return (
    <>
      <Header />
      <main>
        <GiveHero />
        <GiveWays />
        <GiveImpact />
        <GiveFAQ />
      </main>
      <Footer />
    </>
  );
}