<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink> |
        <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <div v-for="item in data.data" :key="item.id">
        <h2>{{ item.title }}</h2>
        <img :src="item.imageUrl" alt="" loading="lazy"/>
        <p>{{ item.content }}</p>
        

    </div>
    

</template>
<script setup>  
const { data, error } = useFetch('/api/hi')
console.log(data.value)

</script>