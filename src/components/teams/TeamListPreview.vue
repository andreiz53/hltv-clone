<script setup>
import { storeToRefs } from 'pinia'
import { useTeamsStore } from '../../stores/teams'
import SingleTeamPreview from './SingleTeamPreview.vue'

const teamsStore = useTeamsStore()

const { data: teams, isLoading, error } = storeToRefs(teamsStore)
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="teams.value" class="team-list-wrapper">
    <SingleTeamPreview v-for="team in teams.value" :key="team.id" :team="team" />
  </div>
</template>

<style scoped>
.team-list-wrapper {
  @apply grid grid-cols-5 gap-4;
}
</style>
