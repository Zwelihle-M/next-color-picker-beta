import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
      colors: {
        seance: "#61346B",
        mediumpurple: "#9567E0",
        darkviolet: "#8800C7",
        mediumorchid: "#A44CD3",
        plum: "#E090DF",
        lavenderpink: "#FBBEDE",
        razzmatazz: "#D90077",
        glassmorphism: "rgba(16, 16, 18, 0.60)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        Degular: ["Degular", ...fontFamily.sans],
        IFKica: ["IFKica", ...fontFamily.sans],
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;

export default config;
