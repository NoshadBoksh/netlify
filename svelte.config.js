import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Specify the target element where the Svelte app will be mounted
		target: '#svelte',
		adapter: adapter(),
	},
};

export default config;
