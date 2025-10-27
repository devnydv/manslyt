// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
