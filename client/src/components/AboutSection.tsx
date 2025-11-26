import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech – Computer Engineering",
      subtitle: "Ganpat University",
    },
    {
      icon: MapPin,
      title: "Mehsana, Gujarat",
      subtitle: "India",
    },
    {
      icon: Phone,
      title: "+91 9601610287",
      subtitle: "Available for calls",
    },
    {
      icon: Mail,
      title: "omvariya71@gmail.com",
      subtitle: "Email me anytime",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-about-title">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-12 rounded-full" />

        <div className="space-y-8">
          <Card className="p-8 glassmorphism" data-testid="card-about-bio">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
              I am a passionate UI/UX Designer and Front-End Developer skilled in creating intuitive
              and visually appealing digital experiences. I enjoy transforming ideas into functional
              and user-centric designs. As a fresher, I have hands-on experience with real projects,
              internships, and modern tools.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300 hover:scale-105"
                data-testid={`card-highlight-${index}`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" data-testid={`text-highlight-title-${index}`}>
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
