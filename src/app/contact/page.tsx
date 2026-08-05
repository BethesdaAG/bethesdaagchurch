import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactDetails from '@/app/contact/components/ContactDetails';
import ContactForm from '@/app/contact/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}