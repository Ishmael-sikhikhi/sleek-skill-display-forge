import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      location: "Johannesburg, SA",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of multiple web applications using React, TypeScript, and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines and improved deployment processes"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "Cape Town, SA",
      period: "2020 - 2022",
      type: "Full-time",
      description: [
        "Developed and maintained e-commerce platforms serving thousands of users",
        "Built responsive web applications with modern JavaScript frameworks",
        "Integrated third-party APIs and payment processing systems",
        "Optimized application performance and database queries"
      ],
      technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Stripe API", "Git"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Studio",
      location: "Durban, SA", 
      period: "2019 - 2020",
      type: "Contract",
      description: [
        "Created pixel-perfect responsive websites from design mockups",
        "Implemented interactive user interfaces with smooth animations",
        "Collaborated with designers to ensure optimal user experience",
        "Maintained and updated existing client websites"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "SASS", "jQuery", "Bootstrap"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of the Witwatersrand",
      location: "Johannesburg, SA",
      period: "2016 - 2019",
      description: "Specialized in Software Engineering and Web Development"
    },
    {
      degree: "Certificate in Web Development",
      institution: "FreeCodeCamp",
      location: "Online",
      period: "2018",
      description: "Full Stack Web Development Certification"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Building size={24} className="text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 card-gradient transform hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Calendar size={24} className="text-primary" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 card-gradient transform hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;