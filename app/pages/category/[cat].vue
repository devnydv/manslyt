<template>
    <h1> {{ title }}</h1>
    <Nav></Nav>
    <p id="notfound">{{ notfound }} </p>
    <div class="card-grid">
        <a :href="`/category/${category}/${item.id}`" class="card" v-for="item in data" :key="item.id">
            <img :src="item.imageUrl" alt="card image" class="card-img" loading="lazy" />
            <div class="card-content">
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-date">{{ item.date }}</p>
                <p class="card-desc">{{ item.content }}</p>
            </div>
        
        </a>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const notfound = ref("");
const route = useRoute();
const category = route.params.cat;
const { data, error } = useFetch('/api/cate/' + category);

onMounted(() => {
    if (data.value && Array.isArray(data.value) && data.value.length === 0) {

        notfound.value = "No news found for this category. Redirecting to home...";
        window.location.replace('/');
    }
})
const title = `${category.charAt(0).toUpperCase() + category.slice(1)} News - 12khabar `;

useHead(() => {
    return {
        title: title,
        meta: [
            { name: 'description', content: `Latest news and updates in the ${category} category. Stay informed with 12khabar.` },
            { name: 'keywords', content: `news, ${category} news, latest ${category} news, breaking ${category} news, 12khabar` },
            { name: 'author', content: '12khabar' },
            { name: 'og:title', content: title },
            { name: 'og:description', content: `Latest news and updates in the ${category} category. Stay informed with 12khabar.` },
            { name: 'og:type', content: 'website' },
            { name: 'og:url', content: `https://12khabar.pages.dev/category/${category}` },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: `Latest news and updates in the ${category} category. Stay informed with 12khabar.` }
        ],
        htmlAttrs: {
            lang: 'hi'
        }
    }
})
</script>


<style scoped>
#notfound {
    text-align: center;
    font-size: 1.2rem;
    color: #ff0000;
    margin: 1rem 0;
}
a {
    text-decoration: none;
}
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
}

.card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
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
    color: #555;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* limits to 3 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Responsive behavior */
@media (min-width: 768px) {
    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

h1 {
    text-align: center;
    margin: 1rem 0;
}
</style>