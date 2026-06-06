import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1f3a",
        navy: "#123766",
        mist: "#f5f7fb",
        line: "#dfe6ef",
        gold: "#c5a15b",
        sand: "#f3ead8"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(11, 31, 58, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
