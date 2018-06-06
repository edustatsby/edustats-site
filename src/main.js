import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue';
import Main from './components/Main.vue';
import Stats from './components/Stats.vue';
import Filter from './components/Filter.vue';

import storage from './store/store';

Vue.use(VueRouter);
Vue.use(Vuex);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/main',
            name: 'main',
          component: Main,
        },
        {
            path: '/stats',
            name: 'stats',
            component: Stats,
        },
        {
            path: '/filter',
            name: 'filter',
            component: Filter,
        },
        {
            path: '*',
            redirect: { name: 'main' },
        }
    ]
});

export const store = new Vuex.Store(storage);

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
});



