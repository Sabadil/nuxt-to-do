// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:["~/assets/style.css"],
    modules:[
      ['@nuxtjs/google-fonts',{
        families: {
          'Inter':[400,700],
          download: true,
          inject: true
        }
      }]
    ]
})
