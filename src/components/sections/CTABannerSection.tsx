'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function CTABannerSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Animations for the CTA banner
    const ctaBanner = document.querySelector('.cta-banner');
    const ctaIllustration = document.querySelector('.cta-illustration');
    const ctaText = document.querySelector('.cta-text');
    const ctaButton = document.querySelector('.cta-button');
    const sparkElements = document.querySelectorAll('.spark-element');

    if (ctaBanner) {
      gsap.fromTo(
        ctaBanner,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
      );
    }
    if (ctaIllustration) {
      gsap.fromTo(
        ctaIllustration,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', delay: 0.7 }
      );
    }
    if (ctaText) {
      gsap.fromTo(
        ctaText,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', delay: 0.9 }
      );
    }
    if (ctaButton) {
      gsap.fromTo(
        ctaButton,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', delay: 1.1 }
      );
    }
    if (sparkElements.length > 0) {
      sparkElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1.3 + index * 0.2, ease: 'power2.out' }
        );
        // Ongoing pulsating animation
        gsap.to(element, {
          scale: 1.2,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.3 + index * 0.2,
        });
      });
    }
  }, []);

  // Structured data for the CTA
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com/about-us',
    'potentialAction': {
      '@type': 'ContactAction',
      'target': 'https://intentioninfoservice.com/contact-us',
      'name': 'Get a Free Consultation',
    },
  };

  return (
    <section className="bg-dark-950 py-16 md:py-24 relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Custom CSS for text shadow on the button */}
      <style jsx>{`
        .cta-button-shadow {
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <div className="w-full px-[10%] relative z-10">
        <div className="cta-banner bg-dark-900 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Illustration and Text */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="cta-illustration"
              role="img"
              aria-label="Illustration of a digital spark symbolizing innovation"
            >
              {/* Digital Spark Illustration */}
              <g transform="translate(40, 40)" className="spark-element">
                <path d="M-10,-10 L10,10 M-10,10 L10,-10" stroke="#e0f7fa" strokeWidth="3" opacity="0.7" />
                <path d="M0,-15 L0,15 M-15,0 L15,0" stroke="#e0f7fa" strokeWidth="3" opacity="0.7" />
                <circle cx="0" cy="0" r="5" fill="#e0f7fa" className="spark-element" />
              </g>
            </svg>
            <h3
              className="cta-text text-xl md:text-2xl font-semibold text-white text-center md:text-left"
              style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.3)' }}
            >
              Ready to Transform Your Digital Presence in 2025? Let’s Connect!
            </h3>
          </div>
          {/* Right: CTA Button */}
          <Button
            size="lg"
            variant="primary"
            className="cta-button cta-button-shadow bg-teal-600 text-white hover:bg-teal-500 font-semibold shadow-lg shadow-teal-600/50 hover:shadow-teal-500/50 px-6 whitespace-nowrap"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}