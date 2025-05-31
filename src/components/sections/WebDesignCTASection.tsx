'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';

export default function WebDesignCTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Intention Infoservice for Web Design and Development',
    description: 'Contact us today for a free web design and development consultation in 2025 and get a free quote to transform your online presence with SEO-optimized websites and mobile-first web development.',
    url: 'https://intentioninfoservice.com/contact-us',
  };

  return (
    <section className="relative bg-dark-950 py-8 md:py-12 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: gradientOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,160,227,0.3)] to-[rgba(57,49,133,0.3)]" />
      </motion.div>
      <div className="w-full px-2 sm:px-[10%] relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative flex justify-center items-center min-h-[300px]" ref={ref}>
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="absolute w-3 h-3 bg-brand-blue rounded-full"
              style={{
                animation: `orbit-${index} ${5 + index * 0.5}s linear infinite`,
                transformOrigin: 'center center',
              }}
            >
              <style>
                {`
                  @keyframes orbit-${index} {
                    0% {
                      transform: rotate(${index * 60}deg) translateX(150px) rotate(-${index * 60}deg);
                      opacity: 0.5;
                    }
                    50% {
                      opacity: 1;
                    }
                    100% {
                      transform: rotate(${index * 60 + 360}deg) translateX(150px) rotate(-${index * 60 + 360}deg);
                      opacity: 0.5;
                    }
                  }
                `}
              </style>
            </div>
          ))}
          <div className="relative z-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Online Presence in 2025!
            </motion.h2>
            <motion.p
              className="text-lg text-brand-blue font-semibold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let’s Build Your Digital Success Story Together
            </motion.p>
            <motion.p
              className="text-base text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Contact us today for a free web design and development consultation in 2025 and start transforming your online presence with SEO-optimized websites and mobile-first web development.
            </motion.p>
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-radial from-brand-blue/50 to-transparent animate-pulse"
                style={{
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              <Button
                size="lg"
                className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_30px_rgba(0,160,227,0.7)] transition-all duration-300 relative z-10"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                ariaLabel="Get a free web design and development quote and consultation for 2025"
              >
                Get a Free Quote Now
              </Button>
              <style>
                {`
                  @keyframes pulse {
                    0% {
                      transform: scale(1);
                      opacity: 0.5;
                    }
                    50% {
                      transform: scale(1.2);
                      opacity: 0.8;
                    }
                    100% {
                      transform: scale(1);
                      opacity: 0.5;
                    }
                  }
                `}
              </style>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}