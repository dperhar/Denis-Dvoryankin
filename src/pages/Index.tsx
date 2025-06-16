import React from 'react';
import { Hero } from '../components/Hero';
import { ScrollingBanner } from '../components/ScrollingBanner';
import { ExperienceSection } from '../components/ExperienceSection';
import { ClientTestimonials } from '../components/ClientTestimonials';
import { ServicesSection } from '../components/ServicesSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

const Index: React.FC = () => {
  return (
    <main className="w-full relative overflow-x-hidden bg-white">
      <div className="bg-[#57524F]">
        <Hero />
        <ScrollingBanner />
        <ExperienceSection />
        <ClientTestimonials />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
