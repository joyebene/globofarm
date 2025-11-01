"use client";

import { motion } from "framer-motion";
import Features from "./Features";
import Services from "./Services";
import Team from "./Team";

const ServicesSection = () => {


  return (
    <section className="w-full py-10  bg-gray-50">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 md:mb-20 overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/home/hero-img1.jpg')] bg-cover bg-center" />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-black to-gloto-dark opacity-86" />

          {/* Content */}
          <div className="relative px-6 py-16 md:py-24 text-white  max-w-6xl mx-auto">
            <div className="flex px-3 py-1 items-center gap-2 rounded-full border w-fit border-gloto-gold/80 bg-white/5 backdrop-blur-sm my-3">
              <div className="rounded-full w-2 h-2 bg-gloto-gold" />
              <span className="text-gloto-gold text-[12px] md:text-sm font-semibold">What We Do</span>
              <div className="rounded-full w-2 h-2 bg-gloto-gold" />
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our Services
            </h2>

            <p className="text-gray-200 text-sm md:text-base max-w-3xl leading-relaxed mt-4">
              From cultivation to processing, training to consulting. We deliver comprehensive
              agricultural solutions that empower communities and ensure sustainable growth.
            </p>
          </div>
        </motion.div>
      <div className="max-w-6xl mx-auto px-6">
        {/* Feature Services */}
        <Features />


        {/* Services Grid */}
        <Services />

        {/* Team/Farm Workers Section */}
        <Team />

      </div>
    </section>
  );
};

export default ServicesSection;