import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Babble/"
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "Babble 🤗",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle:"文章目录",
    outline:[2,6],

    nav: [
      { text: '首页', link: '/' },
      { text: '项目简介', link: '/markdown-examples' }
    ],

    footer:{
        copyright:"Copyright@ 2024 庹芯 & 白昀",
    },
    search:{
      provider:"local",
      options:{
        translations:{
            button:{
                buttonText: "搜索",
                buttonArialLabel:"搜索",
            },
            modal:{
                noResultsText:"无法找到相关结果",
                resetButtonTitle:"清楚查询条件",
                footer:{
                    selectText:"选择",
                    navigateText:"切换",
                    closeText:"关闭",
                },
            },
        },
      },
    },

    sidebar: [
      {
        items: [
          { text: '项目简介', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
