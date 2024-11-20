import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
