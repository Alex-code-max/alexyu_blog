import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "../favicon.ico" }]],
  base: "/alexyu_blog/",
  title: "Alexyu's Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "HTML", link: "/html/basis" },
      // { text: "CSS", link: "/css/basis" },
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
        text: "HTML",
        items: [
          {
            text: "HTML 基础",
            link: "/html/basis",
          },
        ],
      },
      {
        text: "CSS",
        items: [
          {
            text: "CSS 基础",
            link: "/css/basis",
          },
          {
            text: "CSS 选择器",
            link: "/css/selector",
          },
          {
            text: "CSS 居中",
            link: "/css/center",
          },
          {
            text: "CSS 动画",
            link: "/css/animation",
          },
          {
            text: "通用 CSS 笔记、建议与指导",
            link: "/css/specification",
          },
        ],
      },
      {
        text: "MARKDOWN",
        link: "/markdown/document",
        items: [
          {
            text: "关于 Markdown",
            link: "/markdown/article/about/readme",
            collapsed: true,
            items: [
              {
                text: "第一个 Markdown 文档",
                link: "/markdown/article/about/helloworld",
              },
              {
                text: "Hello.md",
                link: "/markdown/article/about/hello",
              },
            ],
          },
          {
            text: "语法",
            link: "/markdown/article/syntax/readme",
            collapsed: true,
            items: [
              {
                text: "段落与换行",
                link: "/markdown/article/syntax/paragraphs-and-line-breaks",
              },
              {
                text: "标题",
                link: "/markdown/article/syntax/headers",
              },
              {
                text: "引用",
                link: "/markdown/article/syntax/blockquotes",
              },
              {
                text: "列表",
                link: "/markdown/article/syntax/lists",
              },
              {
                text: "代码",
                link: "/markdown/article/syntax/code",
              },
              {
                text: "分隔线",
                link: "/markdown/article/syntax/horizontal-rule",
              },
              {
                text: "超链接",
                link: "/markdown/article/syntax/links",
              },
              {
                text: "图片",
                link: "/markdown/article/syntax/images",
              },
              {
                text: "强调",
                link: "/markdown/article/syntax/emphasis",
              },
              {
                text: "字符转义",
                link: "/markdown/article/syntax/blackslash-escapes",
              },
            ],
          },
          {
            text: "扩展语法",
            link: "/markdown/article/extension/readme",
            collapsed: true,
            items: [
              {
                text: "删除线",
                link: "/markdown/article/extension/strikethrougn",
              },
              {
                text: "代码块和语法高亮",
                link: "/markdown/article/extension/code-blocks-and-highlighting",
              },
              {
                text: "表格",
                link: "/markdown/article/extension/table",
              },
              {
                text: "Task List",
                link: "/markdown/article/extension/task-list",
              },
            ],
          },
          {
            text: "编辑器与扩展",
            link: "/markdown/article/tools/readme",
            collapsed: true,
            items: [
              {
                text: "MarkdownPad",
                link: "/markdown/article/tools/markdownpad",
              },
              {
                text: "Texts",
                link: "/markdown/article/tools/texts",
              },
              {
                text: "MarkPad",
                link: "/markdown/article/tools/markpad",
              },
              {
                text: "MdCharm",
                link: "/markdown/article/tools/mdcharm",
              },
              {
                text: "Markdown Edit",
                link: "/markdown/article/tools/markdown-edit",
              },
              {
                text: "CuteMarkEd",
                link: "/markdown/article/tools/cutemarked",
              },
              {
                text: "Haroopad",
                link: "/markdown/article/tools/haroopad",
              },
              {
                text: "Mou",
                link: "/markdown/article/tools/mou",
              },
              {
                text: "MacDown",
                link: "/markdown/article/tools/macdown",
              },
              {
                text: "Markdown Pro",
                link: "/markdown/article/tools/markdown-pro",
              },
              {
                text: "ReText",
                link: "/markdown/article/tools/retext",
              },
              {
                text: "sublime-markdown-extended",
                link: "/markdown/article/tools/sublime-markdown-extended",
              },
              {
                text: "Atom Markdown Preview",
                link: "/markdown/article/tools/atom-markdown-preview",
              },
              {
                text: "IDEA Markdown",
                link: "/markdown/article/tools/idea-markdown",
              },
              {
                text: "Cmd Markdown",
                link: "/markdown/article/tools/cmd-markdown",
              },
              {
                text: "StackEdit",
                link: "/markdown/article/tools/stackedit",
              },
              {
                text: "Dillinger",
                link: "/markdown/article/tools/dillinger",
              },
            ],
          },
          {
            text: "格式转换",
            link: "/markdown/article/convert/readme",
            collapsed: true,
            items: [
              {
                text: "HTML",
                link: "/markdown/article/convert/html",
              },
              {
                text: "PDF",
                link: "/markdown/article/convert/pdf",
              },
              {
                text: "Word",
                link: "/markdown/article/convert/word",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Alex-code-max/alexyu_blog" },
    ],
  },
});
