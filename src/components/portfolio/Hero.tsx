import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const roles = ["Full-Stack Developer", "React Developer", "UI Enthusiast", "Problem Solver"];

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowSubtitle(true), 600);
    const t2 = setTimeout(() => setShowButtons(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  // Generate particles once
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 6}s`,
      opacity: Math.random() * 0.5 + 0.2,
    })), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, hsl(230 25% 2%), hsl(240 30% 6%), hsl(265 35% 10%), hsl(220 30% 8%), hsl(230 25% 3%))",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Floating orbs - bigger, more dramatic */}
      <div className="absolute top-[15%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[140px] animate-orb-float" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[160px] animate-orb-float" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-[50%] left-[60%] w-[300px] h-[300px] rounded-full bg-neon-cyan/5 blur-[120px] animate-orb-float" style={{ animationDelay: "-8s" }} />

      {/* Particle field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-primary/60"
            style={{
              left: p.left,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `particle-drift ${p.duration} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(265 90% 65% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(265 90% 65% / 0.4) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Radial vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 3% / 0.4) 70%, hsl(230 25% 3% / 0.8) 100%)",
      }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Glowing avatar ring with rotating border */}
        <div className="mx-auto mb-8 mt-16 md:mt-20 w-24 h-24 md:w-28 md:h-28 relative">
          {/* Rotating ring */}
          <div
            className="absolute inset-[-3px] rounded-full animate-ring-rotate"
            style={{
              background: "conic-gradient(from 0deg, hsl(265 90% 65%), hsl(220 90% 60%), hsl(190 90% 55%), hsl(265 90% 65%))",
            }}
          />
          <div className="absolute inset-0 rounded-full bg-background" />
          <div className="relative w-full h-full rounded-full flex items-center justify-center animate-float">
            <span className="text-5xl">👨‍💻</span>
          </div>
        </div>

        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 transition-all duration-700 ${
            showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-wide">Available for work</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-stagger-in leading-[1.1]">
          Hi, I'm{" "}
          <span className="gradient-text">Yogesh</span>
        </h1>

        {/* Typewriter */}
        <div
          className={`text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 h-10 flex items-center justify-center transition-all duration-700 ${
            showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Sparkles className="w-5 h-5 text-primary mr-2" />
          <span className="font-light">{displayed}</span>
          <span className="ml-0.5 w-[2px] h-7 bg-primary animate-pulse" />
        </div>

        <div
          className={`flex flex-col items-center gap-8 transition-all duration-700 ${
            showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild className="text-base px-10">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="text-base px-10">
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>

          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="group inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="flex h-11 w-7 justify-center rounded-full border border-border/80 bg-background/10 pt-2 backdrop-blur-sm transition-colors group-hover:border-primary/60">
              <span className="h-3 w-1.5 rounded-full bg-primary/80 animate-bounce" />
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium tracking-[0.24em] uppercase">
              Scroll
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
