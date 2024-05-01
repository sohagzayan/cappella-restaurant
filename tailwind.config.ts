import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "#3fb950",
        light_white: "#e6edf3",
        dark_gray_300: "hsl(var(--colors-gray-dark-300))",
      },
      // borderColor: {
      //   border_primary: "hsl(var(--border_primary))",
      // },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(180deg, rgba(183, 52, 179, 0.15) 0%, rgba(164, 46, 156, 0) 100%),#6e40c9",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
