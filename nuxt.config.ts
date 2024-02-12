// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/kinde',
  ],
  i18n: {
    locales: ['uz', 'ru', 'en'],
    defaultLocale: 'uz',
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: { strict: true },
})
