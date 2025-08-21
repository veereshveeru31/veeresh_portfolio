import React from 'react';
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Formonex Solutions Pvt. Ltd.",
      period: "2025",
      location: "Remote",
      type: "Internship",
      description: "Currently working on full-stack web applications and cross-platform mobile development, contributing to innovative software solutions in an Agile environment.",
      achievements: [
        "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB",
        "Built cross-platform mobile applications with React Native",
        "Integrated REST APIs for seamless data exchange and functionality",
        "Optimized application performance through code review and best practices",
        "Collaborated effectively in Agile development teams"
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "React Native", "REST APIs", "Agile"],
      icon: Building2,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Trainee",
      company: "Toyota Industries Engine India Pvt. Ltd.",
      period: "2022 - 2023",
      location: "India",
      type: "Training Program",
      description: "Gained valuable industrial experience in process optimization and quality improvement, working with one of the world's leading automotive manufacturers.",
      achievements: [
        "Optimized assembly processes resulting in 20% fewer defects",
        "Applied Kaizen methodology to achieve 15% higher operational efficiency",
        "Improved troubleshooting speed by 25% through systematic problem-solving",
        "Collaborated with cross-functional teams on continuous improvement initiatives",
        "Gained expertise in lean manufacturing and quality control processes"
      ],
      skills: ["Process Optimization", "Kaizen", "Quality Control", "Lean Manufacturing", "Problem Solving"],
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey through different roles and industries, building expertise and delivering results
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 slide-in-left' : 'md:pl-1/2 md:ml-auto slide-in-right'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute ${index % 2 === 0 ? 'left-4 md:left-auto md:right-0' : 'left-4 md:left-0'} top-8 md:transform ${index % 2 === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'} w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-portfolio border-4 border-background z-10`}>
                  <exp.icon className="h-4 w-4 text-white" />
                </div>

                {/* Experience Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="project-card group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Skills & Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="skill-tag group-hover:bg-primary group-hover:text-primary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="mt-16 text-center fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-card rounded-lg p-8 border border-border portfolio-shadow">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Experience Highlights
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">35%</div>
                  <p className="text-muted-foreground">Efficiency Improvement</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;