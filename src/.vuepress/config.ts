import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  theme,
  
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "My Blog",
      description: "Welcome to my blog.",
      head: [
        // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
        // ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
        // ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
        // ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
        // ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
        ['link', { rel: "shortcut icon", href: "favicon.ico"}],
        // ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
        // ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
        // ['meta', { name: "theme-color", content: "#ffffff"}],
      ],
    },
  },
});
