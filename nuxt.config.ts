// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      "@nuxt/content"
  ],
  devtools: { enabled: true },
  components: [
    "~/components",
    {
      path: "~/components/ready/layout",
      prefix: "Ready"
    }
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1"
    }
  },
  css: [
      "assets/scss/main.scss"
  ]
})
