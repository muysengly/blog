import comp from "C:/Users/muysengly/Desktop/My Github/blog/src/.vuepress/.temp/pages/docs/course_001/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/course_001/\",\"title\":\"Course 001\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Course 001\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/docs/course_001/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Website\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Course 001\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Course 001\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
