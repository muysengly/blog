import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    link: "/",
    icon: "home",
  },
  {
    text: "Pages",
    link: "/article/",
    icon: "newspaper",
  },
  {
    text: "Classes",
    icon: "book",
    children: [
      {
        text: "Python",
        link: "/classes/python/",
        icon: "book",
      },
      // {
      //   text: "Matlab",
      //   link: "/classes/002_matlab/",
      //   icon: "book",
      // },
    ],
  },
  {
    text: "About Me",
    link: "/about/about",
    icon: "address-card",
  },
  {
    text: "Demo",
    link: "/demo/",
    icon: "star",
  },
]);
