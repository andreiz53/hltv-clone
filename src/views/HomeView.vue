<script setup>
import NewsListPreview from '../components/news/NewsListPreview.vue'
import PlayersListPreview from '../components/players/PlayersListPreview.vue'
import ResultsListPreview from '../components/results/ResultsListPreview.vue'
</script>

<template>
  <div class="container mx-auto grid grid-cols-[300px_1fr_300px] gap-4">
    <div>
      <p class="title">Featured player</p>
      <PlayersListPreview />
    </div>
    <div>
      <p class="title">Latest News</p>
      <NewsListPreview />
    </div>
    <div>
      <p class="title">Results</p>
      <ResultsListPreview />
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply text-2xl font-bold mb-4;
}
</style>
