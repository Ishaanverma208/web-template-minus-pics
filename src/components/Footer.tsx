import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Ishaan Verma</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Ishaanverma208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover-scale hover:drop-shadow-[0_4px_12px_hsl(217_60%_55%/0.5)]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ishaan-verma-b47146305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent hover-scale hover:drop-shadow-[0_4px_12px_hsl(199_50%_52%/0.5)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ishaanverma208@gmail.com"
              className="text-muted-foreground hover:text-primary hover-scale hover:drop-shadow-[0_4px_12px_hsl(217_60%_55%/0.5)]"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
