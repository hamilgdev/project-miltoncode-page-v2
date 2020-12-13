module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      // primary font
      "fp-bigger": "var(--fp-bigger)",
      "fp-xxlarge": "var(--fp-xxlarge)",
      "fp-xlarge": "var(--fp-xlarge)",
      "fp-large": "var(--fp-large)",
      "fp-base": "var(--fp-base)",
      "fp-small": "var(--fp-smaller)",
      // secondary font
      "fs-bigger": "var(--fs-bigger)",
      "fs-big": "var(--fs-big)",
      "fs-medium": "var(--fs-medium)",
      "fs-regular": "var(--fs-regular)",
      "fs-normal": "var(--fs-normal)",
      "fs-small": "var(--fs-small)",
    },
    extend: {
      colors: {
        "c-first-lighter-100": "var(--c-first-lighter-100)",
        "c-first-main": "var(--c-first-main)",
        "c-first-darker-100": "var(--c-first-darker-100)",
        "c-second-lighter-100": "var(--c-second-lighter-100)",
        "c-second-main": "var(--c-second-main)",
        "c-second-darker-100": "var(--c-second-darker-100)",
        // Accents color
        "c-accent-lighter": "var(--c-accent-lighter)",
        "c-accent-darker": "var(--c-accent-darker)",
      },
    },
  },
  variants: {},
  plugins: [],
};
