'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { useRef, useState } from 'react';

// Note: Flowbite CSS and JS are included via CDN in the project setup
// <link href="https://cdn.jsdelivr.net/npm/flowbite@latest/dist/flowbite.min.css" rel="stylesheet" />
// <script src="https://cdn.jsdelivr.net/npm/flowbite@latest/dist/flowbite.min.js"></script>

export default function DigitalMarketingFAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate the background glow effect based on scroll position
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

  // State to manage which FAQ is open (only one open at a time)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How Long Does SEO Take to Show Results in 2025?',
      answer: 'SEO results in 2025 typically take 3-6 months to show significant improvements, depending on factors like industry competition, keyword difficulty, and your website’s current optimization level. With our SEO services 2025, we leverage advanced digital marketing strategies 2025, such as AI-driven keyword research, on-page optimization, and high-quality backlink building, to accelerate your SEO results timeline. For example, our clients often see a 20-30% increase in organic traffic within the first 3 months. To learn more about our proven methods, contact us at /contact-us for a personalized SEO plan.',
    },
    {
      question: 'How Much Do Digital Marketing Services Cost in 2025?',
      answer: 'The cost of digital marketing 2025 varies widely based on your business goals, campaign scope, and selected services, such as SEO services 2025, PPC advertising, content marketing, or social media marketing 2025. At Intention Infoservice, we offer flexible packages starting at affordable rates for small businesses, while larger enterprises may invest in comprehensive digital marketing strategies 2025 for maximum ROI. On average, businesses allocate $2,500-$10,000 per month for effective campaigns. Curious about pricing for your needs? Visit /contact-us for a customized quote from our best digital marketing agency 2025.',
    },
    {
      question: 'Can You Help with Social Media Marketing in 2025?',
      answer: 'Yes, we excel at social media marketing 2025! Our team at Intention Infoservice crafts tailored digital marketing strategies 2025 to boost your brand’s presence on platforms like Instagram, LinkedIn, TikTok, and more. We specialize in creating engaging content, running targeted ad campaigns, and leveraging digital marketing trends 2025, such as video-first strategies and AI-driven audience targeting, to maximize engagement and conversions. Our clients have seen up to a 40% increase in follower engagement within 3 months. Ready to elevate your social media game? Contact us at /contact-us to get started.',
    },
    {
      question: 'How Do You Measure Digital Marketing Campaign Success in 2025?',
      answer: 'At Intention Infoservice, we measure digital marketing campaign success using advanced analytics tools and key performance indicators (KPIs) tailored to your goals. In 2025, we track metrics like organic traffic, conversion rates, return on ad spend (ROAS), and engagement rates across SEO services 2025, social media marketing 2025, and more. For example, we use real-time data to optimize campaigns, ensuring a 25% average increase in conversions for our clients. Our detailed monthly reports provide actionable insights to refine your digital marketing strategies 2025. Want to see how we can drive success for you? Reach out at /contact-us.',
    },
    {
      question: 'Do You Offer Affiliate and Influencer Marketing in 2025?',
      answer: 'Yes, we provide expert affiliate marketing 2025 and influencer marketing strategies to expand your brand’s reach! At Intention Infoservice, we connect you with trusted affiliates and influencers who align with your niche, driving targeted traffic and boosting conversions. Our digital marketing strategies 2025 include performance tracking to ensure a high ROI, with some clients seeing a 15% increase in sales through these channels. We handle everything from partner selection to campaign management. Interested in leveraging these digital marketing trends 2025? Contact us at /contact-us for a tailored plan.',
    },
    {
      question: 'What Makes Your Digital Marketing Approach Unique in 2025?',
      answer: 'As a trusted digital marketing partner and best digital marketing agency 2025, Intention Infoservice stands out with a data-driven, client-first approach. Our digital marketing strategies 2025 combine cutting-edge SEO services 2025, social media marketing 2025, and influencer marketing strategies with real-time optimization to deliver measurable results. For instance, we use AI tools to analyze trends and consumer behavior, ensuring campaigns are aligned with digital marketing trends 2025. Our clients benefit from a 30% average ROI improvement. Discover what sets us apart—visit /contact-us to connect with our team.',
    },
    {
      question: 'What Are the Latest Digital Marketing Trends for 2025?',
      answer: 'In 2025, digital marketing trends 2025 are shaping the industry with innovative strategies. Key trends include AI-powered advertising, voice search optimization, and video-first social media marketing 2025. At Intention Infoservice, we stay ahead by integrating these trends into our SEO services 2025 and overall digital marketing strategies 2025. For example, voice search optimization can increase your visibility by 20%, while AI tools enhance ad targeting precision. We also focus on immersive content like AR/VR experiences and zero-party data collection for personalized campaigns. Ready to leverage these trends? Contact us at /contact-us to stay ahead with the best digital marketing agency 2025.',
    },
    {
      question: 'How Can Digital Marketing Help My Small Business Grow in 2025?',
      answer: 'Digital marketing can significantly boost small business growth in 2025 by increasing online visibility, driving traffic, and generating leads. At Intention Infoservice, our digital marketing strategies 2025 for small businesses include affordable SEO services 2025, social media marketing 2025, and targeted PPC campaigns. For instance, our SEO strategies can improve your local search rankings, bringing a 50% increase in local traffic within 6 months. We also create engaging social media content to connect with your audience, often doubling engagement rates. Small businesses partnering with us have seen a 35% revenue growth on average. Start growing your business today—visit /contact-us to learn how our trusted digital marketing partner can help.',
    },
    {
      question: 'Is Digital Marketing Worth the Investment in 2025?',
      answer: 'Absolutely, digital marketing is a worthwhile investment in 2025, offering a high ROI for businesses of all sizes. With digital marketing strategies 2025, you can achieve measurable results through SEO services 2025, social media marketing 2025, and affiliate marketing 2025. For example, businesses investing in SEO often see a 14.6:1 ROI, while PPC campaigns can yield $2 for every $1 spent. At Intention Infoservice, our clients have experienced a 40% increase in leads within 6 months of implementing our strategies. Digital marketing also allows precise targeting and scalability, making it cost-effective. Curious about the potential returns? Contact our best digital marketing agency 2025 at /contact-us for a strategy session.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured data for the section (FAQPage schema)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="relative bg-dark-900 py-8 md:py-12 overflow-hidden">
      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      {/* Pulsing Stars */}
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
      {/* Gradient Waves */}
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
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: 200% 200%;
              }
            }
          `}
        </style>
      </div>
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 w-[900px] h-[900px] rounded-full bg-gradient-radial from-brand-blue/30 to-transparent z-0 mx-auto"
        style={{ opacity: glowOpacity }}
      />
      <div className="w-full px-2 sm:px-[10%] relative z-10">
        {/* Structured Data */}
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
              Digital Marketing FAQs for 2025
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
              Have questions about our digital marketing services? Explore our 2025 FAQs to understand how we can help you achieve online growth, engagement, and conversions.
            </motion.p>
          </div>
          {/* Interactive FAQ Accordion with Neon Glow and Floating Panels */}
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
                  {/* FAQ Header */}
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
                  {/* FAQ Content */}
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
        {/* CTA Button (Styled with Flowbite Button) */}
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
            ariaLabel="Contact us if you have more questions about digital marketing in 2025"
          >
            Have More Questions? Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}