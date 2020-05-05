import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import Home from './components/Home.vue';
import NotFound from "@/components/NotFound";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import './themes/dark.scss';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.material.theming.theme = "dark";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/*', name: '404', component: NotFound}
    ]
});

new Vue({
    components: {App},
    router,
    render: h => h(App)
}).$mount('#app')
