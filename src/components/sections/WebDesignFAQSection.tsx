'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { useRef, useState } from 'react';

export default function WebDesignFAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much does a website cost in 2025?',
      answer: 'The cost of a website in 2025 depends on its complexity, features, and customization requirements. At Intention Infoservice, a basic business website is more affordable, while custom web apps or e-commerce platforms require a higher investment due to their advanced functionality. Factors such as the number of pages, CMS integration, and design intricacy influence the overall price.',
    },
    {
      question: 'How long does it take to build a website in 2025?',
      answer: 'Building a website in 2025 typically takes 4-10 weeks, depending on the project scope. At Intention Infoservice, a simple business website can be ready in 4-6 weeks, while complex sites like e-commerce platforms or custom web apps may take 3-6 months. Timelines vary based on content readiness, design revisions, and functionality requirements. Reach out at /contact-us to discuss your project timeline.',
    },
    {
      question: 'What is responsive web design and why is it important?',
      answer: 'Responsive web design ensures your website adapts seamlessly to different devices, like smartphones, tablets, and desktops. In 2025, it’s crucial because over 60% of web traffic comes from mobile devices, and Google prioritizes mobile-friendly sites in rankings. At Intention Infoservice, we design responsive websites to enhance user experience and boost SEO. Learn more at /contact-us.',
    },
    {
      question: 'Does web design include SEO in 2025?',
      answer: 'Yes, modern web design in 2025 often includes basic SEO. At Intention Infoservice, we optimize your site with on-page SEO, including meta tags, keyword-rich content, fast load times, and mobile-friendliness. For competitive industries, additional SEO services may be needed. Our clients often see a 20% traffic increase within months. Contact us at /contact-us to explore our SEO packages.',
    },
    {
      question: 'Can you redesign my existing website without losing SEO rankings?',
      answer: 'Absolutely, we can redesign your website in 2025 without losing SEO rankings. At Intention Infoservice, we follow best practices like creating a comprehensive redirect plan, preserving content quality, and maintaining URL structures. Our clients have seen improved rankings post-redesign, with some gaining 15% more visibility. Reach out at /contact-us to discuss your redesign needs.',
    },
    {
      question: 'What are the latest web design trends for 2025?',
      answer: 'In 2025, web design trends include dark mode, minimalist layouts, AI-driven personalization, and immersive 3D elements. At Intention Infoservice, we integrate these trends, such as voice navigation and micro-interactions, to enhance user engagement. Our designs have increased client engagement by 20%. Stay ahead—contact us at /contact-us to explore these trends for your site.',
    },
    {
      question: 'How do you ensure a website is mobile-friendly in 2025?',
      answer: 'We ensure mobile-friendliness in 2025 by using responsive design, optimizing images, and testing across devices. At Intention Infoservice, we prioritize mobile-first design, ensuring fast load times and intuitive navigation. Our mobile-friendly sites have boosted client conversions by 25%. Let’s make your site mobile-ready—reach out at /contact-us.',
    },
    {
      question: 'Do I need a content management system (CMS) for my website?',
      answer: 'A CMS like WordPress or Shopify is recommended in 2025 if you want to easily manage your website content. At Intention Infoservice, we help you choose the best CMS based on your needs, enabling you to update text, images, and products without coding. It’s ideal for blogs or e-commerce. Contact us at /contact-us to discuss CMS options.',
    },
    {
      question: 'How can web design help my small business grow in 2025?',
      answer: 'Web design can grow your small business in 2025 by improving online visibility, user experience, and conversions. At Intention Infoservice, we create SEO-optimized, mobile-friendly websites that attract leads. Our clients have seen a 50% increase in local traffic within 6 months. Start growing your business—reach out at /contact-us.',
    },
    {
      question: 'What is the difference between web design and web development?',
      answer: 'In 2025, web design focuses on the visual and user experience aspects, like layout and aesthetics, while web development handles the technical build, including coding and functionality. At Intention Infoservice, our team excels in both, ensuring a seamless, high-performing site. Let’s bring your vision to life—contact us at /contact-us.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section className="relative bg-dark-950 py-8 md:py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse-${index} ${2 + Math.random() * 2}s ease-in-out infinite`,
            }}
          >
            <style>
              {`
                @keyframes pulse-${index} {
                  0% {
                    transform: scale(1);
                    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
                  }
                  50% {
                    transform: scale(1.5);
                    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
                  }
                  100% {
                    transform: scale(1);
                    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
                  }
                }
              `}
            </style>
          </div>
        ))}
      </div>
      <motion.div
        className="absolute inset-0 w-[900px] h-[900px] rounded-full bg-gradient-radial from-brand-blue/30 to-transparent z-0 mx-auto"
        style={{ opacity: glowOpacity }}
      />
      <div className="w-full px-2 sm:px-[10%] relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative max-w-3xl mx-auto" ref={ref}>
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Web Design & Development FAQs for 2025
            </motion.h2>
            <motion.p
              className="text-lg text-brand-blue font-semibold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Answers to Your Most Common Questions
            </motion.p>
            <motion.p
              className="text-base text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Have questions about our web design and development services? Explore our 2025 FAQs to understand how we can help you achieve digital success.
            </motion.p>
          </div>
          <div className="relative z-10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-[rgba(0,160,227,0.3)] hover:border-brand-blue hover:shadow-[0_0_20px_rgba(0,160,227,0.7)] transition-all duration-300 text-left flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <h3
                      id={`faq-question-${index}`}
                      className="text-lg font-semibold text-white"
                    >
                      {faq.question}
                    </h3>
                    <span
                      className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    >
                      <svg
                        className="w-6 h-6 text-brand-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <motion.div
                    id={`faq-answer-${index}`}
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                      y: isOpen ? 0 : -10,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="backdrop-blur-sm bg-dark-800 rounded-b-lg p-4 border border-t-0 border-[rgba(0,160,227,0.3)]">
                      <p className="text-base text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
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
            ariaLabel="Contact us if you have more questions about web design and development in 2025"
          >
            Have More Questions? Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}