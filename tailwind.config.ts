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
        primary: "15306f",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "btn-grad":
          "linear-gradient(254deg, #7184fd 20%, #3f7af0 50%, #4f37ee)",
        "hero-img-grad":
          "linear-gradient(108.23deg, #000000 10.97%, #046202 100.69%)",
      },
    },
  },
  plugins: [],
};
export default config;
