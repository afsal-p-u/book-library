import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      blue: "#0038FF",
      black: "#000",
      "light-black": "#161616",
      white: "#FFF",
      "light-white": "#909090",
      "medium-light": "#D0D0D0",
      "shadow-dark": "#999999",
      "shadow-light": "#7B7B7B", 
      green: "#07FF2F"
    },
    extend: {
      boxShadow: {
        'shadow-right': '4px 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'shadow-bottom': '0px 4px 23px 0px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
