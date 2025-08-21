import React from 'react';
import { Trophy, Award, Rocket, Target, Calendar, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "National Space Hackathon 2025",
      organization: "IIT Delhi",
      description: "Represented college with Team Packetelligence on an innovative space technology project, competing among the best minds in the country.",
      details: [
        "Selected to represent Ballari Institute of Technology & Management",
        "Worked on cutting-edge space innovation project",
        "Collaborated with top engineering talent nationwide",
        "Demonstrated leadership and technical excellence"
      ],
      icon: Rocket,
      color: "from-purple-500 to-indigo-600",
      year: "2025",
      type: "National Competition"
    },
    {
      title: "2nd Prize - Zero to Hero Waste Management",
      organization: "College Competition",
      description: "Developed an AI-driven solution that significantly improved recycling efficiency, earning recognition for innovation in environmental technology.",
      details: [
        "35% improvement in recycling efficiency",
        "AI-powered waste categorization system",
        "Sustainable technology solution",
        "Recognition for environmental impact"
      ],
      icon: Trophy,
      color: "from-emerald-500 to-teal-600",
      year: "2024",
      type: "Innovation Award"
    },
    {
      title: "Software Engineering Excellence",
      organization: "Formonex Solutions",
      description: "Recognized for outstanding contributions in full-stack development and collaborative excellence during internship.",
      details: [
        "Exceptional performance in React.js and Node.js projects",
        "Strong collaboration in Agile development teams",
        "Optimization of application performance",
        "Mentored junior developers"
      ],
      icon: Award,
      color: "from-blue-500 to-cyan-600",
      year: "2025",
      type: "Professional Recognition"
    }
  ];

  const stats = [
    { label: "National Competitions", value: "2", icon: Target },
    { label: "Awards Won", value: "3", icon: Trophy },
    { label: "Team Leadership", value: "5+", icon: Users },
    { label: "Years Active", value: "3", icon: Calendar }
  ];

  return (
    <section id="achievements" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Highlights of competitions, awards, and recognitions that showcase my commitment to excellence
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid lg:grid-cols-1 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`project-card group ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  {/* Icon & Year */}
                  <div className="md:col-span-1 flex flex-col items-center md:items-start">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition`}>
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-2xl font-bold text-primary mb-1">{achievement.year}</div>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {achievement.type}
                      </span>
                    </div>
                  </div>

                  {/* Achievement Details */}
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary smooth-transition">
                        {achievement.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {achievement.organization}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Achievement Details */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Highlights:</h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {achievement.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 scale-in" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gradient-card rounded-lg border border-border portfolio-shadow group hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Achievement Philosophy */}
          <div className="text-center fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-card rounded-lg p-8 border border-border portfolio-shadow">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Philosophy of Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
                Each achievement represents not just a moment of success, but a stepping stone in my continuous journey 
                of learning and innovation. I believe in pushing boundaries, collaborating with brilliant minds, and 
                creating solutions that make a meaningful difference.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                  <span className="text-primary font-medium text-sm">Innovation Driven</span>
                </div>
                <div className="bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                  <span className="text-primary font-medium text-sm">Team Collaboration</span>
                </div>
                <div className="bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                  <span className="text-primary font-medium text-sm">Continuous Learning</span>
                </div>
                <div className="bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                  <span className="text-primary font-medium text-sm">Impact Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;