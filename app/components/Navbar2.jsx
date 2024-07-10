'use client'

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full xl:py-4 pt-4 z-50 bg-[#17a2b8] md:px-[150px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className="h-36 w-52" src="/logo32.png" alt="Brand Logo" />
          </div>
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-8 ">
              <Link href="/" passHref>
                <span className="text-white md:text-2xl cursor-pointer">Home</span>
              </Link>
              <div className="relative group">
                <button className="text-white focus:outline-none text-2xl">
                  Product and Services
                </button>
                <div className="absolute left-0 w-[300px] h-[400px] mt-2 text-white bg-[#17a2b8] hidden group-hover:block rounded-md shadow-lg z-20">
                  <Link href="/pages/services/it-facility-management" passHref>
                    <span className="block px-4 py-2 text-2xl cursor-pointer">IT Facility Management Services</span>
                  </Link>
                  <Link href="/pages/services/digital-solutions" passHref>
                    <span className="block px-4 py-2 text-2xl cursor-pointer">Digital Solutions and Software Services</span>
                  </Link>
                  <Link href="/pages/services/cloud-services" passHref>
                    <span className="block px-4 py-2 text-2xl cursor-pointer">Cloud Services</span>
                  </Link>
                  <Link href="/pages/services/software-development" passHref>
                    <span className="block px-4 py-2 text-2xl cursor-pointer">Software Development</span>
                  </Link>
                  <Link href="/pages/services/iot-virtualisation" passHref>
                    <span className="block px-4 py-2 text-2xl cursor-pointer">IoT and Virtualisation</span>
                  </Link>
                  <Link href="/pages/services/data-science-analytics" passHref>
                    <span className="block px-4 py-2 text-2xl cursor-pointer">Data Science and Analytics</span>
                  </Link>
                </div>
              </div>
              <Link href="/" passHref>
                <span className="text-white text-2xl cursor-pointer">Clients</span>
              </Link>
              <Link href="/" passHref>
                <span className="text-white text-2xl cursor-pointer">About Us</span>
              </Link>
              <Link href="/" passHref>
                <span className="text-white text-2xl cursor-pointer">Get in Touch</span>
              </Link>
            </div>
          </div>
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} xl:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" passHref>
            <span className="block text-black px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Home
            </span>
          </Link>
          <div className="relative group">
            <button className="block w-full text-left text-black px-3 py-2 rounded-md text-base font-medium focus:outline-none">
              Product and Services
            </button>
            <div className="hidden group-hover:block bg-white text-black rounded-md shadow-lg z-20">
              <Link href="/pages/services/it-facility-management" passHref>
                <span className="block px-4 py-2 cursor-pointer">IT Facility Management Services</span>
              </Link>
              <Link href="/pages/services/digital-solutions" passHref>
                <span className="block px-4 py-2 cursor-pointer">Digital Solutions and Software Services</span>
              </Link>
              <Link href="/pages/services/cloud-services" passHref>
                <span className="block px-4 py-2 cursor-pointer">Cloud Services</span>
              </Link>
              <Link href="/pages/services/software-development" passHref>
                <span className="block px-4 py-2 cursor-pointer">Software Development</span>
              </Link>
              <Link href="/pages/services/iot-virtualisation" passHref>
                <span className="block px-4 py-2 cursor-pointer">IoT and Virtualisation</span>
              </Link>
              <Link href="/pages/services/data-science-analytics" passHref>
                <span className="block px-4 py-2 cursor-pointer">Data Science and Analytics</span>
              </Link>
            </div>
          </div>
    
          <Link href="#client-section" passHref>
            <span className="block text-black px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Clients
            </span>
          </Link>
          <Link href="#about-section" passHref>
            <span className="block text-black px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="#contact-form" passHref>
            <span className="block text-black px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Get in Touch
            </span>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
