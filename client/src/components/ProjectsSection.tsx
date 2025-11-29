import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      link: "https://github.com/omprajapati13/Hospital-Management-System",
    },
    {
      title: "Budget Buddy",
      description:
        "A responsive income & expense tracking app built using React.js with category-based filtering and budget monitoring features.",
      tags: ["React.js", "JavaScript", "CSS", "Local Storage"],
      gradient: "from-purple-500 to-pink-500",
      link: "https://github.com/omprajapati13/BudgetBuddy",
    },
    {
      title: "Foodgo App",
      description:
        "Modern and visually rich food ordering app designed in Figma with clean layout, typography, and seamless navigation.",
      tags: ["UI/UX", "Figma", "Prototyping", "Design System"],
      gradient: "from-orange-500 to-red-500",
      link: "https://www.figma.com/design/DgCj75f177OEkEkpDZjKCK/food-design",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
  key={index}
  className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group 
  flex flex-col"
>
  {/* Top Image */}
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <div
      className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <ExternalLink className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  </a>

  {/* Uniform Content Box */}
  <div className="flex flex-col flex-grow px-6 py-5">

    {/* Title + Description */}
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground">
        {project.description}
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tags.map((tag, tagIndex) => (
        <Badge key={tagIndex} variant="secondary" className="text-xs">
          {tag}
        </Badge>
      ))}
    </div>

    {/* Uniform Button at Bottom */}
    <div className="mt-auto">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <Button className="w-full" variant="outline">
          View Project
        </Button>
      </a>
    </div>
  </div>
</Card>

          ))}
        </div>
      </div>
    </section>
  );
}
