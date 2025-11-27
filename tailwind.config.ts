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
        'background': '#282828',
        'primary': '#282828',
        'secondary': '#989719',
        'accent': '#458588',
        'flavour': '#fff',
        'heading': '#8bd5ca',
       },         
    },
  },
  plugins: [],
} satisfies Config;
