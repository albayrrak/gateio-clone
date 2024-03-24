import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: {
          primary: "#262933",
          secondary: "#2e384d",
          startup: "rgb(9, 9, 11)",
          header: "rgb(12, 12, 15)",
          line: "rgb(112, 121, 140)",
          divider: "#eef1fa",
          divider2: "#e9ebf0",
        },

        blue: {
          brand1: "#2354e6",
          brand2: "rgb(26, 34, 80)",
          brand3: "#70798c",
        },

        green: {
          color2: "#1bb273",
        },

        red: {
          color1: "#f2495e",
        },

        card: {
          color1: "#f8f9fb",
        },

        neutral: {
          color1: "#ebedf2",
          color2: "rgb(141, 147, 166)",
          color4: "#acb2bf",
        },
      },

      fontSize: {
        title: "52px",
        description: "20px",
      },

      lineHeight: {
        title: "120%",
      },

      fontFamily: {
        arial: ["Arial"],
      },
    },
    screens: {
      "2xl": { max: "1920px" },

      xl: { max: "1248px" },

      lg: { max: "992px" },

      md: { max: "768px" },

      sm: { max: "639px" },
    },
  },
  plugins: [],
};
export default config;
