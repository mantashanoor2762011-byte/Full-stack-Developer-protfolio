'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navItems } from '@/lib/data';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from './Icons';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDark);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-amber-500/20 dark:bg-black/90'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
        <img
  src="/images/logo3.jpg"
  alt="Mantasha Noor Logo"
  className="w-40 h-32 object-contain"
/>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-5 py-2 text-sm font-medium text-black bg-amber-300 hover:bg-amber-400 rounded-full transition-all duration-300 shadow-lg shadow-amber-300/30"
            >
              Let's Talk
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/50 transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDark}
            >
              {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/50 transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDark}
            >
              {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/50 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-3 text-base font-medium text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="px-4 py-3 text-base font-medium text-black bg-amber-300 hover:bg-amber-400 rounded-lg text-center transition-all"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}