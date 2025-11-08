"use client";

import Link from 'next/link'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LuBriefcase, LuChrome, LuPhone, LuUser } from 'react-icons/lu';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

interface DesktopNavProps {
  url: string;
  name: React.ReactNode;
  isActive: boolean;
}

const DesktopNav = ({ url, name, isActive }: DesktopNavProps) => {

  return (
    <div className="flex flex-col items-center">
      <Link
        href={url}
        className={`${isActive ? 'text-gloto-gold' : 'text-gray-900'
          } font-semibold hover:shadow-sm hover:bg-[#effff1] px-3 py-1 rounded-md transition-all duration-300`}
      >
        {name}
      </Link>

      {isActive && (
        <span className="w-2 h-2 rounded-full bg-gloto-gold mt-1"></span>
      )}
    </div>
  );
};


const Navbar = () => {
  const pathName = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className='bg-white text-[#1a1b1e] fixed w-full px-4 md:px-20 py-4 md:py-6 border-b border-gloto-gold shadow-md shadow-gloto-mid z-10'>
      {/* Desktop Nav */}
      <div className=' hidden md:block'>
        <div className='flex items-center justify-center gap-12'>
          <DesktopNav url='/' name={<><LuChrome className="inline mr-1" /> Home</>} isActive={pathName === "/"} />
          <DesktopNav url='/about-us' name={<><LuUser className='inline mr-1' /> About Us</>} isActive={pathName === "/about-us"} />
          {/* Logo */}
          <div className='p-2 bg-gloto-dark rounded-full text-white shadow shadow-gloto-gold'>
            <Link href="/">
              <span className='text-2xl font-bold'>GF</span>
            </Link>
          </div>
          <DesktopNav url='/services' name={<><LuBriefcase className='inline mr-1' /> Services</>} isActive={pathName === "/services"} />
          <DesktopNav url='/contact-us' name={<><LuPhone className="inline mr-1" /> Contact Us</>} isActive={pathName === "/contact-us"} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-1'>
            <div className='p-2 bg-gloto-dark rounded-full text-white shadow shadow-gloto-gold'>
              <Link href="/">
                <span className='text-lg font-bold'>GF</span>
              </Link>
            </div>
            <div className='flex flex-col text-sm font-bold'>
              <span>Gloto</span>
              <span>Farms</span>
            </div>
          </div>

          <div>
            {mobileOpen ? <CgClose className='text-gray-900' size={35} onClick={() => setMobileOpen(false)} /> : <HiMenu className='text-gray-900' size={35} onClick={() => setMobileOpen(true)} />}

          </div>
        </div>

      </div>


      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gloto-gold shadow-lg animate-slideDown z-50">
          <div className="flex flex-col py-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`px-6 py-3 text-base ${pathName === "/" ? "text-gloto-gold font-semibold" : "text-gray-800"
                }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={() => setMobileOpen(false)}
              className={`px-6 py-3 text-base ${pathName === "/about-us" ? "text-gloto-gold font-semibold" : "text-gray-800"
                }`}
            >
              About Us
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className={`px-6 py-3 text-base ${pathName === "/services" ? "text-gloto-gold font-semibold" : "text-gray-800"
                }`}
            >
              Services
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className={`px-6 py-3 text-base ${pathName === "/contact-us" ? "text-gloto-gold font-semibold" : "text-gray-800"
                }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

    </div>




  )
}

export default Navbar;