import { RevealJs, injectRevealJsConfig } from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/@vuepress/plugin-revealjs/lib/client/index.js";
import { SlidePage } from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/@vuepress/plugin-revealjs/lib/client/layouts/index.js";

import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/reveal.js/dist/reveal.css";
import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/@vuepress/plugin-revealjs/lib/client/styles/base.css";
import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/@vuepress/plugin-revealjs/lib/client/styles/vars.css";
import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/@vuepress/plugin-revealjs/lib/client/styles/fonts/league-gothic.css";
import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/@vuepress/plugin-revealjs/lib/client/styles/fonts/source-sans-pro.css";
import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/@vuepress/plugin-revealjs/lib/client/styles/themes/auto.css";

export default {
  enhance: ({ app }) => {
    injectRevealJsConfig(app)
    app.component("RevealJs", RevealJs)
  },
  layouts: { "SlidePage": SlidePage },
};
