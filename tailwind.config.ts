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
        'text': '#050315',
        'background': '#353535',
        'primary': '#2f27ce',
        'secondary': '#dedcff',
        'accent': '#433bff',
       },         
    },
  },
  plugins: [],
} satisfies Config;
