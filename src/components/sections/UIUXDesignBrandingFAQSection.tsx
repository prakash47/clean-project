'use client';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function UIUXDesignBrandingFAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: 'What is the first step in the UI/UX design process?',
      answer: 'The first step in our UI/UX design process in 2025 is Discovery & User Research. We conduct stakeholder interviews, user surveys, and competitive analysis to deeply understand your brand, audience, and goals, ensuring a user-centered design approach. This foundational phase is crucial for effective UI/UX design and branding strategy.',
      keywords: 'UI/UX design process, user research, discovery phase, branding strategy'
    },
    {
      question: 'How long does a typical UI/UX design project take?',
      answer: 'A typical UI/UX design project can take anywhere from 6 to 12 weeks, depending on the complexity and scope. Our process includes thorough research, iterative prototyping, visual design, rigorous testing, and continuous iteration to deliver exceptional results tailored to your specific needs and business objectives.',
      keywords: 'UI/UX project timeline, design project duration, prototyping, iterative design'
    },
    {
      question: 'What is included in your branding process?',
      answer: 'Our comprehensive branding process includes creating a cohesive brand identity with memorable logos, consistent typography, harmonious color schemes, and detailed brand guidelines. We ensure your brand resonates deeply with your target audience and maintains consistency across all digital and physical touchpoints, building strong brand recognition.',
      keywords: 'branding process, brand identity, logo design, typography, color schemes, brand guidelines'
    },
    {
      question: 'How do you ensure a design is user-friendly?',
      answer: 'We ensure user-friendliness by conducting thorough user testing, A/B testing, and comprehensive accessibility checks (WCAG 2.1 AA compliance). Our interaction design phase also includes micro-interactions and animations to enhance usability, improve user flow, and create a delightful and engaging experience for all users.',
      keywords: 'user-friendly design, usability testing, A/B testing, accessibility, micro-interactions'
    },
    {
      question: 'Can you help with ongoing design support after project completion?',
      answer: 'Yes, we offer continuous ongoing support and iterative improvements based on user feedback and evolving market trends. Our dedicated team ensures your designs evolve with your business needs, providing consistent updates and enhancements to keep your brand competitive and maximize long-term ROI.',
      keywords: 'ongoing design support, post-launch support, iterative improvements, design maintenance'
    },
    {
      question: 'What are the latest UI/UX design trends in 2025?',
      answer: 'In 2025, top UI/UX design trends include AI-driven personalization, immersive 3D elements, ethical design focusing on privacy and inclusivity, and advanced micro-interactions. We also see a significant rise in sustainable design practices and cross-platform UX consistency to enhance user engagement across all devices and touchpoints.',
      keywords: 'UI/UX design trends 2025, AI in design, 3D elements, ethical design, micro-interactions'
    },
    {
      question: 'How does UI/UX design impact branding success?',
      answer: 'UI/UX design significantly impacts branding success by creating a seamless and memorable user experience that directly reflects and reinforces your brand\'s values. Consistent design elements like color schemes, typography, and micro-interactions build trust, foster user loyalty, and make your brand stand out in a crowded digital landscape.',
      keywords: 'UI/UX impact on branding, brand success, user experience branding, brand loyalty'
    },
    {
      question: 'What role does AI play in UI/UX design in 2025?',
      answer: 'AI in UI/UX design in 2025 enables hyper-personalization, automates repetitive tasks, and enhances user research and data analysis. It helps create adaptive interfaces that anticipate user needs, such as personalized content recommendations, and improves accessibility by adjusting to diverse user contexts, all while maintaining ethical design practices and improving efficiency.',
      keywords: 'AI in UI/UX 2025, AI design tools, personalized UX, automated design, ethical AI'
    },
    {
      question: 'Why is user experience design important for businesses?',
      answer: 'User experience design is crucial for businesses as it directly improves customer satisfaction, retention, and conversion rates. A well-designed UX can yield a significant return on investment, reduces support costs, enhances brand reputation, and provides a substantial competitive edge in the market.',
      keywords: 'importance of UX, business value of UX, customer satisfaction, conversion rates, UX ROI'
    },
    {
      question: 'How can branding be integrated into UI/UX design?',
      answer: 'Branding can be seamlessly integrated into UI/UX design by embedding your brand\'s core values, distinctive colors, unique typography, and consistent tone of voice into every user interaction. From the initial wireframes to the final micro-interactions, we ensure every touchpoint reflects your brand identity, creating a cohesive and emotionally resonant experience that strengthens brand recall and loyalty.',
      keywords: 'integrate branding into UI/UX, brand integration, cohesive design, brand identity in UX'
    },
    {
      question: 'What are the best tools for UI/UX design in 2025?',
      answer: 'In 2025, the leading UI/UX design tools include Figma for collaborative design, Adobe XD for comprehensive prototyping, and UXPin for advanced interactive prototypes and design systems. Other popular tools like Sketch and InVision continue to be widely used, while AI-powered tools are increasingly streamlining design processes and enhancing efficiency.',
      keywords: 'best UI/UX tools 2025, Figma, Adobe XD, UXPin, Sketch, InVision, AI design tools'
    },
    {
      question: 'How does ethical design influence UI/UX in 2025?',
      answer: 'Ethical design in 2025 profoundly influences UI/UX by prioritizing user privacy, inclusivity, and environmental sustainability. We focus on transparent data practices, creating accessible interfaces for all users regardless of ability, and implementing eco-friendly design choices like dark modes to reduce energy consumption, thereby building trust and fostering long-term loyalty among users.',
      keywords: 'ethical design 2025, UI/UX ethics, user privacy, inclusive design, sustainable design'
    },
  ];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle function for opening/closing FAQ items
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      '.faq-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        '.faq-tagline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.faq-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.faq-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.3'
      );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      id="faq"
      className="bg-gradient-to-b from-dark-900 to-dark-800 py-12 md:py-12 lg:py-12 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Enhanced Structured Data for FAQ */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            name: 'UI/UX Design & Branding FAQ',
            description: 'Frequently asked questions about UI/UX design and branding services',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-[10%] md:px-[10%] relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            id="faq-heading"
            className="faq-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            variants={cardVariants}
          >
            Frequently Asked Questions About UI/UX & Branding
          </motion.h2>
          
          <motion.p
            className="faq-tagline text-xl md:text-2xl text-brand-blue font-semibold mb-6"
            variants={cardVariants}
          >
            Your Comprehensive Guide to Our Design and Branding Expertise
          </motion.p>
          
          <motion.p
            className="faq-description text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            Explore common questions about our UI/UX design and branding services, covering everything from process and timelines to the latest industry trends and measurable business impact. Get the answers you need to make informed decisions.
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          className="space-y-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item bg-gradient-to-br from-dark-800 to-dark-700 border border-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:border-brand-blue hover:shadow-glow-sm 
                ${openIndex === index ? 'shadow-glow-sm border-brand-blue' : ''}
              `}
              variants={cardVariants}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 lg:p-8 text-left focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-50 transition-all duration-300"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-white pr-4 leading-tight">
                  {faq.question}
                </h3>
                <span className={`text-brand-blue transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {/* Answer */}
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                  paddingTop: openIndex === index ? '0' : '0',
                  paddingBottom: openIndex === index ? '1.5rem' : '0',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 lg:px-8">
                  <div className="border-t border-gray-600 mb-4" />
                  <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 lg:p-12 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand how our UI/UX design and branding services can transform your business.
            </p>
            <Button
              size="lg"
              className="btn btn-primary hover:bg-brand-blue hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-1"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              aria-label="Contact us for more information about UI/UX design and branding services"
            >
              Get Your Questions Answered
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#cta" />
    </section>
  );
}

