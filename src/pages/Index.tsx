import React from 'react';
import { Hero } from '../components/Hero';
import { ScrollingBanner } from '../components/ScrollingBanner';
import { ExperienceSection } from '../components/ExperienceSection';
import { RealOperations } from '../components/RealOperations';
import { ServicesSection } from '../components/ServicesSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

const Index = () => {
  return (
    <main className="w-full relative overflow-x-hidden bg-black">
      <Hero />
      <ScrollingBanner />
      <ExperienceSection />
      <RealOperations />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default Index;
