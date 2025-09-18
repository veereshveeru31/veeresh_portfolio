import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "Python Internship",
      organization: "Python Foundation",
      issueDate: "2024",
      category: "Programming",
      verified: true,
      certificateUrl: "https://drive.google.com/file/d/1w2p8XNWEy11Kcyi_hkwexh4g5i0m5TnQ/view?usp=sharing"
    },
    {
      title: "Google Cloud Certificate",
      organization: "Google Cloud Platform",
      issueDate: "2024",
      category: "Cloud Technology",
      verified: true,
      certificateUrl: "https://drive.google.com/file/d/1qQUWQq10QoPAKw0V2EMAnA_4aJm3nNUO/view?usp=sharing"
    },
    {
      title: "UI/UX Designing with ChatGPT",
      organization: "Professional Development",
      issueDate: "2024",
      category: "Design & UX",
      verified: true,
      certificateUrl: "https://openai.com/chatgpt"
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
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications that validate my technical expertise
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 scale-in hover-lift hover-glow cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 transform transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <Award className="h-6 w-6 text-white transition-all duration-300 group-hover:scale-110" />
                    </div>
                    {cert.verified && (
                      <div className="flex items-center text-emerald-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {cert.category}
                    </span>
                    
                    <h3 className="font-bold text-lg text-foreground leading-tight">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {cert.organization}
                    </p>
                    
                    <p className="text-xs text-muted-foreground">
                      Issued: {cert.issueDate}
                    </p>

                    <button 
                      onClick={() => window.open(cert.certificateUrl, '_blank')}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary/20 rounded-md hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      View Certificate
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;