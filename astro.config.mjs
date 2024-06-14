import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.minasaba.jp',
  integrations: [starlight({
    title: 'Minasaba Docs',
    favicon: "/favicon.png",
    social: {
      github: 'https://github.com/minasaba-project'
    },
    customCss: ["./src/tailwind.css"],
    sidebar: [{
      label: "基本情報",
      autogenerate: {
        directory: "general"
      }
    }, {
      label: "法的事項",
      autogenerate: {
        directory: "legal"
      }
    }]
  }), tailwind()]
});