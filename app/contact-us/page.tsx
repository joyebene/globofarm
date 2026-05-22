import ContactPage from '@/components/contact/ContactPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gloto Farms for agricultural services, farming solutions, partnerships, and inquiries in Nigeria.",
  keywords: [
    "best farm in Nigeria",
    "top farm in Nigeria",
    "Glotofarms",
    "Contact Gloto Farms",
    "Agricultural services Nigeria",
    "Farm contact",
    "Farming solutions",
    "Glotofarms support",
  ],
  openGraph: {
    title: "Contact Gloto Farms",
    description:
      "Reach out to Gloto Farms for inquiries, partnerships, and agricultural services.",
    url: "https://glotofarms.com/contact-us",
    siteName: "Gloto Farms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Glotofarms",
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
            "@type": "ContactPage",
            name: "Contact Glotofarms",
            url: "https://glotofarms.com/contact-us",
            description:
              "Contact Gloto Farms for agricultural services and inquiries.",
          }),
        }}
      />

      <div>
        <ContactPage />
      </div>
    </>
  );
};

export default page;