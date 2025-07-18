import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Users, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: Trophy,
      title: "Results",
      description: "Delivering high-quality projects that exceed expectations"
    }
  ];

  const interests = [
    "Full-Stack Development",
    "Mobile Applications", 
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "Machine Learning",
    "Open Source",
    "Tech Innovation"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate software developer with a keen eye for creating digital experiences 
                that matter. My journey in technology started with curiosity and has evolved into a 
                career dedicated to building innovative solutions.
              </p>
              <p>
                With expertise spanning multiple technologies and frameworks, I enjoy tackling 
                complex challenges and turning ideas into reality. Whether it's crafting elegant 
                user interfaces or architecting robust backend systems, I bring creativity and 
                technical excellence to every project.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest tech trends, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in" style={{animationDelay: '0.2s'}}>
            {highlights.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:scale-105 border-0 card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-2xl font-bold mb-8">Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;