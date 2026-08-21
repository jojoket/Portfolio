import tailwindcssMotion from "tailwindcss-motion";

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [tailwindcssMotion],
};