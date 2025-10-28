<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink> |
        <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <h1>{{data}}</h1>

</template>
<script setup>  
const { data, error } = useFetch('/api/hi')
console.log(data.value)

</script>