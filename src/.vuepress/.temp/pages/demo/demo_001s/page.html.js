import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/demo/demo_001s/page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_001s/page.html\",\"title\":\"Page Config\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Page Config\",\"icon\":\"file\",\"order\":3,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"Guide\"],\"tag\":[\"Page config\",\"Guide\"],\"sticky\":true,\"star\":true,\"footer\":\"Footer content for test\",\"copyright\":\"No Copyright\",\"description\":\"Content before more comment is regarded as page excerpt.\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Page Title\",\"slug\":\"page-title\",\"link\":\"#page-title\",\"children\":[]},{\"level\":2,\"title\":\"Page Information\",\"slug\":\"page-information\",\"link\":\"#page-information\",\"children\":[]},{\"level\":2,\"title\":\"Page Content\",\"slug\":\"page-content\",\"link\":\"#page-content\",\"children\":[]},{\"level\":2,\"title\":\"Components\",\"slug\":\"components\",\"link\":\"#components\",\"children\":[]}],\"readingTime\":{\"minutes\":1.14,\"words\":341},\"filePathRelative\":\"demo/demo_001s/page.md\",\"localizedDate\":\"January 1, 2020\",\"excerpt\":\"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\\n\",\"autoDesc\":true}")
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
