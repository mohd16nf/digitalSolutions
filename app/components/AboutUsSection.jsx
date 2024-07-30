// components/WelcomeSection.js
import { FaArrowRight } from 'react-icons/fa';
import Accordian from './AccordianText'

const WelcomeSection = () => {
  return (
    <div className="mx-auto py-8 md:py-28 about-section" id='about-section'>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-cyan-500">
      Newest IT Services Provider <br /> Company in India.
      </h1>
      <h2 className="text-black text-2xl md:text-2xl mb-8 font-bold text-center">
        Largest IT Services Provider Company in India.
      </h2>
      <p className="text-black text-lg md:text-xl mb-16">
      IT Digitals was incorporated, in 2023, with the underlying objectives of
      honesty, transparency, accountability and sublime business ethics. Since
      then, it has carved out a niche in the market and established itself as the
      Newest solution provider and rapidly expanding company.IT Digitals, over
      the years, has built a powerful portfolio of products and services under
      the leadership of Mr. Manoj K Singh, the Managing Director & CEO.
      </p>
      <div className='flex justify-center'>
        <Accordian/>
      </div>
    </div>
  );
};

export default WelcomeSection;
