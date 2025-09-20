import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "f5436dcf-385c-4c8f-86d9-64e4cbae8109",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "veeresh18266@gmail.com",
      href: "mailto:veeresh18266@gmail.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9353660842",
      href: "tel:+919353660842",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karnataka, India",
      href: null,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/veereshveeru31",
      href: "https://github.com/veereshveeru31",
      color: "hover:text-gray-700 dark:hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/k-veeresh-033045295",
      href: "https://linkedin.com/in/k-veeresh-033045295",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-accent/20">
      <div className="mobile-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 fade-in">
            <h2 className="text-section-title font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to discuss opportunities, collaborations, or just want to say hello? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-8 slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
                  Whether you're a recruiter, fellow developer, or someone with an exciting project idea, 
                  don't hesitate to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={contact.label}
                    className="flex items-center p-4 bg-gradient-card rounded-lg border border-border hover-lift group scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center mr-4 group-hover:scale-110 smooth-transition`}>
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-foreground font-medium hover:text-primary smooth-transition"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gradient-card rounded-lg border border-border hover-lift group smooth-transition"
                    >
                      <social.icon className={`h-5 w-5 text-muted-foreground group-hover:scale-110 smooth-transition ${social.color}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="slide-in-right">
              <div className="project-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
                    <p className="text-muted-foreground text-sm">Fill out the form below to get in touch</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="contact-input resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-portfolio-glow smooth-transition group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Connect Section */}
          <div className="mt-16 text-center fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-card rounded-lg p-8 border border-border portfolio-shadow">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
                Whether you're looking for a dedicated developer, have an innovative project idea, 
                or simply want to connect with someone passionate about technology, I'm just a message away. 
                Let's create something impactful!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => window.open('mailto:veeresh18266@gmail.com', '_blank')}
                  className="group"
                >
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 smooth-transition" />
                  Email Me Directly
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://linkedin.com/in/k-veeresh-033045295', '_blank')}
                  className="group"
                >
                  <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 smooth-transition" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;