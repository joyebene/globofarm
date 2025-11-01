import CTASection from '@/components/home/CTA';
import FAQSection from '@/components/home/FAQs';
import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSect';
import ServicesSection from '@/components/home/ServiceSection';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default page;