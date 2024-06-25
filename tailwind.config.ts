import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090A",
        title: "#fff",
        subTitle: "#E3E4E6",
        paragraph: "#969799",
        button: "#E6E6E6",
        buttonText: "#08090A",
        buttonSecondary: "#232323",
        ButtonSecondaryText: "#fff",
        border: "#1C1C1D",
      },
      backgroundImage: {
        "intro-bg": "url('/intro/intro-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
