"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h3 className="text-2xl font-bold text-gloto-mid">GLOTO FARMS</h3>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Nurturing the land, <span className="text-gloto-gold"> Nourishing Lives. <br /></span>  
            We are committed to sustainable agriculture, food security, 
            and community empowerment across Africa.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-gloto-gold transition">Home</Link></li>
            <li><Link href="/Linkbout" className="hover:text-gloto-gold transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gloto-gold transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gloto-gold transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg text-white mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Crop Production</li>
            <li>Livestock Farming</li>
            <li>Agro-Processing</li>
            <li>Training & Empowerment</li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold text-lg text-white mb-4">Get In Touch</h4>
          <p className="text-gray-300 text-sm mt-1">T10, 04 Paradise Court Idu</p>
          <p className="text-gray-300 text-sm">Abuja, Nigeria</p>
          <p className="text-gray-300 text-sm mt-1">info@glotofarms.com</p>

          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              {<FaWhatsapp size={18} />}            
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              {<FaInstagram size={18} />}
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              {<FaFacebookF size={18} />}
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              {<FaLinkedinIn size={18} />}
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} GLOTO FARMS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
