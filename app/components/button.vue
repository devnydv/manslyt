<template>
    <button @click="clicked()">
        this is a button
    </button>
</template>

<script setup>
const clicked = () => {
    alert('Button clicked!');
}
</script>