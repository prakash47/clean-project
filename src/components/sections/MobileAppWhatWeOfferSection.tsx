'use client';
import { useEffect } from 'react';
import { FaMobileAlt, FaCode, FaChartLine } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function MobileAppWhatWeOfferSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const serviceIcons = gsap.utils.toArray('.service-icon') as HTMLElement[];
    if (serviceIcons.length > 0) {
      serviceIcons.forEach((icon, index) => {
        gsap.to(icon, {
          scale: 1.2,
          boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
          duration: 0.3,
          delay: index * 0.1,
        });
      });
    }
  }, []);

  const offerings = [
    {
      title: 'Custom App Development',
      description: 'We create tailored mobile apps to meet your business needs, ensuring a seamless user experience.',
      icon: <FaMobileAlt className="w-12 h-12 text-teal-500 mb-4 service-icon" />,
    },
    {
      title: 'Cross-Platform Solutions',
      description: 'Develop apps that work seamlessly on both iOS and Android using modern frameworks.',
      icon: <FaCode className="w-12 h-12 text-teal-500 mb-4 service-icon" />,
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your mobile apps for speed and efficiency, ensuring a smooth user experience.',
      icon: <FaChartLine className="w-12 h-12 text-teal-500 mb-4 service-icon" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-[10%] py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offerings.map((offering, index) => (
          <div key={index} className="bg-dark-900 rounded-lg p-6 shadow-lg text-center">
            {offering.icon}
            <h3 className="text-xl font-semibold text-white mb-2">{offering.title}</h3>
            <p className="text-gray-400">{offering.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}