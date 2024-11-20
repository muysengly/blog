import comp from "C:/Users/muysengly/Desktop/Vue Press/my_site_002/src/.vuepress/.temp/pages/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/portfolio.html\",\"title\":\"Contact Me\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"Contact Me\",\"icon\":\"home\",\"name\":\"Conan Edogawa\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"Genius young detective\",\"Lan’s childhood sweetheart\",\"The biggest rival of the black organization\"],\"footer\":false,\"description\":\"Description This is a portfolio home page demo. To use this layout, you should set home: true and portfolio: true in the page front matter. For related configuration docs, pleas...\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Description\",\"slug\":\"description\",\"link\":\"#description\",\"children\":[]}],\"readingTime\":{\"minutes\":0.25,\"words\":74},\"filePathRelative\":\"portfolio.md\",\"autoDesc\":true}")
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
