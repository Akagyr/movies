import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
      colors: {
        'gray': '#141313',
        'gray-ligther': '#9ca3af',
        'neutral': '#262626',
        'neutral-darken': '#171818',
        'red': '#b91c1c',
        'red-hover': '#991b1b',
        'red-ligther': '#dc2626',
      },
    },
  },
  plugins: [],
};
export default config;
