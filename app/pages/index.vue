<template>
    <div class="scroll-container">
        <a href="/" class="scroll-btn">All</a>
        <a href="#" class="scroll-btn">Science</a>
        <a href="#" class="scroll-btn">Technology</a>
        <a href="#" class="scroll-btn">Sports</a>
        <a href="#" class="scroll-btn">Entertainment</a>

    </div>
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
const { data, error } = useFetch('https://filmyapp-e1005.firebaseio.com/news/all/data.json?orderBy="$key"&limitToLast=12');
console.log(data);


useHead(() => {
    return {
        title: '12khabar - Home Page',
        meta: [
            { name: 'description', content: '12 khabre duniya bhar se. Apne samay ka sahi istemal karein. Pay attention to the news that matters to you.' }
        ]
    }
})
</script>

<style scoped>
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


.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  /* background-color: #202020; */
  white-space: nowrap;
}

/* Hide scrollbar (for Chrome, Safari, Opera) */
.scroll-container::-webkit-scrollbar {
  display: none;
}

/* Buttons (anchor style) */
.scroll-btn {
  background-color: #2a2a2a;
  color: #f1f1f1;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #333;
  flex-shrink: 0;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}

.scroll-btn:hover {
  background-color: #00adb5;
  color: #242323;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .scroll-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
