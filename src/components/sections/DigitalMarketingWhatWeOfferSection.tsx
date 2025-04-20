'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function DigitalMarketingWhatWeOfferSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your search rankings with our on-page, off-page, and technical SEO strategies. We conduct in-depth keyword research, optimize content, and build high-quality backlinks to drive organic traffic. Our local SEO services also help you dominate search results in your area.',
      className: 'seo-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="seo-icon">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <path d="M10,25 L15,20 L30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Maximize ROI with targeted PPC campaigns on Google Ads, social media platforms, and display networks. We manage ad creation, keyword bidding, and performance tracking to ensure your ads reach the right audience at the right time.',
      className: 'ppc-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="ppc-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,10 L20,20 L30,20" stroke="#0F172A" strokeWidth="2" />
          <path d="M20,10 A10,10 0 0,1 30,20" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Social Media Marketing (SMM)',
      description: 'Engage your audience with organic and paid social media strategies. We create compelling content, manage campaigns, and run ads on platforms like Instagram, Facebook, Twitter, LinkedIn, and TikTok to build your brand’s presence.',
      className: 'smm-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="smm-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 Q20,15 25,25" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
          <circle cx="25" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Content Marketing',
      description: 'Attract and retain customers with high-quality content. We produce blog posts, articles, infographics, videos, and eBooks that position your brand as an authority and drive engagement.',
      className: 'content-marketing-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="content-marketing-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,30 L15,25 L20,30 L25,25 L30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns. We design newsletters, set up automation workflows, and track performance to maximize conversions.',
      className: 'email-marketing-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="email-marketing-icon">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <path d="M10,10 L20,20 L30,10" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Influencer Marketing',
      description: 'Expand your reach by partnering with influencers. We identify and collaborate with influencers in your niche to promote your brand and build trust with new audiences.',
      className: 'influencer-marketing-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="influencer-marketing-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 L25,15" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Video Marketing',
      description: 'Capture attention with engaging video content. We create and promote videos for YouTube, TikTok, and other platforms to boost brand awareness and engagement.',
      className: 'video-marketing-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="video-marketing-icon">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <path d="M15,15 L25,20 L15,25 Z" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Increase conversions with A/B testing, landing page optimization, and UX improvements. We analyze user behavior and optimize your website to turn visitors into customers.',
      className: 'cro-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="cro-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,10 L20,20 L30,20" stroke="#0F172A" strokeWidth="2" />
          <path d="M20,10 A10,10 0 0,1 30,20" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Affiliate Marketing',
      description: 'Drive sales through affiliate partnerships. We set up and manage affiliate programs to expand your reach and incentivize partners to promote your products.',
      className: 'affiliate-marketing-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="affiliate-marketing-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M10,20 H30 M20,10 V30" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with detailed analytics. We use tools like Google Analytics, SEMrush, and Ahrefs to track performance, measure ROI, and provide actionable insights.',
      className: 'analytics-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="analytics-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,30 L15,25 L20,30 L25,25 L30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
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
            Comprehensive Digital Marketing Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We provide a full suite of services to grow your online presence.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our digital marketing services are designed to help businesses of all sizes grow their online presence. From SEO to influencer marketing, we deliver tailored strategies that drive measurable results.
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