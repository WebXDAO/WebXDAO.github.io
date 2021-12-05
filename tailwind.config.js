module.exports = {
	purge: {
		mode: 'all',
		content: ['./**/*.html'],
		options: {
			whitelist: [],
		},
	},
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {},
		},
	},
	variants: {
		extend: {
			zIndex: ['hover'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
