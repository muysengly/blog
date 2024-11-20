import ChartJS from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeDemo from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import { injectEChartsConfig } from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import FlowChart from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import MarkMap from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";
import Mermaid from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "C:/Users/muysengly/Desktop/My Github/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    injectEChartsConfig(app);
    app.component("FlowChart", FlowChart);
    app.component("MarkMap", MarkMap);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
  },
};
