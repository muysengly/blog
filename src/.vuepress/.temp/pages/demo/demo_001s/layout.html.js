import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/demo/demo_001s/layout.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_001s/layout.html\",\"title\":\"Layout\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Layout\",\"icon\":\"object-group\",\"order\":2,\"category\":[\"Guide\"],\"tag\":[\"Layout\"],\"description\":\"The layout contains: Navbar Sidebar Footer Also each page can contain: BreadCrumb Title and information TOC (Table of Contents) Meta information including update time and contri...\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.35,\"words\":105},\"filePathRelative\":\"demo/demo_001s/layout.md\",\"excerpt\":\"<p>The layout contains:</p>\\n<ul>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/navbar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Navbar</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/sidebar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Sidebar</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/footer.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Footer</a></li>\\n</ul>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
