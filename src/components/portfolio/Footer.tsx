

const Footer = () => (
  <footer className="py-10 border-t border-glass-border relative">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="text-lg font-bold gradient-text">{"<Yogesh />"}</a>
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          © {new Date().getFullYear()} Yogesh. All rights reserved. · Crafted with code & creativity
          🚀
        </p>
        <div className="flex gap-6">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
