import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import belLogo from "@/assets/bel-logo.png";

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world industrial exposure in defense electronics and automation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="group p-10 md:p-12 bg-card border-border card-glow animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center p-1 group-hover:scale-110 transition-all duration-500">
                  <img src={belLogo} alt="Bharat Electronics Limited" className="w-full h-full object-cover scale-150" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold">Intern</h3>
                    </div>
                    <p className="text-xl font-semibold text-muted-foreground">Bharat Electronics Limited (BEL)</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    May 2024 - July 2024
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  Gained hands-on experience in defense electronics manufacturing and industrial automation at one of India's premier defense PSUs.
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Key Learnings:
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>Exposure to defense-grade electronic component manufacturing processes</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>Understanding of quality assurance protocols in defense electronics</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>Industrial automation systems and production line optimization</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>Project management in large-scale industrial environments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
