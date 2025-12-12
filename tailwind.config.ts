import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Noto Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif"
        ]
      },
      colors: {
        primary: {
          DEFAULT: "#1a1a2e",
          light: "#16213e",
          50: "#f0f4ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#1a1a2e",
          700: "#16213e",
          800: "#0f3460",
          900: "#0b1220"
        },
        accent: {
          DEFAULT: "#0f3460",
          light: "#e94560",
          red: "#e94560"
        },
        green: {
          DEFAULT: "#059669",
          light: "#d1fae5",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b"
        },
        subtle: "#f8f9fc",
        muted: "#64748b",
        border: "#e2e8f0"
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        }
      },
      boxShadow: {
        "soft": "0 4px 20px -2px rgba(0, 0, 0, 0.08)",
        "glow": "0 0 40px rgba(5, 150, 105, 0.15)",
        "card": "0 10px 40px -10px rgba(0, 0, 0, 0.1)"
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        "gradient-accent": "linear-gradient(135deg, #059669 0%, #0d9488 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [typography]
} satisfies Config;
