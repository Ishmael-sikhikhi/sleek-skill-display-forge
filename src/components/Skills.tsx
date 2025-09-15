import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "C#", level: 82 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 88 },
        { name: "C Programming", level: 45 }
      ]
    },
    {
      title: "Frameworks & Platforms", 
      skills: [
        { name: ".NET Framework", level: 85 },
        { name: "Xamarin", level: 80 },
        { name: "React", level: 45 },
        { name: "Android Development", level: 82 },
        { name: "Web Development", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Visual Studio", level: 90 },
        { name: "Git/GitHub", level: 85 },
        { name: "Database Design", level: 88 },
        { name: "Mobile Development", level: 85 },
        { name: "Research & Analysis", level: 80 }
      ]
    }
  ];

  const technologies = [
    "Java", "C#", ".NET", "Python", "SQL", "Xamarin", "Android Development",
    "Web Development", "React", "JavaScript", "HTML5", "CSS3", "Visual Studio",
    "Git", "GitHub", "Database Design", "Mobile Development", "Cross-Platform",
    "Problem Solving", "Research", "Full-Stack Development", "Object-Oriented Programming"
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