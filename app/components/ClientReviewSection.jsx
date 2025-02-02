'use client'
// components/Slider.js

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    image: '/logo6.png',
  },
  {
    image: '/client2.png'
  },
  // Add more reviews as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-full mt-[120px] mb-[500px] flex items-start justify-center" id='client-section'>
      {reviews.map((review, index) => (
        <Transition
          key={index}
          show={currentIndex === index}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row items-center bg-white py-[50px] w-full shadow-xl rounded-lg w-full h-[400px] sm:px-[150px] px-[50px]">
            <img
              src={review.image}
              alt={review.name}
              className=" rounded-full mb-4 md:mb-0 md:mr-4"
            />
          </div>
        </Transition>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-24 h-[4px]  ${
              currentIndex === index ? 'bg-[#17a2b8]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#17a2b8] hover:bg-gray-400 rounded-full py-2 px-6 mt-52 text-white"
      >
        <FaChevronLeft/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 bg-[#17a2b8] hover:bg-gray-400 rounded-full py-2 px-6 mt-48 text-white"
      >
        <FaChevronRight/>
      </button>
    </div>
  );
};

export default Slider;
