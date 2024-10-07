/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      animation: {
        "text-slide": "text-slide 25s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide": {
          "0%": {
            transform: "translateY(0%)",
          },
          "25%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(-50%)",
          },
          "75%": {
            transform: "translateY(-75%)",
          },
          "100%": {
            transform: "translateY(-95%)",
          },
        },
      },
    },
  },
  plugins: [],
};
