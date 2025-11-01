"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";


const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 bg-green-100 text-gloto-dark rounded-full text-sm font-semibold mb-4">
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Building Africa&apos;s Sustainable Food Future
            </h2>

            <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
              GLOTO FARMS is a forward-thinking agricultural enterprise dedicated to revolutionizing food systems across Africa. We bridge traditional farming wisdom with cutting-edge agri-tech to deliver exceptional yields while nurturing the land.
            </p>

            <p className="mt-4 text-gray-600 text-sm md:text-base  leading-relaxed">
              Our holistic approach encompasses responsible farming practices, production optimization, comprehensive farmer training programs, and catalyzing rural economic development. Together, we&apos;re not just growing crops—we&apos;re cultivating thriving communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-lg shadow">
                <div className="w-2 h-2 bg-gloto-gold rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm md:text-base">Certified Organic</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-lg shadow">
                <div className="w-2 h-2 bg-gloto-gold rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm md:text-base ">Climate-Smart</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-lg shadow">
                <div className="w-2 h-2 bg-gloto-gold rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm md:text-base ">Community Focused</span>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl shadow-gloto-gold hover:shadow-md">
                  <Image
                    src="/about/img (1).jpg"
                    alt="Farm"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl shadow-gloto-mid hover:shadow-md">
                  <Image
                    src="/about/img (7).jpg"
                    alt="Farm"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl shadow-gloto-mid hover:shadow-md">
                  <Image
                    src="/about/img (5).jpg"
                    alt="Farm"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl shadow-gloto-gold hover:shadow-md">
                  <Image
                    src="/about/img (8).jpg"
                    alt="Farm"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-4 border-green-100"
            >
              <div className="text-4xl font-bold text-green-700">10+</div>
              <div className="text-sm text-gray-600 font-medium mt-1">Years Growing</div>
            </motion.div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}

export default WhoWeAre