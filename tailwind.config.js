/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primaryColor: "#00111a",
        secondaryColor: "#ec0868",
        "primaryColor-500": "#003652",
        lightColor: "#ced4da",
        whiteColor: "#ffffff",
      },
      fontFamily: {
        primaryFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
