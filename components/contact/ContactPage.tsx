"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, User, Building } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["GLOTO FARMS Headquarters", "Abuja, FCT, Nigeria"],
      color: "green"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 XXX XXX XXXX", "+234 XXX XXX XXXX"],
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@glotofarms.com", "support@glotofarms.com"],
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "orange"
    }
  ];

  const inquiryTypes = [
    { value: "partnership", label: "Partnership Opportunities" },
    { value: "products", label: "Product Inquiries" },
    { value: "training", label: "Farmer Training Programs" },
    { value: "consulting", label: "Agricultural Consulting" },
    { value: "employment", label: "Career Opportunities" },
    { value: "other", label: "Other Inquiries" }
  ];

  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full py-24 bg-linear-to-br from-black to-gloto-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/home/hero-img1.jpg')] opacity-20"></div>
        
        <div className="relative z-5 max-w-6xl mx-auto px-6 text-start pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gloto-gold text-sm font-semibold mb-6 border border-gloto-gold">
              Let&apos;s Connect
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get in Touch With Us
            </h1>
            
            <p className="text-green-100 text-sm md:text-base max-w-2xl">
              Whether you&apos;re interested in partnerships, products, or simply want to learn more about sustainable farming, we&apos;re here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                
                {info.details.map((detail, dIdx) => (
                  <p key={dIdx} className="text-gray-600 text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & MAP SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* FORM SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and our team will get back to you within 24 hours
                </p>
              </div>

              <div className="space-y-6 text-gray-800">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject/Inquiry Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="">Select an inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitted
                      ? "bg-gloto-dark text-white"
                      : isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gloto-dark text-white hover:bg-green-800 hover:shadow-xl"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Message Sent Successfully!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* INFO SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-8 space-y-8">
                
                {/* Why Contact Us Card */}
                <div className="bg-linear-to-br from-green-700 to-green-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-green-100">Sustainable agricultural practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-green-100">Premium quality products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-green-100">Expert agricultural consulting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-green-100">Community empowerment focus</span>
                    </li>
                  </ul>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-80 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">[Map Location]</p>
                      <p className="text-xs mt-1">Abuja, FCT, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-5 border-2 border-gray-100 text-center">
                    <div className="text-3xl font-bold text-green-700">24h</div>
                    <div className="text-sm text-gray-600 mt-1">Response Time</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 border-2 border-gray-100 text-center">
                    <div className="text-3xl font-bold text-green-700">100%</div>
                    <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-linear-to-br from-gloto-dark to-gloto-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit Our Farm
            </h3>
            <p className="text-white text-sm md:text-base mb-8 max-w-2xl mx-auto">
              Experience sustainable farming firsthand. Schedule a visit to our facilities and see how we&apos;re transforming agriculture in Africa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gloto-dark text-white font-bold rounded-xl shadow-lg hover:bg-gloto-mid transition-all"
            >
              Schedule a Visit
            </motion.button>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;