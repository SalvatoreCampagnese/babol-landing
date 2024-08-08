import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "app-gradient":
          "linear-gradient(191deg, #5831F5 2.5%, #101011 84.64%) !Important",
      },
      backgroundColor: {
        "light-gray":"#EEF2F6"
      },
      borderRadius: {
        "sm": "12px",
        "md": "16px",
      },
      borderColor: {
        "lighter": "#606672",
      },
      gap: {
        "xs": "8px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
