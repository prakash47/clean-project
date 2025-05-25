'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function OurTeamSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Hover animations for team member cards
    const teamCards = gsap.utils.toArray('.team-card') as HTMLElement[];
    if (teamCards.length > 0) {
      teamCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: index * 0.2, ease: 'power2.out' }
        );
        // Hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 0 15px rgba(20, 184, 166, 0.5)',
            duration: 0.3,
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 0 0 rgba(20, 184, 166, 0)',
            duration: 0.3,
          });
        });
      });
    }
  }, []);

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Lead Developer',
      bio: 'John leads our development team with over 10 years of experience in building scalable web and mobile applications.',
      image: 'https://placehold.co/200x200.webp?text=John+Doe',
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      bio: 'Jane crafts intuitive and visually stunning designs, ensuring exceptional user experiences for our clients.',
      image: 'https://placehold.co/200x200.webp?text=Jane+Smith',
    },
    {
      name: 'Mike Johnson',
      role: 'Project Manager',
      bio: 'Mike ensures seamless project delivery, keeping our team aligned and projects on track for success.',
      image: 'https://placehold.co/200x200.webp?text=Mike+Johnson',
    },
  ];

  // Structured data for team members
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com/about-us',
    'member': teamMembers.map((member) => ({
      '@type': 'Person',
      'name': member.name,
      'jobTitle': member.role,
      'description': member.bio,
      'image': member.image,
      'worksFor': {
        '@type': 'Organization',
        'name': 'Intention Infoservice',
      },
    })),
  };

  return (
    <section className="container mx-auto px-4 md:px-[10%] py-12">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Expert Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card bg-dark-900 rounded-lg p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88v5nPQAH8wL5zBLqZQAAAABJRU5ErkJggg=="
            />
            <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
            <p className="text-gray-400 mb-2">{member.role}</p>
            <p className="text-gray-500 text-sm">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}