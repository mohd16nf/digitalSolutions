// components/SocialSection.js
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram , FaTwitter} from 'react-icons/fa';
import Link from 'next/link';

const SocialSection = () => {
  const phoneNumber = '9821848522'; // Ensure the number is in the correct format
  const message = 'Hi, How can I help you?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const instaLink = 'https://www.instagram.com/itdigitals/'

  return (
    <div className="mx-auto xl:px-48 md:px-16 md:py-8 bg-[#17a2b8]">
      <div className="flex flex-col md:flex-row items-center md:justify-center">
        <div className="md:mt-0 mt-4 md:mb-0 mb-4 md:mr-12">
          <h2 className="lg:text-3xl lg:tracking-widest tracking-wide decoration-white text-white text-xl">
            Connect with us :
          </h2>
        </div>
        <div className="flex md:space-x-20 sm:space-x-12 space-x-8 md:mb-0 mb-8">
          <Link href={whatsappLink} passHref target='_blank'>
          
              <FaWhatsapp className="text-green-500 cursor-pointer hover:text-white" size={30} />
            
          </Link>
          <Link href="mailto:itdigitals2022@gmail.com" passHref target='_blank'>
            
              <FaEnvelope className="text-red-500 cursor-pointer hover:text-white" size={30} />
            
          </Link>
          <Link href="https://www.facebook.com" passHref target='_blank'>
  
              <FaFacebook className="text-blue-700 cursor-pointer hover:text-white" size={30} />
            
          </Link>
          <Link href={instaLink} passHref target='_blank'>
        
              <FaInstagram className="text-pink-500 cursor-pointer hover:text-white" size={30} />
            
          </Link>
          <Link href='https://www.twitter.com/itdigitals' passHref target='_blank'>
        
              <FaTwitter className="text-blue-700 cursor-pointer hover:text-white" size={30} />
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;

