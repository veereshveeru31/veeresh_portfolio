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
  const skills = [
    { name: "Python", icon: Terminal, color: "from-blue-500 to-blue-600" },
    { name: "Kotlin", icon: Smartphone, color: "from-orange-500 to-orange-600" },
    { name: "Firebase", icon: Zap, color: "from-yellow-500 to-orange-600" },
    { name: "Android", icon: Smartphone, color: "from-green-500 to-green-600" },
    { name: "NumPy", icon: Cpu, color: "from-purple-500 to-purple-600" },
    { name: "Scikit-Learn", icon: Brain, color: "from-indigo-500 to-indigo-600" },
    { name: "MongoDB", icon: Database, color: "from-green-600 to-teal-600" },
    { name: "Figma", icon: Palette, color: "from-pink-500 to-rose-600" },
    { name: "Jupyter", icon: FileCode, color: "from-orange-500 to-red-600" },
    { name: "VS Code", icon: Code2, color: "from-blue-600 to-cyan-600" }
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
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 mb-16 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-4 bg-gradient-to-br ${skill.color} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                    <SkillIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  <span className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
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