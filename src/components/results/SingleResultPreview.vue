<script setup>
defineProps(['result'])
</script>

<template>
  <div class="result-container">
    <div class="result-team-container">
      <p class="result-team">{{ result.teams[0].name }}</p>
      <p class="result-score">{{ result.teams[0].result }}</p>
    </div>
    <div class="result-team-container">
      <p class="result-team">{{ result.teams[1].name }}</p>
      <p class="result-score">{{ result.teams[1].result }}</p>
    </div>
  </div>
</template>

<style scoped>
.result-team-container {
  @apply flex justify-between items-center;
}
.result-container {
  @apply grid gap-1 bg-primary-200 rounded py-1 px-2;
}
.result-team {
  @apply text-base font-semibold;
}
.result-score {
  @apply text-base;
}
</style>
