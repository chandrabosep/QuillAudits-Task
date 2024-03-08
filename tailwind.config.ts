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
        primary: "#15306f",
      },
      fontSize: {
        "2.5xl": [
          "2.1rem",
          {
            lineHeight: "2.6rem",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "btn-grad":
          "linear-gradient(254deg, #7184fd 20%, #3f7af0 50%, #4f37ee)",
        "hero-img-grad":
          "linear-gradient(108.23deg, #000000 10.97%, #046202 100.69%)",
        "card-grad":
          "linear-gradient(90.3deg, #2B4D93 -10.68%, #0E205B 27.98%, #162867 55.94%, #323A87 103.52%)",
      },
    },
  },
  plugins: [],
};
export default config;
