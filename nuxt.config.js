export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pub_test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/constants.scss', '~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'bootstrap-vue/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|m4a|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },

  server: {
    port: 5000, // default: localhost
  },


  styleResources: {
    hoistUseStatements: 'true',
    scss: ['~assets/css/*.scss']
  }
}
