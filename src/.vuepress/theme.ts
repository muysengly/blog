import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // Domain which to be deployed to
  hostname: "https://muysengly.github.io/blog",

  // Global default license
  license: "MIT",

  // Global default author
  author: {
    name: "Sengly MUY",
    url: "https://github.com/muysengly",
    email: "muysengly@gmail.com",
  },

  // Link of font icon asset
  iconAssets: "fontawesome-with-brands",

  // Navbar logo
  logo: "logo.png",

  // Repository link
  repo: "muysengly/blog",

  // Docs dir location in repo
  docsDir: "src",

  // Navbar config
  navbar,

  // Navbar config
  sidebar,

  // footer: "Default footer",
  // displayFooter: true,
  // Whether to display footer by default
  displayFooter: false,

  // Whether to display footer by default
  //
  encrypt: {
    config: {
      "/demo/encrypt": ["1234"],
    },
  },

  // Meta related i18n config
  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  plugins: {
    blog: {
      // option
      filter: ({ filePathRelative, frontmatter }) => {
        // drop those pages which is NOT generated from file
        if (!filePathRelative) return false;

        // drop those pages
        if (filePathRelative.startsWith("classes/")) return false;
        if (filePathRelative.startsWith("documents/")) return false;
        if (filePathRelative.startsWith("demo/")) return false;

        // drop those pages which do not use default layout
        if (frontmatter.home || frontmatter.layout) return false;

        return true;
      },
    },

    search: {
      // option
      maxSuggestions: 10,
    },

    watermark: {
      // option
      enabled: false,
    },

    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Giscus",
      repo: "muysengly/blog",
      repoId: "R_kgDOIKiZFw",
      category: "General",
      categoryId: "DIC_kwDOIKiZF84Ckdvb",
    },

    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "XiGua",
      ],
    },

    // All features are enabled for demo, only preserve features you need here
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    markdownMath: {
      // install katex before enabling it
      type: "katex",
      // or install mathjax-full before enabling it
      // type: "mathjax",
    },

    // This features is enabled for demo, only preserve if you need it
    markdownTab: true,

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      footnote: true,
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
      // hint: true,
      // alert: true,

      // install chart.js before enabling it
      chart: true,

      // insert component easily

      // install echarts before enabling it
      echarts: true,

      // install flowchart.ts before enabling it
      flowchart: true,

      markmap: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install mermaid before enabling it
      mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },
  },

  darkmode: "toggle",
  // fullscreen: true,
  // print: true,
});
