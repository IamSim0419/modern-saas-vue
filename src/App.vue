<script lang="ts" setup>
import AppNavbar from "@/sections/AppNavbar.vue";
import HeroSection from "@/sections/HeroSection.vue";
</script>

<template>
  <div class="appLayout bg-gray-200">
    <AppNavbar />
    <HeroSection />
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.appLayout {
  @apply overflow-hidden;
}
</style>
