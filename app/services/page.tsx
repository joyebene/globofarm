import ServicesSection from '@/components/services/ServicePage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Gloto Farms agricultural services including sustainable farming, farm management, agricultural consulting, and quality farm products in Nigeria.",
  keywords: [
    "best farm in Nigeria",
    "top farm in Nigeria",
    "Glotofarms",
    "Gloto Farms services",
    "Agricultural services Nigeria",
    "Sustainable farming",
    "Farm management",
    "Agricultural consulting",
    "Farm products",
  ],
  openGraph: {
    title: "Gloto Farms Services",
    description:
      "Discover professional agricultural and farming services provided by Gloto Farms in Nigeria.",
    url: "https://glotofarms.com/services",
    siteName: "Gloto Farms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gloto Farms Services",
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
            "@type": "Service",
            serviceType: "Agricultural Services",
            provider: {
              "@type": "Organization",
              name: "Glotofarms",
              url: "https://glotofarms.com",
            },
            areaServed: {
              "@type": "Country",
              name: "Nigeria",
            },
          }),
        }}
      />

      <div>
        <ServicesSection />
      </div>
    </>
  );
};

export default page;