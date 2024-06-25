// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', ['@nuxtjs/google-fonts', {
    families: {
      'Roboto': true,
      download: true,
      inject: true,
      
    
    }
  }], '@nuxt/icon', '@nuxt/image'],
css: ['~/assets/css/main.css'],
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},
image: {
  quality: 80,
  inject: true
},
});