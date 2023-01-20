import { createApp } from "vue";
import themePlugin from "./plugins/theme-plugin";

import "./scss/main.scss";

import { router } from "./router";

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
