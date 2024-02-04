import adapter from '@sveltejs/adapter-auto'
// import { vitePreprocess } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// https://github.com/sveltejs/kit/issues/8059
// https://kit.svelte.dev/docs/migrating-to-sveltekit-2#vitepreprocess-is-no-longer-exported-from-sveltejs-kit-vite

import { mdsvex, escapeSvelte } from 'mdsvex'
// import shiki from 'shiki'

import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
	layout: {
		_: './src/mdsvex.svelte'
	},
	// ...
}


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}

export default config
