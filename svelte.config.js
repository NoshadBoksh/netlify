import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // The target option has been removed in newer versions of SvelteKit.
    // You can safely remove this line.
    // target: '#svelte',

    adapter: adapter(),
  },
};

export default config;
