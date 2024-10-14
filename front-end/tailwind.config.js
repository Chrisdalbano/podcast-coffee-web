/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "fluid-sm": "clamp(0.9rem, 0.14vi + 0.86rem, 1.03rem)",
        "fluid-base": "clamp(1.13rem, 0.26vi + 1.06rem, 1.38rem)",
        "fluid-md": "clamp(1.41rem, 0.44vi + 1.3rem, 1.83rem)",
        "fluid-lg": "clamp(1.76rem, 0.71vi + 1.58rem, 2.43rem)",
        "fluid-xl": " clamp(2.2rem, 1.09vi + 1.92rem, 3.23rem)",
        "fluid-2xl": "clamp(2.75rem, 1.64vi + 2.34rem, 4.3rem)",
        "fluid-3xl": "clamp(3.43rem, 2.41vi + 2.83rem, 5.72rem)",
        "fluid-4xl": "clamp(4.29rem, 3.49vi + 3.42rem, 7.61rem)",
        "fluid-5xl": "clamp(5.36rem, 5.01vi + 4.11rem, 10.12rem)",
      },
    },
  },
  plugins: [],
};
