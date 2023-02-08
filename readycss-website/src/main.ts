import { createApp } from "vue";
import themePlugin from "@/plugins/theme-plugin";
import App from "@/App.vue";

import "./scss/main.scss";

import { router } from "./router";

const app = createApp(App);

app.use(router);
app.use(themePlugin);
app.mount("#app");
