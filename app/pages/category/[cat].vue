<template>
    <h1> {{ title }}</h1>
    <Nav></Nav>
    
    <div class="card-grid">
        <div v-for="item in data" :key="item.id" class="card">
            <img :src="item.imageUrl" alt="card image" class="card-img" loading="lazy" />
            <div class="card-content">
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-date">{{ item.date }}</p>
                <p class="card-desc">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const category = route.params.cat;
const { data, error } = useFetch('/api/cate/' + category);
const title = `${category.charAt(0).toUpperCase() + category.slice(1)} News - 12khabar `;

useHead(() => {
    return {
        title: title,
        meta: [
            { name: 'description', content: `Latest news and updates in the ${category} category. Stay informed with 12khabar.` }
        ]
    }
})
</script>


<style>
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