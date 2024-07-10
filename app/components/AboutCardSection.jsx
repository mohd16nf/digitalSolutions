// components/CardSection.js

import Image from 'next/image';
import Img1 from '../../public/Picture7.jpg'
import Img3 from '../../public/Picture8.jpg'
import Img2 from '../../public/picture20.jpg'


const CardSection = () => {
    return (
      <div className="flex justify-center py-10 xl:px-8">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-0  bg-[#17a2b8]">
          <div className="cards">
            <Image
              src={Img3}
              alt="Image 1"
              className="w-full h-[280px] object-cover"
            />
            <div className='pl-8 pt-8'>
            <h3 className="text-3xl text-gray-700 font-bold mb-6">OUR FOCUS
            </h3>
            <p className="mt-2 text-xl mb-6 text-gray-200">
            We place a high value on customer satisfaction. We provide a one-stop technology destination to our customers, 
            helping them improve their organizations and fulfill their information technology needs.


            </p>
            </div>
          </div>
          <div className="cards">
            <Image
              src={Img2}
              alt="Image 2"
              className="w-full h-[280px] object-cover"
            />
            <div className='pl-8 pt-8'>
            <h3 className="text-3xl text-gray-700 font-bold mb-6">OUR STRENGTH
            </h3>
            <p className="mt-2 text-xl mb-6 text-gray-200">
            It Digitals credits its success to its highly competent professionals, 
            who are essential to the company's growth and expansion.
            </p>
            </div>
          </div>
          <div className="cards">
            <Image
              src={Img1}
              alt="Image 3"
              className="w-full h-[280px] object-cover"
            />
            <div className='pl-8 pt-8 pr-8'>
            <h3 className="text-3xl text-gray-700 font-bold mb-6">OUR EXPERTISE</h3>
            <p className="mt-2 text-gray-200 text-xl mb-6">
            We specialize in implementing end-to-end system integration, impeccable software services, data center creation,
             management, and IT facilities management services.
            </p>
            </div>
           
          </div>
        </div>
      </div>
    );
  };
  
  export default CardSection;
  