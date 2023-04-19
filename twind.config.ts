import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ["Comfortaa", "Arial", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

export default options;
