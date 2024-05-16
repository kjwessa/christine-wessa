import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
