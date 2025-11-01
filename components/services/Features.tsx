"use client";

import { Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { GiSprout } from "react-icons/gi";
import Image from "next/image";

const featuresData = [
    {
        badgeIcon: <Droplets className="w-5 h-5 text-gloto-gold" />,
        badgeText: "Featured Service",
        title: "Premium Palm Oil Production",
        description:
            "We produce high-quality palm oil through sustainable and ethical practices. From carefully managed plantations to modern processing.",
        items: ["Red Palm Oil", "Refined Palm Oil", "Palm Kernel Oil", "Organic Processing"],
        buttonText: "Learn More About Our Process",
        image: "/about/img (3).jpg",
        reverse: false,
    },
    {
        badgeIcon: <GiSprout className="w-5 h-5 text-gloto-gold" />,
        badgeText: "Featured Service",
        title: "Quality Rice Cultivation & Processing",
        description:
            "We grow and process high-grade rice using environmentally mindful irrigation and advanced milling to ensure purity & nutrition.",
        items: ["Premium White Rice", "Local Parboiled Rice", "Improved Seedlings", "Eco-Smart Irrigation"],
        buttonText: "Learn More About Our Process",
        image: "/about/img (8).jpg",
        reverse: true,
    },
];

export default function Features() {
    return (
        <div className="space-y-20 my-16 md:my-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6 md:mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
                    Featured Services
                </h2>
                <p className="mt-2 text-sm md:text-base max-w-2xl mx-auto">
                    Quality grown with care. Processed with integrity.
                </p>
            </motion.div>

            {featuresData.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-gloto-dark to-gloto-mid"
                >
                    <div className={`grid lg:grid-cols-2 gap-0 ${feature.reverse ? "flex-row-reverse" : ""}`}>

                        {/* CONTENT SIDE */}
                        <div className="p-6 md:p-14 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full w-fit mb-6">
                                {feature.badgeIcon}
                                <span className="text-green-100 text-xs md:text-sm font-semibold">
                                    {feature.badgeText}
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-green-100 text-sm md:text-base leading-relaxed mb-8">
                                {feature.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {feature.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                                        <span className="text-white font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-3 md:px-6 py-2 md:py-3 bg-white text-green-800 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all w-fit"
                            >
                                {feature.buttonText}
                            </motion.button>
                        </div>


                        {/* IMAGE SIDE */}
                        <div className="relative min-h-[400px] lg:min-h-[500px]">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
