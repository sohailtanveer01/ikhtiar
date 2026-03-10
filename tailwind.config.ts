import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B8860B",
          light: "#D4A017",
          pale: "rgba(184,134,11,0.1)",
        },
        cream: {
          DEFAULT: "#FDFAF5",
          dark: "#F5F0E8",
          border: "#EDE5D5",
        },
        ink: {
          DEFAULT: "#1C1208",
          muted: "#6B5D4F",
          faint: "#9E8E7E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
