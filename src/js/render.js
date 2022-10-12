import { barComponent } from './components/index.js';
import { homePage, aboutPage } from './pages/index.js';
import { createApp } from "vue/dist/vue.esm-browser.js"
import { createRouter, createWebHistory } from "vue-router/dist/vue-router.esm-browser"

const routes = [
    { path: '/', component: homePage },
    { path: '/about', component: aboutPage }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const base = {
    data() {
        return {
            data: "Hello World",
            initial: false,
            isClick: [],
            jsonData: []
        }
    },
    async created() {
    },

    components: {
        "Bar": barComponent
    }
}



createApp(base)
    .use(router)
    .mount("body");


