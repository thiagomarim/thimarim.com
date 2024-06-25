import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      title: "#fff",
      subTitle: "#E3E4E6",
      text: "#969799",
      button: "#E6E6E6",
      buttonText: "#08090A",
      buttonSecondary: "#232323",
      ButtonSecondaryText: "#fff",
    },
  },
  plugins: [],
};
export default config;
