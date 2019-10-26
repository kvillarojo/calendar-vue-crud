require('./bootstrap');

import Vue from 'vue';
import App from './components/App'
import {router} from './router.js';

new Vue({
    el: '#app',
    router,
    ...App
});
