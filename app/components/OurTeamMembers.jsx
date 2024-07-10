// pages/index.js
import IMG1 from '../../public/ankit.jpg'
import IMG2 from '../../public/gunjanSaxena.jpg'
import IMG3 from '../../public/asif.jpg'
import IMG4 from '../../public/manoj.jpg'
import TeamMemberCard from './OurTeamMembersCard'

function Home() {
  const teamMembers = [
    {
      image: IMG1,
      name: 'Ankit Kumar',
      profession: 'Sales Department',
    },
    {
      image: IMG2,
      name: 'Gunjan Saxena',
      profession: 'Human resources',
    },
    {
      image: IMG3,
      name: 'Md Asif',
      profession: 'Full stack Web Developer',
    },
    {
      image: IMG4,
      name: 'Manoj K Singh',
      profession: 'CEO',
    }
  ];

  return (
    <div>
      <div>
      <title>Our Team</title>
      <link rel="icon" href="/favicon.ico" />
      </div>
        
      

      <main className="py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Our Team Members</h1>
        <div className="flex flex-wrap justify-center gap-12">
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