import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-experience-title">
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-12 rounded-full" />

        <Card className="p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-blue-600" />
          <div className="pl-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold" data-testid="text-experience-role">
                  React JS Internship
                </h3>
                <p className="text-lg text-primary font-medium" data-testid="text-experience-company">
                  Grownited Pvt Ltd
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground pl-16">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Jan 2025 – Apr 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Ahmedabad</span>
              </div>
            </div>

            <div className="pl-16 space-y-3">
              <p className="text-muted-foreground font-medium mb-2">Key Responsibilities:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Integrated RESTful APIs for seamless data communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Implemented responsive UI components using React.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Improved front-end data flow and state management</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
