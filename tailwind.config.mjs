/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'violeta-abbott': '#772583', 
        'morado-abbott': '#624595',
        'rosado-abbott': '#d787b5',
        'blanco-abbott': '#ffffff',
        'negro-abbott': '#010101',
        'gris-abbott': "#f2f2f1"
      },
      backgroundImage: {
        'abbott-gradient-wh': 'linear-gradient(45deg, #5b2094, #a950a5 55%, #e99ab0);',
      },
    },
  },
  plugins: [],
}
