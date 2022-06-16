module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      height: {
        134: "34rem",
        v80: "80vh",
        v60: "60vh",
      },
      margin: {
        v80: "80vh",
        v60: "60vh",
        v40: "50vh",
      },
      colors: {
        linkedIn: "#0A66C2",
        github: "#181717",
      },
      translate: {
        vw: "100vw",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
