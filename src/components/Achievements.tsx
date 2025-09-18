import React from 'react';
import { Trophy, Award, Rocket } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "National Space Hackathon 2025",
      organization: "IIT Delhi",
      description: "Represented college with Team Packetelligence in innovative space technology competition.",
      year: "2025",
      type: "National Competition"
    },
    {
      title: "2nd Prize - Zero to Hero Waste Management",
      organization: "College Competition",
      description: "Developed AI-driven solution for recycling efficiency with 35% improvement.",
      year: "2024",
      type: "Innovation Award"
    }
  ];

  const getIcon = (index: number) => {
    const icons = [Rocket, Trophy, Award];
    return icons[index % icons.length];
  };

  return (
    <section id="achievements" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognition and awards that showcase my commitment to excellence
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = getIcon(index);
              return (
                <Card
                  key={achievement.title}
                  className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 scale-in hover-lift hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6 transform transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-white transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {achievement.year}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {achievement.type}
                      </span>
                      
                      <h3 className="font-bold text-lg text-foreground leading-tight">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-sm text-primary font-medium">
                        {achievement.organization}
                      </p>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;