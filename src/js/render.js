import { barComponent, footerComponent } from './components/index.js';
import { homePage, aboutPage } from './pages/index.js';


const routes = [
    { path: '/', name: 'Home', component: homePage },
    { path: '/about', name: 'about', component: aboutPage }
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
});

router.beforeEach(async (to, from) => {
    console.log("To : ", to)
    console.log("From : ", from)
    return
    if (to.name !== '/') {
        from
    }
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
        "Bar": barComponent,
        "Foot": footerComponent,
    }
}



Vue.createApp(base)
    .use(router)
    .mount("body");


