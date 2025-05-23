import { Quicksand } from 'next/font/google';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            height: {
                'body-size': 'calc(100dvh - 90px)'
            },
            minHeight: {
                'body-size': 'calc(100dvh - 90px)'
            },
            maxHeight: {
                'body-size': 'calc(100dvh - 90px)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                'primary-color': 'var(--primary-color)',
                'background-primary': 'var(--background-primary)',
                'secondary-color': 'var(--secondary-color)',
                'secondary-text-color': 'var(--secondary-text-color)',
                'background-secondary': 'var(--background-secondary)',
                'navbar-soft': 'rgba(204, 178, 153, 0.85)'
            },
            fontFamily: {
                catchye: ["'Catchye'", "'sans-serif'"],
                chillen: ["'Chillen'", "'Catchye'", "'sans-serif'"],
                ['pritude-radiance']: ["'Pritude Radiance'", "'Catchye'", "'sans-serif'"]
            }
        }
    },
    plugins: []
};
export default config;
