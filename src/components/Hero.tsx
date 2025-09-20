import React from 'react';
import { Download, ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
// Profile image will be referenced directly from uploads

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
      
      {/* Floating Elements - Hidden on mobile for cleaner look */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float hidden sm:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl animate-float hidden sm:block" style={{ animationDelay: '1s' }}></div>
      
      <div className="mobile-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mobile-section">
          {/* Profile Image - Mobile optimized */}
          <div className="mb-6 sm:mb-8 fade-in">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-portfolio-glow">
              <img
                src="/lovable-uploads/4597853e-9ba9-4f1d-b2ff-34213f6bcd30.png"
                alt="K Veeresh - Professional Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content - Mobile optimized */}
          <div className="space-y-4 sm:space-y-6">
            {/* Name */}
            <h1 className="text-hero bg-gradient-primary bg-clip-text text-transparent font-bold slide-in-left">
              K Veeresh
            </h1>

            {/* Tagline */}
            <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto animate-fade-in hover:scale-105 transition-all duration-500 ease-out px-2" style={{ animationDelay: '0.2s' }}>
              Aspiring AI/ML Engineer & Software Developer
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in px-2" style={{ animationDelay: '0.4s' }}>
              Passionate about innovation and continuous learning. I leverage analytical thinking to solve complex problems 
              and deliver measurable impact through cutting-edge technology solutions.
            </p>

            {/* Action Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-6 scale-in px-2" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-primary hover:shadow-portfolio-glow smooth-transition group mobile-btn w-full sm:w-auto"
              >
                <Download className="mr-2 mobile-btn-icon group-hover:animate-pulse" />
                Download Resume
              </Button>
              
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('https://github.com/veereshveeru31', '_blank')}
                  className="hover:text-primary smooth-transition min-h-[48px] min-w-[48px] p-2"
                >
                  <Github className="mobile-btn-icon" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('https://linkedin.com/in/k-veeresh-033045295', '_blank')}
                  className="hover:text-primary smooth-transition min-h-[48px] min-w-[48px] p-2"
                >
                  <Linkedin className="mobile-btn-icon" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('mailto:veeresh18266@gmail.com', '_blank')}
                  className="hover:text-primary smooth-transition min-h-[48px] min-w-[48px] p-2"
                >
                  <Mail className="mobile-btn-icon" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('tel:+919353660842', '_blank')}
                  className="hover:text-primary smooth-transition min-h-[48px] min-w-[48px] p-2"
                >
                  <Phone className="mobile-btn-icon" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile for cleaner look */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 fade-in hidden sm:block" style={{ animationDelay: '1s' }}>
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