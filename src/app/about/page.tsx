import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import ChurchStory from '@/app/about/components/ChurchStory';
import LeadershipSection from '@/app/about/components/LeadershipSection';
import BeliefSection from '@/app/about/components/BeliefSection';
import AboutValues from '@/app/about/components/AboutValues';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <ChurchStory />
        <LeadershipSection />
        <BeliefSection />
        <AboutValues />
      </main>
      <Footer />
    </>
  );
}