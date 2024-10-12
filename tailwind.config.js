/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'main-purple': '#7c3aed',
                'secondary-purple': '#8b5cf6',
                'dark-purple': '#6d28d9',
                'very-dark': '#2e1065',
            },
            fontFamily : {
                'Nunito': ['nunito', 'sans-serif']
            }
        },
    },
    plugins: [],
}

