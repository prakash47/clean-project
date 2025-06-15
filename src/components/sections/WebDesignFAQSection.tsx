'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronDown, FaChevronUp, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

export default function WebDesignFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does a professional website design and development cost?',
      answer: 'Our web design and development costs vary based on project complexity and requirements. We provide detailed quotes after understanding your specific needs, including features, design complexity, and timeline. All projects include responsive design, SEO optimization, and 3 months of free support.',
      category: 'Pricing',
    },
    {
      question: 'How long does it take to design and develop a website?',
      answer: 'Typical website projects take 8-12 weeks from start to launch, depending on complexity. Simple business websites (4-6 weeks), e-commerce sites (8-10 weeks), and custom web applications (10-16 weeks). Our process includes discovery (1-2 weeks), design (2-3 weeks), development (3-6 weeks), testing (1-2 weeks), and launch. We provide detailed timelines and regular updates throughout the project.',
      category: 'Timeline',
    },
    {
      question: 'Do you provide ongoing website maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance packages. This includes security updates, performance monitoring, content updates, backup services, uptime monitoring, and technical support. We also provide 24/7 emergency support, regular performance reports, and proactive optimization. All new websites include 3 months of free maintenance.',
      category: 'Support',
    },
    {
      question: 'Will my website be mobile-friendly and responsive?',
      answer: 'Absolutely! All our websites are built with a mobile-first approach and are fully responsive across all devices. We test on smartphones, tablets, and desktops to ensure perfect functionality and user experience. Our responsive designs automatically adapt to different screen sizes, and we optimize loading speeds for mobile users. Mobile responsiveness is included in all our packages.',
      category: 'Design',
    },
    {
      question: 'Do you optimize websites for search engines (SEO)?',
      answer: 'Yes, SEO optimization is built into every website we create. This includes technical SEO (fast loading, clean code, proper structure), on-page SEO (meta tags, headers, schema markup), image optimization, mobile optimization, and Core Web Vitals optimization. We also offer advanced SEO services including keyword research, content strategy, and ongoing SEO maintenance for better search rankings.',
      category: 'SEO',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Yes, we specialize in website redesigns and modernization. We analyze your current site, identify improvement opportunities, and create a modern, high-performing website while preserving your SEO rankings and important content. Redesign projects typically cost 20-30% less than new builds and include content migration, URL redirects, and SEO preservation strategies.',
      category: 'Redesign',
    },
    {
      question: 'What technologies and platforms do you use?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, WordPress, Shopify, and custom PHP/Python solutions. For hosting, we recommend reliable platforms like AWS, Vercel, or premium hosting providers. We choose technologies based on your specific needs, scalability requirements, and budget. All our solutions are future-proof and easily maintainable.',
      category: 'Technology',
    },
    {
      question: 'Do you provide e-commerce website development?',
      answer: 'Yes, we develop comprehensive e-commerce solutions using platforms like Shopify, WooCommerce, or custom-built systems. Our e-commerce websites include product catalogs, shopping carts, secure payment gateways, inventory management, order tracking, and mobile optimization. We also integrate with popular payment processors like Stripe, PayPal, and Razorpay for Indian businesses.',
      category: 'E-commerce',
    },
    {
      question: 'Will I be able to update my website content myself?',
      answer: 'Yes, we build user-friendly content management systems (CMS) that allow you to easily update text, images, blog posts, and other content without technical knowledge. We provide comprehensive training and documentation. For WordPress sites, you get an intuitive admin panel. For custom solutions, we create simple, branded admin interfaces tailored to your needs.',
      category: 'CMS',
    },
    {
      question: 'Do you provide website hosting and domain services?',
      answer: 'We can help you choose and set up reliable hosting and domain services, though we recommend you maintain ownership of these assets. We work with trusted providers and can manage the technical setup. For hosting, we recommend solutions based on your traffic and performance needs. We also provide guidance on domain selection, SSL certificates, and email setup.',
      category: 'Hosting',
    },
    {
      question: 'What makes your web design services different from competitors?',
      answer: 'Our unique approach combines strategic planning, modern design, technical excellence, and ongoing support. We have 10+ years of experience, and a 4.9/5 client satisfaction rating. Unlike many agencies, we focus on business results, not just aesthetics. Every website includes SEO optimization, performance optimization, security measures, and comprehensive testing.',
      category: 'Difference',
    },
    {
      question: 'Do you provide website analytics and performance reports?',
      answer: 'Yes, we set up comprehensive analytics including Google Analytics, Search Console, and performance monitoring tools. We provide monthly reports covering traffic, user behavior, conversion rates, page speed, and SEO performance. Our reports include actionable insights and recommendations for continuous improvement. Advanced analytics and custom reporting are available with our maintenance packages.',
      category: 'Analytics',
    },
  ];

  const categories = ['All', 'Pricing', 'Timeline', 'Support', 'Design', 'SEO', 'Technology'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Enhanced structured data for FAQ
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative bg-dark-900 py-16 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 160, 227, 0.2), rgba(57, 49, 133, 0.2))',
            animation: 'wave 10s linear infinite',
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 160, 227, 0.2), rgba(57, 49, 133, 0.2))',
            animation: 'wave 15s linear infinite reverse',
          }}
        />
        <style>
          {`
            @keyframes wave {
              0% { background-position: 0% 0%; }
              100% { background-position: 200% 200%; }
            }
          `}
        </style>
      </div>

      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions About Web Design & Development
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Everything You Need to Know About Our Web Design Services
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Get answers to the most common questions about our web design and development process, pricing, timelines, and services. Can't find what you're looking for? Contact us for personalized assistance.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-blue text-white shadow-[0_0_10px_rgba(0,160,227,0.5)]'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                className="backdrop-blur-sm bg-white/10 rounded-xl border border-[rgba(0,160,227,0.3)] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start space-x-4">
                    <FaQuestionCircle className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white pr-8">
                        {faq.question}
                      </h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-brand-blue/20 text-brand-blue rounded-full text-xs font-medium">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === index ? (
                      <FaChevronUp className="w-5 h-5 text-brand-blue" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-brand-blue" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="flex items-start space-x-4">
                          <FaCheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 p-8 backdrop-blur-sm bg-white/5 rounded-xl border border-[rgba(0,160,227,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions About Our Web Design Services?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our team is here to help! Get personalized answers to your specific questions and receive a custom quote for your web design and development project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
                          size="lg"
                          className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,160,227,0.5)]"
                          icon={<FaArrowRight />}
                          iconPosition="right"
                          href="/contact-us"
                          ariaLabel="Get your free web design consultation and quote"
                        >
                          <FaQuestionCircle className="mr-2" />
              Ask Your Question
                        </Button>
          </div>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          className="text-center mt-8 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="mb-2">
            <strong className="text-white">Phone:</strong> +91 70215 39267| 
            <strong className="text-white"> Email:</strong> contact@intentioninfoservice.com
          </p>
          <p className="text-base">
            Available Monday to Friday, 9:00 AM to 6:00 PM IST | Emergency support available 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}

