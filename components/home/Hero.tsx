"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[url("/home/hero-img1.jpg")] bg-no-repeat bg-cover bg-center min-h-screen w-full relative'>
        <div className='absolute inset-0 bg-linear-to-r from-black to-gloto-dark from-60% opacity-83'>
                 <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                Nurturing the land, <span className="text-gloto-gold">Nourishing Lives</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base">
                Sustainable agriculture, food security, and value-driven agribusiness. We produce premium crops and empower communities with modern farming practices.
              </p>
              <div className="mt-6 flex gap-4">
                <Link href="/about-us"><span className="inline-block px-6 py-3 bg-gloto-gold text-gloto-dark font-semibold rounded-lg shadow">Get to Know us</span></Link>
                <Link href="/contact-us"><span className="inline-block px-6 py-3 border border-white rounded-lg">Contact Us</span></Link>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hero;