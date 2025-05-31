'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function UIUXDesignBrandingFAQSection() {
  const faqs = [
    {
      question: 'What is the first step in the UI/UX design process?',
      answer:
        'The first step in our UI/UX design process in 2025 is Discovery & User Research. We conduct stakeholder interviews, user surveys, and competitive analysis to deeply understand your brand, audience, and goals, ensuring a user-centered design approach.',
    },
    {
      question: 'How long does a typical UI/UX design project take?',
      answer:
        'A typical UI/UX design project can take anywhere from 6 to 12 weeks, depending on the complexity and scope. Our process includes research, prototyping, design, testing, and iteration to deliver exceptional results tailored to your needs.',
    },
    {
      question: 'What is included in your branding process?',
      answer:
        'Our branding process includes creating a cohesive brand identity with logos, typography, color schemes, and comprehensive brand guidelines. We ensure your brand resonates with your audience and maintains consistency across all touchpoints.',
    },
    {
      question: 'How do you ensure a design is user-friendly?',
      answer:
        'We ensure user-friendliness by conducting thorough user testing, A/B testing, and accessibility checks. Our interaction design phase also includes micro-interactions and animations to enhance usability and engagement.',
    },
    {
      question: 'Can you help with ongoing design support after project completion?',
      answer:
        'Yes, we offer ongoing support and iterative improvements based on user feedback. Our team ensures your designs evolve with your needs, providing consistent updates and enhancements to keep your brand competitive.',
    },
    {
      question: 'What are the latest UI/UX design trends in 2025?',
      answer:
        'In 2025, top UI/UX design trends include AI-driven personalization, 3D elements for immersive experiences, ethical design focusing on privacy, and advanced micro-interactions. We also see a rise in sustainable design practices and cross-platform UX consistency to enhance user engagement across devices.',
    },
    {
      question: 'How does UI/UX design impact branding success?',
      answer:
        'UI/UX design significantly impacts branding success by creating a seamless and memorable user experience that reflects your brand’s values. Consistent design elements like color schemes, typography, and micro-interactions reinforce brand identity, build trust, and foster user loyalty, making your brand stand out.',
    },
    {
      question: 'What role does AI play in UI/UX design in 2025?',
      answer:
        'AI in UI/UX design in 2025 enables hyper-personalization, automates repetitive tasks, and enhances user research. It helps create adaptive interfaces that anticipate user needs, such as personalized content recommendations, and improves accessibility by adjusting to user contexts, all while maintaining ethical design practices.',
    },
    {
      question: 'Why is user experience design important for businesses?',
      answer:
        'User experience design is crucial for businesses as it directly improves customer satisfaction, retention, and conversion rates. A well-designed UX can yield a $100 return for every $1 invested (ROI of 9,900%), reduces support costs, and enhances brand reputation, giving businesses a competitive edge.',
    },
    {
      question: 'How can branding be integrated into UI/UX design?',
      answer:
        'Branding can be integrated into UI/UX design by embedding your brand’s values, colors, typography, and tone into every user interaction. From the logo placement to the micro-interactions, we ensure every touchpoint reflects your brand identity, creating a cohesive and emotionally resonant experience.',
    },
    {
      question: 'What are the best tools for UI/UX design in 2025?',
      answer:
        'In 2025, the best UI/UX design tools include Figma for collaborative design, Adobe XD for prototyping, and UXPin for advanced interactive prototypes. Tools like Sketch and InVision are also popular, while AI-powered tools like UXPin’s Merge technology help streamline design processes.',
    },
    {
      question: 'How does ethical design influence UI/UX in 2025?',
      answer:
        'Ethical design in 2025 influences UI/UX by prioritizing user privacy, inclusivity, and sustainability. We focus on transparent data practices, accessible interfaces for all users, and eco-friendly design choices like dark mode to reduce energy consumption, building trust and loyalty among users.',
    },
    {
      question: 'What is the difference between UI and UX design in branding?',
      answer:
        'UI design in branding focuses on the visual elements like colors, typography, and layout to create a cohesive brand identity, while UX design ensures the user journey aligns with the brand’s promise through usability and functionality. Together, they create a seamless and memorable brand experience.',
    },
    {
      question: 'How can UI/UX design improve conversion rates?',
      answer:
        'UI/UX design improves conversion rates by creating intuitive, user-friendly interfaces that guide users toward actions like purchases or sign-ups. Features like personalized recommendations, clear call-to-action buttons, and seamless navigation reduce friction, with studies showing a potential 9,900% ROI on UX investments.',
    },
    {
      question: 'What are the key steps in a branding process for digital products?',
      answer:
        'The key steps in a branding process for digital products include market research to understand your audience, defining a unique brand identity (logo, colors, typography), creating brand guidelines, integrating the brand into UI/UX design, and ensuring consistency across all digital touchpoints to build recognition and trust.',
    },
  ];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle function for opening/closing FAQ items
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-dark-900 py-12 md:py-16 relative overflow-hidden">
      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-[#00a0e3] font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Questions About UI/UX Design & Branding, Answered
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Learn more about our UI/UX design and branding process with these commonly asked questions.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-dark-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-xl' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <span className="text-[#00a0e3] transition-transform duration-300">
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
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  <p className="text-base text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
                  className="flex justify-center mt-12 z-20 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button
                    size="lg"
                    className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
                    icon={<FaArrowRight />}
                    iconPosition="right"
                    href="/contact-us"
                    ariaLabel="Start your UI/UX design and branding project today"
                  >
                    Start Your Project Today
                  </Button>
                </motion.div>
      </div>
    </section>
  );
}