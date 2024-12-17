import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/demo/demo.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://muysengly.github.io/blog/blog/demo/demo.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Blog\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Sengly MUY\\\",\\\"url\\\":\\\"https://github.com/muysengly\\\",\\\"email\\\":\\\"muysengly@gmail.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"demo/demo.md\",\"excerpt\":\"\"}")
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
