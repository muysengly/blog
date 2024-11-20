import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "My Website",
  description: "This is my website.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
