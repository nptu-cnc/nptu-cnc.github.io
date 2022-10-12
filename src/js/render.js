import { barComponent } from './components/index.js';
import { homePage, aboutPage } from './pages/index.js';


const routes = [
    { path: '/', component: homePage },
    { path: '/about', component: aboutPage }
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
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



Vue.createApp(base)
    .use(router)
    .mount("body");


