'use client';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Intention Infoservice transformed our online presence! Our website now drives 50% more leads.',
      author: 'John Doe, CEO of XYZ Corp',
      rating: 5,
    },
    {
      quote: 'The team’s expertise in SEO and performance optimization doubled our site’s traffic in just 3 months.',
      author: 'Jane Smith, Marketing Director at ABC Inc.',
      rating: 5,
    },
    {
      quote: 'Their custom web app streamlined our operations, saving us countless hours every week.',
      author: 'Mike Johnson, Founder of HealthTech Solutions',
      rating: 5,
    },
  ];

  const handleMouseEnter = (index: number) => {
    const card = document.querySelectorAll('.testimonial-card')[index];
    gsap.killTweensOf(card);
    gsap.to(card, {
      y: -10,
      backgroundColor: '#1A2526',
      shadow: 'xl',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = document.querySelectorAll('.testimonial-card')[index];
    gsap.killTweensOf(card);
    gsap.to(card, {
      y: 0,
      backgroundColor: '#0F172A',
      shadow: 'lg',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleFocus = (index: number) => {
    handleMouseEnter(index);
  };

  const handleBlur = (index: number) => {
    handleMouseLeave(index);
  };

  // Structured data for testimonials
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: testimonials.map((testimonial, index) => ({
      '@type': 'Review',
      position: index + 1,
      reviewBody: testimonial.quote,
      author: {
        '@type': 'Person',
        name: testimonial.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: '5',
      },
    })),
  };

  return (
    <section id="testimonials" className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24 relative overflow-hidden">
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
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Trusted by Businesses Worldwide
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hear from our satisfied clients who have experienced the impact of our web design and development services.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card bg-dark-950 rounded-lg p-6 shadow-lg transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              tabIndex={0}
              aria-describedby={`testimonial-description-${index}`}
            >
              {/* Quote Bubble Tail */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="absolute bottom-0 left-6 transform translate-y-full"
                fill="#0F172A"
              >
                <path d="M0,0 L20,0 L10,20 Z" />
              </svg>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#14B8A6">
                        <path d="M10 15l-5.5 3 2-6L2 7l6-1L10 1l2 5h6l-4.5 5 2 6z" />
                      </svg>
                    ))}
                  </div>
                  <p id={`testimonial-description-${index}`} className="text-lg text-gray-400 italic mb-2">"{testimonial.quote}"</p>
                  <p className="text-teal-500 font-semibold">{testimonial.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}