import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/404.html.vue"
const data = JSON.parse("{\"path\":\"/404.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"NotFound\",\"description\":\"404 Not Found\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://muysengly.github.io/blog/blog/404.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Blog\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"404 Not Found\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\",\\\"description\\\":\\\"404 Not Found\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":3},\"filePathRelative\":null,\"excerpt\":\"<p>404 Not Found</p>\\n\",\"autoDesc\":true}")
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
