// components/FeaturedProjects.js
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProjects = () => {
  return (
    <div className="bg-[#17a2b8] py-24 mt-8">
      <div className="md:container mx-auto px-4 md:px-16">
        <h2 className="text-3xl text-blue-500 mb-8 text-center">Featured Projects</h2>
        <h1 className="text-5xl font-bold mb-20 text-white text-center">We transmute our genuine proposition into technology.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="relative group overflow-hidden bg-white rounded-lg shadow-lg h-[450px]">
            <div className="absolute inset-0">
              <Image
                src="/Picture9.jpg"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-[-5px]"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-400 transition-colors duration-300">
              <h3 className="text-3xl font-semibold mb-2 group-hover:text-white text-center">Project Cloud storage </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden bg-white rounded-lg shadow-lg h-[450px]">
            <div className="absolute inset-0">
              <Image
                src="/softwareDevelopment3.jpg"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-[-5px]"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-400 transition-colors duration-300">
              <h3 className="text-3xl font-semibold mb-2 group-hover:text-white text-center">Project Software Development</h3>
     
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden bg-white rounded-lg shadow-lg h-[450px]">
            <div className="absolute inset-0">
              <Image
                src="/ip-cctv-camera.jpg"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-[-5px]"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-400 transition-colors duration-300">
              <h3 className="text-3xl font-semibold mb-2 group-hover:text-white text-center">IP CCTV Camera</h3>
        
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group overflow-hidden bg-white rounded-lg shadow-lg h-[450px]">
            <div className="absolute inset-0">
              <Image
                src="/Picture4.jpg"
                alt="Image 4"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-[-5px]"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-400 transition-colors duration-300">
              <h3 className="text-3xl font-semibold mb-2 group-hover:text-white text-center">Data Center Infrustucture</h3>
             
            </div>
          </div>
        </div>

        {/* Button below the cards */}
        <div className="mt-16 flex justify-center">
          <Link href="/" passHref>
            <div className="bg-black text-white py-5 px-10 text-xl flex items-center rounded cursor-pointer">
              <span>View More Projects</span> <span className="ml-2">&#8594;</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
