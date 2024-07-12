'use client'

import { useState } from 'react';
import { FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0e38bdb3-1efe-452b-acfd-5d8399c8ea17");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    if (result.success) {
      alert('Form Submitted Successfully')
      // Optionally, you can add logic to show a success message or redirect after submission
    }
  };

  return (
    <div className="bg-[#17a2b8] text-white md:px-40 px-8 md:py-20 py-12 " id='contact-form'>
      <div className="flex flex-col md:flex-row">
        {/* First Div */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h2 className="xl:text-2xl text-xl font-bold mb-8">WANT TO START SOMETHING NEW</h2>
          <h1 className="lg:text-5xl text-4xl font-extrabold mt-2 mb-12">Ready to engage with us?</h1>
          <p className="mt-4 mb-8 text-xl">Enter your details & we’ll be get in touch to discuss your project.</p>
          <div className="mt-6 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FiPhone size={45} />
              <span className='text-xl'>Random</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail size={45} />
              <span className='text-xl'>random</span>
            </div>
          </div>
        </div>
        {/* Second Div */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-10">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                className="w-1/2 placeholder-xl py-6 border-b border-white bg-transparent placeholder-white focus:outline-none"
              />
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                className="w-1/2 placeholder-xl py-6 border-b border-white bg-transparent placeholder-white focus:outline-none"
              />
            </div>
            <div className="flex space-x-10">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-1/2 placeholder-xl py-6 border-b border-white bg-transparent placeholder-white focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-1/2 placeholder-xl border-b border-white bg-transparent py-6 placeholder-white focus:outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full mb-8 pt-4 pb-32 border-b-4 border-white bg-transparent placeholder-xl placeholder-white focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center px-8 py-4 bg-black text-lg text-white hover:bg-gray-800"
            >
              Send Message <FiArrowRight className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
