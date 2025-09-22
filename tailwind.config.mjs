import typography from '@tailwindcss/typography';

export default {
    content: [
        "./src/**/*.{astro,js,ts,jsx,tsx}",
        "node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [typography, require('flowbite/plugin')],
};
