import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:ishmael@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo/Name */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
            >
              Ishmael Sikhikhi
            </button>
            <p className="text-muted-foreground mt-2">
              Software Developer & Tech Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:scale-110 transition-all duration-300"
                asChild
              >
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              </Button>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-primary transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border w-full text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Ishmael Sikhikhi. Made with 
              <Heart size={16} className="text-red-500 fill-current" />
              and lots of coffee.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;