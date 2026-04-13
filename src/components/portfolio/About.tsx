import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full Stack", value: "Developer" },
  { icon: Palette, label: "UI/UX", value: "Focused" },
  { icon: Zap, label: "Performance", value: "Optimized" },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[200px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl section-reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
          About Me
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />

        <div className="glass-card-premium p-8 md:p-12">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            I am a passionate <span className="text-primary">Full Stack Developer</span> focused on building
            <span className="text-primary"> responsive</span>, <span className="text-primary">scalable</span>, and
            visually appealing web applications. I work with both frontend and backend technologies to create
            complete solutions, from UI design to server-side logic.

            <br /><br />

            I enjoy turning ideas into real-world products using modern tools like
            <span className="text-primary"> React</span>, <span className="text-primary"> Node.js</span>, and
            <span className="text-primary"> MongoDB</span>. Currently, I am improving my skills by building
            full stack projects and gaining practical experience.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="text-center p-4 rounded-lg bg-muted/30 border border-glass-border"
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-foreground">
                  {value}
                </div>
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