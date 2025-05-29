'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaChartLine, FaPen, FaChartBar, FaUsers, FaChartPie } from 'react-icons/fa';

export default function DigitalMarketingProcessSection() {
  const steps = [
    {
      title: 'Discovery & Strategy',
      description: 'We analyze your business goals, audience, and competitors to craft a tailored digital marketing process for 2025 success.',
      icon: <FaSearch className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Campaign Setup',
      description: 'Set up SEO strategies, PPC campaigns, social media campaigns, and more, aligning with your online growth objectives.',
      icon: <FaChartLine className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Content Creation',
      description: 'Produce high-quality content creation, including blog posts, videos, and social media content, to engage your audience.',
      icon: <FaPen className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Affiliate & Influencer Outreach',
      description: 'Leverage affiliate marketing and influencer campaigns to expand your brand reach and drive traffic.',
      icon: <FaUsers className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Execution & Optimization',
      description: 'Execute campaigns with real-time optimization using data-driven insights to maximize conversions.',
      icon: <FaChartBar className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Reporting & Insights',
      description: 'Deliver detailed analytics and reporting to track progress, measure ROI, and refine strategies for 2025.',
      icon: <FaChartPie className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    "serviceType": "Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Digital Avenue",
        "addressLocality": "Tech City",
        "postalCode": "TC 12345"
      }
    },
    "description": "Our 2025 digital marketing process combines SEO strategies, PPC campaigns, content creation, affiliate marketing, influencer campaigns, and data-driven insights to drive online growth, engagement, and conversions.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Process",
      "itemListElement": steps.map((step, index) => ({
        "@type": "Service",
        "position": index + 1,
        "name": step.title,
        "description": step.description,
      })),
    },
  };

  return (
    <section className="relative bg-dark-900 py-16 md:py-24 overflow-hidden">
      <div className="w-full px-[10%] relative z-10">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our 2025 Digital Marketing Process
          </motion.h2>
          <motion.p
            className="text-lg text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A Strategic Approach to Drive Traffic, Engagement, and Conversions
          </motion.p>
          <motion.p
            className="text-base text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our digital marketing process ensures campaign success in 2025 by combining SEO strategies, content creation, data-driven insights, and more to deliver results that drive online growth and conversions.
          </motion.p>
        </div>
        {/* Vertical Process Flow with Animated Cards */}
        <div className="relative flex flex-col items-center">
          {/* Connecting Dashed Line */}
          <svg className="absolute left-8 top-0 h-full w-16" aria-hidden="true">
            <line
              x1="40"
              y1="0"
              x2="40"
              y2="100%"
              stroke="#00a0e3"
              strokeWidth="2"
              strokeDasharray="8,8"
            />
          </svg>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-[rgba(0,160,227,0.3)] hover:border-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300 flex items-start w-full max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && console.log(`Selected ${step.title}`)}
            >
              <div className="absolute left-0 transform -translate-x-1/2 bg-dark-900 rounded-full w-16 h-16 flex items-center justify-center border border-brand-blue">
                <span className="text-xl font-semibold text-white">{index + 1}</span>
              </div>
              <div className="flex items-center space-x-4 ml-12">
                <div className="w-12 h-12 flex items-center justify-center">{step.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-base text-gray-300">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}