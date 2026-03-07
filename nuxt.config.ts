// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  ui: {
    theme: {
      /* Enregistrement des slots sémantiques → génère --ui-color-{name}-*
         et active color="{name}" sur tous les composants Nuxt UI          */
      colors: ['primary', 'accent', 'success', 'warning', 'error', 'info', 'neutral']
    }
  },

  devtools: {
    enabled: true
  },

  ssr: false,

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
