'use client';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import { FaCode, FaMobileAlt, FaCog, FaPaintBrush, FaChartLine, FaTools } from 'react-icons/fa';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <FaCode size={40} className="text-teal-500" />,
      title: 'Web Design & Development',
      description: 'Stunning, responsive websites optimized for performance and SEO.',
    },
    {
      icon: <FaMobileAlt size={40} className="text-teal-500" />,
      title: 'Mobile App Development',
      description: 'Intuitive iOS and Android apps with seamless user experiences.',
    },
    {
      icon: <FaCog size={40} className="text-teal-500" />,
      title: 'Website Maintenance',
      description: 'Reliable updates and security for your digital presence.',
    },
    {
      icon: <FaPaintBrush size={40} className="text-teal-500" />,
      title: 'UI/UX Design & Branding',
      description: 'Memorable designs that elevate your brand identity.',
    },
    {
      icon: <FaChartLine size={40} className="text-teal-500" />,
      title: 'Digital Marketing',
      description: 'Strategic campaigns to boost engagement and growth.',
    },
    {
      icon: <FaTools size={40} className="text-teal-500" />,
      title: 'Custom Business Solutions',
      description: 'Tailored software to optimize your operations.',
    },
  ];

  const handleCardInteraction = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state on mobile
  };

  return (
    <section className="bg-gradient-to-b from-dark-950 to-dark-900 py-16 md:py-24 relative overflow-hidden">
      {/* Starry Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_70%)] opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how we can elevate your business with our expert services.
          </p>
        </div>
        {/* Desktop: Hexagonal Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-4 auto-rows-min">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group ${index % 2 === 1 ? 'mt-16' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card
                className={`bg-dark-900/50 backdrop-blur-lg border border-teal-500/50 bg-gradient-to-br from-teal-500/20 to-transparent transition-all duration-300 flex items-center justify-center overflow-hidden w-56 h-64 mx-auto ${
                  hoveredIndex === index
                    ? 'scale-105 shadow-[0_0_15px_rgba(20,184,166,0.5)]'
                    : 'opacity-90'
                }`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
                padding="none"
                hoverEffect={false}
              >
                <div className="flex flex-col items-center justify-center text-center p-10 gap-8">
                  <div className="p-4 bg-dark-1000 rounded-full border border-teal-500/50 mt-4 mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group cursor-pointer"
              onClick={() => handleCardInteraction(index)}
            >
              <Card
                className={`bg-dark-900/50 backdrop-blur-lg border border-teal-500/50 bg-gradient-to-br from-teal-500/20 to-transparent transition-all duration-300 w-full max-w-sm h-64 mx-auto flex items-center justify-center overflow-hidden ${
                  expandedIndex === index
                    ? 'shadow-[0_0_15px_rgba(20,184,166,0.5)]'
                    : 'opacity-90'
                }`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
                padding="none"
                hoverEffect={false}
              >
                <div className="flex flex-col items-center justify-center text-center p-10 gap-8">
                  <div className="p-4 bg-dark-1000 rounded-full border border-teal-500/50 mt-4 mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p
                    className={`text-gray-300 text-sm transition-all duration-300 ${
                      expandedIndex === index ? 'opacity-100' : 'opacity-0 h-0'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}