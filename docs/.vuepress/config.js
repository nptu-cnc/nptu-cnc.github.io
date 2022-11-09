import { defaultTheme, defineUserConfig } from 'vuepress'
let map = [
    {
        'text': 'Home',
        'link': '/'
    },
    {
        'text': '教學',
        'link': '/pages/tutorial',
        'collapsible': true,
        'children': [
            {
                'text': 'Visual Studio Code',
                'link': '/pages/tutorial/Vscode/'
            },
            {
                'text': 'Git',
                'link': '/pages/tutorial/Git/'
            },
            {
                'text': 'Node.js',
                'link': '/pages/tutorial/NodeJS/'
            },
            {
                'text': 'Bundle',
                'link': '/pages/tutorial/Bundle'
            },
            {
                'text': 'Vue.js',
                'link': '/pages/tutorial/Vue/'
            },
        ]
    },
    {
        'text': '其他',
        'link': '/pages/other'
    },
]

export default defineUserConfig({
    'open':true,
    'dest': 'build/',
    'lang':'zh-TW',
    'title': "NPTU-CUC",
    'description':'NPTU CNC Maintain',
    'base':"/",
    'templateBuild':"./docs/template/template.html",
    'templateDev':'./docs/template/template.html',
    'theme': defaultTheme({
        'home': '/',
        'lastUpdated': true,
        'lastUpdatedText': "Last Edit ",
        'contributors': true,
        'colorMode': 'dark',
        'navbar': map,
        'sidebar': map,
        'sidebarDepth': 3
    })
})

