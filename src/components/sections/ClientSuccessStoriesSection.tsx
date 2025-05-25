'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function ClientSuccessStoriesSection() {
  const successStories = [
    {
      title: 'E-Commerce Platform for Retail Brand',
      description: 'Increased online sales by 40% in 6 months with a custom e-commerce solution.',
      link: '/case-studies/ecommerce-retail',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing E-Commerce Success Story">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,40 Q30,45 40,40" fill="none" stroke="#14B8A6" strokeWidth="2" />
          <rect x="15" y="15" width="15" height="20" fill="#0F172A" rx="3" />
        </svg>
      ),
    },
    {
      title: 'Business Website for Tech Startup',
      description: 'Improved lead generation by 50% with a modern, SEO-optimized website.',
      link: '/case-studies/business-tech',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Business Website Success Story">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <rect x="15" y="15" width="30" height="20" fill="#0F172A" rx="3" />
          <circle cx="30" cy="45" r="5" fill="#14B8A6" />
        </svg>
      ),
    },
    {
      title: 'Web App for Healthcare Provider',
      description: 'Streamlined patient bookings with a custom web application, reducing wait times by 30%.',
      link: '/case-studies/web-app-healthcare',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Web App Success Story">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M25,25 L35,35 M25,35 L35,25" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const handleMouseEnter = (index: number) => {
    const card = document.querySelectorAll('.story-card')[index];
    gsap.killTweensOf(card);
    gsap.to(card, {
      y: -10,
      backgroundColor: '#1A2526',
      shadow: 'xl',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = document.querySelectorAll('.story-card')[index];
    gsap.killTweensOf(card);
    gsap.to(card, {
      y: 0,
      backgroundColor: '#0F172A',
      shadow: 'lg',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleFocus = (index: number) => {
    handleMouseEnter(index);
  };

  const handleBlur = (index: number) => {
    handleMouseLeave(index);
  };

  // Structured data for success stories
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: successStories.map((story, index) => ({
      '@type': 'CreativeWork',
      position: index + 1,
      name: story.title,
      description: story.description,
      url: `https://intentioninfoservice.com${story.link}`,
    })),
  };

  return (
    <section id="client-success-stories" className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24 relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Subtle Grain Texture with Animation */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            See How We’ve Helped Businesses Thrive
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our proven strategies have delivered measurable results for clients across industries. Explore a few of our success stories.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {successStories.map((story, index) => (
            <motion.div
              key={story.title}
              className="story-card bg-dark-950 rounded-lg p-6 shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              tabIndex={0}
              aria-describedby={`story-description-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center">{story.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                  <p id={`story-description-${index}`} className="text-lg text-gray-400 mb-4">{story.description}</p>
                  <a
                    href={story.link}
                    className="text-teal-500 hover:text-teal-400 font-semibold flex items-center gap-2"
                  >
                    Learn More <FaArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            variant="primary"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/case-studies"
          >
            See More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
}