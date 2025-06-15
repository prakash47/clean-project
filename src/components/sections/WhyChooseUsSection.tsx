'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { 
  FaArrowRight, FaStar, FaUsers, FaRocket, FaShieldAlt, FaClock, FaCheckCircle, FaAward, FaChartLine,
  FaDesktop, FaMobileAlt, FaCode, FaSearch, FaTools, FaHeadset, FaGlobe, FaTachometerAlt
} from 'react-icons/fa';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: '10+ Years of Proven Expertise',
      description: 'Our experienced team has successfully delivered many web projects across diverse industries, from startups to enterprise-level businesses, ensuring quality and reliability.',
      icon: <FaAward className="w-8 h-8 text-brand-blue mb-4" />,
      stats: '150+ Projects Delivered',
      highlight: 'Industry Leader',
    },
    {
      title: '4.9/5 Client Satisfaction Rating',
      description: 'We maintain exceptional client satisfaction through transparent communication, on-time delivery, and results that exceed expectations, building long-term partnerships.',
      icon: <FaStar className="w-8 h-8 text-brand-blue mb-4" />,
      stats: '4.9/5 Average Rating',
      highlight: 'Client Focused',
    },
    {
      title: 'Modern Technology Stack',
      description: 'We use cutting-edge technologies including React, Next.js, Node.js, and cloud platforms to build fast, secure, and scalable websites that perform exceptionally.',
      icon: <FaCode className="w-8 h-8 text-brand-blue mb-4" />,
      stats: 'Latest Tech Stack',
      highlight: 'Future-Ready',
    },
    {
      title: 'SEO & Performance Optimized',
      description: 'Every website we build is optimized for search engines and performance, ensuring fast loading times, high Core Web Vitals scores, and better search rankings.',
      icon: <FaSearch className="w-8 h-8 text-brand-blue mb-4" />,
      stats: '95+ Lighthouse Scores',
      highlight: 'SEO Optimized',
    },
    {
      title: 'Mobile-First Responsive Design',
      description: 'All our websites are designed mobile-first and tested across devices to ensure perfect functionality and user experience on smartphones, tablets, and desktops.',
      icon: <FaMobileAlt className="w-8 h-8 text-brand-blue mb-4" />,
      stats: '100% Mobile Responsive',
      highlight: 'Device Agnostic',
    },
    {
      title: 'Comprehensive Support & Maintenance',
      description: 'We provide ongoing support, security updates, performance monitoring, and maintenance services to keep your website secure, updated, and performing optimally.',
      icon: <FaHeadset className="w-8 h-8 text-brand-blue mb-4" />,
      stats: '24/7 Support Available',
      highlight: 'Always Available',
    },
    {
      title: 'Fast Turnaround Times',
      description: 'Our streamlined process and experienced team enable us to deliver high-quality websites efficiently, typically completing projects 20% faster than industry average.',
      icon: <FaClock className="w-8 h-8 text-brand-blue mb-4" />,
      stats: '8-12 Week Delivery',
      highlight: 'Quick Delivery',
    },
    {
      title: 'Security & Compliance First',
      description: 'We implement robust security measures, SSL certificates, regular backups, and ensure compliance with data protection regulations to keep your website secure.',
      icon: <FaShieldAlt className="w-8 h-8 text-brand-blue mb-4" />,
      stats: 'Bank-Level Security',
      highlight: 'Secure & Compliant',
    },
    {
      title: 'Scalable & Future-Proof Solutions',
      description: 'Our websites are built to grow with your business, using scalable architecture and modern frameworks that can easily accommodate future enhancements and features.',
      icon: <FaRocket className="w-8 h-8 text-brand-blue mb-4" />,
      stats: 'Infinitely Scalable',
      highlight: 'Growth Ready',
    },
    {
      title: 'Data-Driven Results',
      description: 'We use analytics and performance metrics to continuously optimize your website, providing detailed reports and insights to help you make informed business decisions.',
      icon: <FaChartLine className="w-8 h-8 text-brand-blue mb-4" />,
      stats: 'Detailed Analytics',
      highlight: 'Results Focused',
    },
    {
      title: 'Custom Solutions for Every Business',
      description: 'We understand that every business is unique, so we create custom solutions tailored to your specific needs, industry requirements, and business objectives.',
      icon: <FaDesktop className="w-8 h-8 text-brand-blue mb-4" />,
      stats: '100% Custom Built',
      highlight: 'Tailored Solutions',
    },
    {
      title: 'Global Standards & Best Practices',
      description: 'We follow international web standards, accessibility guidelines (WCAG), and industry best practices to ensure your website meets global quality standards.',
      icon: <FaGlobe className="w-8 h-8 text-brand-blue mb-4" />,
      stats: 'WCAG 2.1 AA Compliant',
      highlight: 'Global Standards',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      rating: 5,
      text: 'Intention Infoservice transformed our online presence completely. The website they built increased our leads by 300% and the design is absolutely stunning.',
      project: 'E-commerce Platform',
    },
    {
      name: 'Michael Chen',
      company: 'GreenEarth Consulting',
      rating: 5,
      text: 'Professional, reliable, and incredibly talented team. They delivered our project on time and exceeded all our expectations. Highly recommended!',
      project: 'Business Website',
    },
    {
      name: 'Emily Rodriguez',
      company: 'FitLife Wellness',
      rating: 5,
      text: 'The mobile-first approach and SEO optimization they implemented helped us rank #1 for our target keywords. Outstanding results!',
      project: 'Health & Wellness Site',
    },
  ];

  const achievements = [
    // { number: '150+', label: 'Projects Completed', icon: <FaCheckCircle className="w-6 h-6 text-green-400" /> },
    { number: '4.9/5', label: 'Client Rating', icon: <FaStar className="w-6 h-6 text-yellow-400" /> },
    { number: '98%', label: 'On-Time Delivery', icon: <FaClock className="w-6 h-6 text-blue-400" /> },
    { number: '24/7', label: 'Support Available', icon: <FaHeadset className="w-6 h-6 text-purple-400" /> },
    { number: '10+', label: 'Years Experience', icon: <FaAward className="w-6 h-6 text-orange-400" /> },
    { number: '95+', label: 'Lighthouse Score', icon: <FaTachometerAlt className="w-6 h-6 text-red-400" /> },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Intention Infoservice',
    url: 'https://intentioninfoservice.com',
    description: 'Professional web design and development company with 10+ years of experience, 150+ completed projects, and 4.9/5 client satisfaction rating.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Naigaon East, Juchandra',
      addressLocality: 'Naigaon',
      addressRegion: 'Maharashtra',
      postalCode: '401208',
      addressCountry: 'IN',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: testimonial.text,
      publisher: {
        '@type': 'Organization',
        name: testimonial.company,
      },
    })),
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'Web Development Expertise',
        description: '10+ years of professional web development experience',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Quality Assurance',
        name: 'Client Satisfaction Rating',
        description: '4.9/5 average client satisfaction rating',
      },
    ],
  };

  return (
    <section className="relative bg-gradient-to-b from-dark-950 to-dark-900 py-12 md:py-16 overflow-hidden">
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
            Why Choose Intention Infoservice for Web Design & Development?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Trusted by Businesses Worldwide for Professional Web Solutions
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            With 10+ years of experience and a proven track record of success, we combine technical expertise, creative design, and strategic thinking to deliver web solutions that drive real business results. Here's what sets us apart from the competition.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 justify-center align-middle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">{achievement.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{achievement.number}</div>
              <div className="text-sm text-gray-400">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-[rgba(0,160,227,0.3)] hover:border-brand-blue hover:shadow-[0_0_20px_rgba(0,160,227,0.5)] transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon and Badge */}
              <div className="text-center mb-4">
              <div className='flex justify-center'> {reason.icon}</div> 
                <div className="inline-block px-3 py-1 bg-brand-blue/70 text-white rounded-full text-xs font-semibold mb-2">
                  {reason.highlight}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
              </div>

              {/* Description */}
              <p className="text-base text-center text-gray-400 mb-4 flex-grow leading-relaxed">
                {reason.description}
              </p>

              {/* Stats */}
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-blue/20 to-purple-500/20 rounded-lg">
                  <span className="text-brand-blue font-semibold text-sm">{reason.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        

        {/* Bottom CTA */}
        <motion.div
          className="text-center p-8 backdrop-blur-sm bg-white/5 rounded-xl border border-[rgba(0,160,227,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience the Intention Infoservice Difference?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join Our satisfied clients who have transformed their digital presence with our expert web design and development services. 
            Let's discuss how we can help your business achieve its online goals.
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
              Start Your Project Today
                                    </Button>
            {/* <motion.button
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUsers className="mr-2" />
              View Client Success Stories
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

