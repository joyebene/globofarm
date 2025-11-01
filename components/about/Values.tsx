"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GiPlantRoots, GiFarmTractor, GiSprout, GiReceiveMoney } from "react-icons/gi";

const Values = () => {
  const values = [
    {
      icon: GiPlantRoots,
      title: "Integrity",
      description: "Operating with honesty and transparency in every transaction"
    },
    {
      icon: GiSprout,
      title: "Sustainability",
      description: "Protecting the earth for future generations through eco-friendly practices"
    },
    {
      icon: GiFarmTractor,
      title: "Innovation",
      description: "Leveraging modern agri-tech to maximize productivity and efficiency"
    },
    {
      icon: GiReceiveMoney,
      title: "Community Growth",
      description: "Empowering local farmers and driving rural economic development"
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-32 bg-fixed bg-cover bg-center bg-[url('/home/serviceSec-img.jpg')]">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-5 max-w-6xl mx-auto px-6 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h3>
          <p className="text-gray-100 mt-4 text-[15px] md:text-base max-w-2xl mx-auto">
            The principles that guide every decision we make and action we take
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white/15 border border-white/30 rounded-xl p-7 backdrop-blur-md shadow-xl hover:border-green-400 hover:bg-white/25 transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 group-hover:bg-green-700 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 mx-auto">
                <value.icon className="text-3xl md:text-4xl text-green-700 group-hover:text-white transition-colors duration-300" />
              </div>

              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-gray-200 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Values;
