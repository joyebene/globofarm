"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="w-full py-16 md:py-32 bg-linear-to-r from-gloto-dark to-gloto-gold text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold leading-tight"
        >
          Join Us in Growing a Sustainable Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-100 text-sm md:text-base max-w-2xl mx-auto"
        >
          Partner with <span className="font-semibold">GLOTO FARMS</span> to support agricultural growth, empower local farmers, 
          and help build a secure and sustainable food system for generations.
        </motion.p>

        <Link href="/contact-us">
         <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-white text-green-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300"
        >
          Contact Us Today
        </motion.button>
        </Link>
       
      </div>
    </section>
  ); 
};

export default CTASection;
