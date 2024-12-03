import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmmono: ['DMMono', 'monospace']
      },
      colors: {
        'text': '#ffffff',
        'background': '#0c0e0d',
        'primary': '#121613',
        'secondary': '#2c322e',
        'accent': '#7da68a',
        'heading': '#8eb099',
       },         
    },
  },
  plugins: [],
} satisfies Config;
