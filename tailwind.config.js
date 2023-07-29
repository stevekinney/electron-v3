import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat Variable', 'sans-serif'],
				serif: ['Merriweather Variable', 'serif'],
				mono: ['Fira Code Variable', 'monospace']
			}
		}
	},
	plugins: [typography]
};
