import Image from 'next/image';
import Img2 from '../../../../public/sliderImg4.jpg'; // Adjust the path as needed

const DigitalSolutions = () => {
  return (
    <div className="container mx-auto py-8 px-4  mt-40 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full">
          <Image src={Img2} alt="Digital Solutions and Software Services" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">Digital Solutions and Software Services</h1>
          
          <p className="mt-4 text-xl">
          IT Digitals creates new value for clients in areas including product design, manufacturing support, asset
          management, training, and maintenance by fusing engineering know-how with digital technology. IoT,
          machine learning, artificial intelligence, and augmented and virtual reality are some of our digital
          capabilities.

          should support clients in using digital technology to enhance the way they develop, construct, and
          manage their goods and services. We provide technology-driven skills to address important issues,
          ranging from digital reality to edge computing, cloud integration to design thinking, and visualization
          tools to digital reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalSolutions;
