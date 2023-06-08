<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <div id="page-container">
    <RouterView />
  </div>
</template>

<style>
#page-container {
  @apply min-h-screen bg-primary-200 py-32 px-16;
}
</style>
