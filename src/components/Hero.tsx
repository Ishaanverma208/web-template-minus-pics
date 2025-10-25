import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import DitherBackground from "@/components/DitherBackground";

const Hero = () => {
  const typingWords = [
    "AI Engineer",
    "ML Developer",
    "Algo Trader",
    "Full-Stack Developer",
    "Data Analyst",
    "Problem Solver",
    "Decision Analyst",
    "Capital Market Trader",
    "Business Analyst",
  ];

  const displayText = useTypingEffect({
    words: typingWords,
    typingSpeed: 90,
    deletingSpeed: 70,
    pauseTime: 1500,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <DitherBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Professional badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">Open to opportunities</span>
          </div>

          {/* Centered Heading */}
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center w-full">
              Hi, I'm <span className="text-gradient">Ishaan Verma</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground min-h-[40px] text-center w-full">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-center">
            Final year Electronics & Computer Engineering student at VIT Chennai, specializing in AI, Machine Learning, Data Analytics, and Automated Trading Systems. Building intelligent systems that think, learn, and trade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover-lift shadow-lg hover:shadow-[0_20px_60px_-10px_hsl(217_60%_55%/0.6)]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary/50 hover-lift hover:bg-primary/5 backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://github.com/Ishaanverma208"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover-scale transition-all duration-300 hover:shadow-[0_8px_30px_hsl(217_60%_55%/0.4)]"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ishaan-verma-b47146305/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 hover-scale transition-all duration-300 hover:shadow-[0_8px_30px_hsl(199_50%_52%/0.4)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ishaanverma208@gmail.com"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover-scale transition-all duration-300 hover:shadow-[0_8px_30px_hsl(217_60%_55%/0.4)]"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
