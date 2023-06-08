<script setup>
import { useNewsStore } from '../../stores/news'
import { storeToRefs } from 'pinia'
import SingleNewsPreview from './SingleNewsPreview.vue'
const newsStore = useNewsStore()

const { data: news, isLoading, error } = storeToRefs(newsStore)
</script>

<template>
  <div v-if="news" class="grid gap-4">
    <SingleNewsPreview
      v-for="post in news.value"
      :key="post.id"
      :title="post.title"
      :id="post.id"
    />
  </div>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div v-if="error">
    {{ error }}
  </div>
</template>
