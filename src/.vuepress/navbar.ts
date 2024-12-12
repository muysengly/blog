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
    text: "About",
    link: "/others/about",
    icon: "address-card",
  },
  {
    text: "Demo",
    link: "/others/demo",
    icon: "star",
  },
]);
