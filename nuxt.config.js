import axios from "axios";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: true,
  router: {
    base: "/",
    routeNameSplitter: "/"
  },
  // generate: {
  //   routes: () => {
  //     let info = axios
  //       .get("https://www.dyartwork.com/api/v1/?keyName=info")
  //       .then(res => {
  //         return res.data.map(page => {
  //           return {
  //             route: "/info/" + page.id,
  //             payload: page
  //           };
  //         });
  //       });

  //     let news = axios
  //     .get("https://www.dyartwork.com/api/v1/?keyName=news")
  //     .then(res => {
  //       return res.data.map(page => {
  //         return {
  //           route: "/news/" + page.id,
  //           payload: page
  //         };
  //       });
  //     });

  //     return Promise.all([info, news]).then(values => {
  //       return [...values[0], ...values[1]]
  //     })
  //   }
  // },
  server: {
    port: 3001
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "บริษัท ดี.วาย.งานศิลป์ คอนสตรัคชั่น จำกัด | D.Y.NGANSILP CONSTRUCTION COMPANY LIMITED",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: "data-spy='scroll' data-target='.navbar' data-offset='50'"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "บริษัท ก่อสร้าง เว็บบริษัทก่อสร้าง บริษัทรับเหมาก่อสร้าง บริษัทก่อสร้างบ้าน รายชื่อบริษัทก่อสร้าง"
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "assets/img/dy/logo/logo.webp"
      },
      { rel: "stylesheet", href: "assets/css/plugins.css" },
      { rel: "stylesheet", href: "assets/css/style.css" }
    ],
    script: [
      { type: "text/javascript", src: "js/jquery-3.5.1.min.js", body: true },
      {
        type: "text/javascript",
        src: "js/jquery-migrate-3.0.0.min.js",
        body: true
      },
      { type: "text/javascript", src: "js/modernizr-2.6.2.min.js", body: true },
      { type: "text/javascript", src: "js/pace.js", body: true },
      { type: "text/javascript", src: "js/popper.min.js", body: true },
      { type: "text/javascript", src: "js/bootstrap.min.js", body: true },
      { type: "text/javascript", src: "js/scrollIt.min.js", body: true },
      {
        type: "text/javascript",
        src: "js/jquery.waypoints.min.js",
        body: true
      },
      { type: "text/javascript", src: "js/owl.carousel.min.js", body: true },
      { type: "text/javascript", src: "js/jquery.stellar.min.js", body: true },
      {
        type: "text/javascript",
        src: "js/jquery.magnific-popup.js",
        body: true
      },
      { type: "text/javascript", src: "js/YouTubePopUp.js", body: true },
      { type: "text/javascript", src: "js/orgchart.js", body: true },
      { type: "text/javascript", src: "js/custom.js", body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    proxy: true,
    https: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cache: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    optimization: {
      minimize: true
    },
    optimizeCSS: true,
    followSymlinks: true,
    babel: {
      plugins: []
    }
  }
};
