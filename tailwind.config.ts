import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-overused-grotesk), "ui-sans-serif", "system-ui"`],
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
  safelist: ["border-green-500", "border-red-500"],
};
export default config;
