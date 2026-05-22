import CTASection from '@/components/home/CTA';
import FAQSection from '@/components/home/FAQs';
import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSect';
import ServicesSection from '@/components/home/ServiceSection';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Home",
  description:
    "Glotofarms is a leading agricultural company in Nigeria focused on sustainable farming, quality agricultural products, and innovative farming solutions.",
  keywords: [
    "best farm in Nigeria",
    "top farm in Nigeria",
    "Glotofarms",
    "Gloto Farms",
    "Agriculture in Nigeria",
    "Sustainable farming",
    "Farm products",
    "Agricultural services",
  ],
  openGraph: {
    title: "Gloto Farms - Sustainable Agriculture in Nigeria",
    description:
      "Explore sustainable agriculture and quality farming solutions with Gloto Farms.",
    url: "https://glotofarms.com",
    siteName: "Gloto Farms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glotofarms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gloto Farms",
            url: "https://glotofarms.com",
            logo: "https://glotofarms.com/logo.png",
          }),
        }}
      />

      <div>
        <Hero />
        <IntroSection />
        <ServicesSection />
        <FAQSection />
        <CTASection />
      </div>
    </>

  )
}


export default page;