import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '14': 'repeat(14, minmax(0, 1fr))',
                '17': 'repeat(17, minmax(0, 1fr))',
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            AC_Orange: "#FF9A00",
            AC_Green: "#2DBAAA"
        },
    },
    plugins: [flowbite],
};

export default config;
