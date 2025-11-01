"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Leaf } from "lucide-react";

const Hero = () => {
    const stats = [
        { number: "50+", label: "Hectares Cultivated", icon: Leaf },
        { number: "100+", label: "Farmers Empowered", icon: Users },
        { number: "10+", label: "Years Experience", icon: Award },
        { number: "50%", label: "Yield Improvement", icon: TrendingUp },
      ];

  return (
     <section className="relative w-full h-[70vh] bg-linear-to-r from-black to-gloto-dark from-60% ">
            <div className="absolute inset-0 bg-[url('/home/hero-img1.jpg')] opacity-28" />
            
            <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center px-6 pt-15">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              > 
              <div className='flex px-2 py-1 items-center gap-2 rounded-full border w-fit border-gloto-gold my-3'>
                <div className='rounded-full w-2 h-2 bg-gloto-gold' />
                <span className='text-white text-[12px] md:text-sm'>About us</span>
                <div className='rounded-full w-2 h-2 bg-gloto-gold'/>
              </div>
                <h1 className="text-white font-bold leading-tight max-w-3xl text-3xl md:text-5xl">
                  We Grow With Purpose
                </h1>
                <p className="text-green-100 text-[15px] md:text-base mt-4 max-w-2xl">
                  Farming with the future in mind, cultivating prosperity for all
                </p>
              </motion.div>
    
              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-16"
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                      <stat.icon className="w-5 h-5 text-green-300" />
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    </div>
                    <div className="text-green-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
  )
}

export default Hero