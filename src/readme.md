---
# home: true
icon: home
title: Home Page
---

<!-- <img src="/logo.png" alt="alt text" style="zoom:25%;" /> -->

```python :collapsed-lines
print("Hello World")
```


```ts {1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://aaa.com',
  }),
})
```



![Version](https://img.shields.io/npm/v/vuepress-theme-hope.svg?style=flat-square&logo=npm)
![Downloads](https://img.shields.io/npm/dm/vuepress-theme-hope.svg?style=flat-square&logo=npm)
![Dependencies](https://img.shields.io/librariesio/release/npm/vuepress-theme-hope?style=flat-square)

$apple$


```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```

```component VPCard
{
  "title": "Mr.Hope",
  "desc": "Where there is light, there is hope",
  "logo": "https://mister-hope.com/logo.svg",
  "link": "https://mister-hope.com",
  "background": "rgba(253, 230, 138, 0.15)"
}
```