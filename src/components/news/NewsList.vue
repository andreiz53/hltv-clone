<script setup>
import { useNewsStore } from '../../stores/news'
import { storeToRefs } from 'pinia'
import SingleNews from './SingleNews.vue'

const newsStore = useNewsStore()

const { data: news, isLoading, error } = storeToRefs(newsStore)
</script>

<template>
  <div v-if="news" class="news-list">
    <SingleNews v-for="post in news.value" :key="post.id" :post="post" />
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">{{ error }}</div>
</template>

<style scoped>
.news-list {
  @apply grid grid-cols-2 gap-4 mt-8;
}
.news-list-item {
  @apply bg-primary-200 rounded px-4 py-8;
}
</style>
