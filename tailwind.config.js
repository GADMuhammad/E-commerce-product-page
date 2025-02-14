/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
      },

      fontFamily: {
        kumbhSans: ["Kumbh Sans", "serif"],
      },

      boxShadow: {
        cart: " rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      },

      screens: {
        first: "1300px",
        second: "1100px",
        third: "490px",
      },

      keyframes: {
        fromTop: {
          from: {
            transform: "translateY(-50rem)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        fromTop: "fromTop 0.5s  forwards ease-in-out",
      },
    },
  },
  plugins: [],
};
