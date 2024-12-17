import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/demo/demo_001/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_001/\",\"title\":\"1. Features demo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"1. Features demo\",\"index\":false,\"icon\":\"star\",\"order\":1,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://muysengly.github.io/blog/blog/demo/demo_001/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"1. Features demo\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"1. Features demo\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Sengly MUY\\\",\\\"url\\\":\\\"https://github.com/muysengly\\\",\\\"email\\\":\\\"muysengly@gmail.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"demo/demo_001/readme.md\",\"excerpt\":\"\"}")
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
