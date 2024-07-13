import Link from 'next/link';
import Image from 'next/image';
import BrandLogo from '../../public/logo2.png'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {


  const phoneNumber = '9821848522'; // Ensure the number is in the correct format
  const message = 'Hi, How can I help you?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const instaLink = 'https://www.instagram.com/itdigitals/'

  return (
    <footer className="text-gray-800 md:pt-24 pt-12 border-4 border-t-gray-400">
      <div className="md:container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center md:justify-items-start text-center md:text-left pb-12">
        {/* Brand Logo */}
        <div className="">
          
          <Link href="/" className=''><Image src={BrandLogo} style={{width:"320px", height:'160px',}} alt='Error fetching brand logo' /></Link>
        </div>
        {/* Company */}
        <div className="mb-4 md:mb-0 md:ml-24">
          <h3 className="font-bold mb-2 text-blue-500 lg:text-2xl text-xl">Company</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about-section">About Us</Link></li>
            <li><Link href="#services-section">Services</Link></li>
            <li><Link href="#contact-form">Contact Us</Link></li>
          </ul>
        </div>
        {/* Get Social */}
        <div className="mb-4 md:mb-0 md:ml-24">
          <h3 className="font-bold mb-2 text-blue-500 lg:text-2xl text-xl">Get Social</h3>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li><Link href='https://www.facebook.com' className="text-blue-500" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></Link></li>
            <li><Link href={whatsappLink}className="text-blue-500" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></Link></li>
            <li><Link href={instaLink} className="text-blue-500" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></Link></li>
          </ul>
        </div>
        {/* Visit Us */}
        <div className="mb-4 md:mb-0 md:ml-24">
          <h3 className="lg:text-2xl text-xl font-bold mb-2 text-blue-500">Visit Us</h3>
          <address className="not-italic">
            <p>1234 Street Name</p>
            <p>City, State, Zip</p>
          </address>
        </div>
      </div>
      <div className="border-t border-gray-300 text-center py-8 bg-[#17a2b8] text-white text-lg">
        © 2023 ITdigitals All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
