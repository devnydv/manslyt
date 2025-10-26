<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <div>
        <h1>Posts</h1>
        <ul>
            <li v-for="post in data" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>
<script setup>

const { data, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

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