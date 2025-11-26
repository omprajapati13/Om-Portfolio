import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "B.Tech – Computer Engineering",
      institution: "Ganpat University",
      period: "2022 – 2025",
      score: "CGPA 7.20",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gujarat Board",
      period: "2022",
      score: "66.30%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Gujarat Board",
      period: "2020",
      score: "73.83%",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-education-title">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-12 rounded-full" />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-education-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1" data-testid={`text-education-degree-${index}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-muted-foreground">{edu.period}</span>
                    <span className="text-primary font-medium">{edu.score}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
