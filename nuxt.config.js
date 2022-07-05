import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Industrial",
    title: "Industrial",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["animate.css/animate.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/flicking', client: true }, '~/plugins/device.server.js', '~/plugins/kinesis.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components/",
    "~/components/sections/",
    "~/components/navigation/header/",
    "~/components/navigation/footer/",
  ],

  target: 'static',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/auth-next",
    "vue-toastification/nuxt",
    // You can also pass plugin options
    ["vue-toastification/nuxt", {
      timeout: 1000,
      draggable: false
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3001',
    proxyHeaders: false,
    credentials: false
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // server

  serverMiddleware: 
    process.env.NODE_ENV === 'production' ? [] : [],

  // auth

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
        },
        endpoints: {
          login: { url: '/auth/authenticate', method: 'post', propertyName: 'token' },
          logout: { url: '/user/logout', method: 'post' },
          register: { url: '/auth/register', method: 'post', propertyName: 'token' },
          user: { url: '/user', method: 'get', propertyName: false },
          userlist: { url: '/user/userlist', method: 'get', propertyName: false },
        },
        user:{
          property: ''
        },
      }
    },
    redirect: {
      login: '/login',
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        dark: {
          primary: "#d18c39",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          light: "#fafafa",
          dark: "#121211",
          border: "#505059",
          starter: "#4CAF50",
          starterBg: "#030803",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};