import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useCallback } from "react";
import { Code } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
];

const Skills = () => {
  const ref = useScrollReveal();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl section-reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">Skills & Tech</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />
        <p className="text-muted-foreground mb-12 max-w-xl">Technologies I work with daily to build exceptional products.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                ref={(el) => { cardRefs.current[idx] = el; }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                className="glass-card-premium card-spotlight p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
