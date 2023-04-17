/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: '#f59e0b',
          200: '#b45309'
        },
        pow: {
          100: '#f1f5f9'
        },
        gray: {
          500: '#64748b'
        }
      },
    
    },
  },
  plugins: [],
}

