// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  
  ],
  meta: [
    { name: 'google-site-verification', content: 'CcKplNntL7AOrykjQgTtc-_CPJn_nA9-Q1AN-usgB30' },
  ],
},
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public: {
      supabaseUrl: "https://ltsuvxczpjfoldcykhop.supabase.co",
      supabasePublishableKey: "sb_publishable_Gj9LBEufTa3YT7_xbcbyNw_aTwEQwOg",
    },
    
  },
})
