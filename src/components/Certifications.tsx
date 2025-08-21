import React from 'react';
import { Award, ExternalLink, Calendar, Building, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Python Internship Certification",
      organization: "TIEI Vikasana",
      issueDate: "2024",
      description: "Comprehensive Python programming certification covering advanced concepts, data structures, algorithms, and practical application development.",
      skills: ["Python Programming", "Data Structures", "Algorithms", "OOP Concepts", "Problem Solving"],
      icon: Award,
      color: "from-blue-500 to-cyan-600",
      verified: true,
      category: "Programming"
    },
    {
      title: "Google Cloud Certificate",
      organization: "Google Cloud Platform",
      issueDate: "2024",
      description: "Cloud computing certification demonstrating proficiency in Google Cloud services, infrastructure management, and cloud-based solution development.",
      skills: ["Cloud Computing", "GCP Services", "Infrastructure Management", "DevOps", "Scalability"],
      icon: Award,
      color: "from-emerald-500 to-teal-600",
      verified: true,
      category: "Cloud Technology"
    },
    {
      title: "Website UI/UX Designing with ChatGPT",
      organization: "Professional Development",
      issueDate: "2024",
      description: "Modern UI/UX design certification focusing on user-centered design principles, prototyping, and leveraging AI tools for enhanced design workflows.",
      skills: ["UI/UX Design", "User Experience", "Prototyping", "Design Thinking", "AI-Assisted Design"],
      icon: Award,
      color: "from-purple-500 to-pink-600",
      verified: true,
      category: "Design & UX"
    }
  ];

  const certificationStats = [
    { label: "Certifications Earned", value: "3+", description: "Industry-recognized credentials" },
    { label: "Skill Areas", value: "5", description: "Different technology domains" },
    { label: "Learning Hours", value: "200+", description: "Dedicated skill development" },
    { label: "Verification Rate", value: "100%", description: "All certificates verified" }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Certifications & Training
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications and training programs that validate my technical expertise
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="project-card group scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 smooth-transition flex-shrink-0`}>
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center text-emerald-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                {/* Certificate Details */}
                <div className="space-y-4">
                  <div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2">
                      {cert.category}
                    </span>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary smooth-transition leading-tight">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="font-medium text-primary">{cert.organization}</span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Gained */}
                  <div>
                    <h5 className="font-semibold text-sm text-foreground mb-2">Skills Gained:</h5>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-accent text-accent-foreground border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn"
                    onClick={() => {
                      // In a real implementation, you'd have actual certificate links
                      console.log(`Viewing ${cert.title} certificate`);
                    }}
                  >
                    <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:scale-110 smooth-transition" />
                    View Certificate
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 slide-in-left" style={{ animationDelay: '0.8s' }}>
            {certificationStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gradient-card rounded-lg border border-border portfolio-shadow hover-lift group"
              >
                <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 smooth-transition">
                  {stat.value}
                </div>
                <div className="font-medium text-foreground text-sm mb-1">
                  {stat.label}
                </div>
                <p className="text-muted-foreground text-xs">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <div className="text-center fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-card rounded-lg p-8 border border-border portfolio-shadow">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Commitment to Continuous Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
                These certifications represent my dedication to staying current with industry trends and 
                continuously expanding my technical expertise. I believe in learning from the best and 
                earning credentials that validate practical skills.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Verified Skills</h4>
                  <p className="text-sm text-muted-foreground">All certifications are industry-verified</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Practical Focus</h4>
                  <p className="text-sm text-muted-foreground">Hands-on learning with real projects</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Always Learning</h4>
                  <p className="text-sm text-muted-foreground">Continuously pursuing new certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;