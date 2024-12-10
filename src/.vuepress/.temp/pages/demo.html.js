import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/demo.html.vue"
const data = JSON.parse("{\"path\":\"/demo.html\",\"title\":\"Demo Page\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Demo Page\",\"icon\":\"file\",\"order\":1,\"author\":\"Sengly MUY\",\"date\":\"2024-12-10T00:00:00.000Z\",\"category\":[\"Welcome\"],\"tag\":[\"Welcome\"],\"sticky\":false,\"star\":false,\"footer\":false,\"copyright\":false,\"description\":\"Welcome to my website.\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://muysengly.github.io/blog/blog/demo.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Demo Page\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Welcome to my website.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Sengly MUY\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Welcome\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-12-10T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Demo Page\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-12-10T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Sengly MUY\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Welcome to my website.\",\"slug\":\"welcome-to-my-website\",\"link\":\"#welcome-to-my-website\",\"children\":[]}],\"readingTime\":{\"minutes\":0.12,\"words\":37},\"filePathRelative\":\"demo.md\",\"localizedDate\":\"December 10, 2024\",\"excerpt\":\"<h2>Welcome to my website.</h2>\\n\",\"autoDesc\":true}")
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
