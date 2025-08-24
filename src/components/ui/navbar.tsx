import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Handle scroll for active section highlighting
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold font-mono tracking-tight flex items-center gap-1"
            >
              <motion.span
                className="text-cyan-500 dark:text-cyan-400"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                K
              </motion.span>
              <span className="text-foreground">Veeresh</span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Hover underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: activeSection !== item.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:bg-accent/50"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2"
                    >
                      <AnimatePresence mode="wait">
                        {isOpen ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <X className="h-6 w-6" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Menu className="h-6 w-6" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </SheetTrigger>
                
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "text-left px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200",
                          activeSection === item.id
                            ? "text-primary bg-accent/50 border-l-4 border-cyan-500"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                        )}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;