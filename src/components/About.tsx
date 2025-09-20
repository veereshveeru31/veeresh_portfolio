import React from 'react';
import { Code2, Brain, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Analytical Thinking",
      description: "Strong problem-solving skills with focus on efficient solutions"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies and mobile development"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focused",
      description: "Passionate about learning and applying cutting-edge technologies"
    },
    {
      icon: Target,
      title: "Results Oriented",
      description: "Committed to delivering measurable impact and strategic execution"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 relative">
      <div className="mobile-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know more about my journey, passions, and what drives me in technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 slide-in-left">
              <div className="space-y-6">
                <p className="text-xl text-foreground leading-relaxed">
                  AI/ML Engineering Student passionate about solving complex problems through innovative technology solutions.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing B.E. in Artificial Intelligence & Machine Learning with 2+ years of hands-on experience 
                  in software development and machine learning projects.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <div className="text-2xl font-bold text-primary">AI/ML</div>
                  <div className="text-sm text-muted-foreground">Engineering</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <div className="text-2xl font-bold text-primary">India</div>
                  <div className="text-sm text-muted-foreground">Based</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-in-right">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="project-card text-center group scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;