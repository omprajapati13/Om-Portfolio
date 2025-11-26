import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@assets/om4.jpg";

export default function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/om-prajapati-cv.pdf";
    link.download = "Om_Prajapati_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="relative inline-block">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 animate-glow mx-auto">
            <img
              src={profileImage}
              alt="Om Prajapati"
              className="w-full h-full object-cover"
              data-testid="img-profile"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm <span className="gradient-text">Om Prajapati</span> 👋
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }} data-testid="text-role">
            UI/UX Designer & Front-End Developer
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }} data-testid="text-tagline">
            I design clean, modern, user-friendly digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="gap-2"
            data-testid="button-hire-hero"
          >
            <Mail className="h-5 w-5" />
            Hire Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleDownloadCV}
            className="gap-2"
            data-testid="button-download-cv"
          >
            <Download className="h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
