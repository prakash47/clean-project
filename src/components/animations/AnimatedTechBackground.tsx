'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  FaCode, FaLaptopCode, FaMicrochip, FaServer, FaCloud, FaDatabase, FaBrain, FaRobot, FaShieldAlt, FaWifi, FaMobileAlt, FaDesktop,
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp, FaGem, FaVuejs, FaBootstrap, FaSass, FaNpm, FaDocker, FaGitAlt,
  FaGithub, FaGitlab, FaBitbucket, FaFigma, FaChrome, FaAws, FaYarn, FaStar, FaCheckCircle, FaUsers, FaRocket,
  FaAngular, FaLinux, FaApple, FaWindows, FaAndroid, FaWordpress, FaShopify, FaMagento, FaDrupal, FaJoomla, FaReacteurope, FaNodeJs
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiDocker, SiKubernetes, SiGooglecloud,
  SiExpress, SiDjango, SiFlask, SiSpring, SiLaravel, SiRubyonrails, SiDotnet, SiWebpack, SiVite, SiEslint, SiPrettier,
  SiHeroku, SiVercel, SiMysql, SiPostgresql, SiSqlite, SiMicrosoftsqlserver, SiFirebase, SiRedis, SiApachecassandra,
  SiJenkins, SiGithubactions, SiCircleci, SiMicrosoftazure, SiPrometheus, SiGrafana, SiPython as SiPythonIcon, SiCsharp, SiGo, SiRust, SiSvelte
} from 'react-icons/si';

const techIcons = [
  { icon: FaCode, color: 'text-blue-400' },
  { icon: FaLaptopCode, color: 'text-green-400' },
  { icon: FaMicrochip, color: 'text-purple-400' },
  { icon: FaServer, color: 'text-red-400' },
  { icon: FaCloud, color: 'text-yellow-400' },
  { icon: FaDatabase, color: 'text-indigo-400' },
  { icon: FaBrain, color: 'text-pink-400' },
  { icon: FaRobot, color: 'text-teal-400' },
  { icon: FaShieldAlt, color: 'text-orange-400' },
  { icon: FaWifi, color: 'text-cyan-400' },
  { icon: FaMobileAlt, color: 'text-lime-400' },
  { icon: FaDesktop, color: 'text-fuchsia-400' },
  { icon: FaHtml5, color: 'text-orange-500' },
  { icon: FaCss3Alt, color: 'text-blue-500' },
  { icon: FaJs, color: 'text-yellow-500' },
  { icon: FaPython, color: 'text-blue-600' },
  { icon: FaJava, color: 'text-red-600' },
  { icon: FaPhp, color: 'text-purple-600' },
  { icon: FaGem, color: 'text-red-700' },
  { icon: FaVuejs, color: 'text-green-700' },
  { icon: FaBootstrap, color: 'text-purple-700' },
  { icon: FaSass, color: 'text-pink-700' },
  { icon: FaNpm, color: 'text-red-800' },
  { icon: FaDocker, color: 'text-blue-800' },
  { icon: FaGitAlt, color: 'text-orange-800' },
  { icon: FaGithub, color: 'text-gray-800' },
  { icon: FaGitlab, color: 'text-orange-900' },
  { icon: FaBitbucket, color: 'text-blue-900' },
  { icon: FaFigma, color: 'text-purple-900' },
  { icon: FaChrome, color: 'text-red-900' },
  { icon: FaAws, color: 'text-orange-600' },
  { icon: FaYarn, color: 'text-blue-600' },
  { icon: FaStar, color: 'text-yellow-600' },
  { icon: FaCheckCircle, color: 'text-green-600' },
  { icon: FaUsers, color: 'text-indigo-600' },
  { icon: FaRocket, color: 'text-red-600' },
  { icon: FaAngular, color: 'text-red-500' },
  { icon: FaLinux, color: 'text-gray-500' },
  { icon: FaApple, color: 'text-gray-600' },
  { icon: FaWindows, color: 'text-blue-600' },
  { icon: FaAndroid, color: 'text-green-600' },
  { icon: FaWordpress, color: 'text-blue-700' },
  { icon: FaShopify, color: 'text-green-700' },
  { icon: FaMagento, color: 'text-orange-700' },
  { icon: FaDrupal, color: 'text-blue-800' },
  { icon: FaJoomla, color: 'text-red-800' },
  { icon: FaReacteurope, color: 'text-cyan-800' },
  { icon: FaNodeJs, color: 'text-green-800' },
  { icon: SiNextdotjs, color: 'text-white' },
  { icon: SiTypescript, color: 'text-blue-500' },
  { icon: SiReact, color: 'text-cyan-500' },
  { icon: SiTailwindcss, color: 'text-teal-500' },
  { icon: SiNodedotjs, color: 'text-green-500' },
  { icon: SiMongodb, color: 'text-lime-500' },
  { icon: SiDocker, color: 'text-blue-600' },
  { icon: SiKubernetes, color: 'text-indigo-600' },
  { icon: SiGooglecloud, color: 'text-red-600' },
  { icon: SiExpress, color: 'text-gray-700' },
  { icon: SiDjango, color: 'text-green-700' },
  { icon: SiFlask, color: 'text-gray-800' },
  { icon: SiSpring, color: 'text-green-800' },
  { icon: SiLaravel, color: 'text-red-800' },
  { icon: SiRubyonrails, color: 'text-red-900' },
  { icon: SiDotnet, color: 'text-purple-900' },
  { icon: SiWebpack, color: 'text-blue-900' },
  { icon: SiVite, color: 'text-purple-800' },
  { icon: SiEslint, color: 'text-purple-700' },
  { icon: SiPrettier, color: 'text-pink-600' },
  { icon: SiHeroku, color: 'text-purple-600' },
  { icon: SiVercel, color: 'text-gray-900' },
  { icon: SiMysql, color: 'text-blue-700' },
  { icon: SiPostgresql, color: 'text-blue-800' },
  { icon: SiSqlite, color: 'text-blue-900' },
  { icon: SiMicrosoftsqlserver, color: 'text-red-900' },
  { icon: SiFirebase, color: 'text-yellow-700' },
  { icon: SiRedis, color: 'text-red-700' },
  { icon: SiApachecassandra, color: 'text-blue-700' },
  { icon: SiJenkins, color: 'text-orange-700' },
  { icon: SiGithubactions, color: 'text-blue-700' },
  { icon: SiCircleci, color: 'text-green-700' },
  { icon: SiMicrosoftazure, color: 'text-blue-700' },
  { icon: SiPrometheus, color: 'text-orange-700' },
  { icon: SiGrafana, color: 'text-orange-800' },
  { icon: SiPythonIcon, color: 'text-blue-600' },
  { icon: SiCsharp, color: 'text-purple-600' },
  { icon: SiGo, color: 'text-cyan-600' },
  { icon: SiRust, color: 'text-orange-600' },
  { icon: SiSvelte, color: 'text-orange-600' },
];

