import { createApp } from "vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import themePlugin from "./plugins/theme-plugin";

import "./scss/main.scss";
//import "highlight.js/styles/github.css";

const routes: RouteRecordRaw[] = [
    { path: "/", component: () => import("./HomePage.vue") },
    { path: "/button", component: () => import("./ButtonPage.vue") },
    { path: "/textinputs", component: () => import("./InputTextPage.vue") }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

import TheNavbar from "./components/TheNavbar.vue";
const app = createApp({
    components: {
        TheNavbar
    }
});

app.use(router);
app.use(themePlugin);
app.mount("#app");
