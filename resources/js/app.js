
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

// Inizializzazione Vue Router
Vue.use(VueRouter);
// Inizializzazione Vue Material
Vue.use(VueMaterial)

// Dichiarazione Routes
const routes = [{}];

// Dichiarazione Router
const router = new VueRouter({
    routes
});

// Definizione Router Guard globale
router.beforeEach((to, from, next) => {
    // Titoli pagina dinamici
    document.title = `${to.meta.title}`

    next()
})

// Dichiarazione Vue
const app = new Vue({
    router
}).$mount('#app');
