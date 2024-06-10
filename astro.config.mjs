import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://minasaba-project.github.io',
	base: 'docs',
	integrations: [
		starlight({
			title: 'Minasaba Docs',
			social: {
				github: 'https://github.com/minasaba-project',
			},
			sidebar: [
			],
		}),
	],
});