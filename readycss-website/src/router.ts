import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: "/", component: () => import("./pages/HomePage.vue"), name: "Color management library" },
    { path: "/button", component: () => import("./pages/ButtonPage.vue"), name: "Buttons" },
    { path: "/textinputs", component: () => import("./pages/InputTextPage.vue"), name: "Text Inputs" },
    { path: "/checkbox", component: () => import("./pages/CheckboxPage.vue"), name: "Checkboxes" },
    { path: "/gallery", component: () => import("./pages/GalleryPage.vue"), name: "Gallery" },
    { path: "/gallery/palette", component: () => import("./pages/gallery/PalettePage.vue"), name: "Palettes" },
    { path: "/gallery/reel", component: () => import("./pages/gallery/ReelPage.vue"), name: "Reel" },
    { path: "/gallery/switcher", component: () => import("./pages/gallery/SwitcherPage.vue"), name: "Switcher" },
    { path: "/gallery/sidebar", component: () => import("./pages/gallery/SidebarPage.vue"), name: "Sidebar" },

    { path: "/:pathMatch(.*)*", component: () => import("./pages/NotFoundPage.vue"), name: "Not Found" },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
