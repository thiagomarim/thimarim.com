import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090A',
        primary: '#fff',
        secondary: '#969799',
        terceary: '#232323',
        button: '#E6E6E6',
        buttonText: '#08090A',
        border: '#1C1C1D',
      },
    },
  },
}
export default config
