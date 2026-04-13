import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useCallback } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const frontendProjects = [
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

// 🔥 NEW BACKEND / FULL STACK PROJECT
const backendProjects = [
  {
    title: "VoucherHub",
    description: "A full-stack platform for managing and generating discount vouchers with secure backend integration and user authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "#",
    github: "#",
    accent: "from-secondary to-primary",
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

  const renderProjects = (projects: any[], startIndex = 0) =>
    projects.map((project, idx) => (
      <div
        key={project.title}
        ref={(el) => { cardRefs.current[startIndex + idx] = el; }}
        onMouseMove={(e) => handleMouseMove(e, startIndex + idx)}
        className="relative glass-card-premium card-spotlight group p-6 flex flex-col hover:scale-[1.02] transition-transform duration-500"
      >
        <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${project.accent} mb-5 group-hover:w-20 transition-all duration-500`} />

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          {project.title}
          <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </h3>

        <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t: string) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/15">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-5 pt-2 border-t border-glass-border relative z-10">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm ${
              project.live === "#" ? "opacity-50 pointer-events-none" : "hover:text-primary"
            }`}
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm ${
              project.github === "#" ? "opacity-50 pointer-events-none" : "hover:text-primary"
            }`}
          >
            <Github className="w-4 h-4" /> Source
          </a>
        </div>
      </div>
    ));

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">

        {/* FRONTEND */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
          Frontend Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {renderProjects(frontendProjects)}
        </div>

        {/* BACKEND */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
          Full Stack Project
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {renderProjects(backendProjects, frontendProjects.length)}
        </div>

      </div>
    </section>
  );
};
export default Projects;