import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-particle": "url('/public/bg-blue-particle.png')",
        herobg: "url('')",
      },
      boxShadow: {
        custom: "0px 0px 20px 0px rgba(24, 28, 52, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
