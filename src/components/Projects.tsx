import React from 'react';
import { ExternalLink, Github, Smartphone, Cloud, ShoppingCart, Calculator } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Shuddha Utpadah",
      subtitle: "Mobile App connecting Urban & Rural",
      description: "A comprehensive mobile application built with Kotlin and Firebase that bridges the gap between urban consumers and rural food producers. Features include OTP verification, secure Razorpay payment integration, and real-time database management.",
      technologies: ["Kotlin", "Firebase", "Razorpay", "Android Studio", "Real-time DB"],
      icon: Smartphone,
      color: "from-emerald-500 to-teal-600",
      features: [
        "OTP Authentication System",
        "Secure Payment Gateway",
        "Real-time Database Updates",
        "Producer-Consumer Connect"
      ]
    },
    {
      title: "Cloud Cost Estimator",
      subtitle: "AI-Powered Cost Prediction Tool",
      description: "An intelligent Python application that predicts cloud service costs across AWS, Azure, and GCP platforms. Utilizes machine learning algorithms with NumPy and Scikit-Learn for accurate cost forecasting and comparison features.",
      technologies: ["Python", "NumPy", "Scikit-Learn", "Machine Learning", "Cloud APIs"],
      icon: Cloud,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Multi-Cloud Support (AWS, Azure, GCP)",
        "ML-based Cost Prediction",
        "User Authentication",
        "Cost Comparison Analytics"
      ]
    },
    {
      title: "Zero to Hero Waste Management",
      subtitle: "AI-Driven Recycling Solution",
      description: "Award-winning project that leverages artificial intelligence to improve recycling efficiency by 35%. This innovative solution addresses waste management challenges through smart categorization and process optimization.",
      technologies: ["AI/ML", "Computer Vision", "Data Analytics", "IoT"],
      icon: Calculator,
      color: "from-green-500 to-emerald-600",
      features: [
        "35% Efficiency Improvement",
        "AI-powered Waste Sorting",
        "Real-time Analytics",
        "Environmental Impact Tracking"
      ]
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 relative">
      <div className="mobile-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Innovative solutions showcasing my technical expertise and problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card group ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-start">
                  {/* Project Icon & Title */}
                  <div className="md:col-span-1">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-4">
                      {project.subtitle}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // In a real implementation, you'd have actual project links
                          console.log(`Opening ${project.title} demo`);
                        }}
                        className="group/btn"
                      >
                        <ExternalLink className="mr-1 h-3 w-3 group-hover/btn:scale-110 smooth-transition" />
                        Demo
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          // In a real implementation, you'd have GitHub links
                          console.log(`Opening ${project.title} GitHub`);
                        }}
                        className="group/btn"
                      >
                        <Github className="mr-1 h-3 w-3 group-hover/btn:scale-110 smooth-transition" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={feature} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-card rounded-lg p-8 border border-border portfolio-shadow">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Want to see more projects?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These are just a few highlights. Check out my GitHub profile for more projects, 
                contributions, and ongoing work in AI/ML and software development.
              </p>
              <Button
                onClick={() => window.open('https://github.com/veereshveeru31', '_blank')}
                className="bg-gradient-primary hover:shadow-portfolio-glow smooth-transition"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;