import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/classes/class_001/index.html.vue"
const data = JSON.parse("{\"path\":\"/classes/class_001/\",\"title\":\"Welcome\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Welcome\",\"icon\":\"book\",\"description\":\"Welcome to my class This is the demo class.\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Welcome to my class\",\"slug\":\"welcome-to-my-class\",\"link\":\"#welcome-to-my-class\",\"children\":[]}],\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"classes/class_001/readme.md\",\"excerpt\":\"<h2>Welcome to my class</h2>\\n<p>This is the demo class.</p>\\n\",\"autoDesc\":true}")
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
