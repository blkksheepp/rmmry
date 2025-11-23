const fluid = require('fluid-tailwind').default
const { extract, screens, fontSize } = require('fluid-tailwind')

module.exports = {
  content: {
    files: ['./src/**/*.{js,jsx,ts,tsx}'],
    extract,
  },
  theme: {
    screens: {
      xs: '20rem',
      ...screens,
      xxl: '120rem',
    },
    fontSize,
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        "muted-2": "var(--color-muted-2)",
        border: "var(--color-border)",
        panel: "var(--color-panel)",
        icon: "var(--color-icon)",
        primary: "var(--color-primary)",
        "blur-bg": "var(--color-blur-bg)"
      },
      backgroundImage: {
        "primary-gradient": "var(--color-gradient-primary)"
      },
      fontFamily: {
        primary: ['"NeueMachina"', "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        "rmmry-soft": "0 6px 30px rgba(2,6,23,0.28)",
        "rmmry-cta": "0 8px 20px rgba(47,191,135,0.12)"
      },
      borderRadius: {
        "rmd": "12px"
      }
    }
  },
  plugins: [fluid],
}