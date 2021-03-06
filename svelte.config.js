import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import json from '@rollup/plugin-json';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

	plugins: [
		json({
			compact: true
		})
		// other plugins...
	]
};

export default config;
