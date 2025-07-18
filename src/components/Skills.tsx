import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "Database Design", level: 82 },
        { name: "API Development", level: 88 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS/Cloud", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Next.js", "Express.js",
    "MongoDB", "PostgreSQL", "Docker", "AWS", "Git", "Tailwind CSS",
    "JavaScript", "HTML5", "CSS3", "REST APIs", "GraphQL", "Firebase",
    "Vercel", "Netlify", "Linux", "VS Code", "Figma", "Postman"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and tools I work with
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 card-gradient animate-scale-in"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h3 className="text-2xl font-bold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default transform hover:scale-105"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;