import React from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Brain, 
  Palette, 
  GitBranch, 
  Cloud,
  FileCode,
  Zap,
  Layers,
  Monitor,
  Server,
  Workflow,
  Cpu,
  Rocket,
  Shield,
  Settings,
  Sparkles,
  Target,
  Trophy,
  Star,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Python", icon: Terminal, level: 90 },
        { name: "JavaScript", icon: FileCode, level: 85 },
        { name: "TypeScript", icon: FileCode, level: 80 },
        { name: "C", icon: Code2, level: 75 },
        { name: "Kotlin", icon: Smartphone, level: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "React.js", icon: Layers, level: 90 },
        { name: "Node.js", icon: Server, level: 85 },
        { name: "Express.js", icon: Zap, level: 80 },
        { name: "HTML5", icon: Monitor, level: 95 },
        { name: "CSS3", icon: Palette, level: 90 },
        { name: "Tailwind CSS", icon: Sparkles, level: 88 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "React Native", icon: Smartphone, level: 85 },
        { name: "Android Studio", icon: Settings, level: 75 },
        { name: "Flutter", icon: Layers, level: 70 }
      ]
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "from-indigo-500 to-blue-600",
      skills: [
        { name: "MongoDB", icon: Database, level: 85 },
        { name: "Firebase", icon: Zap, level: 80 },
        { name: "MySQL", icon: Server, level: 75 },
        { name: "PostgreSQL", icon: Database, level: 70 },
        { name: "REST APIs", icon: Workflow, level: 88 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "NumPy", icon: Cpu, level: 80 },
        { name: "Scikit-Learn", icon: Brain, level: 75 },
        { name: "TensorFlow", icon: Rocket, level: 70 },
        { name: "Jupyter", icon: FileCode, level: 85 },
        { name: "GenAI", icon: Sparkles, level: 78 }
      ]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-600",
      skills: [
        { name: "Figma", icon: Palette, level: 85 },
        { name: "Canva", icon: Star, level: 80 },
        { name: "VS Code", icon: Code2, level: 95 },
        { name: "Git/GitHub", icon: GitBranch, level: 90 }
      ]
    },
    {
      title: "Methodologies",
      icon: Target,
      color: "from-teal-500 to-cyan-600",
      skills: [
        { name: "Agile", icon: Target, level: 85 },
        { name: "Scrum", icon: Trophy, level: 80 },
        { name: "DevOps", icon: Settings, level: 75 },
        { name: "CI/CD", icon: Workflow, level: 78 }
      ]
    },
    {
      title: "Cloud & Services",
      icon: Cloud,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "AWS", icon: Cloud, level: 75 },
        { name: "Azure", icon: Shield, level: 70 },
        { name: "GCP", icon: Cloud, level: 68 },
        { name: "Razorpay", icon: Zap, level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-medium text-sm">Technical Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Mastering cutting-edge technologies to build innovative solutions and drive digital transformation
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 scale-in overflow-hidden"
                  style={{ animationDelay: `${categoryIndex * 0.15}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="group/skill flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                          style={{ animationDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.05)}s` }}
                        >
                          <div className="p-2 bg-muted/50 rounded-lg group-hover/skill:bg-primary/10 group-hover/skill:scale-110 transition-all duration-300">
                            <SkillIcon className="w-4 h-4 text-muted-foreground group-hover/skill:text-primary" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                                {skill.name}
                              </span>
                              <span className="text-xs text-muted-foreground font-mono">
                                {skill.level}%
                              </span>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                                style={{ 
                                  width: `${skill.level}%`,
                                  animationDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.1) + 0.5}s`
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <div className="text-center fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-10 border border-border/50 portfolio-shadow overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Trophy className="w-8 h-8 text-primary animate-pulse" />
                  <h3 className="text-3xl font-bold text-foreground">
                    Continuous Innovation
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                  Passionate about emerging technologies and committed to continuous learning. 
                  From full-stack development to AI/ML innovations, I embrace challenges that 
                  drive technological advancement and create meaningful impact.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="group p-6 bg-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <Rocket className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-bold text-primary text-lg mb-2">Full-Stack Expert</h4>
                    <p className="text-sm text-muted-foreground">End-to-end development solutions</p>
                  </div>
                  
                  <div className="group p-6 bg-secondary/10 rounded-2xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                    <Brain className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-bold text-secondary text-lg mb-2">AI/ML Innovator</h4>
                    <p className="text-sm text-muted-foreground">Intelligent solution architect</p>
                  </div>
                  
                  <div className="group p-6 bg-accent/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                    <Target className="w-8 h-8 text-accent-foreground mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-bold text-accent-foreground text-lg mb-2">Problem Solver</h4>
                    <p className="text-sm text-muted-foreground">Strategic thinking & execution</p>
                  </div>
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