import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      plugins: [mdPlugin({ mode: [Mode.HTML, Mode.TOC] })]
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

export default config;
