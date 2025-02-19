import typography from '@tailwindcss/typography'
module.exports = {
    content: [
        "./src/**/*.{astro,js,ts,jsx,tsx}",
        "node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
    plugins: [typography],
};
