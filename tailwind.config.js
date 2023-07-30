import typography from '@tailwindcss/typography';

const primary = {
	50: '#f0f7fe',
	100: '#dcecfd',
	200: '#c1dffc',
	300: '#97ccf9',
	400: '#66b0f4',
	500: '#4290ef',
	600: '#3578e5',
	700: '#245dd1',
	800: '#234caa',
	900: '#224386',
	950: '#192a52'
};

const secondary = {
	50: '#f6f7f8',
	100: '#ebedf0',
	200: '#dadee3',
	300: '#c0c8d0',
	400: '#a1abb9',
	500: '#8a94a7',
	600: '#798197',
	700: '#6c7389',
	800: '#5c6071',
	900: '#4c505c',
	950: '#31333a'
};

const success = {
	50: '#eeffed',
	100: '#d6ffd6',
	200: '#b0ffaf',
	300: '#71ff71',
	400: '#2ffb2d',
	500: '#03e502',
	600: '#04bf00',
	700: '#00a400',
	800: '#067507',
	900: '#085f09',
	950: '#003601'
};

const information = {
	50: '#f1fafe',
	100: '#e2f4fc',
	200: '#bfe9f8',
	300: '#86d7f3',
	400: '#54c7ec',
	500: '#1eabd9',
	600: '#108bb9',
	700: '#0e6f96',
	800: '#105d7c',
	900: '#134d67',
	950: '#0d3244'
};

const warning = {
	50: '#fffeea',
	100: '#fffac5',
	200: '#fff585',
	300: '#ffea46',
	400: '#ffda1b',
	500: '#ffba00',
	600: '#e28f00',
	700: '#bb6502',
	800: '#984e08',
	900: '#7c3f0b',
	950: '#482000'
};

const danger = {
	50: '#fff1f1',
	100: '#ffe0e1',
	200: '#ffc7c9',
	300: '#ff9fa2',
	400: '#ff686d',
	500: '#fa383e',
	600: '#e81a20',
	700: '#c31217',
	800: '#a11317',
	900: '#85171a',
	950: '#490608'
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: { primary, secondary, information, warning, danger, success },
			fontFamily: {
				sans: ['Montserrat Variable', 'sans-serif'],
				serif: ['Merriweather Variable', 'serif'],
				mono: ['Fira Code Variable', 'monospace']
			}
		}
	},
	plugins: [typography]
};
