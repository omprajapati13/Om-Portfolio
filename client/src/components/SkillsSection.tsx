import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      name: "Front-End Development",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      name: "Back-End & Database",
      skills: [
        { name: "PHP", level: 75 },
        { name: "MERN Stack", level: 70 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
    },
  ];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "React.js",
    "MERN Stack",
    "MySQL",
    "MongoDB",
    "UI/UX",
    "Figma",
    "Prototyping",
    "Bootstrap",
    "GitHub",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-skills-title">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <Card key={catIndex} className="p-8 space-y-6" data-testid={`card-skill-category-${catIndex}`}>
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium" data-testid={`text-skill-name-${catIndex}-${skillIndex}`}>
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress
                    value={isVisible ? skill.level : 0}
                    className="h-2 transition-all duration-1000"
                    data-testid={`progress-skill-${catIndex}-${skillIndex}`}
                  />
                </div>
              ))}
            </Card>
          ))}
        </div>

        <Card className="p-8 glassmorphism">
          <h3 className="text-xl font-semibold mb-6 text-center">Technology Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`badge-tech-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
