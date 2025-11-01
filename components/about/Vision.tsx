"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Leaf, TrendingUp } from 'lucide-react';

const Vision = () => {
    return (
        <section className="py-16 md:py-32 bg-linear-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our North Star</h3>
                    <p className="text-gray-600 mt-4 text-[15px] md:text-base max-w-2xl mx-auto">
                        Guided by purpose, driven by impact
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-white p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300"
                    >
                        <div className="absolute top-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Leaf className="w-6 h-6 md:w-8 md:h-8 text-green-700" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                            To be Africa&apos;s leading force in sustainable food production, creating lasting value across communities while nourishing nations and protecting our planet for generations to come.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative bg-linear-to-br from-green-700 to-green-900 p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="absolute top-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-green-100 leading-relaxed text-[15px] md:text-base">
                            To advance agriculture through innovation, sustainability, farmer empowerment, and ethical supply chain practices—transforming lives and landscapes across Africa.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Vision