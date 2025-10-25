import { GraduationCap, Brain, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "B.Tech in Electronics & Computer Engineering from VIT Chennai, with expertise in ML, AI, and Data Analytics"
    },
    {
      icon: Brain,
      title: "AI/ML Innovation",
      description: "Passionate about building intelligent systems that solve real-world problems through machine learning and automation"
    },
    {
      icon: TrendingUp,
      title: "Trading Systems",
      description: "Developed automated algo-trading systems with 92% backtest accuracy and real-time market integration"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-left mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A tech innovator combining academic excellence with practical experience in AI, machine learning, and quantitative trading
          </p>
        </div>

        {/* Floating highlight cards with stagger effect */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group p-8 bg-card border-border card-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <item.icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Professional bio */}
        <div className="mt-20 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="p-10 md:p-12 bg-card border-border hover-glow">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a fourth-year B.Tech student at VIT Chennai with a passion for leveraging technology to solve complex problems. My journey spans AI/ML development, data analytics, and algorithmic trading—fields where I've built impactful projects and gained hands-on experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From developing healthcare analytics dashboards that improve decision-making to creating automated trading systems with 92% backtest accuracy, I thrive at the intersection of data, intelligence, and automation. My work has consistently delivered measurable results, including 60% reduction in reporting time and 90% reduction in manual intervention.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond technical skills, I bring leadership experience as President of Athenaeum Club and General Secretary of Wakhra Punjab Club, where I've led teams, managed large-scale events, and fostered innovation-driven communities.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
