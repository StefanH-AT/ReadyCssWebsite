import { createApp } from "vue";
import themePlugin from "@/../docs/.vitepress/theme/plugins/theme-plugin";
import App from "@/App.vue";

import "../docs/.vitepress/theme/scss/main.scss";

import { router } from "./router";

const app = createApp(App);

app.use(router);
app.use(themePlugin);
app.mount("#app");
