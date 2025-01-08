import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryGreen": "#c5e86c",
        "darkGreen": "#183028",
        "blackGreen": "#172f27",
        "primaryGray": "#e1e3e1",
      },
    },
  },
  plugins: [],
} satisfies Config;
