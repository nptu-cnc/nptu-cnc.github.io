import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";


export default withMermaid({
  // your existing vitepress config...
  // optionally, you can pass MermaidConfig
  outDir:'./build',
  title: "國立屏東大學計網中心",
  appearance:'dark',
  lastUpdated:true,
  assetsDir:'image',
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
    ],

    sidebar: [
      {
        text: '前端',
        link:'/docs/front',
        collapsed: false,
        items: [
          { text: '開發', link: '/docs/front#開發' },
          { text: '部屬', link: '/docs/front#部屬' },
          { text: '架構', link: '/docs/front#架構' },
        ]
      },
      {
        text: '後端',
        link:'/docs/sdic',
        collapsed: false,
        items: [
          { text: '開發', link: '/docs/sdic#開發' },
          { text: '部屬', link: '/docs/sdic#部屬' },
          { text: 'SQL', link: '/docs/sdic#SQL' },
          { text: '架構', link: '/docs/sdic#架構' },
          { text: 'API規格', link: '/docs/sdic#API規格' },
        ]
      },
      {
        text: 'Label Studio',
        link:'/docs/labelstudio',
        collapsed: false,
        items: [
          { text: '開發', link: '/docs/labelstudio#開發' },
          { text: '部屬', link: '/docs/labelstudio#部屬' },
        ]
      },
      {
        text: 'AI服務',
        link:'/docs/ai',
        collapsed: false,
        items: [
          { text: '開發', link: '/docs/ai#開發' },
          { text: '部屬', link: '/docs/ai#部屬' },
          { text: 'API規格', link: '/docs/ai/api.spec.md' },
        ]
      },
      {
        text: 'VitePress官方範例',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  sidebar: [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    }
  ],
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
});
