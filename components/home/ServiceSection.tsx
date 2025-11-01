"use client";

import { motion } from "framer-motion";
import { GiWheat, GiCow, GiFarmer, GiPlantSeed } from "react-icons/gi";
import { MdLocalShipping, MdSchool } from "react-icons/md";

const services = [
  {
    title: "Crop Production & Management",
    desc: "Large-scale cultivation of essential food crops using modern sustainable farming techniques.",
    icon: <GiWheat className="text-4xl text-gloto-mid" />
  },
  {
    title: "Livestock Management",
    desc: "Raising healthy livestock through ethical practices to support food and dairy supply.",
    icon: <GiCow className="text-4xl text-gloto-mid" />
  },
  {
    title: "Supply & Distribution",
    desc: "Efficient supply chain systems enabling seamless distribution to local and international markets.",
    icon: <MdLocalShipping className="text-4xl text-gloto-mid" />
  },
  {
    title: "Training & Empowerment",
    desc: "Capacity-building programs designed to equip farmers and agri-preneurs with modern skills.",
    icon: <MdSchool className="text-4xl text-gloto-mid" />
  },
  {
    title: "Agro-Consultancy",
    desc: "Professional guidance and advisory for individuals, farms, organizations, and agribusiness ventures.",
    icon: <GiFarmer className="text-4xl text-gloto-mid" />
  },
  {
    title: "Agro-Processing & Value Chain",
    desc: "Processing agricultural produce into refined, market-ready products supporting value chain development.",
    icon: <GiPlantSeed className="text-4xl text-gloto-mid" />
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full py-16 md:py-32 bg-fixed bg-cover bg-center bg-[url('/home/serviceSec-img.jpg')]">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-4 text-gray-200 text-sm md:text-base md:pb-8"
        >
          We are committed to advancing agriculture through innovation, sustainability, and community empowerment.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-xl p-7 backdrop-blur-md shadow-2xl hover:shadow-sm transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-200 text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
