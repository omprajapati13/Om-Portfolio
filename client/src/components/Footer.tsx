import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com", label: "GitHub" },
    { icon: SiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:omvariya71@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate transition-all hover:scale-110"
                aria-label={social.label}
                data-testid={`link-footer-social-${index}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Om Prajapati
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 Om Prajapati. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
