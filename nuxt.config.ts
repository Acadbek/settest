// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    ['@nuxtjs/supabase', {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }]
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
  i18n: {
    locales: ['uz', 'ru', 'en'],
    defaultLocale: 'uz',
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: { strict: true }
})
