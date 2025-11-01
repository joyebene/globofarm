
import CTA from '@/components/about/CTA'
import Hero from '@/components/about/Hero'
import Values from '@/components/about/Values'
import Vision from '@/components/about/Vision'
import WhoWeAre from '@/components/about/WhoWeAre'
import React from 'react'

const page = () => {
  return (
  <main className="w-full overflow-hidden">

      {/* HERO */}
       <Hero />

      {/* WHO WE ARE */}
       <WhoWeAre />

      {/* VISION + MISSION */}
      <Vision />

      {/* VALUES */}
      <Values />

      {/* CONTACT CTA */}
      <CTA />

    </main>
  )
}

export default page