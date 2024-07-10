import Image from 'next/image';
import Img6 from '../../../../public/Picture4.jpg'; // Adjust the path as needed

const DataScienceAnalytics = () => {
  return (
    <div className="container mx-auto py-8 px-4  mt-40 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full">
          <Image src={Img6} alt="Data Science and Analytics" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">NETWORK AND SECURITY SOLUTIONS</h1>
          
          <p className="mt-4 text-xl">
          With features like network security, application visibility and control,
          scalability, simpler management, flexible deployment, regulatory compliance,
          and all-inclusive support, IT Digitals is built to safeguard your security
          foundation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataScienceAnalytics;
