import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Ishmael Sikhikhi</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-6 font-light">
              Software Developer & Tech Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating innovative solutions and bringing ideas to life through code. 
              Specialized in full-stack development with a focus on user experience and clean, efficient code.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-elegant text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Github size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Mail size={24} />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{animationDelay: '0.3s'}}>
            <Card className="relative shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden">
              <div className="w-80 h-80 sm:w-96 sm:h-96">
                <img
                  src={heroPhoto}
                  alt="Ishmael Sikhikhi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;