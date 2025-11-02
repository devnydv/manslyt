<template>
    <h1>12khabar - Twelve days twelve news</h1>
    <Nav></Nav>
    
    <div class="card-grid">
        <a :href="`/category/all/${item.id}`" class="card" v-for="item in data" :key="item.id">

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
const { data, error } = useFetch('/api/data');



useHead(() => {
    return {
        title: '12khabar - Twelve days twelve news',
        meta: [
            { name: 'description', content: '12 khabre duniya bhar se. Apne samay ka sahi istemal karein. Pay attention to the news that matters to you.' },
            { name: 'keywords', content: 'news, latest news, world news, breaking news, 12khabar, twelve news, daily news' },
            { name: 'author', content: '12khabar' },
            { name: 'og:title', content: '12khabar - Twelve days twelve news' },
            { name: 'og:description', content: '12 khabre duniya bhar se. Apne samay ka sahi istemal karein. Pay attention to the news that matters to you.' },
            { name: 'og:type', content: 'website' },
            { name: 'og:url', content: 'https://12khabar.pages.dev/' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: '12khabar - Twelve days twelve news' },
            { name: 'twitter:description', content: '12 khabre duniya bhar se. Apne samay ka sahi istemal karein. Pay attention to the news that matters to you.' }
        ],
        htmlAttrs: {
            lang: 'hi'
        }
    }
})
</script>

<style scoped>
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
