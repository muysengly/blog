import comp from "C:/Users/muysengly/Desktop/My Github/blog/src/.vuepress/.temp/pages/docs/course_001/008.html.vue"
const data = JSON.parse("{\"path\":\"/docs/course_001/008.html\",\"title\":\"8. Loops\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"8. Loops\",\"description\":\"In general...\",\"lead\":\"\",\"date\":\"2022-01-25T13:41:39.000Z\",\"lastmod\":\"2022-01-25T13:41:39.000Z\",\"draft\":false,\"images\":[],\"type\":\"docs\",\"toc\":true,\"weight\":8,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/docs/course_001/008.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"My Website\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"8. Loops\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"In general...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"data:image/jpg;base64,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AAAAAAA8mSvqWMxt1fV3/u7elKpLn1STev3aPWYbm2oXlvOhdUadejNalTqRUotelPkwOeeCeIatlx9bZC5n/wB9rShcS6J+EfNv0KTT/YdGFGxHDuGqcY8RUZ4mwlSoxtXSg7aDjTbg29LWltpN66l5AAAAAAAAAAAAAAAAAHjyORtMVZzur64hQow6zm/3a6t+hc2V/injzHcOKdCm1dZBLlQg+UH3zfm9XXpy09mm83n8jxDd+MZK4dRrfg6a5Qpp+ZLzebn1eubYFnyfHGPueNLXL0sbKdtbtJ9qSU6mt6nromtppN89LbXm2th89j89Z+M46uqsP60ekoPua6p//kc4Hqx2TvMReRusfcToV48lKL6ruafJr0PkB0wCicKflJs8w6drlOxZ3z1GMt6p1X6G+j9D/Y3vRewAAAAAARfEknHhnKyi2pRs6zTXVPsPmiUMNzb07u2q29ePbo1YOnOO9bi1pr/JgUHDUru84yws7idKpQoYWlWpxfb7Udrst9dOTk3za1rXnWycyWcybz11jcXGypeJ2iuqlS87Wp7bSS01pJJ7k967iaoYmztrmncUKKhWp28bWEk2+zST2o833+fqYMpw5is1WhWyNnGtUhFwUnKSbi3txemtrfme0BAZDijKwqZepYU7BW+Io06lVVpSk6zlHttQkmklrkm09v8AyMeR4tyqeTq4+lZxoWFjRvtXEJuclOLbjyaSel183TT3tT95wthr+5hcXWPpzqQSjvnFNLomk0pJeZNM9FbCY+4neyq20ZyvaSo3D7TXbgk0o9eXJvprqBT+IOIcpkMdnqVira2t7GwhUqubk6knUpuXxJJpLS5JtPb9fLBnMrd21nklZyVG4o4WhWVwpz7fOTTSW9J8m00t7fNluveE8LkKiqXWPhUkqSo85SW4Lonp89eZvbXmM9TAYyt4XwlpGfhrdWtROTfapLeo9fNt8+vpAquT4hucHkKte5oUbi6o4eFVyhKaUpOt2EtNtJbabet8nz1yPVd8S5bESyltfwsq1zbY539KpQjKMOTacJJtvrrTTW13E7S4cxVOHZVnGUfF3atVJOe6Te+y9t7W23z5mO14Ww9naXVtQsYqldw8HW3OUnOOtdltttLm+SYHiw2bylxnvJ+RhaOFWwje0pW6knBOWuw9t79a16iznipYy0o3kLunR7NeFBWy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\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-11-20T04:45:30.000Z\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-25T13:41:39.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-11-20T04:45:30.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"8. Loops\\\",\\\"image\\\":[\\\"data:image/jpg;base64,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AAAAAAA8mSvqWMxt1fV3/u7elKpLn1STev3aPWYbm2oXlvOhdUadejNalTqRUotelPkwOeeCeIatlx9bZC5n/wB9rShcS6J+EfNv0KTT/YdGFGxHDuGqcY8RUZ4mwlSoxtXSg7aDjTbg29LWltpN66l5AAAAAAAAAAAAAAAAAHjyORtMVZzur64hQow6zm/3a6t+hc2V/injzHcOKdCm1dZBLlQg+UH3zfm9XXpy09mm83n8jxDd+MZK4dRrfg6a5Qpp+ZLzebn1eubYFnyfHGPueNLXL0sbKdtbtJ9qSU6mt6nromtppN89LbXm2th89j89Z+M46uqsP60ekoPua6p//kc4Hqx2TvMReRusfcToV48lKL6ruafJr0PkB0wCicKflJs8w6drlOxZ3z1GMt6p1X6G+j9D/Y3vRewAAAAAARfEknHhnKyi2pRs6zTXVPsPmiUMNzb07u2q29ePbo1YOnOO9bi1pr/JgUHDUru84yws7idKpQoYWlWpxfb7Udrst9dOTk3za1rXnWycyWcybz11jcXGypeJ2iuqlS87Wp7bSS01pJJ7k967iaoYmztrmncUKKhWp28bWEk2+zST2o833+fqYMpw5is1WhWyNnGtUhFwUnKSbi3txemtrfme0BAZDijKwqZepYU7BW+Io06lVVpSk6zlHttQkmklrkm09v8AyMeR4tyqeTq4+lZxoWFjRvtXEJuclOLbjyaSel183TT3tT95wthr+5hcXWPpzqQSjvnFNLomk0pJeZNM9FbCY+4neyq20ZyvaSo3D7TXbgk0o9eXJvprqBT+IOIcpkMdnqVira2t7GwhUqubk6knUpuXxJJpLS5JtPb9fLBnMrd21nklZyVG4o4WhWVwpz7fOTTSW9J8m00t7fNluveE8LkKiqXWPhUkqSo85SW4Lonp89eZvbXmM9TAYyt4XwlpGfhrdWtROTfapLeo9fNt8+vpAquT4hucHkKte5oUbi6o4eFVyhKaUpOt2EtNtJbabet8nz1yPVd8S5bESyltfwsq1zbY539KpQjKMOTacJJtvrrTTW13E7S4cxVOHZVnGUfF3atVJOe6Te+y9t7W23z5mO14Ww9naXVtQsYqldw8HW3OUnOOtdltttLm+SYHiw2bylxnvJ+RhaOFWwje0pW6knBOWuw9t79a16iznipYy0o3kLunR7NeFBWy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\\\"],\\\"datePublished\\\":\\\"2022-01-25T13:41:39.000Z\\\",\\\"dateModified\\\":\\\"2024-11-20T04:45:30.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Sengly MUY\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Loop Control Statements\",\"slug\":\"loop-control-statements\",\"link\":\"#loop-control-statements\",\"children\":[]}],\"git\":{\"createdTime\":1732077930000,\"updatedTime\":1732077930000,\"contributors\":[{\"name\":\"MUY SENGLY\",\"email\":\"muysengly@gmail.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":1.54,\"words\":461},\"filePathRelative\":\"docs/course_001/008.md\",\"localizedDate\":\"January 25, 2022\",\"excerpt\":\"<p>In general, statements are executed sequentially: The first statement in a function is executed first, followed by the second, and so on. There may be a situation when you need to execute a block of code several number of times.</p>\\n<p>Programming languages provide various control structures that allow for more complicated execution paths.</p>\"}")
export { comp, data }
