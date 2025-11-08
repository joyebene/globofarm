"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X, Check } from "lucide-react";

// Product data structure
const productsData = {
  "palm-oil": {
    title: "Premium Palm Oil Production",
    description:
      "We produce high-quality palm oil through sustainable and ethical practices. From carefully managed plantations to modern processing facilities, every step is optimized for quality and environmental responsibility.",
    fullDescription:
      "Our palm oil production combines traditional knowledge with modern technology to deliver premium quality oils. We maintain strict quality control throughout the entire process, from plantation management to final packaging. Our commitment to sustainability ensures that our palm oil is not only of the highest quality but also environmentally responsible.",
    features: [
      "Red Palm Oil",
      "Refined Palm Oil",
      "Palm Kernel Oil",
      "Organic Processing",
    ],
    benefits: [
      "100% Pure and Natural",
      "Rich in Vitamins A & E",
      "Sustainable Sourcing",
      "Zero Trans Fats",
      "Premium Quality Control",
      "Eco-Friendly Processing",
    ],
    specifications: {
      "Product Type": "Palm Oil & Derivatives",
      "Processing Method": "Cold-Pressed & Refined",
      "Packaging": "Bulk & Retail Sizes",
      "Certification": "Organic Certified",
      "Shelf Life": "24 Months",
      "Origin": "Nigeria",
    },
    images: [
      "/imgs/oils.jpg",
      "/imgs/oil2.jpeg",
      "/imgs/oil3.jpg",
      "/imgs/oil4.webp",
      "/imgs/oil6.webp",
    ],
  },
  rice: {
    title: "Quality Rice Cultivation & Processing",
    description:
      "We grow and process high-grade rice using environmentally mindful irrigation and advanced milling to ensure purity, nutrition, and exceptional taste.",
    fullDescription:
      "Our rice cultivation program focuses on producing premium quality rice through sustainable farming practices. We use improved seed varieties, efficient water management systems, and modern milling technology to deliver rice that meets the highest quality standards. From paddy to plate, we ensure excellence at every stage.",
    features: [
      "Premium White Rice",
      "Local Parboiled Rice",
      "Improved Seedlings",
      "Eco-Smart Irrigation",
    ],
    benefits: [
      "High-Yield Varieties",
      "Disease-Resistant Strains",
      "Nutritious & Wholesome",
      "Consistent Quality",
      "Sustainable Farming",
      "Modern Milling Process",
    ],
    specifications: {
      "Product Type": "Premium Rice",
      "Varieties": "White & Parboiled",
      "Grain Quality": "Long Grain",
      "Packaging": "5kg, 10kg, 25kg, 50kg",
      "Processing": "Modern Milling",
      "Origin": "Nigeria",
    },
    images: [
      "/about/img (8).jpg",
      "/imgs/img (4).jpg",
      "/imgs/img (5).jpg",
      "/imgs/img (1).jpg",
      "/imgs/img (7).jpg",
    ],
  },
  ginger: {
    title: "Organic Ginger Cultivation",
    description:
      "We cultivate premium organic ginger using natural methods that preserve its medicinal properties, rich flavor, and aroma for domestic and industrial markets.",
    fullDescription:
      "Our ginger production combines organic farming methods with modern agricultural techniques to preserve the natural flavor, aroma, and medicinal properties of this valuable root. We carefully manage every stage from planting to harvesting, ensuring our ginger meets the highest standards for both the confectionery and pharmaceutical industries. Our processed ginger serves growing domestic and industrial demands while maintaining its therapeutic value.",
    features: [
      "Fresh Ginger Root",
      "Dried Ginger",
      "Medicinal Grade",
      "Export Quality",
    ],
    benefits: [
      "100% Organic Cultivation",
      "Natural Medicinal Properties",
      "Rich Flavor & Aroma",
      "Pharmaceutical Grade",
      "Confectionery Industry Ready",
      "International Standards",
    ],
    specifications: {
      "Product Type": "Organic Ginger",
      "Forms Available": "Fresh Root & Dried",
      "Grade": "Medicinal & Food Grade",
      "Packaging": "Bulk & Retail Sizes",
      "Certification": "Organic Certified",
      "Origin": "Nigeria",
    },
    images: [
      "/imgs/ginger1.avif",
      "/imgs/ginger2.webp",
      "/imgs/ginger3.webp", 
      "/imgs/ginger4.jpg",
      "/imgs/ginger5.webp",
    ],
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  
  const product = productsData[slug as keyof typeof productsData];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4 md:pt-8">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-green-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-green-200 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {product.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-green-100 max-w-3xl"
          >
            {product.description}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
              <Image
                src={product.images[selectedImage]}
                alt={`${product.title} - Image ${selectedImage + 1}`}
                fill
                className="object-cover cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                {<ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />}
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                {<ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />}
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 text-white rounded-full text-sm">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    selectedImage === idx
                      ? "ring-4 ring-green-600"
                      : "ring-2 ring-gray-300 hover:ring-green-400"
                  } transition-all`}
                >
                 { <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">About This Product</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-3 py-2 md:p-4 bg-gloto-mid rounded-lg shadow-xl"
                  >
                    <div className="w-2 h-2 bg-gloto-gold rounded-full"></div>
                    <span className="font-medium text-[12px] md:text-base text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Benefits</h3>
              <div className="space-y-3">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/contact-us")}
              className="w-full py-4 bg-linear-to-r from-gloto-dark to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us About This Product
            </motion.button>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-l-4 border-green-600 pl-4">
                <div className="text-[13px] md:text-sm text-gray-500 mb-1">{key}</div>
                <div className="text-base md:text-lg font-semibold text-gray-900">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
            >
              {<X className="w-6 h-6 text-white" />}
            </button>

            <div className="relative w-full max-w-5xl aspect-4/3">
              <Image
                src={product.images[selectedImage]}
                alt={`${product.title} - Full view`}
                fill
                className="object-contain"
              />
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center"
              >
                {<ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-gray-800" />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center"
              >
                {<ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-gray-800" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}