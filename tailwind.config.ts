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
        primary: '#FFFFFF', // White for all elements in light mode
        'dark-background': '#1F2937', // Dark background for dark mode
        text: '#000000', // Black text color for light mode
        'light-text': '#FFFFFF', // White text color for dark mode
        'dark-text': '#D1D5DB', // Light gray text color for dark mode
        'buttonBg': '#FFFFFF', // Button background in light mode (same as primary)
        'dark-buttonBg': '#374151', // Darker button background in dark mode
        'buttonText': '#000000', // Black text for buttons in light mode
        'dark-buttonText': '#F3F4F6', // Light text for buttons in dark mode
      },
    },
  },
  plugins: [],
};

export default config;
