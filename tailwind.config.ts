import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        'border-gray-main': 'var(--border-gray-main)',
        'border-gray-deep': 'var(--border-gray-deep)',
        'border-gray-light': 'var(--border-gray-light)',
        'text-gray': 'var(--text-gray)'
      }
    }
  },
  plugins: []
};
export default config;
