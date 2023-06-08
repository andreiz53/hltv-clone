<template>
  <header class="header">
    <nav class="nav-menu">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/news" class="nav-link">News</RouterLink>
      <RouterLink to="/results" class="nav-link">Results</RouterLink>
      <RouterLink to="/teams" class="nav-link">Teams</RouterLink>
    </nav>
  </header>
</template>
<script setup></script>

<style scoped>
.nav-link {
  @apply inline-block py-1 px-8 transition text-primary-800 border border-primary-800 rounded-xl uppercase text-xs tracking-wider hover:bg-primary-800 hover:text-primary-100 font-semibold;
}
.nav-menu {
  @apply container mx-auto font-semibold flex items-center gap-4 justify-center py-4 bg-primary-100 rounded-2xl shadow-md shadow-primary-50;
}
.header {
  @apply fixed top-4 w-full;
}
.router-link-active {
  @apply bg-primary-800 text-primary-100 font-bold;
}
</style>
