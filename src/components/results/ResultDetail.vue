<script setup>
defineProps(['result'])
</script>

<template>
  <router-link :to="`/results/${result.matchId}`" class="result-container">
    <div class="result-event">
      {{ result.event.name }}
    </div>
    <div class="result-teams">
      <div class="result-team">
        <div class="team-logo-container">
          <img class="team-logo" :src="result.teams[0].logo" :alt="result.teams[0].name" />
        </div>
        <div class="team-name">{{ result.teams[0].name }}</div>
      </div>
      <div class="result-team">
        <div class="team-logo-container">
          <img class="team-logo" :src="result.teams[1].logo" :alt="result.teams[1].name" />
        </div>
        <div class="team-name">{{ result.teams[1].name }}</div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.result-container {
  @apply bg-primary-200 py-8 px-4 rounded-lg flex flex-col outline-double outline-transparent hover:outline-double hover:outline-2 hover:outline-primary-300 transition-all;
}
.result-container:hover .result-event,
.result-container:hover .team-name {
  @apply text-white;
}
.result-event {
  @apply text-lg font-semibold text-center transition;
}
.result-teams {
  @apply grid grid-cols-2 gap-2 mt-auto pt-4;
}
.team-logo {
  @apply w-16 aspect-square object-contain object-center mx-auto;
}
.team-name {
  @apply text-center text-lg font-bold mt-2 transition;
}
</style>
