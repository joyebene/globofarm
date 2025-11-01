"use client";

import { motion } from 'framer-motion';
import { Droplets, Leaf, PackageCheck, Sprout, TrendingUp, Users } from 'lucide-react';

import React from 'react'

const Services = () => {

    const services = [
        {
            icon: Sprout,
            title: "Crop Cultivation",
            description: "We cultivate high-quality crops using sustainable farming methods, ensuring optimal yields while preserving soil health for future generations.",
            features: ["Cassava", "Maize", "Rice", "Vegetables"]
        },
        {
            icon: Droplets,
            title: "Palm Oil Production",
            description: "Premium palm oil production from farm to processing. We maintain strict quality standards throughout our sustainable palm oil value chain.",
            features: ["Red Palm Oil", "Refined Palm Oil", "Palm Kernel Oil", "Organic Processing"]
        },
        {
            icon: Users,
            title: "Farmer Training",
            description: "Comprehensive training programs that empower local farmers with modern agricultural techniques and best practices.",
            features: ["Agri-tech Training", "Sustainable Methods", "Crop Management", "Business Skills"]
        },
        {
            icon: TrendingUp,
            title: "Agri-Consulting",
            description: "Expert agricultural consulting services to help farmers and businesses optimize their operations and maximize productivity.",
            features: ["Farm Planning", "Yield Optimization", "Market Access", "Financial Planning"]
        },
        {
            icon: PackageCheck,
            title: "Supply Chain Solutions",
            description: "End-to-end supply chain management ensuring farm-fresh produce reaches markets efficiently with full traceability.",
            features: ["Direct Sourcing", "Quality Control", "Logistics", "Market Distribution"]
        },
        {
            icon: Leaf,
            title: "Sustainability Programs",
            description: "Environmental conservation initiatives that protect ecosystems while enhancing agricultural productivity and community welfare.",
            features: ["Soil Health", "Water Management", "Carbon Reduction", "Biodiversity"]
        }
    ];

    return (
        <div className='my-16 md:my-32'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6 md:mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
                    Services
                </h2>
                <p className="mt-2 text-sm md:text-base max-w-2xl mx-auto">
                    Quality grown with care. Processed with integrity.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-300 shadow-gloto-gold"
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 group-hover:bg-green-700 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                            <service.icon className="w-6 h-6 md:w-8 md:h-8 text-green-700 group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                            {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                            {service.features.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

    )
}

export default Services;