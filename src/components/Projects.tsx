import { Activity, Bot, Briefcase, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: "AI-Driven Healthcare Analytics Dashboard",
      description: "End-to-end healthcare analytics platform with predictive models achieving 87% accuracy in risk-level classification and 15% improvement in outcome prediction.",
      impact: [
        "60% reduction in executive reporting time",
        "40% faster data retrieval with SQL optimization",
        "50% improvement in scenario planning efficiency"
      ],
      tech: ["Python", "Pandas", "SQL", "Power BI", "Streamlit", "scikit-learn"]
    },
    {
      icon: Bot,
      title: "AI-Based Automated Algo-Trading System",
      description: "Real-time intraday trading system with ML-driven strategies, automated execution, and 92% backtest accuracy with minimal drawdowns.",
      impact: [
        "90% reduction in manual intervention",
        "18% increase in trade signal precision",
        "75% faster trade decision latency"
      ],
      tech: ["Python", "SmartAPI", "pandas", "scikit-learn", "NumPy"]
    },
    {
      icon: Briefcase,
      title: "Consultancy Platform – AI-Powered Business Advisory",
      description: "AI-powered business advisory tool with web scraping, competitor analysis, and LLM-driven Q&A for strategic insights.",
      impact: [
        "65% reduction in market research time",
        "40% faster client query resolution",
        "Automated strategic gap identification"
      ],
      tech: ["Python", "Streamlit", "LangChain", "NLP", "BeautifulSoup"]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions leveraging AI, machine learning, and data analytics to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group p-8 md:p-10 bg-card border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <project.icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Metrics */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Key Impact:
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {project.impact.map((metric, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-primary text-sm">✓</span>
                          <span className="text-sm text-muted-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-secondary text-sm font-medium border border-border hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
