'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { 
  FaArrowRight, FaDesktop, FaCode, FaMobileAlt, FaTabletAlt, FaGlobe, FaReact, FaNodeJs, FaWordpress, FaLaptop,
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp, FaGem, FaVuejs, FaBootstrap, FaSass, FaNpm, FaDocker, FaGitAlt, 
  FaGithub, FaGitlab, FaBitbucket, FaFigma, FaChrome, FaAws, FaYarn
} from 'react-icons/fa';
import { 
  SiTypescript, SiGo, SiCsharp, SiRust, SiAngular, SiSvelte, SiExpress, SiDjango, SiFlask, SiSpring, SiLaravel, 
  SiRubyonrails, SiDotnet, SiWebpack, SiVite, SiEslint, SiPrettier, SiYarn, SiKubernetes, SiPostman, SiNginx, 
  SiApache, SiMysql, SiPostgresql, SiSqlite, SiMicrosoftsqlserver, SiMongodb, SiFirebase, SiRedis, SiApachecassandra,
  SiJenkins, SiGithubactions, SiCircleci, SiGooglecloud, SiMicrosoftazure, SiHeroku, SiVercel, SiNewrelic, SiSentry,
  SiPrometheus, SiGrafana, SiPython
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

    if (websiteMonitor) {
      gsap.set(websiteMonitor, { y: 0, opacity: 1 });
      gsap.fromTo(
        websiteMonitor,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (websiteElements.length > 0) {
      websiteElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 1 + index * 0.3, ease: 'power2.out' }
        );
      });
    }
    if (codeMonitor) {
      gsap.set(codeMonitor, { y: 0, opacity: 1 });
      gsap.fromTo(
        codeMonitor,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (codeLines.length > 0) {
      codeLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 1.5 + index * 0.5, ease: 'power2.out' }
        );
      });
    }
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
    if (dataStream.length > 0) {
      dataStream.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { opacity: 1, x: 0 },
          { opacity: 1, x: 100, duration: 1, delay: 2 + index * 0.2, repeat: -1, ease: 'power2.out' }
        );
      });
    }
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
    serviceType: 'Web Design and Development',
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
    },
    description: 'Transform your online presence with custom web design and mobile-first web development. Get a free quote for SEO-optimized websites that drive results in 2025.',
    url: 'https://intentioninfoservice.com/services/web-design-development',
  };

  return (
    <section className="relative bg-gradient-to-b from-dark-950 to-dark-800 pt-8 md:pt-12 md:pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
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
      <div className="absolute inset-0 pointer-events-none">
        {/* Programming Languages */}
        <div className="floating-icon flex items-center space-x-2" style={{ top: '5%', left: '5%', opacity: 0 }}>
          <FaHtml5 className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">HTML</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '7%', left: '15%', opacity: 0 }}>
          <FaCss3Alt className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">CSS</span>
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
          <FaJava className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Java</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '17%', left: '65%', opacity: 0 }}>
          <FaPhp className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">PHP</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '19%', left: '75%', opacity: 0 }}>
          <FaGem className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Ruby</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '21%', left: '85%', opacity: 0 }}>
          <SiGo className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Go</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '23%', left: '95%', opacity: 0 }}>
          <SiCsharp className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">C#</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '25%', left: '5%', opacity: 0 }}>
          <SiRust className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Rust</span>
        </div>
        {/* Frameworks/Libraries */}
        <div className="floating-icon flex items-center space-x-2" style={{ top: '27%', left: '15%', opacity: 0 }}>
          <FaReact className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">React</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '29%', left: '25%', opacity: 0 }}>
          <FaVuejs className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Vue</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '31%', left: '35%', opacity: 0 }}>
          <SiAngular className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Angular</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '33%', left: '45%', opacity: 0 }}>
          <SiSvelte className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Svelte</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '35%', left: '55%', opacity: 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-brand-blue">
            <path fill="currentColor" d="M21.09 3.12c-.37-.47-.87-.77-1.45-.77H4.36c-.58 0-1.08.3-1.45.77-.37.47-.56 1.08-.56 1.8v14.56c0 .72.19 1.33.56 1.8.37.47.87.77 1.45.77h15.28c.58 0 1.08-.3 1.45-.77.37-.47.56-1.08.56-1.8V4.92c0-.72-.19-1.33-.56-1.8zM8.4 18.24H5.76V9.6h2.64v8.64zm-1.32-9.84c-.84 0-1.56-.72-1.56-1.56s.72-1.56 1.56-1.56 1.56.72 1.56 1.56-.72 1.56-1.56 1.56zm12.72 9.84h-2.64v-4.68c0-1.08-.36-1.8-1.32-1.8-.72 0-1.2.48-1.44.96v5.52H11.2V9.6h2.64v1.2h.04c.36-.72 1.2-1.44 2.4-1.44 1.68 0 3 1.08 3 3.36v5.52z" />
          </svg>
          <span className="text-sm text-brand-blue font-semibold">Tailwind CSS</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '37%', left: '65%', opacity: 0 }}>
          <FaBootstrap className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Bootstrap</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '39%', left: '75%', opacity: 0 }}>
          <FaSass className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Sass</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '41%', left: '85%', opacity: 0 }}>
          <SiExpress className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Express</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '43%', left: '95%', opacity: 0 }}>
          <SiDjango className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Django</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '45%', left: '5%', opacity: 0 }}>
          <SiFlask className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Flask</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '47%', left: '15%', opacity: 0 }}>
          <SiSpring className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Spring Boot</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '49%', left: '25%', opacity: 0 }}>
          <SiLaravel className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Laravel</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '51%', left: '35%', opacity: 0 }}>
          <SiRubyonrails className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Ruby on Rails</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '53%', left: '45%', opacity: 0 }}>
          <SiDotnet className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">ASP.NET Core</span>
        </div>
        {/* Tools */}
        <div className="floating-icon flex items-center space-x-2" style={{ top: '55%', left: '55%', opacity: 0 }}>
          <SiWebpack className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Webpack</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '57%', left: '65%', opacity: 0 }}>
          <SiVite className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Vite</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '59%', left: '75%', opacity: 0 }}>
          <SiEslint className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">ESLint</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '61%', left: '85%', opacity: 0 }}>
          <SiPrettier className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Prettier</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '63%', left: '95%', opacity: 0 }}>
          <FaChrome className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Browser DevTools</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '65%', left: '5%', opacity: 0 }}>
          <FaFigma className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Figma</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '67%', left: '15%', opacity: 0 }}>
          <FaNpm className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">NPM</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '69%', left: '25%', opacity: 0 }}>
          <FaYarn className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Yarn</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '71%', left: '35%', opacity: 0 }}>
          <SiPython className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Pip</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '73%', left: '45%', opacity: 0 }}>
          <FaDocker className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Docker</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '75%', left: '55%', opacity: 0 }}>
          <SiKubernetes className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Kubernetes</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '77%', left: '65%', opacity: 0 }}>
          <SiPostman className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Postman</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '79%', left: '75%', opacity: 0 }}>
          <SiNginx className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Nginx</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '81%', left: '85%', opacity: 0 }}>
          <SiApache className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Apache</span>
        </div>
        {/* Databases */}
        <div className="floating-icon flex items-center space-x-2" style={{ top: '83%', left: '95%', opacity: 0 }}>
          <SiMysql className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">MySQL</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '85%', left: '5%', opacity: 0 }}>
          <SiPostgresql className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">PostgreSQL</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '87%', left: '15%', opacity: 0 }}>
          <SiSqlite className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">SQLite</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '89%', left: '25%', opacity: 0 }}>
          <SiMicrosoftsqlserver className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">SQL Server</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '91%', left: '35%', opacity: 0 }}>
          <SiMongodb className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">MongoDB</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '93%', left: '45%', opacity: 0 }}>
          <SiFirebase className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Firebase</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '95%', left: '55%', opacity: 0 }}>
          <SiRedis className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Redis</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '5%', left: '65%', opacity: 0 }}>
          <SiApachecassandra className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Cassandra</span>
        </div>
        {/* DevOps/Deployment */}
        <div className="floating-icon flex items-center space-x-2" style={{ top: '7%', left: '75%', opacity: 0 }}>
          <FaGitAlt className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Git</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '9%', left: '85%', opacity: 0 }}>
          <FaGithub className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">GitHub</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '11%', left: '95%', opacity: 0 }}>
          <FaGitlab className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">GitLab</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '13%', left: '5%', opacity: 0 }}>
          <FaBitbucket className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Bitbucket</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '15%', left: '15%', opacity: 0 }}>
          <SiJenkins className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Jenkins</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '17%', left: '25%', opacity: 0 }}>
          <SiGithubactions className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">GitHub Actions</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '19%', left: '35%', opacity: 0 }}>
          <SiCircleci className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">CircleCI</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '21%', left: '45%', opacity: 0 }}>
          <FaAws className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">AWS</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '23%', left: '55%', opacity: 0 }}>
          <SiGooglecloud className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">GCP</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '25%', left: '65%', opacity: 0 }}>
          <SiMicrosoftazure className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Azure</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '27%', left: '75%', opacity: 0 }}>
          <SiHeroku className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Heroku</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '29%', left: '85%', opacity: 0 }}>
          <SiVercel className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Vercel</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '31%', left: '95%', opacity: 0 }}>
          <SiNewrelic className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">New Relic</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '33%', left: '5%', opacity: 0 }}>
          <SiSentry className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Sentry</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '35%', left: '15%', opacity: 0 }}>
          <SiPrometheus className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Prometheus</span>
        </div>
        <div className="floating-icon flex items-center space-x-2" style={{ top: '37%', left: '25%', opacity: 0 }}>
          <SiGrafana className="w-6 h-6 text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">Grafana</span>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <line x1="-500" y1="20%" x2="1500" y2="20%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="40%" x2="1500" y2="40%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="60%" x2="1500" y2="60%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="80%" x2="1500" y2="80%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
        </svg>
      </div>
      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[500px]">
          <div className="md:w-1/2 text-center md:text-left min-h-[500px] flex flex-col justify-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Custom Web Design & Development That Powers Your Success
            </motion.h1>
            <motion.p
              className="text-lg font-semibold text-brand-blue mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Create Stunning, High-Performing Websites for 2025
            </motion.p>
            <motion.p
              className="text-base text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your online presence with custom web design and mobile-first web development. Our expert team builds SEO-driven websites that captivate audiences and deliver measurable growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                ariaLabel="Get your free quote today for web design and development"
              >
                Get Your Free Quote Today
              </Button>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center py-8 min-h-[500px]">
            <div className="relative">
              <svg
                width="500"
                height="500"
                viewBox="0 0 500 500"
                className="w-full website-monitor"
                role="img"
                aria-label="Illustration of a website and code editor open on desktop screens with tablet, mobile, and laptop views"
              >
                <defs>
                  <radialGradient id="monitorGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0 }} />
                  </radialGradient>
                  <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1E293B', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <g opacity="0.1">
                  <path
                    d="M0,0 Q125,50 250,0 T500,0 Q375,100 250,50 T0,100 Q125,150 250,100 T500,150 Q375,200 250,150 T0,200 Q125,250 250,200 T500,250 Q375,300 250,250 T0,300 Q125,350 250,300 T500,350 Q375,400 250,350 T0,400 Q125,450 250,400 T500,450 Q375,500 250,450 T0,500"
                    fill="none"
                    stroke="#00a0e3"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                </g>
                <circle cx="250" cy="250" r="250" fill="url(#monitorGlow)" />
                <g transform="translate(50, 50)">
                  <rect x="0" y="0" width="200" height="200" fill="#1E293B" stroke="#00a0e3" strokeWidth="3" rx="10" />
                  <path d="M80,200 L120,200 L100,220 Z" fill="#1E293B" stroke="#00a0e3" strokeWidth="3" />
                  <rect x="100" y="220" width="20" height="20" fill="#1E293B" stroke="#00a0e3" strokeWidth="3" />
                  <g transform="translate(10, 10)">
                    <rect x="0" y="0" width="180" height="180" fill="url(#screenGradient)" rx="5" />
                    <rect x="5" y="5" width="170" height="30" fill="#14b8a6" rx="3" className="website-element" />
                    <rect x="5" y="40" width="170" height="60" fill="#1e293b" rx="3" className="website-element" />
                    <rect x="5" y="105" width="85" height="40" fill="#1e293b" rx="3" className="website-element" />
                    <rect x="90" y="105" width="85" height="40" fill="#1e293b" rx="3" className="website-element" />
                    <rect x="65" y="150" width="50" height="20" fill="#14b8a6" rx="3" className="website-element" />
                  </g>
                </g>
                <g transform="translate(250, 50)" className="code-monitor">
                  <rect x="0" y="0" width="200" height="200" fill="#1e293b" stroke="#00a0e3" strokeWidth="3" rx="10" />
                  <path d="M80,200 L120,200 L100,220 Z" fill="#1e293b" stroke="#00a0e3" strokeWidth="3" />
                  <rect x="100" y="220" width="20" height="20" fill="#1e293b" stroke="#00a0e3" strokeWidth="3" />
                  <g transform="translate(10, 10)">
                    <rect x="0" y="0" width="180" height="180" fill="url(#screenGradient)" rx="5" />
                    <text x="10" y="30" fill="#14b8a6" fontSize="12" fontFamily="monospace" className="code-line">&lt;div class=&quot;header&quot;&gt;</text>
                    <text x="20" y="50" fill="#ffffff" fontSize="12" fontFamily="monospace" className="code-line">&lt;nav&gt;...&lt;/nav&gt;</text>
                    <text x="10" y="70" fill="#14b8a6" fontSize="12" fontFamily="monospace" className="code-line">&lt;/div&gt;</text>
                    <text x="10" y="90" fill="#14b8a6" fontSize="12" fontFamily="monospace" className="code-line">&lt;main&gt;</text>
                    <text x="20" y="110" fill="#ffffff" fontSize="12" fontFamily="monospace" className="code-line">&lt;img src=&quot;hero.jpg&quot;&gt;</text>
                    <text x="10" y="130" fill="#14b8a6" fontSize="12" fontFamily="monospace" className="code-line">&lt;/main&gt;</text>
                    <rect x="10" y="140" width="10" height="14" fill="#14b8a6" className="cursor" />
                  </g>
                </g>
                <g transform="translate(250, 150)">
                  <circle cx="0" cy="0" r="3" fill="#14b8a6" className="data-stream" />
                  <circle cx="20" cy="0" r="3" fill="#14b8a6" className="data-stream" />
                  <circle cx="40" cy="0" r="3" fill="#14b8a6" className="data-stream" />
                  <circle cx="60" cy="0" r="3" fill="#14b8a6" className="data-stream" />
                  <circle cx="80" cy="0" r="3" fill="#14b8a6" className="data-stream" />
                </g>
                <g transform="translate(190, 340)" className="tablet">
                  <rect x="0" y="0" width="80" height="50" fill="#1e293b" stroke="#00a0e3" strokeWidth="2" rx="5" />
                  <rect x="5" y="5" width="70" height="40" fill="url(#screenGradient)" rx="3" />
                  <rect x="7" y="7" width="66" height="5" fill="#14b8a6" rx="2" />
                </g>
                <g transform="translate(280, 340)" className="mobile">
                  <rect x="0" y="0" width="40" height="60" fill="#1e293b" stroke="#00a0e3" strokeWidth="2" rx="5" />
                  <rect x="5" y="5" width="30" height="50" fill="url(#screenGradient)" rx="3" />
                  <rect x="7" y="7" width="26" height="5" fill="#14b8a6" rx="2" />
                </g>
                <g transform="translate(370, 340)" className="laptop">
                  <rect x="0" y="0" width="90" height="50" fill="#1e293b" stroke="#00a0e3" strokeWidth="2" rx="5" />
                  <rect x="5" y="5" width="80" height="40" fill="url(#screenGradient)" rx="3" />
                  <rect x="7" y="7" width="76" height="5" fill="#14b8a6" rx="2" />
                  <rect x="0" y="50" width="90" height="10" fill="#1e293b" stroke="#00a0e3" strokeWidth="2" rx="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}