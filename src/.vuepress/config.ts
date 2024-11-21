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
    // "/kh/": {
    //   lang: "km-KH",
    //   title: "ប្លុកខ្ញុំ",
    //   description: "សួស្តីមកកាន់ប្លុករបស់ខ្ញុំ។",
    // },
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
