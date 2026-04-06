import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "neon-purple": "hsl(var(--neon-purple))",
        "neon-blue": "hsl(var(--neon-blue))",
        "neon-cyan": "hsl(var(--neon-cyan))",
        "glass-bg": "hsl(var(--glass-bg))",
        "glass-border": "hsl(var(--glass-border))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background, 0 0% 98%))",
          foreground: "hsl(var(--sidebar-foreground, 240 5.3% 26.1%))",
          primary: "hsl(var(--sidebar-primary, 240 5.9% 10%))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground, 0 0% 98%))",
          accent: "hsl(var(--sidebar-accent, 240 4.8% 95.9%))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground, 240 5.9% 10%))",
          border: "hsl(var(--sidebar-border, 220 13% 91%))",
          ring: "hsl(var(--sidebar-ring, 217.2 91.2% 59.8%))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(5px) rotate(-1deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(265 90% 65% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(265 90% 65% / 0.5)" },
        },
        "stagger-in": {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(30px, -20px) scale(1.05)" },
          "50%": { transform: "translate(-10px, -40px) scale(0.95)" },
          "75%": { transform: "translate(-30px, -10px) scale(1.02)" },
        },
        "shimmer-text": {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "particle-drift": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) translateX(50px)", opacity: "0" },
        },
        "ring-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "stagger-in": "stagger-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "orb-float": "orb-float 12s ease-in-out infinite",
        "shimmer-text": "shimmer-text 4s linear infinite",
        "particle-drift": "particle-drift 8s linear infinite",
        "ring-rotate": "ring-rotate 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
