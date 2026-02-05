import HeroSection from '@/components/homepage/HeroSection';
import ServicesBar from '@/components/homepage/ServicesBar';
import StatsSection from '@/components/homepage/StatsSection';
import WhatWeOfferSection from '@/components/homepage/WhatWeOfferSection';
import WhyChooseUsSection from '@/components/homepage/WhyChooseUsSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';

export default function Homepage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesBar />
      <StatsSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </main>
  );
}
