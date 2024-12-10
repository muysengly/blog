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
    },
  },
});
