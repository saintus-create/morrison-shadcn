import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      containers: { center: true },
      maxWidth: { "7xl": "1280px" },
      fontFamily: { 
        sans: ["Satoshi", "system-ui", "sans-serif"], 
        serif: ["Canela Text", "Georgia", "serif"] 
      },
      colors: { 
        gold: "#d4af37", 
        platinum: "#e6e6e6",
        neutral: {
          950: "#0a0a0a",
          100: "#f5f5f5",
          400: "#a3a3a3"
        }
      },
      spacing: { 
        18: "4.5rem", 
        32: "8rem",
        48: "12rem"
      },
      borderRadius: { 
        xl: "0.75rem" 
      },
      boxShadow: { 
        "2xl": "0 25px 50px -12px rgba(0,0,0,0.3)",
        "3xl": "0 35px 60px -12px rgba(0,0,0,0.5)"
      },
      transitionTimingFunction: { 
        "out-quint": "cubic-bezier(0.16, 1, 0.3, 1)" 
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter': '-0.025em'
      },
      fontSize: {
        '9xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.05em' }],
        '6xl': ['3rem', { lineHeight: '1.2' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        'lg': ['1.125rem', { lineHeight: '1.65' }]
      }
    },
  },
  plugins: [],
} satisfies Config;