import { defineNuxtPlugin } from 'nuxt/app'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            'surface-variant': '#424242',
            'on-surface-variant': '#EEEEEE',
            primary: '#6200EE',
            'primary-darken-1': '#3700B3',
            secondary: '#03DAC6',
            'secondary-darken-1': '#018786',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00'
          },
          dark: false,
          variables: {
            'border-color': '#000000',
            'border-opacity': 0.12,
            'high-emphasis-opacity': 0.87,
            'medium-emphasis-opacity': 0.60,
            'disabled-opacity': 0.38,
            'idle-opacity': 0.04,
            'hover-opacity': 0.04,
            'focus-opacity': 0.12,
            'selected-opacity': 0.08,
            'activated-opacity': 0.12,
            'pressed-opacity': 0.12,
            'dragged-opacity': 0.08,
            'theme-kbd': '#212529',
            'theme-on-kbd': '#FFFFFF',
            'theme-code': '#F5F5F5',
            'theme-on-code': '#000000',
            'my-color-value': '#81df3a'
          }
        },
        dark: {
          colors: {
            background: '#121212',
            surface: '#212121',
            'surface-variant': '#BDBDBD',
            'on-surface-variant': '#424242',
            primary: '#BB86FC',
            'primary-darken-1': '#3700B3',
            secondary: '#03DAC5',
            'secondary-darken-1': '#03DAC5',
            error: '#CF6679',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00'
          },
          dark: true,
          variables: {
            'border-color': '#FFFFFF',
            'border-opacity': 0.12,
            'high-emphasis-opacity': 1,
            'medium-emphasis-opacity': 0.70,
            'disabled-opacity': 0.50,
            'idle-opacity': 0.10,
            'hover-opacity': 0.04,
            'focus-opacity': 0.12,
            'selected-opacity': 0.08,
            'activated-opacity': 0.12,
            'pressed-opacity': 0.16,
            'dragged-opacity': 0.08,
            'theme-kbd': '#212529',
            'theme-on-kbd': '#FFFFFF',
            'theme-code': '#343434',
            'theme-on-code': '#CCCCCC',
            'my-color-value': '#81df3a'
          }
        }
      }
    },
    defaults: {
      // VCard: {
      //   VBtn: { variant: 'outlined' }
      // }
    }
  })

  nuxtApp.vueApp.use(vuetify)

  return {
    provide: {
      vuetify,
      currentTheme: vuetify.theme.name.value
    }
  }
})
