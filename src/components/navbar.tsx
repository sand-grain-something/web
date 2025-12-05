'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Map, Compass, Microscope, Info, Home } from 'lucide-react';
import { ModeToggle } from './common/mode-toggle';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#map', label: 'Map', icon: Map },
  { href: '/#explore', label: 'Explore', icon: Compass },
  { href: '/#explore', label: 'Sand Analysis', icon: Microscope }, // Points to explore section where sand analysis is available
  { href: '/about', label: 'About', icon: Info },
];

export default function SmartNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      
      // If we're on the home page, just scroll
      if (pathname === '/') {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      } else {
        // If we're on a different page, navigate to home first, then scroll
        window.location.href = href;
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.span
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Sand Analysis
              </motion.span>
              <span className="text-base md:text-lg text-muted-foreground hidden sm:inline font-medium">Mapping System</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = 
                  pathname === item.href || 
                  (item.href === '/' && pathname === '/') ||
                  (item.href.startsWith('/#') && pathname === '/');
                return (
                  <Link
                    key={`${item.href}-${item.label}-${index}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="relative px-5 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-200 group"
                  >
                    {/* Hover background - yellow/amber tint */}
                    <div className="absolute inset-0 bg-yellow-400/20 dark:bg-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {/* Active background */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-lg"
                        layoutId="activeNav"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center space-x-2 text-foreground group-hover:text-primary transition-colors duration-200">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </span>
                  </Link>
                );
              })}
              <div className="ml-4">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ModeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-16 md:hidden bg-background/95 backdrop-blur-md border-b border-border z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = 
                  pathname === item.href || 
                  (item.href === '/' && pathname === '/') ||
                  (item.href.startsWith('/#') && pathname === '/');
                return (
                  <Link
                    key={`${item.href}-${item.label}-${index}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`flex items-center space-x-3 px-5 py-4 rounded-lg transition-colors text-base md:text-lg font-medium ${
                      isActive 
                        ? 'bg-primary/20 text-primary' 
                        : 'hover:bg-primary/10 text-foreground hover:text-primary'
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

