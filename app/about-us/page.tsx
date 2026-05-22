import CTA from '@/components/about/CTA'
import Hero from '@/components/about/Hero'
import OurProducts from '@/components/about/OurProducts'
import Values from '@/components/about/Values'
import Vision from '@/components/about/Vision'
import WhoWeAre from '@/components/about/WhoWeAre'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Glotofarms, our mission, vision, agricultural values, and commitment to sustainable farming in Nigeria.",
  keywords: [
    "About Glotofarms",
    "Agriculture company Nigeria",
    "Sustainable farming",
    "Farm mission and vision",
    "Agricultural products Nigeria",
  ],
  openGraph: {
    title: "About Glotofarms",
    description:
      "Discover Glotofarms' mission, vision, and commitment to sustainable agriculture in Nigeria.",
    url: "https://glotofarms.com/about-us",
    siteName: "Glotofarms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glotofarms About Us",
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
            "@type": "AboutPage",
            name: "About Glotofarms",
            url: "https://glotofarms.com/about-us",
            description:
              "Learn more about Glotofarms and our sustainable agricultural practices in Nigeria.",
          }),
        }}
      />

      <main className="w-full overflow-hidden">
        {/* HERO */}
        <Hero />

        {/* WHO WE ARE */}
        <WhoWeAre />

        {/* OUR PRODUCTS */}
        <OurProducts />

        {/* VISION + MISSION */}
        <Vision />

        {/* VALUES */}
        <Values />

        {/* CONTACT CTA */}
        <CTA />
      </main>
    </>
  )
}

export default page