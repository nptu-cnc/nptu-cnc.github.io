import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";


export default withMermaid({
  // your existing vitepress config...
  // optionally, you can pass MermaidConfig
  title: "國立屏東大學計網中心",
  appearance:'dark',
  lastUpdated:true,
  assetsDir:'image',
  outDir:'./build',
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: 'Node.JS', link: '/docs/NodeJS/' },
      { text: 'Git', link: '/docs/git/' },
      { text: 'Markdown', link: '/docs/markdown/' },
      { text: 'Visual Studio Code', link: '/docs/vscode/' }
    ],

    sidebar: [
      {
        text: 'nodejs',
        link:'/docs/nodejs',
        collapsed: false,
      },
      {
        text: 'Git',
        link:'/docs/git',
        collapsed: false,
      },
      {
        text: 'Markdown',
        link:'/docs/markdown',
        collapsed: false,
      },
      {
        text: 'Visual Studio Code',
        link:'/docs/vscode',
        collapsed: false,
      },
      {
        text: 'VitePress官方範例',
        link:'/markdown-examples',
        collapsed: true,
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  sidebar: [
    {
      text: 'Examples'
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
