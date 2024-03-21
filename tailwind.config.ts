import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: {
          primary: "#262933",
          secondary: "#2e384d",
          header: "rgb(12, 12, 15)",
          line: "rgb(112, 121, 140)",
        },

        blue: {
          brand1: "#2354e6",
          brand2: "rgb(26, 34, 80)",
          brand3: "#70798c",
        },

        neutral: {
          color1: "#ebedf2",
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
  },
  plugins: [],
};
export default config;
