import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Developer Trainee",
    company: "Bootcamp Training at sharda university",
    period: "2025",
    description: "Completed full-stack bootcamp training. Built multiple real-world projects using HTML, CSS, JavaScript, React, Node.js, and MongoDB. Focused on UI/UX and responsive design.",
    highlights: ["Real-World Projects", "UI/UX", "Responsive Design"],
  },
];

const Experience = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-secondary/3 blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl section-reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />
        <p className="text-muted-foreground mb-12 max-w-xl">My professional journey building digital products.</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style={{
            background: "linear-gradient(to bottom, hsl(265 90% 65% / 0.5), hsl(220 60% 50% / 0.3), transparent)",
          }} />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-2 mt-2">
                  <div className="timeline-dot" />
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                  <div className="glass-card-premium p-6 group hover:scale-[1.01] transition-transform duration-500">
                    <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mt-1">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.highlights.map((h) => (
                        <span key={h} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/70 font-medium border border-primary/15">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
