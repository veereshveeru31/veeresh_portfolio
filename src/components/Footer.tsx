import React from 'react';
import { Heart, Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/veereshveeru31',
      hoverColor: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/k-veeresh-033045295',
      hoverColor: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:veeresh18266@gmail.com',
      hoverColor: 'hover:text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+919353660842',
      hoverColor: 'hover:text-emerald-400'
    }
  ];

  return (
    <footer className="relative bg-secondary text-secondary-foreground">
      {/* Scroll to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-gradient-primary hover:shadow-portfolio-glow smooth-transition group"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 smooth-transition" />
        </Button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              K Veeresh
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4">
              Aspiring AI/ML Engineer & Software Developer passionate about creating innovative solutions 
              that drive growth and make a meaningful impact.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-secondary-light hover-lift smooth-transition ${social.hoverColor} group`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 smooth-transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary smooth-transition hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-primary">Let's Connect</h4>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>
                <a 
                  href="mailto:veeresh18266@gmail.com"
                  className="hover:text-primary smooth-transition"
                >
                  veeresh18266@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+919353660842"
                  className="hover:text-primary smooth-transition"
                >
                  +91 9353660842
                </a>
              </p>
              <p>Karnataka, India</p>
            </div>
            
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('mailto:veeresh18266@gmail.com', '_blank')}
                className="group border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 smooth-transition" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-light my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-secondary-foreground/70 text-sm">
              © {currentYear} K Veeresh. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-xs mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
          
          <div className="flex items-center text-secondary-foreground/70 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
            <span>and lots of ☕</span>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-light rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary rounded-full blur-xl"></div>
      </div>
    </footer>
  );
};

export default Footer;