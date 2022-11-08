import { defaultTheme, defineUserConfig } from 'vuepress'
let map = [
    {
        'text': 'Home',
        'link': '/'
    },
    {
        'text': '教學',
        'link': '/tutorial',
        'collapsible': true,
        'children': [
            {
                'text': 'Visual Studio Code',
                'link': '/tutorial/Vscode/'
            },
            {
                'text': 'Git',
                'link': '/tutorial/Git/'
            },
            {
                'text': 'Node.js',
                'link': '/tutorial/NodeJS/'
            },
            {
                'text': 'Bundle',
                'link': '/tutorial/Bundle'
            },
            {
                'text': 'Vue.js',
                'link': '/tutorial/Vue/'
            },
        ]
    },
    {
        'text': '其他',
        'link': '/other'
    },
]

export default defineUserConfig({
    'dest': 'build/',
    'title': "NPTU-CUC",
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