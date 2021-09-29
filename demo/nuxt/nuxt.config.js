export default {
  target: 'static',
  components: true,
  modules: [
    'bootstrap-vue/nuxt',
    'druxt-site'
  ],
  druxt: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:8888'
  }
}
