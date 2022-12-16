import{_ as l,r as p,o as u,c as i,a as n,d as a,w as e,b as s,e as o}from"./app.5fc3a5d2.js";const r={},k=n("h1",{id:"vue-js-introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-js-introduction","aria-hidden":"true"},"#"),s(" ［Vue.js］ Introduction")],-1),d={class:"table-of-contents"},m=o(`<h2 id="vue-js-簡介" tabindex="-1"><a class="header-anchor" href="#vue-js-簡介" aria-hidden="true">#</a> Vue.js 簡介</h2><p>Vue.js是一款網頁的框架(Framework)使用Vue.js可以讓開發過程更加輕鬆，一些重複的程式碼或內容可以藉由框架加以省略或是簡化。 假設我們現在有一筆資料內容是0到9，並且需要列出來，下面就用幾段程式碼來演示使用Vue.js跟未使用的差異</p><h3>使用Vue.js</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in rowData<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span> {{item}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> data<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">{</span>
                <span class="token literal-property property">rowData</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=n("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"VueLesson1-Vue",src:"https://codepen.io/karta2341940/embed/QWxQgeq?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/karta2341940/pen/QWxQgeq">
  VueLesson1-Vue</a> by karta2341940 (<a href="https://codepen.io/karta2341940">@karta2341940</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),h=o(`<h3>未使用Vue.js</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> rowData<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> app <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rowData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        app<span class="token punctuation">.</span>innerHTML<span class="token operator">+=</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b=n("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"VueLesson1",src:"https://codepen.io/karta2341940/embed/ExRQXOd?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/karta2341940/pen/ExRQXOd">
  VueLesson1</a> by karta2341940 (<a href="https://codepen.io/karta2341940">@karta2341940</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),g=n("p",null,"由上面兩段程式碼可以得知，如果沒有使用Vue.js的話就需要使用innerHML去動態的插入內容， 但如果使用vue的話就可以直接在html內規劃好內容的布局。並且，以上資料皆為較短的資料串， 如果是大型的資料集的話就不是簡單的用innerHTML可以應付的。",-1),_=n("h2",{id:"vue-js-的架構及執行流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-js-的架構及執行流程","aria-hidden":"true"},"#"),s(" Vue.js 的架構及執行流程")],-1),f=n("p",null,"Vue.js會在網頁開啟時將預先定義好的模板編譯後再插入指定的位置當中， 可以說Vue本身就是一個模板框架，以下是Vue的及HTML的運作及渲染過程。",-1),j=n("h3",{id:"html",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#html","aria-hidden":"true"},"#"),s(" HTML")],-1),w={href:"https://mermaid.live/edit#pako:eNp9Uk1v4jAQ_SvWXBqklGKXpElEuYBWPYBaQU-rXEw8lGgTG9lGXRbx3zv5Qt1LLUVy3nt-82bsCxRGIWTwYeXxwFabXDNay9d1QN-I3d_PmeIdKHnw8r5ejQjb8eBNWod21FE7TmDBgxwWRnvUnm1L_SeHni4aWn2n11S16siZO0rNnD9X-HxXmMrYzKK6mzcBevnKSIVqNHtopPObrWpsF6auje4TimDb-LDtAdE3QdlOBAvn2P9pRdtXMag3pwrdEFXcPCnuLytr7AiK4rw9Fd7YW4BORwf2fhCzd4t4E-z9jNgN7ivzOSAEvMlS-1J_dNDwR8SydMdKnsms37GfZ9QM5vtUIIQabS1LRVd6ac7m4A9IPUBGWyUtXUqur6STJ2-2Z11ARl1hCKejkh6XpaSXUEO2l5UjlJwhu8BfyOJx-shF9DhNeJJO-TQO4QyZSJJxkkZxNI3SmE8mIr6G8M8YcuDjSb_SKJ2k4kmEgKqk-a27J9e-vLbE7_ZAW_L6BcO1xiY",target:"_blank",rel:"noopener noreferrer"},x=n("img",{src:"https://mermaid.ink/img/pako:eNp9Uk1v4jAQ_SvWXBqklGKXpElEuYBWPYBaQU-rXEw8lGgTG9lGXRbx3zv5Qt1LLUVy3nt-82bsCxRGIWTwYeXxwFabXDNay9d1QN-I3d_PmeIdKHnw8r5ejQjb8eBNWod21FE7TmDBgxwWRnvUnm1L_SeHni4aWn2n11S16siZO0rNnD9X-HxXmMrYzKK6mzcBevnKSIVqNHtopPObrWpsF6auje4TimDb-LDtAdE3QdlOBAvn2P9pRdtXMag3pwrdEFXcPCnuLytr7AiK4rw9Fd7YW4BORwf2fhCzd4t4E-z9jNgN7ivzOSAEvMlS-1J_dNDwR8SydMdKnsms37GfZ9QM5vtUIIQabS1LRVd6ac7m4A9IPUBGWyUtXUqur6STJ2-2Z11ARl1hCKejkh6XpaSXUEO2l5UjlJwhu8BfyOJx-shF9DhNeJJO-TQO4QyZSJJxkkZxNI3SmE8mIr6G8M8YcuDjSb_SKJ2k4kmEgKqk-a27J9e-vLbE7_ZAW_L6BcO1xiY?type=png",alt:""},null,-1);function S(V,y){const t=p("router-link"),c=p("ExternalLinkIcon");return u(),i("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[a(t,{to:"#vue-js-簡介"},{default:e(()=>[s("Vue.js 簡介")]),_:1})]),n("li",null,[a(t,{to:"#vue-js-的架構及執行流程"},{default:e(()=>[s("Vue.js 的架構及執行流程")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#html"},{default:e(()=>[s("HTML")]),_:1})])])])])]),m,v,h,b,g,_,f,j,n("p",null,[n("a",w,[x,a(c)])])])}const L=l(r,[["render",S],["__file","index.html.vue"]]);export{L as default};