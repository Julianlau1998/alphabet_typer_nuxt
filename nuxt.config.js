export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Type The Alphabet - How fast can you type the alphabet?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description-main',
        name: 'description',
        content: 'Test how fast you can type the alphabet! Play Alphabet Typer — a free, fun, and fast-paced typing game to challenge your speed and accuracy. Compete with friends and climb the leaderboard!'
      },
      {
        hid: 'keywords-main',
        name: 'keywords',
        content: 'Type the Alphabet, Alphabet Typing Test, Alphabet Typer, abc typing test, abcd typing, Typing speed challenge, Alphabet typing game, typing competition, Typing leaderboard, Typing speed test'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/83948e47aa.js',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-1006221991146598',
        async: true,
        crossorigin: 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma',
    '@/assets/styles/main.scss',
    '@/assets/styles/variables.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['nuxt-matomo', { matomoUrl: 'https://howworks.matomo.cloud/', siteId: 2 }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Type The Alphabet',
      lang: 'en',
      background_color: '#2c3e50',
      theme_color: '#2c3e50',
      icons: [{
        src: 'static/icon.png',
        size: '144x144',
        type: 'image/png'
      }, {
        src: 'static/icon.png',
        size: '128x128',
        type: 'image/png'
      }, {
        src: 'static/icon.png',
        size: '152x152',
        type: 'image/png'
      }, {
        src: 'static/icon.png',
        size: '180x180',
        type: 'image/png'
      }, {
        src: 'static/icon.png',
        size: '192x192',
        type: 'image/png'
      }, {
        src: 'static/icon.png',
        size: '256x256',
        type: 'image/png'
      }
      ]
    },
    icon: {
      src: 'static/icon.png',
      fileName: 'icon.png'
    },
    meta: {
      appleStatusBarStyle: '#2a343c',
      mobileApp: true,
      mobileAppIOS: true,
      theme_color: '#2a343c',
      src: 'static/icon.png'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  /*   proxy: {
    // Simple proxy
    '/api/': {
      target: 'http://192.168.178.87:8081'
    }
  }, */
  env: {
    environment: process.env.environment || 'DEV'
  }
}
