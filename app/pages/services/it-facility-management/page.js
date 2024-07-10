import Image from 'next/image';
import Img1 from '../../../../public/it-services2.jpg'; // Adjust the path as needed

const ITFacilityManagement = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-12">
      <div className="flex flex-col md:flex-row  mt-40 items-center">
        <div className="md:w-1/2 w-full">
          <Image src={Img1} alt="IT Facility Management Services" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">IT Facility Management Services</h1>
         
          <p className="mt-4 text-xl">
          Our IT facility management services are made to ensure seamless service delivery so that
          customers can concentrate on their main business and cut operating expenses by hiring a
          reliable partner like us to handle both simple and sophisticated facility management chores. This
          would enable the improvement of the IT infrastructure to be the main focus. For example, the
          tools and apps that are already accessible can be immediately deployed to achieve operational
          efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ITFacilityManagement;
