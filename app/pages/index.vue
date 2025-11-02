<template>
    <h1>12khabar - One day one news</h1>
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
console.log(data.value);


useHead(() => {
    return {
        title: '12khabar - Home Page',
        meta: [
            { name: 'description', content: '12 khabre duniya bhar se. Apne samay ka sahi istemal karein. Pay attention to the news that matters to you.' }
        ],
        htmlAttrs: {
            lang: 'hi'
        }
    }
})
</script>

<style>
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
</style>
