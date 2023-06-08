<script setup>
import { storeToRefs } from 'pinia'
import { usePlayersStore } from '../../stores/players'

const playersStore = usePlayersStore()

const { data: player, isLoading, error } = storeToRefs(playersStore)
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="player.value">
    <div class="image-wrapper">
      <img class="player-image" :src="player.value.image" :alt="player.value.name" />
    </div>
    <p class="nickname">{{ player.value.nickname }}</p>
    <p class="name">{{ player.value.name }}</p>
    <div class="stats-wrapper">
      <p class="stat">
        Age: <span>{{ player.value.age }}</span>
      </p>
      <p class="stat">
        Rating: <span>{{ player.value.rating }}</span>
      </p>
      <p class="stat">
        Impact: <span>{{ player.value.impact }}</span>
      </p>
      <p class="stat">
        ADR: <span>{{ player.value.adr }}</span>
      </p>
      <p class="stat">
        KAST: <span>{{ player.value.kast }}%</span>
      </p>
      <p class="stat">
        HS: <span>{{ player.value.headshots }}%</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  @apply max-w-[140px] mb-2;
}
.player-image {
  @apply object-contain object-top bg-primary-200 rounded-xl;
}
.nickname {
  @apply font-bold text-2xl;
}
.name {
  @apply text-base font-semibold mb-2;
}
.stats-wrapper {
  @apply flex flex-wrap gap-2;
}
.stat {
  @apply text-base py-1 px-3 bg-primary-200 rounded-lg;
}
.stat > span {
  @apply font-bold;
}
</style>
