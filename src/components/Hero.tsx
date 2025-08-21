import React from 'react';
import { Download, ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import profileAvatar from '@/assets/profile-avatar.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume-k-veeresh.pdf'; // You would need to add the actual resume PDF to public folder
    link.download = 'K-Veeresh-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 fade-in">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-portfolio-glow">
              <img
                src={profileAvatar}
                alt="K Veeresh - Professional Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Name */}
            <h1 className="text-hero bg-gradient-primary bg-clip-text text-transparent font-bold slide-in-left">
              K Veeresh
            </h1>

            {/* Tagline */}
            <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto slide-in-right" style={{ animationDelay: '0.2s' }}>
              Aspiring AI/ML Engineer & Software Developer
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in" style={{ animationDelay: '0.4s' }}>
              Passionate about innovation and continuous learning. I leverage analytical thinking to solve complex problems 
              and deliver measurable impact through cutting-edge technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 scale-in" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-primary hover:shadow-portfolio-glow smooth-transition group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download Resume
              </Button>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('https://github.com/veereshveeru31', '_blank')}
                  className="hover:text-primary smooth-transition"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('https://linkedin.com/in/k-veeresh-033045295', '_blank')}
                  className="hover:text-primary smooth-transition"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('mailto:veeresh18266@gmail.com', '_blank')}
                  className="hover:text-primary smooth-transition"
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('tel:+919353660842', '_blank')}
                  className="hover:text-primary smooth-transition"
                >
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{ animationDelay: '1s' }}>
            <Button
              variant="ghost"
              onClick={scrollToNext}
              className="animate-bounce hover:text-primary"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;