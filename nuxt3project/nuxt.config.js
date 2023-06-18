import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'
import vueI18n from './@core/i18n/i18n.config'

const isDev = process.env.NODE_ENV === 'development'
export default defineNuxtConfig({
  devtools: { enabled: isDev },

  app: {
    head: {
      titleTemplate: '%s - Bullwhip',
      title: 'Bullwhip',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
        },
        {
          name: 'description',
          content: process.env.npm_package_description || ''
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  alias: {
    '@themeConfig': path.resolve(__dirname, 'themeConfig.js'),
    '@core': path.resolve(__dirname, '@core'),
    '@user-variables': path.resolve(__dirname, 'assets/variables.scss')
  },

  build: { transpile: ['vuetify'] },

  css: [],

  modules: [
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n
  }
})
