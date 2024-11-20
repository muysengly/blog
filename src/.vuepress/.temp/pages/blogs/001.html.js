import comp from "C:/Users/muysengly/Desktop/My Github/blog/src/.vuepress/.temp/pages/blogs/001.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/001.html\",\"title\":\"Hello\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Hello\",\"icon\":\"document\",\"description\":\"My page Page 001\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/blogs/001.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Website\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Hello\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"My page Page 001\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Hello\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Sengly MUY\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"blogs/001.md\",\"excerpt\":\"\\n<p>Page 001</p>\\n\",\"autoDesc\":true}")
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
