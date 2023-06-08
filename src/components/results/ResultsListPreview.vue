<script setup>
import { useResultsStore } from '../../stores/results'
import { storeToRefs } from 'pinia'
import SingleResultPreview from './SingleResultPreview.vue'
import { computed } from 'vue'

const resultsStore = useResultsStore()

const { getLatest, isLoading, error } = storeToRefs(resultsStore)

const results = computed(() => {
  return getLatest.value()
})
</script>

<template>
  <div v-if="results" class="grid gap-2">
    <SingleResultPreview v-for="result in results" :key="result.matchId" :result="result" />
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">{{ error }}</div>
</template>
