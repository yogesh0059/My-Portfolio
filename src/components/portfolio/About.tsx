import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", value: "Advocate" },
  { icon: Palette, label: "Design", value: "Oriented" },
  { icon: Zap, label: "Performance", value: "Obsessed" },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[200px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl section-reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />

        <div className="glass-card-premium p-8 md:p-12">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            I am a passionate frontend developer focused on building <span className="text-primary">responsive</span>, <span className="text-primary">user-friendly</span>, and
            visually appealing web applications. I enjoy turning ideas into real-world projects using modern technologies.
            Currently improving my skills and building projects to gain real-world experience and grow as a developer.
          </p>

          {/* Highlight stats */}
          <div className="grid grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center p-4 rounded-lg bg-muted/30 border border-glass-border">
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
