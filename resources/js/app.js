require('./bootstrap');

import Vue from 'vue';
import App from './components/App'
import store from './store';
import {router} from './router.js';

new Vue({
    el: '#app',
    store,
    router,
    ...App
});
