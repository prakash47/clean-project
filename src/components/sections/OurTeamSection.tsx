'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function OurTeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'John has over 15 years of experience in digital innovation, leading Intention Infoservice to new heights.',
      image: '/images/team/john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      bio: 'Jane specializes in creating stunning UI/UX designs that captivate and engage users.',
      image: '/images/team/jane-smith.jpg',
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      bio: 'Mike is a coding wizard, ensuring our web and mobile solutions are top-notch.',
      image: '/images/team/mike-johnson.jpg',
    },
    {
      name: 'Sarah Lee',
      role: 'Marketing Director',
      bio: 'Sarah drives our digital marketing strategies, helping clients grow their online presence.',
      image: '/images/team/sarah-lee.jpg',
    },
  ];

  useEffect(() => {
    // Hover animations for team member cards
    gsap.utils.toArray('.team-card').forEach((card, index) => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: '0 0 15px rgba(20, 184, 166, 0.5)',
        duration: 0.3,
        paused: true,
        ease: 'power2.out',
        onStart: () => setHoveredIndex(index),
        onReverseComplete: () => setHoveredIndex(null),
      });
    });
  }, []);

  const handleInteraction = (index: number) => {
    const card = document.querySelectorAll('.team-card')[index];
    const animation = gsap.getTweensOf(card)[0];
    if (animation) {
      if (hoveredIndex === index) {
        animation.reverse();
      } else {
        animation.play();
      }
    }
  };

  return (
    <section className="bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Meet the talented individuals behind Intention Infoservice.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card bg-dark-800 p-6 rounded-xl border border-gray-600/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleInteraction(index)}
              onMouseLeave={() => handleInteraction(index)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                  width="64"
                  height="64"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-teal-500">{member.role}</p>
                </div>
              </div>
              <p className="text-base text-gray-400 mt-4">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}