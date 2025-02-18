/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            AC_Orange: "#FF9A00",
            AC_Green: "#2DBAAA"
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/line-clamp'),
    ]
}