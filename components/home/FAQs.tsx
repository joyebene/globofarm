"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";

const faqs = [
  {
    question: "What type of crops do you cultivate?",
    answer: "We cultivate rice, ginger, pepper, maize, and cassava using sustainable and modern farming practices to ensure high yield and quality produce.",
  },
  {
    question: "Do you offer training for new farmers?",
    answer: "Yes. We provide agricultural training, empowerment programs, and mentorship to equip farmers and agri-preneurs with modern, profitable farming skills.",
  },
  {
    question: "Can I partner or invest in your farming projects?",
    answer: "Absolutely. We welcome partnerships, collaborations, and investment opportunities to expand production capacity and rural agricultural development.",
  },
  {
    question: "Do you sell and distribute processed agricultural products?",
    answer: "Yes. We process and supply high-quality agricultural products to retailers, wholesalers, and large-scale buyers across local and international markets.",
  },
  {
    question: "Where are your farms located?",
    answer: "Our farm sites are strategically located within productive agricultural zones, with distribution channels that support access to multiple markets.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 md:py-30 bg-white overflow-hidden">
      
      {/* Decorative Images */}
      <Image
        src="/home/plant-top.png"
        alt="img"
        width={50}
        height={50}
        className="absolute top-0 right-0 w-40 md:w-50 opacity-20 pointer-events-none"
      />
      <Image
        src="/home/plant-bottom.png"
        alt="img"
        width={50}
        height={50}
        className="absolute bottom-0 left-0 w-44 opacity-20 pointer-events-none"
      />

      <motion.div
        className="max-w-6xl mx-auto px-6 relative z-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-800">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-3 md:pb-8">
          Answers to the most common questions about our farming operations & services.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white/60 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-semibold text-gray-800 text-sm md:text-base">{faq.question}</span>

                {activeIndex === index ? (
                  <FaMinus className="text-green-700" />
                ) : (
                  <FaPlus className="text-green-700" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-4 pb-4 text-gray-600 text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
``
export default FAQSection;
