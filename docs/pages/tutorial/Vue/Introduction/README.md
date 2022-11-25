# Vue.js

[[toc]]

Vue.js是一款網頁的框架(Framework)使用Vue.js可以讓開發上更加輕鬆，一些重複的程式碼或內容可以藉由框架加以省略或是簡化。
假設我們現在有一筆資料內容是0到9，並且需要列出來，下面就用幾段程式碼來演示使用Vue.js跟未使用的差異

<h3>使用Vue.js</h3>

```html
<div id="app">
    <div v-for="item in rowData">
        <div> {{item}} </div>
    </div>
</div>

<script>
    const data={
        data(){
            return{
                rowData:[0,1,2,3,4,5,6,7,8,9]
            }
        }
    }
    Vue.createApp(data).mount("#app");
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="VueLesson1-Vue" src="https://codepen.io/karta2341940/embed/QWxQgeq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/karta2341940/pen/QWxQgeq">
  VueLesson1-Vue</a> by karta2341940 (<a href="https://codepen.io/karta2341940">@karta2341940</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<h3>未使用Vue.js</h3>

```html
<div id="app"></div>

<script>
    let rowData=[0,1,2,3,4,5,6,7,8,9];
    let app = document.querySelector("#app");
    rowData.forEach((value)=>{
        app.innerHTML+=`
        <div>
            ${value}
        </div>`
    })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="VueLesson1" src="https://codepen.io/karta2341940/embed/ExRQXOd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/karta2341940/pen/ExRQXOd">
  VueLesson1</a> by karta2341940 (<a href="https://codepen.io/karta2341940">@karta2341940</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

由上面兩段程式碼可以得知，如果沒有使用Vue.js的話就需要使用innerHML去動態的插入內容，
但如果使用vue的話就可以直接在html內規劃好內容的布局，並且以上資料皆為較短的資料串，
如果是大型的資料集的話就不是簡單的用innerHTML可以應付的。

