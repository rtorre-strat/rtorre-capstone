/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        // Custom color palette based on requirements - NO shadcn colors
        platinum: {
          DEFAULT: "#e6e6e8",
          50: "#ffffff",
          100: "#fafafa",
          200: "#f2f2f5",
          300: "#eaeaed",
          400: "#c2c2c7",
          500: "#e6e6e8",
          600: "#9999a1",
          700: "#6a6a71",
          800: "#3d3d40",
          900: "#ffffff",
        },
        french_gray: {
          DEFAULT: "#d0ced2",
          50: "#fafafb",
          100: "#f2f2f4",
          200: "#e4e2e7",
          300: "#d7d5da",
          400: "#aaa6af",
          500: "#d0ced2",
          600: "#847f88",
          700: "#59565c",
          800: "#2e2c2f",
          900: "#fafafb",
        },
        outer_space: {
          DEFAULT: "#505458",
          50:  "#2b2d2f", 
          100: "#222426", 
          200: "#1a1c1e",
          300: "#141516",
          400: "#0f1011", 
          500: "#0b0c0d",
          600: "#08090a",
          700: "#050606", 
          800: "#020303", 
          900: "#000000",
        },
        "payne's_gray": {
          DEFAULT: "#546876",
          50: "#dfe6ea",
          100: "#bfd0d7",
          200: "#9fb9c3",
          300: "#7fa3af",
          400: "#41525c",
          500: "#546876",
          600: "#344049",
          700: "#21292f",
          800: "#101417",
          900: "#dfe6ea",
        },
        blue_munsell: { 
          DEFAULT: "#1a4fd0",
          50: "#e4ecfc",      
          100: "#bed0f9",     
          200: "#94b1f5",   
          300: "#6a90f0",   
          400: "#3f6de6",  
          500: "#1a4fd0",   
          600: "#133ca5",  
          700: "#0d2978",    
          800: "#06154a",    
          900: "#e4ecfc",    
        },




      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
