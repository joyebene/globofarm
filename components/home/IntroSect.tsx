"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const IntroSection = () => {
  return (
    <section className="w-full py-16 md:py-30 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/home/imgf.webp"
            alt="Gloto Farms"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 leading-snug">
            Growing Nature, Feeding Nations.
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
            At <span className="font-semibold text-green-700">GLOTO FARMS</span>, we are committed to modern agriculture that supports
            food security, empowers communities, and promotes sustainable farming
            practices. We combine traditional farming wisdom with innovative agro-tech
            solutions to produce high-quality crops and agricultural products.
          </p>

          <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
            Our operations span crop cultivation, agro-processing, training, and
            agricultural empowerment initiatives designed to build a new generation
            of profitable and skilled agripreneurs.
          </p>

          <Link href="/service">
            <motion.button
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-5 md:px-8 py-3 bg-gloto-gold text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default IntroSection;
