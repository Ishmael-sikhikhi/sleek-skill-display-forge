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
    "Mobile Development",
    "Web Development", 
    "Java Programming",
    "C# & .NET Development",
    "Xamarin Cross-Platform",
    "Python Development",
    "SQL Database Design",
    "Full-Stack Development",
    "Problem Solving",
    "Research & Development"
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
                I'm a passionate software developer from Cape Town, South Africa, with a keen focus on 
                mobile development and web development. My journey in technology started with curiosity 
                and has evolved into a career dedicated to solving complex problems through code.
              </p>
              <p>
                As a problem solver and fast learner, I easily adapt to new environments and embrace 
                emerging technologies. I have extensive knowledge in programming languages including Java, 
                SQL, C#, .NET, Xamarin multiplatform, and Python fundamentals.
              </p>
              <p>
                Currently working as a Research Intern at the University of the Western Cape, I'm 
                continuously expanding my skill set. I recently completed a Certificate in Full Stack 
                Development from FNB App Academy 2025, further solidifying my expertise in modern development practices.
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