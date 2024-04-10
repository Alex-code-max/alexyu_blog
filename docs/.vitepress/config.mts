import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/alexyu_blog/",
  title: "Alexyu's Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "首页",
        items: [
          {
            text: "描述",
            link: "/main",
          },
        ],
      },
      {
        text: "CSS",
        items: [
          {
            text: "通用 CSS 笔记、建议与指导",
            link: "/css/specification",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Alex-code-max/alexyu_blg" },
    ],
  },
});
