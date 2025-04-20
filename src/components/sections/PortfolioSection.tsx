'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'Business Website: Tech Startup',
      description: 'Designed a responsive business website with SEO optimization and lead generation features. Result: 40% increase in organic traffic.',
      image: '/images/portfolio/business-website.webp',
      alt: 'Custom business website design for a tech startup',
      link: '#',
    },
    {
      title: 'E-Commerce Platform: Retail Brand',
      description: 'Built a custom e-commerce platform with Shopify integration and mobile-first design. Result: 25% boost in conversions.',
      image: '/images/portfolio/ecommerce-platform.webp',
      alt: 'Custom e-commerce platform design for a retail brand',
      link: '#',
    },
    {
      title: 'Custom Web App: Healthcare Provider',
      description: 'Developed a secure web application for appointment booking with intuitive UX. Result: Streamlined operations and improved user satisfaction.',
      image: '/images/portfolio/healthcare-web-app.webp',
      alt: 'Secure web application for a healthcare provider',
      link: '#',
    },
  ];

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
            Our Work Speaks for Itself
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our web design and development projects that have transformed businesses.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our portfolio showcases our expertise in custom web design, e-commerce development, and web app creation. Each project is a testament to our commitment to quality, performance, and client success.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-dark-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
                width="600"
                height="300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-base text-gray-400 mb-4">{project.description}</p>
                <Link href={project.link} className="text-teal-500 hover:underline">
                  View Live Site
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}