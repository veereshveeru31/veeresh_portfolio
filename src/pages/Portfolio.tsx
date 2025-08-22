import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';

import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Portfolio = () => {
  useEffect(() => {
    // Initialize scroll animations when elements come into view
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Observe all animation elements
      const animationElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      animationElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags - would be better in a head component in a real app */}
      <title>K Veeresh - AI/ML Engineer & Software Developer Portfolio</title>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Experience Section */}
        <Experience />
        
        
        {/* Achievements Section */}
        <Achievements />
        
        {/* Certifications Section */}
        <Certifications />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;