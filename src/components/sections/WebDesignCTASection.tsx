'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function WebDesignCTASection() {
  // Structured data for the CTA
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CallToAction',
    name: 'Get a Free Quote for Web Design & Development',
    description: 'Transform your online presence with custom web design and mobile-first web development. Get a free quote for SEO-optimized websites that drive results in 2025.',
    target: 'https://intentioninfoservice.com/contact-us',
    action: 'Request a Quote',
  };

  return (
    <section className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24 relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Subtle Grain Texture with Animation */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      {/* Decorative Wave SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-24 text-dark-950"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        role="img"
        aria-label="Decorative wave shape"
      >
        <path
          fill="currentColor"
          d="M0,0 C480,100 960,0 1440,100 V0 H0 Z"
        />
      </svg>
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Online Presence Today!
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to build a stunning, SEO-optimized website that drives results in 2025? Let’s create a digital solution tailored to your business needs.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              variant="primary"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40 hover:scale-105 transition-transform"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              aria-label="Get your free quote now"
            >
              Get Your Free Quote Now
            </Button>
            {/* <Button
              size="lg"
              variant="secondary"
              className="bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold hover:scale-105 transition-transform"
              href="/services"
              aria-label="Learn more about our services"
            >
              Learn More About Our Services
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}