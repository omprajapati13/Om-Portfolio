import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const certificates = [
    { name: "Ultimate Front-End", provider: "Udemy", year: "2024" },
    { name: "UI/UX for Beginners", provider: "Great Learning", year: "2024" },
    { name: "MERN Stack Internship", provider: "Grownited Pvt Ltd", year: "2025" },
    { name: "Java OOP", provider: "Scaler", year: "2023" },
    { name: "Skill Nation Workshop", provider: "Skill Nation", year: "2024" },
    { name: "Generative AI Tools", provider: "Online Course", year: "2024" },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certificates" className="py-20 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-certificates-title">
          Certificates & Achievements
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-12 rounded-full" />

        <div className="relative">
          <Card className="p-12 text-center glassmorphism min-h-[280px] flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2" data-testid="text-certificate-name">
              {certificates[currentIndex].name}
            </h3>
            <p className="text-lg text-muted-foreground mb-4" data-testid="text-certificate-provider">
              {certificates[currentIndex].provider}
            </p>
            <Badge variant="secondary">{certificates[currentIndex].year}</Badge>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={handlePrevious}
              data-testid="button-certificate-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  data-testid={`button-certificate-dot-${index}`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={handleNext}
              data-testid="button-certificate-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
