'use client';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

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

            <ThemeToggle />

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >

          </button>
        </div>

        {/* Mobile Menu */}

      </nav>
    </header>
  );
} 