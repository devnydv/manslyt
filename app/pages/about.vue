<script setup>
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabasePublishableKey)
const items = ref([])

async function getInstruments() {
  const { data, error } = await supabase.from('data').select().limit(20)
  console.log(data, config.public.supabasePublishableKey)
  console.log(error)
  items.value = data
  

}

onMounted(() => {
  getInstruments()
})
</script>

<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <h1>About Page</h1>
    <div v-for="value in items" :key="value.id">
        <h1>
            {{ value.title }} 
        </h1>
        <p>{{ value.content }}</p>
    </div>
  
</template>
<style scoped>
h1{
    text-align: center;
    font-size: large;
}
</style>