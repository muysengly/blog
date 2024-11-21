import comp from "C:/Users/muysengly/Desktop/My Github/blog/src/.vuepress/.temp/pages/pages/posts/tomato.html.vue"
const data = JSON.parse("{\"path\":\"/pages/posts/tomato.html\",\"title\":\"Tomato\",\"lang\":\"en-US\",\"frontmatter\":{\"cover\":\"/assets/images/cover2.jpg\",\"icon\":\"pen-to-square\",\"date\":\"2022-01-12T00:00:00.000Z\",\"category\":[\"Vegetable\"],\"tag\":[\"red\",\"round\"],\"star\":true,\"sticky\":true,\"description\":\"Tomato Heading 2 Here is the content. Heading 3 Here is the content.\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"filePathRelative\":\"pages/posts/tomato.md\",\"localizedDate\":\"January 12, 2022\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")
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
