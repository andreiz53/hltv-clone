<script setup>
import { useRoute } from 'vue-router'
import { useResultsStore } from '../stores/results'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const route = useRoute()
const resultsStore = useResultsStore()

const { getResultById, isLoading, error } = storeToRefs(resultsStore)

const result = computed(() => getResultById.value(+route.params.id))
</script>

<template>
  <div class="container">
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="result" class="result-container">
      <div class="event">
        <div class="event-logo-container">
          <img class="event-logo" :src="result.event.logo" :alt="result.event.name" />
        </div>
        <div class="event-name">{{ result.event.name }}</div>
      </div>
      <div class="result-time">{{ new Date(result.time).toDateString() }}</div>
      <div class="result-info">
        <div class="result-maps">{{ result.maps }}</div>
        <div class="result-teams">
          <div class="team">
            <div class="team-logo-wrapper">
              <img class="team-logo" :src="result.teams[0].logo" :alt="result.teams[0].name" />
            </div>
            <div class="team-name">
              {{ result.teams[0].name }}
            </div>
            <div class="team-score">
              {{ result.teams[0].result }}
            </div>
          </div>
          <div class="team">
            <div class="team-logo-wrapper">
              <img class="team-logo" :src="result.teams[1].logo" :alt="result.teams[1].name" />
            </div>
            <div class="team-name">
              {{ result.teams[1].name }}
            </div>
            <div class="team-score">
              {{ result.teams[1].result }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-logo {
  @apply w-20 mx-auto mb-4;
}
.event-name {
  @apply text-center font-semibold;
}
.result-time {
  @apply text-center text-lg font-semibold mt-2 mb-8;
}
.result-info {
  @apply bg-primary-200 rounded-lg pt-2 pb-4 max-w-xl mx-auto;
}
.result-maps {
  @apply text-center text-lg font-bold mb-8;
}
.result-teams {
  @apply grid grid-cols-2 gap-8 px-6;
}
.team-logo {
  @apply w-16 aspect-square object-contain object-center mx-auto mb-4;
}
.team-name {
  @apply text-center text-xl font-semibold mb-4;
}
.team-score {
  @apply text-center;
}
</style>
