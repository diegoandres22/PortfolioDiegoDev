import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#00D4FF",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
           "linear-gradient(90deg, rgba(15, 15, 20, 1) 0%, rgba(0, 0, 56, 1) 60%, rgba(0, 57, 69, 1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
