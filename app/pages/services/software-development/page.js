import Image from 'next/image';
import Img4 from '../../../../public/softwareDevelopment.png'; // Adjust the path as needed

const SoftwareDevelopment = () => {
  return (
    <div className="container mx-auto py-8 px-4  mt-40 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full">
          <Image src={Img4} alt="Software Development" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">Software Development</h1>
         
          <p className="mt-4 text-xl">
          Software development is the process of designing, creating, testing, and
          maintaining computer programs and applications. Software development is a
          part of our daily life in one form or another. Businesses around the world can
          benefit from it, and smartphone apps gain strength.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
