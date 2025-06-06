'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Services', href: '/services', hasSubmenu: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const servicesSubmenu = [
    { name: 'Web Design & Development', href: '/services/web-design-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'Website Maintenance', href: '/services/website-maintenance' },
    { name: 'UI/UX Design & Branding', href: '/services/ui-ux-design-branding' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Custom Business Solutions', href: '/services/custom-business-solutions' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-900">
      <style jsx global>{`
        @keyframes bg-spin {
          to {
            --border-angle: 1turn;
          }
        }

        .contact-us-button {
          --border-angle: 0turn;
          --main-bg: conic-gradient(
            from var(--border-angle),
            #213,
            #112 5%,
            #112 60%,
            #213 95%
          );
          --gradient-border: conic-gradient(
            from var(--border-angle),
            transparent 25%,
            #08f,
            #f03 99%,
            transparent
          );
          border: solid 2px transparent;
          border-radius: 0.5em;
          background: 
            var(--main-bg) padding-box,
            var(--gradient-border) border-box, 
            var(--main-bg) border-box;
          background-position: center center;
          animation: bg-spin 3s linear infinite;
        }

        .contact-us-button:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto w-full px-4 md:px-[10%] py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <img src="/images/logo.png" alt="Intention Infoservice Logo" className="h-12 w-10" />
          Intention Infoservice
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              {link.hasSubmenu ? (
                <div
                  className="text-white font-medium hover:text-brand-blue transition-all cursor-pointer py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {link.name}
                  {isServicesOpen && (
                    <div className="absolute left-0 top-full mt-0 w-64 bg-dark-900 border border-gray-600/20 rounded-md shadow-lg p-2">
                      {servicesSubmenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-white hover:text-brand-blue transition-all"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : index === navLinks.length - 1 ? (
                <Link
                  href={link.href}
                  className="contact-us-button text-white font-medium px-4 py-2 rounded"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-white font-medium hover:text-brand-blue transition-all py-2"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="lg:hidden bg-dark-900">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                {link.hasSubmenu ? (
                  <div className="text-white font-medium">
                    {link.name}
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {servicesSubmenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="text-gray-400 hover:text-brand-blue transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : index === navLinks.length - 1 ? (
                  <Link
                    href={link.href}
                    className="contact-us-button text-white font-medium px-4 py-2 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white font-medium hover:text-brand-blue transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}