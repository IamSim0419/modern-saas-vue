<script lang="ts" setup>
import AppNavbar from "@/sections/AppNavbar.vue";
</script>

<template>
  <div class="appLayout">
    <AppNavbar />
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.appLayout {
  @apply flex flex-col overflow-hidden;
}

h1 {
  color: var(--color-washedBlue-600);
  @apply bg-lime-300;
}
</style>
