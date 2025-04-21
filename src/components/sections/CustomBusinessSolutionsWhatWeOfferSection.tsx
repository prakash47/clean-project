'use client';
import { useEffect, useState } from 'react';
import { FaCode, FaCogs, FaChartLine } from 'react-icons/fa';

// Define the GSAP type based on the entire module
type GSAP = typeof import('gsap');

export default function CustomBusinessSolutionsWhatWeOfferSection() {
  const [gsap, setGsap] = useState<GSAP | null>(null);

  useEffect(() => {
    import('gsap').then((module) => {
      const gsapInstance = module; // The entire module is the GSAP instance
      setGsap(gsapInstance);

      // Ensure elements exist before applying animations
      const serviceIcons = gsapInstance.utils.toArray('.service-icon') as HTMLElement[];
      if (gsapInstance && serviceIcons.length > 0) {
        serviceIcons.forEach((icon, index) => {
          gsapInstance.to(icon, {
            scale: 1.2,
            boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
            duration: 0.3,
            delay: index * 0.1,
          });
        });
      }
    });
  }, []);

  const offerings = [
    {
      title: 'Tailored Software Development',
      description: 'We build custom software solutions that align with your unique business needs, ensuring scalability and efficiency.',
      icon: <FaCode className="w-12 h-12 text-teal-500 mb-4 service-icon" />,
    },
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity and reduce operational costs.',
      icon: <FaCogs className="w-12 h-12 text-teal-500 mb-4 service-icon" />,
    },
    {
      title: 'Data-Driven Insights',
      description: 'Leverage data analytics to gain actionable insights and make informed business decisions.',
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