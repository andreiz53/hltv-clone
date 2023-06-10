<script setup>
import { storeToRefs } from 'pinia'
import { useResultsStore } from '../../stores/results'
import ResultDetail from './ResultDetail.vue'

const resultsStore = useResultsStore()

const { data, isLoading, error } = storeToRefs(resultsStore)
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="data" class="results-container">
    <ResultDetail v-for="result in data" :key="result.matchId" :result="result" />
  </div>
</template>

<style scoped>
.results-container {
  @apply grid grid-cols-3 gap-5;
}
</style>
