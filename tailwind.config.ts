import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',  // Use class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark Blue for light mode
        secondary: '#3B82F6', // Lighter Blue for highlights
        accent: '#60A5FA', // Light Blue for dark mode highlights
        background: '#F3F4F6', // Light background color
        'dark-background': '#1F2937', // Dark background color
        text: '#111827', // Almost black text color for light mode
        'light-text': '#FFFFFF', // White text color for dark mode
        'dark-text': '#D1D5DB', // Light gray text color for dark mode
        'buttonBg': '#3B82F6', // Button background in light mode
        'dark-buttonBg': '#60A5FA', // Button background in dark mode
        'buttonText': '#FFFFFF', // Button text in light mode
        'dark-buttonText': '#1F2937', // Button text in dark mode
        'gray-600': '#4B5563', // Adjusted gray for text
        'gray-400': '#9CA3AF', // Adjusted light gray for text
      },
    },
  },
  plugins: [],
};

export default config;
