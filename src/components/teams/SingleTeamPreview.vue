<script setup>
defineProps(['team'])
</script>

<template>
  <router-link :to="`/teams/${team.id}`" class="team-wrapper">
    <div class="team-image-wrapper">
      <img :src="team.logo" :alt="team.name" class="team-image" />
    </div>
    <div class="team-name">{{ team.name }}</div>
  </router-link>
</template>

<style scoped>
.team-wrapper {
  @apply bg-primary-200 rounded-lg text-center py-4 hover:bg-primary-300 transition;
}
.team-image {
  @apply w-32 mx-auto mb-4;
}
.team-name {
  @apply font-semibold text-xl;
}
</style>
