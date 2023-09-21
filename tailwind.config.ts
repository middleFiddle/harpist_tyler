import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:
    {
      'blue': { DEFAULT: '#a3d9ff', 100: '#003154', 200: '#0062a7', 300: '#0092fb', 400: '#50b6ff', 500: '#a3d9ff', 600: '#b6e0ff', 700: '#c8e8ff', 800: '#daf0ff', 900: '#edf7ff' },
      'violet': { DEFAULT: '#7e6b8f', 100: '#19151c', 200: '#322b39', 300: '#4c4055', 400: '#655672', 500: '#7e6b8f', 600: '#9888a6', 700: '#b2a6bc', 800: '#cbc4d2', 900: '#e5e1e9' },
      'celadon': { DEFAULT: '#96e6b3', 100: '#0f3e20', 200: '#1d7c40', 300: '#2cba60', 400: '#5ad888', 500: '#96e6b3', 600: '#acecc4', 700: '#c1f0d2', 800: '#d6f5e1', 900: '#eafaf0' },
      'amaranth': { DEFAULT: '#da3e52', 100: '#2f090e', 200: '#5e121c', 300: '#8d1b2a', 400: '#bc2438', 500: '#da3e52', 600: '#e26575', 700: '#e98b98', 800: '#f0b2ba', 900: '#f8d8dd' },
      'maize': { DEFAULT: '#f2e94e', 100: '#3c3904', 200: '#787209', 300: '#b3ab0d', 400: '#ede214', 500: '#f2e94e', 600: '#f4ee73', 700: '#f7f296', 800: '#faf6b9', 900: '#fcfbdc' }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)'],
        serif: ['var(--font-cormorant)'],
        script: ['var(--font-dancing-script)']
      }
    },
  },
  plugins: [],
}
export default config