export default function AnimatedTechBackground() {
  const [icons, setIcons] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      Icon: techIcons[Math.floor(Math.random() * techIcons.length)].icon,
      color: techIcons[Math.floor(Math.random() * techIcons.length)].color,
      size: Math.random() * (60 - 30) + 30, // Increased random size between 30 and 60
      initialX: -50, // Start off-screen left
      initialY: 0, // Default to 0, will be updated in useEffect
    }))
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Update initialY with window.innerHeight
      setIcons((prevIcons) =>
        prevIcons.map((icon) => ({
          ...icon,
          initialY: Math.random() * window.innerHeight,
        }))
      );

      // Animate icons
      icons.forEach((icon) => {
        gsap.to(`#floating-icon-${icon.id}`, {
          x: window.innerWidth + 50, // Animate to off-screen right
          y: `+=${Math.random() * 200 - 100}`, // Random vertical movement
          opacity: Math.random() * 0.5 + 0.2, // Random opacity
          scale: Math.random() * 0.5 + 0.8, // Random scale
          duration: Math.random() * 15 + 10, // Longer random duration for slower movement
          ease: 'none', // Linear movement
          repeat: -1,
          delay: Math.random() * 10, // Staggered start times
          onRepeat: function() {
            // Reset position to left off-screen when repeating
            gsap.set(this.targets()[0], { x: -50, y: Math.random() * window.innerHeight });
          },
        });
      });
    }
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ id, Icon, color, size, initialX, initialY }) => (
        <div
          key={id}
          id={`floating-icon-${id}`}
          className="absolute"
          style={{
            top: initialY,
            left: initialX,
          }}
        >
          <Icon className={`${color}`} style={{ width: size, height: size }} />
        </div>
      ))}
    </div>
  );
}