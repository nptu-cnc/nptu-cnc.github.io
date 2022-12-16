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

global版在使用時無須一一將function import進去，只需要呼叫公開的全域變數`Vue`即可使用。以下是使用範例
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

## Template

在Vue中所使用的模板語法是一種HTML的變體，只要在原本HTML的基礎上加上Vue特有的語法就可以撰寫Vue的模板(`Template`)，
其中常用的模板語法有`v-bind`、`v-model`、`v-html`、`v-text`、`v-if`、`v-for`及其他在下面會提及的語法。
### v-bind 
v-bind是Vue中用以 **_單向_** 綁定資料的語法，
在實際使用中會用來即時更新接收到的資料，
並且會與Vue instance的data搭配使用
但無法從前端獲取資料並加以處理。
### v-model
在Vue中v-model可以用來 **_雙向_** 綁定資料，
並且其功能與之後會講的Computed、及Watch有點類似，
通常會搭配Vue instance的data一同使用，
主要用途大多用以即時更新資料及運算等。
### v-for 
這個模板指令通常用來渲染大量且重複的內容，
譬如購物網站的品項渲染或是學校首頁公告項目皆可以用v-for來實現。
### v-if、v-show
v-if 跟 v-show 的功能類似，
皆為動態的隱藏與顯示特定元素，
兩者的差別在於 v-if 在條件判斷為true時才會渲染至前端，
而 v-show 則是在網頁Loading時渲染，爾後再依照條件判斷的內容決定是否將該元素設置為`display:none;`。
### v-html
會將給予的東西直接當作HTML插入HTML結構內。
### v-text
會將給予的東西直接當作純文字插入HTML的結構之中，就算輸入的內容符合HTML的格式也是一樣會以純文字的方式呈現。
### 






<h1>Resource</h1>

- [source-1](https://hackmd.io/@CynthiaChuang/Vue-Study-Notes-Contents/%2F%40CynthiaChuang%2FVue-Study-Notes-Unit04%23Computed-%25E8%2588%2587-Watch)
- [source-2](https://book.vue.tw/CH1/1-1-introduction.html)
- [source-3](https://guahsu.io/2018/08/vue-if-with-vue-show-singleton/)
- [source-4](https://www.runoob.com/vue2/)



