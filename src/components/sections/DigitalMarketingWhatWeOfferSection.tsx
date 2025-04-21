'use client';
import { useEffect } from 'react';
import { FaSearch, FaBullhorn, FaChartLine } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function DigitalMarketingWhatWeOfferSection() {
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
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic with our proven SEO strategies.',
      icon: <FaSearch className="w-12 h-12 text-teal-500 mb-4 service-icon" />,
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience and build your brand with targeted social media campaigns.',
      icon: <FaBullhorn className="w-12 h-12 text-teal-500 mb-4 service-icon" />,
    },
    {
      title: 'PPC Advertising',
      description: 'Maximize your ROI with expertly managed pay-per-click advertising campaigns.',
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