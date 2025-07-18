import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern - Technical Assistance",
      company: "University of the Western Cape",
      location: "Cape Town, Western Cape, SA",
      period: "Present",
      type: "Internship",
      description: [
        "Conducting technical research and providing assistance in various development projects",
        "Working with cutting-edge technologies in academic research environment",
        "Collaborating with faculty and students on innovative software solutions",
        "Contributing to research publications and technical documentation"
      ],
      technologies: ["Research", "Technical Analysis", "Software Development", "Academic Research"]
    },
    {
      title: "Full Stack Development Student",
      company: "FNB App Academy",
      location: "South Africa",
      period: "2025",
      type: "Certification Program",
      description: [
        "Completed comprehensive Full Stack Development certification program",
        "Gained expertise in modern web development technologies and methodologies", 
        "Worked on real-world projects including app strategies and GitHub collaboration",
        "Mastered principles of UX design, responsive layouts, and user-centric development"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "App Development", "UX Design", "GitHub", "Full-Stack"]
    },
    {
      title: "Software Developer",
      company: "Self-Directed Learning & Projects",
      location: "Cape Town, SA",
      period: "2020 - Present",
      type: "Personal Development",
      description: [
        "Developed proficiency in multiple programming languages including Java, C#, and Python",
        "Built cross-platform mobile applications using Xamarin framework",
        "Created database solutions using SQL for various project requirements",
        "Continuously learning and adapting to new technologies and development methodologies"
      ],
      technologies: ["Java", "C#", ".NET", "Xamarin", "Python", "SQL", "Mobile Development"]
    }
  ];

  const education = [
    {
      degree: "Certificate in Full Stack Development",
      institution: "FNB App Academy",
      location: "South Africa",
      period: "2025",
      description: "32 Credits comprehensive program covering App Strategies, GitHub Collaboration, HTML/CSS, UX Design, Data Management, Business Development, and more. Certificate Number: AOTYAA072025"
    },
    {
      degree: "Research Internship - Technical Assistance",
      institution: "University of the Western Cape",
      location: "Cape Town, Western Cape, SA",
      period: "Present",
      description: "Ongoing research internship focusing on technical assistance and software development in academic environment"
    },
    {
      degree: "Software Development Self-Study",
      institution: "Various Online Platforms & Resources",
      location: "Self-Directed Learning",
      period: "2020 - Present",
      description: "Comprehensive self-directed learning in Java, C#, .NET, Xamarin, Python, SQL, and mobile development technologies"
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