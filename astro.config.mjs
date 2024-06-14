import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.minasaba.jp',
	integrations: [
		starlight({
			title: 'Minasaba Docs',
			social: {
				github: 'https://github.com/minasaba-project',
			},
			sidebar: [
				{
					label: "法的事項",
					autogenerate: {
						directory: "legal",
					},
				},
			],
		}),
	],
});
