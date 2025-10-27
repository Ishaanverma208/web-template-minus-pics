import { Users, Award, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Leadership = () => {
  const roles = [
    {
      icon: Award,
      title: "Athenaeum Club",
      position: "President",
      period: "January 2024 - July 2025",
      achievements: [
        "Led 10+ academic and creative initiatives including book readings and AI literacy campaigns",
        "Spearheaded a student-led mentorship program for emerging technologies",
        "Coordinated with faculty to host guest lectures on AI and analytics trends",
        "Organized workshops on research skills and academic writing"
      ]
    },
    {
      icon: Sparkles,
      title: "Wakhra Punjab Club",
      position: "General Secretary",
      period: "January 2024 - July 2025",
      achievements: [
        "Managed operations, budgeting, and execution of large-scale cultural events",
        "Coordinated events with 2000+ attendees at VIT Chennai",
        "Fostered inter-club collaborations across multiple student organizations",
        "Implemented internal communication structure for efficient event planning"
      ]
    }
  ];

  return (
    <section id="leadership" className="py-32 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leadership & <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building communities and driving positive change beyond technical work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="group p-8 md:p-10 bg-card border-border card-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <role.icon size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{role.position}</p>
                    <span className="text-sm text-muted-foreground">{role.period}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Key Achievements:
                  </h4>
                  <ul className="space-y-3">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Impact Section */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Card className="p-10 bg-card border-border hover-glow">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Leadership Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My approach to leadership emphasizes collaboration, innovation, and inclusivity. Whether organizing events for thousands of students or mentoring peers in emerging technologies, I believe in creating environments where everyone can contribute and grow. These experiences have honed my project management, communication, and team-building skills—qualities that complement my technical expertise.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
