"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r w-full py-16 md:py-32 from-gloto-dark to-gloto-gold"></div>
      <div className="relative z-5 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Together?
          </h3>
          <p className="text-green-100 text-sm md:text-base max-w-2xl mx-auto mb-10">
            Join us in cultivating a sustainable and prosperous agricultural future for Africa and beyond.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/contact-us">
              <motion.button
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-5 md:px-8 py-3 bg-white text-green-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300"
              >
                Partner With Us
              </motion.button>
            </Link>

            <Link href="/services">
              <motion.button
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-5 md:px-8 py-3 bg-gloto-dark text-white font-semibold rounded-lg shadow-md hover:bg-gloto-mid transition-all duration-300"
              >
                Learn More
              </motion.button>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA