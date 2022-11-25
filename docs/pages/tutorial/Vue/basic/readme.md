# 基本語法

[[toc]]

## 安裝及使用

此章節將講解Vue.js的基本語法以及使用方式。
如果要使用Vue.js的話可以用以下兩種方式
- npm
- CDN


如果用npm來使用vue的話，需先用以下指令將vue安裝好。
>npm install vue

安裝完後再將vue.js import進專案當中在，此之前需要先了解global與esm版的差異。
- global
- esm

此時的資料夾的內容大概是長這樣這樣。
```
Lesson1/
├── node_modules
│   ├── vue
│   ├    .
│   ├    .
│   └    .
├── esm
│   └── index.html
├── global
│   └── index.html
├── package-lock.json
└── package.json
```

global在使用時無須一一將function import進去，只需要呼叫公開的全域變數`Vue`即可使用。以下是使用範例
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <div id="app">{{hello}}</div>
        <script src="../node_modules/vue/dist/vue.global.js"></script>
        <script>
            Vue.createApp({
                data(){
                    return{
                        hello:"Hi this is global import"
                    }
                }
            }).mount("#app")
        </script>
    </body>
</html>
```

如果是使用esm版本的話則需要將需要使用到的function import進去，並且將script的type設為module才可以使用。
```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <div id="app">{{hello}}</div>
    <script type="module">
        import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
        let data = {
            data() {
                return {
                    hello: "Hi this is esm import"
                }
            }
        }
        createApp(data).mount("#app")
    </script>
</body>
</html>
```
如果是使用CDN的話可至官方網站尋找，並且將以上import的位置改成官方提供的網址，或是可以將檔案一下載下來直接將路徑取代掉以上import的路徑。

[詳細內容可點此查看](https://github.com/nptu-cnc/tutorial/tree/main/Vue/Lesson1/)
## 基本語法