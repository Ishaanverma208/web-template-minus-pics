import { useEffect, useState } from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  BarChart3, 
  LineChart, 
  Cpu, 
  FileJson,
  Layers,
  GitBranch,
  PieChart,
  Workflow,
  Binary
} from 'lucide-react';

const FloatingSkillsIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    { icon: Code2, name: 'Python', color: 'text-blue-400', delay: 0 },
    { icon: Database, name: 'SQL', color: 'text-orange-400', delay: 0.1 },
    { icon: Brain, name: 'Machine Learning', color: 'text-purple-400', delay: 0.2 },
    { icon: BarChart3, name: 'Power BI', color: 'text-yellow-400', delay: 0.3 },
    { icon: LineChart, name: 'Data Analytics', color: 'text-green-400', delay: 0.4 },
    { icon: Cpu, name: 'AI/NLP', color: 'text-pink-400', delay: 0.5 },
    { icon: FileJson, name: 'JavaScript', color: 'text-cyan-400', delay: 0.6 },
    { icon: Layers, name: 'React.js', color: 'text-indigo-400', delay: 0.7 },
    { icon: GitBranch, name: 'GitHub', color: 'text-gray-400', delay: 0.8 },
    { icon: PieChart, name: 'Tableau', color: 'text-teal-400', delay: 0.9 },
    { icon: Workflow, name: 'scikit-learn', color: 'text-red-400', delay: 1.0 },
    { icon: Binary, name: 'Algo Trading', color: 'text-emerald-400', delay: 1.1 }
  ];

  const [positions, setPositions] = useState<Array<{ x: number; y: number; rotation: number }>>([]);

  useEffect(() => {
    // Function to check if two positions are too close
    const isTooClose = (x1: number, y1: number, x2: number, y2: number, minDistance: number) => {
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance < minDistance;
    };

    // Generate positions with minimum spacing
    const generatePositions = () => {
      const newPositions: Array<{ x: number; y: number; rotation: number }> = [];
      const minDistance = 15; // Minimum distance between icons (in percentage)
      const maxAttempts = 100; // Maximum attempts to place each icon

      for (let i = 0; i < skills.length; i++) {
        let placed = false;
        let attempts = 0;

        while (!placed && attempts < maxAttempts) {
          const x = Math.random() * 70 + 15; // 15% to 85% of container width
          const y = Math.random() * 60 + 20; // 20% to 80% of container height
          
          // Check if this position is far enough from all existing positions
          let valid = true;
          for (const pos of newPositions) {
            if (isTooClose(x, y, pos.x, pos.y, minDistance)) {
              valid = false;
              break;
            }
          }

          if (valid || newPositions.length === 0) {
            newPositions.push({
              x,
              y,
              rotation: Math.random() * 360
            });
            placed = true;
          }

          attempts++;
        }

        // If we couldn't find a valid position after max attempts, place it anyway
        if (!placed) {
          newPositions.push({
            x: Math.random() * 70 + 15,
            y: Math.random() * 60 + 20,
            rotation: Math.random() * 360
          });
        }
      }

      return newPositions;
    };

    setPositions(generatePositions());
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover over the icons to explore my technical skills
          </p>
        </div>

        <div className="relative h-[400px] max-w-6xl mx-auto">
          {/* Background glow effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl top-10 left-20 animate-pulse" />
            <div className="absolute w-64 h-64 bg-accent/20 rounded-full blur-3xl bottom-10 right-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Floating skill icons */}
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const position = positions[index] || { x: 50, y: 50, rotation: 0 };
            
            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-out cursor-pointer group"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: `translate(-50%, -50%) ${hoveredIndex === index ? 'scale(1.3)' : 'scale(1)'}`,
                  animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
                  animationDelay: `${skill.delay}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 rounded-full`}
                  />
                  
                  {/* Icon container */}
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-card border-2 border-border flex items-center justify-center ${skill.color} transition-all duration-300 group-hover:border-current group-hover:shadow-lg`}
                    style={{
                      transform: hoveredIndex === index ? 'rotate(0deg)' : `rotate(${position.rotation}deg)`,
                    }}
                  >
                    <Icon size={24} className="md:w-7 md:h-7" />
                  </div>

                  {/* Skill name tooltip */}
                  <div
                    className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-lg bg-card border border-border text-sm font-medium transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {skill.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default FloatingSkillsIcons;
