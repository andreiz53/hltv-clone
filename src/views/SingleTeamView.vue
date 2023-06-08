<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useTeamsStore } from '../stores/teams'
import { storeToRefs } from 'pinia'

const route = useRoute()

const teamsStore = useTeamsStore()

const { getTeamById, isLoading, error } = storeToRefs(teamsStore)

const team = computed(() => getTeamById.value(+route.params.id))
</script>

<template>
  <div class="container">
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="team">
      <div class="team-wrapper">
        <div class="team-logo-wrapper">
          <img :src="team.logo" :alt="team.name" class="team-logo" />
        </div>
        <div class="team-name">{{ team.name }}</div>
        <div class="team-ranking">Rank: {{ team.ranking }}</div>
        <div class="team-players">
          <div class="player" v-for="player in team.players" :key="player.nickname">
            <div class="player-image-wrapper">
              <img :src="player.image" :alt="player.fullname" class="player-image" />
            </div>
            <div class="player-info">
              <div class="player-country">
                <img :src="player.country.flag" :alt="player.country.name" />
                <span class="player-country-name">{{ player.country.name }}</span>
              </div>
              <span class="player-name">{{ player.fullname }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-logo {
  @apply w-16 mx-auto;
}
.team-name {
  @apply text-center font-semibold;
}
.team-ranking {
  @apply text-center text-base;
}
.team-players {
  @apply mt-4 grid grid-cols-5 gap-4;
}
.player {
  @apply bg-primary-200 rounded-lg;
}
.player-image {
  @apply w-full rounded-t-lg;
}
.player-info {
  @apply flex justify-center flex-col items-center my-4 px-2;
}
.player-name {
  @apply text-center text-lg font-semibold mt-2;
}
.player-country {
  @apply flex items-center justify-center gap-2;
}
.player-country-name {
  @apply text-lg font-semibold;
}
</style>
