// components/TeamMemberCard.js
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const TeamMemberCard = ({ image, name, profession }) => {
  return (
    <div className="max-w-sm h-[400px] rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
      <Image className="w-[290px] h-[300px]" src={image} alt={name} />
      <div className="px-6 py-4">
       <Link href='#' className='hover:text-blue-700'><div className="font-bold text-2xl mb-2 ">{name}</div></Link> 
        <p className="text-gray-500 text-xl font-bold">{profession}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
