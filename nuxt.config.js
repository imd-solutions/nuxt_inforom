import colors from "vuetify/es5/util/colors";
const version = "0.0.51";

export default {
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    oidcHost: process.env.OIDC_HOST || "https://tmforumhubdev.mvine.com",
    oidcClientId:
      process.env.OIDC_CLIENT_ID || "43f86e2f-af05-4390-888b-34200d626757",
    oidcCallbackPath: process.env.OIDC_CALLBACK_PATH || "/oauth2/callback",
    oidcRedirectUrl:
      process.env.OIDC_REDIRECT_URL || "http://localhost:3000/oauth2/callback",
  },
  /*privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  },*/
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  // },
  head: {
    titleTemplate: "%s - TM Forum",
    title: "Inform",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "<%= BASE_URL %>config.js",
      },
    ],
  },

  css: ["@mdi/font/css/materialdesignicons.css", "@assets/scss/main.scss"],

  plugins: [
      "~/plugins/oidc.client.js",
      '~/plugins/vue-country-code.js'
  ],

  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/sentry", "@nuxtjs/gtm"],

  sentry: {
    dsn: process.env.SENTRY_DSN || "",
    config: {
      environment: process.env.SENTRY_ENV || "",
      release: `inform-frontend@${version}`,
    },
  },

  gtm: {
    id: "GTM-WG2T6KC",
    enabled: true,
  },

  vuetify: {
    customVariables: [],
    theme: {
      dark: false,
      themes: {
        light: {
          inkBlue: "#1A2746",
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
};
