import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import EventTicker from '@/app/components/EventTicker';
import WelcomeStrip from '@/app/components/WelcomeStrip';
import AboutSection from '@/app/components/AboutSection';
import ServiceTimesSection from '@/app/components/ServiceTimesSection';
import MinistriesSection from '@/app/components/MinistriesSection';
import ValuesSection from '@/app/components/ValuesSection';
import SermonsSection from '@/app/components/SermonsSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import GiveSection from '@/app/components/GiveSection';
import ConnectJourney from '@/app/components/ConnectJourney';
import VisitUsSection from '@/app/components/VisitUsSection';
import FAQSection from '@/app/components/FAQSection';
import NewsletterSection from '@/app/components/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EventTicker />
        <WelcomeStrip />
        <AboutSection />
        <ServiceTimesSection />
        <MinistriesSection />
        <ValuesSection />
        <SermonsSection />
        <TestimonialsSection />
        <GiveSection />
        <ConnectJourney />
        <VisitUsSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}