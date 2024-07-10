// components/SocialSection.js
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram , FaTwitter} from 'react-icons/fa';
import Link from 'next/link';

const SocialSection = () => {
  const phoneNumber = '9821848522'; // Ensure the number is in the correct format
  const message = 'Hi, How can I help you?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const instaLink = 'https://www.instagram.com/itdigitals/'

  return (
    <div className="mx-auto p-4 xl:px-48 md:px-16 md:p-12 bg-[#17a2b8]">
      <div className="flex flex-col md:flex-row items-center md:justify-center">
        <div className="md:mt-0 mt-10 md:mb-0 mb-10 md:mr-12">
          <h2 className="lg:text-3xl lg:tracking-widest tracking-wide decoration-white text-white text-xl">
            Connect with us :
          </h2>
        </div>
        <div className="flex md:space-x-20 sm:space-x-12 space-x-8 md:mb-0 mb-16">
          <Link href={whatsappLink} passHref target='_blank'>
          
              <FaWhatsapp className="text-green-500 cursor-pointer hover:text-white" size={40} />
            
          </Link>
          <Link href="mailto:mdasif16nf@gmail.com" passHref target='_blank'>
            
              <FaEnvelope className="text-red-500 cursor-pointer hover:text-white" size={40} />
            
          </Link>
          <Link href="https://www.facebook.com" passHref target='_blank'>
  
              <FaFacebook className="text-blue-700 cursor-pointer hover:text-white" size={40} />
            
          </Link>
          <Link href={instaLink} passHref target='_blank'>
        
              <FaInstagram className="text-pink-500 cursor-pointer hover:text-white" size={40} />
            
          </Link>
          <Link href='#' passHref target='_blank'>
        
              <FaTwitter className="text-blue-700 cursor-pointer hover:text-white" size={40} />
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;

