import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "en-US",
  title: "Home",
  description: "Welcom to my website.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
