/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
  daisyui: { // this one is for the daisyUI plugin
    themes: [
      {
        mytheme: {
          "primary": "#0284C7",
          "secondary": "#f9fafb",
          "accent": "#00ffff",
          "neutral": "#F9FAFB",
          "base-100": "#FFFFFF",
          "info": "#0000ff",
          "success": "#00ff00",
          "warning": "#00ff00",
          "error": "#ff0000",
          "default" : "#f3f4f6",
        },
      },
    ],
  }
}

