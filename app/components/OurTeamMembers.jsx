// pages/index.js
import React from 'react';
import Head from 'next/head';
import TeamMemberCard from './OurTeamMembersCard';
import { FaUserCircle } from 'react-icons/fa';

const Home = () => {
  const teamMembers = [
    {
      image: FaUserCircle,
      name: 'Ankit Jaiswal',
      profession: 'Sales Marketing',
    },
    {
      image: FaUserCircle,
      name: 'Gunjan Saxena',
      profession: 'Human Resources',
    },
    {
      image: FaUserCircle,
      name: 'Md Asif',
      profession: 'Full Stack Web Developer'
    },
    {
      image: FaUserCircle,
      name: 'Manoj K Singh',
      profession: 'CEO',
    }
  ];

  return (
    <div>
      <Head>
        <title>ITDigitals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="team-members">
        <h1 className="text-4xl font-bold text-center mb-10">Our Team Members</h1>
        <div className="flex flex-wrap justify-center xl:gap-8 gap-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              profession={member.profession}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
