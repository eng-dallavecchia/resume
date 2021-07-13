module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        coffee: "url('/src/images/bgpattern.png')",
      }),
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      small: "64rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
