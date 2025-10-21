import { Code, Wrench, Globe, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 80 },
        { name: "Kotlin", level: 75 },
      ]
    },
    {
      icon: Wrench,
      category: "Tools & Frameworks",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Excel", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "Figma", level: 82 },
      ]
    },
    {
      icon: Target,
      category: "Data Science & AI",
      skills: [
        { name: "Pandas & NumPy", level: 92 },
        { name: "scikit-learn", level: 88 },
        { name: "Machine Learning", level: 90 },
        { name: "NLP", level: 85 },
        { name: "Data Analytics", level: 93 },
        { name: "Streamlit", level: 85 },
      ]
    },
    {
      icon: Globe,
      category: "Soft Skills",
      skills: [
        { name: "Analytical Thinking", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Leadership", level: 92 },
        { name: "Research Skills", level: 88 },
        { name: "Problem Solving", level: 93 },
        { name: "Team Collaboration", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical and professional skillset built through academic excellence and hands-on projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              className="group p-8 md:p-10 bg-card border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
