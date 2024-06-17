import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Remove the preprocess option from here
		adapter: adapter(),
		target: '#svelte',
	},
	// Add preprocessors here using vitePreprocess
	preprocess: vitePreprocess()
};

export default config;
