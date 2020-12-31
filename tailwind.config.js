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
      "fp-small": "var(--fp-small)",
      "fp-smaller": "var(--fp-smaller)",
      // secondary font
      "fs-bigger": "var(--fs-bigger)",
      "fs-big": "var(--fs-big)",
      "fs-medium": "var(--fs-medium)",
      "fs-regular": "var(--fs-regular)",
      "fs-normal": "var(--fs-normal)",
      "fs-small": "var(--fs-small)",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1216px",
      // => @media (min-width: 1216px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "c-first-lighter-200": "var(--c-first-lighter-200)",
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
      boxShadow: {
        "box-md": "var(--box-shadow-md)",
      },
      cursor: {
        "zoom-in": "zoom-in",
      },
    },
  },
  variants: {},
  plugins: [],
};
