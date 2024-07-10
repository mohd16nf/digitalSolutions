import Image from 'next/image';
import Img3 from '../../../../public/cloudServices.jpg'; // Adjust the path as needed

const CloudServices = () => {
  return (
    <div className="container mx-auto py-8 mt-40 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full">
          <Image src={Img3} alt="Cloud Services" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">Cloud Services</h1>

          <p className="mt-4 text-xl">
          Make use of our cloud services to accelerate your hybrid cloud migration, which will save costs and lead
          to higher productivity, sustainability, and a shorter time to market. Our custom created IT Digitals
          Consulting Cloud Accelerator platform powers our cloud services. Integrating generative AI with IT
          automation can expedite that process even more.
          You can create cloud-native applications, automate IT, update them for a higher return on investment,
          and manage them at scale on the platform of your choice thanks to architectural freedom and
          exponential technologies like generative AI.
                    </p>
        </div>
      </div>
    </div>
  );
};

export default CloudServices;
