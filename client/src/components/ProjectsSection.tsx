import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A complete system for streamlining hospital operations, enhancing patient management, and improving workflow efficiency.",
      tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Budget Buddy",
      description:
        "A responsive income & expense tracking app built using React.js with category-based filtering and budget monitoring features.",
      tags: ["React.js", "JavaScript", "CSS", "Local Storage"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Foodgo App",
      description:
        "Modern and visually rich food ordering app designed in Figma with clean layout, typography, and seamless navigation.",
      tags: ["UI/UX", "Figma", "Prototyping", "Design System"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const handleViewProject = (title: string) => {
    console.log(`View project: ${title}`);
  };

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group"
              data-testid={`card-project-${index}`}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => handleViewProject(project.title)}
                  data-testid={`button-view-project-${index}`}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
