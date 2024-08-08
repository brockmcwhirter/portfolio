import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark Blue
        secondary: '#3B82F6', // Medium Blue
        accent: '#60A5FA', // Light Blue
        background: '#F3F4F6', // Light Gray
        'dark-background': '#1F2937', // Dark Gray
        text: '#111827', // Almost Black
        'light-text': '#FFFFFF', // White
        'dark-text': '#D1D5DB', // Light Gray for dark mode text
      },
    },
  },
  plugins: [],
};

export default config;
