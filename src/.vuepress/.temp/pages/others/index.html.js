import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/others/index.html.vue"
const data = JSON.parse("{\"path\":\"/others/\",\"title\":\"Others\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Others\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://muysengly.github.io/blog/blog/others/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Others\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Others\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
