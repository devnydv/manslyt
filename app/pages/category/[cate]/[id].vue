<template>
    
    <Nav></Nav>
    
    <div class="card-grid">
        <div class="card">

            <img :src="data.imageUrl" alt="card image" class="card-img" loading="lazy" />
            <div class="card-content">
                <h1 class="card-title">{{ data.title }}</h1>
                <p class="card-date">{{ data.date }}</p>
                <p class="card-desc">{{ data.content }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
const category = route.params.cate;
const id = route.params.id;
const { data, error } = useFetch(`/api/cate/${category}/${id}`);



useHead(() => {
    return {
        title: data.value.title,
        meta: [
            { name: 'description', content: data.value.content },
            { name: 'keywords', content: data.value.title.split(' ').join(', ') },
            { name: 'author', content: data.value.author },
            { name: 'published_time', content: data.value.date },
            { name: 'image', content: data.value.imageUrl },
            { name: 'og:title', content: data.value.title },
            { name: 'og:description', content: data.value.content },
            { name: 'og:image', content: data.value.imageUrl },
            { name: 'og:type', content: 'article' },
            { name: 'og:url', content: `https://12khabar.pages.dev/category/${category}/${id}` },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: data.value.title },
            { name: 'twitter:description', content: data.value.content },
            { name: 'twitter:image', content: data.value.imageUrl }
        ],
        htmlAttrs: {
            lang: 'hi'
        }
    }
})
</script>

<style scoped>
.card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
.card:hover {
    transform: translateY(-5px);
}

.card-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card-content {
    padding: 1rem;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-date {
    font-size: 0.85rem;
    color: #888;
    margin: 0.3rem 0 0.6rem;
}

.card-desc {
    font-size: 0.95rem;
    color: #333333;
    
    
}
</style>