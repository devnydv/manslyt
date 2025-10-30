<script setup>
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabasePublishableKey)
const items = ref([])

async function getInstruments() {
  const { data, error } = await supabase.from('data').select().limit(10)
  
  
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
        <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <h1>About Page</h1>
    <div v-for="value in items" :key="value.id">
        <h1>
            {{ value.title }} 
        </h1>
        <img :src="value.imageUrl" alt="" loading="lazy"/>
        <p>{{ value.content }}</p>
    </div>
  
</template>
<style scoped>
h1{
    text-align: center;
    font-size: large;
}
img {
    max-width: 400px;
    max-height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
}
</style>