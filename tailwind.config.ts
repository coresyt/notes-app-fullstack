import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "san-juan": {
          "50": "#f5f7fa",
          "100": "#eaedf4",
          "200": "#d0d9e7",
          "300": "#a6b9d3",
          "400": "#7693ba",
          "500": "#5475a3",
          "600": "#415d88",
          "700": "#395075",
          "800": "#2f415d",
          "900": "#2b394f",
          "950": "#1d2534",
        },
      },
    },
  },
  plugins: [],
};
export default config;
