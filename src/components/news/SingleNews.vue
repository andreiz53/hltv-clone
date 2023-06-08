<script setup>
defineProps(['post'])
</script>

<template>
  <div class="news-list-item">
    <p class="font-semibold mb-4">{{ post.title }}</p>
    <p class="text-base">{{ post.description }}</p>
    <RouterLink
      :to="`/news/${post.id}`"
      class="bg-primary-900 text-primary-100 py-2 px-4 text-sm font-bold rounded-lg mt-4 inline-block"
      >Read more</RouterLink
    >
  </div>
</template>
