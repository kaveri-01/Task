/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        thirty: "30%",
        fifty:"50%"
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
