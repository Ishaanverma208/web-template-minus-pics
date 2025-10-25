import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import Dither from "@/components/Dither";

const Hero = () => {
  const typingWords = [
    "AI Engineer",
    "ML Developer",
    "Algo Trader",
    "Full-Stack Developer",
    "Data Analyst",
    "Problem Solver"
  ];

  const displayText = useTypingEffect({
    words: typingWords,
    typingSpeed: 60,
    deletingSpeed: 40,
    pauseTime: 1500,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Dither background */}
      <div className="absolute inset-0 bg-background">
        <Dither waveColor={[0.3, 0.5, 0.7]} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="max-w-4xl">
            {/* Primary Content */}
            <div className="space-y-8 animate-fade-in text-left">
              {/* Professional badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-muted-foreground">Open to opportunities</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-float">
                  Hi, I'm <span className="text-gradient">Ishaan Verma</span>
                </h1>
                <div className="flex items-center gap-3 text-2xl md:text-3xl font-medium text-muted-foreground min-h-[2.5rem]">
                  <span>I'm a</span>
                  <span className="text-gradient">{displayText}</span>
                  <span className="w-0.5 h-8 bg-primary animate-pulse" />
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Final year Electronics & Computer Engineering student at VIT Chennai, specializing in AI, Machine Learning, Data Analytics, and Automated Trading Systems. Building intelligent systems that think, learn, and trade.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-start">
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
              <div className="flex items-center gap-4 justify-start">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
