import {createRouter, createWebHistory, RouteMeta, RouteRecordRaw} from "vue-router";

const docsMeta: RouteMeta = {
    layout: "docs"
};

const routes: RouteRecordRaw[] = [
    { path: "/", component: () => import("@/pages/HomePage.vue"), name: "Color management library" },

    { path: "/docs", component: () => import("@/pages/DocsPage.vue"), meta: docsMeta },
    { path: "/docs/button", component: () => import("@/pages/docs/ButtonPage.vue"), meta: docsMeta },
    { path: "/docs/textinput", component: () => import("@/pages/docs/InputTextPage.vue"), meta: docsMeta },
    { path: "/docs/checkbox", component: () => import("@/pages/docs/CheckboxPage.vue"), meta: docsMeta },

    { path: "/gallery", component: () => import("@/pages/GalleryPage.vue"), name: "Gallery" },
    { path: "/gallery/palette", component: () => import("@/pages/gallery/PalettePage.vue"), name: "Palettes" },
    { path: "/gallery/reel", component: () => import("@/pages/gallery/ReelPage.vue"), name: "Reel" },
    { path: "/gallery/switcher", component: () => import("@/pages/gallery/SwitcherPage.vue"), name: "Switcher" },
    { path: "/gallery/sidebar", component: () => import("@/pages/gallery/SidebarPage.vue"), name: "Sidebar" },

    { path: "/:pathMatch(.*)*", component: () => import("@/pages/NotFoundPage.vue"), name: "Not Found" },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
