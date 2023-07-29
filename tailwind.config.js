import typography from '@tailwindcss/typography';
import { purple } from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: { primary: { ...purple } },
			fontFamily: {
				sans: ['Montserrat Variable', 'sans-serif'],
				serif: ['Merriweather Variable', 'serif'],
				mono: ['Fira Code Variable', 'monospace']
			}
		}
	},
	plugins: [typography]
};
