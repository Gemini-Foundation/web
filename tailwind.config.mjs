import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "serif": ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
        "sans": ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        "mono": ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Light Theme (Real World)
        light: {
          primary: "#001f3f",      // Deutsche Bank Blau
          secondary: "#d4af37",    // Premium Gold
          accent: "#2c5530",       // Trust Grün
          "bg-primary": "#ffffff",
          "bg-secondary": "#fafbfc", // Soft Background
          "bg-accent": "#f5f7fa",    // Subtle Accent
          "text-primary": "#1a1a1a", // Rich Black
          "text-secondary": "#4a5568", // Professional Gray
          "text-muted": "#718096",
          border: "#e8eef5",
        },
        // Dark Theme (Digital Matrix)
        dark: {
          primary: "#00d9ff",      // Electric Cyan
          secondary: "#7c3aed",    // Deep Purple
          accent: "#00ff88",       // Electric Green
          "bg-primary": "#0a0a0f",   // Almost Black
          "bg-secondary": "#151520", // Dark Slate
          "bg-accent": "#1e1e2e",    // Subtle Dark
          "text-primary": "#ffffff",
          "text-secondary": "#a1a1aa",
          "text-muted": "#71717a",
          border: "#27272a",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
      rotate: {
        "45": "45deg",
        "135": "135deg",
        "225": "225deg",
        "315": "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": { 
            opacity: 0, 
            transform: "rotate(0deg)" 
          },
          "50%": { 
            opacity: 1,
            transform: "rotate(180deg)" 
          },
          "100%": { 
            opacity: 0, 
            transform: "rotate(360deg)" 
          },
        },
        meteor: {
          "0%": { 
            opacity: 0, 
            transform: "translateY(200%)" 
          },
          "50%": { 
            opacity: 1  
          },
          "100%": { 
            opacity: 0, 
            transform: "translateY(0)" 
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
