import comp from "C:/Users/muysengly/Desktop/My Github/blog/src/.vuepress/.temp/pages/blogs/index.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/\",\"title\":\"Blogs\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Blogs\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/blogs/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Website\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Blogs\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Blogs\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
