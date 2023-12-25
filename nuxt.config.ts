// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@nuxt/ui', '@aksharahegde/nuxt-glow'],
  colorMode: {
    classSuffix: '',
  },
  typescript: { strict: false }
})
