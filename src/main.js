import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import Home from './components/Home.vue';
import NotFound from "@/components/NotFound";

Vue.config.productionTip = false

Vue.use(VueRouter);

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
