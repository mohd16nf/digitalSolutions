import Image from 'next/image';
import Img5 from '../../../../public/sliderImg4.jpg'; // Adjust the path as needed

const IOTVirtualisation = () => {
  return (
    <div className="container mx-auto py-8 px-4  mt-40 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full">
          <Image src={Img5} alt="IoT and Virtualisation" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">Online Remote Support</h1>
          
          <p className="mt-4 text-xl">
          Server virtualization is the process of dividing a real server into several virtual servers, also referred to as virtual private
          servers. Virtual private servers have independent operation capabilities.
          Server virtualization is simply the process of separating the operating system, memory, and processors from the actual
          physical server in order to allow system administrators to run multiple virtualized servers on a single physical server. This
          definition of virtualization is similar to the other definitions we've covered so far.

          To do this, an administrator uses specialized software to partition the physical server's resources into multiple virtual
          machines (VMs), also called virtual private servers. These virtual environments are also known as guests, instances, and
          containers.
          In IT infrastructure, the concept of server virtualization is widely used to cut costs by optimizing the utilization of current
          resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IOTVirtualisation;
