<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink> |
        <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <div>
        <h1>Posts</h1>
        
        <div class="card" v-for="post in posts" :key="post.id">
            <img :src="post.imageUrl" alt="" loading="lazy"/>
            <div id="content">
            <h2>{{ post.title }}</h2>
            <p>{{ post.date }}</p>
            <p>{{ post.content }}</p>
            </div>
        
        </div>
    </div>
</template>
<script setup>
const { data, error } = useFetch('/api/hi')

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

<style scoped>

.card {
    max-width: 80%;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #e2e1e1;
}
img {
    max-width: 300px;
    max-height: 300px;
    padding: 20px;
    

}
h1 {
    text-align: center;
}
h2 {
    text-align: justify;
}

@media(max-width: 700px){
    .card {
        width: 95%;
       display: block;
    }
    img {
        
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}


</style>