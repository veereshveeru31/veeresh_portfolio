import React from 'react';
import Navbar from './navbar';

const NavbarDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Import and use the navbar */}
      <Navbar />
      
      {/* Demo content sections */}
      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-muted-foreground">This is the home section</p>
          </div>
        </section>
        
        <section id="about" className="min-h-screen flex items-center justify-center bg-accent/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">This is the about section</p>
          </div>
        </section>
        
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p className="text-muted-foreground">This is the skills section</p>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center bg-accent/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground">This is the projects section</p>
          </div>
        </section>
        
        <section id="experience" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">This is the experience section</p>
          </div>
        </section>
        
        <section id="education" className="min-h-screen flex items-center justify-center bg-accent/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground">This is the education section</p>
          </div>
        </section>
        
        <section id="achievements" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
            <p className="text-muted-foreground">This is the achievements section</p>
          </div>
        </section>
        
        <section id="certifications" className="min-h-screen flex items-center justify-center bg-accent/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground">This is the certifications section</p>
          </div>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground">This is the contact section</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NavbarDemo;