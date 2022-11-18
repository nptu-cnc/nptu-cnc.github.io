import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

const NPTU_THEME = (options) => {
  // returns a theme object
  return {
    name: 'vuepress-theme-nptu-cnc',

    // path to the client config of your theme
    clientConfigFile: path.resolve(__dirname, 'client.js'),

    // set custom dev / build template
    // if the template is not specified, the default template from `@vuepress/client` will be used
    templateBuild: path.resolve(__dirname, 'templates/build.html'),
    templateDev: path.resolve(__dirname, 'templates/dev.html'),

    // use plugins
    plugins: [
      // ...
    ],

    // other plugin APIs are also available
  }
}

const barTheme = (options) => {
  // returns a theme function
  return (app) => {
    return {
      name: 'vuepress-theme-bar',
      // ...
    }
  }
}