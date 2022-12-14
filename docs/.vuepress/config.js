import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
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
                'text': 'Markdown',
                'link': '/pages/tutorial/Markdown/'
            },
            {
                'text': 'Git',
                'link': '/pages/tutorial/Git/README.md'
            },
            {
                'text': 'Node.js',
                'link': '/pages/tutorial/NodeJS/'
            },
            {
                'text': 'Bundle Tool',
                'link': '/pages/tutorial/Bundle/'
            },
            {
                'text': 'Vue.js',
                'link': '/pages/tutorial/Vue/',
                'collapsible': true,
                'children': [
                    {
                        'text': 'Introduction',
                        'link': '/pages/tutorial/Vue/Introduction/'
                    },
                    {
                        'text': '基本語法',
                        'link': '/pages/tutorial/Vue/basic/'
                    },
                    {
                        'text': 'Todo List',
                        'link': '/pages/tutorial/Vue/TodoList/'
                    },
                    {
                        'text': 'Movie Card',
                        'link': '/pages/tutorial/Vue/movieCard/'
                    },
                ]
            },
        ]
    },
    {
        'text': '其他',
        'link': '/pages/other',
        'collapsible': true,
    },
    {
        'text': 'Repositories',
        'link': '/pages/repo',
        'collapsible': true,
        'children': [
            {
                'text': '各單位網址清單',
                'link': 'https://github.com/nptu-cnc/URL_List'
            },
            {
                'text': '行政單位',
                'link': 'https://github.com/nptu-cnc/Academic-unit'
            },
            {
                'text': '學術單位',
                'link': 'https://github.com/nptu-cnc/Academic-unit'
            },
            {
                'text': '教職員資訊',
                'link': 'https://github.com/nptu-cnc/Employee-Info'
            },
            {
                'text': '學生資訊',
                'link': 'https://github.com/nptu-cnc/Student-info'
            },
            {
                'text': '形象頁',
                'link': 'https://github.com/nptu-cnc/front.nptu'
            },
        ]
    },
]

export default defineUserConfig({
    'plugins': [
        backToTopPlugin(),
        mediumZoomPlugin({
        }),
    ],
    'dest': 'build/',
    'lang': 'zh-TW',
    'title': "NPTU-CUC",
    'description': 'NPTU CNC Maintain',
    'base': "/",
    'templateBuild': "./docs/template/template.html",
    'templateDev': './docs/template/template.html',
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

