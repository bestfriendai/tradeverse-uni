import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "#000000",
        card: {
          DEFAULT: "#13151C",
        },
        primary: {
          DEFAULT: "#00FFFF",
          foreground: "#FFFFFF",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 50% 50%, #13151C, #000000)',
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;