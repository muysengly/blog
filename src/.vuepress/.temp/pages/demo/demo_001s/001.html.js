import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/demo/demo_001s/001.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_001s/001.html\",\"title\":\"Demo 002\",\"lang\":\"en-US\",\"frontmatter\":{\"author\":\"Sengly MUY\",\"sticky\":false,\"star\":false,\"footer\":false,\"copyright\":false,\"toc\":false,\"title\":\"Demo 002\",\"icon\":\"star\",\"date\":\"2024-12-10T00:00:00.000Z\",\"description\":\"My demo File not found\",\"gitInclude\":[\"about.my_information.html\"]},\"headers\":[{\"level\":2,\"title\":\"My demo\",\"slug\":\"my-demo\",\"link\":\"#my-demo\",\"children\":[]}],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"filePathRelative\":\"demo/demo_001s/001.md\",\"localizedDate\":\"December 10, 2024\",\"excerpt\":\"<h2>My demo</h2>\\n<p>File not found</p>\\n\",\"autoDesc\":true}")
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
