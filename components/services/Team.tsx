"use client";

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Image from 'next/image';

import React from 'react'

const Team = () => {
    return (
        <div className='py-16 md:py-32'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6 md:mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
                    Our Dedicated Team
                </h2>
                <p className="mt-2 text-sm md:text-base max-w-2xl mx-auto text-gray-600">
                    A collective of skilled professionals committed to quality agriculture and community growth.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-12 md:mt-18 bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl"
            >
                <div className="grid lg:grid-cols-2 gap-0">

                    {/* Image Side */}
                    <div className="relative min-h-[400px] lg:min-h-[500px] order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gray-700">
                            <Image
                                src="/about/img (9).jpg"
                                alt="Gloto Farms Team"
                                fill
                                className="object-cover"
                            />

                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent to-gray-900/60 lg:from-transparent lg:to-gray-900/80"></div>
                    </div>

                    {/* Content Side */}
                    <div className="p-6 md:p-14 flex flex-col justify-center order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full w-fit mb-6 border border-white/10">
                            <Users className="w-5 h-5 text-green-400" />
                            <span className="text-green-300 text-sm font-semibold">Our People</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Empowered Teams, Thriving Farms
                        </h3>

                        <p className="text-gray-300 text-sm md:text-md leading-relaxed mb-6">
                            Our success is built on the dedication and expertise of our farming communities. We invest in training, fair compensation, and creating opportunities for growth—because when our farmers thrive, everyone benefits.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">100+ Farmers Trained</h4>
                                    <p className="text-gray-500 text-sm">Continuous education and skill development programs</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Fair Labor Practices</h4>
                                    <p className="text-gray-400 text-sm">Ethical employment and competitive compensation</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Community Impact</h4>
                                    <p className="text-gray-400 text-sm">Creating economic opportunities in rural areas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>

    )
}

export default Team;