import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "JavaScript", "TypeScript", "Kotlin"]
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Android Studio", "Flutter"]
    },
    {
      title: "Database & Backend",
      skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL", "REST APIs"]
    },
    {
      title: "AI/ML & Data Science",
      skills: ["NumPy", "Scikit-Learn", "TensorFlow", "Jupyter Notebook", "GenAI"]
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Canva", "Star UML", "VS Code", "Git/GitHub"]
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Scrum", "DevOps", "CI/CD", "Version Control"]
    },
    {
      title: "Cloud & Services",
      skills: ["AWS", "Azure", "GCP", "Razorpay Integration", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="project-card group scale-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="font-semibold text-lg mb-4 text-primary group-hover:text-primary-light smooth-transition">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="skill-tag group-hover:scale-105"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-card rounded-lg p-8 border border-border portfolio-shadow">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I'm passionate about staying current with emerging technologies and continuously expanding my skill set. 
                From traditional software development to cutting-edge AI/ML technologies, I embrace challenges that 
                push me to grow and innovate.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                  <span className="text-primary font-medium text-sm">Full-Stack Developer</span>
                </div>
                <div className="bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                  <span className="text-primary font-medium text-sm">AI/ML Enthusiast</span>
                </div>
                <div className="bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                  <span className="text-primary font-medium text-sm">Problem Solver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;