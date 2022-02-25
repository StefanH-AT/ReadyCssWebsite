import { createApp } from "vue";
import {createRouter, createWebHistory, NavigationFailure, RouteLocationNormalized, RouteRecordRaw} from "vue-router";
import themePlugin from "./plugins/theme-plugin";

import "./scss/main.scss";

const routes: RouteRecordRaw[] = [
    { path: "/", component: () => import("./HomePage.vue"), name: "Color management library" },
    { path: "/button", component: () => import("./ButtonPage.vue"), name: "Buttons" },
    { path: "/textinputs", component: () => import("./InputTextPage.vue"), name: "Text Inputs" },
    { path: "/check", component: () => import("./CheckPage.vue"), name: "Checkboxes" }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized, failure: NavigationFailure | void) => {
    document.querySelector("title").innerText = `ReadyCSS - ${to.name.toString()}`;
});

import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
const app = createApp({
    components: {
        TheNavbar,
        TheFooter
    }
});

app.use(router);
app.use(themePlugin);
app.mount("#app");
