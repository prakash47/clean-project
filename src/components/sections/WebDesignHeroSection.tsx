'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { 
  FaArrowRight, FaDesktop, FaCode, FaMobileAlt, FaTabletAlt, FaGlobe, FaReact, FaNodeJs, FaWordpress, FaLaptop,
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp, FaGem, FaVuejs, FaBootstrap, FaSass, FaNpm, FaDocker, FaGitAlt, 
  FaGithub, FaGitlab, FaBitbucket, FaFigma, FaChrome, FaAws, FaYarn, FaStar, FaCheckCircle, FaUsers, FaRocket
} from 'react-icons/fa';
import { 
  SiTypescript, SiGo, SiCsharp, SiRust, SiAngular, SiSvelte, SiExpress, SiDjango, SiFlask, SiSpring, SiLaravel, 
  SiRubyonrails, SiDotnet, SiWebpack, SiVite, SiEslint, SiPrettier, SiYarn, SiKubernetes, SiPostman, SiNginx, 
  SiApache, SiMysql, SiPostgresql, SiSqlite, SiMicrosoftsqlserver, SiMongodb, SiFirebase, SiRedis, SiApachecassandra,
  SiJenkins, SiGithubactions, SiCircleci, SiGooglecloud, SiMicrosoftazure, SiHeroku, SiVercel, SiNewrelic, SiSentry,
  SiPrometheus, SiGrafana, SiPython, SiNextdotjs
} from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WebDesignHeroSection() {
  const [particles, setParticles] = useState(
    Array.from({ length: 10 }, () => ({
      top: '0%',
      left: '0%',
      opacity: 0,
    }))
  );

  useEffect(() => {
    setParticles(
      Array.from({ length: 10 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: 0,
      }))
    );

    // GSAP animations for various elements
    const websiteMonitor = document.querySelector('.website-monitor');
    const websiteElements = document.querySelectorAll('.website-element');
    const codeMonitor = document.querySelector('.code-monitor');
    const codeLines = document.querySelectorAll('.code-line');
    const cursor = document.querySelector('.cursor');
    const dataStream = document.querySelectorAll('.data-stream');
    const tablet = document.querySelector('.tablet');
    const mobile = document.querySelector('.mobile');
    const laptop = document.querySelector('.laptop');
    const particlesElements = gsap.utils.toArray('.particle') as HTMLElement[];
    const floatingIcons = gsap.utils.toArray('.floating-icon') as HTMLElement[];
    const lightFlares = gsap.utils.toArray('.light-flare') as HTMLElement[];

    // Website monitor animation
    if (websiteMonitor) {
      gsap.set(websiteMonitor, { y: 0, opacity: 1 });
      gsap.fromTo(
        websiteMonitor,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }

    // Website elements animation
    if (websiteElements.length > 0) {
      websiteElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 1 + index * 0.3, ease: 'power2.out' }
        );
      });
    }

    // Code monitor animation
    if (codeMonitor) {
      gsap.set(codeMonitor, { y: 0, opacity: 1 });
      gsap.fromTo(
        codeMonitor,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }

    // Code lines animation
    if (codeLines.length > 0) {
      codeLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 1.5 + index * 0.5, ease: 'power2.out' }
        );
      });
    }

    // Cursor animation
    if (cursor) {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        ease: 'step.end',
        delay: 2,
      });
      gsap.to(cursor, {
        x: 80,
        duration: 2.5,
        repeat: -1,
        ease: 'none',
        delay: 2,
      });
    }

    // Data stream animation
    if (dataStream.length > 0) {
      dataStream.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { opacity: 1, x: 0 },
          { opacity: 1, x: 100, duration: 1, delay: 2 + index * 0.2, repeat: -1, ease: 'power2.out' }
        );
      });
    }

    // Device animations
    if (tablet) {
      gsap.set(tablet, { opacity: 1 });
      gsap.fromTo(
        tablet,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 2.5, ease: 'power2.out' }
      );
    }

    if (mobile) {
      gsap.set(mobile, { opacity: 1 });
      gsap.fromTo(
        mobile,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 2.7, ease: 'power2.out' }
      );
    }

    if (laptop) {
      gsap.set(laptop, { opacity: 1 });
      gsap.fromTo(
        laptop,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 2.9, ease: 'power2.out' }
      );
    }

    // Particles animation
    if (particlesElements.length > 0) {
      particlesElements.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { x: -50, opacity: 0 },
          {
            x: window.innerWidth + 50,
            opacity: () => Math.random() * 0.5 + 0.2,
            duration: 5 + index * 0.5,
            repeat: -1,
            ease: 'linear',
            delay: index * 0.3,
          }
        );
      });
    }

    // Floating icons animation
    if (floatingIcons.length > 0) {
      floatingIcons.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          { x: -50, opacity: 0 },
          {
            x: window.innerWidth + 50,
            opacity: () => Math.random() * 0.5 + 0.3,
            duration: 8 + index * 0.8,
            repeat: -1,
            ease: 'linear',
            delay: index * 0.2,
          }
        );
      });
    }

    // Light flares animation
    if (lightFlares.length > 0) {
      lightFlares.forEach((flare, index) => {
        gsap.fromTo(
          flare,
          { x: -500 },
          { x: 1500, duration: 5 + index * 0.5, repeat: -1, ease: 'linear', delay: index * 0.3 }
        );
      });
    }
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Professional Web Design and Development Services',
    provider: {
      '@type': 'Organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Naigaon East, Juchandra',
        addressLocality: 'Naigaon',
        addressRegion: 'Maharashtra',
        postalCode: '401208',
        addressCountry: 'IN',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
    },
    description: 'Professional web design and development services for 2025. Custom responsive websites, e-commerce solutions, mobile-first design, SEO optimization, and modern web applications that drive business growth.',
    url: 'https://intentioninfoservice.com/services/web-design-development',
    offers: {
      '@type': 'Offer',
      description: 'Custom Web Design & Development Services',
      availability: 'https://schema.org/InStock',
      priceRange: '$$',
      category: 'Web Design and Development',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design & Development Services',
      itemListElement: [
        {
          '@type': 'Service',
          name: 'Custom Website Design',
          description: 'Professional custom website design services',
        },
        {
          '@type': 'Service',
          name: 'Responsive Web Development',
          description: 'Mobile-first responsive web development',
        },
        {
          '@type': 'Service',
          name: 'E-commerce Development',
          description: 'Custom e-commerce website development',
        },
        {
          '@type': 'Service',
          name: 'SEO Web Development',
          description: 'SEO-optimized website development',
        },
      ],
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-dark-950 to-dark-800 pt-12 md:pt-12 pb-20 md:pb-8 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: particle.top,
              left: particle.left,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      {/* Floating technology icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Programming Languages */}
        <div className="floating-icon flex items-center space-x-2" style={{ top: '5%', left: '5%', opacity: 0 }}>
          <FaHtml5 className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">HTML5</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '7%', left: '15%', opacity: 0 }}>
          <FaCss3Alt className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">CSS3</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '9%', left: '25%', opacity: 0 }}>
          <FaJs className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">JavaScript</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '11%', left: '35%', opacity: 0 }}>
          <SiTypescript className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">TypeScript</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '13%', left: '45%', opacity: 0 }}>
          <FaPython className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Python</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '15%', left: '55%', opacity: 0 }}>
          <FaPhp className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">PHP</span>
        </div>
        
        {/* Frameworks/Libraries */}
        <div className="floating-icon flex items-center space-x-2" style={{ top: '27%', left: '15%', opacity: 0 }}>
          <FaReact className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">React</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '29%', left: '25%', opacity: 0 }}>
          <SiNextdotjs className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Next.js</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '31%', left: '35%', opacity: 0 }}>
          <SiAngular className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Angular</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '33%', left: '45%', opacity: 0 }}>
          <FaVuejs className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Vue.js</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '35%', left: '55%', opacity: 0 }}>
          <FaWordpress className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">WordPress</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left: Enhanced SEO Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Heading with Keywords */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional Web Design & Development Services for 2025
            </motion.h1>

            {/* Subtitle with Long-tail Keywords */}
            <motion.h2
              className="text-lg md:text-xl text-brand-blue mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Custom Responsive Websites, E-commerce Solutions & Mobile-First Design That Drives Business Growth
            </motion.h2>

            {/* Enhanced Description with Keywords */}
            <motion.p
              className="text-md md:text-lg text-gray-500 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your digital presence with our expert web design and development services. We create SEO-optimized, mobile-responsive websites that convert visitors into customers.
            </motion.p>

            {/* Key Services Highlights */}
            {/* <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-brand-blue">
                <FaDesktop className="w-5 h-5" />
                <span className="text-sm font-medium">Custom Web Design</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-blue">
                <FaMobileAlt className="w-5 h-5" />
                <span className="text-sm font-medium">Mobile-First Development</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-blue">
                <FaCode className="w-5 h-5" />
                <span className="text-sm font-medium">E-commerce Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-blue">
                <FaRocket className="w-5 h-5" />
                <span className="text-sm font-medium">SEO Optimization</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-blue">
                <FaGlobe className="w-5 h-5" />
                <span className="text-sm font-medium">CMS Integration</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-blue">
                <FaCheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Performance Optimization</span>
              </div>
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,160,227,0.5)] flex items-center justify-center"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                ariaLabel="Get your free web design consultation today"
              >
                Get Your Free Quote Today
              </Button>
              {/* <Button
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                href="/portfolio"
                ariaLabel="View our web design and development portfolio"
              >
                View Our Portfolio
              </Button> */}
            </motion.div>

            {/* Trust Indicators */}
            {/* <motion.div
              className="grid grid-cols-3 gap-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center text-yellow-400 mb-2">
                  <FaStar className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white ml-2">4.9</span>
                </div>
                <span className="text-sm text-gray-400">Client Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-brand-blue mb-2">
                  <FaUsers className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white ml-2">150+</span>
                </div>
                <span className="text-sm text-gray-400">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-green-400 mb-2">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white ml-2">5+</span>
                </div>
                <span className="text-sm text-gray-400">Years Experience</span>
              </div>
            </motion.div> */}
          </div>

          {/* Right: Interactive Visual */}
          <div className="relative">
            {/* Website Monitor */}
            <motion.div
              className="website-monitor relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-2xl border border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Browser Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">
                  https://www.intentioninfoservice.com/
                </div>
              </div>

              {/* Website Content */}
              <div className="space-y-4">
                <div className="website-element bg-brand-blue/20 rounded p-3">
                  <div className="h-2 bg-brand-blue rounded mb-2"></div>
                  <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                </div>
                <div className="website-element grid grid-cols-2 gap-3">
                  <div className="bg-gray-700 rounded p-2">
                    <div className="h-1 bg-gray-500 rounded mb-1"></div>
                    <div className="h-1 bg-gray-500 rounded w-2/3"></div>
                  </div>
                  <div className="bg-gray-700 rounded p-2">
                    <div className="h-1 bg-gray-500 rounded mb-1"></div>
                    <div className="h-1 bg-gray-500 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="website-element bg-green-500/20 rounded p-3">
                  <div className="h-2 bg-green-500 rounded mb-2"></div>
                  <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                </div>
              </div>
            </motion.div>

            {/* Code Monitor */}
            <motion.div
              className="code-monitor absolute -bottom-6 -right-6 bg-gray-900 rounded-lg p-4 shadow-xl border border-gray-700 w-64"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="text-xs font-mono text-green-400 space-y-1">
                <div className="code-line">
                  <span className="text-blue-400">const</span> website = {'{'}
                </div>
                <div className="code-line ml-2">
                  <span className="text-yellow-400">responsive</span>: <span className="text-green-300">true</span>,
                </div>
                <div className="code-line ml-2">
                  <span className="text-yellow-400">seo</span>: <span className="text-green-300">optimized</span>,
                </div>
                <div className="code-line ml-2">
                  <span className="text-yellow-400">performance</span>: <span className="text-green-300">fast</span>
                </div>
                <div className="code-line">{'}'}</div>
                <div className="cursor inline-block w-2 h-4 bg-green-400"></div>
              </div>
            </motion.div>

            {/* Responsive Devices */}
            <motion.div
              className="tablet absolute -top-8 -left-8 w-16 h-20 bg-gray-800 rounded-lg border-2 border-gray-600 flex items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              <FaTabletAlt className="w-14 h-14 text-brand-blue" />
            </motion.div>

            <motion.div
              className="mobile absolute top-1/2 -right-12 w-8 h-14 bg-gray-800 rounded-lg border-2 border-gray-600 flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              <FaMobileAlt className="w-8 h-8 text-brand-blue" />
            </motion.div>

            <motion.div
              className="laptop absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gray-800 rounded-lg border-2 border-gray-600 flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.9 }}
            >
              <FaLaptop className="w-16 h-16 text-brand-blue" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

