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
        'background': '#181926',
        'primary': '#24273a',
        'secondary': '#363a4f',
        'accent': '#8aadf4',
        'flavour': '#b7bdf8',
        'heading': '#8bd5ca',
       },         
    },
  },
  plugins: [],
} satisfies Config;
