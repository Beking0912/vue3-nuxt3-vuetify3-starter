import path from 'path'
import vuetify from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'
import vueI18n from './@core/i18n/i18n.config'

const isDev = process.env.NODE_ENV === 'development'
export default defineNuxtConfig({
  devtools: { enabled: isDev },

  app: {
    head: {
      titleTemplate: '%s - Starter',
      title: 'Starter',
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
    '@core': path.resolve(__dirname, '@core')
  },

  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  },

  build: {
    transpile: ['vuetify']
  },

  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },

  css: [
    'vuetify/lib/styles/main.sass'
  ],

  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        config.plugins?.push(vuetify({ autoImport: true }))
      )
    }
  ],

  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'starter',
      short_name: 'starter',
      theme_color: '#ffffff'
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    }
  }
})
