import { hasGlobalComponent } from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/@vueuse/core/index.mjs";
import FontIcon from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import ArtPlayer from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import Badge from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Share from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import SiteInfo from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import StackBlitz from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VPBanner from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";
import VPCard from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import VidStack from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";
import XiGua from "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/components/XiGua.js";

import "C:/Users/muysengly/Desktop/[my] github/blog/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    if(!hasGlobalComponent("XiGua")) app.component("XiGua", XiGua);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
