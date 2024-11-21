import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    link: "/",
    icon: "home",
  },
  {
    text: "Classes",
    icon: "book",
    children: [
      {
        text: "Classes 001",
        link: "/classes/course_001/",
        icon: "book",
      },
      {
        text: "Classes 002",
        link: "/classes/course_002/",
        icon: "book",
      },
    ],
  },
  {
    text: "Documents",
    icon: "paperclip",
    children: [
      {
        text: "Classes 001",
        link: "/documents/docs_001",
        icon: "paperclip",
      },
      {
        text: "Classes 002",
        link: "/documents/docs_002",
        icon: "paperclip",
      },
    ],
  },
  {
    text: "Pages",
    link: "/article/",
    icon: "newspaper",
  },
  // {
  //   text: "Languages",
  //   icon: "globe",
  //   children: [
  //     {
  //       text: "English",
  //       link: "/",
  //       icon: "globe",
  //     },
  //     {
  //       text: "Khmer",
  //       link: "/kh/",
  //       icon: "globe",
  //     },
  //   ],
  // },
  {
    text: "Demo",
    link: "/demo/",
    icon: "download",
  },
]);
