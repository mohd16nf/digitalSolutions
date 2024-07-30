'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import styles from './ImageSlider.module.css'; // Import the CSS module

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    {
      src: '/sliderImg3.jpg',
      heading: "Creating beautiful tech experiences that tell a story.",
      subheading: 'Strategy & Planning, Development and Implementation.'
    },
    {
      src: '/sliderImg4.jpg',
      heading: 'All digital solution in the most effective manner.',
      subheading: 'Machine Learning, AI, Cloud Computing, Analytics.'
    },
    {
      src: '/sliderImg1.jpg',
      heading: 'One stop tech destination across all verticals.',
      subheading: 'Strategy & Planning, Development and Implementation.'
    },
    {
      src: '/sliderImg2.jpg',
      heading: 'All digital solution in the most effective manner.',
      subheading: 'Machine Learning, AI, Cloud Computing, Analytics.'
    },
    {
      src: '/sliderImg6.jpg',
      heading: 'One stop tech destination across all verticals.',
      subheading: 'Strategy & Planning, Development and Implementation.'
    },
  ];

  const variants = {
    enter: {
      opacity: 0.8,
    },
    center: {
      opacity: 1,
      transition: { duration: 2 }, // Adjust slide change time here (in seconds)
    },
    exit: {
      opacity: 0.8,
    },
  };

  const handleSlideChange = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Adjust slide change interval here (in milliseconds)
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className={`relative w-full h-screen overflow-hidden flex items-center justify-center ${styles.imageSlider}`}>
      <Navbar />
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1 }, // Adjust slide change time here (in seconds)
            }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src={images[currentSlide].src}
                alt={`Slide ${currentSlide + 1}`}
                layout="fill"
                objectFit="cover"
                className={` ${styles.image}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
              <div className={`w-1/2 h-full flex flex-col items-start xl:justify-center xl:pb-28 xl:pt-0 md:pt-[250px] pt-[150px] text-white z-10 xl:pl-[150px] md:pl-[100px] pl-[50px] ${styles.textContainer}`}>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 4 }} // Adjust text appearing time here (in seconds)
                  className="font-bold mb-12 xl:text-5xl text-4xl"
                >
                  {images[currentSlide].heading}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 4 }} // Adjust text appearing time here (in seconds)
                  className="xl:text-3xl lg:text-2xl text-xl"
                >
                  {images[currentSlide].subheading}
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows for navigation */}
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 z-20">
        <button
          onClick={prevSlide}
          className="bg-white bg-opacity-60 text-gray-800 hover:text-gray-900 hover:bg-opacity-90 rounded-full p-2 focus:outline-none"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white bg-opacity-60 text-gray-800 hover:text-gray-900 hover:bg-opacity-90 rounded-full p-2 focus:outline-none"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Text section */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-center py-4 overflow-hidden">
        <div className="whitespace-nowrap">
          <motion.p
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }} // Adjust text scrolling duration here (in seconds)
            className="inline-block px-4 text-md"
          >
            “We’ excel in offering comprehensive IT service solutions and all AMC service providers such as Networking, Cloud Sevices, Web Development, System Support services etc.”
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
