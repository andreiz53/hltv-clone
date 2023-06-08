<script setup>
defineProps(['title', 'id'])
</script>

<template>
  <RouterLink :to="`/news/${id}`" class="post-container">
    <div>{{ title }}</div>
  </RouterLink>
</template>

<style>
.post-container {
  @apply bg-primary-200 py-2 px-4 text-base font-semibold rounded hover:bg-primary-300 transition;
}
</style>
