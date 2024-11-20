import comp from "C:/Users/muysengly/Desktop/My Github/blog/src/.vuepress/.temp/pages/.~demo.html.vue"
const data = JSON.parse("{\"path\":\"/.~demo.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\".~demo.md\",\"excerpt\":\"\"}")
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
