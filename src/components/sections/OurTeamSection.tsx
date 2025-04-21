'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function OurTeamSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Hover animations for team member cards
    const teamCards = gsap.utils.toArray('.team-card') as HTMLElement[];
    if (teamCards.length > 0) {
      teamCards.forEach((card, index) => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: '0 0 15px rgba(20, 184, 166, 0.5)',
          duration: 0.3,
          delay: index * 0.1,
        });
      });
    }
  }, []);

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Lead Developer',
      image: '/images/team/john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      image: '/images/team/jane-smith.jpg',
    },
    {
      name: 'Mike Johnson',
      role: 'Project Manager',
      image: '/images/team/mike-johnson.jpg',
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-[10%] py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card bg-dark-900 rounded-lg p-6 shadow-lg text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}