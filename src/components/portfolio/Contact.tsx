import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-2xl section-reveal">

        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text text-center">
          Get in Touch
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 mx-auto" />

        <p className="text-muted-foreground mb-12 text-center max-w-md mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        {/* FORM UI ONLY (no JS handling) */}
        <form className="glass-card-premium p-8 md:p-10 space-y-5">

          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-muted/80 transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-muted/80 transition-all duration-300"
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            required
            className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-muted/80 transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition"
          >
            Send Message 🚀
          </button>

        </form>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-4 mt-12">

          <a
            href="https://github.com/yogesh0059"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl border border-glass-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/yogesh-fullstack"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl border border-glass-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:developeryogesh10@gmail.com"
            className="w-12 h-12 rounded-xl border border-glass-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;