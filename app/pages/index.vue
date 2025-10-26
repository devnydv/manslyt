<template>
    <div>
        <h1>Posts</h1>
        <ul>
            <li v-for="post in data" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>
<script setup>

const { data, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
if (error.value) {
    
    console.error('Error fetching posts:', error.value)
} else {
    console.log('Fetched posts:', data.value)
}
</script>