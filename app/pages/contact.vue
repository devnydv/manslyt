<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink> |
        <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <div class="card" v-for="post in posts" :key="post.id">
            <img :src="post.imageUrl" alt="" loading="lazy"/>
            <div id="content">
            <h2>{{ post.title }}</h2>
            <p>{{ post.date }}</p>
            <p>{{ post.content }}</p>
            </div>
        
        </div>

</template>
<script setup>

const { data, error } = useFetch("/api/hi");
let posts = computed(() => data.value?.data || []);
useHead({
    htmlAttrs: {
        lang: 'en'
    },
    title: 'Home Page',
    meta: [
        { name: 'description', content: 'This is the home page of our Nuxt 3 application.' }
    ]
})

</script>