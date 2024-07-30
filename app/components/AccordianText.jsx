'use client'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      
      <div className="w-full p-4 border rounded-lg bg-white">
        <button
          className="w-full flex justify-between items-center py-4 px-6 text-left bg-black text-white rounded-lg gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Learn more about us</span>
          <span>{isOpen ? <FaChevronUp/>  :<FaChevronDown/> }</span>
        </button>
        {isOpen && (
          <div className="p-4 bg-gray-50 border-t">
            <p>
              Welcome to our company! We are dedicated to providing top-notch services
              to our clients. With over a decade of experience in the industry, we have 
              built a reputation for excellence and reliability. Our team of professionals
              is passionate about what they do and is committed to delivering results 
              that exceed expectations. Whether you're looking for innovative solutions 
              or reliable support, we have the expertise to help you achieve your goals. 
              Our mission is to empower businesses with the tools and knowledge they need 
              to succeed in a competitive market. Join us on this journey and discover 
              what makes us a leader in our field.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
