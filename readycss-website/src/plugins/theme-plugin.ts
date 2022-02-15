import {Plugin, reactive} from "vue";

interface ThemeInfo {
    isDark: boolean;
    name: string;
}

const themeInfo = reactive({
    isDark: false,
    name: ""
} as ThemeInfo);

const plugin: Plugin = {
    install(app) {
        app.config.globalProperties.$theme = themeInfo;

        const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark");
        updateThemeFromPreferences(themeMediaQuery.matches);
        themeMediaQuery.addEventListener("change", (e: MediaQueryListEvent) => {
            updateThemeFromPreferences(e.matches);
        });
    }
};

export default plugin;

export function setTheme(dark: boolean) {
    console.log("Setting theme to " + dark ? "Dark" : "Light");
    if(dark) {
        document.querySelector("html").classList.add("theme-dark");
    } else {
        document.querySelector("html").classList.remove("theme-dark");
    }
    updateThemeInfo(dark);
}

export function toggleTheme() {
    setTheme(!isDark());
}

export function isDark() {
    return themeInfo.isDark;
}

export function getThemeName() {
    return themeInfo.name;
}

function updateThemeFromPreferences(dark: boolean) {
    setTheme(dark);
    updateThemeInfo(dark);
}

function updateThemeInfo(dark: boolean) {
    themeInfo.isDark = dark;
    themeInfo.name = dark ? "Dark" : "Light";
}
