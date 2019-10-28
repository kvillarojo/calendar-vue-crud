import Vue from 'vue';
import Vuex from 'vuex';
import calindar from './modules/calindar';

Vue.use(Vuex);

const store = {
    modules: {
        calindar
    }
}

export default new Vuex.Store(store);
