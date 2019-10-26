
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from "./pages/home";

const routes = [{
    path: "/",
    component: HomePage
}]

export const router = new VueRouter({
    routes,
    mode: "history"
});
