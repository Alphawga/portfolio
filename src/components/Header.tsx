'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300';
  };

  const menuItems = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="font-mono text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            AlphaWGA
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`${isActive(item.path)} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {!isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`${
            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${isActive(item.path)} text-lg py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between py-2">
              <span className="text-lg">Theme</span>
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 