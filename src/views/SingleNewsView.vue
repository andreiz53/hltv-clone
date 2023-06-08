<script setup>
import { useRoute } from 'vue-router'
import { useNewsStore } from '../stores/news'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const route = useRoute()
const newsStore = useNewsStore()

const { getPostById } = storeToRefs(newsStore)

const post = computed(() => {
  return getPostById.value(+route.params.id)
})
const date = computed(() => {
  return new Date(post.value.time).toDateString()
})
</script>

<template>
  <div v-if="post" class="container">
    <p class="text-sm font-bold">{{ date }}</p>
    <p class="font-semibold">{{ post.title }}</p>
    <p class="text-lg">{{ post.description }}</p>
    <div>
      <a
        class="inline-block bg-primary-900 text-primary-100 py-2 px-8 text-base font-bold rounded-lg mt-4 hover:bg-white transition"
        target="_blank"
        :href="post.link"
        >View original story</a
      >
    </div>
  </div>
</template>
