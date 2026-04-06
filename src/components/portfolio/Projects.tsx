import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useCallback } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Vividfolio",
    description: "A modern animated personal portfolio website with smooth UI and responsive design.",
    tech: ["React", "Tailwind CSS"],
    live: "https://vividfolio.netlify.app/",
    github: "https://github.com/yogesh0059/vividfolio",
    accent: "from-primary to-secondary",
  },
  {
    title: "Taskify",
    description: "Interactive dashboard for managing tasks and productivity with clean UI.",
    tech: ["React", "Tailwind CSS"],
    live: "https://taskify24.netlify.app/",
    github: "https://github.com/yogesh0059/taskify",
    accent: "from-secondary to-neon-cyan",
  },
  {
    title: "TuneSpace",
    description: "Modern music player UI with interactive features and smooth animations.",
    tech: ["React", "Tailwind CSS"],
    live: "https://tunespace24.netlify.app/",
    github: "https://github.com/yogesh0059/tunespace",
    accent: "from-neon-cyan to-primary",
  },
  {
    title: "ShopNest",
    description: "Responsive e-commerce UI with product listing, cart design, and modern layout.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    live: "https://shopnest24.netlify.app/",
    github: "https://github.com/yogesh0059/ShopNest",
    accent: "from-primary to-neon-cyan",
  },
];

const Projects = () => {
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
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="absolute bottom-0 left-1/2 w-[700px] h-[500px] rounded-full bg-primary/3 blur-[200px] -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl section-reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
          Featured Projects
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />

        <p className="text-muted-foreground mb-12 max-w-xl">
          A selection of projects that showcase my skills and passion for building great products.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              ref={(el) => { cardRefs.current[idx] = el; }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              className="relative glass-card-premium card-spotlight group p-6 flex flex-col hover:scale-[1.02] transition-transform duration-500"
            >
              
              {/* Top accent */}
              <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${project.accent} mb-5 group-hover:w-20 transition-all duration-500`} />

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </h3>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 font-medium border border-primary/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINKS FIXED */}
              <div className="flex gap-5 pt-2 border-t border-glass-border relative z-10">
                
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
                    project.live === "#"
                      ? "opacity-50 pointer-events-none"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
                    project.github === "#"
                      ? "opacity-50 pointer-events-none"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;