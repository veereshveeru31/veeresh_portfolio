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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know more about my journey, passions, and what drives me in technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 slide-in-left">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I am an adaptable and results-oriented professional with a strong passion for continuous learning and innovation. 
                  I quickly grasp new technologies and apply analytical thinking to solve complex problems efficiently.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  With a dedication to collaboration, strategic execution, and delivering measurable impact, I am eager to 
                  contribute to challenging projects that drive growth and innovation. My journey spans from mechanical 
                  engineering to AI/ML, showcasing my versatility and commitment to staying at the forefront of technology.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my Bachelor's in Artificial Intelligence & Machine Learning, I combine theoretical 
                  knowledge with practical experience gained through internships and personal projects. I believe in the 
                  power of technology to solve real-world problems and create positive impact.
                </p>
              </div>

              <div className="bg-accent/50 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-lg mb-3 text-primary">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Current Role:</span>
                    <p className="font-medium">Software Engineer Intern</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Education:</span>
                    <p className="font-medium">B.E. AI/ML Student</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Experience:</span>
                    <p className="font-medium">2+ Years</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <p className="font-medium">India</p>
                  </div>
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