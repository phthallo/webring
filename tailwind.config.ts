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
        'text': {
          50: '#f4f3f1',
          100: '#e8e7e3',
          200: '#d1cfc7',
          300: '#bab7ab',
          400: '#a39f8f',
          500: '#8c8773',
          600: '#706c5c',
          700: '#545145',
          800: '#38362e',
          900: '#1c1b17',
          950: '#0e0e0b',
        },
        'background': {
          50: '#f4f2f0',
          100: '#eae6e1',
          200: '#d5ccc3',
          300: '#c0b3a5',
          400: '#aa9988',
          500: '#95806a',
          600: '#776655',
          700: '#5a4d3f',
          800: '#3c332a',
          900: '#1e1a15',
          950: '#0f0d0b',
        },
        'primary': {
          50: '#f4f3f1',
          100: '#e8e7e3',
          200: '#d2cfc6',
          300: '#bbb8aa',
          400: '#a4a08e',
          500: '#8e8871',
          600: '#716d5b',
          700: '#555244',
          800: '#39362d',
          900: '#1c1b17',
          950: '#0e0e0b',
        },
        'secondary': {
          50: '#f1f4f1',
          100: '#e2e9e3',
          200: '#c6d2c7',
          300: '#a9bcab',
          400: '#8da590',
          500: '#708f74',
          600: '#5a725d',
          700: '#435645',
          800: '#2d392e',
          900: '#161d17',
          950: '#0b0e0c',
        },
        'accent': {
          50: '#f1f4f2',
          100: '#e3e8e6',
          200: '#c6d2cc',
          300: '#aabbb3',
          400: '#8ea499',
          500: '#718e80',
          600: '#5b7166',
          700: '#44554d',
          800: '#2d3933',
          900: '#171c1a',
          950: '#0b0e0d',
        },
       },          
    },
  },
  plugins: [],
} satisfies Config;
