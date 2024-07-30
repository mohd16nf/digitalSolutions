import Image from 'next/image';
import Link from 'next/link';
import Img1 from '../../public/it-services3.jpg';
import Img2 from '../../public/digitalSolutions2.jpg';
import Img3 from '../../public/digitalSolutions.jpg';
import Img4 from '../../public/softwareDevelopment.png';
import Img5 from '../../public/it-services2.jpg';
import Img6 from '../../public/network-security.jpg';
import styles from './ServicesSection.module.css';

const CardSection = () => {
  return (
    <div className=" mx-auto py-8" id='services-section'>
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700 underline">WHAT WE DO?</h2>
      <h1 className="xl:text-5xl text-center md:text-4xl text-3xl lg:px-20 my-10 font-semibold">Our Advanced Tech Strategy And Delivery Help In Effective Communication</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className={`relative group overflow-hidden ${styles.card}`}>
          <Image
            src={Img1}
            alt="Image 1"
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <Link href="/pages/services/it-facility-management" className="bg-black text-white py-2 px-4 rounded">View Details</Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>
          <div className="pl-8 pt-8 relative z-30">
            <h3 className="lg:text-2xl text-xl font-bold mb-2">IT Facility Management Services</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`relative group overflow-hidden ${styles.card}`}>
          <Image
            src={Img2}
            alt="Image 2"
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <Link href="/pages/services/digital-solutions" className="bg-black text-white py-2 px-4 rounded">View Details</Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>
          <div className="pl-8 pt-8 relative z-30">
            <h3 className="text-2xl font-semibold mb-2">Digital Solutions and Software Services</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`relative group overflow-hidden ${styles.card}`}>
          <Image
            src={Img3}
            alt="Image 3"
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <Link href="/pages/services/cloud-services" className="bg-black text-white py-2 px-4 rounded">View Details</Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>
          <div className="pl-8 pt-8 relative z-30">
            <h3 className="text-2xl font-semibold mb-2">Cloud Services</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className={`relative group overflow-hidden ${styles.card}`}>
          <Image
            src={Img4}
            alt="Image 4"
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <Link href="/pages/services/software-development" className="bg-black text-white py-2 px-4 rounded">View Details</Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>
          <div className="pl-8 pt-8 relative z-30">
            <h3 className="text-2xl font-semibold mb-2">Software Development</h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className={`relative group overflow-hidden ${styles.card}`}>
          <Image
            src={Img5}
            alt="Image 5"
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <Link href="/pages/services/iot-virtualisation" className="bg-black text-white py-2 px-4 rounded">View Details</Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>
          <div className="pl-8 pt-8 relative z-30">
            <h3 className="text-2xl font-semibold mb-2">Online Remote Support</h3>
          </div>
        </div>

        {/* Card 6 */}
        <div className={`relative group overflow-hidden ${styles.card}`}>
          <Image
            src={Img6}
            alt="Image 6"
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <Link href="/pages/services/data-science-analytics" className="bg-black text-white py-2 px-4 rounded">View Details</Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>
          <div className="pl-8 pt-8 relative z-30">
            <h3 className="text-2xl font-semibold mb-2">NETWORK AND SECURITY SOLUTIONS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
