import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  // https://muysengly.github.io/

  author: {
    name: "Sengly MUY",
    // url: "https://mister-hope.com",
  },

  // this website icon assets
  iconAssets: "fontawesome-with-brands",

  // this website logo
  logo: "logo.png",

  // this website repository
  repo: "muysengly/blog",

  // this website docs directory
  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  // footer: "Default footer",

  // displayFooter: true,
  displayFooter: false,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  plugins: {
    
    blog: {
      // option
      filter: ({ filePathRelative, frontmatter }) => {
        // drop those pages which is NOT generated from file
        if (!filePathRelative) return false;

        // drop those pages in `archives` directory
        if (filePathRelative.startsWith("classes/")) return false;
        if (filePathRelative.startsWith("documents/")) return false;
        // if (filePathRelative.startsWith("slide/")) return false;

        // drop those pages which do not use default layout
        if (frontmatter.home || frontmatter.layout) return false;

        return true;
      },
    },

    search: {
      // option
      maxSuggestions: 10,
    },

    // notice: {
    // },

    // appendDatePlugin: {},

    watermark: {
      // option
      enabled:false,
    },

    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
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
