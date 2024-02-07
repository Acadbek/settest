// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/supabase'
  ],
  i18n: {
    locales: ['uz', 'ru', 'en'],
    defaultLocale: 'uz',
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: { strict: true },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
      exclude: ['/test', '/students', '/profile', '/login']
    }
  },
})
