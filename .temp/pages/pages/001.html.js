import comp from "C:/Users/muysengly/Desktop/Vue Press/my_site_002 update some - Copy/src/.vuepress/.temp/pages/pages/001.html.vue"
const data = JSON.parse("{\"path\":\"/pages/001.html\",\"title\":\"My page\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"My page Page 001\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/pages/001.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Website\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"My page\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"My page Page 001\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"My page\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Sengly MUY\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"pages/001.md\",\"excerpt\":\"\\n<p>Page 001</p>\\n\",\"autoDesc\":true}")
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
