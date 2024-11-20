import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Blog",
    link: "/article/",
    icon: "newspaper",
  },
  {
    text: "Courses",
    icon: "laptop",
    children: [
      {
        text: "Course 001",
        link: "/docs/course_001/",
        icon: "laptop",
      },
      {
        text: "Course 002",
        link: "/docs/course_002/",
        icon: "laptop",
      },
    ],
  },
  {
    text: "Books",
    link: "/books/",
    icon: "book",
  },
  "/contact_me",
]);
