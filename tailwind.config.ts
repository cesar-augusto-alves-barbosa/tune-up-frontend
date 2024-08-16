import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        border: "var(--border)", // Variável que pode ser hexadecimal
        input: "var(--input)", // Variável que pode ser hexadecimal
        ring: "var(--ring)", // Variável que pode ser hexadecimal
        background: "var(--background)", // Variável que pode ser hexadecimal
        foreground: "var(--foreground)", // Variável que pode ser hexadecimal
        primary: {
          DEFAULT: "var(--primary)", // Variável que pode ser hexadecimal
          foreground: "var(--primary-foreground)", // Variável que pode ser hexadecimal
        },
        secondary: {
          DEFAULT: "var(--secondary)", // Corrigido fechamento do parêntese
          foreground: "var(--secondary-foreground)", // Variável que pode ser hexadecimal
        },
        destructive: {
          DEFAULT: "var(--destructive)", // Variável que pode ser hexadecimal
          foreground: "var(--destructive-foreground)", // Variável que pode ser hexadecimal
        },
        muted: {
          DEFAULT: "var(--muted)", // Variável que pode ser hexadecimal
          foreground: "var(--muted-foreground)", // Variável que pode ser hexadecimal
        },
        accent: {
          DEFAULT: "var(--accent)", // Variável que pode ser hexadecimal
          foreground: "var(--accent-foreground)", // Variável que pode ser hexadecimal
        },
        popover: {
          DEFAULT: "var(--popover)", // Variável que pode ser hexadecimal
          foreground: "var(--popover-foreground)", // Variável que pode ser hexadecimal
        },
        card: {
          DEFAULT: "var(--card)", // Variável que pode ser hexadecimal
          foreground: "var(--card-foreground)", // Variável que pode ser hexadecimal
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Mantém a variável de raio
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;