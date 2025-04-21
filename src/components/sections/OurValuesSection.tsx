'use client';
import { useEffect } from 'react';
import { FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function OurValuesSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Hover animations for value icons
    const valueIcons = gsap.utils.toArray('.value-icon') as HTMLElement[];
    if (valueIcons.length > 0) {
      valueIcons.forEach((icon, index) => {
        gsap.to(icon, {
          scale: 1.2,
          boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
          duration: 0.3,
          delay: index * 0.1,
        });
      });
    }
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace creativity and innovation to deliver cutting-edge solutions.',
      icon: <FaLightbulb className="w-12 h-12 text-teal-500 mb-4 value-icon" />,
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to achieve shared success.',
      icon: <FaHandshake className="w-12 h-12 text-teal-500 mb-4 value-icon" />,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project we undertake.',
      icon: <FaRocket className="w-12 h-12 text-teal-500 mb-4 value-icon" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-[10%] py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-dark-900 rounded-lg p-6 shadow-lg text-center">
            {value.icon}
            <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}