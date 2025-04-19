'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services', hasSubmenu: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' },
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
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <img src="/images/logo.png" alt="Intention Infoservice Logo" className="h-12 w-10" />
          Intention Infoservice
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              {link.hasSubmenu ? (
                <div
                  className="text-white font-medium hover:text-teal-500 transition-all cursor-pointer py-2"
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
                          className="block px-4 py-2 text-white hover:text-teal-500 transition-all"
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
                  className="text-white font-medium px-4 py-2 border border-white rounded hover:bg-white/10 transition-all"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-white font-medium hover:text-teal-500 transition-all py-2"
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
                          className="text-gray-400 hover:text-teal-500 transition-all"
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
                    className="text-white font-medium px-4 py-2 border border-white rounded hover:bg-white/10 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white font-medium hover:text-teal-500 transition-all"
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