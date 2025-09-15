import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Wardrobe App",
      description: "A smart wardrobe assistant that provides personalized outfit recommendations based on current weather conditions. Built with React, TypeScript, and integrated with weather APIs.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Weather API", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://dress-right.vercel.app/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Attendance Register System",
      description: "Digital attendance tracking application with Excel export functionality, real-time analytics, and student management. Features daily attendance monitoring, history tracking, and comprehensive reporting capabilities.",
      image: "/placeholder.svg", 
      technologies: ["React", "JavaScript", "Excel Integration", "Analytics", "Responsive Design"],
      liveUrl: "https://easy-attend-excel-v.pages.dev/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking. Built for modern teams.",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Material-UI", "Real-time Updates"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Custom-designed portfolio website showcasing projects and skills. Features smooth animations, responsive design, and optimal performance.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Restaurant Booking App", 
      description: "Mobile-first application for restaurant reservations with real-time availability, user reviews, and integrated payment system.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Express.js", "PostgreSQL", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics with dynamic charts, real-time data updates, and customizable reporting features.",
      image: "/placeholder.svg",
      technologies: ["D3.js", "React", "Python", "FastAPI", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 animate-slide-up">
            🌟 Highlighted Work
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group shadow-card hover:shadow-elegant transition-all duration-500 border-0 card-gradient overflow-hidden transform hover:scale-105 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center text-muted-foreground">
                  <Eye size={48} className="opacity-50" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-primary hover:bg-primary/90 shadow-card"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="group shadow-card hover:shadow-elegant transition-all duration-300 border-0 card-gradient transform hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/30">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground text-xs"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={12} className="mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground text-xs"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={12} className="mr-1" />
                        Code
                      </a>
                    </Button>
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

export default Projects;
