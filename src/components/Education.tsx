import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.E. Artificial Intelligence & Machine Learning",
      institution: "Ballari Institute of Technology & Management",
      period: "2023 - 2026",
      location: "Karnataka, India",
      grade: "CGPA: 7.20",
      status: "Currently Pursuing",
      description: "Specializing in cutting-edge AI/ML technologies, deep learning, data science, and modern software development practices. Focus on practical applications and industry-relevant projects.",
      subjects: [
        "Machine Learning & Deep Learning",
        "Artificial Intelligence",
        "Data Structures & Algorithms",
        "Computer Vision",
        "Natural Language Processing",
        "Software Engineering",
        "Database Management Systems",
        "Web Technologies"
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-600"
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Sanjay Gandhi Polytechnic",
      period: "2019 - 2022",
      location: "Karnataka, India",
      grade: "68.20%",
      status: "Completed",
      description: "Strong foundation in engineering principles, problem-solving methodologies, and technical analysis. This background provides valuable analytical skills that complement my software development journey.",
      subjects: [
        "Engineering Mechanics",
        "Thermodynamics",
        "Manufacturing Processes",
        "Materials Science",
        "Design Engineering",
        "Quality Control",
        "Project Management",
        "Technical Drawing"
      ],
      icon: Award,
      color: "from-emerald-500 to-teal-600"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Mohammadia English Medium High School",
      period: "2019",
      location: "Karnataka, India",
      grade: "61.00%",
      status: "Completed",
      description: "Completed foundational education with focus on mathematics, science, and English. Built strong analytical and communication skills that form the basis of my technical journey.",
      subjects: [
        "Mathematics",
        "Science",
        "English",
        "Social Studies",
        "Hindi",
        "Computer Science"
      ],
      icon: GraduationCap,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Education Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My academic foundation and continuous learning path in technology and engineering
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-card group">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Icon & Status */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition`}>
                        <edu.icon className="h-8 w-8 text-white" />
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'bg-accent text-accent-foreground border border-border'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Education Details */}
                    <div className="md:col-span-3 space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary smooth-transition">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {edu.institution}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {edu.location}
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            {edu.grade}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Key Subjects */}
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Key Subjects & Areas:</h5>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {edu.subjects.map((subject, subIndex) => (
                            <div key={subject} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                              {subject}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Highlights */}
          <div className="mt-16 fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-card rounded-lg p-8 border border-border portfolio-shadow">
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                Academic Highlights
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">B.E.</div>
                  <p className="text-sm text-muted-foreground">AI/ML Specialization</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">7.20</div>
                  <p className="text-sm text-muted-foreground">Current CGPA</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">2026</div>
                  <p className="text-sm text-muted-foreground">Expected Graduation</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <p className="text-sm text-muted-foreground">Years of Learning</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  My educational journey reflects a transition from mechanical engineering to the exciting world of 
                  AI/ML and software development. This diverse background provides me with a unique perspective on 
                  problem-solving and technical innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;