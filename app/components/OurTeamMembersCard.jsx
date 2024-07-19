// components/TeamMemberCard.js
import React from 'react';
import Link from 'next/link';

const TeamMemberCard = ({ image: Icon, name, profession }) => {
  return (
    <div className="md:w-[250px] h-[300px] rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
      <div className="flex justify-center py-6 " >
        <Icon size={100} className='bg-[#17a2b8] rounded-full' />
      </div>
      <div className="px-6 py-4 text-center">
        <Link href="#">
          <div className="font-bold text-2xl mb-2 hover:text-blue-700">{name}</div>
        </Link>
        <p className="text-gray-500 text-xl font-bold">{profession}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
