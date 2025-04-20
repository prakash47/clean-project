'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function CustomBusinessSolutionsWhatWeOfferSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Custom CRM Systems',
      description: 'Streamline customer interactions with a tailored CRM system. We build solutions with AI-driven insights, lead tracking, and automated follow-ups to enhance customer relationships and boost sales. Perfect for businesses needing personalized customer experiences.',
      className: 'crm-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="crm-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 Q20,30 25,25" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
          <circle cx="25" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Enterprise Resource Planning (ERP) Systems',
      description: 'Integrate your business processes with a custom ERP system. We offer cloud-based solutions to manage finance, HR, and supply chain operations, with real-time data access and scalability to support remote work and growth.',
      className: 'erp-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="erp-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,20 H30 M20,10 V30" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'E-commerce Platforms',
      description: 'Launch a custom e-commerce platform with mobile-first design, secure payment gateways, and AI-powered product recommendations. We help you meet customer expectations for seamless online shopping experiences while ensuring scalability.',
      className: 'ecommerce-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="ecommerce-icon">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <path d="M10,25 Q20,30 30,25" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
          <circle cx="25" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Business Intelligence (BI) Dashboards',
      description: 'Gain actionable insights with real-time BI dashboards. We develop tools to monitor KPIs, track performance, and analyze data, helping you make data-driven decisions in a competitive market.',
      className: 'bi-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="bi-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,30 L15,25 L20,30 L25,25 L30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Inventory Management Systems',
      description: 'Optimize your supply chain with automated inventory management software. Our solutions include IoT integration for real-time stock updates, reducing errors and improving efficiency in inventory handling.',
      className: 'inventory-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="inventory-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <rect x="10" y="10" width="20" height="20" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Workflow Automation Tools',
      description: 'Automate repetitive tasks like invoicing, employee onboarding, and order processing. We create solutions that integrate with your existing systems, saving time and reducing costs while addressing talent shortages.',
      className: 'automation-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="automation-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,10 L20,20 L30,20 M20,10 L20,20 L10,20 M20,10 L20,20 L20,30" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business from cyber threats with custom security software. We offer intrusion detection, encryption, and compliance monitoring to ensure data security and meet regulatory requirements like GDPR and CCPA.',
      className: 'security-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="security-icon">
          <path d="M20,10 Q20,5 15,5 Q10,5 10,10 V30 Q10,35 20,40 Q30,35 30,30 V10 Q30,5 25,5 Q20,5 20,10 Z" fill="#14B8A6" />
          <path d="M15,25 L20,30 L30,15" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Cloud-Based Collaboration Tools',
      description: 'Enable seamless remote work with cloud-based collaboration platforms. Our solutions include file sharing, task management, and video conferencing, ensuring your team stays productive and connected.',
      className: 'collaboration-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="collaboration-icon">
          <path d="M20,15 Q25,10 30,15 Q35,10 40,15 Q45,20 40,25 Q45,30 40,35 Q35,40 30,35 Q25,40 20,35 Q15,40 10,35 Q5,30 10,25 Q5,20 10,15 Q15,10 20,15 Z" fill="#14B8A6" />
          <path d="M15,25 H35" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'AI-Powered Chatbots',
      description: 'Enhance customer support with AI-powered chatbots. We build intelligent bots for lead generation, customer inquiries, and personalized experiences, helping you meet modern customer expectations.',
      className: 'chatbot-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="chatbot-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 Q20,30 25,25" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
          <circle cx="25" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'ESG Tracking Software',
      description: 'Meet sustainability goals with ESG tracking software. We develop tools to monitor and report on environmental, social, and governance metrics, helping you comply with regulations and appeal to eco-conscious consumers.',
      className: 'esg-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="esg-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 L20,15 L25,25" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Custom Mobile Apps',
      description: 'Engage employees and customers with custom mobile apps. We build mobile-first solutions for internal use (e.g., employee apps) or customer-facing needs (e.g., loyalty programs), ensuring accessibility and usability.',
      className: 'mobile-app-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="mobile-app-icon">
          <rect x="0" y="0" width="20" height="35" rx="3" fill="#14B8A6" transform="translate(10, 2.5)" />
          <rect x="3" y="3" width="14" height="29" fill="#0F172A" transform="translate(10, 2.5)" />
          <circle cx="10" cy="15" r="3" fill="#14B8A6" transform="translate(10, 2.5)" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    gsap.utils.toArray('.service-icon').forEach((icon, index) => {
      gsap.to(icon, {
        scale: 1.2,
        boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
        duration: 0.3,
        paused: true,
        ease: 'power2.out',
        onStart: () => setHoveredIndex(index),
        onReverseComplete: () => setHoveredIndex(null),
      });
    });
  }, []);

  const handleInteraction = (index: number) => {
    const icon = document.querySelectorAll('.service-icon')[index];
    const animation = gsap.getTweensOf(icon)[0];
    if (animation) {
      if (hoveredIndex === index) {
        animation.reverse();
      } else {
        animation.play();
      }
    }
  };

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
            Tailored Business Solutions for Every Industry
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We provide custom software to address modern challenges and trending requirements.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our custom business solutions are designed to address the unique challenges of modern businesses. From AI integration to cybersecurity, we leverage trending technologies to help you overcome obstacles, streamline operations, and drive growth.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleInteraction(index)}
              onMouseLeave={() => handleInteraction(index)}
            >
              <div className={`service-icon ${service.className} transition-all duration-300 ${hoveredIndex === index ? 'scale-110 shadow-[0_0_10px_rgba(20,184,166,0.5)]' : ''}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-base text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}