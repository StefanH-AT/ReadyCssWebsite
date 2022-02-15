import { createApp } from "vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

import "./scss/main.scss";

const routes: RouteRecordRaw[] = [
    { path: "/", component: () => import("./HomePage.vue") },
    { path: "/button", component: () => import("./ButtonPage.vue") }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

import TheNavbar from "../components/TheNavbar.vue";
const app = createApp({
    components: {
        TheNavbar
    }
});

app.use(router);
app.mount("#app");
